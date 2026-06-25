"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroMegaTypeProps {
  variant?: "atmospheric";
}

export function HeroMegaType({ variant }: HeroMegaTypeProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 12]);

  return (
    <motion.span
      style={{ y }}
      className={cn(
        "hero-mega-type font-display block",
        variant === "atmospheric" && "hero-mega-type--atmospheric"
      )}
    >
      SIGNALS
    </motion.span>
  );
}
