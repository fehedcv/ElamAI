import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Logo1.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      // hide when scrolling down past threshold, show when scrolling up
      if (currentY > lastScrollY.current && currentY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // keep header visible when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) setShowHeader(true);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showHeader ? 'translate-y-0 backdrop-blur-md bg-black/20' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <a href="/" aria-label="Home" className="inline-block">
              <img
                src={logo}
                alt="Elam AI Logo"
                className="h-12 md:h-14 lg:h-16 w-auto object-contain"
              />
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {['About', 'Services', 'AI Agents', 'Insights', 'FAQ'].map((item) => {
              const targetId = item === 'AI Agents' ? 'case-studies' : item.toLowerCase().replace(/\s+/g, '-');
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(targetId)}
                  className="text-base md:text-lg font-medium transition-all duration-200 hover:scale-105 text-white/90 hover:text-white"
                >
                  {item}
                </button>
              );
            })}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-1.5 rounded-full text-sm font-medium hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Book a Call
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg">
            <nav className="py-4 px-4 space-y-3">
              {['About', 'Services', 'AI Agents', 'Insights', 'FAQ'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left text-gray-700 hover:text-indigo-600 py-2 text-base font-medium transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 mt-4"
              >
                Book a Call
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;