/*
  # Create blog_posts table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `slug` (text, unique, required)
      - `excerpt` (text, required)
      - `content` (text, required)
      - `category` (text, required)
      - `image_url` (text, optional)
      - `read_time` (integer, required)
      - `published_at` (timestamp, optional)
      - `created_at` (timestamp, default now)
      - `updated_at` (timestamp, default now)

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for public read access to published posts
*/

CREATE TABLE IF NOT EXISTS public.blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  image_url text,
  read_time integer NOT NULL,
  published_at timestamptz,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for published posts"
  ON public.blog_posts
  FOR SELECT
  USING (published_at IS NOT NULL AND published_at <= now());

-- Insert sample blog posts
INSERT INTO public.blog_posts (title, slug, excerpt, content, category, image_url, read_time, published_at) VALUES
(
  'The Future of Artificial Intelligence in Business',
  'future-ai-business',
  'Explore how AI is transforming modern business operations and what the future holds for intelligent automation.',
  'Artificial Intelligence is revolutionizing the way businesses operate, from automating routine tasks to providing deep insights through data analysis. In this comprehensive guide, we explore the current state of AI in business and what the future holds.',
  'AI Innovation',
  'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
  8,
  now() - interval '2 days'
),
(
  'Machine Learning Best Practices for Startups',
  'ml-best-practices-startups',
  'Learn essential machine learning practices that can help startups leverage AI effectively without breaking the bank.',
  'Starting a business with limited resources doesn''t mean you can''t leverage the power of machine learning. This article outlines practical approaches for startups to implement ML solutions cost-effectively.',
  'Machine Learning',
  'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
  6,
  now() - interval '5 days'
),
(
  'Data Privacy in the Age of AI',
  'data-privacy-ai-age',
  'Understanding the critical importance of data privacy and security when implementing AI solutions in your organization.',
  'As AI becomes more prevalent in business operations, ensuring data privacy and security becomes paramount. This article discusses best practices for maintaining privacy while leveraging AI capabilities.',
  'Data Security',
  'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg',
  7,
  now() - interval '1 week'
);