"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  Code2,
  Briefcase,
  FolderOpen,
  Trophy,
} from "lucide-react";

const navItems = [
  { id: "about", icon: User, label: "About" },
  { id: "education", icon: GraduationCap, label: "Education" },
  { id: "skills", icon: Code2, label: "Skills" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "projects", icon: FolderOpen, label: "Projects" },
  { id: "achievements", icon: Trophy, label: "Achievements" },
];

const NavDots = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.5);

      const sections = navItems.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: item.id, top: Math.abs(rect.top - window.innerHeight / 3) };
      });

      const closest = sections.reduce((prev, curr) =>
        curr.top < prev.top ? curr : prev
      );
      setActiveSection(closest.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : 20,
        pointerEvents: isVisible ? "auto" as const : "none" as const,
      }}
      transition={{ duration: 0.4 }}
      className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-3"
    >
      <div className="glass-card p-2 flex flex-col items-center gap-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative group p-2 rounded-lg transition-all duration-300 ${
                isActive
                  ? "bg-cyan-500/10 text-[#00f0ff]"
                  : "text-neutral-400 hover:text-[#00f0ff] hover:bg-cyan-500/5"
              }`}
              aria-label={`Navigate to ${item.label}`}
            >
              <item.icon className="w-3.5 h-3.5" />
 
              {/* Tooltip */}
              <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 text-[10px] font-bold text-neutral-200 bg-[#0c0c12] border border-cyan-500/30 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-[0_0_12px_rgba(0,0,0,0.8)]">
                {item.label}
              </span>
 
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 rounded-lg border border-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.4)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default NavDots;
