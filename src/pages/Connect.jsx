import React from "react";

const Connect = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      
      {/* 1. Hero Section */}
      <div className="text-center mb-20 animate-in fade-in duration-700">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          <span className="text-zinc-900 dark:text-white">Join the </span>
          <span className="text-indigo-600">Movement</span>
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
          Be the change you want to see. Register today and become a vital part of our mission to empower communities.
        </p>
      </div>

      {/* 2. Cards Section (ORIGINAL CARDS PRESERVED) */}
      <section className="mb-24 grid md:grid-cols-3 gap-8">
        {[
          { title: "Impact", desc: "Your contribution directly funds education for underprivileged children." },
          { title: "Growth", desc: "Gain hands-on experience and professional mentorship." },
          { title: "Community", desc: "Join a global network of passionate change-makers." }
        ].map((item, i) => (
          <div key={i} className="group p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 bg-zinc-50 dark:bg-zinc-900/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className="w-12 h-12 mb-6 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xl">0{i + 1}</div>
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">{item.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* 3. Form & Info Section */}
      <section className="grid lg:grid-cols-2 gap-16 items-start mb-24">
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-zinc-900 dark:text-white">Ready to </span>
              <span className="text-indigo-600">Start Your Journey?</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              We believe in transparency and collaboration. Once you submit your application, our core team will review your profile and reach out to you within 48 hours.
            </p>
          </div>
        </div>

        <form className="p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-indigo-500/5 space-y-6">
          <input type="text" placeholder="Full Name" className="w-full p-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-black focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
          <input type="email" placeholder="Email Address" className="w-full p-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-black focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
          <textarea placeholder="Tell us why you want to join..." className="w-full p-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-black focus:ring-2 focus:ring-indigo-500 h-32 outline-none transition-all"></textarea>
          <button className="w-full py-5 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 transition-all active:scale-[0.98]">
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
};

export default Connect;