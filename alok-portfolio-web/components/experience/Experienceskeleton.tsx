export default function ExperienceSkeleton() {
  return (
    <div className="space-y-8">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="relative pl-10">
          <span className="absolute left-0 top-1.5 h-4 w-4 animate-pulse rounded-full bg-slate-800" />

          <div className="animate-pulse rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="h-5 w-40 rounded bg-slate-800/60" />
            <div className="mt-2 h-3 w-28 rounded bg-slate-800/50" />
            <div className="mt-4 h-3 w-32 rounded bg-slate-800/40" />
            <div className="mt-4 space-y-2">
              <div className="h-3 w-full rounded bg-slate-800/40" />
              <div className="h-3 w-4/5 rounded bg-slate-800/40" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
