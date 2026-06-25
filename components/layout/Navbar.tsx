"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Orbit } from "lucide-react";

const navLinks = [
  { label: "Pipeline", href: "#pipeline" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/90 shadow-[0_1px_0_rgba(43,33,24,0.04)] backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-burgundy transition-colors group-hover:bg-burgundy-deep">
            <Orbit className="h-4 w-4 text-white" strokeWidth={2} />
          </div>
          <span className="font-display text-lg text-burgundy-deep">OrbitIQ</span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-text transition-colors duration-200 hover:text-burgundy"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button href="#architecture" variant="ghost" size="sm" className="hidden sm:inline-flex">
            Docs
          </Button>
          <Button href="#dashboard" variant="primary" size="sm">
            Get Started
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
