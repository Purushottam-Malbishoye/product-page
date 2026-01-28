/*
  # Complete Fix for Contact Submissions RLS

  ## Changes
  - Disable RLS temporarily
  - Drop all existing policies
  - Re-enable RLS
  - Create new INSERT policy using different syntax
  
  ## Security
  - Allows public INSERT operations only
  - No other operations allowed for public
*/

-- Disable RLS temporarily to clean up
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;

-- Drop all policies
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON contact_submissions;
DROP POLICY IF EXISTS "Allow anonymous contact form submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON contact_submissions;

-- Re-enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create INSERT policy using USING clause instead (PostgreSQL converts this properly)
CREATE POLICY "contact_insert_policy"
  ON contact_submissions
  AS PERMISSIVE
  FOR INSERT
  TO public
  WITH CHECK (true);