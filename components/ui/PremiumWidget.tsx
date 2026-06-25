"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface PremiumWidgetProps {
  children: ReactNode;
  className?: string;
  label?: string;
  title?: string;
  glow?: boolean;
  delay?: number;
}

export function PremiumWidget({
  children,
  className,
  label,
  title,
  glow = false,
  delay = 0,
}: PremiumWidgetProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className={cn(
        "premium-widget relative overflow-hidden rounded-2xl p-4 lg:rounded-[1.25rem] lg:p-5",
        glow && "premium-widget-glow",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 premium-widget-shine" />
      {(label || title) && (
        <div className="relative mb-3">
          {label && (
            <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-gold/75">
              {label}
            </span>
          )}
          {title && (
            <h3 className="mt-1.5 font-display text-lg leading-snug text-white/95 lg:text-xl">
              {title}
            </h3>
          )}
        </div>
      )}
      <div className="relative">{children}</div>
    </motion.div>
  );
}
