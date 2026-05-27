import React from "react";

const TeamMember = ({ name, role, bio }) => (
  <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
    <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-xl mb-4">👤</div>
    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{name}</h3>
    <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-3">{role}</p>
    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{bio}</p>
  </div>
);

const Team = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 animate-fadeUp">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">Our Core Team</h1>
      <p className="text-zinc-500 mb-12 max-w-2xl">Meet the individuals dedicated to the She Can Foundation mission. Transparency starts with accountability.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TeamMember name="Reeta Mishra" role="Founder & President" bio="Leading the vision for gender equality and women's empowerment through education." />
        <TeamMember name="Volunteer Leads" role="Community Operations" bio="Our on-ground coordinators managing local education and healthcare drives." />
      </div>
    </div>
  );
};

export default Team;