"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PremiumWidget } from "@/components/ui/PremiumWidget";
import {
  BarChart3,
  Brain,
  HeartPulse,
  LineChart,
  Target,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { communityProfile as c } from "@/lib/community-profile";

const features = [
  {
    title: "Engagement Analytics",
    description: "Track message velocity, reactions, active channels, and participation trends.",
    icon: BarChart3,
    code: "ENG-01",
    stat: c.messagesPerDayFormatted,
    statLabel: "msgs / day",
  },
  {
    title: "Community Health",
    description: "Measure sentiment, activity consistency, satisfaction signals, and member quality.",
    icon: HeartPulse,
    code: "HLT-02",
    stat: String(c.healthScore),
    statLabel: "health index",
  },
  {
    title: "Retention Tracking",
    description: "Identify drop-off points, inactive cohorts, and long-term member behavior.",
    icon: Users,
    code: "RET-03",
    stat: c.retentionFormatted,
    statLabel: "retention",
  },
  {
    title: "Growth Intelligence",
    description: "Understand acquisition sources, referral loops, and growth patterns.",
    icon: LineChart,
    code: "GRW-04",
    stat: c.monthlyGrowthFormatted,
    statLabel: "monthly growth",
  },
  {
    title: "AI Insights",
    description: "Natural-language summaries explaining community trends and anomalies.",
    icon: Brain,
    code: "AI-05",
    stat: String(c.insightsGenerated),
    statLabel: "insights",
  },
  {
    title: "Predictive Analytics",
    description: "Forecast engagement, churn risk, and future growth opportunities.",
    icon: Target,
    code: "PRD-06",
    stat: String(c.recommendationsGenerated),
    statLabel: "recommendations",
  },
];

function CapabilityRow({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.45 }}
      className="group relative grid gap-4 border-b border-gold/8 py-5 last:border-b-0 lg:grid-cols-12 lg:items-center lg:gap-6 lg:py-6"
    >
      <div className="flex items-center gap-4 lg:col-span-3">
        <span className="font-mono text-[10px] tracking-[0.2em] text-gold/55">{feature.code}</span>
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/20 bg-gold/[0.08] transition-colors group-hover:border-gold/35">
          <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
        </div>
      </div>

      <div className="lg:col-span-6">
        <h3 className="font-display text-lg text-white/95 lg:text-xl">{feature.title}</h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-white/50">{feature.description}</p>
      </div>

      <div className="flex items-baseline gap-3 lg:col-span-3 lg:justify-end lg:text-right">
        <p className="font-display text-2xl text-gold lg:text-3xl">{feature.stat}</p>
        <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">{feature.statLabel}</p>
      </div>

      <div
        className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-3 -translate-y-1/2 bg-gold/40 opacity-0 transition-opacity group-hover:opacity-100 lg:block"
        aria-hidden
      />
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="features" className="premium-section section-screen relative border-t border-gold/10">
      <div className="page-container section-screen__content relative">
        <SectionHeader
          index="03"
          label="Capabilities"
          title="Everything you need to lead with clarity"
          description="Purpose-built intelligence tools for Discord communities and online operators."
          tone="dark"
        />

        <FadeIn delay={0.1}>
          <PremiumWidget glow label="Capability Registry" className="!p-0 lg:!p-0">
            <div className="border-b border-gold/8 px-5 py-3 lg:px-7">
              <div className="hidden font-mono text-[8px] uppercase tracking-[0.24em] text-white/30 lg:grid lg:grid-cols-12 lg:gap-6">
                <span className="lg:col-span-3">Module</span>
                <span className="lg:col-span-6">Capability</span>
                <span className="lg:col-span-3 text-right">Signal</span>
              </div>
            </div>
            <div className="px-5 lg:px-7">
              {features.map((feature, index) => (
                <CapabilityRow key={feature.code} feature={feature} index={index} />
              ))}
            </div>
          </PremiumWidget>
        </FadeIn>
      </div>
    </section>
  );
}
