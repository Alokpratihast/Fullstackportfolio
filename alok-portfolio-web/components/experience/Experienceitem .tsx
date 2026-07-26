import { experience } from "@/types/experience";

interface ExperienceItemProps {
  item: experience;
  isLast: boolean;
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function ExperienceItem({ item, isLast }: ExperienceItemProps) {
  return (
    <div className="relative pl-10">
      {/* connecting line */}
      {!isLast && (
        <span className="absolute left-[7px] top-6 h-[calc(100%+16px)] w-px bg-slate-800" />
      )}

      {/* marker */}
      <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center">
        {item.isCurrentJob ? (
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400" />
          </span>
        ) : (
          <span className="h-3 w-3 rounded-full border-2 border-slate-700 bg-slate-950" />
        )}
      </span>

      <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition-colors duration-300 hover:border-cyan-400/30">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-white">{item.jobTitle}</h3>
            <p className="mt-0.5 text-sm text-cyan-400">{item.companyName}</p>
          </div>

          <span className="rounded-full border border-slate-800 bg-slate-950/60 px-3 py-1 font-mono text-[11px] text-slate-400">
            {item.employmentType}
          </span>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-slate-500">
          <span>
            {formatDate(item.startDate)} —{" "}
            {item.isCurrentJob ? (
              <span className="text-cyan-400">present</span>
            ) : (
              formatDate(item.endDate as string)
            )}
          </span>
          <span>{item.location}</span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-400">
          {item.description}
        </p>
      </div>
    </div>
  );
}
