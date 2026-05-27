import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-bgDark text-textPrimary flex flex-col justify-between selection:bg-accentPurple/30 selection:text-white">
      {/* Header Layout Shell */}
      <Navbar onOpenModal={handleOpenModal} />
      
      {/* Central View Assembly Track */}
      <main className="flex-grow">
        <Hero onOpenModal={handleOpenModal} />
        {/* Additional presentation track blocks will slide directly underneath this! */}
      </main>

      {/* Footer Layout Shell */}
      <Footer />
    </div>
  );
}