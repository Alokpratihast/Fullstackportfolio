import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  { href: "https://github.com/Alokpratihast", icon: FaGithub, label: "GitHub" },
  { href: "https://linkedin.com", icon: FaLinkedin, label: "LinkedIn" },
];

export default function HeroSocial() {
  return (
    <div className="flex items-center gap-5">
      <span className="font-mono text-xs uppercase tracking-widest text-slate-600">
        Connect
      </span>
      <span className="h-px w-8 bg-slate-800" />

      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-slate-500 transition-colors duration-300 hover:text-cyan-400"
        >
          <Icon size={20} />
        </a>
      ))}

      <a
        href="mailto:your@email.com"
        aria-label="Email"
        className="text-slate-500 transition-colors duration-300 hover:text-cyan-400"
      >
        <Mail size={20} />
      </a>
    </div>
  );
}
