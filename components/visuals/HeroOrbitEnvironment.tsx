"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroOrbitEnvironmentProps {
  className?: string;
}

export function HeroOrbitEnvironment({ className }: HeroOrbitEnvironmentProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-visible", className)}>
      <svg
        viewBox="0 0 1200 640"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="heroOrbitGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="40%" stopColor="#D4AF37" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.08" />
          </linearGradient>
          <radialGradient id="heroCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6D071A" stopOpacity="0.14" />
            <stop offset="55%" stopColor="#6D071A" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#FFFACD" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="600" cy="320" rx="200" ry="200" fill="url(#heroCoreGlow)" />

        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "600px 320px" }}
        >
          <ellipse
            cx="600"
            cy="320"
            rx="240"
            ry="88"
            stroke="rgba(212,175,55,0.18)"
            strokeWidth="1"
            fill="none"
            transform="rotate(-18 600 320)"
          />
          <ellipse
            cx="600"
            cy="320"
            rx="290"
            ry="110"
            stroke="rgba(109,7,26,0.1)"
            strokeWidth="1"
            fill="none"
            transform="rotate(32 600 320)"
          />
        </motion.g>

        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "600px 320px" }}
          opacity={0.7}
        >
          <ellipse
            cx="600"
            cy="320"
            rx="330"
            ry="125"
            stroke="rgba(212,175,55,0.1)"
            strokeWidth="0.75"
            strokeDasharray="3 9"
            fill="none"
            transform="rotate(8 600 320)"
          />
        </motion.g>

        <path
          d="M 80 310 C 220 285, 380 300, 520 315 C 560 318, 580 320, 600 320"
          stroke="url(#heroOrbitGold)"
          strokeWidth="1.25"
          fill="none"
          strokeDasharray="5 10"
          opacity="0.55"
        />
        <path
          d="M 600 320 C 760 322, 900 295, 1080 275"
          stroke="rgba(212,175,55,0.2)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 8"
          opacity="0.45"
        />

        <circle cx="120" cy="292" r="3" fill="rgba(109,7,26,0.2)" />
        <circle cx="200" cy="278" r="2" fill="rgba(212,175,55,0.25)" />
        <circle cx="1050" cy="268" r="2.5" fill="rgba(212,175,55,0.3)" />
      </svg>

      <motion.div
        className="absolute right-[8%] top-[32%] hidden h-10 w-10 rounded-full border border-gold/15 bg-gold/[0.04] backdrop-blur-[2px] lg:block"
        animate={{ y: [0, -5, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </div>
  );
}
