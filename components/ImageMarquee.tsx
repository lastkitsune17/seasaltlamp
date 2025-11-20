import React from 'react';
import { PRODUCT_IMAGES } from '../constants';

export const ImageMarquee: React.FC = () => {
  // Duplicate images to create seamless loop
  const marqueeImages = [...PRODUCT_IMAGES, ...PRODUCT_IMAGES];

  return (
    <div className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-white text-3xl font-bold mb-2">Gallery</h2>
        <p className="text-slate-400">See {PRODUCT_IMAGES[0].alt.split(' ')[0]} in every environment.</p>
      </div>
      
      <div className="relative w-full flex overflow-hidden group">
        <div className="flex animate-scroll-left gap-6 whitespace-nowrap py-4 hover:[animation-play-state:paused]">
          {marqueeImages.map((img, index) => (
            <div 
              key={`${img.id}-${index}`} 
              className="relative w-[300px] h-[200px] md:w-[400px] md:h-[300px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 ease-out"
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};