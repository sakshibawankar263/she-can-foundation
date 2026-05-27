import React from "react";

const Connect = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 animate-fadeUp">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">Get Involved</h1>
      <p className="text-zinc-500 mb-12">Select your area of interest so we can route your inquiry directly to the appropriate transparency department.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Volunteer Path */}
        <div className="p-8 border-2 border-indigo-600 rounded-2xl bg-indigo-50 dark:bg-indigo-900/10">
          <h2 className="text-xl font-bold mb-4">Volunteer</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">Join our community outreach programs. We value time and skill over forced targets.</p>
          <button className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium">Apply as Volunteer</button>
        </div>

        {/* Inquiry Path */}
        <div className="p-8 border border-zinc-200 dark:border-zinc-800 rounded-2xl">
          <h2 className="text-xl font-bold mb-4">Transparency Inquiry</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">Have questions about our registration, audits, or fund utilization? Reach out directly.</p>
          <button className="w-full py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg">View Financial Docs</button>
        </div>
      </div>
    </div>
  );
};

export default Connect;