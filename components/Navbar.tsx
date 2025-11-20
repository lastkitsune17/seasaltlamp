import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            Lumina.
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#product" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Product</a>
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Features</a>
          <a href="#team" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Team</a>
          <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-transform active:scale-95 flex items-center gap-2">
            <ShoppingBag size={16} />
            Pre-order
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-900 p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-4 flex flex-col space-y-4 border-t border-slate-100">
          <a href="#product" className="text-lg font-medium text-slate-800" onClick={() => setIsMobileMenuOpen(false)}>Product</a>
          <a href="#features" className="text-lg font-medium text-slate-800" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#team" className="text-lg font-medium text-slate-800" onClick={() => setIsMobileMenuOpen(false)}>Team</a>
          <button className="bg-blue-600 text-white w-full py-3 rounded-lg text-center font-semibold">
            Pre-order Now
          </button>
        </div>
      )}
    </nav>
  );
};