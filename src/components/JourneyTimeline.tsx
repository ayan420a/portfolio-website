"use client";

import React from "react";
import JourneySection from "./JourneySection";
import ProfileSection from "./ProfileSection";
import EducationSection from "./EducationSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import AchievementsSection from "./AchievementsSection";
import CurvedTimeline from "./CurvedTimeline";

const JourneyTimeline = () => {
  return (
    <div className="relative py-32">
      {/* Curved SVG timeline (desktop only) */}
      <CurvedTimeline />

      {/* Mobile timeline line (left side, simple) */}
      <div className="md:hidden absolute left-4 top-0 bottom-0 w-[2px]">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-cyan-400 to-purple-500/20" />
      </div>


      {/* Section: About */}
      <div className="mb-40 md:mb-52">
        <JourneySection id="about" label="About Me" index={0} side="left">
          <ProfileSection />
        </JourneySection>
      </div>

      {/* Section: Education */}
      <div className="mb-40 md:mb-52">
        <JourneySection id="education" label="Education" index={1} side="right">
          <EducationSection />
        </JourneySection>
      </div>

      {/* Section: Skills */}
      <div className="mb-40 md:mb-52">
        <JourneySection id="skills" label="Skills" index={2} side="left">
          <SkillsSection />
        </JourneySection>
      </div>

      {/* Section: Experience */}
      <div className="mb-40 md:mb-52">
        <JourneySection id="experience" label="Experience" index={3} side="right">
          <ExperienceSection />
        </JourneySection>
      </div>

      {/* Section: Projects */}
      <div className="mb-40 md:mb-52">
        <JourneySection id="projects" label="Projects" index={4} side="left">
          <ProjectsSection />
        </JourneySection>
      </div>

      {/* Section: Achievements */}
      <div className="mb-16">
        <JourneySection id="achievements" label="Achievements" index={5} side="right">
          <AchievementsSection />
        </JourneySection>
      </div>
    </div>
  );
};

export default JourneyTimeline;
