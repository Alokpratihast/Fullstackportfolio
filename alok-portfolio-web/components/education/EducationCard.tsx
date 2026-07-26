import { GraduationCap } from "lucide-react";
import { education } from "@/types/education";

interface EducationCardProps {
  item: education;
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function EducationCard({ item }: EducationCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition-colors duration-300 hover:border-cyan-400/30">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-950/60 text-cyan-400">
            <GraduationCap size={18} />
          </span>

          <div>
            <h3 className="text-lg font-bold text-white">{item.degree}</h3>
            <p className="mt-0.5 text-sm text-slate-400">
              {item.fieldOfStudy}
            </p>
          </div>
        </div>

        {item.grade && (
          <span className="shrink-0 rounded-full border border-slate-800 bg-slate-950/60 px-3 py-1 font-mono text-[11px] text-cyan-300">
            {item.grade}
          </span>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-slate-500">
        <span className="text-cyan-400">{item.institution}</span>
        <span>
          {formatDate(item.startDate)} — {formatDate(item.endDate)}
        </span>
      </div>

      {item.description && (
        <p className="mt-4 text-sm leading-relaxed text-slate-400">
          {item.description}
        </p>
      )}
    </div>
  );
}
