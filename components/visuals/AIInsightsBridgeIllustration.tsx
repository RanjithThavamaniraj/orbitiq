"use client";

import { motion } from "framer-motion";

const stages = [
  { label: "Community Signals", y: 72 },
  { label: "Processing", y: 168 },
  { label: "Intelligence", y: 264 },
  { label: "Recommendations", y: 348 },
];

export function AIInsightsBridgeIllustration() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-xl lg:max-w-none lg:aspect-auto lg:h-full lg:min-h-[340px]">
      <svg
        viewBox="0 0 560 420"
        className="h-full w-full"
        role="img"
        aria-label="OrbitIQ intelligence flow from community signals through processing and intelligence to recommendations"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="aiCliffGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4a000e" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#2b2118" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="aiPenBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6d071a" />
            <stop offset="100%" stopColor="#4a000e" />
          </linearGradient>
          <linearGradient id="aiFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6d071a" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#d4af37" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0.9" />
          </linearGradient>
          <marker id="aiArrowHead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M 0 0 L 6 3 L 0 6 Z" fill="rgba(109,7,26,0.25)" />
          </marker>
        </defs>

        <path
          d="M 0 420 L 0 290 C 40 270, 90 255, 130 248 L 130 420 Z"
          fill="url(#aiCliffGrad)"
          opacity="0.9"
        />
        <path
          d="M 560 420 L 560 300 C 500 275, 440 262, 390 255 L 390 420 Z"
          fill="url(#aiCliffGrad)"
          opacity="0.9"
        />

        <ellipse cx="280" cy="340" rx="120" ry="18" fill="rgba(43,33,24,0.08)" />

        <motion.path
          d="M 280 95 L 280 155 M 280 195 L 280 235 M 280 275 L 280 315"
          fill="none"
          stroke="rgba(109,7,26,0.2)"
          strokeWidth="1"
          strokeDasharray="3 5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        />

        <motion.path
          d="M 132 268 Q 200 250, 280 235 Q 360 220, 388 258"
          fill="none"
          stroke="url(#aiFlowGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut", delay: 0.3 }}
        />

        {[
          [118, 88], [142, 102], [108, 118], [155, 95], [130, 130],
        ].map(([x, y], i) => (
          <motion.circle
            key={`sig-${i}`}
            cx={x}
            cy={y}
            r="3"
            fill="#6d071a"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.4, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.06 }}
            animate={{ opacity: [0.25, 0.55, 0.25] }}
          />
        ))}

        {[
          { x: 195, y: 255, delay: 0.7 },
          { x: 280, y: 235, delay: 0.85 },
          { x: 340, y: 228, delay: 1.0 },
        ].map((node, i) => (
          <motion.g key={`proc-${i}`}>
            <motion.rect
              x={node.x - 7}
              y={node.y - 7}
              width="14"
              height="14"
              fill="none"
              stroke="#d4af37"
              strokeWidth="1"
              transform={`rotate(45 ${node.x} ${node.y})`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: node.delay }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="2.5"
              fill="#d4af37"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: node.delay + 0.05 }}
            />
          </motion.g>
        ))}

        <motion.g
          initial={{ opacity: 0, rotate: -8, x: 20, y: -20 }}
          whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "420px 80px" }}
        >
          <rect
            x="318"
            y="18"
            width="28"
            height="200"
            rx="4"
            fill="url(#aiPenBody)"
            transform="rotate(32 332 118)"
          />
          <rect
            x="328"
            y="198"
            width="20"
            height="18"
            rx="2"
            fill="#d4af37"
            opacity="0.85"
            transform="rotate(32 338 207)"
          />
          <path d="M 388 252 L 398 262 L 382 264 Z" fill="#d4af37" />
          <ellipse
            cx="355"
            cy="95"
            rx="22"
            ry="8"
            fill="none"
            stroke="rgba(212,175,55,0.5)"
            strokeWidth="1.5"
            transform="rotate(32 355 95)"
          />
          <circle
            cx="355"
            cy="118"
            r="18"
            fill="none"
            stroke="rgba(212,175,55,0.25)"
            strokeWidth="1"
            strokeDasharray="4 6"
            transform="rotate(32 355 118)"
          />
        </motion.g>

        {[
          { x: 410, y: 248, delay: 1.2 },
          { x: 430, y: 238, delay: 1.35 },
          { x: 420, y: 262, delay: 1.5 },
        ].map((out, i) => (
          <motion.g
            key={`rec-${i}`}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: out.delay }}
          >
            <rect
              x={out.x - 8}
              y={out.y - 10}
              width="16"
              height="20"
              rx="2"
              fill="rgba(212,175,55,0.12)"
              stroke="rgba(212,175,55,0.35)"
              strokeWidth="1"
            />
            <path
              d={`M ${out.x - 3} ${out.y} L ${out.x - 1} ${out.y + 2} L ${out.x + 4} ${out.y - 3}`}
              fill="none"
              stroke="#d4af37"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </motion.g>
        ))}

        {stages.map((stage, i) => (
          <motion.text
            key={stage.label}
            x="448"
            y={stage.y}
            textAnchor="start"
            fill="rgba(43,33,24,0.55)"
            fontSize="8"
            fontFamily="var(--font-dm-mono), monospace"
            letterSpacing="0.14em"
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.12 }}
          >
            {stage.label.toUpperCase()}
          </motion.text>
        ))}

        {[108, 204, 300].map((y, i) => (
          <motion.path
            key={`arrow-${i}`}
            d={`M 438 ${y} L 438 ${y + 28}`}
            fill="none"
            stroke="rgba(109,7,26,0.2)"
            strokeWidth="1"
            markerEnd="url(#aiArrowHead)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.1 }}
          />
        ))}
      </svg>
    </div>
  );
}
