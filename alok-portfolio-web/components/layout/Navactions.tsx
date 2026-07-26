import { Menu, X } from "lucide-react";

interface NavActionsProps {
  mobileOpen: boolean;
  onToggleMobile: () => void;
}

export default function NavActions({
  mobileOpen,
  onToggleMobile,
}: NavActionsProps) {
  return (
    <div className="flex items-center gap-3">
      <a
        href="/resume/Alok_Pratihast_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 lg:block"
      >
        Resume
      </a>

      <button
        type="button"
        onClick={onToggleMobile}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-300 transition-colors duration-300 hover:border-cyan-400/40 hover:text-cyan-400 lg:hidden"
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
    </div>
  );
}
