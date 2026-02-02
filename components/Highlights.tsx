import React from 'react';
import { HIGHLIGHTS } from '../constants';
import { Star, CheckCircle, Users, Heart, Camera, Coffee } from 'lucide-react';

const Highlights: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <CheckCircle className="w-8 h-8 text-cream/90" />;
      case 1: return <Users className="w-8 h-8 text-cream/90" />;
      case 2: return <Star className="w-8 h-8 text-cream/90" fill="currentColor" />;
      case 3: return <Camera className="w-8 h-8 text-cream/90" />;
      case 4: return <Heart className="w-8 h-8 text-cream/90" />;
      case 5: return <Coffee className="w-8 h-8 text-cream/90" />;
      default: return <Heart className="w-8 h-8 text-cream/90" />;
    }
  };

  return (
    <section className="py-24 bg-[#323038] text-cream">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-serif text-center mb-16 opacity-95">
          Ключевые моменты
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((highlight, index) => (
            <div 
              key={highlight.id} 
              className="p-8 rounded-3xl transition-all duration-500 bg-cream/5 hover:bg-cream/10"
            >
              <div className="mb-6 p-3 rounded-2xl w-fit bg-white/5">
                {getIcon(index)}
              </div>
              <p className="text-lg md:text-xl font-light leading-relaxed opacity-90">
                {highlight.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;