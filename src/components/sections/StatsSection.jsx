import React, { useState, useEffect, useRef } from "react";

const stats = [
  { label: "Women Empowered", value: 1200 },
  { label: "Workshops Held", value: 85 },
  { label: "Communities Reached", value: 40 },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="space-y-2">
            <h2 className="text-5xl font-bold">
              {isVisible ? <Counter end={stat.value} /> : "0"}+
            </h2>
            <p className="text-indigo-200 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Small helper component to handle the animation
const Counter = ({ end }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);
  return <>{count}</>;
};

export default StatsSection;