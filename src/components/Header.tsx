import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-blue-900 shadow-2xl' : 'bg-blue-900/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-blue-900 font-bold text-lg">PH</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">FilipinOrg</span>
              <div className="text-yellow-300 text-xs font-medium">Building Communities Together</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['team', 'impact', 'volunteering', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-yellow-300 font-semibold transition-all duration-300 capitalize relative group transform hover:scale-105"
              >
                {item === 'team' ? 'Our Team' : 
                 item === 'impact' ? 'Our Impact' : 
                 item === 'about' ? 'About Us' :
                 item === 'contact' ? 'Contact Us' : 
                 item === 'volunteering' ? 'Volunteer' : item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-white hover:text-yellow-300 hover:scale-110 transition-all duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-blue-900 shadow-lg border-t border-blue-800 animate-fadeIn">
            <nav className="flex flex-col py-4">
              {['team', 'impact', 'volunteering', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left px-6 py-3 text-white hover:text-yellow-300 hover:bg-blue-800 font-semibold transition-all duration-300 capitalize transform hover:translate-x-2"
                >
                  {item === 'team' ? 'Our Team' : 
                   item === 'impact' ? 'Our Impact' : 
                   item === 'about' ? 'About Us' :
                   item === 'contact' ? 'Contact Us' : 
                   item === 'volunteering' ? 'Volunteer' : item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;