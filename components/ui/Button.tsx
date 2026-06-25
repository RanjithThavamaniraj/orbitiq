"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const variants = {
  primary:
    "bg-burgundy text-white hover:bg-burgundy-deep shadow-[0_2px_14px_rgba(109,7,26,0.18)]",
  secondary:
    "bg-transparent border border-burgundy/30 text-burgundy hover:bg-surface hover:border-burgundy",
  ghost: "text-label hover:text-burgundy-deep hover:bg-burgundy/[0.04]",
};

const sizes = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-sm",
  lg: "h-[3.25rem] px-7 text-sm font-medium tracking-wide",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "lg",
  className,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2.5 rounded-lg transition-all duration-300",
    variants[variant],
    sizes[size],
    className
  );

  const motionProps = {
    whileHover: { y: -1 },
    whileTap: { scale: 0.99 },
    transition: { duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] as const },
  };

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" className={classes} onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  );
}
