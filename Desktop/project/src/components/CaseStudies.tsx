import React from 'react';
import { ArrowRight, TrendingUp, Users, Clock, Award } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Healthcare Diagnostics Revolution",
      client: "MedTech Global",
      industry: "Healthcare",
      challenge: "Reducing diagnostic errors and improving patient outcomes through AI-powered medical imaging analysis.",
      solution: "Developed a deep learning model for medical image analysis with 98% accuracy in detecting anomalies.",
      results: [
        { metric: "Diagnostic Accuracy", value: "98%", improvement: "+23%" },
        { metric: "Processing Time", value: "2 minutes", improvement: "-85%" },
        { metric: "Cost Reduction", value: "$2.3M", improvement: "annually" }
      ],
      image: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800",
      testimonial: {
        quote: "Firstscience AI transformed our diagnostic capabilities. We're now able to detect conditions earlier and with unprecedented accuracy.",
        author: "Dr. Sarah Johnson",
        role: "Chief Medical Officer, MedTech Global"
      }
    },
    {
      title: "Financial Fraud Prevention",
      client: "SecureBank",
      industry: "Financial Services",
      challenge: "Combating sophisticated fraud attempts while minimizing false positives that impact customer experience.",
      solution: "Implemented real-time fraud detection system using ensemble machine learning models and behavioral analysis.",
      results: [
        { metric: "Fraud Detection", value: "99.2%", improvement: "+34%" },
        { metric: "False Positives", value: "0.8%", improvement: "-67%" },
        { metric: "Savings", value: "$15M", improvement: "annually" }
      ],
      image: "https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800",
      testimonial: {
        quote: "The AI solution has revolutionized our fraud prevention. We're catching more fraud while improving customer satisfaction.",
        author: "Michael Chen",
        role: "Head of Risk Management, SecureBank"
      }
    },
    {
      title: "Manufacturing Optimization",
      client: "AutoParts Inc.",
      industry: "Manufacturing",
      challenge: "Reducing equipment downtime and optimizing production efficiency across multiple facilities.",
      solution: "Deployed predictive maintenance system with IoT sensors and machine learning algorithms for failure prediction.",
      results: [
        { metric: "Downtime Reduction", value: "78%", improvement: "vs. previous year" },
        { metric: "Production Efficiency", value: "94%", improvement: "+18%" },
        { metric: "Maintenance Costs", value: "$1.8M", improvement: "saved annually" }
      ],
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
      testimonial: {
        quote: "The predictive maintenance solution has transformed our operations. We've virtually eliminated unexpected breakdowns.",
        author: "Lisa Rodriguez",
        role: "Operations Director, AutoParts Inc."
      }
    }
  ];

  const testimonials = [
    {
      quote: "Working with Firstscience AI was a game-changer. Their expertise and innovative approach delivered results beyond our expectations.",
      author: "David Park",
      role: "CTO, TechCorp",
      company: "Fortune 500 Technology Company"
    },
    {
      quote: "The AI solution increased our operational efficiency by 40% within the first quarter. Outstanding ROI and support.",
      author: "Emma Thompson",
      role: "VP Operations, LogiFlow",
      company: "Global Logistics Provider"
    },
    {
      quote: "Firstscience AI's team understood our unique challenges and delivered a solution that perfectly fit our needs.",
      author: "James Wilson",
      role: "Head of Innovation, RetailMax",
      company: "Leading Retail Chain"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real clients. See how our AI solutions have transformed businesses across industries.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-20 mb-20">
          {caseStudies.map((study, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-sm opacity-90">{study.industry}</div>
                    <div className="text-2xl font-bold">{study.client}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 ease-in-out">
                        <div className="text-2xl font-bold text-blue-600">{result.value}</div>
                        <div className="text-sm text-gray-600 mb-1">{result.metric}</div>
                        <div className="text-xs text-green-600 font-medium">{result.improvement}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-blue-50 rounded-xl p-6">
                    <p className="text-gray-700 italic mb-4">"{study.testimonial.quote}"</p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {study.testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{study.testimonial.author}</div>
                        <div className="text-sm text-gray-600">{study.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-blue-600 mt-1">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Examples */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Proven ROI Across Industries</h3>
          <p className="text-xl mb-8 opacity-90">
            Our clients typically see significant returns within the first 6 months
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold mb-2">300%</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">6 months</div>
              <div className="text-sm opacity-90">Payback Period</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">40%</div>
              <div className="text-sm opacity-90">Efficiency Gain</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">Client Retention</div>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
          >
            Start Your Success Story
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;