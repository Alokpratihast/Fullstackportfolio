"use client";

import { useEffect, useState } from "react";

import experienceService from "@/services/experience.service";
import { experience } from "@/types/experience";

import ExperienceTimeline from "./Experiencetimeline";
import ExperienceSkeleton from "./Experienceskeleton";
import ExperienceEmpty from "./Experienceempty ";

export default function Experience() {
  const [experiences, setExperiences] = useState<experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const data = await experienceService.getExperiences();
        setExperiences(
          [...data].sort((a, b) => a.displayOrder - b.displayOrder)
        );
      } catch (error) {
        console.error("Failed to fetch experiences:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <section id="experience" className="bg-[#0A0F1D] py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Where I&apos;ve worked
          </span>

          <h2 className="mt-3 text-4xl font-bold text-white">Experience</h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            My professional journey building backend systems and full stack
            applications.
          </p>
        </div>

        {/* Content */}
        {loading ? (
          <ExperienceSkeleton />
        ) : experiences.length > 0 ? (
          <ExperienceTimeline experiences={experiences} />
        ) : (
          <ExperienceEmpty />
        )}
      </div>
    </section>
  );
}
