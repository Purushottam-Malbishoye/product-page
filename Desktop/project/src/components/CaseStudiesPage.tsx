import React from 'react';
import { ArrowRight, TrendingUp, CheckCircle, Award, Building2, Calendar } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Healthcare Diagnostics Revolution",
      client: "MedTech Global",
      industry: "Healthcare",
      location: "Boston, MA",
      duration: "8 months",
      challenge: "Reducing diagnostic errors and improving patient outcomes through AI-powered medical imaging analysis. The hospital network was facing increasing pressure to improve diagnostic accuracy while managing rising patient volumes.",
      solution: "Developed a comprehensive deep learning model for medical image analysis with 98% accuracy in detecting anomalies. The solution integrated seamlessly with existing PACS systems and provided real-time analysis with explainable AI features to support radiologists in their decision-making process.",
      results: [
        { metric: "Diagnostic Accuracy", value: "98%", improvement: "+23%" },
        { metric: "Processing Time", value: "2 minutes", improvement: "-85%" },
        { metric: "Cost Reduction", value: "$2.3M", improvement: "annually" },
        { metric: "Patient Satisfaction", value: "96%", improvement: "+18%" }
      ],
      image: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Deep Learning", "Computer Vision", "TensorFlow", "PACS Integration"],
      testimonial: {
        quote: "Firstscience AI transformed our diagnostic capabilities. We're now able to detect conditions earlier and with unprecedented accuracy, leading to better patient outcomes.",
        author: "Dr. Sarah Johnson",
        role: "Chief Medical Officer, MedTech Global"
      },
      keyFeatures: [
        "Real-time image analysis",
        "Explainable AI for decision support",
        "Integration with existing workflows",
        "Continuous learning from feedback"
      ]
    },
    {
      id: 2,
      title: "Financial Fraud Prevention System",
      client: "SecureBank",
      industry: "Financial Services",
      location: "New York, NY",
      duration: "6 months",
      challenge: "Combating sophisticated fraud attempts while minimizing false positives that impact customer experience. The bank needed a solution that could detect emerging fraud patterns while maintaining a seamless customer experience.",
      solution: "Implemented real-time fraud detection system using ensemble machine learning models and behavioral analysis. The solution processes millions of transactions daily, using advanced pattern recognition and anomaly detection to identify fraudulent activities with minimal false positives.",
      results: [
        { metric: "Fraud Detection", value: "99.2%", improvement: "+34%" },
        { metric: "False Positives", value: "0.8%", improvement: "-67%" },
        { metric: "Annual Savings", value: "$15M", improvement: "vs. previous system" },
        { metric: "Response Time", value: "<100ms", improvement: "real-time" }
      ],
      image: "https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Machine Learning", "Real-time Analytics", "Behavioral Analysis", "Risk Scoring"],
      testimonial: {
        quote: "The AI solution has revolutionized our fraud prevention capabilities. We're catching more fraud while improving customer satisfaction through fewer false alarms.",
        author: "Michael Chen",
        role: "Head of Risk Management, SecureBank"
      },
      keyFeatures: [
        "Real-time transaction monitoring",
        "Adaptive learning algorithms",
        "Multi-factor risk assessment",
        "Automated alert prioritization"
      ]
    },
    {
      id: 3,
      title: "Manufacturing Optimization Platform",
      client: "AutoParts Inc.",
      industry: "Manufacturing",
      location: "Detroit, MI",
      duration: "10 months",
      challenge: "Reducing equipment downtime and optimizing production efficiency across multiple facilities. The company was losing millions annually due to unexpected equipment failures and suboptimal production scheduling.",
      solution: "Deployed predictive maintenance system with IoT sensors and machine learning algorithms for failure prediction. The platform monitors equipment health in real-time, predicts failures before they occur, and optimizes production schedules to maximize efficiency.",
      results: [
        { metric: "Downtime Reduction", value: "78%", improvement: "vs. previous year" },
        { metric: "Production Efficiency", value: "94%", improvement: "+18%" },
        { metric: "Maintenance Costs", value: "$1.8M", improvement: "saved annually" },
        { metric: "Equipment Lifespan", value: "+25%", improvement: "extended" }
      ],
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["IoT", "Predictive Analytics", "Edge Computing", "Digital Twin"],
      testimonial: {
        quote: "The predictive maintenance solution has transformed our operations. We've virtually eliminated unexpected breakdowns and significantly improved our production efficiency.",
        author: "Lisa Rodriguez",
        role: "Operations Director, AutoParts Inc."
      },
      keyFeatures: [
        "Real-time equipment monitoring",
        "Predictive failure analysis",
        "Automated maintenance scheduling",
        "Production optimization algorithms"
      ]
    },
    {
      id: 4,
      title: "Retail Customer Experience Enhancement",
      client: "ShopSmart",
      industry: "Retail & E-commerce",
      location: "San Francisco, CA",
      duration: "7 months",
      challenge: "Improving customer engagement and conversion rates through personalized shopping experiences. The retailer needed to compete with larger e-commerce players by offering tailored recommendations and seamless omnichannel experiences.",
      solution: "Implemented AI-powered personalization engine that analyzes customer behavior, preferences, and purchase history to deliver hyper-personalized product recommendations and marketing campaigns across all channels.",
      results: [
        { metric: "Conversion Rate", value: "32%", improvement: "+45%" },
        { metric: "Average Order Value", value: "$127", improvement: "+28%" },
        { metric: "Customer Retention", value: "89%", improvement: "+22%" },
        { metric: "Revenue Growth", value: "$8.5M", improvement: "annually" }
      ],
      image: "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Recommendation Systems", "NLP", "Customer Analytics", "A/B Testing"],
      testimonial: {
        quote: "The personalization platform has completely changed our customer engagement. Our customers now receive recommendations they actually want, and our sales reflect that.",
        author: "Jennifer Lee",
        role: "VP of Marketing, ShopSmart"
      },
      keyFeatures: [
        "Real-time personalization",
        "Cross-channel consistency",
        "Behavioral analytics",
        "Dynamic pricing optimization"
      ]
    },
    {
      id: 5,
      title: "Supply Chain Optimization Solution",
      client: "LogiFlow Global",
      industry: "Logistics",
      location: "Chicago, IL",
      duration: "9 months",
      challenge: "Optimizing complex supply chain operations to reduce costs and improve delivery times. The company struggled with route optimization, inventory management, and demand forecasting across a global network.",
      solution: "Developed an end-to-end AI-powered supply chain platform that optimizes routing, predicts demand, manages inventory levels, and identifies potential disruptions before they impact operations.",
      results: [
        { metric: "Delivery Time", value: "2.1 days", improvement: "-38%" },
        { metric: "Logistics Costs", value: "$4.2M", improvement: "saved annually" },
        { metric: "On-time Delivery", value: "97%", improvement: "+19%" },
        { metric: "Inventory Efficiency", value: "91%", improvement: "+24%" }
      ],
      image: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Route Optimization", "Demand Forecasting", "Supply Chain Analytics", "ML Models"],
      testimonial: {
        quote: "This solution has given us visibility and control over our supply chain that we never thought possible. The cost savings and efficiency gains have exceeded all expectations.",
        author: "Robert Martinez",
        role: "Chief Supply Chain Officer, LogiFlow Global"
      },
      keyFeatures: [
        "Dynamic route optimization",
        "Demand prediction",
        "Inventory optimization",
        "Risk management"
      ]
    },
    {
      id: 6,
      title: "Energy Grid Management System",
      client: "PowerGrid Solutions",
      industry: "Energy & Utilities",
      location: "Houston, TX",
      duration: "12 months",
      challenge: "Managing complex energy distribution networks to optimize efficiency and integrate renewable energy sources. The utility needed to balance supply and demand while maximizing use of renewable energy.",
      solution: "Built an AI-driven energy management platform that predicts demand, optimizes distribution, integrates renewable sources, and automatically adjusts to changing conditions in real-time.",
      results: [
        { metric: "Energy Efficiency", value: "96%", improvement: "+15%" },
        { metric: "Renewable Integration", value: "68%", improvement: "+42%" },
        { metric: "Cost Savings", value: "$12M", improvement: "annually" },
        { metric: "Grid Reliability", value: "99.8%", improvement: "+5%" }
      ],
      image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Smart Grid", "Time Series Forecasting", "Load Balancing", "Energy Analytics"],
      testimonial: {
        quote: "The AI platform has revolutionized how we manage our grid. We're now able to maximize renewable energy use while maintaining rock-solid reliability.",
        author: "David Thompson",
        role: "Chief Technology Officer, PowerGrid Solutions"
      },
      keyFeatures: [
        "Real-time load forecasting",
        "Renewable energy optimization",
        "Automated demand response",
        "Predictive maintenance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Case Studies</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore how we've helped organizations across industries transform their operations
            with cutting-edge AI solutions. Real challenges, innovative solutions, measurable results.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-gray-700 font-medium">Projects Delivered</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$500M+</div>
            <div className="text-gray-700 font-medium">Client Savings</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-700 font-medium">Success Rate</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-700 font-medium">Industries</div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="bg-gray-900 border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Image Section */}
                <div className="lg:col-span-2 relative h-64 lg:h-auto">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <Building2 className="w-4 h-4" />
                      <span className="text-sm font-medium">{study.industry}</span>
                    </div>
                    <div className="text-2xl font-bold mb-1">{study.client}</div>
                    <div className="flex items-center space-x-2 text-sm opacity-90">
                      <Calendar className="w-4 h-4" />
                      <span>{study.duration}</span>
                      <span>•</span>
                      <span>{study.location}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-3 p-8">
                  <h2 className="text-3xl font-bold text-white mb-4">{study.title}</h2>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="text-sm font-bold text-blue-600 uppercase mb-2">Challenge</h3>
                      <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-green-600 uppercase mb-2">Solution</h3>
                      <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center p-4 bg-gray-800/50 border border-gray-700 rounded-lg border border-gray-200">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{result.value}</div>
                        <div className="text-xs text-gray-300 mb-1">{result.metric}</div>
                        <div className="text-xs text-green-600 font-semibold">{result.improvement}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-white uppercase mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-white uppercase mb-3">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {study.keyFeatures.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                    <div className="flex items-start space-x-3 mb-3">
                      <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-800 italic leading-relaxed">"{study.testimonial.quote}"</p>
                    </div>
                    <div className="flex items-center space-x-3 ml-8">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        {study.testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-white">{study.testimonial.author}</div>
                        <div className="text-sm text-gray-300">{study.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with AI solutions tailored to your unique challenges.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold shadow-lg"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
