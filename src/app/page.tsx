"use client";

import ScrollBackground from "@/components/ScrollBackground";
import JourneyHero from "@/components/JourneyHero";
import JourneyTimeline from "@/components/JourneyTimeline";
import JourneyFooter from "@/components/JourneyFooter";
import NavDots from "@/components/NavDots";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen selection:bg-white/15 selection:text-white">
      {/* Fixed video canvas background — plays frames on scroll */}
      <ScrollBackground />

      {/* Fixed Hero with scroll-to-fade */}
      <JourneyHero />

      {/* Spacer for hero (since hero is fixed) — allows transition space of pure video */}
      <div className="h-[140vh]" />

      {/* Journey Timeline */}
      <div className="relative z-10">
        <JourneyTimeline />
      </div>

      {/* Footer */}
      <JourneyFooter />

      {/* Floating navigation */}
      <NavDots />
    </main>
  );
}
