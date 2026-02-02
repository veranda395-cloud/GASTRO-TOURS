import React from 'react';
import { AUTHOR_CONTENT } from '../constants';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Author Image */}
        <div className="w-full md:w-1/2">
          <div className="relative mx-auto max-w-sm group">
             {/* Decorative Border */}
             <div className="absolute inset-0 border-2 border-deep-blue translate-x-3 translate-y-3 rounded-t-full aspect-[3/4]"></div>
             
             {/* Image with fixed aspect ratio to maintain the 'arch' shape */}
             <img 
               src={AUTHOR_CONTENT.image} 
               alt="Author" 
               className="relative z-10 w-full rounded-t-full shadow-xl aspect-[3/4] object-cover"
             />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-serif text-deep-blue mb-8">{AUTHOR_CONTENT.title}</h2>
          
          <div className="space-y-6 text-lg text-gray-700 font-light">
            {AUTHOR_CONTENT.description.map((paragraph, index) => (
              <p 
                key={index} 
                className={index === 0 ? "text-xl md:text-2xl font-serif text-deep-blue font-medium mb-4" : ""}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 p-6 bg-cream rounded-xl border border-sand relative">
            <Quote className="absolute -top-4 -left-4 text-terracotta fill-terracotta w-8 h-8" />
            <p className="font-serif italic text-xl text-deep-blue text-center">
              "Этот тур — такой, какой я бы хотела пройти сама."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;