import React from 'react';
import { Heart, DollarSign, Factory, ShoppingCart, Truck, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const IndustriesPage = () => {
  const industries = [
    {
      id: "healthcare-ai",
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare AI",
      description: "Revolutionizing patient care with intelligent diagnostics and treatment optimization.",
      detailedDescription: "Our healthcare AI solutions leverage cutting-edge machine learning to improve patient outcomes, reduce costs, and streamline clinical workflows. From early disease detection to personalized treatment plans, we're transforming healthcare delivery.",
      applications: ["Medical Image Analysis", "Drug Discovery", "Patient Risk Assessment", "Clinical Decision Support"],
      stats: { metric: "Diagnostic Accuracy", value: "95%" },
      image: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        "Reduce diagnostic errors by up to 40%",
        "Accelerate treatment planning by 60%",
        "Lower healthcare costs by 25-30%",
        "Improve patient satisfaction scores"
      ],
      caseStudy: "Helped a major hospital network reduce diagnostic turnaround time by 85% while improving accuracy to 98%."
    },
    {
      id: "fintech",
      icon: <DollarSign className="w-8 h-8" />,
      title: "Financial Technology",
      description: "Enhancing financial services with fraud detection, risk management, and algorithmic trading.",
      detailedDescription: "Transform your financial operations with AI-powered solutions that detect fraud in real-time, optimize trading strategies, and ensure regulatory compliance. Our systems process millions of transactions with precision and speed.",
      applications: ["Fraud Detection", "Credit Scoring", "Algorithmic Trading", "Regulatory Compliance"],
      stats: { metric: "Fraud Reduction", value: "87%" },
      image: "https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        "Real-time fraud detection with 99%+ accuracy",
        "Reduce false positives by 67%",
        "Save $15M+ annually in fraud losses",
        "Automated compliance monitoring"
      ],
      caseStudy: "Implemented a fraud detection system that saved a major bank $15M annually while reducing false positives by 67%."
    },
    {
      id: "manufacturing",
      icon: <Factory className="w-8 h-8" />,
      title: "Manufacturing & Automation",
      description: "Optimizing production processes with predictive maintenance and quality control.",
      detailedDescription: "Maximize production efficiency and minimize downtime with AI-driven predictive maintenance and quality control systems. Our solutions integrate seamlessly with existing infrastructure to deliver immediate value.",
      applications: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization", "Process Automation"],
      stats: { metric: "Efficiency Gain", value: "42%" },
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        "Reduce equipment downtime by 78%",
        "Increase production efficiency by 42%",
        "Lower maintenance costs by $1.8M annually",
        "Improve product quality by 35%"
      ],
      caseStudy: "Deployed predictive maintenance for a major manufacturer, virtually eliminating unexpected breakdowns and saving $1.8M annually."
    },
    {
      id: "retail",
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Retail & E-commerce",
      description: "Personalizing customer experiences and optimizing inventory management.",
      detailedDescription: "Drive sales and customer satisfaction with personalized recommendations, dynamic pricing, and intelligent inventory management. Our AI solutions understand customer behavior and adapt in real-time.",
      applications: ["Recommendation Engines", "Inventory Optimization", "Price Optimization", "Customer Analytics"],
      stats: { metric: "Sales Increase", value: "35%" },
      image: "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        "Increase sales by up to 35%",
        "Reduce inventory costs by 28%",
        "Improve customer retention by 45%",
        "Optimize pricing in real-time"
      ],
      caseStudy: "Implemented a recommendation engine that increased conversion rates by 35% and average order value by 22%."
    },
    {
      id: "transportation",
      icon: <Truck className="w-8 h-8" />,
      title: "Transportation & Logistics",
      description: "Streamlining operations with route optimization and autonomous systems.",
      detailedDescription: "Optimize delivery routes, reduce fuel costs, and improve fleet utilization with AI-powered logistics solutions. Our systems consider traffic, weather, and real-time constraints to maximize efficiency.",
      applications: ["Route Optimization", "Fleet Management", "Autonomous Vehicles", "Demand Forecasting"],
      stats: { metric: "Cost Reduction", value: "28%" },
      image: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        "Reduce transportation costs by 28%",
        "Improve on-time delivery by 92%",
        "Lower fuel consumption by 24%",
        "Optimize fleet utilization"
      ],
      caseStudy: "Optimized delivery routes for a major logistics company, reducing costs by 28% and improving delivery times by 40%."
    },
    {
      id: "energy",
      icon: <Zap className="w-8 h-8" />,
      title: "Energy & Utilities",
      description: "Optimizing energy distribution and enabling smart grid technologies.",
      detailedDescription: "Transform energy management with AI-powered smart grid solutions, renewable energy integration, and consumption forecasting. Our systems help utilities reduce waste and improve reliability.",
      applications: ["Smart Grid Management", "Energy Forecasting", "Renewable Integration", "Consumption Optimization"],
      stats: { metric: "Energy Savings", value: "31%" },
      image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        "Reduce energy waste by 31%",
        "Improve grid reliability by 45%",
        "Optimize renewable integration",
        "Predict demand with 95% accuracy"
      ],
      caseStudy: "Implemented smart grid management for a utility company, reducing energy waste by 31% and improving grid reliability."
    }
  ];

  return (
    <section className="pt-20 pb-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Industries We Transform</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI solutions are making a real impact across diverse industries,
            driving innovation and creating measurable value for organizations worldwide.
          </p>
        </div>

        <div className="space-y-24">
          {industries.map((industry, index) => (
            <div key={index} id={industry.id} className={`grid lg:grid-cols-2 gap-12 items-center scroll-mt-24 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gray-900/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                        {industry.icon}
                      </div>
                      <div className="text-white">
                        <div className="text-4xl font-bold">{industry.stats.value}</div>
                        <div className="text-sm opacity-90">{industry.stats.metric}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-4">{industry.title}</h2>
                    <p className="text-lg text-gray-300 mb-4">{industry.detailedDescription}</p>
                  </div>

                  <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
                    <h3 className="font-semibold text-white mb-4 text-lg">Key Applications</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {industry.applications.map((app, appIndex) => (
                        <div key={appIndex} className="flex items-start space-x-2">
                          <ArrowRight className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="font-semibold text-white mb-4 text-lg">Key Benefits</h3>
                    <div className="space-y-3">
                      {industry.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-100 rounded-xl p-6 border-l-4 border-blue-600">
                    <h3 className="font-semibold text-white mb-2 text-sm uppercase tracking-wide">Case Study</h3>
                    <p className="text-gray-300 italic">{industry.caseStudy}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white shadow-2xl">
            <h3 className="text-4xl font-bold mb-4">Don't See Your Industry?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We work across all sectors. Let's discuss how AI can transform your specific industry and deliver measurable results.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-orange-500 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold shadow-lg"
            >
              Discuss Your Industry
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesPage;
