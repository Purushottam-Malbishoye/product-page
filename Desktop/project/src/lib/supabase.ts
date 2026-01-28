import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  status: string;
  created_at: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribed_at: string;
  is_active: boolean;
  unsubscribed_at?: string;
}

export interface JobApplication {
  id: string;
  full_name: string;
  email: string;
  phone?: string;
  position: string;
  resume_url?: string;
  cover_letter?: string;
  status: string;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  image_url?: string;
  read_time: number;
  published_at?: string;
  created_at: string;
  updated_at: string;
}