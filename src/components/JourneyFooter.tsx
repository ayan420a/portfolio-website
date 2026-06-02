"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, GitFork, Globe, ArrowUpRight, Heart } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "work.ayan27@gmail.com",
    href: "mailto:work.ayan27@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8707511678",
    href: "tel:+918707511678",
  },
  {
    icon: GitFork,
    label: "GitHub",
    value: "GitHub Profile",
    href: "https://github.com",
  },
  {
    icon: Globe,
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: "https://linkedin.com",
  },
];

const JourneyFooter = () => {
  return (
    <footer className="relative z-20 overflow-hidden">
      {/* Top separator */}
      <div className="h-px bg-cyan-500/10" />
 
      <div className="bg-transparent py-20 px-6 md:px-16 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
              Let&apos;s Connect
            </h2>
            <p className="text-neutral-200 max-w-lg mx-auto text-sm md:text-base leading-relaxed font-medium">
              I&apos;m always excited about new opportunities, collaborations, and interesting projects.
              Feel free to reach out!
            </p>
          </motion.div>
 
          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card p-5 flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-all duration-300">
                  <link.icon className="w-4.5 h-4.5 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">
                    {link.label}
                  </p>
                  <p className="text-sm text-neutral-200 truncate group-hover:text-[#00f0ff] group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.2)] transition-colors font-medium">
                    {link.value}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#00f0ff] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>
            ))}
          </motion.div>
 
          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-3 pt-8 border-t border-cyan-500/15"
          >
            <p className="text-xs text-neutral-400 flex items-center gap-1.5 font-medium">
              Crafted with <Heart className="w-3 h-3 text-cyan-400/60" /> by Mohd Ayan
            </p>
            <p className="text-[10px] text-neutral-500 tracking-wider">
              © {new Date().getFullYear()} — Built with Next.js & Framer Motion
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default JourneyFooter;
