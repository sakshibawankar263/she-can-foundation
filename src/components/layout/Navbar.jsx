import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Sparkles, HandHeart, Users } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", path: "/", icon: Heart },
  { label: "Initiatives", path: "/events", icon: Sparkles },
  { label: "Connect", path: "/connect", icon: HandHeart },
  { label: "Our Team", path: "/team", icon: Users },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed z-50 bottom-0 left-0 w-full h-20 px-6 pb-2 flex flex-row justify-between items-center bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-t border-zinc-200 dark:border-zinc-800/80 shadow-lg lg:top-1/2 lg:bottom-auto lg:left-6 lg:w-24 lg:h-auto lg:-translate-y-1/2 lg:py-10 lg:flex-col lg:justify-center lg:gap-8 lg:border lg:rounded-2xl">
      <div className="flex flex-row lg:flex-col justify-around lg:justify-center items-center w-full gap-2 lg:gap-6">
        {NAV_ITEMS.map((item) => {
          const IconComponent = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`group relative flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all duration-300 ${
                isActive 
                  ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold" 
                  : "text-zinc-400 dark:text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
              }`}
            >
              {/* Soft visual glow line for current position */}
              {isActive && (
                <div className="absolute bg-indigo-500 dark:bg-indigo-400 -top-3 left-1/2 -translate-x-1/2 w-6 h-[3px] rounded-full lg:top-1/2 lg:-left-3 lg:-translate-y-1/2 lg:w-[3px] lg:h-6" />
              )}

              <div className="transition-transform duration-300 group-hover:scale-110">
                <IconComponent size={22} strokeWidth={2} />
              </div>

              <span className={`text-[10px] font-sans font-medium tracking-tight mt-1 lg:hidden ${isActive ? "text-indigo-600 dark:text-indigo-400" : "text-zinc-500"}`}>
                {item.label}
              </span>

              {/* Desktop Floating Tooltip Badge */}
              <div className="absolute left-full ml-5 px-3 py-1.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-sans font-medium rounded-lg opacity-0 -translate-x-4 pointer-events-none transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0 hidden lg:flex items-center shadow-md z-50">
                {item.label}
                <div className="absolute top-1/2 -left-1.5 w-3 h-3 bg-zinc-900 dark:bg-zinc-100 rotate-45 -translate-y-1/2 -z-10 rounded-sm" />
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;