import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 shadow-lg ${className}`}
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
