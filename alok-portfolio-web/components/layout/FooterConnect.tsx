import SocialLinks from "@/components/social-links/SocialLinks";

export default function FooterConnect() {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
        Connect
      </p>

      <a
        href="mailto:your@email.com"
        className="mt-4 block text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-400"
      >
        your@email.com
      </a>

      <div className="mt-4">
        <SocialLinks />
      </div>
    </div>
  );
}
