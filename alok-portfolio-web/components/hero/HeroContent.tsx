import HeroBadge from "./HeroBadge";
import HeroTechStack from "./HeroTechStack";

export default function HeroContent() {
  return (
    <div>
      <HeroBadge />

      {/* Heading */}
      <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
        Hi, I&apos;m
        <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Alok Pratihast
        </span>
      </h1>

      {/* Role — structural label, not decoration */}
      <p className="mt-5 flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-cyan-400/80">
        <span className="h-px w-8 bg-cyan-400/40" />
        Full stack developer
      </p>

      {/* Description */}
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
        I design and build scalable, secure, high-performance web
        applications with{" "}
        <span className="text-slate-200">ASP.NET Core</span> and{" "}
        <span className="text-slate-200">Angular</span>. Passionate about
        clean architecture, REST APIs, and exceptional user experiences.
      </p>

      <div className="mt-8">
        <HeroTechStack />
      </div>
    </div>
  );
}
