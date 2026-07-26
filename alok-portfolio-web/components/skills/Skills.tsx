"use client";

import { useEffect, useState } from "react";

import skillService from "@/services/skill.service";
import { Skill } from "@/types/skill";

import SkillCategoryGroup from "./Skillcategorygroup";
import SkillsSkeleton from "./Skillsskeleton";
import SkillsEmpty from "./Skillsskeleton";

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await skillService.getSkills();
        setSkills(data);
      } catch (error) {
        console.error("Failed to fetch skills:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  // group by category (case-insensitive, since your data mixes "Backend" / "backend")
  // and sort within each group by displayOrder
  const grouped = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    const key = skill.category.trim().toLowerCase();
    if (!acc[key]) acc[key] = [];
    acc[key].push(skill);
    return acc;
  }, {});

  Object.values(grouped).forEach((group) =>
    group.sort((a, b) => a.displayOrder - b.displayOrder)
  );

  const categories = Object.keys(grouped).sort();

  return (
    <section id="skills" className="bg-[#0A0F1D] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-cyan-400">
            What I work with
          </span>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Skills &amp; technologies
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A breakdown of the languages, frameworks, and tools I use to
            build full stack applications.
          </p>
        </div>

        {/* Content */}
        {loading ? (
          <SkillsSkeleton />
        ) : categories.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {categories.map((category) => (
              <SkillCategoryGroup
                key={category}
                category={category}
                skills={grouped[category]}
              />
            ))}
          </div>
        ) : (
          <SkillsEmpty />
        )}
      </div>
    </section>
  );
}
