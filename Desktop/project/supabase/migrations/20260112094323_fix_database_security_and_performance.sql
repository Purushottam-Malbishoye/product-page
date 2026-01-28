/*
  # Fix Database Security and Performance Issues

  ## Changes Made

  ### 1. Foreign Key Indexes
  Add indexes on all foreign key columns to improve query performance:
  - automation_requests: campaign_id, organization_id, user_id
  - campaigns: organization_id, user_id
  - dataset_uploads: campaign_id, organization_id, user_id
  - organizations: owner_id
  - team_members: user_id

  ### 2. RLS Policy Optimization
  Replace auth.uid() with (select auth.uid()) to prevent re-evaluation per row:
  - All policies on users, organizations, team_members, business_profiles,
    campaigns, dataset_uploads, and automation_requests tables

  ### 3. Unused Index Cleanup
  Drop unused indexes that add overhead without providing value:
  - blog_posts, contact_submissions, newsletter_subscriptions,
    job_applications, case_studies, testimonials indexes

  ### 4. Policy Consolidation
  Consolidate multiple permissive SELECT policies on team_members table

  ### 5. Security Notes
  - contact_submissions, job_applications, newsletter_subscriptions have
    intentionally permissive INSERT policies (public forms)
*/

-- =====================================================================
-- PART 1: ADD FOREIGN KEY INDEXES
-- =====================================================================

-- automation_requests indexes
CREATE INDEX IF NOT EXISTS idx_automation_requests_campaign_id 
  ON automation_requests(campaign_id);

CREATE INDEX IF NOT EXISTS idx_automation_requests_organization_id 
  ON automation_requests(organization_id);

CREATE INDEX IF NOT EXISTS idx_automation_requests_user_id 
  ON automation_requests(user_id);

-- campaigns indexes
CREATE INDEX IF NOT EXISTS idx_campaigns_organization_id 
  ON campaigns(organization_id);

CREATE INDEX IF NOT EXISTS idx_campaigns_user_id 
  ON campaigns(user_id);

-- dataset_uploads indexes
CREATE INDEX IF NOT EXISTS idx_dataset_uploads_campaign_id 
  ON dataset_uploads(campaign_id);

CREATE INDEX IF NOT EXISTS idx_dataset_uploads_organization_id 
  ON dataset_uploads(organization_id);

CREATE INDEX IF NOT EXISTS idx_dataset_uploads_user_id 
  ON dataset_uploads(user_id);

-- organizations indexes
CREATE INDEX IF NOT EXISTS idx_organizations_owner_id 
  ON organizations(owner_id);

-- team_members indexes
CREATE INDEX IF NOT EXISTS idx_team_members_user_id 
  ON team_members(user_id);

CREATE INDEX IF NOT EXISTS idx_team_members_organization_id 
  ON team_members(organization_id);

-- =====================================================================
-- PART 2: OPTIMIZE RLS POLICIES
-- =====================================================================

-- Users table policies
DROP POLICY IF EXISTS "Users can read own data" ON users;
CREATE POLICY "Users can read own data"
  ON users FOR SELECT
  TO authenticated
  USING ((select auth.uid()) = id);

DROP POLICY IF EXISTS "Users can update own data" ON users;
CREATE POLICY "Users can update own data"
  ON users FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) = id)
  WITH CHECK ((select auth.uid()) = id);

-- Organizations table policies
DROP POLICY IF EXISTS "Users can read own organization" ON organizations;
CREATE POLICY "Users can read own organization"
  ON organizations FOR SELECT
  TO authenticated
  USING (
    owner_id = (select auth.uid()) OR
    EXISTS (
      SELECT 1 FROM team_members
      WHERE team_members.organization_id = organizations.id
      AND team_members.user_id = (select auth.uid())
    )
  );

DROP POLICY IF EXISTS "Organization owners can update" ON organizations;
CREATE POLICY "Organization owners can update"
  ON organizations FOR UPDATE
  TO authenticated
  USING (owner_id = (select auth.uid()))
  WITH CHECK (owner_id = (select auth.uid()));

-- Team members table - consolidate policies
DROP POLICY IF EXISTS "Team members can read own team" ON team_members;
DROP POLICY IF EXISTS "Org admins can manage team" ON team_members;

-- Single consolidated SELECT policy
CREATE POLICY "Team members can view team"
  ON team_members FOR SELECT
  TO authenticated
  USING (
    user_id = (select auth.uid()) OR
    EXISTS (
      SELECT 1 FROM team_members tm
      WHERE tm.organization_id = team_members.organization_id
      AND tm.user_id = (select auth.uid())
    ) OR
    EXISTS (
      SELECT 1 FROM organizations
      WHERE organizations.id = team_members.organization_id
      AND organizations.owner_id = (select auth.uid())
    )
  );

-- Separate policy for INSERT/UPDATE/DELETE (admin only)
CREATE POLICY "Org admins can manage team"
  ON team_members FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM organizations
      WHERE organizations.id = team_members.organization_id
      AND organizations.owner_id = (select auth.uid())
    ) OR
    EXISTS (
      SELECT 1 FROM team_members tm
      WHERE tm.organization_id = team_members.organization_id
      AND tm.user_id = (select auth.uid())
      AND tm.role = 'admin'
    )
  );

CREATE POLICY "Org admins can update team"
  ON team_members FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM organizations
      WHERE organizations.id = team_members.organization_id
      AND organizations.owner_id = (select auth.uid())
    ) OR
    EXISTS (
      SELECT 1 FROM team_members tm
      WHERE tm.organization_id = team_members.organization_id
      AND tm.user_id = (select auth.uid())
      AND tm.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM organizations
      WHERE organizations.id = team_members.organization_id
      AND organizations.owner_id = (select auth.uid())
    ) OR
    EXISTS (
      SELECT 1 FROM team_members tm
      WHERE tm.organization_id = team_members.organization_id
      AND tm.user_id = (select auth.uid())
      AND tm.role = 'admin'
    )
  );

