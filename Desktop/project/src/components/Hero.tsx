import React from 'react';
import { ArrowRight, Zap, Shield, Cpu } from 'lucide-react';

interface HeroProps {
  onCaseStudiesClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCaseStudiesClick }) => {
  return (
    <section id="home" className="relative pt-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium border border-orange-500/30">
                <Zap className="w-4 h-4 mr-2" />
                Next-Generation AI Solutions
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 whitespace-nowrap">AI Solutions &</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"> Machine{'\u00A0'}Learning </span>
                Technology Innovation
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Transform your business with enterprise-grade AI solutions. We deliver intelligent machine learning systems,
                advanced automation, and data-driven insights that drive digital transformation, enhance operational efficiency,
                and unlock unprecedented growth opportunities across healthcare, finance, manufacturing, and retail industries worldwide.
              </p>
            </div>

            <div className="flex justify-center sm:justify-start gap-4">
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-semibold group shadow-lg shadow-orange-500/50"
              >
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <div className="text-sm text-gray-400">AI Models Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">98%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">50+</div>
                <div className="text-sm text-gray-400">Industries Served</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Machine Learning</h3>
                    <p className="text-gray-400 text-sm">Advanced predictive models</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Secure AI</h3>
                    <p className="text-gray-400 text-sm">Enterprise-grade security</p>
                  </div>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                  <div className="text-sm text-gray-300 mb-2">AI Processing Power</div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full w-4/5"></div>
                  </div>
                  <div className="text-right text-sm text-gray-300 mt-1">95% Efficiency</div>
                </div>
              </div>
            </div>

            {/* Background decorations */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;