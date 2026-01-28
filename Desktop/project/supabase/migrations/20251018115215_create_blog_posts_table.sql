/*
  # Create blog_posts table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key) - Unique identifier for each blog post
      - `title` (text, not null) - Blog post title
      - `slug` (text, unique, not null) - URL-friendly slug for the blog post
      - `excerpt` (text, not null) - Short summary/preview of the blog post
      - `content` (text, not null) - Full blog post content
      - `category` (text, not null) - Blog post category (e.g., AI, Cloud, Security)
      - `image_url` (text, optional) - URL to the featured image
      - `read_time` (integer, not null, default 5) - Estimated reading time in minutes
      - `published_at` (timestamptz, optional) - When the post was published
      - `created_at` (timestamptz, default now()) - When the record was created
      - `updated_at` (timestamptz, default now()) - When the record was last updated

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for public read access (blog posts are public content)
    - Authenticated users cannot modify blog posts (admin-only via service role)

  3. Indexes
    - Add index on `slug` for fast lookups
    - Add index on `category` for filtering
    - Add index on `published_at` for sorting
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  image_url text,
  read_time integer NOT NULL DEFAULT 5,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read blog posts (they are public content)
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  USING (published_at IS NOT NULL AND published_at <= now());

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, category, image_url, read_time, published_at)
VALUES
  (
    'The Future of AI in Enterprise Software',
    'future-of-ai-enterprise-software',
    'Exploring how artificial intelligence is transforming enterprise software development and business operations.',
    'Artificial intelligence is revolutionizing how enterprises build and deploy software...',
    'AI & Machine Learning',
    'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    8,
    now()
  ),
  (
    'Cloud Migration Best Practices for 2024',
    'cloud-migration-best-practices-2024',
    'A comprehensive guide to successfully migrating your infrastructure to the cloud with minimal disruption.',
    'Cloud migration is no longer optional for modern businesses...',
    'Cloud Computing',
    'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    6,
    now()
  ),
  (
    'Cybersecurity Trends Every CTO Should Know',
    'cybersecurity-trends-cto-should-know',
    'Stay ahead of emerging threats with insights into the latest cybersecurity trends and protection strategies.',
    'In an increasingly digital world, cybersecurity has become paramount...',
    'Cybersecurity',
    'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    7,
    now()
  )
ON CONFLICT (slug) DO NOTHING;