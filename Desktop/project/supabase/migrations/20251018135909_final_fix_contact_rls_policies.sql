/*
  # Final Fix for Contact Submissions RLS
  
  ## Problem
  The INSERT policy is not working properly with the Supabase client
  
  ## Solution
  - Drop ALL existing policies completely
  - Create separate explicit policies for anon and authenticated roles
  - Ensure policies are specifically for INSERT command only
  
  ## Security
  - Allows anon role to INSERT only
  - Allows authenticated role to INSERT only
  - No SELECT/UPDATE/DELETE access for public
*/

-- Drop ALL existing policies completely
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Anyone can submit contact forms" ON contact_submissions;
  DROP POLICY IF EXISTS "Allow anonymous contact form submissions" ON contact_submissions;
  DROP POLICY IF EXISTS "Enable insert for anonymous users" ON contact_submissions;
  DROP POLICY IF EXISTS "contact_insert_policy" ON contact_submissions;
EXCEPTION WHEN OTHERS THEN
  RAISE NOTICE 'Error dropping policies: %', SQLERRM;
END $$;

-- Create policy for anonymous users
CREATE POLICY "anon_can_insert_contact"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy for authenticated users
CREATE POLICY "authenticated_can_insert_contact"
  ON contact_submissions
  FOR INSERT
  TO authenticated
  WITH CHECK (true);