import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useDatabase } from '../hooks/useDatabase';

interface NewsletterSignupProps {
  className?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ className = '' }) => {
  const { subscribeNewsletter, loading, error } = useDatabase();
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    
    try {
      await subscribeNewsletter(email);
      setSuccess(true);
      setEmail('');
    } catch (err) {
      // Error is handled by the hook
    }
  };

  if (success) {
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        <CheckCircle className="w-6 h-6 text-green-600" />
        <span className="text-green-700 font-medium">Successfully subscribed!</span>
      </div>
    );
  }

  return (
    <div className={className}>
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center">
          <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
          <span className="text-red-700 text-sm">{error}</span>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={loading}
          className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-400 text-white disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading || !email}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-r-lg transition-colors duration-200 font-medium text-white"
        >
          {loading ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          ) : (
            'Subscribe'
          )}
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;