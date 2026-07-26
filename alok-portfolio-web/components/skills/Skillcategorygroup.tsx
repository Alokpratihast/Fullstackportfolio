import { Skill } from "@/types/skill";
import SkillBar from "./Skillbar ";

interface SkillCategoryGroupProps {
  category: string;
  skills: Skill[];
}

export default function SkillCategoryGroup({
  category,
  skills,
}: SkillCategoryGroupProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
      <p className="mb-6 font-mono text-sm text-slate-500">
        <span className="text-cyan-500">{"// "}</span>
        {category.toLowerCase()}
      </p>

      <div className="space-y-5">
        {skills.map((skill) => (
          <SkillBar key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}
