"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroMegaTypeProps {
  variant?: "bridge";
}

export function HeroMegaType({ variant }: HeroMegaTypeProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 6]);

  return (
    <motion.span
      style={{ y }}
      className={cn(
        "hero-mega-type font-display",
        variant === "bridge" && "hero-mega-type--bridge"
      )}
    >
      ORBITIQ
    </motion.span>
  );
}
