"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PremiumWidget } from "@/components/ui/PremiumWidget";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const kpis = [
  { label: "Active Members", value: "12.8K", change: "+18.3%" },
  { label: "Engagement", value: "34.6%", change: "+2.1%" },
  { label: "Health Score", value: "87", change: "+4.2%" },
];

const barHeights = [42, 68, 55, 82, 64, 90, 72, 88];

const growthPoints = [
  { x: 0, y: 72 }, { x: 80, y: 65 }, { x: 160, y: 68 }, { x: 240, y: 52 },
  { x: 320, y: 45 }, { x: 400, y: 38 }, { x: 480, y: 42 }, { x: 560, y: 28 },
  { x: 640, y: 22 }, { x: 720, y: 18 }, { x: 800, y: 12 }, { x: 880, y: 8 },
];

const linePath = growthPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
const areaPath = `${linePath} L 880 120 L 0 120 Z`;

const aiInsights = [
  "Weekend engagement peaks 2.3× in #general",
  "Retention up 12% after onboarding flow",
  "3 channels drive 68% of activity",
];

const feedItems = [
  { label: "Message Velocity", value: "4.2K/hr", trend: "+8%" },
  { label: "Voice Sessions", value: "186", trend: "+31%" },
  { label: "New Members", value: "247", trend: "+14%" },
];

function OrbitRadar() {
  return (
    <svg viewBox="0 0 200 200" className="mx-auto h-full w-full max-h-[180px]" aria-hidden>
      <defs>
        <radialGradient id="radarCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#6D071A" stopOpacity="0.6" />
        </radialGradient>
      </defs>
      {[70, 55, 40].map((r) => (
        <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="rgba(212,175,55,0.12)" strokeWidth="1" />
      ))}
      <ellipse cx="100" cy="100" rx="75" ry="28" fill="none" stroke="rgba(212,175,55,0.2)" strokeWidth="1" transform="rotate(-25 100 100)" />
      <ellipse cx="100" cy="100" rx="75" ry="28" fill="none" stroke="rgba(212,175,55,0.15)" strokeWidth="1" transform="rotate(35 100 100)" />
      <circle cx="100" cy="100" r="14" fill="url(#radarCore)" />
      <circle cx="100" cy="100" r="22" fill="none" stroke="rgba(212,175,55,0.35)" strokeWidth="1" />
      {[
        [100, 30], [158, 72], [142, 148], [58, 148], [42, 72],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#D4AF37" opacity={0.7} />
      ))}
    </svg>
  );
}

function HealthGauge() {
  const circumference = 2 * Math.PI * 54;
  const progress = 0.87;

  return (
    <div className="relative mx-auto flex h-[160px] w-[160px] items-center justify-center">
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
        <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(212,175,55,0.12)" strokeWidth="8" />
        <motion.circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="url(#gaugeGold)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference * (1 - progress) }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="gaugeGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6D071A" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-center">
        <p className="font-display text-3xl text-gold">87</p>
        <p className="font-mono text-[8px] uppercase tracking-widest text-white/45">Health</p>
      </div>
    </div>
  );
}

export function DashboardPreview() {
  return (
    <section id="dashboard" className="premium-section section-screen relative">
      <div className="page-container section-screen__content relative">
        <SectionHeader
          index="02"
          label="Dashboard"
          title="Intelligence at a glance"
          description="A calm command center for community operators — health, growth, and AI recommendations in one refined view."
          tone="dark"
        />

        <FadeIn delay={0.1}>
          <div className="mb-3 flex items-center justify-between rounded-xl border border-gold/10 bg-black/20 px-4 py-2.5 backdrop-blur-sm">
            <span className="font-mono text-[10px] text-white/50">orbitiq.app · command center</span>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold pulse-node" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-gold/80">Live</span>
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-12 lg:gap-4">
            <PremiumWidget label="Signal Orbit" className="lg:col-span-4" glow delay={0.05}>
              <OrbitRadar />
              <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-widest text-white/40">
                Real-time community pulse
              </p>
            </PremiumWidget>

            <PremiumWidget label="Key Metrics" className="lg:col-span-8" delay={0.1}>
              <div className="grid gap-3 sm:grid-cols-3">
                {kpis.map((kpi) => (
                  <div key={kpi.label} className="rounded-xl border border-gold/8 bg-black/20 p-4">
                    <p className="font-mono text-[9px] uppercase tracking-widest text-white/45">{kpi.label}</p>
                    <p className="mt-2 font-display text-3xl text-gold lg:text-4xl">{kpi.value}</p>
                    <p className="mt-1 flex items-center gap-0.5 text-sm text-gold/90">
                      {kpi.change}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </p>
                  </div>
                ))}
              </div>
            </PremiumWidget>

            <PremiumWidget label="Engagement" title="Weekly Activity" className="lg:col-span-4" delay={0.15}>
              <div className="flex h-32 items-end justify-between gap-2 px-1">
                {barHeights.map((h, i) => (
                  <motion.div
                    key={i}
                    className="w-full rounded-full bg-gradient-to-t from-[#6D071A] to-gold"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
                  />
                ))}
              </div>
            </PremiumWidget>

            <PremiumWidget label="Community Health" className="lg:col-span-4" glow delay={0.2}>
              <HealthGauge />
            </PremiumWidget>

            <PremiumWidget label="Growth" title="12-Week Trajectory" className="lg:col-span-4" delay={0.25}>
              <div className="flex items-end justify-between">
                <span className="font-display text-2xl text-gold">+94%</span>
              </div>
              <svg viewBox="0 0 880 120" className="mt-3 w-full" preserveAspectRatio="none">
                <motion.path d={areaPath} fill="url(#dashAreaGrad)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} />
                <motion.path d={linePath} fill="none" stroke="#D4AF37" strokeWidth="2.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} />
                <defs>
                  <linearGradient id="dashAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </PremiumWidget>

            <PremiumWidget label="Activity Feed" className="lg:col-span-6" delay={0.3}>
              <div className="space-y-3">
                {feedItems.map((item) => (
                  <div key={item.label} className="flex items-center justify-between border-b border-white/6 pb-3 last:border-0 last:pb-0">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">{item.label}</p>
                      <p className="mt-0.5 font-display text-xl text-white/90">{item.value}</p>
                    </div>
                    <span className="text-sm text-gold">{item.trend}</span>
                  </div>
                ))}
              </div>
            </PremiumWidget>

            <PremiumWidget label="AI Signal Feed" className="lg:col-span-6" delay={0.35}>
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div className="space-y-2.5 font-mono text-[12px] text-white/60">
                  {aiInsights.map((insight, i) => (
                    <p key={i}>
                      <span className="text-gold/60">{`>`}</span> {insight}
                    </p>
                  ))}
                </div>
              </div>
            </PremiumWidget>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
