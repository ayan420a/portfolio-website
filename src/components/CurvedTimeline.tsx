"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * A bold, curved SVG timeline that weaves between sections.
 * The path draws itself as you scroll, with glowing dots at each section.
 */
const CurvedTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring for the path drawing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    // Re-measure after a short delay (for layout shifts)
    const timeout = setTimeout(updateDimensions, 500);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      clearTimeout(timeout);
    };
  }, []);

  const { width, height } = dimensions;
  if (width === 0 || height === 0) return <div ref={containerRef} className="absolute inset-0" />;

  const centerX = width / 2;
  const curveAmplitude = Math.min(width * 0.22, 280); // how far left/right the curve goes
  const sectionCount = 6;
  const sectionSpacing = height / (sectionCount + 1);

  // Build the curved path: S-curves weaving left and right
  // Each section alternates sides
  let pathD = `M ${centerX} 0`;

  for (let i = 0; i < sectionCount; i++) {
    const sectionY = sectionSpacing * (i + 1);
    const prevY = i === 0 ? 0 : sectionSpacing * i;
    const midY = (prevY + sectionY) / 2;

    // Alternate: even sections curve right, odd curve left
    const direction = i % 2 === 0 ? 1 : -1;
    const curveX = centerX + curveAmplitude * direction;

    // Use cubic bezier for smooth S-curve
    pathD += ` C ${centerX} ${midY - sectionSpacing * 0.1}, ${curveX} ${midY - sectionSpacing * 0.15}, ${curveX} ${midY}`;
    pathD += ` C ${curveX} ${midY + sectionSpacing * 0.15}, ${centerX} ${midY + sectionSpacing * 0.1}, ${centerX} ${sectionY}`;
  }

  // Extend to bottom
  pathD += ` L ${centerX} ${height}`;

  // Calculate section dot positions (on the curve's peaks)
  const sectionDots = Array.from({ length: sectionCount }, (_, i) => {
    const sectionY = sectionSpacing * (i + 1);
    return { x: centerX, y: sectionY };
  });

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none hidden md:block" style={{ zIndex: 5 }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        className="absolute inset-0"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Gradient for the path — futuristic cyan/purple */}
          <linearGradient id="timeline-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.2" />
            <stop offset="20%" stopColor="#00f0ff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.9" />
            <stop offset="80%" stopColor="#00f0ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.2" />
          </linearGradient>
 
          {/* Steampunk / Starry Night gold brushstroke gradient */}
          <linearGradient id="timeline-gold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.1" />
            <stop offset="30%" stopColor="#f59e0b" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#d97706" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.1" />
          </linearGradient>
 
          {/* Starry Night cobalt background gradient */}
          <linearGradient id="timeline-cobalt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.15" />
          </linearGradient>
 
          {/* Glow gradient — thick and glowing */}
          <linearGradient id="timeline-glow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0" />
            <stop offset="20%" stopColor="#00f0ff" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#00f0ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
          </linearGradient>
 
          {/* Subtle glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
 
          {/* Dot glow — subtle */}
          <filter id="dot-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
 
        {/* Background path (faint) */}
        <path
          d={pathD}
          stroke="rgba(0, 240, 255, 0.05)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
 
        {/* Glow layer (thick, blurred) */}
        <motion.path
          d={pathD}
          stroke="url(#timeline-glow)"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          filter="url(#glow)"
          style={{
            pathLength: smoothProgress,
          }}
          strokeDasharray="1"
          strokeDashoffset="0"
        />
 
        {/* Swirl Current 1: Cobalt Wind Swirl (Dashed, thick) */}
        <motion.path
          d={pathD}
          stroke="url(#timeline-cobalt)"
          strokeWidth="5.5"
          fill="none"
          strokeLinecap="round"
          style={{
            pathLength: smoothProgress,
          }}
          strokeDasharray="15, 25"
        />
 
        {/* Swirl Current 2: Main Cyan/Purple Flow (Dashed, medium) */}
        <motion.path
          d={pathD}
          stroke="url(#timeline-gradient)"
          strokeWidth="3.2"
          fill="none"
          strokeLinecap="round"
          style={{
            pathLength: smoothProgress,
          }}
          strokeDasharray="25, 12"
        />
 
        {/* Swirl Current 3: Golden Starlight Swirl (Dashed, thin, offset) */}
        <motion.path
          d={pathD}
          stroke="url(#timeline-gold)"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          transform="translate(6, -4)"
          style={{
            pathLength: smoothProgress,
          }}
          strokeDasharray="8, 16"
        />

        {/* Section dots */}
        {sectionDots.map((dot, i) => {
          const dotProgress = (i + 1) / (sectionCount + 1);
          return (
            <g key={i}>
              {/* Outer ring pulse */}
              <motion.circle
                cx={dot.x}
                cy={dot.y}
                r="16"
                fill="none"
                stroke="rgba(0, 240, 255, 0.4)"
                strokeWidth="1.5"
                opacity="0"
                animate={{
                  opacity: [0, 0.6, 0],
                  r: [14, 22, 14],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
              {/* Main dot */}
              <motion.circle
                cx={dot.x}
                cy={dot.y}
                r="6.5"
                fill="#05050a"
                stroke="#00f0ff"
                strokeWidth="2.5"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              {/* Inner dot */}
              <motion.circle
                cx={dot.x}
                cy={dot.y}
                r="3"
                fill="#00f0ff"
                filter="url(#dot-glow)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: 0.4 }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default CurvedTimeline;
