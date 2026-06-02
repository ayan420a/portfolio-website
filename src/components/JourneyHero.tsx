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
 
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { l: 5, t: 12 }, { l: 15, t: 68 }, { l: 25, t: 35 }, { l: 38, t: 82 },
          { l: 48, t: 18 }, { l: 55, t: 55 }, { l: 62, t: 90 }, { l: 72, t: 25 },
          { l: 80, t: 60 }, { l: 88, t: 42 }, { l: 10, t: 45 }, { l: 30, t: 15 },
          { l: 42, t: 72 }, { l: 58, t: 8 }, { l: 68, t: 50 }, { l: 78, t: 85 },
          { l: 92, t: 30 }, { l: 20, t: 95 }, { l: 45, t: 38 }, { l: 85, t: 75 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{
              left: `${pos.l}%`,
              top: `${pos.t}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + (i % 5) * 0.8,
              repeat: Infinity,
              delay: (i % 7) * 0.3,
              ease: "easeInOut",
            }}
          />
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
