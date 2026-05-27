import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-bgDark text-textPrimary flex flex-col justify-between selection:bg-accentPurple/30 selection:text-white">
      {/* 1. Header Layout Frame */}
      <Navbar onOpenModal={handleOpenModal} />
      
      {/* 2. Main Structural Body Track */}
      <main className="flex-grow pt-20">
        {/* The Hero and section cards will be dropped right here next! */}
        <div className="max-w-7xl mx-auto px-6 py-24 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-accentPurple to-accentPink bg-clip-text text-transparent px-3 py-1 rounded-full border border-accentPurple/20 bg-accentPurple/5 inline-block">
            Workspace Active
          </span>
          <h2 className="text-4xl font-bold tracking-tight">Layout Shell Compiled Successfully</h2>
          <p className="text-textSecondary text-sm max-w-md mx-auto">
            Your navbar and footer are locked down. Look at your browser on the right side of your screen to see the live rendering!
          </p>
        </div>
      </main>

      {/* 3. Footer Layout Frame */}
      <Footer />
    </div>
  );
}