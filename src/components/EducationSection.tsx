"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const EducationSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.2"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className="glass-card p-8 md:p-10">
      <div className="flex items-start gap-5">
        {/* Icon */}
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
          <GraduationCap className="w-6 h-6 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]" />
        </div>
 
        <div className="flex-1 min-w-0">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
            B.Tech in Computer Science Engineering
          </h3>
          <p className="text-[#00f0ff] text-base font-semibold mb-3 drop-shadow-[0_0_8px_rgba(0,240,255,0.15)]">
            Artificial Intelligence & Machine Learning
          </p>
 
          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-300 mb-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#00f0ff]" />
              Babu Banarasi Das Institute of Technology and Management
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#00f0ff]" />
              Graduation: 2028
            </span>
          </div>
 
          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex justify-between text-xs text-neutral-400 mb-2">
              <span>Academic Journey</span>
              <span>2024 – 2028</span>
            </div>
            <div className="h-1.5 bg-cyan-950/40 border border-cyan-500/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_8px_rgba(0,240,255,0.6)]"
                initial={{ width: "0%" }}
                whileInView={{ width: "50%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationSection;
