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
    "bg-burgundy text-white hover:bg-burgundy-deep shadow-[0_2px_12px_rgba(109,7,26,0.2)]",
  secondary:
    "bg-transparent border border-burgundy text-burgundy hover:bg-[#FFFACD] hover:border-burgundy-deep hover:text-burgundy-deep",
  ghost: "text-muted hover:text-burgundy hover:bg-burgundy/[0.04]",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm font-medium",
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
    "inline-flex items-center justify-center gap-2 rounded-full transition-colors duration-300",
    variants[variant],
    sizes[size],
    className
  );

  const motionProps = {
    whileHover: { y: -1 },
    whileTap: { y: 0 },
    transition: { duration: 0.2 },
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
