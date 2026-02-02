import React from 'react';
import Button from './Button';
import { WHATSAPP_LINK, CTA_BACKGROUND_IMAGE } from '../constants';

const Cta: React.FC = () => {
  return (
    <>
      {/* Final Invitation Block - White Paper on Background */}
      <section id="booking" className="relative h-[900px] w-full flex items-center justify-center overflow-hidden bg-[#220202]">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={CTA_BACKGROUND_IMAGE}
            alt="Background Texture" 
            className="w-full h-full object-cover opacity-60 filter brightness-[0.4] contrast-110"
          />
          {/* Vignette overlay for depth - fading to deep burgundy/black */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#1a0101_95%)] opacity-90 pointer-events-none" />
          {/* Texture grain */}
          <div className="absolute inset-0 opacity-[0.2] mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>
        </div>

        {/* The Card Container - 3D Perspective */}
        <div className="relative z-10 w-full flex flex-col justify-center items-center px-4 perspective-[1500px]">
           
           {/* The Invitation Card (White Paper) */}
           <div className="relative bg-[#FFFEFC] w-[340px] md:w-[420px] min-h-[500px] aspect-[0.7] transform rotate-[-2deg] hover:rotate-0 hover:scale-[1.01] transition-all duration-1000 ease-out flex flex-col items-center p-8 md:p-12 overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]">
                
                {/* Real Paper Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }}></div>
                
                {/* Inner Border (Debossed effect) */}
                <div className="absolute inset-4 border border-[#1a1a1a]/10 pointer-events-none"></div>

                {/* Content Container - CENTERED content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-center gap-8 py-4">
                  
                  {/* Top: Header */}
                  <div className="flex flex-col items-center gap-1">
                     <span className="font-script text-3xl text-[#8E0E0E] opacity-80">Вы приглашены</span>
                     <div className="w-8 h-[1px] bg-[#1a1a1a]/20 mt-2"></div>
                  </div>

                  {/* Center: Main Title */}
                  <div className="flex flex-col items-center gap-4">
                    <h2 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] tracking-tight leading-none">
                      Валенсия
                    </h2>
                    <span className="font-mono uppercase text-xs tracking-[0.3em] text-[#5A5A5A]">
                      GASTRONOMIC TOUR
                    </span>
                    <p className="font-serif italic text-[#8E0E0E] mt-2 text-lg">
                      8 — 13 мая 2025
                    </p>
                  </div>

                  {/* Details */}
                  <div className="w-full flex flex-col items-center gap-6">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1a1a1a]/10 to-transparent"></div>
                    <p className="font-serif text-[#333333]/80 text-sm leading-relaxed max-w-[240px]">
                      6 дней вкуса, огня, моря и финал в ресторане Michelin.
                    </p>
                  </div>

                  {/* Big Red Button - Centered in flow */}
                  <Button 
                     variant="primary" 
                     onClick={() => window.open(WHATSAPP_LINK, '_blank')}
                     className="text-xl px-12 py-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300 w-auto min-w-[200px]"
                   >
                     Забронировать
                   </Button>

                </div>
           </div>

           {/* Cast Shadow on the velvet (improves realism) */}
           <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[45%] w-[320px] md:w-[400px] h-[500px] bg-black/50 blur-[40px] -z-10 rotate-[-2deg]"></div>

        </div>
      </section>

      {/* Footer with Logo */}
      <footer className="bg-[#220202] border-t border-white/5 py-12 text-center relative z-20 flex justify-center items-center">
        {/* 
          Исправленная ссылка на картинку (Direct Link).
          CSS классы инвертируют цвета, чтобы черный логотип стал белым на темном фоне.
          УВЕЛИЧЕН РАЗМЕР: h-40 (мобильный) и md:h-52 (десктоп)
        */}
        <img 
          src="https://lh3.googleusercontent.com/d/1TRuzOm3aZDm0bwmsPQYpdBIVlH9WOVOs" 
          alt="Логотип" 
          className="h-40 md:h-52 w-auto transition-all duration-300 mix-blend-screen invert grayscale opacity-100 hover:opacity-90"
        />
      </footer>
    </>
  );
};

export default Cta;