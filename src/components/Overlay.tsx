"use client";

import React from "react";
import { MotionValue, useTransform, motion } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

const Overlay = ({ scrollYProgress }: OverlayProps) => {
  // Section 1: "Ayan" + "Creative Developer" on the RIGHT
  // Fades IN from 0→5%, stays until 12%, fades OUT by 18%
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.12, 0.18], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.18], [40, -40]);

  // Section 2: "I build digital experiences" — LEFT side
  // 25%→35% fade in, hold, 50% fade out
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.32, 0.45, 0.52], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.52], [50, -50]);

  // Section 3: "Bridging design and engineering" — RIGHT side
  // 58%→68% fade in, hold, 80% fade out
  const opacity3 = useTransform(scrollYProgress, [0.58, 0.65, 0.75, 0.82], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.58, 0.82], [50, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* Section 1: Name + title — BOTTOM CENTER */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-x-0 bottom-16 flex flex-col items-center text-center text-white"
      >
        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-[0.15em] drop-shadow-lg leading-none mb-4 uppercase"
          style={{ fontFamily: "var(--font-cinzel), serif" }}
        >
          AYAN
        </h1>
        <p
          className="text-lg md:text-xl text-gray-300 font-light tracking-[0.3em] uppercase drop-shadow-md"
          style={{ fontFamily: "var(--font-cinzel), serif" }}
        >
          Creative Developer
        </p>
      </motion.div>

      {/* Section 2: Left Aligned */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center text-left px-8 md:px-16 text-white"
      >
        <h2 className="text-4xl md:text-6xl font-semibold max-w-2xl drop-shadow-lg leading-tight">
          I build digital<br />experiences.
        </h2>
      </motion.div>

      {/* Section 3: Right Aligned */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right px-8 md:px-16 text-white"
      >
        <h2 className="text-4xl md:text-6xl font-semibold max-w-2xl drop-shadow-lg leading-tight">
          Bridging design<br />and engineering.
        </h2>
      </motion.div>
    </div>
  );
};

export default Overlay;
