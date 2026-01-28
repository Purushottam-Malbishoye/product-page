import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';

const ProfileCreation = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    industry: '',
    designation: '',
    department: '',
    marketing_budget: '',
    target_segment: []
  });

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Real Estate',
    'Other'
  ];

  const budgetRanges = [
    'Under $10K',
    '$10K - $50K',
    '$50K - $100K',
    '$100K - $500K',
    '$500K+'
  ];

  const targetSegments = ['B2B', 'B2C', 'B2B2C'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSegmentChange = (segment) => {
    setFormData(prev => ({
      ...prev,
      target_segment: prev.target_segment.includes(segment)
        ? prev.target_segment.filter(s => s !== segment)
        : [...prev.target_segment, segment]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.phone || !formData.designation || !formData.marketing_budget) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      await api.post('/profile', formData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to save profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070A10] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        <div className="glass-strong rounded-3xl p-8 md:p-12">
          <h1 className="text-3xl font-bold text-white mb-2">Complete Your Profile</h1>
          <p className="text-gray-400 mb-8">
            Tell us about your business to get started with FirstScience AI
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition"
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Designation <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition"
                placeholder="e.g., CEO, Marketing Director"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Industry
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-orange transition"
                >
                  <option value="">Select industry</option>
                  {industries.map(ind => (
                    <option key={ind} value={ind} className="bg-gray-900">{ind}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Department/Function
                </label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition"
                  placeholder="e.g., Marketing, Sales"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Marketing Budget <span className="text-red-400">*</span>
              </label>
              <select
                name="marketing_budget"
                value={formData.marketing_budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-orange transition"
                required
              >
                <option value="">Select budget range</option>
                {budgetRanges.map(budget => (
                  <option key={budget} value={budget} className="bg-gray-900">{budget}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Target Segment
              </label>
              <div className="flex flex-wrap gap-3">
                {targetSegments.map(segment => (
                  <button
                    key={segment}
                    type="button"
                    onClick={() => handleSegmentChange(segment)}
                    className={`px-6 py-2 rounded-xl font-medium transition ${
                      formData.target_segment.includes(segment)
                        ? 'bg-brand-orange text-white'
                        : 'bg-white/5 border border-white/10 text-gray-300 hover:border-brand-orange'
                    }`}
                  >
                    {segment}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-br from-brand-orange to-brand-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-orange/20 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Saving...' : 'Complete Profile'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreation;
