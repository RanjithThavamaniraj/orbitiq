"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HudPanel } from "@/components/ui/HudPanel";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
  { label: "Active Members", value: "12,847", change: "+18.3%", id: "MTR-01" },
  { label: "Engagement Rate", value: "34.6%", change: "+2.1%", id: "MTR-02" },
  { label: "Avg. Session", value: "14m 22s", change: "+6.8%", id: "MTR-03" },
];

const growthPoints = [
  { x: 0, y: 72 }, { x: 80, y: 65 }, { x: 160, y: 68 }, { x: 240, y: 52 },
  { x: 320, y: 45 }, { x: 400, y: 38 }, { x: 480, y: 42 }, { x: 560, y: 28 },
  { x: 640, y: 22 }, { x: 720, y: 18 }, { x: 800, y: 12 }, { x: 880, y: 8 },
];

const linePath = growthPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
const areaPath = `${linePath} L 880 120 L 0 120 Z`;

const aiInsights = [
  "Weekend engagement peaks 2.3× higher in #general",
  "New member retention up 12% after onboarding flow",
  "3 channels driving 68% of total activity",
];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 sci-fi-bg opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          index="02"
          label="Dashboard"
          title="Intelligence at a glance"
          description="A calm command center for community operators — health, growth, and AI recommendations in one refined view."
        />

        <FadeIn delay={0.2}>
          <HudPanel label="COMMAND CENTER" id="DSH-MAIN-01" className="!p-0">
            <div className="flex items-center justify-between border-b border-white/10 px-7 py-4">
              <span className="font-mono text-[10px] text-white/40">orbitiq.app · overview</span>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold pulse-node" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-gold/80">Live</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row">
              <div className="border-b border-white/10 px-8 py-10 lg:w-[36%] lg:border-b-0 lg:border-r lg:py-12">
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-gold/70">Health Index</span>
                <div className="mt-3 flex items-end gap-2">
                  <span className="font-display text-[5rem] leading-none text-white">87</span>
                  <span className="mb-2 font-mono text-sm text-white/40">/100</span>
                </div>
                <p className="mt-3 flex items-center gap-1 text-sm text-gold">
                  +4.2% <ArrowUpRight className="h-3.5 w-3.5" />
                </p>
                <div className="mt-6 h-px bg-gradient-to-r from-gold/40 to-transparent" />
                <p className="mt-5 text-[13px] leading-relaxed text-white/50">
                  Composite score weighing sentiment, activity distribution, and member satisfaction.
                </p>
              </div>

              <div className="flex-1 px-8 py-8 lg:py-10">
                {metrics.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    className="mb-6 flex items-end justify-between gap-4 border-b border-white/8 pb-6 last:mb-0 last:border-0 last:pb-0"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.1 }}
                  >
                    <div>
                      <span className="font-mono text-[8px] text-white/30">{metric.id}</span>
                      <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-white/45">{metric.label}</p>
                      <p className="mt-1 font-display text-3xl text-white">{metric.value}</p>
                    </div>
                    <span className="flex items-center gap-0.5 text-sm text-gold">
                      {metric.change}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 px-8 py-10">
              <div className="mb-6 flex items-end justify-between">
                <div>
                  <p className="font-display text-xl text-white">Growth Trajectory</p>
                  <p className="mt-1 font-mono text-[9px] text-white/35">12-WEEK SIGNAL</p>
                </div>
                <span className="font-display text-2xl text-gold">+94%</span>
              </div>
              <svg viewBox="0 0 880 120" className="w-full" preserveAspectRatio="none">
                <motion.path d={areaPath} fill="url(#dashAreaGrad)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} />
                <motion.path d={linePath} fill="none" stroke="#D4AF37" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} />
                <defs>
                  <linearGradient id="dashAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="border-t border-white/10 px-8 py-7">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div>
                  <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-gold/70">AI Signal Feed</p>
                  <div className="space-y-3 font-mono text-[12px] text-white/55">
                    {aiInsights.map((insight, i) => (
                      <motion.p key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.1 }}>
                        <span className="text-gold/60">{`>`}</span> {insight}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </HudPanel>
        </FadeIn>
      </div>
    </section>
  );
}
