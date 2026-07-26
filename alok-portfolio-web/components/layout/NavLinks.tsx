"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Experience", href: "#experience" },
  { title: "Contact", href: "#contact" },
];

export default function NavLinks() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {links.map((item) => {
        const isActive = activeId === item.href.slice(1);

        return (
          <a
            key={item.title}
            href={item.href}
            className={`relative text-sm font-medium transition-colors duration-300 ${
              isActive ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"
            }`}
          >
            {item.title}

            {isActive && (
              <motion.span
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 h-[2px] w-full bg-cyan-400"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </a>
        );
      })}
    </nav>
  );
}
