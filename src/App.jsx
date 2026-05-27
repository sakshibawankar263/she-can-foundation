// src/components/ScrollToTop.jsx
// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components & Pages
import Navbar from "./components/layout/Navbar"; 
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Import the helper
import Hero from "./components/sections/Hero";
import Initiatives from "./pages/Initiatives";
import Team from "./pages/Team";
import Connect from "./pages/Connect";

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Forces scroll reset on route change */}
      
      <div className="relative min-h-screen w-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 overflow-x-hidden flex flex-col justify-between select-none transition-colors duration-300">
        
        <div>
          <Navbar />

          <main className="w-full min-h-screen pb-24 lg:pb-0 lg:pl-28 transition-all duration-300">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/events" element={<Initiatives />} />
              <Route path="/team" element={<Team />} />
              <Route path="/connect" element={<Connect />} />
            </Routes>
          </main>
        </div>

        <div className="w-full lg:pl-28 transition-all duration-300">
          <Footer />
        </div>

      </div>
    </Router>
  );
};

export default App;