import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from '../HomePage/Logo';


const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => {
              window.location.href = '/';
            }}
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          >
            <Logo className="h-8 w-8" />
        
            <span className="text-xl font-bold text-white">Firstscience AI</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="/" className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium cursor-pointer">
              Home
            </a>
            <a href="#industries" className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium cursor-pointer">
              Industries
            </a>
            <a href="#how" className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium cursor-pointer">
              How it works
            </a>
            <a href="#features" className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium cursor-pointer">
              Features
            </a>
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => navigate("/login")}
              className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium px-4 py-2"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/login")}
              className="group inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-xl hover:from-orange-600 hover:to-purple-700 transition-all duration-300 font-bold text-lg shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 hover:scale-105 animate-pulse-slow"
            >
              Watch demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <a
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium cursor-pointer"
              >
                Home
              </a>
              <a
                href="#industries"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium cursor-pointer"
              >
                Industries
              </a>
              <a
                href="#how"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium cursor-pointer"
              >
                How it works
              </a>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium cursor-pointer"
              >
                Features
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/login");
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

export default Navbar;
