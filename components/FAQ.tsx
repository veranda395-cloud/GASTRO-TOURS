import React, { useState } from 'react';
import { FAQ_CONTENT } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-sage/10" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-terracotta font-bold tracking-widest uppercase">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-serif text-deep-blue mt-4">
            Важные детали
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_CONTENT.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md border border-deep-blue/5"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              >
                <span className={`text-lg md:text-xl font-serif text-deep-blue transition-colors ${openIndex === index ? 'text-terracotta' : 'group-hover:text-deep-blue/80'}`}>
                  {item.question}
                </span>
                <div className={`p-2 rounded-full transition-colors duration-300 flex-shrink-0 ml-4 ${openIndex === index ? 'bg-terracotta/10 text-terracotta' : 'bg-gray-100 text-gray-500'}`}>
                   {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed font-light">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;