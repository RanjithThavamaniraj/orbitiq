"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

const pipelineSteps = [
  {
    name: "Discord",
    description: "Real-time community events, messages, and member activity",
    color: "#6D071A",
    x: 80,
    y: 200,
  },
  {
    name: "Airflow",
    description: "Orchestrated ingestion with retry logic and monitoring",
    color: "#4A000E",
    x: 280,
    y: 120,
  },
  {
    name: "Databricks",
    description: "Distributed processing and feature engineering at scale",
    color: "#8B1A2E",
    x: 520,
    y: 200,
  },
  {
    name: "Snowflake",
    description: "Unified data warehouse for analytics-ready datasets",
    color: "#8B7D6B",
    x: 720,
    y: 120,
  },
  {
    name: "OrbitIQ",
    description: "AI-powered insights delivered to your dashboard",
    color: "#D4AF37",
    x: 920,
    y: 200,
  },
];

const pathD =
  "M 80 200 C 160 200, 200 120, 280 120 C 360 120, 440 200, 520 200 C 600 200, 640 120, 720 120 C 800 120, 860 200, 920 200";

export function DataPipeline() {
  return (
    <section id="pipeline" className="relative overflow-hidden py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          index="01"
          label="Data Pipeline"
          title="From raw activity to intelligence"
          description="Every community signal flows through a battle-tested pipeline designed for reliability, scale, and sub-second insight delivery."
        />

        <FadeIn delay={0.15}>
          <div className="relative hidden lg:block">
            <svg
              viewBox="0 0 1000 320"
              className="w-full"
              aria-hidden
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="pipelineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6D071A" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#4A000E" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.6" />
                </linearGradient>
              </defs>

              <motion.path
                d={pathD}
                fill="none"
                stroke="url(#pipelineGrad)"
                strokeWidth="2"
                className="flow-line"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              />

              {pipelineSteps.map((step, i) => (
                <g key={step.name}>
                  <motion.circle
                    cx={step.x}
                    cy={step.y}
                    r="40"
                    fill={step.color}
                    opacity="0.06"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                  />
                  <motion.circle
                    cx={step.x}
                    cy={step.y}
                    r="6"
                    fill={step.color}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.15 }}
                  />
                  <motion.text
                    x={step.x}
                    y={step.y + 36}
                    textAnchor="middle"
                    className="fill-[#4A000E] text-[13px] font-semibold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                  >
                    {step.name}
                  </motion.text>
                  <motion.text
                    x={step.x}
                    y={step.y + 56}
                    textAnchor="middle"
                    className="fill-[#8B7D6B] text-[10px]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55 + i * 0.15 }}
                  >
                    {`Stage 0${i + 1}`}
                  </motion.text>
                </g>
              ))}
            </svg>

            <div className="mt-4 flex justify-between gap-4 px-4">
              {pipelineSteps.map((step) => (
                <p
                  key={step.name}
                  className="max-w-[160px] text-center text-xs leading-relaxed text-body"
                >
                  {step.description}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="relative lg:hidden">
          <div className="signal-spine left-6" />
          <div className="space-y-0 pl-14">
            {pipelineSteps.map((step, i) => (
              <FadeIn key={step.name} delay={i * 0.08}>
                <div className="relative py-8">
                  <div
                    className="absolute -left-[38px] top-10 h-3 w-3 rounded-full"
                    style={{ backgroundColor: step.color }}
                  />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    Stage 0{i + 1}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight text-foreground">
                    {step.name}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-body">
                    {step.description}
                  </p>
                  {i < pipelineSteps.length - 1 && (
                    <div className="mt-8 h-px w-full max-w-xs bg-gradient-to-r from-border to-transparent" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
