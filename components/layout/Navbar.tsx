"use client";

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
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/75 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg brand-mark">
            <Orbit className="h-4 w-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-sm font-semibold tracking-tight text-burgundy-deep">
            OrbitIQ
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-body transition-colors duration-200 hover:text-burgundy-deep"
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
