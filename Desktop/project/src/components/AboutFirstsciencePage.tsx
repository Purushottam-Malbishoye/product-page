import React from 'react';
import { Target, Eye, Users, Building2 } from 'lucide-react';

const AboutFirstsciencePage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium border border-orange-500/30 mb-6">
            <Building2 className="w-4 h-4 mr-2" />
            Our Story
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Firstscience AI</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're a team of world-class technology researchers, engineers, and innovators dedicated to
            building the future of intelligent technology solutions.
          </p>
        </div>

        {/* Mission, Vision, Story */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-orange-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To democratize advanced technology by making intelligent solutions accessible,
              reliable, and beneficial for businesses of all sizes across every industry.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              A world where technology enhances human potential, drives sustainable innovation, and creates
              unprecedented opportunities for growth and discovery.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-orange-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              Founded in 2020 by technology pioneers from leading tech companies, we've grown from a small
              research team to a global leader in AI innovation.
            </p>
          </div>
        </div>

        {/* Company Overview */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">Who We Are</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Firstscience AI is at the forefront of artificial intelligence and machine learning innovation.
              Since our founding in 2020, we've been dedicated to developing cutting-edge solutions that
              transform how businesses operate and compete in the digital age.
            </p>
            <p>
              Our team brings together expertise from world-renowned technology companies, research
              institutions, and innovative startups. We combine deep technical knowledge with practical
              business understanding to deliver solutions that create real value.
            </p>
            <p>
              With offices across multiple continents and clients in dozens of industries, we've established
              ourselves as trusted partners in digital transformation. Our work spans from fundamental
              research to production-ready systems, always focused on solving real-world challenges with
              elegant, scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFirstsciencePage;
