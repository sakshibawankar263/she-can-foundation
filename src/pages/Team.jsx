import React from "react";
import { Link } from "react-router-dom"; // Link import karein
import teamPhoto from "../assets/images.jpeg"; 

const TeamMember = ({ name, role, bio }) => (
  <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
    <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-xl mb-4">👤</div>
    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{name}</h3>
    <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-3">{role}</p>
    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{bio}</p>
  </div>
);

const Team = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      
      {/* 1. TEAM PHOTO HERO SECTION */}
      <div className="relative rounded-[2rem] overflow-hidden shadow-2xl mb-20 group border-4 border-white dark:border-zinc-800">
        <img 
          src={teamPhoto} 
          alt="She Can Foundation Team" 
          className="w-full h-[500px] object-cover transition-transform duration-[2000ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tighter drop-shadow-lg">
            Meet The Team
          </h1>
          <p className="text-2xl text-indigo-300 font-medium mt-4 bg-black/30 px-6 py-2 rounded-full backdrop-blur-sm">
            Builders of the Future
          </p>
        </div>
      </div>

      {/* 2. CORE TEAM */}
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">Our Core Team</h1>
      <p className="text-zinc-500 mb-12 max-w-2xl text-lg">Meet the individuals dedicated to the She Can Foundation mission.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <TeamMember name="Reeta Mishra" role="Founder & President" bio="Leading the vision for gender equality and women's empowerment." />
        <TeamMember name="Volunteer Leads" role="Community Operations" bio="Our on-ground coordinators managing local education and healthcare drives." />
      </div>

      {/* 3. VOLUNTEER CTA SECTION (Updated with Link) */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 p-12 rounded-[2rem] text-center text-white space-y-6">
        <h2 className="text-3xl font-bold">Ready to be part of the change?</h2>
        <p className="text-indigo-100 max-w-lg mx-auto">We are looking for dedicated individuals to join our team of volunteers.</p>
        
        {/* Button ko Link mein wrap kiya gaya hai */}
        <Link 
          to="/connect" 
          className="inline-block px-10 py-4 bg-white text-indigo-700 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
        >
          Join Us Today
        </Link>
      </section>
    </div>
  );
};

export default Team;