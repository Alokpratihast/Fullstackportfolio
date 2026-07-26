const techStack = [
  "ASP.NET Core",
  "Angular",
  "Next.js",
  "React",
  "SQL Server",
  "Azure",
];

export default function HeroTechStack() {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-2 rounded-lg border border-slate-800 bg-slate-900/40 px-4 py-3 font-mono text-sm">
      <span className="text-slate-600">const stack =</span>
      <span className="text-slate-500">[</span>
      {techStack.map((tech, i) => (
        <span key={tech} className="text-cyan-300">
          &quot;{tech}&quot;
          {i < techStack.length - 1 && <span className="text-slate-500">,</span>}
        </span>
      ))}
      <span className="text-slate-500">]</span>
    </div>
  );
}