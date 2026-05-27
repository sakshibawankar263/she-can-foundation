import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

export default function Navbar({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Impact', href: '#impact' },
    { name: 'Initiatives', href: '#initiatives' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 flex items-center ${
      isScrolled 
        ? 'bg-bgDark/70 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.2)]' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        {/* Brand/Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-accentPurple to-accentPink flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <Sparkles className="h-5 w-5 text-textPrimary" />
          </div>
          <span className="font-bold text-lg tracking-tight text-textPrimary group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-accentPurple group-hover:to-accentPink group-hover:bg-clip-text transition-all duration-300">
            She Can <span className="text-accentPink font-medium">Foundation</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors relative py-2 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-accentPurple to-accentPink transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Call To Action */}
        <div className="hidden md:block">
          <Button variant="primary" onClick={onOpenModal}>Join Us</Button>
        </div>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-textPrimary focus:outline-none cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-bgDark/95 backdrop-blur-xl z-40 md:hidden flex flex-col p-6 space-y-6 border-t border-white/5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-medium text-textSecondary hover:text-textPrimary transition-colors py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="w-full mt-4" onClick={() => { setIsMobileMenuOpen(false); onOpenModal(); }}>
            Join Us
          </Button>
        </div>
      )}
    </nav>
  );
}