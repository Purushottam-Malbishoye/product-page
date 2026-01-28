import React from 'react';
import { Lightbulb, Users, Award, Globe, Shield, Zap, Heart } from 'lucide-react';

const CoreValuesPage = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with AI technology",
      details: "We continuously explore new frontiers in artificial intelligence, staying ahead of industry trends and developing novel solutions that set new standards for excellence."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working closely with clients to deliver tailored solutions",
      details: "We believe in the power of partnership. By working hand-in-hand with our clients, we ensure that every solution is perfectly aligned with their unique needs and goals."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Maintaining the highest standards in everything we do",
      details: "Quality is non-negotiable. From code to customer service, we hold ourselves to the highest standards and continuously refine our processes to deliver exceptional results."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Impact",
      description: "Creating positive change across industries and communities",
      details: "We measure success by the positive difference we make. Our solutions are designed not just to solve problems, but to create lasting value and meaningful transformation."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "Operating with transparency and ethical responsibility",
      details: "Trust is earned through consistent ethical behavior. We maintain transparency in our operations and take our responsibility to clients, employees, and society seriously."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Agility",
      description: "Adapting quickly to changing technology and market needs",
      details: "In a rapidly evolving field, flexibility is crucial. We embrace change, learn quickly, and adjust our approaches to stay relevant and effective in serving our clients."
    }
  ];

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
            <Heart className="w-4 h-4 mr-2" />
            What Drives Us
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Core Values</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The principles that guide everything we do and shape our approach to innovation,
            collaboration, and delivering exceptional results.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center mb-6 text-orange-400">
                {value.icon}
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">{value.title}</h2>
              <p className="text-orange-400 font-medium mb-4">{value.description}</p>
              <p className="text-gray-300 leading-relaxed">{value.details}</p>
            </div>
          ))}
        </div>

        {/* Values in Action */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Values in Action</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-300 leading-relaxed">
            <p>
              These values aren't just words on a page—they're the foundation of how we operate every day.
              From the way we approach technical challenges to how we interact with clients and colleagues,
              our core values guide our decisions and shape our culture.
            </p>
            <p>
              When we innovate, we do so with integrity. When we collaborate, we aim for excellence.
              When we create impact, we remain agile in our approach. Each value reinforces and strengthens
              the others, creating a cohesive framework that drives our success and ensures we deliver
              meaningful results for our clients.
            </p>
            <p>
              We hold ourselves accountable to these principles and regularly reflect on how well we're
              living up to them. It's this commitment to our values that has earned us the trust of clients
              around the world and continues to attract talented individuals who share our vision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesPage;
