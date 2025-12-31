import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedButton from '../shared/AnimatedButton';

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 px-4">
      <motion.div
        className="max-w-4xl mx-auto glass-strong rounded-3xl p-12 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let Us Book the Calls.<br />
          You Just Show Up!
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Whether it's sales discovery, product validation, or investor intros - we book the meetings that move your business forward
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <AnimatedButton
            variant="primary"
            onClick={() => navigate('/login')}
            className="text-lg"
          >
            Start Getting Meetings
          </AnimatedButton>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {['Guaranteed Meetings', 'Zero Headcount', 'Zero Tool Chaos', 'AI + Human'].map((item, index) => (
            <div key={index} className="text-primary-teal font-semibold">
              ✓ {item}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
