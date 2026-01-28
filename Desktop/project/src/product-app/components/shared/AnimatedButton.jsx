import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-brand-orange to-primary-violet shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/100 transition-shadow',
    secondary: 'bg-gradient-to-r from-primary-pink to-primary-teal',
    outline: 'border-2 border-brand-orange shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/100 transition-shadow',
    success: 'bg-gradient-to-r from-green-500 to-green-600 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-shadow',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-shadow'
  };

  return (
    <motion.button
      className={`px-6 py-3 rounded-xl font-semibold text-white transition-all ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;

// hover:from-primary-teal hover:to-primary-blue
// hover:from-primary-teal hover:to-primary-pink