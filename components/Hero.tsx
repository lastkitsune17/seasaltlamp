
import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCT_NAME, PRODUCT_TAGLINE, PRODUCT_DESCRIPTION } from '../constants';
import { IMAGES } from '../assets/images';

export const Hero: React.FC = () => {
  return (
    <section id="product" className="scroll-mt-24 relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden bg-gradient-to-br from-sea-50 via-white to-cyan-50 dark:from-sea-950 dark:via-sea-900 dark:to-sea-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-cyan-700 dark:text-cyan-300 uppercase bg-cyan-50 dark:bg-sea-900/50 rounded-full border border-cyan-200 dark:border-sea-700 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse"></span>
            Nyala lampu, Nyalakan peduli
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-sea-950 dark:text-white tracking-tight leading-[1.1] mb-6">
            {PRODUCT_NAME}
          </h1>
          <p className="text-xl text-sea-700 dark:text-sea-300 mb-10 leading-relaxed max-w-lg">
            {PRODUCT_DESCRIPTION}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[500px] lg:h-[700px] w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200 to-blue-200 dark:from-cyan-900 dark:to-blue-900 rounded-[3rem] rotate-3 opacity-30 dark:opacity-20 blur-2xl animate-pulse"></div>
          <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-cyan-900/20 dark:shadow-black/50 border-4 border-white dark:border-sea-800 animate-float">
            <img 
              src={IMAGES.PRODUCT.HERO}
              alt="Hero Product" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sea-900/40 to-transparent"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -bottom-8 -left-8 bg-white dark:bg-sea-900 p-4 rounded-2xl shadow-xl dark:shadow-black/40 border border-cyan-50 dark:border-sea-800 animate-float-delayed hidden md:block transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-sea-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <div>
                <p className="text-xs text-sea-500 dark:text-sea-400 font-semibold uppercase">Energy</p>
                <p className="text-lg font-bold text-sea-900 dark:text-white">Eco Power</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-cyan-100/40 dark:bg-cyan-900/10 rounded-full blur-[100px] -z-10 pointer-events-none transition-colors duration-500"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[800px] h-[800px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[100px] -z-10 pointer-events-none transition-colors duration-500"></div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-[calc(130%+1.3px)] h-[100px] text-sea-950 dark:text-black" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};