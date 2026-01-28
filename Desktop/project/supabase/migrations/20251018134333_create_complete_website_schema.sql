/*
  # Complete Database Schema for First Science AI Website

  ## Overview
  This migration creates a comprehensive database structure for the AI consulting website
  including contact management, newsletter subscriptions, job applications, case studies,
  and testimonials.

  ## New Tables

  ### 1. `contact_submissions`
  Stores contact form submissions from potential clients
  - `id` (uuid, primary key)
  - `name` (text) - Full name of contact
  - `email` (text) - Contact email
  - `company` (text, optional) - Company name
  - `message` (text) - Contact message
  - `status` (text) - Status: 'new', 'contacted', 'completed'
  - `created_at` (timestamptz) - Submission timestamp

  ### 2. `newsletter_subscriptions`
  Manages newsletter email subscriptions
  - `id` (uuid, primary key)
  - `email` (text, unique) - Subscriber email
  - `is_active` (boolean) - Subscription status
  - `subscribed_at` (timestamptz) - Subscription date
  - `unsubscribed_at` (timestamptz, optional) - Unsubscribe date

  ### 3. `job_applications`
  Stores job application submissions
  - `id` (uuid, primary key)
  - `full_name` (text) - Applicant name
  - `email` (text) - Contact email
  - `phone` (text, optional) - Phone number
  - `position` (text) - Applied position
  - `resume_url` (text, optional) - Resume file URL
  - `cover_letter` (text, optional) - Cover letter content
  - `status` (text) - Status: 'new', 'reviewing', 'interviewing', 'accepted', 'rejected'
  - `created_at` (timestamptz) - Application date

  ### 4. `case_studies`
  Stores detailed case studies and success stories
  - `id` (uuid, primary key)
  - `title` (text) - Case study title
  - `slug` (text, unique) - URL-friendly slug
  - `client_name` (text) - Client/company name
  - `industry` (text) - Industry sector
  - `challenge` (text) - Problem description
  - `solution` (text) - Solution provided
  - `results` (text) - Outcome and metrics
  - `image_url` (text, optional) - Featured image
  - `is_published` (boolean) - Published status
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 5. `testimonials`
  Client testimonials and reviews
  - `id` (uuid, primary key)
  - `client_name` (text) - Client name
  - `client_title` (text) - Job title
  - `client_company` (text) - Company name
  - `content` (text) - Testimonial text
  - `rating` (integer) - Rating 1-5
  - `image_url` (text, optional) - Client photo
  - `is_featured` (boolean) - Feature on homepage
  - `is_published` (boolean) - Published status
  - `created_at` (timestamptz)

  ## Security
  - RLS enabled on all tables
  - Public read access for published content (case studies, testimonials)
  - Form submissions are insert-only for public users
  - Full access for authenticated admin users (future admin panel)

  ## Notes
  - All timestamps use UTC timezone
  - Email fields should be validated at application level
  - Status fields use predefined values for consistency
  - Indexes added for frequently queried fields
*/

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Create newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  is_active boolean DEFAULT true,
  subscribed_at timestamptz DEFAULT now(),
  unsubscribed_at timestamptz
);

-- Create job_applications table
CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  position text NOT NULL,
  resume_url text,
  cover_letter text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Create case_studies table
CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  client_name text NOT NULL,
  industry text NOT NULL,
  challenge text NOT NULL,
  solution text NOT NULL,
  results text NOT NULL,
  image_url text,
  is_published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_title text NOT NULL,
  client_company text NOT NULL,
  content text NOT NULL,
  rating integer NOT NULL DEFAULT 5,
  image_url text,
  is_featured boolean DEFAULT false,
  is_published boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_active ON newsletter_subscriptions(is_active);
CREATE INDEX IF NOT EXISTS idx_job_applications_status ON job_applications(status);
CREATE INDEX IF NOT EXISTS idx_job_applications_created_at ON job_applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_case_studies_slug ON case_studies(slug);
CREATE INDEX IF NOT EXISTS idx_case_studies_published ON case_studies(is_published);
CREATE INDEX IF NOT EXISTS idx_testimonials_published ON testimonials(is_published);
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(is_featured);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- RLS Policies for contact_submissions
-- Allow anyone to submit contact forms
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- RLS Policies for newsletter_subscriptions
-- Allow anyone to subscribe
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscriptions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow users to check if email is subscribed (for UI feedback)
CREATE POLICY "Anyone can view subscription status"
  ON newsletter_subscriptions
  FOR SELECT
  TO anon
  USING (true);

-- RLS Policies for job_applications
-- Allow anyone to submit applications
CREATE POLICY "Anyone can submit job applications"
  ON job_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- RLS Policies for case_studies
-- Allow anyone to view published case studies
CREATE POLICY "Anyone can view published case studies"
  ON case_studies
  FOR SELECT
  TO anon
  USING (is_published = true);

-- RLS Policies for testimonials
-- Allow anyone to view published testimonials
CREATE POLICY "Anyone can view published testimonials"
  ON testimonials
  FOR SELECT
  TO anon
  USING (is_published = true);

-- Add constraints for data validation
ALTER TABLE testimonials ADD CONSTRAINT testimonials_rating_check CHECK (rating >= 1 AND rating <= 5);
ALTER TABLE contact_submissions ADD CONSTRAINT contact_status_check CHECK (status IN ('new', 'contacted', 'completed'));
ALTER TABLE job_applications ADD CONSTRAINT job_status_check CHECK (status IN ('new', 'reviewing', 'interviewing', 'accepted', 'rejected'));