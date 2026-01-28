import { useState } from 'react';
import { supabase, Contact, NewsletterSubscriber, JobApplication, BlogPost } from '../lib/supabase';

export const useDatabase = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Contact form submission
  const submitContact = async (contactData: Omit<Contact, 'id' | 'created_at' | 'status'>) => {
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([contactData]);

      if (error) throw error;

      try {
        const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;
        const emailResponse = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contactData),
        });

        if (!emailResponse.ok) {
          const errorText = await emailResponse.text();
          console.error('Failed to send notification email:', emailResponse.status, errorText);
        } else {
          const result = await emailResponse.json();
          console.log('Email sent successfully:', result);
        }
      } catch (emailError) {
        console.error('Error sending notification email:', emailError);
      }

      return { success: true };
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Newsletter subscription
  const subscribeNewsletter = async (email: string) => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }])
        .select()
        .single();

      if (error) {
        // Handle duplicate email gracefully
        if (error.code === '23505') {
          throw new Error('Email already subscribed');
        }
        throw error;
      }
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Job application submission
  const submitJobApplication = async (applicationData: Omit<JobApplication, 'id' | 'created_at'>) => {
    setLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase
        .from('job_applications')
        .insert([applicationData])
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Get published blog posts
  const getBlogPosts = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .not('published_at', 'is', null)
        .lte('published_at', new Date().toISOString())
        .order('published_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Get blog post by slug
  const getBlogPostBySlug = async (slug: string) => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .not('published_at', 'is', null)
        .lte('published_at', new Date().toISOString())
        .maybeSingle();

      if (error) throw error;
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    submitContact,
    subscribeNewsletter,
    submitJobApplication,
    getBlogPosts,
    getBlogPostBySlug,
  };
};