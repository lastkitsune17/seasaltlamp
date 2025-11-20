import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PRODUCT_NAME, PRODUCT_TAGLINE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="product" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
            New Release 2024
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            {PRODUCT_NAME}
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
            {PRODUCT_TAGLINE} Experience the perfect harmony of engineering and art. Designed for those who refuse to compromise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group">
              Explore Features
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all">
              Watch the Film
            </button>
          </div>

          <div className="mt-12 flex items-center gap-4 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/32/32?random=${i + 20}`} 
                  alt="User" 
                  className="w-8 h-8 rounded-full border-2 border-white" 
                />
              ))}
            </div>
            <p>Loved by 10,000+ creators</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] lg:h-[700px] w-full rounded-3xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://picsum.photos/800/1000?random=99" 
            alt="Hero Product" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </motion.div>
      </div>
      
      {/* Decorative background blobs */}
      <div className="absolute top-1/4 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
    </section>
  );
};