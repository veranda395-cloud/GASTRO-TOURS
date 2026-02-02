import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'invitation' | 'elegant' | 'ink' | 'receipt' | 'cinematic' | 'luxury' | 'stamp';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  fullWidth = false
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-sm flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[#B01212] text-white hover:bg-[#8E0E0E] shadow-lg",
    secondary: "bg-deep-blue text-white hover:bg-[#2a2d40]",
    outline: "border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white",
    invitation: "border border-[#B01212] text-[#B01212] bg-transparent hover:bg-[#B01212]/5 font-sans tracking-wide text-sm uppercase",
    // Elegant: darker, more refined
    elegant: "rounded-none border-b border-[#7A0909] text-[#7A0909] bg-transparent hover:border-[#7A0909] hover:tracking-[0.2em] px-0 py-1 shadow-none text-lg md:text-xl font-serif tracking-widest uppercase transition-all duration-500",
    // Ink: looks like handwritten/stamped text
    ink: "rounded-none text-[#9B2226] bg-transparent px-0 py-0 shadow-none font-serif text-lg border-b border-[#9B2226]/50 hover:border-[#9B2226] hover:opacity-80 transition-all duration-300",
    // Receipt: Looks like a red stamp or simple link
    receipt: "rounded-none bg-transparent text-[#B01212] border-2 border-[#B01212] px-6 py-2 font-mono text-sm uppercase tracking-widest hover:bg-[#B01212] hover:text-white shadow-none",
    // Cinematic: White text, minimal border, for dark backgrounds
    cinematic: "rounded-sm bg-transparent text-white/80 border border-white/20 px-8 py-3 font-sans text-xs uppercase tracking-[0.2em] hover:bg-white/5 hover:border-white/40 hover:text-white shadow-none hover:scale-105",
    // Luxury: Text only, widely spaced, for high-end editorial backgrounds
    luxury: "rounded-none bg-transparent text-[#F4F1DE] border-b border-[#F4F1DE]/30 px-0 py-2 font-serif text-lg md:text-xl italic hover:border-[#F4F1DE] hover:text-white shadow-none hover:translate-y-0 hover:scale-100",
    // Stamp: Red ink stamp look with multiply blend mode
    stamp: "rounded-sm border-2 border-[#8E0E0E] text-[#8E0E0E] bg-transparent hover:bg-[#8E0E0E] hover:text-[#FDFBF7] font-mono uppercase tracking-widest text-xs px-6 py-2 shadow-none mix-blend-multiply"
  };

  const selectedVariant = variants[variant as keyof typeof variants] || variants.primary;

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${selectedVariant} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;