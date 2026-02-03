import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-terracotta font-bold tracking-widest uppercase">Впечатления</span>
          <h2 className="text-4xl md:text-5xl font-serif text-deep-blue mt-4">
            Атмосфера Валенсии
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Моменты, которые мы проживем вместе: от шумных рынков до тишины рисовых полей.
          </p>
        </div>

        {/* 
            Логика контейнера:
            Mobile: flex (в ряд), скролл вбок (overflow-x-auto), прилипание (snap-x).
            Desktop: сетка (grid) как было раньше.
        */}
        <div className="
          flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 
          md:grid md:grid-cols-3 md:grid-rows-3 md:gap-4 md:h-[800px] md:pb-0 md:mx-0 md:px-0 md:overflow-visible
          scrollbar-hide
        ">
          {GALLERY_IMAGES.map((item) => (
            <div 
              key={item.id} 
              className={`
                relative group overflow-hidden rounded-lg shadow-md cursor-pointer 
                w-[85vw] aspect-[4/3] flex-shrink-0 snap-center 
                md:w-auto md:aspect-auto md:h-auto md:flex-shrink-1 md:snap-align-none
                ${item.className || ''}
              `}
            >
              <img 
                src={item.src} 
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Затемнение и текст поверх фото */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-terracotta text-xs font-bold tracking-wider uppercase mb-1 translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.category}
                </span>
                <h3 className="text-white font-serif text-xl translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.alt}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Подсказка для мобильных, что можно листать */}
        <div className="text-center md:hidden flex justify-center gap-2 items-center opacity-60 mt-2">
           <div className="w-1.5 h-1.5 rounded-full bg-terracotta"></div>
           <span className="text-sm text-terracotta font-serif italic">Листайте вправо</span>
           <div className="w-1.5 h-1.5 rounded-full bg-terracotta"></div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
