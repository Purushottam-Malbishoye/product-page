import React, { useState } from 'react';
import { Users, MapPin, ArrowRight, Mail, Phone, Sparkles, Rocket, Target, Award, TrendingUp, Zap } from 'lucide-react';
import JobApplicationModal from './JobApplicationModal';
import SEOHead from './SEOHead';

const CareerPage = ({ onContactClick }: { onContactClick?: () => void }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');

  const mlAiRoles = [
    {
      title: 'Machine Learning Engineer',
      department: 'Machine Learning & AI',
      location: 'Bhubaneswar',
      openings: 3,
      skills: 'Python, TensorFlow, PyTorch, Model Development'
    },
    {
      title: 'Senior ML Research Scientist',
      department: 'Machine Learning & AI',
      location: 'Bangalore',
      openings: 2,
      skills: 'Deep Learning, Research, Publications, Algorithm Design'
    },
    {
      title: 'Computer Vision Specialist',
      department: 'Machine Learning & AI',
      location: 'Bhubaneswar',
      openings: 2,
      skills: 'OpenCV, Image Processing, Object Detection, CNNs'
    },
    {
      title: 'Data Scientist – Predictive Analytics',
      department: 'Machine Learning & AI',
      location: 'Mumbai',
      openings: 2,
      skills: 'Statistics, Python, R, Predictive Modeling'
    },
    {
      title: 'NLP Engineer',
      department: 'Machine Learning & AI',
      location: 'Bhubaneswar',
      openings: 2,
      skills: 'NLP, Transformers, BERT, GPT, Text Analysis'
    },
    {
      title: 'Reinforcement Learning Expert',
      department: 'Machine Learning & AI',
      location: 'Bangalore',
      openings: 1,
      skills: 'RL Algorithms, Game Theory, Optimization'
    },
    {
      title: 'MLOps Engineer',
      department: 'Machine Learning & AI',
      location: 'Bhubaneswar',
      openings: 2,
      skills: 'Docker, Kubernetes, CI/CD, Model Deployment'
    },
    {
      title: 'AI Ethics Specialist',
      department: 'Machine Learning & AI',
      location: 'Mumbai',
      openings: 1,
      skills: 'AI Governance, Ethics Frameworks, Compliance'
    },
    {
      title: 'Generative AI Developer',
      department: 'Machine Learning & AI',
      location: 'Bhubaneswar',
      openings: 2,
      skills: 'GANs, Diffusion Models, LLMs, Prompt Engineering'
    },
    {
      title: 'Feature Engineer',
      department: 'Machine Learning & AI',
      location: 'Bhubaneswar',
      openings: 1,
      skills: 'Feature Engineering, Data Processing, SQL'
    },
    {
      title: 'ML Deployment Architect',
      department: 'Machine Learning & AI',
      location: 'Bangalore',
      openings: 1,
      skills: 'Cloud Architecture, AWS/Azure, Scalability'
    },
    {
      title: 'Time Series Analyst',
      department: 'Machine Learning & AI',
      location: 'Mumbai',
      openings: 1,
      skills: 'Time Series Analysis, Forecasting, ARIMA'
    },
    {
      title: 'Federated Learning Engineer',
      department: 'Machine Learning & AI',
      location: 'Bhubaneswar',
      openings: 1,
      skills: 'Federated Learning, Privacy-Preserving ML'
    },
    {
      title: 'AutoML Specialist',
      department: 'Machine Learning & AI',
      location: 'Bangalore',
      openings: 1,
      skills: 'AutoML, Hyperparameter Tuning, Model Selection'
    },
    {
      title: 'Explainable AI Researcher',
      department: 'Machine Learning & AI',
      location: 'Mumbai',
      openings: 1,
      skills: 'XAI, Model Interpretability, SHAP, LIME'
    }
  ];

  const productSalesRoles = [
    {
      title: 'Product Manager – AI Platforms',
      department: 'Product & Sales',
      location: 'Bangalore',
      openings: 2,
      skills: 'Product Strategy, AI/ML Knowledge, Roadmapping'
    },
    {
      title: 'Technical Product Manager',
      department: 'Product & Sales',
      location: 'Bhubaneswar',
      openings: 2,
      skills: 'Technical Background, API Design, Agile'
    },
    {
      title: 'Account Manager – Enterprise',
      department: 'Product & Sales',
      location: 'Mumbai',
      openings: 3,
      skills: 'B2B Sales, Relationship Management, CRM'
    },
    {
      title: 'Inside Sales Representative',
      department: 'Product & Sales',
      location: 'Bhubaneswar',
      openings: 2,
      skills: 'Lead Generation, Sales Calls, Prospecting'
    },
    {
      title: 'Sales Engineer – AI Solutions',
      department: 'Product & Sales',
      location: 'Bangalore',
      openings: 2,
      skills: 'Technical Sales, Solution Design, Presentations'
    },
    {
      title: 'Customer Success Manager',
      department: 'Product & Sales',
      location: 'Mumbai',
      openings: 2,
      skills: 'Customer Retention, Onboarding, Support'
    },
    {
      title: 'Product Marketing Manager',
      department: 'Product & Sales',
      location: 'Bangalore',
      openings: 1,
      skills: 'Go-to-Market, Content Marketing, Positioning'
    },
    {
      title: 'Growth Product Manager',
      department: 'Product & Sales',
      location: 'Bhubaneswar',
      openings: 1,
      skills: 'Growth Hacking, Analytics, A/B Testing'
    }
  ];

  const engineeringOpsRoles = [
    {
      title: 'Full-Stack Developer',
      department: 'Engineering & Operations',
      location: 'Bhubaneswar',
      openings: 3,
      skills: 'React, Node.js, TypeScript, REST APIs'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering & Operations',
      location: 'Bangalore',
      openings: 2,
      skills: 'AWS/Azure, Terraform, CI/CD, Monitoring'
    },
    {
      title: 'Cloud Architect',
      department: 'Engineering & Operations',
      location: 'Mumbai',
      openings: 2,
      skills: 'Cloud Solutions, Architecture Design, Security'
    },
    {
      title: 'Backend Engineer',
      department: 'Engineering & Operations',
      location: 'Bhubaneswar',
      openings: 3,
      skills: 'Python, Java, Microservices, Databases'
    },
    {
      title: 'QA Engineer – AI Testing',
      department: 'Engineering & Operations',
      location: 'Bangalore',
      openings: 2,
      skills: 'Test Automation, ML Testing, Selenium, Python'
    }
  ];

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const JobCard = ({ job }: { job: typeof mlAiRoles[0] }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500 hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white pr-4">{job.title}</h3>
        <span className="px-3 py-1 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full text-sm font-medium whitespace-nowrap">
          {job.openings} {job.openings === 1 ? 'Opening' : 'Openings'}
        </span>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center text-gray-300">
          <Users className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm">{job.department}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm">{job.location}</span>
        </div>
        <div className="text-sm text-gray-400">
          <span className="font-semibold text-gray-300">Key Skills:</span> {job.skills}
        </div>
      </div>

      <button
        onClick={() => handleApplyClick(job.title)}
        className="inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold transition-colors text-base group"
      >
        Apply Now
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );

  return (
    <>
      <SEOHead
        title="Careers - FirstScienceAI | Join Our Team"
        description="Join FirstScience AI and shape the future of AI technology. Explore open positions in Machine Learning, AI Research, Engineering, Product, and Sales."
        keywords="careers, jobs, AI jobs, machine learning careers, data science jobs, AI engineer, ML engineer"
        canonical="https://firstscienceai.com/career"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center space-x-3 bg-orange-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-500/30">
                  <Sparkles className="w-5 h-5 text-orange-400 animate-pulse" />
                  <span className="text-sm font-semibold text-white">We're Hiring Across Multiple Roles</span>
                  <Sparkles className="w-5 h-5 text-orange-400 animate-pulse" />
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
                Life at FirstScience AI
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12">
                Join a team of innovators, researchers, and engineers building the future of AI.
                We're passionate about pushing boundaries, solving complex challenges, and creating
                AI solutions that transform industries. At FirstScience AI, you'll work on
                cutting-edge technology while growing your career in a collaborative, forward-thinking environment.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                  <Rocket className="w-10 h-10 text-orange-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">Innovation</div>
                  <div className="text-sm text-gray-300">First Culture</div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <Target className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">Impact</div>
                  <div className="text-sm text-gray-300">Driven Work</div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                  <Award className="w-10 h-10 text-orange-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">Growth</div>
                  <div className="text-sm text-gray-300">Career Path</div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <TrendingUp className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">Learning</div>
                  <div className="text-sm text-gray-300">Continuous</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Careers – FirstScienceAI Open Roles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're hiring talented professionals across multiple domains. Find your perfect role below.
            </p>
          </div>

          <div className="space-y-16">
            <div>
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Machine Learning & AI Roles
                </h3>
                <p className="text-lg text-gray-300">
                  15 Positions • Max openings in Bhubaneswar, with presence in Bangalore and Mumbai
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mlAiRoles.map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
              </div>
            </div>

            <div>
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Product & Sales Roles
                </h3>
                <p className="text-lg text-gray-300">
                  8 Positions • Across Bhubaneswar, Bangalore, and Mumbai
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productSalesRoles.map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
              </div>
            </div>

            <div>
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Engineering & Operations Roles
                </h3>
                <p className="text-lg text-gray-300">
                  12 Positions • Distributed across all locations
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {engineeringOpsRoles.map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-20 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

            <div className="relative">
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center space-x-2 bg-orange-500/20 backdrop-blur-sm px-5 py-2 rounded-full border border-orange-500/30">
                  <Zap className="w-5 h-5 text-orange-400" />
                  <span className="text-sm font-semibold text-white">Start Your Journey</span>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Join Our Team?
              </h2>

              <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Don't see the perfect role? We're always looking for exceptional talent.
                Reach out to us and let's explore opportunities together.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
                <a
                  href="mailto:info@firstscienceai.com"
                  className="group inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold text-lg shadow-lg shadow-orange-500/50 hover:shadow-xl hover:scale-105"
                >
                  <Mail className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                  <span>info@firstscienceai.com</span>
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://wa.me/918249414090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-xl hover:bg-green-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Phone className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                  <span>+91 8249414090</span>
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {onContactClick && (
                <button
                  onClick={onContactClick}
                  className="group inline-flex items-center text-gray-300 hover:text-white font-semibold transition-all duration-300 text-lg border-2 border-gray-600 px-8 py-3 rounded-xl hover:bg-gray-700/50 hover:border-orange-500 backdrop-blur-sm"
                >
                  Or Book a Call Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <JobApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={selectedJob}
      />
    </>
  );
};

export default CareerPage;
