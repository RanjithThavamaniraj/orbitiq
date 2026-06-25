"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HudPanel } from "@/components/ui/HudPanel";
import { motion } from "framer-motion";

const pipelineSteps = [
  {
    name: "Discord",
    description: "Real-time community events, messages, and member activity",
    x: 80,
    y: 200,
    tag: "IN-01",
  },
  {
    name: "Airflow",
    description: "Orchestrated ingestion with retry logic and monitoring",
    x: 280,
    y: 120,
    tag: "ORC-02",
  },
  {
    name: "Databricks",
    description: "Distributed processing and feature engineering at scale",
    x: 520,
    y: 200,
    tag: "PRC-03",
  },
  {
    name: "Snowflake",
    description: "Unified data warehouse for analytics-ready datasets",
    x: 720,
    y: 120,
    tag: "STG-04",
  },
  {
    name: "OrbitIQ",
    description: "AI-powered insights delivered to your dashboard",
    x: 920,
    y: 200,
    tag: "OUT-05",
    accent: true,
  },
];

const pathD =
  "M 80 200 C 160 200, 200 120, 280 120 C 360 120, 440 200, 520 200 C 600 200, 640 120, 720 120 C 800 120, 860 200, 920 200";

export function DataPipeline() {
  return (
    <section id="pipeline" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 sci-fi-bg opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          index="01"
          label="Data Pipeline"
          title="From raw activity to intelligence"
          description="Every community signal flows through a reliable pipeline — designed for scale, clarity, and sub-second insight delivery."
        />

        <FadeIn delay={0.15}>
          <div className="relative hidden lg:block">
            <HudPanel label="PIPELINE MAP" id="SYS-PIPE-01" className="!p-8 lg:!p-10">
              <svg viewBox="0 0 1000 340" className="w-full" aria-hidden preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="pipelineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                <motion.path
                  d={pathD}
                  fill="none"
                  stroke="url(#pipelineGrad)"
                  strokeWidth="2"
                  className="flow-line"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.7 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                />

                {pipelineSteps.map((step, i) => (
                  <g key={step.name}>
                    <motion.rect
                      x={step.x - 6}
                      y={step.y - 6}
                      width="12"
                      height="12"
                      fill="none"
                      stroke={step.accent ? "#D4AF37" : "#FFFBF0"}
                      strokeWidth="1"
                      transform={`rotate(45 ${step.x} ${step.y})`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.12 }}
                    />
                    <motion.circle
                      cx={step.x}
                      cy={step.y}
                      r="3"
                      fill={step.accent ? "#D4AF37" : "#FFFBF0"}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.45 + i * 0.12 }}
                    />
                    <text
                      x={step.x}
                      y={step.y - 20}
                      textAnchor="middle"
                      fill="#FFFBF0"
                      fontSize="12"
                      fontFamily="var(--font-instrument-serif)"
                    >
                      {step.name}
                    </text>
                    <text
                      x={step.x}
                      y={step.y + 28}
                      textAnchor="middle"
                      fill="rgba(255,251,240,0.4)"
                      fontSize="8"
                      fontFamily="var(--font-dm-mono)"
                    >
                      {step.tag}
                    </text>
                  </g>
                ))}
              </svg>

              <div className="mt-6 flex justify-between gap-3">
                {pipelineSteps.map((step) => (
                  <p key={step.name} className="max-w-[150px] text-center text-[11px] leading-relaxed text-white/45">
                    {step.description}
                  </p>
                ))}
              </div>
            </HudPanel>
          </div>
        </FadeIn>

        <div className="flex gap-4 overflow-x-auto pb-4 lg:hidden snap-x snap-mandatory">
          {pipelineSteps.map((step, i) => (
            <FadeIn key={step.name} delay={i * 0.08} className="min-w-[260px] snap-center">
              <HudPanel label={step.tag} id={`STG-0${i + 1}`} className="h-full">
                <h3 className="font-display text-lg text-white">{step.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/55">{step.description}</p>
              </HudPanel>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
