import React from 'react';
import { Award, Star, TrendingUp, Users, DollarSign, Clock, Quote } from 'lucide-react';

const SuccessStoriesPage = () => {
  const successStories = [
    {
      company: "Global FinServ Corp",
      industry: "Financial Services",
      logo: "GFC",
      color: "blue",
      quote: "Firstscience AI didn't just meet our expectations—they exceeded them. The fraud detection system has saved us millions while improving customer trust.",
      author: "Jennifer Martinez",
      role: "Chief Risk Officer",
      metrics: [
        { icon: DollarSign, label: "ROI", value: "450%" },
        { icon: TrendingUp, label: "Fraud Caught", value: "+67%" },
        { icon: Clock, label: "Implementation", value: "4 months" }
      ],
      tags: ["Machine Learning", "Real-time Processing", "Risk Management"]
    },
    {
      company: "HealthTech Innovations",
      industry: "Healthcare",
      logo: "HTI",
      color: "green",
      quote: "The AI diagnostic assistant has become an indispensable tool for our radiologists. It's like having an expert consultant available 24/7.",
      author: "Dr. Robert Chen",
      role: "Medical Director",
      metrics: [
        { icon: TrendingUp, label: "Accuracy", value: "98.5%" },
        { icon: Clock, label: "Time Saved", value: "40%" },
        { icon: Users, label: "Patients Helped", value: "50K+" }
      ],
      tags: ["Computer Vision", "Deep Learning", "Medical AI"]
    },
    {
      company: "RetailPro Networks",
      industry: "Retail & E-commerce",
      logo: "RPN",
      color: "purple",
      quote: "The personalization engine transformed our business. Our customers are happier, our sales are up, and our team has insights they never had before.",
      author: "Amanda Foster",
      role: "VP of Digital Experience",
      metrics: [
        { icon: TrendingUp, label: "Conversion", value: "+85%" },
        { icon: DollarSign, label: "Revenue Lift", value: "$12M" },
        { icon: Users, label: "Engagement", value: "+120%" }
      ],
      tags: ["Personalization", "Recommendation Systems", "Analytics"]
    },
    {
      company: "IndustrialTech Solutions",
      industry: "Manufacturing",
      logo: "ITS",
      color: "orange",
      quote: "Predictive maintenance has revolutionized our operations. We've gone from reactive firefighting to proactive optimization.",
      author: "David Thompson",
      role: "Operations Director",
      metrics: [
        { icon: TrendingUp, label: "Uptime", value: "99.2%" },
        { icon: DollarSign, label: "Cost Savings", value: "$8M/yr" },
        { icon: Clock, label: "Downtime", value: "-78%" }
      ],
      tags: ["Predictive Analytics", "IoT", "Maintenance AI"]
    },
    {
      company: "EnergyGrid Systems",
      industry: "Energy & Utilities",
      logo: "EGS",
      color: "teal",
      quote: "The smart grid optimization platform has enabled us to maximize renewable energy integration while maintaining perfect reliability.",
      author: "Sarah Williams",
      role: "Chief Technology Officer",
      metrics: [
        { icon: TrendingUp, label: "Efficiency", value: "+28%" },
        { icon: Users, label: "Renewable Mix", value: "68%" },
        { icon: DollarSign, label: "Annual Savings", value: "$15M" }
      ],
      tags: ["Energy Management", "Smart Grid", "Optimization"]
    },
    {
      company: "LogiFlow International",
      industry: "Logistics",
      logo: "LFI",
      color: "red",
      quote: "Supply chain visibility and optimization at this level was something we only dreamed about. Now it's our competitive advantage.",
      author: "Marcus Johnson",
      role: "VP of Supply Chain",
      metrics: [
        { icon: Clock, label: "Delivery Time", value: "-35%" },
        { icon: DollarSign, label: "Cost Reduction", value: "$6M/yr" },
        { icon: TrendingUp, label: "On-Time Rate", value: "97%" }
      ],
      tags: ["Supply Chain", "Route Optimization", "Forecasting"]
    },
    {
      company: "SecureCloud Technologies",
      industry: "Technology",
      logo: "SCT",
      color: "indigo",
      quote: "The AI-powered security system detects threats our previous tools missed. It's like having a team of expert security analysts working around the clock.",
      author: "James Park",
      role: "CISO",
      metrics: [
        { icon: TrendingUp, label: "Threats Detected", value: "+215%" },
        { icon: Clock, label: "Response Time", value: "-92%" },
        { icon: Users, label: "False Positives", value: "-83%" }
      ],
      tags: ["Cybersecurity", "Threat Detection", "AI Security"]
    },
    {
      company: "AutoDrive Mobility",
      industry: "Automotive",
      logo: "ADM",
      color: "cyan",
      quote: "The computer vision system for quality control has transformed our manufacturing process. We catch defects we never would have seen before.",
      author: "Elena Rodriguez",
      role: "Quality Assurance Director",
      metrics: [
        { icon: TrendingUp, label: "Defect Detection", value: "99.7%" },
        { icon: DollarSign, label: "Waste Reduction", value: "$4M/yr" },
        { icon: Users, label: "Customer Returns", value: "-65%" }
      ],
      tags: ["Quality Control", "Computer Vision", "Manufacturing"]
    },
    {
      company: "MediaStream Plus",
      industry: "Media & Entertainment",
      logo: "MSP",
      color: "pink",
      quote: "Content recommendation accuracy like this seemed impossible. Our viewer engagement and retention have skyrocketed.",
      author: "Alex Thompson",
      role: "Head of Product",
      metrics: [
        { icon: Users, label: "Engagement", value: "+145%" },
        { icon: Clock, label: "Watch Time", value: "+89%" },
        { icon: TrendingUp, label: "Retention", value: "+52%" }
      ],
      tags: ["Content AI", "Recommendations", "User Engagement"]
    },
    {
      company: "AgriTech Solutions",
      industry: "Agriculture",
      logo: "ATS",
      color: "lime",
      quote: "Precision agriculture powered by AI has increased our yields while reducing resource usage. It's sustainable and profitable.",
      author: "Maria Santos",
      role: "Chief Agricultural Officer",
      metrics: [
        { icon: TrendingUp, label: "Yield Increase", value: "+34%" },
        { icon: DollarSign, label: "Cost Savings", value: "$3M/yr" },
        { icon: Users, label: "Water Usage", value: "-28%" }
      ],
      tags: ["Precision Agriculture", "Crop Analytics", "Sustainability"]
    },
    {
      company: "EduTech Academy",
      industry: "Education",
      logo: "ETA",
      color: "violet",
      quote: "Personalized learning paths have transformed student outcomes. Every student gets the support they need, exactly when they need it.",
      author: "Dr. Michael Lee",
      role: "Dean of Innovation",
      metrics: [
        { icon: TrendingUp, label: "Performance", value: "+47%" },
        { icon: Users, label: "Completion Rate", value: "+62%" },
        { icon: Clock, label: "Time to Mastery", value: "-25%" }
      ],
      tags: ["EdTech", "Personalized Learning", "Student Success"]
    },
    {
      company: "TravelConnect Global",
      industry: "Travel & Hospitality",
      logo: "TCG",
      color: "amber",
      quote: "The AI booking assistant and dynamic pricing engine have revolutionized our business. Revenue is up, and customers love the experience.",
      author: "Lisa Chang",
      role: "Chief Revenue Officer",
      metrics: [
        { icon: DollarSign, label: "Revenue Growth", value: "+92%" },
        { icon: Users, label: "Customer Satisfaction", value: "94%" },
        { icon: TrendingUp, label: "Booking Rate", value: "+58%" }
      ],
      tags: ["Dynamic Pricing", "Chatbots", "Revenue Optimization"]
    }
  ];

  const colorClasses = {
    blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
    green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
    purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200" },
    teal: { bg: "bg-teal-100", text: "text-teal-600", border: "border-teal-200" },
    red: { bg: "bg-red-100", text: "text-red-600", border: "border-red-200" },
    indigo: { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-200" },
    cyan: { bg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-200" },
    pink: { bg: "bg-pink-100", text: "text-pink-600", border: "border-pink-200" },
    lime: { bg: "bg-lime-100", text: "text-lime-600", border: "border-lime-200" },
    violet: { bg: "bg-violet-100", text: "text-violet-600", border: "border-violet-200" },
    amber: { bg: "bg-amber-100", text: "text-amber-600", border: "border-amber-200" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">Success Stories</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear directly from our clients about how our AI solutions have transformed their businesses
            and delivered measurable results.
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg border-2 border-blue-100">
            <div className="flex items-center justify-between mb-2">
              <Star className="w-8 h-8 text-yellow-400 fill-current" />
              <span className="text-3xl font-bold text-white">4.9</span>
            </div>
            <p className="text-gray-300 font-medium">Average Rating</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg border-2 border-green-100">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-green-600" />
              <span className="text-3xl font-bold text-white">200+</span>
            </div>
            <p className="text-gray-300 font-medium">Happy Clients</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg border-2 border-purple-100">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-purple-600" />
              <span className="text-3xl font-bold text-white">98%</span>
            </div>
            <p className="text-gray-300 font-medium">Success Rate</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg border-2 border-orange-100">
            <div className="flex items-center justify-between mb-2">
              <Award className="w-8 h-8 text-orange-600" />
              <span className="text-3xl font-bold text-white">100%</span>
            </div>
            <p className="text-gray-300 font-medium">Would Recommend</p>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => {
            const colors = colorClasses[story.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-blue-300"
              >
                {/* Header with Logo */}
                <div className={`${colors.bg} p-6 border-b-2 ${colors.border}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-14 h-14 ${colors.text} bg-gray-900 rounded-xl flex items-center justify-center text-xl font-bold shadow-md`}>
                      {story.logo}
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{story.company}</h3>
                  <p className={`text-sm ${colors.text} font-medium`}>{story.industry}</p>
                </div>

                {/* Quote */}
                <div className="p-6">
                  <Quote className="w-8 h-8 text-gray-300 mb-3" />
                  <p className="text-gray-700 leading-relaxed mb-4 italic">
                    "{story.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-3 mb-6 pb-6 border-b border-gray-200">
                    <div className={`w-10 h-10 ${colors.bg} ${colors.text} rounded-full flex items-center justify-center font-bold`}>
                      {story.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{story.author}</div>
                      <div className="text-xs text-gray-300">{story.role}</div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {story.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <metric.icon className={`w-5 h-5 ${colors.text} mx-auto mb-1`} />
                        <div className={`text-lg font-bold ${colors.text}`}>{metric.value}</div>
                        <div className="text-xs text-gray-300">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {story.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-2 py-1 ${colors.bg} ${colors.text} text-xs font-medium rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Join Our Success Stories</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to transform your business with AI? Let's create your success story together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold shadow-lg"
            >
              Get Started Today
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-gray-900/10 transition-all duration-200 font-semibold"
            >
              Read More Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesPage;
