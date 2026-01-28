import React from 'react';
import { MessageSquare, Mail, Zap, Users, TrendingUp, Clock, CheckCircle, BarChart3, Bot, Target, Search, Database, Bell, Activity, LineChart, Sparkles, Brain, Workflow, Shield, ArrowRight } from 'lucide-react';
import SEOHead from './SEOHead';

interface AISDRPageProps {
  onContactClick?: () => void;
}

const AISDRPage: React.FC<AISDRPageProps> = ({ onContactClick }) => {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onContactClick) {
      onContactClick();
    }
  };
  const intelligenceFeatures = [
    {
      icon: <Bell className="w-8 h-8" />,
      title: "AI-Powered Buying Signal Detection",
      description: "AI-driven intelligence that identifies and surfaces specific buying intent signals indicating prospects entering active buying cycles. Monitors job changes, executive hires, funding announcements, technology adoption, and hiring spikes for optimal sales timing."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Automated Lead Generation & AI Prospecting",
      description: "Autonomous AI-powered prospecting that searches, identifies, and builds qualified lead lists matching your Ideal Customer Profile (ICP). Uses machine learning to analyze industry, company size, revenue, technology stack, and behavioral data for precision B2B targeting."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Real-Time AI Data Enrichment & Verification",
      description: "Automated data enrichment that appends and verifies contact profiles with accurate email addresses, direct-dial phone numbers, LinkedIn profiles, job titles, and comprehensive firmographic data for enhanced sales intelligence and outreach accuracy."
    }
  ];

  const aiToolsFeatures = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI-Powered Hyper-Personalized Messaging",
      description: "Advanced natural language processing (NLP) that generates contextually relevant, hyper-personalized sales messages at scale. References company news, hiring trends, technology changes, competitor analysis, and tailored value propositions for maximum engagement."
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Automated Multi-Channel Campaign Management",
      description: "Orchestrates sophisticated multi-channel sales campaigns across email, LinkedIn, phone, and social media. AI generates initial outreach, intelligent follow-up sequences, call scripts, and messaging that syncs seamlessly with your CRM and sales engagement platforms."
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "AI Sentiment Analysis & Meeting Qualification",
      description: "Machine learning-powered sentiment analysis that recognizes positive buying intent, objection handling opportunities, and qualified prospects in email replies. Automatically flags high-intent conversations and books meetings for human sales representatives."
    }
  ];

  const workflowFeatures = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Enterprise CRM Integration & Automation",
      description: "Bi-directional integration with Salesforce, HubSpot, Microsoft Dynamics, and leading CRMs. Eliminates data silos by automatically logging all activities, updating lead status, enriching contact records, and maintaining clean, accurate sales data."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Intelligent Lead Routing & Assignment",
      description: "AI-powered rules-based automation that intelligently routes qualified leads, updates opportunity stages, assigns appropriate account executives based on territory/expertise, and triggers real-time notifications for high-priority sales events."
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "AI Sales Analytics & Pipeline Intelligence",
      description: "Real-time sales analytics dashboards with AI-powered insights. Track email engagement, response rates, sentiment trends, conversion metrics, pipeline velocity, and qualified meeting bookings. Predictive forecasting for revenue optimization and strategic planning."
    }
  ];

  const personalizationFeatures = [
    {
      title: "Behavior-Based Messaging",
      description: "Triggers outreach based on real-time signals like pricing page visits or content engagement, ensuring messages are always timely and contextually relevant."
    },
    {
      title: "Multi-Stakeholder Engagement",
      description: "Engages with multiple stakeholders within target accounts and dynamically adjusts outreach strategy based on their responses and behavior."
    },
    {
      title: "95% Lead Scoring Accuracy",
      description: "Data-driven approach that identifies best-fit prospects and scores leads with greater accuracy than human-only processes."
    }
  ];

  const transformationBenefits = [
    {
      icon: <Users className="w-6 h-6" />,
      benefit: "Free human SDRs from administrative burden to focus on building genuine relationships and complex sales conversations"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      benefit: "Enable teams to refine strategic thinking, emotional intelligence, and complex problem-solving skills"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      benefit: "Provide sales managers with AI-driven analytics for effective strategic planning and coaching"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      benefit: "Create more reliable and predictable pipeline performance through consistent execution"
    }
  ];

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Sales Development Representative (AI SDR)",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    },
    "featureList": [
      "AI-powered sales automation",
      "Automated lead generation and prospecting",
      "Buying signal detection",
      "Hyper-personalized outreach at scale",
      "CRM integration",
      "Multi-channel campaign management",
      "Predictive lead scoring",
      "Real-time data enrichment",
      "Automated meeting booking",
      "Pipeline analytics"
    ],
    "description": "Enterprise AI Sales Development Representative software that automates prospecting, lead generation, and outreach. Features include buying signal detection, automated list building, AI-powered personalization, and seamless CRM integration. Achieve 75% cost savings and 3x more meetings booked with intelligent sales automation."
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <SEOHead
        title="AI Sales Development Representative (AI SDR) | Automated Lead Generation & Sales Prospecting Software | Firstscience AI"
        description="Leading AI Sales Development Representative (AI SDR) software for B2B sales automation. Automate prospecting, lead generation, and outreach with AI-powered personalization. Features buying signal detection, automated list building, CRM integration, and predictive lead scoring. Achieve 75% cost savings, 3x more meetings, and 302% better personalization. Transform your sales development with enterprise-grade AI SDR technology."
        keywords="AI sales development representative, AI SDR, sales automation software, automated lead generation, AI prospecting tool, B2B sales automation, AI sales assistant, automated outreach software, sales development automation, AI lead generation, intelligent prospecting, AI sales tool, automated sales prospecting, AI-powered sales, sales intelligence software, automated email outreach, AI sales engagement, sales automation platform, AI BDR, business development automation, AI cold outreach, sales AI software, automated sales development, AI sales prospecting, lead generation automation, AI account based selling, sales acceleration software, AI outbound sales, automated appointment setting, AI sales outreach, predictive lead scoring, sales workflow automation, AI email personalization, automated CRM updates, AI meeting booking, sales funnel automation, AI sales pipeline, B2B lead generation software, enterprise sales automation, AI revenue operations, sales productivity software, automated follow-up sequences"
        canonical="https://firstscienceai.com/ai-sdr"
        ogTitle="AI Sales Development Representative (AI SDR) - Automated Sales Prospecting & Lead Generation"
        ogDescription="Transform your sales development with AI SDR software. Automate prospecting, lead generation, and personalized outreach. 75% cost savings, 3x more meetings booked. Enterprise AI sales automation by Firstscience AI."
        ogImage="https://firstscienceai.com/ai-sdr-og-image.jpg"
        twitterTitle="AI SDR - Automated Sales Development & Lead Generation Software"
        twitterDescription="AI-powered sales automation for B2B teams. Automated prospecting, buying signal detection, and hyper-personalized outreach. 75% cost savings and 3x more meetings."
        twitterImage="https://firstscienceai.com/ai-sdr-twitter-image.jpg"
        schema={seoSchema}
      />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">AI Sales Development Representative (AI SDR)</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Enterprise AI-Powered Sales Automation & Automated Lead Generation Software for B2B Teams
            </p>
            <p className="text-lg text-blue-50 leading-relaxed mb-10">
              Transform your sales development with intelligent AI SDR technology that automates prospecting, lead generation,
              and personalized outreach at scale. Combine the efficiency of sales automation with AI-powered intelligence and
              hyper-personalization that drives measurable results. Experience up to 75% cost savings, 3x more meetings booked,
              and unprecedented B2B pipeline growth with the industry's leading AI Sales Development Representative platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContactClick}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Get Started Today
              </button>
              <a
                href="#intelligence"
                className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 border-2 border-blue-500"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sales Intelligence Section */}
      <div id="intelligence" className="py-20 bg-gray-800/50 backdrop-blur-sm border border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI-Powered Sales Intelligence & Automated Prospecting Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Move from reactive to proactive B2B sales with AI-driven sales intelligence and automated prospecting.
              Our AI SDR identifies high-value prospects using buying signal detection at the precise moment they're
              most receptive, maximizing conversion rates and sales efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {intelligenceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500"
              >
                <div className="w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center mb-6 text-orange-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-600 text-white rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold mb-4">The Foundation of Effective AI Sales Development Representative Technology</h3>
            <p className="text-blue-50 leading-relaxed text-lg">
              Modern AI SDR sales automation software goes beyond simple contact databases to provide enterprise-grade
              AI-powered prospecting, intelligent lead generation, and sophisticated sales intelligence. Instead of manual
              cold outreach to unqualified lists, our AI Sales Development Representative engages high-intent prospects
              at the optimal moment with automated, personalized messaging—eliminating the manual grind of list building
              and freeing your human sales reps for strategic, high-value relationship building and deal closing.
            </p>
          </div>

          {/* Deep Dive: Critical Features */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Buying Signal Detection Deep Dive */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-blue-500/30 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-14 h-14 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  <Bell className="w-7 h-7 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Buying Signal Detection</h3>
                  <p className="text-orange-400 font-semibold">The Single Most Important Feature</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  This is the AI's ability to identify and surface specific events that indicate a prospect
                  or account is entering a buying cycle. These signals include:
                </p>

                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Job changes, especially past customers or champions starting new roles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>New executive hires at target accounts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Company funding announcements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Spikes in hiring for roles your product serves</span>
                  </li>
                </ul>

                <div className="bg-blue-900/50 border border-blue-500/30 rounded-xl p-6 mt-6">
                  <h4 className="font-bold text-white mb-3 flex items-center">
                    <Target className="w-5 h-5 text-orange-400 mr-2" />
                    Why This Matters
                  </h4>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    This is arguably the single most important feature because it solves for <strong>timing</strong>.
                    Instead of reaching out to a cold list, buying signal detection allows you to engage prospects
                    at the precise moment they are most receptive to new solutions.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    This dramatically increases response rates and ensures your team is focused on opportunities
                    with the highest probability of closing.
                  </p>
                </div>
              </div>
            </div>

            {/* Automated Prospecting Deep Dive */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-green-500/30 hover:border-green-500 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-14 h-14 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  <Search className="w-7 h-7 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Automated Prospecting & List Building</h3>
                  <p className="text-green-400 font-semibold">Maximum Efficiency at Scale</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  This feature enables AI to autonomously search for and build lists of net-new leads that
                  fit your Ideal Customer Profile (ICP). Based on the criteria you set, the AI can generate
                  a highly-targeted prospect list:
                </p>

                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Industry-specific targeting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Company size and revenue filters</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Technology stack identification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Geographic and demographic criteria</span>
                  </li>
                </ul>

                <div className="bg-green-900/50 border border-green-500/30 rounded-xl p-6 mt-6">
                  <h4 className="font-bold text-white mb-3 flex items-center">
                    <Clock className="w-5 h-5 text-green-400 mr-2" />
                    The Efficiency Advantage
                  </h4>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    The primary benefit here is <strong>efficiency</strong>. Automated prospecting directly
                    addresses one of the most time-consuming parts of the sales development process, eliminating
                    the hours sales reps spend manually searching through databases or LinkedIn.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    It frees up your human SDRs from the manual grind of list building, allowing them to
                    reallocate their time to higher-value sales activities like personalizing outreach for
                    key accounts and having strategic conversations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Essential AI Sales Tools */}
      <div className="py-20 bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Essential AI Sales Tools & Automated Outreach Features for B2B Sales Teams</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage AI-powered personalization and automated multi-channel outreach. Our AI SDR analyzes
              hundreds of data points to create hyper-personalized sales messages that drive engagement,
              response rates, and qualified meeting conversions at scale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aiToolsFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:shadow-xl hover:border-orange-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center mb-6 text-orange-400 shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Workflow & Optimization */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Sales Workflow Automation & CRM Integration Excellence</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seamless AI SDR integration with your existing CRM, sales engagement platforms, and marketing automation tools.
              Eliminate data silos, automate repetitive tasks, and orchestrate your entire sales development workflow
              with enterprise-grade AI sales automation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workflowFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center mb-6 text-orange-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hyper-Personalization at Scale */}
      <div className="py-20 bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI-Powered Hyper-Personalization at Enterprise Scale</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deliver AI-generated personalized sales outreach at scale that would be impossible for human SDRs to replicate manually.
              Leverage machine learning, natural language processing, and predictive analytics for automated personalization
              that drives 302% better engagement than traditional sales development approaches
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {personalizationFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                The Power of Intelligent Personalization
              </h3>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                The AI SDR analyzes hundreds of data points—including prospect behavior, intent signals,
                firmographics, and technology stacks—to craft messages that are highly relevant to each
                individual. This ensures messages are always timely and contextually relevant, driving
                significantly higher response rates.
              </p>
              <div className="flex items-center text-white">
                <Sparkles className="w-6 h-6 mr-2" />
                <span className="font-semibold">
                  302% more personalization than traditional approaches
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optimized Funnel Performance */}
      <div className="py-20 bg-gray-800/50 backdrop-blur-sm border border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI-Optimized Sales Funnel Performance & Predictive Lead Scoring</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Data-driven AI sales optimization that improves every stage of your B2B sales funnel.
              Leverage predictive lead scoring, automated pipeline management, and AI-powered sales analytics
              to maximize conversion rates and accelerate revenue growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Target className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Best-Fit Prospect Identification</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Scores leads with up to 95% accuracy—greater than human-only processes—ensuring your
                    human reps focus only on the most promising opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <LineChart className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Predictable Pipeline Performance</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Consistent execution and real-time analytics create more reliable and predictable
                    pipeline, helping teams refine strategies and optimize resource allocation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Transformation */}
      <div className="py-20 bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Strategic Transformation: AI SDR + Human Sales Teams</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Sales Development Representative doesn't replace human sales professionals—it augments and transforms
              their roles for exponentially higher impact. Automate repetitive prospecting tasks while empowering
              your sales team to focus on strategic relationship building, complex deal navigation, and revenue acceleration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {transformationBenefits.map((item, index) => (
              <div
                key={index}
                className="flex items-start bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 text-white">
                  {item.icon}
                </div>
                <p className="text-gray-300 leading-relaxed pt-2">{item.benefit}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-2xl p-12">
            <div className="max-w-3xl mx-auto text-center">
              <Shield className="w-16 h-16 mx-auto mb-6 text-blue-200" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Shift Focus to What Matters Most
              </h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                With AI handling repetitive tasks like prospecting and CRM updates, human team members
                can focus on building genuine relationships, navigating complex sales conversations, and
                developing the strategic thinking and emotional intelligence that closes deals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI SDR Results & Sales Automation ROI</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Proven enterprise sales automation results from AI-powered sales development
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-800/50 backdrop-blur-sm/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold mb-2">75%</div>
              <div className="text-lg text-blue-100">Cost Savings</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold mb-2">302%</div>
              <div className="text-lg text-blue-100">More Personalization</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-lg text-blue-100">Lead Scoring Accuracy</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold mb-2">3x</div>
              <div className="text-lg text-blue-100">More Meetings Booked</div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Sales Development with AI SDR Technology?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Our AI Sales Development Representative platform represents the future of B2B sales automation—combining
            enterprise-scale automated prospecting with AI-powered intelligence, predictive analytics, and hyper-personalized
            outreach that drives measurable revenue results and sustainable pipeline growth.
          </p>
          <p className="text-lg text-blue-200 mb-10 leading-relaxed">
            With up to 75% cost savings, immediate deployment capability, 3x more qualified meetings booked, 302% better
            personalization, and the ability to engage thousands of high-value prospects simultaneously with intelligent
            automation, our AI SDR software isn't just an upgrade to your sales development process—it's a complete digital
            transformation of how your B2B sales team generates and converts pipeline opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <a
              href="#intelligence"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 transition-colors duration-200 border-2 border-blue-400"
            >
              Learn More
            </a>
          </div>
          <p className="mt-8 text-blue-200 text-sm">
            Don't let your competition gain the advantage. Discover how an AI SDR can revolutionize
            your sales development efforts and drive unprecedented pipeline growth for your organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AISDRPage;
