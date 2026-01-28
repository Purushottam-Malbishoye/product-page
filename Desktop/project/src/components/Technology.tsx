import React from 'react';
import { Cpu, Database, Cloud, Shield, Zap, Code, GitBranch, BarChart3 } from 'lucide-react';

const Technology = () => {
  const capabilities = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Deep Learning",
      description: "Advanced neural networks for complex pattern recognition"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Big Data Processing",
      description: "Scalable data pipelines for massive datasets"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud-Native",
      description: "Built for modern cloud infrastructure"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Military-grade encryption and compliance"
    }
  ];

  const researchAreas = [
    {
      title: "Explainable AI",
      description: "Making AI decisions transparent and interpretable",
      progress: 85
    },
    {
      title: "Federated Learning",
      description: "Privacy-preserving distributed machine learning",
      progress: 78
    },
    {
      title: "AutoML",
      description: "Automated machine learning pipeline optimization",
      progress: 92
    },
    {
      title: "Edge AI",
      description: "Deploying AI models on edge devices",
      progress: 73
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Technology</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built on cutting-edge technology stack with a focus on scalability, security, and performance
          </p>
        </div>

        {/* AI Capabilities */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">AI Capabilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500 hover:scale-105 transition-all duration-300 ease-in-out">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {capability.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{capability.title}</h4>
                <p className="text-gray-300 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Overview */}
        <div className="mb-20">
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Platform Overview</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Our proprietary AI platform combines the latest advances in machine learning with 
                  enterprise-grade infrastructure to deliver scalable, reliable, and secure AI solutions.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-green-600" />
                    <span className="text-white">Real-time processing capabilities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Code className="w-5 h-5 text-blue-600" />
                    <span className="text-white">API-first architecture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GitBranch className="w-5 h-5 text-purple-600" />
                    <span className="text-white">Continuous integration & deployment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="w-5 h-5 text-orange-600" />
                    <span className="text-white">Advanced monitoring & analytics</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Model Accuracy</span>
                    <span className="font-semibold text-blue-600">98.7%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '98.7%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Processing Speed</span>
                    <span className="font-semibold text-green-600">{"< 100ms"}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Uptime</span>
                    <span className="font-semibold text-purple-600">99.9%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '99.9%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research & Development */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Research & Development</h3>
          <div className="bg-gray-600/50 border border-gray-700 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-bold text-white mb-6">Innovation Lab</h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our dedicated research team continuously explores emerging AI technologies and methodologies 
                  to stay at the forefront of innovation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-white">50+ research papers published</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-white">15+ patents filed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-white">Collaboration with top universities</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold text-white mb-6">Current Research Areas</h4>
                <div className="space-y-6">
                  {researchAreas.map((area, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="font-semibold text-white">{area.title}</h5>
                        <span className="text-sm text-gray-300">{area.progress}%</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{area.description}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${area.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;