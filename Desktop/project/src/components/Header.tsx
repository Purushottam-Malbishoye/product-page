import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onNavigate?: () => void;
  onResourcesClick?: () => void;
  onArticlesClick?: () => void;
  onSuccessStoriesClick?: () => void;
  onWhitepapersClick?: () => void;
  onIndustriesClick?: () => void;
  onAboutFirstscienceClick?: () => void;
  onCoreValuesClick?: () => void;
  onLeadershipTeamClick?: () => void;
  onAISDRClick?: () => void;
  onCaseStudiesClick?: () => void;
  onAISearchVisibilityClick?: () => void;
  onContactUsClick?: () => void;
  onBookDemoClick?: () => void;
  onCareersClick?: () => void;
}

const Header = ({ onNavigate, onResourcesClick, onArticlesClick, onSuccessStoriesClick, onWhitepapersClick, onIndustriesClick, onAboutFirstscienceClick, onCoreValuesClick, onLeadershipTeamClick, onAISDRClick, onCaseStudiesClick, onAISearchVisibilityClick, onContactUsClick, onBookDemoClick, onCareersClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href === '#resources' && onResourcesClick) {
      e.preventDefault();
      onResourcesClick();
      setIsMenuOpen(false);
      setIsResourcesDropdownOpen(false);
      setIsMobileResourcesOpen(false);
      setIsAboutDropdownOpen(false);
      setIsMobileAboutOpen(false);
      setIsProductsDropdownOpen(false);
      setIsMobileProductsOpen(false);
    } else if (href === '#industries' && onIndustriesClick) {
      e.preventDefault();
      onIndustriesClick();
      setIsMenuOpen(false);
      setIsResourcesDropdownOpen(false);
      setIsMobileResourcesOpen(false);
      setIsAboutDropdownOpen(false);
      setIsMobileAboutOpen(false);
      setIsProductsDropdownOpen(false);
      setIsMobileProductsOpen(false);
    } else if (href === '#contact-us' && onContactUsClick) {
      e.preventDefault();
      onContactUsClick();
      setIsMenuOpen(false);
      setIsResourcesDropdownOpen(false);
      setIsMobileResourcesOpen(false);
      setIsAboutDropdownOpen(false);
      setIsMobileAboutOpen(false);
      setIsProductsDropdownOpen(false);
      setIsMobileProductsOpen(false);
    } else if (href === '#careers' && onCareersClick) {
      e.preventDefault();
      onCareersClick();
      setIsMenuOpen(false);
      setIsResourcesDropdownOpen(false);
      setIsMobileResourcesOpen(false);
      setIsAboutDropdownOpen(false);
      setIsMobileAboutOpen(false);
      setIsProductsDropdownOpen(false);
      setIsMobileProductsOpen(false);
    } else if (href.startsWith('#') && onNavigate) {
      onNavigate();
      setIsMenuOpen(false);
      setIsResourcesDropdownOpen(false);
      setIsMobileResourcesOpen(false);
      setIsAboutDropdownOpen(false);
      setIsMobileAboutOpen(false);
      setIsProductsDropdownOpen(false);
      setIsMobileProductsOpen(false);
    } else {
      setIsMenuOpen(false);
      setIsResourcesDropdownOpen(false);
      setIsMobileResourcesOpen(false);
      setIsAboutDropdownOpen(false);
      setIsMobileAboutOpen(false);
      setIsProductsDropdownOpen(false);
      setIsMobileProductsOpen(false);
    }
  };

  const handleResourcesSubClick = (page: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (page === 'articles' && onArticlesClick) {
      onArticlesClick();
    } else if (page === 'success-stories' && onSuccessStoriesClick) {
      onSuccessStoriesClick();
    } else if (page === 'whitepapers' && onWhitepapersClick) {
      onWhitepapersClick();
    } else if (page === 'case-studies' && onCaseStudiesClick) {
      onCaseStudiesClick();
    }
    setIsMenuOpen(false);
    setIsResourcesDropdownOpen(false);
    setIsMobileResourcesOpen(false);
    setIsAboutDropdownOpen(false);
    setIsMobileAboutOpen(false);
    setIsProductsDropdownOpen(false);
    setIsMobileProductsOpen(false);
  };

  const handleAboutSubClick = (page: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (page === 'about-firstscience' && onAboutFirstscienceClick) {
      onAboutFirstscienceClick();
    } else if (page === 'core-values' && onCoreValuesClick) {
      onCoreValuesClick();
    } else if (page === 'leadership-team' && onLeadershipTeamClick) {
      onLeadershipTeamClick();
    }
    setIsMenuOpen(false);
    setIsResourcesDropdownOpen(false);
    setIsMobileResourcesOpen(false);
    setIsAboutDropdownOpen(false);
    setIsMobileAboutOpen(false);
    setIsProductsDropdownOpen(false);
    setIsMobileProductsOpen(false);
  };

  const handleProductsSubClick = (page: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (page === 'ai-sdr') {
      window.location.href = '/ai-sdr';
    } else if (page === 'ai-search-visibility' && onAISearchVisibilityClick) {
      onAISearchVisibilityClick();
    }
    setIsMenuOpen(false);
    setIsResourcesDropdownOpen(false);
    setIsMobileResourcesOpen(false);
    setIsAboutDropdownOpen(false);
    setIsMobileAboutOpen(false);
    setIsProductsDropdownOpen(false);
    setIsMobileProductsOpen(false);
  };

  const resourcesSubItems = [
    { name: 'Articles', page: 'articles' },
    { name: 'Case Studies', page: 'case-studies' },
    { name: 'Success Stories', page: 'success-stories' },
    { name: 'Whitepapers', page: 'whitepapers' },
  ];

  const aboutSubItems = [
    { name: 'About Firstscience AI', page: 'about-firstscience' },
    { name: 'Core Values', page: 'core-values' },
    { name: 'Leadership Team', page: 'leadership-team' },
  ];

  const productsSubItems = [
    { name: 'AI SDR', page: 'ai-sdr' },
    { name: 'AI Search Visibility Tracking', page: 'ai-search-visibility' },
  ];

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact Us', href: '#contact-us' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={(e) => handleNavClick('#home', e)}
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          >
            <Logo className="h-8 w-8" />
            <span className="text-xl font-bold text-white">Firstscience AI</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              item.name === 'About' ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsAboutDropdownOpen(true)}
                  onMouseLeave={() => setIsAboutDropdownOpen(false)}
                >
                  <button
                    onClick={(e) => handleNavClick(item.href, e)}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium cursor-pointer flex items-center space-x-1 py-2"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {isAboutDropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 -mt-2 w-56 z-50">
                      <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2">
                        {aboutSubItems.map((subItem) => (
                          <button
                            key={subItem.page}
                            onClick={(e) => handleAboutSubClick(subItem.page, e)}
                            className="w-full text-left block px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : item.name === 'Products' ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsProductsDropdownOpen(true)}
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                >
                  <button
                    onClick={(e) => handleNavClick(item.href, e)}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium cursor-pointer flex items-center space-x-1 py-2"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {isProductsDropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 -mt-2 w-56 z-50">
                      <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2">
                        {productsSubItems.map((subItem) => (
                          <button
                            key={subItem.page}
                            onClick={(e) => handleProductsSubClick(subItem.page, e)}
                            className="w-full text-left block px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : item.name === 'Resources' ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsResourcesDropdownOpen(true)}
                  onMouseLeave={() => setIsResourcesDropdownOpen(false)}
                >
                  <button
                    onClick={(e) => handleNavClick(item.href, e)}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium cursor-pointer flex items-center space-x-1 py-2"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {isResourcesDropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 -mt-2 w-56 z-50">
                      <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2">
                        {resourcesSubItems.map((subItem) => (
                          <button
                            key={subItem.page}
                            onClick={(e) => handleResourcesSubClick(subItem.page, e)}
                            className="w-full text-left block px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium cursor-pointer"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button
              onClick={onBookDemoClick}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-medium shadow-lg hover:shadow-orange-500/50"
            >
              Watch demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.name === 'About' ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                      className="w-full flex items-center justify-between text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium cursor-pointer"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobileAboutOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {aboutSubItems.map((subItem) => (
                          <button
                            key={subItem.page}
                            onClick={(e) => handleAboutSubClick(subItem.page, e)}
                            className="block text-gray-400 hover:text-orange-500 transition-colors duration-200 py-2 text-left w-full"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.name === 'Products' ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                      className="w-full flex items-center justify-between text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium cursor-pointer"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobileProductsOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {productsSubItems.map((subItem) => (
                          <button
                            key={subItem.page}
                            onClick={(e) => handleProductsSubClick(subItem.page, e)}
                            className="block text-gray-400 hover:text-orange-500 transition-colors duration-200 py-2 text-left w-full"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.name === 'Resources' ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                      className="w-full flex items-center justify-between text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium cursor-pointer"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileResourcesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobileResourcesOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {resourcesSubItems.map((subItem) => (
                          <button
                            key={subItem.page}
                            onClick={(e) => handleResourcesSubClick(subItem.page, e)}
                            className="block text-gray-400 hover:text-orange-500 transition-colors duration-200 py-2 text-left w-full"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium cursor-pointer"
                  >
                    {item.name}
                  </a>
                )
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  if (onBookDemoClick) onBookDemoClick();
                }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-medium text-center shadow-lg"
              >
                Watch demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;