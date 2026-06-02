"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface JourneySectionProps {
  children: React.ReactNode;
  id: string;
  label: string;
  index: number;
  side?: "left" | "right" | "center";
}

const JourneySection = ({
  children,
  id,
  label,
  index,
  side = "center",
}: JourneySectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "start 0.15"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  // Side-specific x transform for desktop timeline layout
  const xLeft = useTransform(scrollYProgress, [0, 1], [-60, 0]);
  const xRight = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const xCenter = useTransform(scrollYProgress, [0, 1], [0, 0]);

  const x = side === "left" ? xLeft : side === "right" ? xRight : xCenter;

  return (
    <div ref={sectionRef} id={id} className="relative">
      <motion.div
        style={{ opacity, y, scale, x }}
        className={`relative z-10 max-w-3xl mx-auto px-6 md:px-0 ${
          side === "left"
            ? "md:mr-auto md:ml-[8%] md:pr-16"
            : side === "right"
            ? "md:ml-auto md:mr-[8%] md:pl-16"
            : "md:mx-auto"
        }`}
      >
        {/* Section label badge */}
        <motion.div
          style={{ opacity }}
          className="mb-6"
        >
          <span className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse" />
            {label}
          </span>
        </motion.div>

        {/* Content */}
        <div className="space-y-6">{children}</div>
      </motion.div>
    </div>
  );
};

export default JourneySection;
