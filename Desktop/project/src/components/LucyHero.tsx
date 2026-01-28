import React, { useState, useEffect } from 'react';
import { BRAND } from './constants';
import { ArrowRight, CheckCircle, Sparkles, Users, TrendingUp, Clock } from 'lucide-react';

interface LucyHeroProps {
  onExploreLucy?: () => void;
}

const LucyHero: React.FC<LucyHeroProps> = ({ onExploreLucy }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Tired of hiring SDRs that quit after 3 months?';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9Im5ldHdvcmsiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iMiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PGxpbmUgeDE9IjQwIiB5MT0iNDAiIHgyPSI4MCIgeTI9IjQwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGxpbmUgeDE9IjQwIiB5MT0iNDAiIHgyPSI0MCIgeTI9IjgwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI25ldHdvcmspIi8+PC9zdmc+')] opacity-30"></div>
      </div>

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-orange-400 rounded-full text-sm font-medium border border-orange-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Introducing {BRAND.NAME} - Your AI SDR
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight min-h-[120px] sm:min-h-[140px]">
              {typedText}
              <span className="animate-pulse">|</span>
            </h1>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl text-gray-200 font-semibold">
                Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">{BRAND.NAME}</span> – Your AI agent that books 21+ meetings/month via hyper-personalized outbound emails.
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Researches prospects from different data sources</h3>
                  <p className="text-gray-400 text-sm">Automatically gathers comprehensive prospect intelligence</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Hyper-personalized messages</h3>
                  <p className="text-gray-400 text-sm">Analyzes Prospect profiles, company websites, and aligns FirstScience AI solutions to their challenges</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Delivers 24/7 with real-time optimization</h3>
                  <p className="text-gray-400 text-sm">Continuously learns and adapts to maximize engagement</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/ai-sdr"
                onClick={(e) => {
                  if (onExploreLucy) {
                    e.preventDefault();
                    onExploreLucy();
                  }
                }}
                className="group inline-flex items-center justify-center px-8 py-5 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-xl hover:from-orange-600 hover:to-purple-700 transition-all duration-300 font-bold text-lg shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 hover:scale-105 animate-pulse-slow"
              >
                Explore {BRAND.NAME}
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-gray-700/50">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-gray-300 font-medium">Used by 50+ B2B teams</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-blue-400" />
                <span className="text-gray-300 font-medium">40%+ open rates</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/30 to-purple-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-75"></div>

              <div className="relative bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 border-b border-gray-700/50 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400 text-sm ml-4 font-mono">{BRAND.NAME} Dashboard</span>
                </div>

                <div className="p-6 space-y-4">
                  <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/30">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-400 text-sm font-medium">Campaign Performance</span>
                      <span className="text-green-400 text-sm font-bold">+127%</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Emails Sent</span>
                        <span className="text-white font-bold">1,247</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Open Rate</span>
                        <span className="text-orange-400 font-bold">43.2%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Meetings Booked</span>
                        <span className="text-purple-400 font-bold">104</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-500/10 to-purple-500/10 rounded-xl p-4 border border-orange-500/20">
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                      <div className="space-y-2 flex-1">
                        <p className="text-white text-sm font-semibold">Generating personalized email...</p>
                        <div className="bg-gray-900/50 rounded-lg p-3 text-xs text-gray-300 leading-relaxed font-mono">
                          Hi John, I noticed your team at TechCorp is expanding ML capabilities. FirstScience AI's predictive analytics could reduce your model training time by 60%...
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span>AI analyzing prospect data</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700/30 text-center">
                      <div className="text-2xl font-bold text-blue-400">2.3s</div>
                      <div className="text-xs text-gray-500 mt-1">Avg Response Time</div>
                    </div>
                    <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700/30 text-center">
                      <div className="text-2xl font-bold text-green-400">24/7</div>
                      <div className="text-xs text-gray-500 mt-1">Always Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LucyHero;
