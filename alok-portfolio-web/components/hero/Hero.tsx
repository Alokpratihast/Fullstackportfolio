import HeroButtons from "./HeroButtons";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroSocial from "./HeroSocial";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0A0F1D] pt-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* faint structural grid — reinforces the "systems/API" identity */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#38BDF8 1px, transparent 1px), linear-gradient(90deg, #38BDF8 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* single glow, not four competing ones */}
        <div className="absolute -right-40 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

        {/* base gradient wash for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1D] via-[#0A0F1D] to-[#0B1120]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <HeroContent />

          <div className="mt-10">
            <HeroButtons />
          </div>

          <div className="mt-10">
            <HeroSocial />
          </div>
        </div>

        <HeroImage />
      </div>
    </section>
  );
}
