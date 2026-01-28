import React, { useState } from 'react';
import { CheckCircle, Mail, MessageSquare } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ContactUsPageProps {
  onBookDemoClick?: () => void;
  onCareerClick?: () => void;
}

const ContactUsPage = ({ onBookDemoClick, onCareerClick }: ContactUsPageProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+91',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const categories = [
    'General Inquiry',
    'Sales',
    'Technical Support',
    'Partnership Opportunities',
    'Career Opportunities',
    'Media & Press',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const contactData = {
        name: formData.fullName,
        email: formData.email,
        phone: `${formData.countryCode}${formData.phone}`,
        company: formData.category,
        message: formData.message
      };

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
          console.error('Failed to send notification email:', emailResponse.status);
        }
      } catch (emailError) {
        console.error('Error sending notification email:', emailError);
      }

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        countryCode: '+91',
        category: '',
        message: ''
      });

      window.location.href = 'https://calendly.com/amiya-behera';
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative pt-20 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium border border-orange-500/30">
                <MessageSquare className="w-4 h-4 mr-2" />
                Get In Touch
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Contact Us
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Have questions about Firstscience AI? Fill out the contact form and a member of our team will respond shortly!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                <div className="mt-1 w-6 h-6 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-gray-300">
                    If you'd like a demo of the Firstscience AI platform, you can book a call with our sales team{' '}
                    <button
                      onClick={onBookDemoClick}
                      className="text-orange-400 hover:text-orange-300 font-semibold underline cursor-pointer transition-colors duration-200"
                    >
                      here
                    </button>
                    .
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                <div className="mt-1 w-6 h-6 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-300">
                    If you're interested in applying for a role at Firstscience AI, you can fill out our online application{' '}
                    <button
                      onClick={onCareerClick}
                      className="text-orange-400 hover:text-orange-300 font-semibold underline cursor-pointer transition-colors duration-200"
                    >
                      here
                    </button>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <p className="text-gray-300 text-lg mb-3">
                Not quite ready to schedule a call? Reach out to our team at
              </p>
              <a
                href="mailto:info@firstscienceai.com"
                className="inline-flex items-center space-x-2 text-orange-400 hover:text-orange-300 font-semibold text-xl group transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span className="underline">info@firstscienceai.com</span>
              </a>
              <p className="text-gray-400 mt-3">with any questions you may have.</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Smith"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number*
                </label>
                <div className="flex space-x-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    className="w-32 px-3 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-white"
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+86">🇨🇳 +86</option>
                    <option value="+81">🇯🇵 +81</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+971">🇦🇪 +971</option>
                    <option value="+65">🇸🇬 +65</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone number"
                    required
                    className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-white placeholder-gray-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                  Which category best describes your inquiry?*
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-white appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '3rem'
                  }}
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="I'm looking to get started ASAP..."
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-white placeholder-gray-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center text-green-400 font-medium">
                  Thank you! Someone from our team will respond shortly.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-center text-red-400 font-medium">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <p className="text-center text-gray-400 text-sm">
                Just fill out the form and someone from our team will respond shortly!
              </p>
            </form>
            </div>

            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
