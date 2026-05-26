import React from 'react';

export default function GlowCard({ children, className = "" }) {
  return (
    <div className={`relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-accentPurple/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] flex flex-col justify-between overflow-hidden group ${className}`}>
      <div className="absolute -inset-px bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-100 pointer-events-none group-hover:from-accentPurple/10 transition-all duration-500" />
      <div className="relative z-10 flex flex-col h-full justify-between">
        {children}
      </div>
    </div>
  );
}