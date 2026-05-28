import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components & Pages
import Navbar from "./components/layout/Navbar"; 
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop"; 
import Hero from "./components/sections/Hero";
import StatsSection from "./components/sections/StatsSection"; 
import Initiatives from "./pages/Initiatives";
import Team from "./pages/Team";
import Connect from "./pages/Connect";

const App = () => {
  return (
    <Router>
      <ScrollToTop /> 
      
      <div className="flex flex-col min-h-screen w-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 overflow-x-hidden transition-colors duration-300">
        
        <Navbar />

        <main className="flex-grow w-full lg:pl-28 transition-all duration-300">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <StatsSection />
              </>
            } />
            <Route path="/events" element={<Initiatives />} />
            <Route path="/team" element={<Team />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </main>

        <div className="w-full lg:pl-28 transition-all duration-300">
          <Footer />
        </div>

      </div>
    </Router>
  );
};

export default App;