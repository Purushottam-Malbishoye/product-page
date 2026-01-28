import React from 'react';
import { BookOpen, FileText, Search, Download, ArrowRight, TrendingUp, Award } from 'lucide-react';
import BlogList from './BlogList';

interface ResourcesProps {
  onBlogClick?: (slug: string) => void;
}

const Resources = ({ onBlogClick }: ResourcesProps) => {
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

  const whitepapers = [
    {
      title: "Enterprise Technology Strategy: A Complete Implementation Guide",
      description: "Comprehensive roadmap for organizations looking to implement advanced technology at scale.",
      pages: "45 pages",
      category: "Strategy"
    },
    {
      title: "Predictive Analytics in Manufacturing: Case Studies & Best Practices",
      description: "Real-world examples of how predictive analytics is transforming manufacturing operations.",
      pages: "32 pages",
      category: "Manufacturing"
    },
    {
      title: "Technology Security Framework: Protecting Your Intelligent Systems",
      description: "Essential security considerations and frameworks for advanced technology system deployment.",
      pages: "28 pages",
      category: "Security"
    }
  ];

  const researchPapers = [
    {
      title: "Federated Learning for Privacy-Preserving Healthcare AI",
      authors: "Dr. Sarah Chen, Dr. Michael Rodriguez",
      journal: "Nature Machine Intelligence",
      year: "2024"
    },
    {
      title: "Explainable Technology in Financial Risk Assessment",
      authors: "Dr. Aisha Patel, James Thompson",
      journal: "Journal of Financial Technology",
      year: "2024"
    },
    {
      title: "Edge Computing for Real-Time Technology Applications",
      authors: "Michael Rodriguez, Dr. Sarah Chen",
      journal: "IEEE Transactions on AI",
      year: "2023"
    }
  ];

  const glossaryTerms = [
    {
      term: "Machine Learning",
      definition: "A subset of advanced technology that enables systems to learn and improve from experience without being explicitly programmed."
    },
    {
      term: "Deep Learning",
      definition: "A machine learning technique based on artificial neural networks with multiple layers."
    },
    {
      term: "Natural Language Processing",
      definition: "Advanced technology that helps computers understand, interpret, and generate human language."
    },
    {
      term: "Computer Vision",
      definition: "Technology field that trains computers to interpret and understand visual information from the world."
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Resources & Insights</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest technology trends, research, and best practices from our experts
          </p>
        </div>

        {/* Articles Section */}
        <div id="resources-articles" className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-2">Articles</h3>
            <p className="text-lg text-gray-300">Expert insights and thought leadership from our team</p>
          </div>
          <BlogList onBlogClick={onBlogClick} />
        </div>

        {/* Success Stories Section */}
        <div id="resources-success-stories" className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-2">Success Stories</h3>
            <p className="text-lg text-gray-300">Real results from real clients. See how our AI solutions have transformed businesses across industries.</p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
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

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-3xl font-bold text-white mb-4">{study.title}</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-white mb-2">Challenge</h5>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-white mb-2">Solution</h5>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center p-4 bg-gray-900 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{result.value}</div>
                          <div className="text-sm text-gray-300 mb-1">{result.metric}</div>
                          <div className="text-xs text-green-600 font-medium">{result.improvement}</div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6">
                      <p className="text-gray-700 italic mb-4">"{study.testimonial.quote}"</p>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {study.testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-white">{study.testimonial.author}</div>
                          <div className="text-sm text-gray-300">{study.testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Whitepapers Section */}
        <div id="resources-whitepapers" className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-2">Whitepapers</h3>
            <p className="text-lg text-gray-300">In-depth guides and comprehensive reports on technology implementation and best practices</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                
                <div className="mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {paper.category}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3">{paper.title}</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">{paper.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{paper.pages}</span>
                  <a
                    href="#download"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Papers */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Research Papers</h3>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              {researchPapers.map((paper, index) => (
                <div key={index} className="flex items-center justify-between p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors duration-200">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">{paper.title}</h4>
                    <p className="text-gray-300 mb-1">Authors: {paper.authors}</p>
                    <p className="text-sm text-gray-500">{paper.journal} • {paper.year}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <a
                      href="#view"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View Paper
                    </a>
                    <a
                      href="#download"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Glossary */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">AI Glossary</h3>
          <h3 className="text-3xl font-bold text-white text-center mb-12">Technology Glossary</h3>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              {glossaryTerms.map((item, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-semibold text-white mb-2">{item.term}</h4>
                  <p className="text-gray-300 leading-relaxed">{item.definition}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <a
                href="#full-glossary"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
              >
                <Search className="w-5 h-5 mr-2" />
                View Full Glossary
              </a>
            </div>
          </div>
        </div>

        {/* Documentation */}
        <div>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">Developer Documentation</h3>
            <p className="text-xl mb-8 opacity-90">
              Comprehensive guides, API references, and tutorials to help you integrate our technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#api-docs"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
              >
                API Documentation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#tutorials"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold"
              >
                Getting Started Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;