import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { useDatabase } from '../hooks/useDatabase';
import { BlogPost } from '../lib/supabase';

interface BlogDetailProps {
  slug: string;
  onClose: () => void;
}

const BlogDetail = ({ slug, onClose }: BlogDetailProps) => {
  const { getBlogPostBySlug, loading, error } = useDatabase();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getBlogPostBySlug(slug);
        setPost(data);
      } catch (err) {
        console.error('Failed to fetch blog post:', err);
      }
    };

    fetchPost();
  }, [slug]);


  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 rounded mb-8 w-1/3"></div>
          <div className="h-64 bg-gray-300 rounded mb-8"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
          <p className="text-red-600 mb-4">Failed to load blog post.</p>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
      <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {post.image_url && (
            <div className="relative h-64 md:h-96 overflow-hidden">
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-8 left-8">
                <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium shadow-lg">
                  {post.category}
                </span>
              </div>
            </div>
          )}

          <div className="px-8 md:px-12 pt-8">
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(post.published_at || post.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
            <span className="mx-3">•</span>
            <Clock className="w-4 h-4 mr-1" />
            {post.read_time} min read
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 pb-8">
            <button
              onClick={onClose}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </button>
          </div>
          </div>
        </article>
    </div>
  );
};

export default BlogDetail;
