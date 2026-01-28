import React from 'react';
import { Brain, MessageSquare, Eye, TrendingUp, Users, Code, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: "machine-learning",
      icon: <Brain className="w-8 h-8" />,
      title: "Enterprise Machine Learning Solutions",
      description: "Custom machine learning models and AI algorithms tailored to your specific business requirements, delivering predictive insights and intelligent automation.",
      features: ["Advanced Predictive Analytics", "Deep Learning Classification Models", "AI-Powered Recommendation Engines", "Real-Time Anomaly Detection Systems"],
      color: "blue"
    },
    {
      id: "nlp",
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Natural Language Processing (NLP) AI",
      description: "Advanced NLP and conversational AI solutions for intelligent text analysis, sentiment detection, automated customer service, and multilingual communication.",
      features: ["AI-Powered Sentiment Analysis", "Intelligent Text Classification", "Enterprise Chatbots & Virtual Assistants", "Neural Machine Translation"],
      color: "purple"
    },
    {
      id: "computer-vision",
      icon: <Eye className="w-8 h-8" />,
      title: "Computer Vision & Image Recognition AI",
      description: "Enterprise computer vision solutions using deep learning for intelligent image and video analysis, visual inspection automation, and real-time object recognition.",
      features: ["AI Object Detection & Tracking", "Biometric Facial Recognition", "Automated Visual Quality Control", "Medical Imaging AI Analysis"],
      color: "green"
    },
    {
      id: "predictive-analytics",
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Analytics & Business Intelligence",
      description: "Advanced predictive analytics and AI-driven business intelligence to forecast trends, optimize operations, and enable strategic data-driven decision making.",
      features: ["AI-Powered Demand Forecasting", "Intelligent Risk Assessment", "Market Trend Analysis & Prediction", "ROI & Performance Optimization"],
      color: "orange"
    },
    {
      id: "ai-consulting",
      icon: <Users className="w-8 h-8" />,
      title: "AI Consulting",
      description: "Strategic guidance to help you navigate your AI transformation journey.",
      features: ["AI Strategy Development", "Technology Assessment", "Implementation Planning", "Team Training"],
      color: "pink"
    },
    {
      id: "custom-ai-development",
      icon: <Code className="w-8 h-8" />,
      title: "Custom AI Development",
      description: "End-to-end development of bespoke AI solutions for unique challenges.",
      features: ["Custom Model Development", "API Integration", "Cloud Deployment", "Ongoing Support"],
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
      purple: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
      green: "bg-green-500/20 text-green-400 border border-green-500/30",
      orange: "bg-orange-500/20 text-orange-400 border border-orange-500/30",
      pink: "bg-orange-500/20 text-orange-400 border border-orange-500/30",
      indigo: "bg-blue-500/20 text-blue-400 border border-blue-500/30"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Enterprise AI & Machine Learning Solutions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive artificial intelligence and machine learning services designed to transform your business operations,
            automate processes, and drive data-driven innovation across all industries
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} id={service.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300 ease-in-out group scroll-mt-24">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-200 ${getColorClasses(service.color)}`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-400 transition-colors duration-200 group-hover:translate-x-1 transform transition-transform"
              >
                Start Your Tech Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 rounded-2xl p-12 text-center text-white overflow-hidden border border-gray-700">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          <div className="relative">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
            <p className="text-xl mb-8 text-gray-300">
              Partner with industry-leading AI experts. Let's discuss how our enterprise machine learning and AI solutions can accelerate your digital transformation and drive measurable business results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-semibold shadow-lg shadow-orange-500/50"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;