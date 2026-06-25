"use client";

import { motion } from "framer-motion";

const communityNodes = [
  { label: "Messages", angle: 0 },
  { label: "Reactions", angle: 60 },
  { label: "Voice", angle: 120 },
  { label: "Events", angle: 180 },
  { label: "Members", angle: 240 },
  { label: "Channels", angle: 300 },
];

function polarToCartesian(angle: number, radius: number, cx = 200, cy = 200) {
  const rad = (angle - 90) * (Math.PI / 180);
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
}

export function OrbitVisualization() {
  const outerRadius = 130;
  const connections = communityNodes.map((node, i) => {
    const next = communityNodes[(i + 1) % communityNodes.length];
    const a = polarToCartesian(node.angle, outerRadius);
    const b = polarToCartesian(next.angle, outerRadius);
    return `M ${a.x} ${a.y} L ${b.x} ${b.y}`;
  });

  const spokes = communityNodes.map((node) => {
    const outer = polarToCartesian(node.angle, outerRadius);
    return `M 200 200 L ${outer.x} ${outer.y}`;
  });

  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden>
      <defs>
        <radialGradient id="warmCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6D071A" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#6D071A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="warmLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6D071A" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      <circle cx="200" cy="200" r="155" fill="url(#warmCore)" />

      <g className="orbit-ring" style={{ transformOrigin: "200px 200px" }}>
        <circle
          cx="200"
          cy="200"
          r={outerRadius}
          fill="none"
          stroke="rgba(109,7,26,0.08)"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          r="88"
          fill="none"
          stroke="rgba(109,7,26,0.05)"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
      </g>

      {spokes.map((d, i) => (
        <motion.line
          key={`spoke-${i}`}
          x1="200"
          y1="200"
          x2={polarToCartesian(communityNodes[i].angle, outerRadius).x}
          y2={polarToCartesian(communityNodes[i].angle, outerRadius).y}
          stroke="rgba(109,7,26,0.06)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 + i * 0.06 }}
        />
      ))}

      {connections.map((d, i) => (
        <motion.path
          key={`ring-${i}`}
          d={d}
          fill="none"
          stroke="url(#warmLine)"
          strokeWidth="1"
          className="flow-line"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.5 + i * 0.08 }}
        />
      ))}

      <circle cx="200" cy="200" r="28" fill="#FFFBF0" stroke="rgba(109,7,26,0.2)" strokeWidth="1.5" />
      <circle cx="200" cy="200" r="10" fill="#6D071A" />
      <text
        x="200"
        y="248"
        textAnchor="middle"
        className="fill-[#8B7D6B] text-[9px] uppercase tracking-widest"
        style={{ fontFamily: "var(--font-dm-mono)" }}
      >
        Intelligence Core
      </text>

      {communityNodes.map((node, i) => {
        const pos = polarToCartesian(node.angle, outerRadius);
        const isGold = i === 3;
        return (
          <motion.g
            key={node.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
          >
            <circle
              cx={pos.x}
              cy={pos.y}
              r="14"
              fill={isGold ? "#D4AF37" : "#6D071A"}
              opacity="0.12"
            />
            <circle
              cx={pos.x}
              cy={pos.y}
              r="5"
              fill={isGold ? "#D4AF37" : "#6D071A"}
            />
          </motion.g>
        );
      })}
    </svg>
  );
}
