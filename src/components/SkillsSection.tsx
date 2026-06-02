"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Wrench,
  Database,
  Cpu,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "Java", "C", "JavaScript"],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Antigravity"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL"],
  },
  {
    title: "Concepts",
    icon: Cpu,
    skills: ["OOP", "Operating Systems", "Data Structures"],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] as const },
  },
};

const skillPillVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

const SkillsSection = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      {skillCategories.map((category) => (
        <motion.div
          key={category.title}
          variants={item}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <category.icon className="w-4.5 h-4.5 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]" />
            </div>
            <h4 className="text-xs font-bold text-neutral-200 uppercase tracking-widest">
              {category.title}
            </h4>
          </div>

          <motion.div
            className="flex flex-wrap gap-2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {category.skills.map((skill) => (
              <motion.span
                key={skill}
                variants={skillPillVariant}
                className="skill-pill"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsSection;
