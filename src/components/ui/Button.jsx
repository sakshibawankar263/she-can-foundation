import React from 'react';

export default function Button({ children, variant = "primary", className = "", ...props }) {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm tracking-wide inline-flex items-center justify-center gap-2 transform active:scale-95 cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-accentPurple to-accentPink text-textPrimary hover:opacity-90 hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]",
    secondary: "bg-white/5 text-textPrimary hover:bg-white/10 border border-white/10 backdrop-blur-md",
    outline: "border border-accentPurple/50 text-textPrimary hover:bg-accentPurple/10",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}