import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import GlassCard from '../components/shared/GlassCard';
import AnimatedButton from '../components/shared/AnimatedButton';

const FREE_EMAIL_PROVIDERS = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com',
  'aol.com', 'mail.com', 'protonmail.com', 'yandex.com', 'zoho.com'
];

const ADMIN_DOMAIN = "tigerworldtech.com";
const DEMO_ADMIN_OTP = "112233";

const Login = () => {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [signupMode, setSignupMode] = useState('demo');
  const [formData, setFormData] = useState({ email: '', password: '', name: '', otp: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showOTP, setShowOTP] = useState(false);
  const [awaitingOTP, setAwaitingOTP] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isWorkEmail = (email) => {
    if (!validateEmail(email)) return true;
    const domain = email.split('@')[1]?.toLowerCase();
    return !FREE_EMAIL_PROVIDERS.includes(domain);
  };

  const isAdminEmail = (email) => {
    const domain = email.split('@')[1]?.toLowerCase();
    return domain === ADMIN_DOMAIN.toLowerCase();
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    } else if (!isLogin && signupMode === 'demo' && !isWorkEmail(formData.email)) {
      newErrors.email = 'Please use a work email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin && !formData.name) {
      newErrors.name = 'Name is required';
    }

    if (awaitingOTP && !formData.otp) {
      newErrors.otp = 'OTP is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    if (!validate()) return;

    setLoading(true);

    try {
      if (isLogin) {
        const isAdmin = isAdminEmail(formData.email);

        if (isAdmin && !awaitingOTP) {
          setShowOTP(true);
          setAwaitingOTP(true);
          setLoading(false);
          return;
        }

        if (isAdmin && awaitingOTP) {
          if (formData.otp !== DEMO_ADMIN_OTP) {
            setErrors({ otp: 'Invalid OTP' });
            setLoading(false);
            return;
          }
        }

        await login(formData.email, formData.password);

        if (isAdmin) {
          navigate('/admin/dashboard');
        } else {
          navigate('/dashboard');
        }
      } else {
        if (signupMode === 'paid') {
          setErrors({ submit: 'Paid customer validation not yet implemented. Please contact sales.' });
          setLoading(false);
          return;
        }

        await register(formData.name, formData.email, formData.password);
        navigate('/profile-setup');
      }
    } catch (err) {
      setErrors({
        submit: err.response?.data?.error || (isLogin ? 'Invalid credentials. Please sign up first.' : 'Signup failed. Please try again.')
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <button
        onClick={handleBack}
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-white transition"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <GlassCard>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>

          {errors.submit && (
            <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-xl mb-4">
              {errors.submit}
            </div>
          )}

          {!isLogin && (
            <div className="mb-6">
              <label className="block text-gray-400 mb-3">Account Type</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setSignupMode('demo')}
                  className={`flex-1 py-3 rounded-xl border-2 transition ${
                    signupMode === 'demo'
                      ? 'border-brand-orange bg-brand-orange/10 text-white'
                      : 'border-white/20 bg-white/5 text-gray-400'
                  }`}
                >
                  Demo User
                </button>
                <button
                  type="button"
                  onClick={() => setSignupMode('paid')}
                  className={`flex-1 py-3 rounded-xl border-2 transition ${
                    signupMode === 'paid'
                      ? 'border-brand-orange bg-brand-orange/10 text-white'
                      : 'border-white/20 bg-white/5 text-gray-400'
                  }`}
                >
                  Paid Customer
                </button>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-gray-400 mb-2">Full name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full glass rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange ${
                    errors.name ? 'border border-red-500' : ''
                  }`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
              </div>
            )}

            <div>
              <label className="block text-gray-400 mb-2">
                {!isLogin && signupMode === 'demo' ? 'Work Email' : 'Email'}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  setErrors({ ...errors, email: null });
                }}
                className={`w-full glass rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange ${
                  errors.email ? 'border border-red-500' : ''
                }`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  setErrors({ ...errors, password: null });
                }}
                className={`w-full glass rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange ${
                  errors.password ? 'border border-red-500' : ''
                }`}
              />
              {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
            </div>

            {showOTP && isLogin && (
              <div>
                <label className="block text-gray-400 mb-2">Admin OTP</label>
                <input
                  type="text"
                  value={formData.otp}
                  onChange={(e) => {
                    setFormData({ ...formData, otp: e.target.value });
                    setErrors({ ...errors, otp: null });
                  }}
                  placeholder="Enter 6-digit OTP"
                  className={`w-full glass rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange ${
                    errors.otp ? 'border border-red-500' : ''
                  }`}
                />
                {errors.otp && <p className="mt-1 text-sm text-red-400">{errors.otp}</p>}
                <p className="mt-2 text-xs text-gray-500">Demo OTP for testing: 112233</p>
              </div>
            )}

            <AnimatedButton
              type="submit"
              variant="primary"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Loading...' : isLogin ? (awaitingOTP ? 'Verify OTP' : 'Sign In') : 'Sign Up'}
            </AnimatedButton>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setErrors({});
                setShowOTP(false);
                setAwaitingOTP(false);
                setFormData({ ...formData, otp: '' });
              }}
              className="text-brand-orange hover:text-brand-orange/80 transition-colors"
            >
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default Login;
