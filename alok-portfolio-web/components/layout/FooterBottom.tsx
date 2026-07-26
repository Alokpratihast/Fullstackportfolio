"use client";

import { ArrowUp } from "lucide-react";

export default function FooterBottom() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
      <p className="font-mono text-xs text-slate-500">
        © {year} Alok Pratihast. All rights reserved.
      </p>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition-colors duration-300 hover:border-cyan-400/40 hover:text-cyan-400"
      >
        <ArrowUp size={16} />
      </button>
    </div>
  );
}
