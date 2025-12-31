import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import GlassCard from '../components/shared/GlassCard';
import AnimatedButton from '../components/shared/AnimatedButton';


const Login = () => {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await login(formData.email, formData.password);
      } else {
        await register(formData.name, formData.email, formData.password);
      }
      navigate('/dashboard');   // redirect after setting user
    } catch (err) {
      setError('Demo login failed (should not happen)');
    } finally {
      setLoading(false);
    }
  };

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({ email: '', password: '', name: '' });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const { login, register } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

    // try {
    //   if (isLogin) {
    //     await login(formData.email, formData.password);
    //   } else {
    //     await register(formData.name, formData.email, formData.password);
    //   }
    //   navigate('/dashboard');
    // } catch (err) {
    //   setError(err.response?.data?.error || 'An error occurred');
    // } finally {
    //   setLoading(false);
    // }

    // DEMO: fake login
//     setTimeout(() => {
//         // set user directly
//         localStorage.setItem('token', 'demo'); // if you still use token check
//         setUser({
//         id: 'demo-user-id',
//         name: formData.name || 'Demo User',
//         email: formData.email,
//         role: 'user'
//         });
//         navigate('/dashboard');
//         setLoading(false);
//     }, 500);
//   };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <GlassCard>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-xl mb-4">
              {error}
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
                  className="w-full glass rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-teal"
                  required={!isLogin}
                />
              </div>
            )}

            <div>
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full glass rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-teal"
                required
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full glass rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-teal"
                required
              />
            </div>

            <AnimatedButton
              type="submit"
              variant="primary"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Loading...' : isLogin ? 'Sign In' : 'Sign Up'}
            </AnimatedButton>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary-teal hover:text-primary-blue transition-colors"
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
