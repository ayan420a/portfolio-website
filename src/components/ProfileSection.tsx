"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProfileSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.3"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className="space-y-5">
      {/* Quote-style profile */}
      <div className="glass-card p-5 md:p-10 relative overflow-hidden">
        {/* Decorative quote mark */}
        <div className="absolute -top-4 -left-2 text-8xl font-serif text-white/[0.03] leading-none select-none">
          &ldquo;
        </div>

        <p className="text-base md:text-lg text-neutral-200 leading-relaxed relative z-10">
          B.Tech Computer Science (AI & ML) student with hands-on experience in{" "}
          <span className="text-[#00f0ff] font-semibold drop-shadow-[0_0_8px_rgba(0,240,255,0.15)]">Python, Java, Web Development, REST APIs,</span>{" "}
          and{" "}
          <span className="text-[#00f0ff] font-semibold drop-shadow-[0_0_8px_rgba(0,240,255,0.15)]">Database Management</span>.
          Developed projects including an{" "}
          <span className="text-white font-bold">
            AI powered Face Recognition Attendance System
          </span>
          , an{" "}
          <span className="text-white font-bold">
            AI Soft Skill Coach
          </span>
          , and responsive web applications.
        </p>
 
        <div className="mt-6 pt-6 border-t border-cyan-500/10">
          <p className="text-sm text-neutral-400 leading-relaxed">
            Proficient in{" "}
            <span className="text-neutral-200 font-medium">HTML, CSS, JavaScript, FastAPI, SQL, Git,</span>{" "}
            and <span className="text-neutral-200 font-medium">GitHub</span>, with a strong interest in{" "}
            <span className="text-[#00f0ff]/90 font-medium">Software Development</span>,{" "}
            <span className="text-[#00f0ff]/90 font-medium">Backend Engineering</span>,{" "}
            <span className="text-[#00f0ff]/90 font-medium">Artificial Intelligence</span>, and{" "}
            <span className="text-[#00f0ff]/90 font-medium">Machine Learning</span>.
          </p>
        </div>
      </div>
 
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { value: "4+", label: "Projects" },
          { value: "1", label: "Internship" },
          { value: "2", label: "Hackathons" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="glass-card p-3 sm:p-5 text-center group"
          >
            <p className="text-2xl md:text-3xl font-extrabold text-[#00f0ff] mb-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]">
              {stat.value}
            </p>
            <p className="text-[8px] sm:text-[10px] text-neutral-400 font-bold uppercase tracking-normal sm:tracking-widest group-hover:text-neutral-200 transition-colors">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProfileSection;
