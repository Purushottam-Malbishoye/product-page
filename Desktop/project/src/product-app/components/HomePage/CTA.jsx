import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Check, CheckCheck } from 'lucide-react';
import { BRAND } from '../../config/constants';

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 px-4">
      <motion.div
        className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-12 text-center shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        {/* <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let Us Book the Calls.<br />
          You Just Show Up!
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Whether it's sales discovery, product validation, or investor intros - we book the meetings that move your business forward
        </p> */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
  We Book Calls. 
  <br />
  You Close Deals!
</h2>

<p className="text-xl text-gray-300 mb-10 max-w-xl mx-auto">
  Get started with {" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">{BRAND.NAME}</span>{" "} today and transform your sales pipeline with
  AI-powered outreach that delivers real results.
</p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => navigate('/login')}
          className= "group inline-flex items-center justify-center px-8 py-5 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-xl hover:from-orange-600 hover:to-purple-700 transition-all duration-300 font-bold text-lg shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 hover:scale-105 animate-pulse-slow"
              
          >
            Start Getting Meetings
          </button>
        </div>
 
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {['Guaranteed Meetings', 'Zero Headcount', 'Zero Tool Chaos', 'AI + Human'].map((item, index) => (
            <div key={index} className="text-primary-teal font-semibold">
              ✓ {item}
            </div>
          ))}
        </div> */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
  {[
    'No upfront costs',
    'Full onboarding support',
    'Cancel anytime',
    'Results in 30 days',
  ].map((feature, index) => (
    <div key={index} className="flex items-center gap-2">
      <CheckCheck className="w-5 h-5 text-green-500" />
      <span className="text-orange-400 text-sm font-medium">
        {feature}
      </span>
    </div>
  ))}
</div>
      </motion.div>
    </section>
  );
};

export default CTA;
