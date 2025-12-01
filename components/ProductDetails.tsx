
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PRODUCT_FEATURES } from '../constants';
import { IMAGES } from '../assets/images';
import { Zap, Shield, Smartphone, Globe, Cpu, Feather } from 'lucide-react';

const iconMap: Record<string, React.FC<any>> = {
  Zap, Shield, Smartphone, Globe, Cpu, Feather
};

export const ProductDetails: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="scroll-mt-24 py-32 bg-white dark:bg-sea-950 relative overflow-hidden transition-colors duration-500">
      {/* Background Bubbles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-sea-50 dark:bg-sea-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-50 dark:bg-cyan-900/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-cyan-600 dark:text-cyan-400 font-bold tracking-widest uppercase text-xs bg-cyan-50 dark:bg-sea-900 px-3 py-1 rounded-full">Teknologi Masa Depan</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-sea-950 dark:text-white">Inovasi Berkelanjutan</h2>
          <p className="mt-6 text-xl text-sea-700 dark:text-sea-300 leading-relaxed">
            Menghadirkan solusi penerangan yang memanfaatkan kekayaan alam laut, menggabungkan efisiensi energi dengan kepedulian lingkungan.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <div className="order-2 md:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PRODUCT_FEATURES.map((feature, index) => {
              const Icon = iconMap[feature.iconName] || Zap;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-sea-900/50 p-8 rounded-3xl border border-sea-100 dark:border-sea-800 hover:border-cyan-200 dark:hover:border-cyan-700 shadow-lg shadow-sea-100/50 dark:shadow-black/30 hover:shadow-xl hover:shadow-cyan-100/50 dark:hover:shadow-cyan-900/20 transition-all group"
                >
                  <div className="w-14 h-14 bg-sea-50 dark:bg-sea-800 rounded-2xl flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-sea-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-sea-600 dark:text-sea-400 leading-relaxed text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="order-1 md:order-2 relative">
             <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-sea-900/20 dark:shadow-black/50 aspect-[4/5] border-8 border-white dark:border-sea-800"
             >
                <img 
                  src={IMAGES.PRODUCT.DETAIL}
                  alt="Product Detail Shot" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sea-950/90 via-sea-900/20 to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                  <div className="w-16 h-1 bg-cyan-400 mb-6 rounded-full"></div>
                  <p className="font-mono text-xs text-cyan-200 tracking-widest mb-2">SPESIFIKASI UTAMA</p>
                  <h4 className="text-3xl font-bold mb-3">Reaksi Elektrokimia</h4>
                  <p className="text-sea-100 text-sm leading-relaxed opacity-90">
                    Mengubah energi kimia dari larutan garam menjadi energi listrik melalui prinsip sel elektrolisis antara anoda dan katoda yang efisien.
                  </p>
                </div>
             </motion.div>
             
             {/* Decorative Circle */}
             <div className="absolute -z-10 top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-72 h-72 border-2 border-dashed border-cyan-200 dark:border-sea-800 rounded-full animate-spin-slow opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
