/*
  # Fix Contact Submissions RLS Policy - Final Fix

  ## Changes
  - Drop all existing policies on contact_submissions table
  - Create a single, properly configured INSERT policy for anonymous and authenticated users
  - Use explicit INSERT command with WITH CHECK clause only
  
  ## Security
  - Allows public to INSERT contact form submissions
  - No SELECT/UPDATE/DELETE access for public users
  - Data can only be inserted, not queried by public
*/

-- Drop all existing policies
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON contact_submissions;
DROP POLICY IF EXISTS "Allow anonymous contact form submissions" ON contact_submissions;

-- Create INSERT-only policy with explicit syntax
CREATE POLICY "Enable insert for anonymous users"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);