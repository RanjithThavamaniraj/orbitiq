"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface HudPanelProps {
  children: ReactNode;
  className?: string;
  label?: string;
  id?: string;
  hover?: boolean;
  variant?: "dark" | "light";
}

export function HudPanel({
  children,
  className,
  label,
  id,
  hover = true,
  variant = "dark",
}: HudPanelProps) {
  const isDark = variant === "dark";

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-lg p-6 lg:p-7",
        isDark ? "hud-panel-dark text-[#FFFBF0]" : "hud-panel-light text-text",
        hover && "transition-all duration-400 hover:shadow-[var(--hud-glow)]",
        className
      )}
      whileHover={hover ? { y: -3 } : undefined}
      transition={{ duration: 0.35 }}
    >
      <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-gold/50" />
      <span className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t border-gold/50" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l border-gold/50" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-gold/50" />

      <div className="pointer-events-none absolute inset-0 hud-grid opacity-40" />

      {(label || id) && (
        <div className="relative mb-4 flex items-center justify-between gap-3">
          {label && (
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-gold/80">
              {label}
            </span>
          )}
          {id && (
            <span className="font-mono text-[9px] text-white/40">{id}</span>
          )}
        </div>
      )}

      <div className="relative">{children}</div>
    </motion.div>
  );
}
