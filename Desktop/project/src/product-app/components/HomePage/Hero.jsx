import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BRAND } from '../../config/constants';

const Hero = () => {
  const navigate = useNavigate();

  // ✅ Full sentence (for typewriter)
  const fullText = `Meet ${BRAND.NAME} your AI SDR from FirstScience AI.`;

  // ✅ Typewriter index
  const [typedIndex, setTypedIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTypedIndex((prev) => {
        if (prev >= fullText.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [fullText]);

  // ✅ STEP 2: Define parts with different gradients
  const parts = [
    { text: 'Meet ', className: 'text-white' },
    {
      text: BRAND.NAME,
      className:
        'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600',
    },
    { text: ' your AI SDR from ', className: 'text-white' },
    {
      text: 'FirstScience',
      className:
        'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500',
    },
     {
      text: ' AI.',
      className:
        'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow pt-20">
      {/* Animated background gradient - matching homepage */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10 overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-base md:text-lg text-gray-300 mb-4 mt-7 max-w-3xl mx-auto">
            Tired of hiring and training SDRs for months and still not getting meetings?
          </p>

          {/* NEW hero section with gradients + typewriter */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight min-h-[120px] sm:min-h-[140px]">
            {(() => {
              let currentCount = 0;

              return parts.map((part, i) => {
                const start = currentCount;
                const end = currentCount + part.text.length;
                currentCount = end;

                const visibleCount = Math.max(
                  0,
                  Math.min(part.text.length, typedIndex - start)
                );

                return (
                  <span key={i} className={part.className}>
                    {part.text.slice(0, visibleCount)}
                  </span>
                );
              });
            })()}

            {/* Cursor */}
            {typedIndex < fullText.length && (
              <span className="animate-pulse text-white">|</span>
            )}
          </h1>

          <p className="text-base md:text-lg text-gray-300 mb-2 max-w-3xl mx-auto">
            A 24×7 outbound agent that sends hyper-personalized emails <br />
            so your calendar stays full of qualified meetings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 mt-1">
            <div className="flex flex-col items-center text-center py-6 px-4">
              <span className="mt-3 text-base font-medium text-white/80">
                Always-on outbound cold email
              </span>
            </div>

            <div className="relative flex flex-col items-center text-center py-6 px-4">
              <div className="absolute left-0 top-1/4 h-1/2 border-l border-white/15"></div>
              <span className="mt-3 text-base font-medium text-white/80">
                Hyper-personalized messages
              </span>
            </div>

            <div className="relative flex flex-col items-center text-center py-6 px-4">
              <div className="absolute left-0 top-1/4 h-1/2 border-l border-white/15"></div>
              <span className="mt-3 text-base font-medium text-white/80">
                No extra headcount
              </span>
            </div>
          </div>

          <br />

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate('/login')}
              className="group inline-flex items-center justify-center px-8 py-5 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-xl hover:from-orange-600 hover:to-purple-700 transition-all duration-300 font-bold text-lg shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 hover:scale-105 animate-pulse-slow"
            >
              Hire {BRAND.NAME}
            </button>

            <button
              onClick={() => navigate('/login')}
              className="inline-flex items-center px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-lg hover:text-orange-500 bg-gray-700/50 transition-all duration-200 font-semibold"
            >
              See {BRAND.NAME} in action
            </button>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {[
              { value: '640,000+', label: 'Prospects Reached' },
              { value: '71,800+', label: 'Total Replies' },
              { value: '23,100+', label: 'Positive Replies' },
              { value: '3,500+', label: 'Meetings Booked' }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300 ease-in-out group scroll-mt-24"
              >
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;