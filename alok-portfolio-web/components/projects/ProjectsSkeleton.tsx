export default function ProjectsSkeleton() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40"
        >
          <div className="h-9 border-b border-slate-800 bg-slate-950/60" />
          <div className="h-52 bg-slate-800/40" />
          <div className="space-y-3 p-6">
            <div className="h-5 w-2/3 rounded bg-slate-800/60" />
            <div className="h-3 w-full rounded bg-slate-800/40" />
            <div className="h-3 w-4/5 rounded bg-slate-800/40" />
            <div className="mt-4 flex gap-1.5">
              <div className="h-5 w-16 rounded bg-slate-800/50" />
              <div className="h-5 w-14 rounded bg-slate-800/50" />
              <div className="h-5 w-20 rounded bg-slate-800/50" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
