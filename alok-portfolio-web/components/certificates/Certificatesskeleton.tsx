export default function CertificatesSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-xl border border-slate-800 bg-slate-900/40 p-6"
        >
          <div className="h-10 w-10 rounded-lg bg-slate-800/60" />
          <div className="mt-4 h-4 w-3/4 rounded bg-slate-800/60" />
          <div className="mt-2 h-3 w-1/2 rounded bg-slate-800/50" />
          <div className="mt-3 h-3 w-1/3 rounded bg-slate-800/40" />
        </div>
      ))}
    </div>
  );
}
