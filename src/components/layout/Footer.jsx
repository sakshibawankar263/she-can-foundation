import React from 'react';
import { Sparkles, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080D1A] relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Info Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-accentPurple to-accentPink flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-textPrimary" />
            </div>
            <span className="font-bold text-textPrimary tracking-tight">She Can Foundation</span>
          </div>
          <p className="text-sm text-textSecondary leading-relaxed">
            Building modern ecosystem pathways for student innovators and change-makers to learn without barriers.
          </p>
        </div>

        {/* Foundation Column */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-textPrimary mb-4">Foundation</h4>
          <ul className="space-y-2 text-sm text-textSecondary">
            <li><a href="#home" className="hover:text-accentPurple transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-accentPurple transition-colors">About Us</a></li>
            <li><a href="#impact" className="hover:text-accentPurple transition-colors">Our Impact</a></li>
          </ul>
        </div>

        {/* Track Column */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-textPrimary mb-4">Programs</h4>
          <ul className="space-y-2 text-sm text-textSecondary">
            <li><a href="#initiatives" className="hover:text-accentPink transition-colors">Mentorship Hub</a></li>
            <li><a href="#initiatives" className="hover:text-accentPink transition-colors">Engineering Labs</a></li>
            <li><a href="#initiatives" className="hover:text-accentPink transition-colors">Skill Cohorts</a></li>
          </ul>
        </div>

        {/* Social Network Column */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-textPrimary mb-4">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-textSecondary hover:text-textPrimary hover:border-accentPurple transition-all duration-300">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-textSecondary hover:text-textPrimary hover:border-accentPurple transition-all duration-300">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-textSecondary hover:text-textPrimary hover:border-accentPurple transition-all duration-300">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Baseline Copyright Strip */}
      <div className="border-t border-white/5 py-6 bg-bgDark">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-textSecondary">
          <span>&copy; 2026 She Can Foundation. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}