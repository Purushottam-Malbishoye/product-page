/*
  # Add Phone Field to Contact Submissions

  1. Changes
    - Add `phone` column to `contact_submissions` table (text, required)
    - Update existing records to have empty phone if NULL
  
  2. Notes
    - Phone field is required for all new submissions
    - This supports the Book a Demo form requirement
*/

-- Add phone column to contact_submissions table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'phone'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN phone text;
  END IF;
END $$;

-- Update existing rows to have empty string for phone
UPDATE contact_submissions SET phone = '' WHERE phone IS NULL;