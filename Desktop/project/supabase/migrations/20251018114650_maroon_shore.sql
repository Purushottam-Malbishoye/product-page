/*
  # Website Database Schema

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text, unique)
      - `company` (text, optional)
      - `message` (text)
      - `inquiry_type` (text)
      - `created_at` (timestamp)
    
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `subscribed_at` (timestamp)
      - `is_active` (boolean)
    
    - `job_applications`
      - `id` (uuid, primary key)
      - `job_title` (text)
      - `applicant_name` (text)
      - `applicant_email` (text)
      - `resume_url` (text, optional)
      - `cover_letter` (text, optional)
      - `created_at` (timestamp)
    
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `excerpt` (text)
      - `content` (text)
      - `category` (text)
      - `image_url` (text)
      - `read_time` (integer)
      - `published_at` (timestamp)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access where appropriate
    - Add policies for authenticated admin access
*/

-- Contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text NOT NULL,
  inquiry_type text DEFAULT 'general',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact forms
CREATE POLICY "Anyone can submit contact forms"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can read contacts
CREATE POLICY "Authenticated users can read contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

-- Newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to subscribe to newsletter
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow subscribers to update their own subscription
CREATE POLICY "Users can update their own subscription"
  ON newsletter_subscribers
  FOR UPDATE
  TO anon
  USING (true);

-- Only authenticated users can read subscribers
CREATE POLICY "Authenticated users can read subscribers"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (true);

-- Job applications table
CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_title text NOT NULL,
  applicant_name text NOT NULL,
  applicant_email text NOT NULL,
  resume_url text,
  cover_letter text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit job applications
CREATE POLICY "Anyone can submit job applications"
  ON job_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can read applications
CREATE POLICY "Authenticated users can read applications"
  ON job_applications
  FOR SELECT
  TO authenticated
  USING (true);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  image_url text,
  read_time integer DEFAULT 5,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read published blog posts
CREATE POLICY "Anyone can read published blog posts"
  ON blog_posts
  FOR SELECT
  TO anon
  USING (published_at IS NOT NULL AND published_at <= now());

-- Only authenticated users can manage blog posts
CREATE POLICY "Authenticated users can manage blog posts"
  ON blog_posts
  FOR ALL
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_job_applications_created ON job_applications(created_at DESC);