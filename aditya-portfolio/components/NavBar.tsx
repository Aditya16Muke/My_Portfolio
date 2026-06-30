"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-bg/90 backdrop-blur-sm border-b border-rule" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#"
            className="font-mono text-xs tracking-[0.25em] uppercase text-subtle hover:text-acid transition-colors duration-200"
          >
            AM<span className="text-acid">.</span>
          </a>

          {/* Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-mono text-[11px] tracking-widest uppercase text-subtle hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex font-mono text-[10px] tracking-widest uppercase px-4 py-2 border border-acid text-acid hover:bg-acid hover:text-bg transition-colors duration-200"
          >
            Hire me
          </a>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
