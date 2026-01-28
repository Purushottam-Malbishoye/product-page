/*
  # Add v177 Audience Targeting Fields to Campaigns

  1. New Columns
    - audience_targeting (jsonb) - Stores v177 targeting data
    - email_template_id (text) - Email template identifier
    - ai_sdr_url (text) - AI SDR database URL
  
  2. Backward Compatibility
    - All new fields are nullable with defaults
    - Existing campaigns remain unchanged
*/

-- Add audience_targeting column to store v177 advanced targeting fields
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'campaigns' AND column_name = 'audience_targeting'
  ) THEN
    ALTER TABLE campaigns ADD COLUMN audience_targeting jsonb DEFAULT '{}'::jsonb;
  END IF;
END $$;

-- Add email_template_id column
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'campaigns' AND column_name = 'email_template_id'
  ) THEN
    ALTER TABLE campaigns ADD COLUMN email_template_id text;
  END IF;
END $$;

-- Add ai_sdr_url column for AI SDR database source
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'campaigns' AND column_name = 'ai_sdr_url'
  ) THEN
    ALTER TABLE campaigns ADD COLUMN ai_sdr_url text;
  END IF;
END $$;

-- Create index on audience_targeting for better query performance
CREATE INDEX IF NOT EXISTS idx_campaigns_audience_targeting 
  ON campaigns USING GIN (audience_targeting);
