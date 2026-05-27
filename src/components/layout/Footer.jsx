import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 py-10 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-500 dark:text-zinc-400">
        
        {/* NGO Branding Anchor */}
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md" />
          <span className="font-semibold text-zinc-800 dark:text-zinc-200 tracking-tight">She Can Foundation</span>
          <span className="text-zinc-300 dark:text-zinc-700">|</span>
          <span className="text-xs">All Rights Reserved © 2026</span>
        </div>

        {/* Informational Center Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-medium">
          <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About Us</a>
          <a href="#privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;