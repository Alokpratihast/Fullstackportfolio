"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80";

export default function ProjectCard({ project }: ProjectCardProps) {
  const technologies = project.technologies
    .split(",")
    .map((tech) => tech.trim());

  const [imageSrc, setImageSrc] = useState(
    project.imageUrl || DEFAULT_IMAGE
  );

  return (
    <div className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/5">
      {/* terminal chrome */}
      <div className="flex items-center gap-1.5 border-b border-slate-800 bg-slate-950/60 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-2 truncate font-mono text-[11px] text-slate-500">
          {project.title.toLowerCase().replace(/\s+/g, "-")}.repo
        </span>

        {project.isFeatured && (
          <span className="ml-auto flex items-center gap-1 rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-[11px] font-medium text-cyan-300">
            <Star size={11} className="fill-cyan-300" />
            Featured
          </span>
        )}
      </div>

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={imageSrc}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setImageSrc(DEFAULT_IMAGE)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>

        <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded border border-slate-800 bg-slate-950/60 px-2 py-1 font-mono text-[11px] text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition-colors duration-300 hover:border-cyan-400/50 hover:text-cyan-300"
          >
            <FaGithub size={16} />
            Code
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors duration-300 hover:bg-cyan-400"
          >
            Live Demo
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}