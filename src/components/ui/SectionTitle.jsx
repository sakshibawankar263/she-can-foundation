import React from 'react';

export default function SectionTitle({ badge, title, highlight, description }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
      {badge && (
        <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-accentPurple to-accentPink bg-clip-text text-transparent px-3 py-1 rounded-full border border-accentPurple/20 bg-accentPurple/5 inline-block">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-textPrimary">
        {title} <span className="bg-gradient-to-r from-accentPurple to-accentPink bg-clip-text text-transparent">{highlight}</span>
      </h2>
      {description && (
        <p className="text-textSecondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}