import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PRODUCT_FEATURES } from '../constants';
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
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Capabilities</span>
          <h2 className="mt-2 text-4xl font-bold text-slate-900">Engineered for Excellence</h2>
          <p className="mt-4 text-xl text-slate-600">
            Every curve, every component, every pixel has been meticulously crafted to provide an unparalleled experience.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <div className="order-2 md:order-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {PRODUCT_FEATURES.map((feature, index) => {
              const Icon = iconMap[feature.iconName] || Zap;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-50 p-6 rounded-2xl hover:bg-blue-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="order-1 md:order-2 relative">
             <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]"
             >
                <img 
                  src="https://picsum.photos/600/800?random=100" 
                  alt="Product Detail Shot" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <p className="font-mono text-xs opacity-70 mb-2">SPECIFICATION 01</p>
                  <h4 className="text-2xl font-bold">Precision Machined</h4>
                  <p className="text-slate-300 mt-2 text-sm">
                    Crafted from a single block of aluminum for maximum durability and thermal efficiency.
                  </p>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};