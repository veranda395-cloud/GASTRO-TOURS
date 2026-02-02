import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Highlights from './components/Highlights';
import Itinerary from './components/Itinerary';
import Price from './components/Price';
import Gallery from './components/Gallery';
import About from './components/About';
import FAQ from './components/FAQ';
import Cta from './components/Cta';
import WhatsAppWidget from './components/WhatsAppWidget';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_LINK } from './constants';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'О туре', id: 'summary' },
    { name: 'Программа', id: 'itinerary' },
    { name: 'Автор', id: 'about' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (id === 'itinerary') {
       const sections = document.querySelectorAll('section');
       // Hero=0, Summary=1, Highlights=2, Itinerary=3
       if(sections[3]) sections[3].scrollIntoView({ behavior: 'smooth' });
    } else {
       element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen font-sans selection:bg-terracotta selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-deep-blue/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-end items-center">
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className={`text-sm uppercase tracking-widest hover:text-terracotta transition-colors ${
                  isScrolled ? 'text-white/80' : 'text-white/90'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => {
                // Open WhatsApp directly for booking
                window.open(WHATSAPP_LINK, '_blank');
              }}
              className="bg-[#B01212] px-6 py-2 rounded-full text-white font-medium hover:bg-[#8E0E0E] transition-colors shadow-lg"
            >
              Забронировать
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-deep-blue p-6 flex flex-col gap-6 shadow-xl border-t border-white/10">
             {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className="text-white/90 text-left text-lg py-2 border-b border-white/5"
              >
                {link.name}
              </button>
            ))}
             <button 
              onClick={() => {
                setMobileMenuOpen(false);
                window.open(WHATSAPP_LINK, '_blank');
              }}
              className="bg-[#B01212] w-full py-3 rounded-lg text-white font-bold hover:bg-[#8E0E0E] transition-colors"
            >
              Забронировать
            </button>
          </div>
        )}
      </nav>

      <Hero />
      <Summary />
      <Highlights />
      <Itinerary />
      <Price />
      <Gallery />
      <About />
      <FAQ />
      <Cta />
      
      {/* Floating Widget */}
      <WhatsAppWidget />
    </main>
  );
};

export default App;