"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Ethereal E-Commerce",
    description: "A high-performance headless Shopify storefront with smooth page transitions and WebGL product viewers.",
    tech: ["Next.js", "Three.js", "Tailwind", "Shopify"],
    link: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    title: "Fintech Dashboard",
    description: "Real-time data visualization dashboard with dark mode, complex tables, and interactive charts.",
    tech: ["React", "D3.js", "Framer Motion", "tRPC"],
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Creative Agency Portfolio",
    description: "Award-winning agency site featuring custom cursor interactions, horizontal scrolling, and fluid typography.",
    tech: ["Vue", "GSAP", "Locomotive Scroll"],
    link: "#",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "AI Image Generator UI",
    description: "Sleek interface for an AI model, featuring prompt history, image upscaling options, and gallery view.",
    tech: ["SvelteKit", "Tailwind", "Supabase"],
    link: "#",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop"
  }
];

const Projects = () => {
  return (
    <section className="bg-[#121212] text-white py-24 px-8 md:px-24 min-h-screen relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Selected Work</h2>
          <div className="h-1 w-24 bg-white/20 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden relative">
                {/* Fallback image if unsplash fails, but we'll use unsplash for demo */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <a 
                    href={project.link}
                    className="p-2 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20 -translate-y-2 group-hover:translate-y-0"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
