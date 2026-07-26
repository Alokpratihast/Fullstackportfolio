import { ArrowRight, Download } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Primary */}
      <a
        href="#projects"
        className="group inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 hover:shadow-cyan-500/40"
      >
        View projects
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>

      {/* Secondary */}
      <a
        href="/resume/Alok_Pratihast_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-7 py-3.5 text-base font-semibold text-slate-300 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-300"
      >
        Download resume
        <Download
          size={18}
          className="transition-transform duration-300 group-hover:-translate-y-0.5"
        />
      </a>
    </div>
  );
}
