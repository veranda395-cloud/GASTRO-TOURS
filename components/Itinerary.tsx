import React from 'react';
import { ITINERARY } from '../constants';

const Itinerary: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sand/10 skew-x-12 hidden md:block" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <span className="text-[#B01212]/60 font-bold tracking-widest uppercase">Программа</span>
          <h2 className="text-3xl md:text-5xl font-serif text-deep-blue mt-4">8–13 мая · 6 дней вкуса</h2>
        </div>

        <div className="space-y-12">
          {ITINERARY.map((item, index) => (
            <div key={item.day} className="relative pl-8 md:pl-0">
              {/* Connecting Line for mobile */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-terracotta/30 md:hidden" />

              <div className={`flex flex-col md:flex-row gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Image Side */}
                <div className="w-full md:w-5/12">
                   <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                   </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-7/12 flex flex-col justify-center">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-5xl font-serif text-[#B01212]/60 font-bold">
                      0{item.day}
                    </span>
                    <h3 className="text-2xl font-serif text-deep-blue font-semibold">
                      {item.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {item.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="mr-3 mt-2 block w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
                        <span className="leading-relaxed">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Itinerary;