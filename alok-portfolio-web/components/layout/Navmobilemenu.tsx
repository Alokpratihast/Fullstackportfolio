"use client";

import { AnimatePresence, motion } from "framer-motion";

const links = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Experience", href: "#experience" },
  { title: "Contact", href: "#contact" },
];

interface NavMobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function NavMobileMenu({ open, onClose }: NavMobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="overflow-hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-xl lg:hidden"
        >
          <nav className="flex flex-col gap-1 px-6 py-4">
            {links.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-300 transition-colors duration-300 hover:bg-slate-900 hover:text-cyan-400"
              >
                {item.title}
              </a>
            ))}

            <a
              href="/resume/Alok_Pratihast_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="mt-2 rounded-lg bg-cyan-500 px-3 py-3 text-center text-base font-semibold text-slate-950 transition-colors duration-300 hover:bg-cyan-400"
            >
              Resume
            </a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
