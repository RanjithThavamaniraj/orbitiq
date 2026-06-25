"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroOrbitEnvironmentProps {
  className?: string;
}

const signalParticles = [
  { cx: 140, cy: 300, r: 2.5, delay: 0, drift: 18 },
  { cx: 220, cy: 285, r: 2, delay: 0.4, drift: 14 },
  { cx: 310, cy: 310, r: 2.5, delay: 0.8, drift: 20 },
  { cx: 380, cy: 295, r: 2, delay: 1.2, drift: 12 },
  { cx: 460, cy: 318, r: 3, delay: 0.2, drift: 16 },
  { cx: 180, cy: 340, r: 1.5, delay: 1.6, drift: 10 },
  { cx: 350, cy: 268, r: 2, delay: 2, drift: 15 },
  { cx: 260, cy: 325, r: 2, delay: 1.1, drift: 22 },
  { cx: 420, cy: 338, r: 1.5, delay: 0.6, drift: 11 },
];

const orbitProcess = [
  { label: "Community signals" },
  { label: "OrbitIQ core" },
  { label: "Actionable intelligence" },
];

export function HeroOrbitProcessLabel() {
  return (
    <div className="hero-orbit-process space-y-0.5 text-center">
      {orbitProcess.map((step, i) => (
        <div key={step.label}>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-label">{step.label}</p>
          {i < orbitProcess.length - 1 && (
            <p className="my-1 font-mono text-[9px] text-burgundy/35">↓</p>
          )}
        </div>
      ))}
    </div>
  );
}

export function HeroOrbitEnvironment({ className }: HeroOrbitEnvironmentProps) {
  const coreX = 520;
  const coreY = 320;

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
            <stop offset="35%" stopColor="#D4AF37" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="heroSignalIn" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6D071A" stopOpacity="0.05" />
            <stop offset="60%" stopColor="#6D071A" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.35" />
          </linearGradient>
          <radialGradient id="heroCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6D071A" stopOpacity="0.22" />
            <stop offset="55%" stopColor="#6D071A" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FFFACD" stopOpacity="0" />
          </radialGradient>
        </defs>

        <motion.ellipse
          cx={coreX}
          cy={coreY}
          rx="280"
          ry="280"
          fill="url(#heroCoreGlow)"
          animate={{ opacity: [0.65, 1, 0.65], rx: [268, 292, 268], ry: [268, 292, 268] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${coreX}px ${coreY}px` }}
        >
          <ellipse
            cx={coreX}
            cy={coreY}
            rx="340"
            ry="118"
            stroke="rgba(212,175,55,0.22)"
            strokeWidth="1.25"
            fill="none"
            transform={`rotate(-18 ${coreX} ${coreY})`}
          />
          <ellipse
            cx={coreX}
            cy={coreY}
            rx="400"
            ry="142"
            stroke="rgba(109,7,26,0.12)"
            strokeWidth="1"
            fill="none"
            transform={`rotate(32 ${coreX} ${coreY})`}
          />
        </motion.g>

        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${coreX}px ${coreY}px` }}
          opacity={0.75}
        >
          <ellipse
            cx={coreX}
            cy={coreY}
            rx="460"
            ry="165"
            stroke="rgba(212,175,55,0.12)"
            strokeWidth="0.75"
            strokeDasharray="3 9"
            fill="none"
            transform={`rotate(8 ${coreX} ${coreY})`}
          />
        </motion.g>

        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 220, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${coreX}px ${coreY}px` }}
          opacity={0.45}
        >
          <ellipse
            cx={coreX}
            cy={coreY}
            rx="520"
            ry="190"
            stroke="rgba(109,7,26,0.08)"
            strokeWidth="0.75"
            strokeDasharray="2 12"
            fill="none"
            transform={`rotate(-42 ${coreX} ${coreY})`}
          />
        </motion.g>

        <motion.path
          d={`M 40 305 C 160 290, 280 298, 400 308 C 460 312, 500 316, ${coreX} ${coreY}`}
          stroke="url(#heroSignalIn)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="6 10"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
        <motion.path
          d={`M 60 335 C 180 328, 300 322, 420 318 C 480 316, ${coreX - 40} 318, ${coreX} ${coreY}`}
          stroke="url(#heroOrbitGold)"
          strokeWidth="1.25"
          fill="none"
          strokeDasharray="5 10"
          opacity="0.55"
          animate={{ strokeDashoffset: [0, -30] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <path
          d={`M ${coreX} ${coreY} C 640 318, 780 300, 920 282 C 1000 272, 1080 265, 1140 258`}
          stroke="rgba(212,175,55,0.22)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 8"
          opacity="0.5"
        />

        {signalParticles.map((p, i) => (
          <motion.circle
            key={i}
            r={p.r}
            fill={i % 2 === 0 ? "rgba(109,7,26,0.22)" : "rgba(212,175,55,0.32)"}
            animate={{
              opacity: [0.15, 0.6, 0.15],
              cx: [p.cx, p.cx + p.drift, p.cx],
              cy: [p.cy, p.cy - 6, p.cy + 2, p.cy],
            }}
            transition={{
              duration: 4.5 + p.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
