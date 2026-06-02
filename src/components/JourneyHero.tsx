"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

const JourneyHero = () => {
  const { scrollY } = useScroll();
 
  // Hero fades, scales up, and diffuses (blurs) out as user scrolls
  const heroOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 350], [1, 1.05]);
  const heroY = useTransform(scrollY, [0, 350], [0, -40]);
  const heroFilter = useTransform(scrollY, [0, 350], ["blur(0px)", "blur(12px)"]);
 
  // Stagger letter animations for the name
  const nameLetters = "MOHD AYAN".split("");
 
  return (
    <motion.section
      style={{
        opacity: heroOpacity,
        scale: heroScale,
        y: heroY,
        willChange: "transform, opacity",
      }}
      className="fixed inset-0 z-30 flex flex-col items-center justify-center pointer-events-none"
    >
      {/* Background glow orbs */}
      <div className="glow-orb glow-purple w-[600px] h-[600px] -top-40 -right-40" />
      <div className="glow-orb glow-blue w-[500px] h-[500px] -bottom-20 -left-20" />
      <div className="glow-orb glow-pink w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
 
      {/* Starry Night Crescent Moon (Top Right) */}
      <div className="absolute top-[12%] right-[8%] w-32 h-32 pointer-events-none z-10 select-none">
        {/* Radiating Halos */}
        <div className="absolute inset-0 rounded-full bg-amber-500/5 animate-pulse scale-150" style={{ filter: "blur(24px)" }} />
        <div className="absolute inset-2 rounded-full bg-yellow-400/10 animate-pulse scale-125" style={{ filter: "blur(12px)" }} />
        <div className="absolute inset-6 rounded-full bg-yellow-300/25" style={{ filter: "blur(4px)" }} />
        {/* Crescent Shape */}
        <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-yellow-300 to-amber-500 shadow-[0_0_25px_rgba(253,224,71,0.75)]" />
        <div className="absolute inset-8 rounded-full bg-[#0a0a0a] translate-x-3.5 -translate-y-3.5" />
      </div>
 
      {/* Cypress Tree Silhouette (Bottom Left) */}
      <div className="absolute bottom-0 left-[3%] w-56 h-[55vh] pointer-events-none z-10 opacity-20 select-none">
        <svg viewBox="0 0 100 200" className="w-full h-full text-[#032018] fill-current">
          {/* Flame-like organic paths representing the cypress */}
          <path d="M50,200 C30,175 18,135 22,100 C27,70 32,50 42,20 C39,40 37,65 39,85 C42,105 45,125 48,150 C50,125 53,105 56,85 C58,65 56,40 53,20 C63,50 68,70 73,100 C78,135 68,175 50,200 Z" />
          <path d="M40,200 C25,165 15,125 22,95 C28,65 30,45 40,15 C37,35 35,60 37,80 C40,100 43,120 45,145 C47,120 50,100 53,80 C55,60 53,35 50,15 C60,45 65,65 70,95 C75,125 65,165 40,200 Z" opacity="0.6" />
        </svg>
      </div>
 
      {/* Starry Night Pulsing Stars with Concentric Halos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[
          { x: "12%", y: "18%", size: 22 },
          { x: "82%", y: "30%", size: 26 },
          { x: "28%", y: "70%", size: 20 },
          { x: "72%", y: "78%", size: 24 },
          { x: "18%", y: "48%", size: 18 },
          { x: "58%", y: "15%", size: 28 },
          { x: "40%", y: "40%", size: 20 },
        ].map((star, i) => (
          <div
            key={i}
            className="absolute"
            style={{ left: star.x, top: star.y }}
          >
            {/* Outer Radiating Halo Ring */}
            <motion.div
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400/20"
              style={{ width: star.size * 3.5, height: star.size * 3.5 }}
              animate={{
                opacity: [0.1, 0.4, 0.1],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 4 + (i % 3) * 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Mid Halo Ring */}
            <motion.div
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400/10 border-dashed"
              style={{ width: star.size * 2, height: star.size * 2 }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {/* Soft Glow Core */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10" style={{ width: star.size * 1.8, height: star.size * 1.8, filter: "blur(6px)" }} />
            {/* Star Core Center */}
            <motion.div
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-400 shadow-[0_0_15px_rgba(253,224,71,0.85)]"
              style={{ width: star.size * 0.45, height: star.size * 0.45 }}
              animate={{
                scale: [0.85, 1.15, 0.85],
              }}
              transition={{
                duration: 2.5 + (i % 4) * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        ))}
      </div>
 
      {/* Diffused Text Content Area */}
      <motion.div
        style={{ filter: heroFilter, willChange: "filter" }}
        className="flex flex-col items-center justify-center pointer-events-none"
      >
        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm md:text-base tracking-[0.35em] text-white/40 uppercase mb-6 font-light"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          Welcome to my journey
        </motion.p>
 
        {/* Name - letter by letter */}
        <div className="flex items-center justify-center gap-1 md:gap-3 mb-6 flex-wrap">
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5 + i * 0.07,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className={`text-6xl md:text-8xl lg:text-[10rem] font-black leading-none tracking-tight ${
                letter === " " ? "w-4 md:w-8" : ""
              }`}
              style={{
                fontFamily: "var(--font-cinzel), serif",
                background:
                  "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.6) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "none",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
 
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-center"
        >
          <p className="text-lg md:text-2xl text-neutral-200 font-light tracking-wider mb-2">
            Software Developer • AI & ML Enthusiast
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <motion.div
              className="h-[1px] bg-gradient-to-r from-transparent to-cyan-500/60"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1, delay: 1.8 }}
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0 }}
              className="text-xs text-[#00f0ff] font-semibold tracking-[0.3em] uppercase drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]"
            >
              B.Tech CSE (AI & ML)
            </motion.span>
            <motion.div
              className="h-[1px] bg-gradient-to-l from-transparent to-purple-500/60"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1, delay: 1.8 }}
            />
          </div>
        </motion.div>
      </motion.div>
 
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{ filter: heroFilter, willChange: "filter" }}
        className="absolute bottom-12 flex flex-col items-center gap-3 pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.4em] text-[#00f0ff]/80 font-medium uppercase drop-shadow-[0_0_6px_rgba(0,240,255,0.3)]">
          Scroll to explore
        </span>
        <div className="scroll-indicator">
          <ChevronDown className="w-5 h-5 text-[#00f0ff]" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default JourneyHero;
