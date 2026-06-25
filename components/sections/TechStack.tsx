"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

const technologies = [
  { name: "Airflow", role: "Orchestration", angle: 0 },
  { name: "Databricks", role: "Processing", angle: 60 },
  { name: "Snowflake", role: "Warehouse", angle: 120 },
  { name: "Next.js", role: "Framework", angle: 180 },
  { name: "TypeScript", role: "Language", angle: 240 },
  { name: "Vercel", role: "Deployment", angle: 300 },
];

function polarToCartesian(angle: number, radius: number, cx = 200, cy = 200) {
  const rad = (angle - 90) * (Math.PI / 180);
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
}

export function TechStack() {
  return (
    <section className="section-pad relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 sci-fi-bg" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          index="06"
          label="Technology"
          title="Built on proven infrastructure"
          description="Integrates with the tools your data team already trusts — without forcing you to rebuild what works."
        />

        <FadeIn delay={0.15}>
          <div className="relative mx-auto max-w-lg py-8">
            <svg viewBox="0 0 400 400" className="mx-auto h-auto w-full max-w-md" aria-hidden>
              <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(109,7,26,0.06)" strokeWidth="1" strokeDasharray="3 6" />
              <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(212,175,55,0.12)" strokeWidth="1" />

              {technologies.map((tech, i) => {
                const pos = polarToCartesian(tech.angle, 150);
                const inner = polarToCartesian(tech.angle, 100);
                return (
                  <g key={tech.name}>
                    <motion.line
                      x1="200"
                      y1="200"
                      x2={pos.x}
                      y2={pos.y}
                      stroke="rgba(212,175,55,0.25)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                    />
                    <motion.line
                      x1={inner.x}
                      y1={inner.y}
                      x2={pos.x}
                      y2={pos.y}
                      stroke="rgba(109,7,26,0.15)"
                      strokeWidth="1"
                      strokeDasharray="2 4"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                    />
                    <motion.circle
                      cx={pos.x}
                      cy={pos.y}
                      r="6"
                      fill="#4A000E"
                      stroke="#D4AF37"
                      strokeWidth="1.5"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                    />
                  </g>
                );
              })}

              <circle cx="200" cy="200" r="22" fill="#4A000E" stroke="#D4AF37" strokeWidth="1.5" />
              <text x="200" y="204" textAnchor="middle" fill="#D4AF37" fontSize="7" fontFamily="monospace">
                ORBITIQ
              </text>
            </svg>

            {technologies.map((tech) => {
              const pos = polarToCartesian(tech.angle, 178);
              return (
                <div
                  key={tech.name}
                  className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 text-center"
                  style={{ left: `${(pos.x / 400) * 100}%`, top: `${(pos.y / 400) * 100}%` }}
                >
                  <p className="font-display text-sm text-burgundy-deep">{tech.name}</p>
                  <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-label">{tech.role}</p>
                </div>
              );
            })}

            <p className="mt-8 text-center font-mono text-[10px] tracking-[0.25em] text-burgundy/35">
              6 INTEGRATIONS · UNIFIED DATA FABRIC
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
