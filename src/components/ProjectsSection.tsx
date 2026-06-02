"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GitFork,
  ExternalLink,
  Sparkles,
  Scan,
  ShoppingCart,
  Store,
} from "lucide-react";

const projects = [
  {
    title: "VANI – AI Soft Skill Coach",
    description:
      "AI powered soft skills coaching platform with Speech Practice, Mock Interviews, Presentation Practice, and personalized conversational feedback.",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Gemini API",
      "AssemblyAI",
      "Azure TTS",
      "Supabase",
    ],
    icon: Sparkles,
    links: { live: "https://vani-ai-phi.vercel.app/" },
  },
  {
    title: "AI Face Recognition Attendance",
    description:
      "Full stack attendance system using deep learning face recognition with blink-based liveness detection (EAR) and exportable Excel logs.",
    tech: [
      "React",
      "FastAPI",
      "OpenCV",
      "dlib",
      "face_recognition",
      "Pandas",
    ],
    icon: Scan,
    links: {
      github: "https://github.com/ayan420a/Face-recognition-attendance-system-Backend-",
      live: "https://facerecognitionateendance.netlify.app/",
    },
  },
  {
    title: "RN MASH Auto Parts Website",
    description:
      "Responsive automotive parts website with product showcase pages, intuitive navigation, and mobile-friendly layouts.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: Store,
    links: {
      github: "https://github.com/ayan420a/Rnmashautoparts",
      live: "https://rnmashautoparts.netlify.app/",
    },
  },
  {
    title: "RN MASH E-Commerce Website",
    description:
      "Responsive e-commerce platform with product listings, category navigation, and reusable modern UI components.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: ShoppingCart,
    links: {
      github: "https://github.com/ayan420a/RN-MASH-e-commerce-website",
      live: "https://darling-centaur-79bb6f.netlify.app/",
    },
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as const },
  },
};

const ProjectsSection = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="space-y-5"
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          variants={cardVariant}
          className="glass-card p-5 md:p-10 group relative overflow-hidden"
        >
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  <project.icon className="w-5 h-5 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 text-[#00f0ff] border border-cyan-500/25 hover:bg-cyan-500/20 text-xs font-semibold transition-all duration-300"
                      >
                        <GitFork className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/25 hover:bg-purple-500/20 text-xs font-semibold transition-all duration-300"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
 
              <a
                href={project.links.live || project.links.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-cyan-500/20 translate-y-1 group-hover:translate-y-0"
                aria-label={`View ${project.title}`}
              >
                <ArrowUpRight className="w-4 h-4 text-[#00f0ff]" />
              </a>
            </div>
 
            {/* Description */}
            <p className="text-neutral-200 text-sm leading-relaxed mb-5 max-w-2xl font-medium">
              {project.description}
            </p>
 
            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-cyan-500/5 text-cyan-300 border border-cyan-500/20 transition-all hover:bg-cyan-500/12 hover:border-cyan-500/50 hover:text-white hover:shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectsSection;
