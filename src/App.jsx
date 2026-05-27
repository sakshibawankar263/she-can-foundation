import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Zap, Target, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Track scroll position to change navbar styling dynamically
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bgDark text-textPrimary flex flex-col justify-between selection:bg-accentPurple/30 selection:text-white relative overflow-x-hidden antialiased scrollbar-hide">
      
      {/* 🔮 High-End Ambient Background Light Filters */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-accentPurple/10 rounded-full blur-[160px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-accentPink/5 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Background Cyberpunk Geometric Grid Structure */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* 🌐 1. INTERACTIVE NAVBAR SUB-SYSTEM */}
      <nav className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 flex items-center ${
        isScrolled 
          ? 'bg-bgDark/70 backdrop-blur-md border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          
          {/* Logo Frame */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-accentPurple to-accentPink flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.3)] group-hover:scale-105 transition-transform">
              <Sparkles className="h-5 w-5 text-textPrimary" />
            </div>
            <span className="font-bold text-textPrimary tracking-tight text-lg">
              She Can <span className="text-accentPurple font-medium">Foundation</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Impact', 'Programs'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors relative py-2 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-accentPurple to-accentPink transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <button className="bg-gradient-to-r from-accentPurple to-accentPink px-5 py-2 rounded-xl text-sm font-medium text-textPrimary hover:opacity-95 transition-all shadow-[0_0_20px_rgba(124,58,237,0.2)] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] active:scale-95 cursor-pointer">
              Join Us
            </button>
          </div>

          {/* Mobile Hamburg Trigger */}
          <button 
            className="md:hidden text-textPrimary cursor-pointer focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Flyout Responsive Canvas */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-20 bg-bgDark/95 backdrop-blur-2xl z-40 md:hidden flex flex-col p-6 space-y-6 border-t border-white/5 animate-fadeUp">
            {['Home', 'About', 'Impact', 'Programs'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium text-textSecondary hover:text-textPrimary transition-colors py-2 border-b border-white/5"
              >
                {item}
              </a>
            ))}
            <button className="bg-gradient-to-r from-accentPurple to-accentPink px-5 py-3 rounded-xl text-base font-medium text-textPrimary w-full shadow-lg">
              Join Us
            </button>
          </div>
        )}
      </nav>

      {/* 🚀 2. CENTRAL PRESENTATION SYSTEM (HERO & HIGHLIGHT TRACK) */}
      <main className="flex-grow pt-32 pb-24 relative z-10 max-w-7xl mx-auto px-6 w-full space-y-24">
        
        {/* Split Screen Hero Framework */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* Left Frame: Premium Interactive Typography */}
          <div className="space-y-6 text-left animate-fadeUp">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accentPurple bg-accentPurple/10 border border-accentPurple/20 px-3 py-1 rounded-full backdrop-blur-md">
              <Zap className="h-3.5 w-3.5 animate-bounce" /> Strategic Track 2026
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-textPrimary leading-[1.1]">
              Helping Students <br />
              <span className="bg-gradient-to-r from-accentPurple to-accentPink bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(124,58,237,0.25)]">
                Learn & Innovate
              </span> <br />
              Without Limits
            </h1>
            
            <p className="text-textSecondary text-base md:text-lg max-w-xl leading-relaxed">
              An upgraded, self-contained landing interface styled directly with your high-contrast theme layout parameters. We eliminate learning friction using real engineering frameworks.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-gradient-to-r from-accentPurple to-accentPink px-6 py-3 rounded-xl font-medium text-sm text-textPrimary inline-flex items-center gap-2 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all transform active:scale-95 cursor-pointer">
                Explore Dashboard <ArrowRight className="h-4 w-4" />
              </button>
              <button className="bg-surfaceDark/60 text-textPrimary hover:bg-surfaceDark px-6 py-3 rounded-xl font-medium text-sm border border-white/10 backdrop-blur-sm transition-all cursor-pointer">
                View Showcase
              </button>
            </div>
          </div>

          {/* Right Frame: Reusable Glass Content Grids */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            
            {/* Card 01 */}
            <div className="relative rounded-2xl border border-white/5 bg-surfaceDark/40 backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-accentPurple/30 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] group animate-fadeUp [animation-delay:200ms]">
              <div className="absolute -inset-px bg-gradient-to-br from-accentPurple/15 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="h-10 w-10 rounded-xl bg-accentPurple/10 border border-accentPurple/20 flex items-center justify-center mb-4 text-accentPurple relative z-10">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold mb-2 relative z-10">Skill Cohorts</h3>
              <p className="text-sm text-textSecondary leading-relaxed relative z-10">
                Hands-on practical tracks guided by senior development leads and active peer code validation.
              </p>
            </div>

            {/* Card 02 */}
            <div className="relative rounded-2xl border border-white/5 bg-surfaceDark/40 backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-accentPink/30 hover:shadow-[0_0_40px_rgba(147,51,234,0.15)] group lg:translate-y-8 animate-fadeUp [animation-delay:400ms]">
              <div className="absolute -inset-px bg-gradient-to-br from-accentPink/15 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="h-10 w-10 rounded-xl bg-accentPink/10 border border-accentPink/20 flex items-center justify-center mb-4 text-accentPink relative z-10">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold mb-2 relative z-10">SaaS Frameworks</h3>
              <p className="text-sm text-textSecondary leading-relaxed relative z-10">
                Optimized sandbox architectures engineered for modern code staging and platform operations.
              </p>
            </div>

          </div>
        </div>

        {/* 📑 3. NEW FEATURE LAYER: HIGH-INTERACTIVE COHORT TABS */}
        <div className="border border-white/5 rounded-3xl bg-surfaceDark/20 backdrop-blur-xl p-8 max-w-4xl mx-auto w-full text-center animate-fadeUp [animation-delay:500ms]">
          <h2 className="text-2xl font-bold mb-3">Interactive Workspace Modules</h2>
          <p className="text-sm text-textSecondary max-w-md mx-auto mb-6"> Toggle between available tracks to check status validations in real-time.</p>
          
          {/* Tab Selection Row */}
          <div className="flex justify-center gap-4 border-b border-white/5 pb-4 mb-6">
            {['overview', 'curriculum', 'outcomes'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-sm font-medium uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab 
                    ? 'bg-gradient-to-r from-accentPurple to-accentPink text-textPrimary shadow-lg' 
                    : 'text-textSecondary hover:text-textPrimary bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Dynamic Tab Panel Display Grid */}
          <div className="text-left min-h-[100px] bg-black/40 p-6 rounded-2xl border border-white/5">
            {activeTab === 'overview' && (
              <div className="space-y-3 animate-fadeUp">
                <h4 className="font-semibold text-accentPurple text-base">Ecosystem Focus Area</h4>
                <p className="text-sm text-textSecondary leading-relaxed">This pipeline provides student engineers with real-time access to code reviews, direct open-source staging, and localized technology support pools.</p>
              </div>
            )}
            {activeTab === 'curriculum' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeUp">
                <div className="flex items-start gap-3 text-sm text-textSecondary">
                  <CheckCircle2 className="h-5 w-5 text-accentPink shrink-0 mt-0.5" /> <span>Module 01: CSS Token Optimization</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-textSecondary">
                  <CheckCircle2 className="h-5 w-5 text-accentPink shrink-0 mt-0.5" /> <span>Module 02: State Container Isolation</span>
                </div>
              </div>
            )}
            {activeTab === 'outcomes' && (
              <div className="space-y-2 animate-fadeUp text-center py-4">
                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accentPurple to-accentPink">100% Verified</span>
                <p className="text-xs text-textSecondary mt-1">All participants receive production deployment validation metrics.</p>
              </div>
            )}
          </div>
        </div>

      </main>

      {/* 🔒 4. NATIVE EMBEDDED SOCIAL FOOTER */}
      <footer className="border-t border-white/5 bg-bgDark/90 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-accentPurple to-accentPink flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-textPrimary" />
            </div>
            <span className="font-bold text-textPrimary text-sm tracking-tight">She Can Foundation</span>
          </div>
          
          {/* Hardened SVG Social Links Row */}
          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-textSecondary hover:text-textPrimary hover:border-accentPurple transition-all duration-300">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-textSecondary hover:text-textPrimary hover:border-accentPurple transition-all duration-300">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>

          <p className="text-xs text-textSecondary">&copy; 2026 She Can Foundation. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}