"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: 0, angle: 0, radius: 120, size: 8, color: "#6D071A" },
  { id: 1, angle: 72, radius: 120, size: 6, color: "#4A000E" },
  { id: 2, angle: 144, radius: 120, size: 7, color: "#8B1A2E" },
  { id: 3, angle: 216, radius: 120, size: 6, color: "#D4AF37" },
  { id: 4, angle: 288, radius: 120, size: 9, color: "#6D071A" },
];

const innerNodes = [
  { id: 5, angle: 36, radius: 70, size: 5, color: "#FFFBF0" },
  { id: 6, angle: 108, radius: 70, size: 4, color: "#D4AF37" },
  { id: 7, angle: 180, radius: 70, size: 5, color: "#4A000E" },
  { id: 8, angle: 252, radius: 70, size: 4, color: "#8B7D6B" },
  { id: 9, angle: 324, radius: 70, size: 5, color: "#6D071A" },
];

function polarToCartesian(angle: number, radius: number) {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    x: 200 + radius * Math.cos(rad),
    y: 200 + radius * Math.sin(rad),
  };
}

export function OrbitVisualization() {
  const connections = nodes.flatMap((node, i) => {
    const next = nodes[(i + 1) % nodes.length];
    const a = polarToCartesian(node.angle, node.radius);
    const b = polarToCartesian(next.angle, next.radius);
    return `M ${a.x} ${a.y} L ${b.x} ${b.y}`;
  });

  const crossConnections = nodes.map((node, i) => {
    const inner = innerNodes[i];
    const a = polarToCartesian(node.angle, node.radius);
    const b = polarToCartesian(inner.angle, inner.radius);
    return `M ${a.x} ${a.y} L ${b.x} ${b.y}`;
  });

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-burgundy/[0.04] blur-[80px]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative"
      >
        <svg
          viewBox="0 0 400 400"
          className="h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] lg:h-[440px] lg:w-[440px]"
          aria-hidden
        >
          <defs>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6D071A" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#6D071A" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6D071A" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          <circle cx="200" cy="200" r="140" fill="url(#coreGlow)" />

          <g className="orbit-ring" style={{ transformOrigin: "200px 200px" }}>
            <circle
              cx="200"
              cy="200"
              r="120"
              fill="none"
              stroke="rgba(109,7,26,0.1)"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
            <circle
              cx="200"
              cy="200"
              r="70"
              fill="none"
              stroke="rgba(109,7,26,0.06)"
              strokeWidth="1"
              strokeDasharray="3 6"
            />
          </g>

          {connections.map((d, i) => (
            <motion.path
              key={`conn-${i}`}
              d={d}
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="1"
              className="flow-line"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.45 }}
              transition={{ duration: 1.2, delay: 0.5 + i * 0.1 }}
            />
          ))}

          {crossConnections.map((d, i) => (
            <motion.path
              key={`cross-${i}`}
              d={d}
              fill="none"
              stroke="rgba(109,7,26,0.08)"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.8 + i * 0.08 }}
            />
          ))}

          <motion.circle
            cx="200"
            cy="200"
            r="24"
            fill="#FFFBF0"
            stroke="rgba(109,7,26,0.3)"
            strokeWidth="1.5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ transformOrigin: "200px 200px" }}
          />
          <motion.circle
            cx="200"
            cy="200"
            r="8"
            fill="#6D071A"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />

          {nodes.map((node, i) => {
            const pos = polarToCartesian(node.angle, node.radius);
            return (
              <motion.g
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              >
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={node.size + 4}
                  fill={node.color}
                  opacity="0.12"
                />
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={node.size}
                  fill={node.color}
                  opacity="0.85"
                />
              </motion.g>
            );
          })}

          {innerNodes.map((node, i) => {
            const pos = polarToCartesian(node.angle, node.radius);
            return (
              <motion.circle
                key={`inner-${i}`}
                cx={pos.x}
                cy={pos.y}
                r={node.size}
                fill={node.color}
                opacity="0.7"
                stroke={node.color === "#FFFBF0" ? "rgba(109,7,26,0.2)" : "none"}
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.4, delay: 1 + i * 0.08 }}
              />
            );
          })}
        </svg>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <div className="card rounded-full px-4 py-2">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Live community signals
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
