/*
  # Email Senders Management System

  1. New Tables
    - `email_senders`
      - `id` (uuid, primary key)
      - `organization_id` (uuid, foreign key to organizations)
      - `email` (text, unique per organization)
      - `name` (text) - Display name for the sender
      - `is_active` (boolean) - Whether sender is active and available
      - `assigned_campaign_id` (uuid, nullable) - Currently assigned campaign
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `campaign_senders` (junction table)
      - `id` (uuid, primary key)
      - `campaign_id` (uuid, foreign key to campaigns)
      - `sender_id` (uuid, foreign key to email_senders)
      - `assigned_at` (timestamptz)
  
  2. Security
    - Enable RLS on both tables
    - Users can only view senders from their organization
    - Only admins can create/update/delete senders
  
  3. Important Notes
    - A sender can only be assigned to one active campaign at a time
    - When assigning a sender, check if they're already assigned to another campaign
    - Senders are organization-specific
*/

-- Email senders table
CREATE TABLE IF NOT EXISTS email_senders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid REFERENCES organizations(id) NOT NULL,
  email text NOT NULL,
  name text NOT NULL,
  is_active boolean DEFAULT true,
  assigned_campaign_id uuid REFERENCES campaigns(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(organization_id, email)
);

ALTER TABLE email_senders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view organization senders"
  ON email_senders FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM team_members
      WHERE team_members.organization_id = email_senders.organization_id
      AND team_members.user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can create senders"
  ON email_senders FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM team_members
      WHERE team_members.organization_id = email_senders.organization_id
      AND team_members.user_id = auth.uid()
      AND team_members.role = 'admin'
    )
  );

CREATE POLICY "Admins can update senders"
  ON email_senders FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM team_members
      WHERE team_members.organization_id = email_senders.organization_id
      AND team_members.user_id = auth.uid()
      AND team_members.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM team_members
      WHERE team_members.organization_id = email_senders.organization_id
      AND team_members.user_id = auth.uid()
      AND team_members.role = 'admin'
    )
  );

CREATE POLICY "Admins can delete senders"
  ON email_senders FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM team_members
      WHERE team_members.organization_id = email_senders.organization_id
      AND team_members.user_id = auth.uid()
      AND team_members.role = 'admin'
    )
  );

-- Campaign senders junction table
CREATE TABLE IF NOT EXISTS campaign_senders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id uuid REFERENCES campaigns(id) ON DELETE CASCADE NOT NULL,
  sender_id uuid REFERENCES email_senders(id) ON DELETE CASCADE NOT NULL,
  assigned_at timestamptz DEFAULT now(),
  UNIQUE(campaign_id, sender_id)
);

ALTER TABLE campaign_senders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view campaign senders"
  ON campaign_senders FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM campaigns
      JOIN team_members ON team_members.organization_id = campaigns.organization_id
      WHERE campaigns.id = campaign_senders.campaign_id
      AND team_members.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can assign senders to their campaigns"
  ON campaign_senders FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM campaigns
      WHERE campaigns.id = campaign_senders.campaign_id
      AND campaigns.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can remove senders from their campaigns"
  ON campaign_senders FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM campaigns
      WHERE campaigns.id = campaign_senders.campaign_id
      AND campaigns.user_id = auth.uid()
    )
  );

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_email_senders_org ON email_senders(organization_id);
CREATE INDEX IF NOT EXISTS idx_email_senders_campaign ON email_senders(assigned_campaign_id);
CREATE INDEX IF NOT EXISTS idx_campaign_senders_campaign ON campaign_senders(campaign_id);
CREATE INDEX IF NOT EXISTS idx_campaign_senders_sender ON campaign_senders(sender_id);
