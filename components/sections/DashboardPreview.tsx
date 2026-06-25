"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight, Brain } from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
  { label: "Active Members", value: "12,847", change: "+18.3%" },
  { label: "Engagement Rate", value: "34.6%", change: "+2.1%" },
  { label: "Avg. Session", value: "14m 22s", change: "+6.8%" },
];

const growthPoints = [
  { x: 0, y: 72 },
  { x: 80, y: 65 },
  { x: 160, y: 68 },
  { x: 240, y: 52 },
  { x: 320, y: 45 },
  { x: 400, y: 38 },
  { x: 480, y: 42 },
  { x: 560, y: 28 },
  { x: 640, y: 22 },
  { x: 720, y: 18 },
  { x: 800, y: 12 },
  { x: 880, y: 8 },
];

const linePath = growthPoints
  .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
  .join(" ");

const areaPath = `${linePath} L 880 100 L 0 100 Z`;

const aiInsights = [
  "Weekend engagement peaks 2.3× higher in #general",
  "New member retention up 12% after onboarding flow",
  "3 channels driving 68% of total activity",
];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-24 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-transparent to-ivory/30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          index="02"
          label="Dashboard"
          title="Intelligence at a glance"
          description="A unified command center for community operators. Monitor health, track growth, and act on AI-generated recommendations in real time."
        />

        <FadeIn delay={0.2}>
          <div className="card-elevated overflow-hidden rounded-2xl">
            <div className="flex items-center justify-between border-b border-border bg-ivory px-6 py-3">
              <span className="font-mono text-[11px] text-muted">
                orbitiq.app / dashboard / overview
              </span>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-burgundy" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Live
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-[280px_1fr]">
              <div className="flex flex-col items-center justify-center border-b border-border bg-ivory p-10 lg:border-b-0 lg:border-r">
                <svg viewBox="0 0 200 200" className="h-48 w-48">
                  <circle
                    cx="100"
                    cy="100"
                    r="85"
                    fill="none"
                    stroke="rgba(109,7,26,0.08)"
                    strokeWidth="8"
                  />
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="85"
                    fill="none"
                    stroke="#6D071A"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="534"
                    strokeDashoffset={534 - 534 * 0.87}
                    transform="rotate(-90 100 100)"
                    initial={{ strokeDashoffset: 534 }}
                    whileInView={{ strokeDashoffset: 534 - 534 * 0.87 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                  />
                  <text
                    x="100"
                    y="92"
                    textAnchor="middle"
                    className="fill-[#4A000E] text-4xl font-semibold"
                  >
                    87
                  </text>
                  <text
                    x="100"
                    y="118"
                    textAnchor="middle"
                    className="fill-[#8B7D6B] text-[11px]"
                  >
                    / 100
                  </text>
                </svg>
                <p className="mt-4 text-center text-sm font-medium text-foreground">
                  Community Health
                </p>
                <p className="mt-1 flex items-center gap-1 text-xs text-gold">
                  +4.2% <ArrowUpRight className="h-3 w-3" />
                </p>
              </div>

              <div className="flex flex-col bg-white">
                <div className="flex flex-col divide-y divide-border sm:flex-row sm:divide-x sm:divide-y-0">
                  {metrics.map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      className="flex-1 px-8 py-8"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                        {metric.label}
                      </p>
                      <div className="mt-2 flex items-baseline justify-between gap-4">
                        <span className="text-3xl font-semibold tracking-tight text-foreground">
                          {metric.value}
                        </span>
                        <span className="flex items-center gap-0.5 text-xs text-gold">
                          {metric.change}
                          <ArrowUpRight className="h-3 w-3" />
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-border p-8">
                  <div className="mb-6 flex items-end justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">Growth Trends</p>
                      <p className="mt-0.5 font-mono text-[10px] text-muted">
                        12-week trajectory
                      </p>
                    </div>
                    <span className="text-2xl font-semibold text-gold">+94%</span>
                  </div>
                  <svg viewBox="0 0 880 100" className="w-full" preserveAspectRatio="none">
                    <motion.path
                      d={areaPath}
                      fill="url(#areaGrad)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                    <motion.path
                      d={linePath}
                      fill="none"
                      stroke="#6D071A"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                    />
                    <defs>
                      <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6D071A" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#6D071A" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            <div className="border-t border-border bg-ivory px-6 py-5">
              <div className="flex items-start gap-4">
                <Brain className="mt-0.5 h-4 w-4 shrink-0 text-burgundy" />
                <div className="min-w-0 flex-1">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted">
                    AI Insights
                  </p>
                  <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                    {aiInsights.map((insight, i) => (
                      <motion.p
                        key={i}
                        className="text-sm text-body"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.15 }}
                      >
                        <span className="mr-2 text-burgundy">›</span>
                        {insight}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
