import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useDatabase } from '../hooks/useDatabase';
import { BlogPost } from '../lib/supabase';

interface BlogListProps {
  onBlogClick?: (slug: string) => void;
}

const BlogList = ({ onBlogClick }: BlogListProps) => {
  const { getBlogPosts, loading, error } = useDatabase();
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getBlogPosts();
        setPosts(data || []);
      } catch (err) {
        console.error('Failed to fetch blog posts:', err);
        // Handle case when table doesn't exist yet
        setPosts([]);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="grid lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg animate-pulse">
            <div className="h-48 bg-gray-300"></div>
            <div className="p-6">
              <div className="h-4 bg-gray-300 rounded mb-3"></div>
              <div className="h-6 bg-gray-300 rounded mb-3"></div>
              <div className="h-16 bg-gray-300 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-24"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Failed to load blog posts. Please try again later.</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">
          {error ? 'Blog posts are being set up. Please check back soon!' : 'No blog posts available at the moment.'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 group">
          {post.image_url && (
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
            </div>
          )}
          
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.published_at || post.created_at).toLocaleDateString()}
              <span className="mx-2">•</span>
              <Clock className="w-4 h-4 mr-1" />
              {post.read_time} min read
            </div>
            
            <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
              {post.title}
            </h4>
            
            <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
            
            <button
              onClick={() => onBlogClick?.(post.slug)}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              Read More
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogList;