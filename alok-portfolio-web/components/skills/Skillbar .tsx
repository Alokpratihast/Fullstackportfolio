"use client";

import { motion } from "framer-motion";
import { Skill } from "@/types/skill";

interface SkillBarProps {
  skill: Skill;
}

export default function SkillBar({ skill }: SkillBarProps) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-sm font-medium text-slate-200">
          {skill.name}
        </span>
        <span className="font-mono text-xs text-cyan-400">
          {skill.percentage}%
        </span>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-400"
        />
      </div>
    </div>
  );
}
