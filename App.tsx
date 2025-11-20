import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImageMarquee } from './components/ImageMarquee';
import { ProductDetails } from './components/ProductDetails';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ImageMarquee />
        <ProductDetails />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;