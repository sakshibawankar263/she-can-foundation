import React from "react";
// Humne content.js se data import kiya
import { initiativesData } from "../data/content"; 

const InitiativeCard = ({ initiative }) => (
  <div className="group p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl transition-all duration-500 hover:border-indigo-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10">
    {/* Icon section maintain rakha hai */}
    <div className="w-14 h-14 mb-6 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-2xl">
      {initiative.id === "edu" ? "🎓" : initiative.id === "health" ? "🏥" : "🌱"}
    </div>
    
    <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-600 transition-colors">
      {initiative.title}
    </h3>
    <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
      {initiative.desc}
    </p>

    {/* Yahan humne Impact Metrics add kiya hai */}
    <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
      <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-1">Impact</p>
      <p className="text-lg font-bold text-zinc-900 dark:text-white">{initiative.impact}</p>
    </div>
  </div>
);

const Initiatives = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Vision Section */}
      <section className="mb-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-5xl font-extrabold">
            <span className="text-zinc-900 dark:text-white">Our </span>
            <span className="text-indigo-600">Vision</span>
          </h2>
          <p className="text-xl text-zinc-500 leading-relaxed">
            We envision a world where gender is not a barrier to success. Our foundation is built on the belief that education, mentorship, and opportunity can transform communities.
          </p>
        </div>
        <div className="bg-indigo-600 p-10 rounded-3xl text-white shadow-xl shadow-indigo-500/20">
          <h3 className="text-2xl font-bold mb-4">Why We Do This</h3>
          <p className="opacity-90">Every initiative we take is aimed at systemic change. We create pathways for self-sustainability and long-term empowerment.</p>
        </div>
      </section>

      {/* Core Initiatives Section */}
      <section>
        <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-zinc-900 dark:text-white">Our </span>
            <span className="text-indigo-600">Core Initiatives</span>
        </h2>
        
        {/* Yahan humne loop use kiya hai */}
        <div className="grid md:grid-cols-3 gap-8">
          {initiativesData.map((item) => (
            <InitiativeCard key={item.id} initiative={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Initiatives;