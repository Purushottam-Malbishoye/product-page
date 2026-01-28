import React from 'react';
import { Search, TrendingUp, Eye, Shield, Zap, BarChart3, Target, Sparkles, CheckCircle, AlertTriangle, Bell, LineChart, Globe, Brain, ArrowRight } from 'lucide-react';

interface AISearchVisibilityPageProps {
  onContactClick?: () => void;
}

const AISearchVisibilityPage: React.FC<AISearchVisibilityPageProps> = ({ onContactClick }) => {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onContactClick) {
      onContactClick();
    }
  };
  const aiModels = [
    { name: "ChatGPT", logo: "GPT", color: "green" },
    { name: "Claude", logo: "CL", color: "orange" },
    { name: "Gemini", logo: "GM", color: "blue" },
    { name: "Perplexity", logo: "PX", color: "purple" },
    { name: "Meta AI", logo: "MA", color: "indigo" },
    { name: "Copilot", logo: "CP", color: "cyan" }
  ];

  const features = [
    {
      icon: Eye,
      title: "Multi-AI Platform Monitoring",
      description: "Track how your brand appears across all major AI language models and search engines. Get comprehensive visibility into AI-generated responses about your business.",
      benefits: ["Real-time tracking", "Cross-platform analysis", "Historical data trends"]
    },
    {
      icon: BarChart3,
      title: "Brand Mention Analytics",
      description: "Understand when, where, and how your brand is mentioned in AI responses. Identify patterns and opportunities to improve your AI presence.",
      benefits: ["Mention frequency tracking", "Context analysis", "Competitor comparison"]
    },
    {
      icon: Shield,
      title: "Reputation Management",
      description: "Monitor sentiment and accuracy of AI-generated content about your brand. Protect your reputation by identifying and addressing misinformation quickly.",
      benefits: ["Sentiment scoring", "Accuracy verification", "Alert system"]
    },
    {
      icon: Target,
      title: "Keyword Performance",
      description: "Discover which keywords and queries trigger mentions of your brand. Optimize your content strategy based on AI search behavior.",
      benefits: ["Query analysis", "Keyword ranking", "Search intent mapping"]
    },
    {
      icon: TrendingUp,
      title: "Visibility Optimization",
      description: "Receive actionable recommendations to improve your brand's presence in AI responses. Implement proven strategies to increase visibility.",
      benefits: ["AI-ready content guidelines", "Schema markup advice", "Link authority insights"]
    },
    {
      icon: Bell,
      title: "Smart Alerts & Reporting",
      description: "Get notified when significant changes occur in your AI visibility. Access detailed reports to track progress and demonstrate value.",
      benefits: ["Custom alert rules", "Automated reports", "Team collaboration tools"]
    }
  ];

  const metrics = [
    {
      icon: Eye,
      value: "100+",
      label: "Daily AI Queries Monitored",
      color: "blue"
    },
    {
      icon: Globe,
      value: "15+",
      label: "AI Platforms Tracked",
      color: "green"
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Mention Detection Accuracy",
      color: "purple"
    },
    {
      icon: Zap,
      value: "<5min",
      label: "Real-time Update Frequency",
      color: "orange"
    }
  ];

  const useCases = [
    {
      title: "Brand Monitoring",
      description: "Stay informed about how AI models present your brand, products, and services to users worldwide.",
      icon: Shield,
      examples: ["Track brand sentiment", "Identify misrepresentations", "Monitor competitor mentions"]
    },
    {
      title: "SEO & Marketing",
      description: "Optimize your digital presence for AI search engines and improve discoverability in AI-generated responses.",
      icon: Search,
      examples: ["AI SEO optimization", "Content strategy insights", "Keyword performance analysis"]
    },
    {
      title: "Competitive Intelligence",
      description: "Understand how you compare to competitors in AI visibility and identify opportunities to gain market share.",
      icon: Target,
      examples: ["Competitor benchmarking", "Market positioning", "Share of voice analysis"]
    },
    {
      title: "Crisis Management",
      description: "Detect and respond to potential reputation issues before they escalate across AI platforms.",
      icon: AlertTriangle,
      examples: ["Real-time alerts", "Negative mention tracking", "Response coordination"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses getting started with AI visibility tracking",
      features: [
        "5 AI platforms monitored",
        "50 keyword tracking",
        "Weekly reports",
        "Email alerts",
        "Basic sentiment analysis",
        "1 user account"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing companies serious about AI search presence",
      features: [
        "15 AI platforms monitored",
        "200 keyword tracking",
        "Daily reports",
        "Real-time alerts",
        "Advanced sentiment analysis",
        "Competitor tracking (3 competitors)",
        "API access",
        "5 user accounts"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Comprehensive solution for large organizations with complex needs",
      features: [
        "All AI platforms monitored",
        "Unlimited keyword tracking",
        "Real-time reports",
        "Priority alerts",
        "AI reputation management",
        "Unlimited competitor tracking",
        "Full API access",
        "Dedicated account manager",
        "Custom integrations",
        "Unlimited users"
      ],
      highlighted: false
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Connect Your Brand",
      description: "Set up your brand profile, define key products/services, and specify the keywords you want to monitor across AI platforms.",
      icon: Target
    },
    {
      step: "2",
      title: "AI Platforms Monitoring",
      description: "Our system continuously queries major AI models with relevant searches to track how your brand appears in responses.",
      icon: Search
    },
    {
      step: "3",
      title: "Analysis & Insights",
      description: "Advanced algorithms analyze mentions, sentiment, context, and accuracy to provide comprehensive visibility metrics.",
      icon: Brain
    },
    {
      step: "4",
      title: "Optimize & Improve",
      description: "Receive actionable recommendations and implement strategies to enhance your brand's AI search visibility.",
      icon: Sparkles
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm/20 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Brand Intelligence
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Master Your Brand's AI Search Visibility
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Track, analyze, and optimize how your brand appears in AI-generated search results
                across ChatGPT, Claude, Gemini, and other leading AI platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleContactClick}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold shadow-lg"
                >
                  Start Tracking Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-gray-800/50 backdrop-blur-sm/10 transition-all duration-200 font-semibold"
                >
                  See How It Works
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-800/50 backdrop-blur-sm/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 backdrop-blur-sm/20 rounded-lg">
                    <span className="text-sm font-medium">Visibility Score</span>
                    <span className="text-2xl font-bold">87/100</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {aiModels.map((model, index) => (
                      <div key={index} className="p-4 bg-gray-800/50 backdrop-blur-sm/20 rounded-lg text-center">
                        <div className="text-lg font-bold mb-1">{model.logo}</div>
                        <div className="text-xs opacity-80">{model.name}</div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-green-500/20 rounded-lg flex items-center">
                    <TrendingUp className="w-5 h-5 mr-3" />
                    <span className="text-sm">+23% visibility increase this month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 bg-gray-800/50 backdrop-blur-sm border-y border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className={`w-10 h-10 text-${metric.color}-600 mx-auto mb-3`} />
                <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-sm text-gray-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why AI Search Visibility Matters
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              As AI becomes the primary way people search for information, your brand's visibility
              in AI-generated responses is critical to your digital success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <div className="text-4xl font-bold text-orange-400 mb-2">65%</div>
              <p className="text-gray-300 font-medium mb-2">of users now prefer AI search</p>
              <p className="text-sm text-gray-300">over traditional search engines for product research</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <div className="text-4xl font-bold text-purple-600 mb-2">3x</div>
              <p className="text-gray-300 font-medium mb-2">higher conversion rates</p>
              <p className="text-sm text-gray-300">when brands are recommended by AI assistants</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <div className="text-4xl font-bold text-green-600 mb-2">80%</div>
              <p className="text-gray-300 font-medium mb-2">of purchase decisions</p>
              <p className="text-sm text-gray-300">influenced by AI-generated recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50 backdrop-blur-sm border border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive AI Visibility Tracking
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to monitor, analyze, and optimize your brand's presence
              across AI platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started in minutes and begin tracking your AI search visibility today
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    {item.step}
                  </div>
                  <div className="mb-4">
                    <item.icon className="w-10 h-10 text-orange-400 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 opacity-20 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful applications for every aspect of your digital strategy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-gray-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
                <div className="space-y-2 ml-16">
                  {useCase.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
         <section className="py-20 bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include a 14-day money-back guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className=" rounded-2xl p-8 
  bg-gray-800/50 backdrop-blur-sm border-2 border-gray-200 shadow-lg
  transition-all duration-300 ease-in-out
  hover:scale-105 hover:shadow-2xl hover:border-blue-400
  hover:bg-gradient-to-br hover:from-orange-400 hover:to-blue-600
  hover:text-white"
              >
                {plan.highlighted && (
                  <div className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4
  text-white bg-gray-800/50 backdrop-blur-sm/20
  group-hover:bg-white/20 group-hover:text-white">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2  text-white`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold  text-white`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg text-gray-300`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mb-6 text-gray-300`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-green-600`} />
                      <span className={plan.highlighted ? 'text-white' : 'text-gray-300'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleContactClick}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
     <section className="py-20 bg-gradient-to-r from-orange-300 to-blue-400 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Take Control of Your AI Search Presence?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join leading brands who are already tracking and optimizing their AI visibility.
            Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold shadow-lg"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-gray-800/50 backdrop-blur-sm/10 transition-all duration-200 font-semibold"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISearchVisibilityPage;
