"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

const CX = 250;
const CY = 250;
const NODE_R = 112;
const TITLE_R = 136;
const ROLE_R = 154;
const INNER_R = 72;

const technologies = [
  { name: "Airflow", role: "Orchestration", angle: 0, tangential: 0 },
  { name: "Databricks", role: "Processing", angle: 60, tangential: 16 },
  { name: "Snowflake", role: "Warehouse", angle: 120, tangential: 14 },
  { name: "Next.js", role: "Framework", angle: 180, tangential: 0 },
  { name: "TypeScript", role: "Language", angle: 240, tangential: -14 },
  { name: "Vercel", role: "Deployment", angle: 300, tangential: -16 },
] as const;

function polarToCartesian(angle: number, radius: number, cx = CX, cy = CY) {
  const rad = (angle - 90) * (Math.PI / 180);
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
}

function getPerpendicular(angle: number) {
  const rad = (angle - 90) * (Math.PI / 180);
  return { px: -Math.sin(rad), py: Math.cos(rad) };
}

function getLabelPosition(angle: number, radius: number, tangential: number) {
  const base = polarToCartesian(angle, radius);
  const perp = getPerpendicular(angle);
  return {
    x: base.x + perp.px * tangential,
    y: base.y + perp.py * tangential,
  };
}

export function TechStack() {
  return (
    <section className="section-pad relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 sci-fi-bg" />

      <div className="page-container relative">
        <SectionHeader
          index="06"
          label="Technology"
          title="Built on proven infrastructure"
          description="Integrates with the tools your data team already trusts — without forcing you to rebuild what works."
        />

        <FadeIn delay={0.15}>
          <div className="mx-auto w-full max-w-md sm:max-w-lg">
            <svg
              viewBox="0 0 500 500"
              className="mx-auto h-auto w-full"
              role="img"
              aria-label="OrbitIQ technology ecosystem: Airflow, Databricks, Snowflake, Next.js, TypeScript, and Vercel"
            >
              <circle
                cx={CX}
                cy={CY}
                r={NODE_R}
                fill="none"
                stroke="rgba(109,7,26,0.06)"
                strokeWidth="1"
                strokeDasharray="3 6"
              />
              <circle
                cx={CX}
                cy={CY}
                r={INNER_R}
                fill="none"
                stroke="rgba(212,175,55,0.12)"
                strokeWidth="1"
              />

              {technologies.map((tech, i) => {
                const node = getLabelPosition(tech.angle, NODE_R, tech.tangential);
                const inner = polarToCartesian(tech.angle, INNER_R);
                const title = getLabelPosition(tech.angle, TITLE_R, tech.tangential);
                const role = getLabelPosition(tech.angle, ROLE_R, tech.tangential);

                return (
                  <g key={tech.name}>
                    <motion.line
                      x1={CX}
                      y1={CY}
                      x2={node.x}
                      y2={node.y}
                      stroke="rgba(212,175,55,0.22)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                    />
                    <motion.line
                      x1={inner.x}
                      y1={inner.y}
                      x2={node.x}
                      y2={node.y}
                      stroke="rgba(109,7,26,0.12)"
                      strokeWidth="1"
                      strokeDasharray="2 4"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                    />

                    <text
                      x={title.x}
                      y={title.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="#6D071A"
                      fontSize="14"
                      fontFamily="var(--font-instrument-serif), Georgia, serif"
                    >
                      {tech.name}
                    </text>
                    <text
                      x={role.x}
                      y={role.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="rgba(107,93,79,0.72)"
                      fontSize="8"
                      fontFamily="var(--font-dm-mono), monospace"
                      letterSpacing="0.22em"
                    >
                      {tech.role.toUpperCase()}
                    </text>

                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="5.5"
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

              <circle cx={CX} cy={CY} r="20" fill="#4A000E" stroke="#D4AF37" strokeWidth="1.5" />
              <text
                x={CX}
                y={CY + 3}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#D4AF37"
                fontSize="7"
                fontFamily="var(--font-dm-mono), monospace"
                letterSpacing="0.12em"
              >
                ORBITIQ
              </text>
            </svg>

            <p className="mt-6 text-center font-mono text-[10px] tracking-[0.25em] text-muted">
              6 INTEGRATIONS · UNIFIED DATA FABRIC
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
