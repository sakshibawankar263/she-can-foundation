import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center min-h-[85vh] px-6 lg:px-16 animate-fadeUp">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-50 dark:bg-indigo-950/20 blur-3xl rounded-full -z-10"></div>
      
      <div className="max-w-4xl">
        {/* Badge/Label */}
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
          Registered NGO (Society Registration Act, 1860)
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl lg:text-7xl font-bold text-zinc-900 dark:text-white leading-[1.1] mb-8">
          Empowering Women, <br />
          <span className="text-indigo-600">Creating Change.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10 leading-relaxed">
          She Can Foundation works at the grassroots level to provide education, 
          skill development, and healthcare awareness to marginalized women. 
          Building an equitable society, one initiative at a time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/connect" 
            className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/25 active:scale-95 text-center"
          >
            Get Involved
          </Link>
          <Link 
            to="/events" 
            className="px-8 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-2xl font-bold hover:border-indigo-500 transition-all active:scale-95 text-center"
          >
            View Our Initiatives
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;