"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "The Essence",
    period: "April 2026 – June 2026",
    type: "Internship",
    points: [
      "Assisted in developing backend APIs and integrating web application features",
      "Worked with databases, debugging, testing, and performance improvements",
      "Technologies: Python, FastAPI, SQL, Git, GitHub",
    ],
  },
];

const memberships = [
  {
    title: "Member, Binary Brains BBDITM",
    period: "October 2025 – Present",
  },
  {
    title: "Member, Google Developer Group on Campus BBDITM",
    period: "December 2025 – Present",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as const },
  },
};

const ExperienceSection = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="space-y-5"
    >
      {/* Main experience */}
      {experiences.map((exp, i) => (
        <motion.div key={i} variants={item} className="glass-card p-5 md:p-10">
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]" />
            </div>
 
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {exp.title}
                </h3>
                <span className="px-2.5 py-0.5 text-[10px] rounded-md bg-cyan-500/10 text-[#00f0ff] border border-cyan-500/30 font-semibold uppercase tracking-wider">
                  {exp.type}
                </span>
              </div>
              <p className="mb-1">
                <a
                  href="https://www.linkedin.com/company/the-essence-india/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-[#00f0ff] font-semibold transition-colors inline-flex items-center gap-1.5 group/company"
                >
                  <span>{exp.company}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover/company:text-[#00f0ff] transition-colors" />
                </a>
              </p>
              <p className="text-sm text-neutral-400 flex items-center gap-1.5 mb-5 font-medium">
                <Calendar className="w-3.5 h-3.5 text-[#00f0ff]" />
                {exp.period}
              </p>
 
              <ul className="space-y-3">
                {exp.points.map((point, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + j * 0.1 }}
                    className="flex items-start gap-3 text-neutral-200 text-sm leading-relaxed"
                  >
                    <ChevronRight className="w-4 h-4 text-[#00f0ff] flex-shrink-0 mt-0.5" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
 
      {/* Memberships */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {memberships.map((m, i) => (
          <motion.div
            key={i}
            variants={item}
            className="glass-card p-5 sm:p-6 group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1.5 h-7 rounded-full bg-[#00f0ff] shadow-[0_0_8px_rgba(0,240,255,0.6)]" />
              <h4 className="text-sm font-semibold text-neutral-100">
                {m.title}
              </h4>
            </div>
            <p className="text-xs text-neutral-400 flex items-center gap-1.5 ml-5 font-medium">
              <Calendar className="w-3 h-3 text-[#00f0ff]" />
              {m.period}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceSection;
