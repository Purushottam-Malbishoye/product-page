import React, { useEffect, useState } from 'react';
import { ArrowLeft, Scale, FileText, Shield, AlertCircle, CheckCircle, Users, Lock } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    window.history.back();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  const keyTopics = [
    { id: 'section-1', title: 'General Information & Definitions', icon: FileText },
    { id: 'section-3', title: 'Eligibility & Authority', icon: Users },
    { id: 'section-4', title: 'Account Registration & Security', icon: Lock },
    { id: 'section-7', title: 'Acceptable Use & Prohibited Activities', icon: Shield },
    { id: 'section-10', title: 'Fees, Subscription & Billing', icon: FileText },
    { id: 'section-21', title: 'Governing Law & Dispute Resolution', icon: Scale },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      {/* Animated Blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="font-medium">Back</span>
        </button>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium border border-orange-500/30 mb-6">
            <Scale className="w-4 h-4 mr-2" />
            Legal Agreement
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Service</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
            Please read these terms carefully before using FirstScience AI services and products.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <span>FirstScience AI Pvt. Ltd.</span>
            <span>•</span>
            <span>Effective Date: December 29, 2025</span>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
            <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Fair Usage</h3>
            <p className="text-gray-400 text-sm">Clear guidelines on acceptable use and service expectations</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
            <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Data Protection</h3>
            <p className="text-gray-400 text-sm">Your data rights and our responsibilities clearly defined</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
            <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center mb-4">
              <Scale className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Legal Clarity</h3>
            <p className="text-gray-400 text-sm">Transparent terms governing the use of our AI services</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sticky Sidebar Navigation - Desktop */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Quick Navigation</h3>
                <nav className="space-y-2">
                  {keyTopics.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 flex items-center gap-3 ${
                        activeSection === section.id
                          ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                          : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/50'
                      }`}
                    >
                      <section.icon className="w-4 h-4 flex-shrink-0" />
                      <span className="flex-1">{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-orange-500/10 to-blue-500/10 border border-orange-500/30 rounded-2xl p-6">
                <AlertCircle className="w-8 h-8 text-orange-400 mb-3" />
                <h4 className="font-bold text-white mb-2">Need Help?</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Contact our legal team for questions about these terms.
                </p>
                <a
                  href="mailto:info@firstscienceai.com"
                  className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium"
                >
                  info@firstscienceai.com
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 space-y-12">
              {/* Introduction */}
              <div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  These Terms of Service ("Terms") govern access to and use of the website and services available at{' '}
                  <a href="https://firstscienceai.com" className="text-orange-400 hover:text-orange-300 underline">
                    https://firstscienceai.com
                  </a>{' '}
                  (the "Website"), operated by <strong className="text-white">FirstScience AI Pvt. Ltd.</strong> ("FirstScience AI", "Company", "we", "our", or "us").
                </p>

                <p className="text-gray-300 leading-relaxed">
                  By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must not access or use the Service.
                </p>
              </div>

              {/* Mobile TOC */}
              <div className="lg:hidden">
                <h3 className="text-xl font-bold text-white mb-4">Quick Navigation</h3>
                <div className="grid gap-3">
                  {keyTopics.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl p-4 text-left hover:border-orange-500 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <section.icon className="w-5 h-5 text-orange-400 flex-shrink-0" />
                        <span className="text-gray-300 font-medium text-sm">{section.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sections */}
              <section id="section-1" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">1</span>
                  </div>
                  General Information & Definitions
                </h2>

                <div className="bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">1.1 Definitions</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">For the purposes of these Terms:</p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex gap-3">
                      <span className="text-orange-400 font-bold flex-shrink-0">•</span>
                      <span><strong className="text-white">"Service"</strong> means the AI-powered outreach and sales automation platform provided by FirstScience AI.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-orange-400 font-bold flex-shrink-0">•</span>
                      <span><strong className="text-white">"User"</strong> means any individual accessing the Service.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-orange-400 font-bold flex-shrink-0">•</span>
                      <span><strong className="text-white">"Customer"</strong> means a business entity or individual subscribing to the Service.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-orange-400 font-bold flex-shrink-0">•</span>
                      <span><strong className="text-white">"Account"</strong> means a registered account created to access the Service.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-orange-400 font-bold flex-shrink-0">•</span>
                      <span><strong className="text-white">"Customer Data"</strong> means data, content, contacts, or materials submitted to the Service.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="section-2" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">2</span>
                  </div>
                  Acceptance of Terms
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing or using the Service, you confirm that you have read, understood, and agree to be bound by these Terms and the Privacy Policy. If you do not accept these Terms, you may not use the Service.
                </p>
              </section>

              <section id="section-3" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">3</span>
                  </div>
                  Eligibility & Authority
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>3.1 The Service is intended solely for individuals aged <strong className="text-white">18 years or older</strong>.</p>
                  <p>3.2 If you use the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.</p>
                </div>
              </section>

              <section id="section-4" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">4</span>
                  </div>
                  Account Registration & Security
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>4.1 To access certain features, you must create an Account through firstscienceai.com.</p>
                  <p>4.2 You agree to provide accurate, complete, and current information during registration.</p>
                  <p>4.3 You are responsible for maintaining the confidentiality of your login credentials and all activities occurring under your Account.</p>
                  <p>4.4 You must promptly notify FirstScience AI of any unauthorized access, security breach, or suspected misuse of your Account.</p>
                </div>
              </section>

              <section id="section-5" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">5</span>
                  </div>
                  Communications
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>5.1 By creating an Account, you consent to receive service-related communications, including product updates, security notices, and administrative messages.</p>
                  <p>5.2 You may opt out of non-essential marketing communications at any time using the unsubscribe mechanism provided in such communications.</p>
                </div>
              </section>

              <section id="section-6" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">6</span>
                  </div>
                  Description of the Service
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  6.1 FirstScience AI provides an AI-powered outreach and sales automation platform that may include:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                  <li>AI-generated email and message content</li>
                  <li>Outbound and inbound workflow automation</li>
                  <li>Multi-channel outreach capabilities</li>
                  <li>Analytics, reporting, and performance insights</li>
                  <li>Integrations with third-party tools</li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  6.2 We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with or without notice.
                </p>
              </section>

              <section id="section-7" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">7</span>
                  </div>
                  Acceptable Use & Prohibited Activities
                </h2>

                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">7.1 You agree to use the Service only for lawful business purposes.</p>
                  <p className="text-gray-300 leading-relaxed mb-4">7.2 You must not:</p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                    <li>Send spam or unsolicited bulk communications</li>
                    <li>Use purchased, scraped, or non-consensual contact lists</li>
                    <li>Violate applicable data protection, privacy, or anti-spam laws</li>
                    <li>Reverse engineer, decompile, or attempt to extract source code</li>
                    <li>Circumvent technical safeguards or access restrictions</li>
                    <li>Share Accounts or credentials</li>
                    <li>Engage in activities that may result in IP/domain blacklisting</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed">
                    7.3 <strong className="text-white">Restricted Industries:</strong> FirstScience AI may refuse or terminate access for use related to high-risk or restricted industries, including but not limited to gambling, crypto speculation schemes, MLM programs, or deceptive financial services.
                  </p>
                </div>
              </section>

              <section id="section-8" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">8</span>
                  </div>
                  No Sensitive Information
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  The Service is not designed to process highly sensitive personal data, including health data, financial account numbers, payment card information, government-issued IDs, or biometric data. You must not submit such information into the Service.
                </p>
              </section>

              <section id="section-9" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">9</span>
                  </div>
                  Customer Responsibilities
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">Customers are responsible for:</p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Proper configuration of campaigns, domains, and mailboxes</li>
                  <li>Ensuring lawful collection and use of contact data</li>
                  <li>Compliance with all applicable laws and regulations</li>
                  <li>Internal coordination and review of AI-generated outputs</li>
                </ul>
              </section>

              <section id="section-10" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">10</span>
                  </div>
                  Fees, Subscription & Billing
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>10.1 The Service is offered on a subscription basis (monthly or annual).</p>
                  <p>10.2 Free trials, if offered, are subject to specific limitations and may result in data deletion upon expiry if not converted to a paid plan.</p>
                  <p>10.3 Fees are billed in advance and auto-renew unless cancelled.</p>
                  <p>10.4 Payments may be processed via third-party payment providers.</p>
                  <p>10.5 Fees are non-refundable except where required by applicable law.</p>
                </div>
              </section>

              <section id="section-11" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">11</span>
                  </div>
                  Term, Renewal & Termination
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>11.1 These Terms remain in effect for the duration of your subscription.</p>
                  <p>11.2 Either party may terminate for material breach.</p>
                  <p>11.3 Upon termination, access to the Service will cease and Customer Data may be deleted in accordance with our data retention policies.</p>
                </div>
              </section>

              {/* Remaining sections condensed for brevity */}
              {[12, 13, 14, 15, 16, 17, 18, 19, 20].map((num) => {
                const titles = {
                  12: 'Suspension of Service',
                  13: 'Customer Data & Machine Learning',
                  14: 'Third-Party Services',
                  15: 'Intellectual Property',
                  16: 'User Content',
                  17: 'Confidentiality',
                  18: 'Disclaimer of Warranties',
                  19: 'Limitation of Liability',
                  20: 'Indemnification'
                };

                const content = {
                  12: 'We may suspend access to the Service for suspected violations, non-payment, security risks, excessive system load, or legal compliance reasons.',
                  13: 'Customers retain ownership of their Customer Data. You grant FirstScience AI a limited license to process Customer Data solely to provide and improve the Service. We may use anonymized or aggregated data to improve AI models and analytics.',
                  14: 'The Service may integrate with third-party services. FirstScience AI is not responsible for third-party terms, availability, or data practices.',
                  15: 'All rights, title, and interest in the Service, software, and branding remain with FirstScience AI. No rights are granted except as expressly stated in these Terms.',
                  16: 'You are responsible for all content uploaded or transmitted through the Service. We may remove content that violates these Terms or applicable law.',
                  17: 'Each party agrees to protect the other\'s Confidential Information and use it solely for purposes related to the Service.',
                  18: 'The Service is provided on an "AS IS" and "AS AVAILABLE" basis. AI-generated outputs may be inaccurate and must be reviewed by the Customer.',
                  19: 'To the maximum extent permitted by law, FirstScience AI shall not be liable for indirect, incidental, or consequential damages. Our total liability shall not exceed the fees paid by the Customer in the preceding 12 months.',
                  20: 'You agree to indemnify and hold harmless FirstScience AI from claims arising from your misuse of the Service or violation of these Terms.'
                };

                return (
                  <section key={num} id={`section-${num}`} className="scroll-mt-24 space-y-6">
                    <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                        <span className="text-orange-400 font-bold">{num}</span>
                      </div>
                      {titles[num as keyof typeof titles]}
                    </h2>
                    <p className="text-gray-300 leading-relaxed">{content[num as keyof typeof content]}</p>
                  </section>
                );
              })}

              <section id="section-21" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">21</span>
                  </div>
                  Governing Law & Dispute Resolution
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts or arbitration seated in <strong className="text-white">New Delhi, India</strong>.
                </p>
              </section>

              <section id="section-22" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">22</span>
                  </div>
                  Changes to the Terms
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update these Terms from time to time. Continued use of the Service after updates constitutes acceptance.
                </p>
              </section>

              <section id="section-23" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">23</span>
                  </div>
                  Contact Information
                </h2>
                <div className="bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6">
                  <p className="font-semibold text-white mb-4">FirstScience AI Pvt. Ltd.</p>
                  <p className="text-gray-300 mb-2">
                    Registered Office: Plot No 104/2017, Kalinga Vihar, Bhubaneswar - 751019, India
                  </p>
                  <p className="text-gray-300">
                    Email:{' '}
                    <a href="mailto:info@firstscienceai.com" className="text-orange-400 hover:text-orange-300 underline">
                      info@firstscienceai.com
                    </a>
                  </p>
                </div>
              </section>

              {/* Footer CTA */}
              <div className="bg-gradient-to-br from-orange-500/10 to-blue-500/10 border border-orange-500/30 rounded-xl p-8 text-center">
                <Scale className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Questions about these Terms?</h3>
                <p className="text-gray-300 mb-4">
                  Contact our legal team for clarification or assistance.
                </p>
                <a
                  href="mailto:info@firstscienceai.com"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-semibold shadow-lg shadow-orange-500/50"
                >
                  Contact Legal Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
