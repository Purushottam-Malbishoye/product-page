import React from 'react';
import { BookOpen } from 'lucide-react';
import BlogList from './BlogList';

interface ArticlesPageProps {
  onBlogClick?: (slug: string) => void;
}

const ArticlesPage = ({ onBlogClick }: ArticlesPageProps) => {
  return (
    <section className="pt-20 pb-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-orange-500" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Articles</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert insights and thought leadership from our team. Stay informed with the latest AI trends, research, and best practices.
          </p>
        </div>

        <BlogList onBlogClick={onBlogClick} />
      </div>
    </section>
  );
};

export default ArticlesPage;
