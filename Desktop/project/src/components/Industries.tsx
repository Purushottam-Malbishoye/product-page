import React from 'react';
import { Heart, DollarSign, Factory, ShoppingCart, Truck, Zap } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare AI",
      description: "Revolutionizing patient care with intelligent diagnostics and treatment optimization.",
      applications: ["Medical Image Analysis", "Drug Discovery", "Patient Risk Assessment", "Clinical Decision Support"],
      stats: { metric: "Diagnostic Accuracy", value: "95%" },
      image: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Financial Technology",
      description: "Enhancing financial services with fraud detection, risk management, and algorithmic trading.",
      applications: ["Fraud Detection", "Credit Scoring", "Algorithmic Trading", "Regulatory Compliance"],
      stats: { metric: "Fraud Reduction", value: "87%" },
      image: "https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Manufacturing & Automation",
      description: "Optimizing production processes with predictive maintenance and quality control.",
      applications: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization", "Process Automation"],
      stats: { metric: "Efficiency Gain", value: "42%" },
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Retail & E-commerce",
      description: "Personalizing customer experiences and optimizing inventory management.",
      applications: ["Recommendation Engines", "Inventory Optimization", "Price Optimization", "Customer Analytics"],
      stats: { metric: "Sales Increase", value: "35%" },
      image: "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Transportation & Logistics",
      description: "Streamlining operations with route optimization and autonomous systems.",
      applications: ["Route Optimization", "Fleet Management", "Autonomous Vehicles", "Demand Forecasting"],
      stats: { metric: "Cost Reduction", value: "28%" },
      image: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Energy & Utilities",
      description: "Optimizing energy distribution and enabling smart grid technologies.",
      applications: ["Smart Grid Management", "Energy Forecasting", "Renewable Integration", "Consumption Optimization"],
      stats: { metric: "Energy Savings", value: "31%" },
      image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gray-800/50 border border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Industries We Transform</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI solutions are making a real impact across diverse industries, 
            driving innovation and creating measurable value
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {industries.map((industry, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300 ease-in-out">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-800/50 border border-gray-700/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white">
                      {industry.icon}
                    </div>
                    <div className="text-white">
                      <div className="text-2xl font-bold">{industry.stats.value}</div>
                      <div className="text-sm opacity-90">{industry.stats.metric}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{industry.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{industry.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Key Applications:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.applications.map((app, appIndex) => (
                        <div key={appIndex} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                          {app}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="relative bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 rounded-2xl p-12 border border-gray-700 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-4">Don't See Your Industry?</h3>
              <p className="text-xl text-gray-300 mb-8">
                We work across all sectors. Let's discuss how AI can transform your specific industry.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-semibold shadow-lg shadow-orange-500/50"
              >
                Discuss Your Industry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;