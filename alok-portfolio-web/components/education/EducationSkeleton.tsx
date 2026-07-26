export default function EducationSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-xl border border-slate-800 bg-slate-900/40 p-6"
        >
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-lg bg-slate-800/60" />
            <div className="space-y-2">
              <div className="h-4 w-40 rounded bg-slate-800/60" />
              <div className="h-3 w-28 rounded bg-slate-800/50" />
            </div>
          </div>
          <div className="mt-4 h-3 w-48 rounded bg-slate-800/40" />
          <div className="mt-4 space-y-2">
            <div className="h-3 w-full rounded bg-slate-800/40" />
            <div className="h-3 w-3/4 rounded bg-slate-800/40" />
          </div>
        </div>
      ))}
    </div>
  );
}
