import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sanjit Kumar',
    role: 'Co-Founder & CEO',
    image: '/sanjit_1.png',
    linkedin: '#',
    bio: 'Leading the vision for AI-powered sales development'
  },
  {
    name: 'Alok Kumar',
    role: 'Co-Founder & CTO',
    image: '/alok_kumar_v4.png',
    linkedin: '#',
    bio: 'Building cutting-edge AI technology for sales automation'
  },
  {
    name: 'Amiya Kumar',
    role: 'Co-Founder & COO',
    image: '/Amiya_edited_Colour copy.png',
    linkedin: '#',
    bio: 'Scaling operations and driving customer success'
  }
];

const LeadershipTeam = () => {
  return (
    <section id="leadership" className="py-20 px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Leadership Team
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Meet the visionaries driving the future of AI-powered sales development
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 ease-in-out">
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500 rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="mb-6 relative">
                    <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden border-2 border-gray-700 group-hover:border-orange-500 transition-all duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-orange-500 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-300 hover:text-orange-500 hover:bg-gray-600/50 hover:border-orange-500 transition-all duration-200"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
