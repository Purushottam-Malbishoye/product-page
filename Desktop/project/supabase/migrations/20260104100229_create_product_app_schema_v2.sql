/*
  # Create Product App Schema

  1. New Tables
    - `users` - User accounts
    - `organizations` - Business organizations
    - `business_profiles` - User profile completion data
    - `campaigns` - Campaign configurations and ICP data
    - `dataset_uploads` - CSV upload tracking and validation
    - `automation_requests` - Campaign automation requests
    - `team_members` - Organization team membership

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to access their own data
*/

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Organizations table (without team_members reference in policy yet)
CREATE TABLE IF NOT EXISTS organizations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  owner_id uuid REFERENCES users(id) NOT NULL,
  manyreach_connected boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;

-- Team members table (create before adding org policies that reference it)
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid REFERENCES organizations(id) NOT NULL,
  user_id uuid REFERENCES users(id) NOT NULL,
  role text DEFAULT 'member',
  invited_at timestamptz DEFAULT now(),
  joined_at timestamptz,
  UNIQUE(organization_id, user_id)
);

ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

-- Now add organization policies
CREATE POLICY "Users can read own organization"
  ON organizations FOR SELECT
  TO authenticated
  USING (
    owner_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM team_members
      WHERE team_members.organization_id = organizations.id
      AND team_members.user_id = auth.uid()
    )
  );

CREATE POLICY "Organization owners can update"
  ON organizations FOR UPDATE
  TO authenticated
  USING (owner_id = auth.uid())
  WITH CHECK (owner_id = auth.uid());

-- Team members policies
CREATE POLICY "Team members can read own team"
  ON team_members FOR SELECT
  TO authenticated
  USING (
    user_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM team_members tm
      WHERE tm.organization_id = team_members.organization_id
      AND tm.user_id = auth.uid()
    )
  );

CREATE POLICY "Org admins can manage team"
  ON team_members FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM organizations
      WHERE organizations.id = team_members.organization_id
      AND organizations.owner_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM team_members tm
      WHERE tm.organization_id = team_members.organization_id
      AND tm.user_id = auth.uid()
      AND tm.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM organizations
      WHERE organizations.id = team_members.organization_id
      AND organizations.owner_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM team_members tm
      WHERE tm.organization_id = team_members.organization_id
      AND tm.user_id = auth.uid()
      AND tm.role = 'admin'
    )
  );

-- Business profiles table
CREATE TABLE IF NOT EXISTS business_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) UNIQUE NOT NULL,
  name text NOT NULL,
  phone text NOT NULL,
  industry text,
  designation text NOT NULL,
  department text,
  marketing_budget text NOT NULL,
  target_segment jsonb DEFAULT '[]'::jsonb,
  is_complete boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE business_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile"
  ON business_profiles FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own profile"
  ON business_profiles FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own profile"
  ON business_profiles FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Campaigns table
CREATE TABLE IF NOT EXISTS campaigns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) NOT NULL,
  organization_id uuid REFERENCES organizations(id) NOT NULL,
  name text NOT NULL,
  target_segment jsonb DEFAULT '[]'::jsonb,
  industries jsonb DEFAULT '[]'::jsonb,
  departments jsonb DEFAULT '[]'::jsonb,
  geography text,
  company_size text,
  personas jsonb DEFAULT '[]'::jsonb,
  sender_domain_type text,
  sender_domain text,
  dataset_source text,
  status text DEFAULT 'pending',
  manyreach_campaign_id text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own campaigns"
  ON campaigns FOR SELECT
  TO authenticated
  USING (
    user_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM team_members
      WHERE team_members.organization_id = campaigns.organization_id
      AND team_members.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create campaigns"
  ON campaigns FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own campaigns"
  ON campaigns FOR UPDATE
  TO authenticated
  USING (
    user_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM team_members
      WHERE team_members.organization_id = campaigns.organization_id
      AND team_members.user_id = auth.uid()
      AND team_members.role = 'admin'
    )
  )
  WITH CHECK (
    user_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM team_members
      WHERE team_members.organization_id = campaigns.organization_id
      AND team_members.user_id = auth.uid()
      AND team_members.role = 'admin'
    )
  );

-- Dataset uploads table
CREATE TABLE IF NOT EXISTS dataset_uploads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id uuid REFERENCES campaigns(id) NOT NULL,
  user_id uuid REFERENCES users(id) NOT NULL,
  organization_id uuid REFERENCES organizations(id) NOT NULL,
  filename text NOT NULL,
  raw_storage_path text NOT NULL,
  clean_storage_path text,
  total_rows integer DEFAULT 0,
  unique_emails integer DEFAULT 0,
  duplicates_count integer DEFAULT 0,
  valid_count integer,
  invalid_count integer,
  status text DEFAULT 'uploaded',
  validation_job_id text,
  error_message text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE dataset_uploads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own uploads"
  ON dataset_uploads FOR SELECT
  TO authenticated
  USING (
    user_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM team_members
      WHERE team_members.organization_id = dataset_uploads.organization_id
      AND team_members.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create uploads"
  ON dataset_uploads FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own uploads"
  ON dataset_uploads FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Automation requests table
CREATE TABLE IF NOT EXISTS automation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) NOT NULL,
  organization_id uuid REFERENCES organizations(id) NOT NULL,
  campaign_id uuid REFERENCES campaigns(id) NOT NULL,
  type text NOT NULL,
  payload jsonb NOT NULL,
  status text DEFAULT 'pending',
  processed_at timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE automation_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own requests"
  ON automation_requests FOR SELECT
  TO authenticated
  USING (
    user_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM team_members
      WHERE team_members.organization_id = automation_requests.organization_id
      AND team_members.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create requests"
  ON automation_requests FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());