import React, { useState } from 'react';
import { User, Mail, FileText, Send, CheckCircle, AlertCircle, X } from 'lucide-react';
import { useDatabase } from '../hooks/useDatabase';

interface JobApplicationFormProps {
  jobTitle: string;
  onClose: () => void;
}

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ jobTitle, onClose }) => {
  const { submitJobApplication, loading, error } = useDatabase();
  const [formData, setFormData] = useState({
    job_title: jobTitle,
    applicant_name: '',
    applicant_email: '',
    resume_url: '',
    cover_letter: ''
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    
    try {
      await submitJobApplication(formData);
      setSuccess(true);
    } catch (err) {
      // Error is handled by the hook
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (success) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h3>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in the {jobTitle} position. We'll review your application and get back to you soon.
          </p>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Apply for {jobTitle}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
            <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-red-700">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="applicant_name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="applicant_name"
                  name="applicant_name"
                  required
                  value={formData.applicant_name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="applicant_email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="applicant_email"
                  name="applicant_email"
                  required
                  value={formData.applicant_email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="resume_url" className="block text-sm font-medium text-gray-700 mb-2">
              Resume URL
            </label>
            <div className="relative">
              <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="url"
                id="resume_url"
                name="resume_url"
                value={formData.resume_url}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://drive.google.com/... or LinkedIn profile"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Please provide a link to your resume (Google Drive, Dropbox, LinkedIn, etc.)
            </p>
          </div>

          <div>
            <label htmlFor="cover_letter" className="block text-sm font-medium text-gray-700 mb-2">
              Cover Letter
            </label>
            <textarea
              id="cover_letter"
              name="cover_letter"
              rows={6}
              value={formData.cover_letter}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Tell us why you're interested in this position and what makes you a great fit..."
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors duration-200 font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-semibold"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Submit Application
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;