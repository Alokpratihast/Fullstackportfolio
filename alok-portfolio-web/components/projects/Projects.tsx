"use client";

import { useEffect, useState } from "react";

import projectService from "@/services/project.service";
import { Project } from "@/types/project";

import ProjectCard from "./ProjectCard";
import ProjectsSkeleton from "./ProjectsSkeleton";
import ProjectsEmpty from "./ProjectsEmpty";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectService.getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="bg-[#0A0F1D] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-cyan-400">
            My work
          </span>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Featured projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Here are some of the projects I&apos;ve built using ASP.NET Core,
            Angular, Next.js, React, SQL Server and other modern web
            technologies.
          </p>
        </div>

        {/* Content */}
        {loading ? (
          <ProjectsSkeleton />
        ) : projects.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <ProjectsEmpty />
        )}
      </div>
    </section>
  );
}
