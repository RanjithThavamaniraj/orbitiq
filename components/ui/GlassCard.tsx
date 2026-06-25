"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  elevated?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
  elevated = false,
}: CardProps) {
  return (
    <motion.div
      className={cn(
        elevated ? "card-elevated" : "card",
        "p-6",
        hover && "transition-all duration-300 hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-elevated)]",
        className
      )}
      whileHover={hover ? { y: -2 } : undefined}
      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
