"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "HCL GUVI India AI Impact Buildathon 2026",
    description:
      "Participated among 40,000+ participants at the AI Impact Summit, New Delhi.",
    icon: Trophy,
    credentialUrl: "https://www.guvi.in/share-certificate/705R1m8k72A006P12N",
  },
  {
    title: "RIFT'26 Hackathon – PW IOI Lucknow",
    description:
      "Collaborated in a team to develop innovative technology solutions under time-constrained conditions.",
    icon: Award,
    credentialUrl: "https://rift2026.vercel.app/verify/8e0982cb-e681-418f-bfb1-75c0a976ef4a",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30, rotateX: -10 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as const },
  },
};

const AchievementsSection = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="space-y-4"
    >
      {achievements.map((achievement, i) => (
        <motion.div
          key={i}
          variants={item}
          className="glass-card p-7 md:p-8 group relative overflow-hidden"
        >
          <div className="relative z-10 flex items-start gap-5">
            <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <achievement.icon className="w-5 h-5 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]" />
            </div>
 
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-base md:text-lg font-bold text-white">
                  {achievement.title}
                </h4>
                <a
                  href={achievement.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-neutral-400 hover:text-[#00f0ff] transition-colors flex-shrink-0 mt-1 font-semibold"
                >
                  <ExternalLink className="w-3 h-3 text-[#00f0ff]" />
                  <span>Credential</span>
                </a>
              </div>
              <p className="text-sm text-neutral-200 leading-relaxed mt-1.5 font-medium">
                {achievement.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AchievementsSection;
