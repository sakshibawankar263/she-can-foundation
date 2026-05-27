import React from "react";
import heroImage from "../../assets/hero.png"; 

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-transparent font-sans">
      
      {/* =========================================================================
          1. HOME / LANDING VIEWPORT 
         ========================================================================= */}
      <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-16 max-w-7xl mx-auto gap-12">
        
        {/* Left Aspect: Empathetic Copy Content */}
        <div className="flex-1 space-y-6 text-left z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-500/20 bg-indigo-50/50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wide uppercase">
            🌟 Creating Equal Opportunities
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
            Empowering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
              She Can
            </span> <br />
            Foundation.
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg font-normal max-w-xl leading-relaxed">
            A welcoming space designed intentionally for students to explore, grow, and build skills without the fear of rejection or unrealistic expectations. We believe everyone deserves a fair chance to thrive.
          </p>

          {/* Primary Call to Action */}
          <div className="pt-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:shadow-indigo-600/30 active:scale-98 flex items-center gap-2">
              Join Our Community
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Right Aspect: Image Framing */}
        <div className="flex-1 flex justify-center relative w-full max-w-md lg:max-w-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/5 rounded-3xl blur-3xl pointer-events-none transform scale-90" />
          
          <div className="relative border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.01]">
            <img 
              src={heroImage} 
              alt="She Can Foundation Collective Team Work" 
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. ABOUT MISSION SECTION 
         ========================================================================= */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-zinc-100 dark:border-zinc-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Our Mission</span>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">Why We Stand Together</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
              We stand against structural educational anxiety by prioritizing community health alongside personal skill cultivation.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Inclusion by Intent */}
            <div className="group/card relative p-8 border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 rounded-2xl shadow-sm text-left overflow-hidden transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 border border-transparent rounded-2xl before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-indigo-600 before:via-purple-500 before:to-pink-500 before:rounded-2xl before:opacity-0 group-hover/card:before:opacity-100 before:transition-opacity before:duration-500 pointer-events-none before:content-none" />

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 font-bold text-lg transition-transform duration-300 group-hover/card:scale-110">
                  🌱
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2 text-base transition-colors duration-300 group-hover/card:text-indigo-600 dark:group-hover/card:text-indigo-400">
                  Inclusion by Intent
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Many platforms demand perfection from day one. We purposely design entry loops to offer support, lowering barriers so every student gets a straightforward opportunity to apply and learn.
                </p>
              </div>
            </div>

            {/* Card 2: Continuous Mentorship */}
            <div className="group/card relative p-8 border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 rounded-2xl shadow-sm text-left overflow-hidden transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 border border-transparent rounded-2xl before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-indigo-600 before:via-purple-500 before:to-pink-500 before:rounded-2xl before:opacity-0 group-hover/card:before:opacity-100 before:transition-opacity before:duration-500 pointer-events-none before:content-none" />

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4 font-bold text-lg transition-transform duration-300 group-hover/card:scale-110">
                  🤝
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2 text-base transition-colors duration-300 group-hover/card:text-purple-600 dark:group-hover/card:text-purple-400">
                  Continuous Mentorship
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  We bridge gaps between experienced seniors and developing beginners, cultivating actionable growth tracking mechanisms within a friendly framework.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;