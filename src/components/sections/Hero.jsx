import React from 'react';
import { ArrowUpRight, ShieldCheck, Zap, Users } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero({ onOpenModal }) {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden bg-bgDark">
      
      {/* Premium Ambient Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accentPurple/10 rounded-full blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accentPink/10 rounded-full blur-[130px] pointer-events-none" />
      
      {/* Clean Cyberpunk Grid System Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Premium Copywriting */}
        <div className="space-y-6 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accentPink bg-accentPink/5 border border-accentPink/10 px-3 py-1 rounded-full backdrop-blur-md">
            <Zap className="h-3 w-3 animate-bounce" />
            Empowering Futures Through Education
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-textPrimary leading-[1.1]">
            Helping Students <br />
            <span className="bg-gradient-to-r from-accentPurple to-accentPink bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              Grow Without
            </span> <br />
            Fear Of Rejection
          </h1>
          
          <p className="text-textSecondary text-base md:text-lg max-w-xl leading-relaxed">
            We build modern, human-centered digital tracks where curiosity meets actual engineering systems. Learn, launch, and connect without friction.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="primary" onClick={onOpenModal}>
              Become A Volunteer <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Side: Pro Floating Glassmorphism Graphic Wrapper */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 shadow-2xl overflow-hidden transition-all duration-500 hover:border-white/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accentPurple to-accentPink opacity-10 blur-2xl" />
            
            {/* Center Graphic Frame */}
            <div className="w-full h-52 rounded-2xl bg-gradient-to-tr from-purple-950/40 via-slate-900/40 to-pink-950/40 border border-white/5 mb-6 flex flex-col items-center justify-center relative p-6 text-center group">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-accentPurple to-accentPink flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                <Users className="text-textPrimary h-5 w-5" />
              </div>
              <span className="text-sm font-semibold text-textPrimary">Next Cohort Starting Soon</span>
              <span className="text-xs text-textSecondary mt-1">Interdisciplinary Technical Management</span>
            </div>

            {/* Metric Metrics */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all duration-300">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-accentPurple" />
                  <span className="text-sm font-medium text-textSecondary">Active Student Mentors</span>
                </div>
                <span className="text-sm font-bold text-textPrimary">500+</span>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all duration-300">
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-accentPink" />
                  <span className="text-sm font-medium text-textSecondary">Completed Workshops</span>
                </div>
                <span className="text-sm font-bold text-textPrimary">25+</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}