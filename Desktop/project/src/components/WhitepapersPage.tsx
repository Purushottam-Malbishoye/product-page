import React from 'react';
import { FileText, Download } from 'lucide-react';

const WhitepapersPage = () => {
  const whitepapers = [
    {
      title: "Enterprise Technology Strategy: A Complete Implementation Guide",
      description: "Comprehensive roadmap for organizations looking to implement advanced technology at scale. This guide covers planning, execution, and optimization strategies for successful AI deployment.",
      pages: "45 pages",
      category: "Strategy",
      publishDate: "March 2024",
      author: "Dr. Sarah Chen & Team"
    },
    {
      title: "Predictive Analytics in Manufacturing: Case Studies & Best Practices",
      description: "Real-world examples of how predictive analytics is transforming manufacturing operations. Learn from successful implementations across various manufacturing sectors.",
      pages: "32 pages",
      category: "Manufacturing",
      publishDate: "February 2024",
      author: "Michael Rodriguez"
    },
    {
      title: "Technology Security Framework: Protecting Your Intelligent Systems",
      description: "Essential security considerations and frameworks for advanced technology system deployment. Comprehensive coverage of threat models, mitigation strategies, and compliance requirements.",
      pages: "28 pages",
      category: "Security",
      publishDate: "January 2024",
      author: "Aisha Patel"
    },
    {
      title: "ROI Analysis: Measuring the Business Impact of AI Solutions",
      description: "A detailed guide to calculating and demonstrating return on investment for AI initiatives. Includes frameworks, metrics, and real-world case studies.",
      pages: "38 pages",
      category: "Business",
      publishDate: "December 2023",
      author: "James Thompson"
    },
    {
      title: "Natural Language Processing: From Theory to Production",
      description: "Practical guide for implementing NLP solutions in enterprise environments. Covers model selection, training, deployment, and monitoring best practices.",
      pages: "52 pages",
      category: "Technology",
      publishDate: "November 2023",
      author: "Dr. Sarah Chen"
    },
    {
      title: "Ethical AI: Building Responsible and Trustworthy Systems",
      description: "Framework for developing AI systems that are fair, transparent, and accountable. Includes guidelines for bias detection, explainability, and regulatory compliance.",
      pages: "41 pages",
      category: "Ethics",
      publishDate: "October 2023",
      author: "Dr. Lisa Rodriguez & Team"
    }
  ];

  return (
    <section className="pt-20 pb-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-full mb-6">
            <FileText className="w-8 h-8 text-orange-500" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Whitepapers</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            In-depth guides and comprehensive reports on technology implementation and best practices. Download our latest research and insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whitepapers.map((paper, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 flex flex-col">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>

              <div className="mb-4 flex items-center gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  {paper.category}
                </span>
              </div>

              <h2 className="text-xl font-bold text-white mb-3">{paper.title}</h2>
              <p className="text-gray-300 mb-4 leading-relaxed flex-grow">{paper.description}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{paper.pages}</span>
                  <span>{paper.publishDate}</span>
                </div>
                <div className="text-sm text-gray-300">
                  <span className="font-medium">Author:</span> {paper.author}
                </div>
              </div>

              <a
                href="#download"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium mt-auto"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 rounded-2xl p-12 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Custom Research?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team can provide customized whitepapers and research tailored to your specific industry and challenges.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
          >
            Request Custom Research
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhitepapersPage;
