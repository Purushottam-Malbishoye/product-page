import React, { useEffect, useState } from 'react';
import { ArrowLeft, Shield, Lock, Eye, FileText, CheckCircle, AlertTriangle } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
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

  const sections = [
    { id: 'section-1', title: 'What information do we collect?', icon: FileText },
    { id: 'section-2', title: 'How do we process your information?', icon: Lock },
    { id: 'section-3', title: 'Legal bases for processing', icon: Shield },
    { id: 'section-4', title: 'When and with whom do we share data?', icon: Eye },
    { id: 'section-5', title: 'Cookies and tracking technologies', icon: FileText },
    { id: 'section-6', title: 'Social logins and integrations', icon: FileText },
    { id: 'section-7', title: 'International data transfers', icon: FileText },
    { id: 'section-8', title: 'Data retention', icon: FileText },
    { id: 'section-9', title: 'Data security', icon: Lock },
    { id: 'section-10', title: 'Data from minors', icon: Shield },
    { id: 'section-11', title: 'Your privacy rights', icon: CheckCircle },
    { id: 'section-12', title: 'Do‑Not‑Track controls', icon: FileText },
    { id: 'section-13', title: 'Region‑specific rights', icon: FileText },
    { id: 'section-14', title: 'Policy updates', icon: AlertTriangle },
    { id: 'section-15', title: 'Contact information', icon: FileText },
    { id: 'section-16', title: 'Review, update, or delete your data', icon: FileText },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      {/* Animated Blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

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
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30 mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Legal & Privacy
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Policy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <span>FirstScience AI Pvt. Ltd.</span>
            <span>•</span>
            <span>Last updated December 26, 2025</span>
          </div>
        </div>

        {/* Key Points Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Data Security</h3>
            <p className="text-gray-400 text-sm">Enterprise-grade encryption and security safeguards protect your information</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Transparency</h3>
            <p className="text-gray-400 text-sm">Clear information about what data we collect and how we use it</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Your Rights</h3>
            <p className="text-gray-400 text-sm">Full control over your data with easy access, update, and deletion options</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sticky Sidebar Navigation - Desktop */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${
                        activeSection === section.id
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/50'
                      }`}
                    >
                      <span className="text-xs font-medium">{index + 1}</span>
                      <span className="flex-1 truncate">{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 space-y-12">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-300 leading-relaxed mb-6">
                  This privacy notice for FirstScience AI Pvt. Ltd. ("FirstScience AI," "we," "us," or "our") explains how and why we collect, store, use, and/or share ("process") your information when you interact with our services ("Services"), such as when you:
                </p>

                <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
                  <li>Visit any of our websites or subdomains that link to this Privacy Policy.</li>
                  <li>Use our AI platform, web app, browser extensions, APIs, or integrations.</li>
                  <li>Engage with us in any other way, including sales, demos, marketing, support, or events.</li>
                </ul>

                <p className="text-gray-300 leading-relaxed mb-8">
                  If you do not agree with this Policy, please refrain from using our Services. For any questions or concerns, you may contact us at{' '}
                  <a href="mailto:info@firstscienceai.com" className="text-blue-400 hover:text-blue-300 underline">
                    info@firstscienceai.com
                  </a>.
                </p>
              </div>

              {/* Summary Box */}
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-blue-400" />
                  </div>
                  Summary of Key Points
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      title: 'What personal information do we process?',
                      content: 'We collect personal information based on your interaction with our Services, the features you use, and the preferences you set.'
                    },
                    {
                      title: 'Do we process sensitive personal information?',
                      content: 'Only where necessary, and typically with your consent (e.g., credentials or payment data).'
                    },
                    {
                      title: 'Do we receive data from other sources?',
                      content: 'Yes, from partners, public databases, or third-party integrations you connect.'
                    },
                    {
                      title: 'How do we use your data?',
                      content: 'To operate, improve, and secure our Services, communicate with you, and stay legally compliant.'
                    },
                    {
                      title: 'Who do we share your data with?',
                      content: 'Only with trusted third-party vendors and partners who help us deliver our Services.'
                    },
                    {
                      title: 'How do we secure your data?',
                      content: 'Using technical and organizational safeguards, while acknowledging that no system is 100% secure.'
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile TOC */}
              <div className="lg:hidden">
                <h3 className="text-xl font-bold text-white mb-4">Quick Navigation</h3>
                <div className="grid gap-3">
                  {sections.slice(0, 6).map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl p-4 text-left hover:border-blue-500 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <section.icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300 font-medium text-sm">{index + 1}. {section.title}</span>
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
                  What information do we collect?
                </h2>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Personal information you provide</h3>
                  <p className="text-gray-300 leading-relaxed">We collect data you share directly, including:</p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Name, company, job title, and contact details</li>
                    <li>Account credentials (e.g., username, hashed password)</li>
                    <li>Billing and payment details (processed securely by third‑party providers)</li>
                    <li>Preferences such as language or communication settings</li>
                    <li>Information you submit or upload through the platform (e.g., leads, prompts, chat inputs)</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mt-6">Automatically collected information</h3>
                  <p className="text-gray-300 leading-relaxed">We automatically collect:</p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>IP address, browser type, and device identifiers</li>
                    <li>Usage data such as feature interactions, date/time stamps, and performance logs</li>
                    <li>Approximate geolocation inferred from IP to support security and analytics</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mt-6">Data from other sources</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We may receive limited data from connected tools, social media, public records, or business partners for marketing and service personalization.
                  </p>
                </div>
              </section>

              <section id="section-2" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">2</span>
                  </div>
                  How do we process your information?
                </h2>
                <p className="text-gray-300 leading-relaxed">We process information to:</p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Provide and maintain your account</li>
                  <li>Run AI‑powered models, automations, and insights you configure</li>
                  <li>Support and troubleshoot technical or user issues</li>
                  <li>Improve product usability and reliability</li>
                  <li>Communicate updates, changes, or promotions (per your preferences)</li>
                  <li>Detect fraud, ensure compliance, and protect security</li>
                </ul>
              </section>

              <section id="section-3" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">3</span>
                  </div>
                  Legal bases for processing
                </h2>
                <p className="text-gray-300 leading-relaxed">Depending on your region, we rely on one or more of these:</p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li><strong className="text-white">Consent</strong> – for marketing, cookies, or optional integrations.</li>
                  <li><strong className="text-white">Contractual necessity</strong> – to offer and deliver Services you use.</li>
                  <li><strong className="text-white">Legitimate interest</strong> – to improve performance, security, or customer experience.</li>
                  <li><strong className="text-white">Legal obligation</strong> – to comply with applicable laws.</li>
                  <li><strong className="text-white">Vital interest</strong> – in rare cases, to protect personal safety.</li>
                </ul>
              </section>

              <section id="section-4" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">4</span>
                  </div>
                  When and with whom do we share data?
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We may share personal data with third parties who perform tasks on our behalf, such as:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Hosting, storage, and computing providers</li>
                  <li>AI model providers and analytics services</li>
                  <li>Payment processors and billing platforms</li>
                  <li>Communication and marketing tools</li>
                  <li>Product development and monitoring tools</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  We may also share information during mergers, financing, or acquisitions, and when required for legal or compliance purposes.
                </p>
              </section>

              <section id="section-5" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">5</span>
                  </div>
                  Cookies and tracking
                </h2>
                <p className="text-gray-300 leading-relaxed">We use cookies to:</p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Ensure essential site functionality</li>
                  <li>Analyze usage and performance</li>
                  <li>Store preferences</li>
                  <li>Show relevant ads or content where permitted</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  You can manage cookies via browser settings or in‑app preferences.
                </p>
              </section>

              <section id="section-6" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">6</span>
                  </div>
                  Social logins and integrations
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  When you connect third‑party platforms (like CRMs, communication tools, or social media), we access only the data required to operate integrations. You can disconnect these via your account or the respective platform settings.
                </p>
              </section>

              <section id="section-7" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">7</span>
                  </div>
                  International data transfers
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Your data may be processed outside your country on secure servers in regions like the U.S. or EU. We ensure data protection through contractual safeguards and encryption.
                </p>
              </section>

              <section id="section-8" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">8</span>
                  </div>
                  Data retention
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We store data only for as long as necessary for business or legal reasons. When no longer required, it is deleted or anonymized securely.
                </p>
              </section>

              <section id="section-9" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">9</span>
                  </div>
                  Data security
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We employ encryption, restricted access, continuous monitoring, and other safeguards to protect your information. However, no online system is fully immune from risk.
                </p>
              </section>

              <section id="section-10" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">10</span>
                  </div>
                  Data from minors
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We do not knowingly collect information from individuals under 18. If we learn that such data has been collected, we promptly delete it.
                </p>
              </section>

              <section id="section-11" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">11</span>
                  </div>
                  Your privacy rights
                </h2>
                <p className="text-gray-300 leading-relaxed">Depending on your jurisdiction, you may:</p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Access, correct, or delete your data</li>
                  <li>Restrict or object to certain uses</li>
                  <li>Request a copy of your data (data portability)</li>
                  <li>Withdraw consent without affecting prior processing</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  To exercise these rights, contact{' '}
                  <a href="mailto:info@firstscienceai.com" className="text-blue-400 hover:text-blue-300 underline">
                    info@firstscienceai.com
                  </a>.
                </p>
              </section>

              <section id="section-12" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">12</span>
                  </div>
                  Do‑Not‑Track
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We currently do not respond to DNT signals because a standard response framework does not yet exist.
                </p>
              </section>

              <section id="section-13" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">13</span>
                  </div>
                  Region‑specific rights
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Residents of certain regions (EU, UK, California, Colorado, Virginia, etc.) may have additional rights, such as opting out of targeted advertising or limiting sensitive data use. We honor these rights in compliance with local laws.
                </p>
              </section>

              <section id="section-14" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">14</span>
                  </div>
                  Policy updates
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy periodically. The latest revision date will always be shown above. Material updates may be communicated via email or platform notification.
                </p>
              </section>

              <section id="section-15" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">15</span>
                  </div>
                  Contact information
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">For any privacy‑related questions or requests:</p>
                <div className="bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6">
                  <p className="font-semibold text-white mb-4">FirstScience AI Pvt. Ltd.</p>
                  <p className="text-gray-300 mb-2">
                    Email:{' '}
                    <a href="mailto:info@firstscienceai.com" className="text-blue-400 hover:text-blue-300 underline">
                      info@firstscienceai.com
                    </a>
                  </p>
                  <p className="text-gray-300">
                    Address:<br />
                    Plot No 104/2017, Kalinga Vihar,<br />
                    Bhubaneswar - 751019
                  </p>
                </div>
              </section>

              <section id="section-16" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold">16</span>
                  </div>
                  Review, update, or delete your data
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  To review, update, or delete any personal information we hold about you, please email{' '}
                  <a href="mailto:info@firstscienceai.com" className="text-blue-400 hover:text-blue-300 underline">
                    info@firstscienceai.com
                  </a>{' '}
                  with your full name and request description. We may verify your identity before processing the request.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
