import React from 'react';
import { Mail, Phone, MapPin, Linkedin, X, Github } from 'lucide-react';
import Logo from './Logo';
import NewsletterSignup from './NewsletterSignup';

interface FooterProps {
  onNavigate?: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavigation = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(section);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#career' },
    ],
    solutions: [
      { name: 'Machine Learning', href: '#machine-learning' },
      { name: 'Natural Language Processing', href: '#nlp' },
      { name: 'Computer Vision', href: '#computer-vision' },
      { name: 'Predictive Analytics & Business Intelligence', href: '#predictive-analytics' },
      { name: 'AI Consulting', href: '#ai-consulting' },
      { name: 'Custom AI Development', href: '#custom-ai-development' },
    ],
    industries: [
      { name: 'Healthcare', href: '#healthcare-ai' },
      { name: 'Financial Services', href: '#fintech' },
      { name: 'Manufacturing', href: '#manufacturing' },
      { name: 'Retail & E-commerce', href: '#retail' },
      { name: 'Transportation & Logistics', href: '#transportation' },
      { name: 'Energy & Utilities', href: '#energy' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact-us' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content - Horizontal Layout */}
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          {/* Company Info - Left Side */}
          <div className="lg:w-1/3">
            <div className="flex items-center space-x-2 mb-4">
              <Logo className="h-8 w-8" />
              <span className="text-lg font-bold">Firstscience AI</span>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Pioneering the future of AI innovation with cutting-edge solutions
              that transform businesses and drive innovation across industries.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <a
                href="mailto:info@firstscienceai.com"
                className="flex items-center space-x-2 hover:text-orange-500 transition-colors duration-200 group"
              >
                <Mail className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 group-hover:text-orange-500 text-sm">info@firstscienceai.com</span>
              </a>
              <a
                href="tel:+15512011659"
                className="flex items-center space-x-2 hover:text-orange-500 transition-colors duration-200 group"
              >
                <Phone className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 group-hover:text-orange-500 text-sm">+1(551)2011659</span>
              </a>
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>United States</div>
                  <div>1689, 447 Broadway, 2nd Floor,</div>
                  <div>New York - 10013</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links - Right Side */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-base font-semibold mb-3">Company</h4>
              <ul className="space-y-1.5">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      onClick={(e) => handleNavigation(e, link.href.replace('#', ''))}
                      className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-left cursor-pointer text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold mb-3">Solutions</h4>
              <ul className="space-y-1.5">
                {footerLinks.solutions.map((link, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      onClick={(e) => handleNavigation(e, link.href.replace('#', ''))}
                      className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-left cursor-pointer text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold mb-3">Industries</h4>
              <ul className="space-y-1.5">
                {footerLinks.industries.map((link, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      onClick={(e) => handleNavigation(e, link.href.replace('#', ''))}
                      className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-left cursor-pointer text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold mb-3">Support</h4>
              <ul className="space-y-1.5">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      onClick={(e) => handleNavigation(e, link.href.replace('#', ''))}
                      className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-left cursor-pointer text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Global Offices */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-base font-semibold mb-4">Global Offices</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h5 className="font-semibold text-orange-500 mb-2 text-sm">India Office - Mumbai</h5>
              <p className="text-gray-300 text-xs">
                404, Skyline Icon, Marol<br />
                Mumbai - 400059
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-orange-500 mb-2 text-sm">India Office - Bhubaneswar</h5>
              <p className="text-gray-300 text-xs">
                Plot No 104/2017, Kalinga Vihar,<br />
                Bhubaneswar - 751019
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-orange-500 mb-2 text-sm">India Office - Jaipur</h5>
              <p className="text-gray-300 text-xs">
                Third Floor, Bhamashah Techno Hub<br />
                Sansthan Path, Jhalana Gram,<br />
                Jaipur, Rajasthan 302017
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-orange-500 mb-2 text-sm">India Office - Bangalore</h5>
              <p className="text-gray-300 text-xs">
                Sy.No.110/1, 2 & 3, 8th Floor, Venus Block<br />
                Prestige Technology Park III<br />
                Amane Bellandur Khane Village<br />
                Varthur Hobli, Marathahalli<br />
                Outer Ring Rd, Bengaluru 560103
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="text-base font-semibold mb-3">Stay Updated</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Get the latest AI insights and company updates delivered to your inbox.
            </p>
            <NewsletterSignup />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              <div className="text-sm">© 2024 Tigerworld Technologies Group</div>
              <div className="text-xs mt-1">Made with ❤️ in India</div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/firstscience-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/firstscienceai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                aria-label="X"
              >
                <X className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/firstscienceai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;