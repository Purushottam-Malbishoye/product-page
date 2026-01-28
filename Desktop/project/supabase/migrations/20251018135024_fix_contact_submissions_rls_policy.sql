/*
  # Fix Contact Submissions RLS Policy

  ## Changes
  - Drop the existing policy that's not working correctly
  - Create a new INSERT-specific policy that allows anyone (both anon and authenticated) to submit contact forms
  
  ## Security
  - Allows public submissions via INSERT only
  - No read access for public users
  - Admin access will require authentication (for future admin panel)
*/

-- Drop the existing policy
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON contact_submissions;

-- Create new INSERT policy for anonymous users
CREATE POLICY "Allow anonymous contact form submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);