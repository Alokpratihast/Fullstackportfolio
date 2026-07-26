export default function SkillsSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-xl border border-slate-800 bg-slate-900/40 p-6"
        >
          <div className="mb-6 h-4 w-24 rounded bg-slate-800/60" />
          <div className="space-y-5">
            {Array.from({ length: 3 }).map((_, j) => (
              <div key={j}>
                <div className="mb-2 flex justify-between">
                  <div className="h-3 w-28 rounded bg-slate-800/60" />
                  <div className="h-3 w-8 rounded bg-slate-800/60" />
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-800/40" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
