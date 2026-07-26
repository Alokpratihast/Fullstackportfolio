const links = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Experience", href: "#experience" },
  { title: "Contact", href: "#contact" },
];

export default function FooterNav() {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
        Navigate
      </p>

      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.title}>
            <a
              href={link.href}
              className="text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-400"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
