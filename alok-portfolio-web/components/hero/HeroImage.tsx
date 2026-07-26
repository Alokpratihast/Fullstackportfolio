import Image from "next/image";
import HeroRing from "./HeroRing";
import HeroStatusCard from "./HeroStatusCard";

export default function HeroImage() {
  return (
    <div className="relative mx-auto flex justify-center pb-10 pr-6 sm:pr-10">
      {/* Background glow */}
      <div className="absolute h-[340px] w-[340px] rounded-full bg-cyan-500/10 blur-3xl md:h-[380px] md:w-[380px]" />

      {/* Animated ring — feels like a live status indicator */}
      <HeroRing />

      {/* Profile image */}
      <div className="relative z-10 overflow-hidden rounded-full border-4 border-slate-800 bg-slate-900 shadow-2xl shadow-black/40">
        <Image
          src="/images/profile.png"
          alt="Alok Pratihast"
          width={360}
          height={360}
          priority
          className="h-[360px] w-[360px] object-cover md:h-[400px] md:w-[400px]"
        />
      </div>

      {/* Signature element */}
      <HeroStatusCard />
    </div>
  );
}
