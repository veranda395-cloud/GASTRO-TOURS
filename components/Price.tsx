import React from 'react';
import Button from './Button';
import { Tag } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Price: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <div className="relative p-8 md:p-12 border border-sand/30 rounded-2xl bg-cream/30 shadow-sm">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-terracotta/30 rounded-tr-xl -translate-y-2 translate-x-2"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-terracotta/30 rounded-bl-xl translate-y-2 -translate-x-2"></div>

          <h2 className="text-3xl md:text-4xl font-serif text-deep-blue mb-8">
            Стоимость путешествия
          </h2>

          <div className="flex flex-col items-center justify-center space-y-2 mb-8">
            
            {/* Early Booking Badge */}
            <div className="flex items-center gap-2 bg-[#B01212]/10 text-[#B01212] px-4 py-1.5 rounded-full mb-4">
              <Tag size={16} />
              <span className="text-sm font-semibold tracking-wider uppercase">Early Booking</span>
            </div>

            {/* Price Container */}
            <div className="flex flex-col md:flex-row items-center md:items-baseline gap-4 md:gap-6">
              <span className="text-2xl md:text-3xl text-gray-400 line-through decoration-terracotta/60 decoration-2 font-serif">
                2 500 €
              </span>
              <span className="text-5xl md:text-7xl font-serif text-deep-blue font-medium">
                2 300 €
              </span>
            </div>
            
            <p className="text-gray-500 font-light mt-2 text-sm md:text-base">
              цена за 1 человека при двухместном размещении
            </p>
          </div>

          <div className="max-w-lg mx-auto mb-10 text-gray-700">
            <p className="mb-4">
              <span className="font-semibold text-deep-blue">Включено всё</span>, кроме авиабилетов: проживание в бутик-отелях, все завтраки, обеды и ужины (включая Michelin), трансферы, мастер-классы, дегустации и сопровождение.
            </p>
          </div>

          <Button onClick={() => window.open(WHATSAPP_LINK, '_blank')} className="mx-auto px-10">
            Забронировать по акции
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Price;