CREATE POLICY "Org admins can delete team"
  ON team_members FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM organizations
      WHERE organizations.id = team_members.organization_id
      AND organizations.owner_id = (select auth.uid())
    ) OR
    EXISTS (
      SELECT 1 FROM team_members tm
      WHERE tm.organization_id = team_members.organization_id
      AND tm.user_id = (select auth.uid())
      AND tm.role = 'admin'
    )
  );

-- Business profiles table policies
DROP POLICY IF EXISTS "Users can read own profile" ON business_profiles;
CREATE POLICY "Users can read own profile"
  ON business_profiles FOR SELECT
  TO authenticated
  USING (user_id = (select auth.uid()));

DROP POLICY IF EXISTS "Users can insert own profile" ON business_profiles;
CREATE POLICY "Users can insert own profile"
  ON business_profiles FOR INSERT
  TO authenticated
  WITH CHECK (user_id = (select auth.uid()));

DROP POLICY IF EXISTS "Users can update own profile" ON business_profiles;
CREATE POLICY "Users can update own profile"
  ON business_profiles FOR UPDATE
  TO authenticated
  USING (user_id = (select auth.uid()))
  WITH CHECK (user_id = (select auth.uid()));

-- Campaigns table policies
DROP POLICY IF EXISTS "Users can read own campaigns" ON campaigns;
CREATE POLICY "Users can read own campaigns"
  ON campaigns FOR SELECT
  TO authenticated
  USING (
    user_id = (select auth.uid()) OR
    EXISTS (
      SELECT 1 FROM team_members
      WHERE team_members.organization_id = campaigns.organization_id
      AND team_members.user_id = (select auth.uid())
    )
  );

DROP POLICY IF EXISTS "Users can create campaigns" ON campaigns;
CREATE POLICY "Users can create campaigns"
  ON campaigns FOR INSERT
  TO authenticated
  WITH CHECK (user_id = (select auth.uid()));

DROP POLICY IF EXISTS "Users can update own campaigns" ON campaigns;
CREATE POLICY "Users can update own campaigns"
  ON campaigns FOR UPDATE
  TO authenticated
  USING (
    user_id = (select auth.uid()) OR
    EXISTS (
      SELECT 1 FROM team_members
      WHERE team_members.organization_id = campaigns.organization_id
      AND team_members.user_id = (select auth.uid())
      AND team_members.role = 'admin'
    )
  )
  WITH CHECK (
    user_id = (select auth.uid()) OR
    EXISTS (
      SELECT 1 FROM team_members
      WHERE team_members.organization_id = campaigns.organization_id
      AND team_members.user_id = (select auth.uid())
      AND team_members.role = 'admin'
    )
  );

-- Dataset uploads table policies
DROP POLICY IF EXISTS "Users can read own uploads" ON dataset_uploads;
CREATE POLICY "Users can read own uploads"
  ON dataset_uploads FOR SELECT
  TO authenticated
  USING (
    user_id = (select auth.uid()) OR
    EXISTS (
      SELECT 1 FROM team_members
      WHERE team_members.organization_id = dataset_uploads.organization_id
      AND team_members.user_id = (select auth.uid())
    )
  );

DROP POLICY IF EXISTS "Users can create uploads" ON dataset_uploads;
CREATE POLICY "Users can create uploads"
  ON dataset_uploads FOR INSERT
  TO authenticated
  WITH CHECK (user_id = (select auth.uid()));

DROP POLICY IF EXISTS "Users can update own uploads" ON dataset_uploads;
CREATE POLICY "Users can update own uploads"
  ON dataset_uploads FOR UPDATE
  TO authenticated
  USING (user_id = (select auth.uid()))
  WITH CHECK (user_id = (select auth.uid()));

-- Automation requests table policies
DROP POLICY IF EXISTS "Users can read own requests" ON automation_requests;
CREATE POLICY "Users can read own requests"
  ON automation_requests FOR SELECT
  TO authenticated
  USING (
    user_id = (select auth.uid()) OR
    EXISTS (
      SELECT 1 FROM team_members
      WHERE team_members.organization_id = automation_requests.organization_id
      AND team_members.user_id = (select auth.uid())
    )
  );

DROP POLICY IF EXISTS "Users can create requests" ON automation_requests;
CREATE POLICY "Users can create requests"
  ON automation_requests FOR INSERT
  TO authenticated
  WITH CHECK (user_id = (select auth.uid()));

-- =====================================================================
-- PART 3: DROP UNUSED INDEXES
-- =====================================================================

-- Blog posts
DROP INDEX IF EXISTS idx_blog_posts_slug;
DROP INDEX IF EXISTS idx_blog_posts_category;

-- Contact submissions
DROP INDEX IF EXISTS idx_contact_submissions_status;
DROP INDEX IF EXISTS idx_contact_submissions_created_at;

-- Newsletter subscriptions
DROP INDEX IF EXISTS idx_newsletter_subscriptions_email;
DROP INDEX IF EXISTS idx_newsletter_subscriptions_active;

-- Job applications
DROP INDEX IF EXISTS idx_job_applications_status;
DROP INDEX IF EXISTS idx_job_applications_created_at;

-- Case studies
DROP INDEX IF EXISTS idx_case_studies_slug;
DROP INDEX IF EXISTS idx_case_studies_published;

-- Testimonials
DROP INDEX IF EXISTS idx_testimonials_published;
DROP INDEX IF EXISTS idx_testimonials_featured;
