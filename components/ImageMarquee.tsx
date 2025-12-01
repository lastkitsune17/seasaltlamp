
import React from 'react';
import { PRODUCT_IMAGES } from '../constants';
import { IMAGES } from '../assets/images';

export const ImageMarquee: React.FC = () => {
  // Duplicate images to create seamless loop
  const marqueeImages = [...PRODUCT_IMAGES, ...PRODUCT_IMAGES];

  return (
    <div id="gallery" className="scroll-mt-24 py-24 bg-sea-950 overflow-hidden relative">
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${IMAGES.TEXTURES.CUBES})` }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center relative z-10">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 tracking-tight">Deep Dive Gallery</h2>
        <p className="text-sea-200 max-w-2xl mx-auto">See {PRODUCT_IMAGES[0].alt.split(' ')[0]} in its natural element. Designed to withstand the tides of time.</p>
      </div>
      
      <div className="relative w-full flex overflow-hidden group z-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-sea-950 to-transparent z-20"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-sea-950 to-transparent z-20"></div>
        
        <div className="flex animate-scroll-left gap-8 whitespace-nowrap py-8 hover:[animation-play-state:paused]">
          {marqueeImages.map((img, index) => (
            <div 
              key={`${img.id}-${index}`} 
              className="relative w-[300px] h-[200px] md:w-[450px] md:h-[320px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500 ease-out shadow-2xl shadow-black/30 border-4 border-sea-900"
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sea-900/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium tracking-wide">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};