"use client";

import { useEffect, useState } from "react";

import educationService from "@/services/education.service";
import { education } from "@/types/education";

import EducationCard from "./EducationCard";
import EducationSkeleton from "./EducationSkeleton";
import EducationEmpty from "./Educationempty";

export default function Education() {
  const [educations, setEducations] = useState<education[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const data = await educationService.getEducations();
        setEducations(
          [...data].sort((a, b) => a.displayOrder - b.displayOrder)
        );
      } catch (error) {
        console.error("Failed to fetch education:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEducations();
  }, []);

  return (
    <section id="education" className="bg-[#0A0F1D] py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Academic background
          </span>

          <h2 className="mt-3 text-4xl font-bold text-white">Education</h2>
        </div>

        {/* Content */}
        {loading ? (
          <EducationSkeleton />
        ) : educations.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {educations.map((item) => (
              <EducationCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <EducationEmpty />
        )}
      </div>
    </section>
  );
}
