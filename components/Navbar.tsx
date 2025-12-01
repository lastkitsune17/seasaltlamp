
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check system preference or stored value
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/70 dark:bg-sea-950/80 backdrop-blur-lg shadow-sm border-b border-sea-100 dark:border-sea-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
          <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-sea-900 dark:text-white' : 'text-sea-950 dark:text-white'}`}>
            Salt Lamp.
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#product" className="text-sm font-medium text-sea-700 dark:text-sea-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Product</a>
          <a href="#features" className="text-sm font-medium text-sea-700 dark:text-sea-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Features</a>
          <a href="#team" className="text-sm font-medium text-sea-700 dark:text-sea-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Team</a>
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-sea-700 dark:text-sea-200 hover:bg-sea-100 dark:hover:bg-sea-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a 
            href="https://wa.me/qr/ICW243DNKFWFP1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-cyan-600 text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-cyan-700 transition-colors shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:-translate-y-0.5"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
           <button 
            onClick={toggleDarkMode}
            className="text-sea-900 dark:text-white p-2 hover:bg-sea-50 dark:hover:bg-sea-800 rounded-full transition-colors"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-sea-900 dark:text-white p-2 hover:bg-sea-50 dark:hover:bg-sea-800 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-sea-950/95 backdrop-blur-xl shadow-xl py-6 px-4 flex flex-col space-y-4 border-t border-sea-100 dark:border-sea-800">
          <a href="#product" className="text-lg font-medium text-sea-800 dark:text-sea-100" onClick={() => setIsMobileMenuOpen(false)}>Product</a>
          <a href="#features" className="text-lg font-medium text-sea-800 dark:text-sea-100" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#team" className="text-lg font-medium text-sea-800 dark:text-sea-100" onClick={() => setIsMobileMenuOpen(false)}>Team</a>
          <a 
            href="https://wa.me/qr/ICW243DNKFWFP1"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-bold text-cyan-600 dark:text-cyan-400" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
};
