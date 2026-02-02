import React from 'react';
import { SUMMARY_CONTENT } from '../constants';

const Summary: React.FC = () => {
  return (
    <section id="summary" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="space-y-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif text-deep-blue mb-6 leading-tight">
              {SUMMARY_CONTENT.title}
            </h2>
            
            <p className="text-xl text-deep-blue/80 font-light leading-relaxed">
              {SUMMARY_CONTENT.subtitle}
            </p>
          </div>

          <ul className="space-y-5">
            {SUMMARY_CONTENT.list.map((item, index) => (
              <li key={index} className="flex items-start gap-4 text-lg md:text-xl font-light text-deep-blue/70">
                <span className="block w-4 h-px bg-deep-blue/40 mt-[0.85rem] flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <p className="font-serif italic text-2xl text-deep-blue/70 pt-8">
            {SUMMARY_CONTENT.footer}
          </p>
        </div>

        {/* Image */}
        <div className="relative">
          {/* Decorative subtle border, kept minimal */}
          <div className="absolute -inset-4 border border-deep-blue/10 rounded-lg -z-10 translate-x-3 translate-y-3 hidden md:block"></div>
          <img 
            src="https://images.unsplash.com/photo-1650964802649-ef992b574b8c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D$0" 
            alt="Valencia dining" 
            className="rounded-sm shadow-xl w-full h-[600px] object-cover filter contrast-[0.95]"
          />
        </div>

      </div>
    </section>
  );
};

export default Summary;