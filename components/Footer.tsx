
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sea-950 text-sea-200 py-16 border-t border-sea-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
               <span className="text-2xl font-bold text-white tracking-tighter">Salt Lamp.</span>
            </div>
            <p className="text-sm text-sea-400 leading-relaxed">
              Penerangan inovatif yang memanfaatkan kekuatan alam, dirancang untuk efisiensi dan keberlanjutan masa depan.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Features</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#team" className="hover:text-cyan-400 transition-colors">About Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-sea-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-sea-500">
            © {new Date().getFullYear()} Salt Lamp Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
