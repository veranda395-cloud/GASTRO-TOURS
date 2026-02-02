import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK } from '../constants';

const WhatsAppWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after a small delay for better UX (so it doesn't block hero instantly)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-[60] transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-2xl hover:bg-[#22bf5b] transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse Effect */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping duration-[2s]"></span>
        
        {/* Icon */}
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          className="fill-white relative z-10 w-8 h-8 md:w-9 md:h-9"
        >
           <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.698c1.09.594 2.075.811 2.806.811 3.181 0 5.767-2.586 5.767-5.766.001-3.181-2.587-5.767-5.767-5.767zm0 10.43c-.88 0-1.733-.263-2.483-.708l-.178-.106-1.571.411.419-1.531-.116-.184c-.527-.837-.805-1.802-.804-2.782.001-2.613 2.127-4.739 4.737-4.739 2.61 0 4.735 2.126 4.735 4.736.001 2.613-2.126 4.739-4.735 4.739zm2.427-3.538c-.133-.066-.786-.388-.908-.432-.122-.044-.211-.066-.3.066-.088.133-.343.433-.421.522-.078.089-.155.099-.288.033-.133-.066-.56-.206-1.068-.658-.396-.353-.663-.789-.741-.921-.077-.133-.008-.205.058-.272.061-.06.133-.155.2-.233.066-.078.088-.133.133-.222.044-.089.022-.167-.011-.233-.033-.066-.3-.722-.411-.989-.108-.259-.217-.224-.3-.228l-.256-.005c-.088 0-.233.033-.355.167-.122.133-.466.455-.466 1.11 0 .656.477 1.289.544 1.378.066.089.938 1.432 2.272 2.008.317.137.564.218.758.28.32.103.611.088.841.054.256-.038.786-.321.897-.632.111-.311.111-.577.078-.632-.033-.055-.122-.088-.255-.155z"/>
        </svg>

        {/* Tooltip text */}
        <span className="absolute right-full mr-4 bg-white text-deep-blue px-3 py-1.5 rounded-lg text-sm font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block">
          Написать в WhatsApp
        </span>
      </a>
    </div>
  );
};

export default WhatsAppWidget;