import React from "react";

const initiatives = [
  { title: "Tech Literacy Drive", desc: "Teaching foundational programming to students in rural areas.", icon: "💻" },
  { title: "Mentorship Circle", desc: "Connecting industry seniors with grassroots learners.", icon: "🤝" },
  { title: "Community Hubs", desc: "Creating local spaces for collaborative learning.", icon: "🏠" },
];

const Initiatives = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 animate-fadeUp">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-textPrimary mb-4">Our Initiatives</h1>
        <p className="text-textSecondary max-w-2xl">
          Programs designed to dismantle barriers and provide equitable access to technical education for everyone.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initiatives.map((item, idx) => (
          <div key={idx} className="p-8 bg-surfaceDark rounded-2xl border border-zinc-800 hover:border-accentPurple transition-all duration-300 group">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-textPrimary mb-2">{item.title}</h3>
            <p className="text-textSecondary text-sm leading-relaxed">{item.desc}</p>
            <button className="mt-6 text-accentPurple font-semibold text-sm hover:underline">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Initiatives;