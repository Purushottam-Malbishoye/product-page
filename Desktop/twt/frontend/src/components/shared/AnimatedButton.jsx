import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-brand-orange to-primary-violet shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/100 transition-shadow',
    secondary: 'bg-gradient-to-r from-primary-pink to-primary-teal',
    outline: 'border-2 border-brand-orange shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/100 transition-shadow' //!bg-transparent hover:opacity-100'
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