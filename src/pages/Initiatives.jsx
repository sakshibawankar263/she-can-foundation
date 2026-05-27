import React from "react";

// Official NGO Pillars extracted from the foundation's mission
const initiatives = [
  { 
    title: "Skill Acquisition", 
    desc: "Vocational training and digital literacy programs designed to foster economic independence among women.", 
    icon: "🛠️" 
  },
  { 
    title: "Health & Hygiene", 
    desc: "Dedicated campaigns for menstrual hygiene awareness and essential healthcare access in marginalized communities.", 
    icon: "🏥" 
  },
  { 
    title: "Education Support", 
    desc: "Providing scholarships, study resources, and mentorship to ensure girls have a path to quality education.", 
    icon: "📚" 
  },
];

const Initiatives = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Header Section */}
      <header className="mb-16 animate-fadeUp">
        <h1 className="text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
          Our Initiatives
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg">
          We are committed to empowering lives through structured intervention. 
          Our work is built on three core pillars of community development.
        </p>
      </header>

      {/* Initiatives Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initiatives.map((item, idx) => (
          <div 
            key={idx} 
            // The hover effects and staggered delays make this highly interactive
            className="animate-fadeUp p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 
                       transition-all duration-500 ease-out 
                       hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/10 
                       hover:-translate-y-3 cursor-pointer group"
            style={{ animationDelay: `${idx * 150}ms` }} 
          >
            {/* Animated Icon */}
            <div className="text-4xl mb-6 transform transition-transform group-hover:scale-110 duration-300">
              {item.icon}
            </div>
            
            {/* Text Content */}
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
              {item.desc}
            </p>
            
            {/* Decorative Footer Bar */}
            <div className="w-12 h-1 bg-zinc-100 dark:bg-zinc-800 rounded-full group-hover:bg-indigo-500 transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Initiatives;