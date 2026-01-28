import React from 'react';
import { Target, Eye, Users, Award, Lightbulb, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with AI technology"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Working closely with clients to deliver tailored solutions"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Maintaining the highest standards in everything we do"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Impact",
      description: "Creating positive change across industries and communities"
    }
  ];

  const leaders = [
    {
      name: "Amiya Kumar Behera",
      role: "Founder & CEO",
      background: "Former Chief Business Officer at Payments Company",
      image: "/Amiya_edited_Colour copy.png"
    },
    {
      name: "Alok Kumar Behera",
      role: "Founder & Chief Strategy Officer",
      background: "Former Strategy Leader at TWT",
      image: "/alok_kumar_v4.png"
    },
    {
      name: "Sanjit Kumar Padhan",
      role: "Associate Vice President – Engineering",
      background: "Former Automation Architect at TWT",
      image: "/sanjit_1.png"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Firstscience AI - Leading Enterprise AI Solutions Provider</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a team of world-class AI researchers, machine learning engineers, data scientists, and technology innovators
            dedicated to delivering enterprise-grade artificial intelligence solutions that transform businesses and drive measurable ROI.
          </p>
        </div>

        {/* Mission, Vision, Story */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To democratize enterprise artificial intelligence by making advanced machine learning solutions accessible,
              reliable, and beneficial for businesses of all sizes across every industry, driving global digital transformation and innovation.
            </p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              A world where artificial intelligence and machine learning enhance human potential, drive sustainable business innovation,
              and create unprecedented opportunities for enterprise growth, efficiency optimization, and technological discovery.
            </p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
            <p className="text-gray-300 leading-relaxed">
              Founded in 2020 by AI pioneers and technology leaders from top global enterprises, we've rapidly grown from a specialized
              machine learning research team to a globally recognized leader in enterprise AI innovation, serving Fortune 500 companies worldwide.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Core Values</h3>
            <p className="text-lg text-gray-300">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-700/50 transition-colors duration-200">
                <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center mx-auto mb-4 text-orange-500">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Leadership Team</h3>
            <p className="text-lg text-gray-300">Meet the visionaries behind Firstscience AI</p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-5xl">
              {leaders.map((leader, index) => (
                <div key={index} className="text-center group relative px-4">
                  <div className="relative mb-6 overflow-visible">
                    <div className="w-32 h-32 mx-auto overflow-visible">
                      <img
                        src={leader.image}
                        alt={`${leader.name} - ${leader.role} at Firstscience AI`}
                        className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-200"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-1">{leader.name}</h4>
                  <p className="text-orange-500 font-medium mb-2">{leader.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{leader.background}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;