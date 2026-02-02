import React from 'react';
import { ChevronDown } from 'lucide-react';
import { HERO_CONTENT, WHATSAPP_LINK } from '../constants';
import Button from './Button';

const Hero: React.FC = () => {
  const scrollToContent = () => {
    const element = document.getElementById('summary');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1707313843245-7203bd7679b8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D" 
          alt="Valencia Atmosphere" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight drop-shadow-xl">
          {HERO_CONTENT.title}
        </h1>
        
        <p className="mb-8 max-w-3xl leading-snug">
          <span className="font-serif italic text-xl md:text-3xl text-white/90 bg-terracotta/30 px-3 py-1 rounded box-decoration-clone">
            {HERO_CONTENT.subtitle}
          </span>
        </p>
        
        <p className="text-gray-200 text-base md:text-lg mb-12 max-w-2xl font-light">
          {HERO_CONTENT.description}
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <Button onClick={() => window.open(WHATSAPP_LINK, '_blank')}>
            {HERO_CONTENT.cta}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={48} strokeWidth={1} />
      </button>
    </section>
  );
};

export default Hero;