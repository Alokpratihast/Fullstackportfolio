"use client";

import { motion } from "framer-motion";

export default function HeroStatusCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="absolute -bottom-2 left-0 z-20 w-[280px] rounded-xl border border-slate-800 bg-slate-950/95 shadow-2xl shadow-black/50 backdrop-blur-lg sm:-left-6"
    >
      <div className="flex items-center gap-1.5 border-b border-slate-800 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-2 font-mono text-[11px] text-slate-500">
          status.api
        </span>
      </div>

      <div className="px-4 py-3 font-mono text-[12px] leading-relaxed">
        <p className="text-slate-500">
          GET <span className="text-cyan-400">/developer/status</span>
        </p>
        <p className="mt-1 text-emerald-400">200 OK</p>
        <p className="mt-1 text-slate-400">
          {"{"}
          <br />
          <span className="pl-3">
            &quot;available&quot;: <span className="text-cyan-300">true</span>,
          </span>
          <br />
          <span className="pl-3">
            &quot;role&quot;:{" "}
            <span className="text-amber-300">&quot;full-stack&quot;</span>
          </span>
          <br />
          {"}"}
        </p>
      </div>
    </motion.div>
  );
}