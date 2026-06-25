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

const features = [
  {
    title: "Engagement Analytics",
    description: "Track message velocity, reaction patterns, and channel participation with granular time-series breakdowns.",
    icon: BarChart3,
    code: "ENG-01",
    stat: "4.2K",
    statLabel: "msgs / hr",
  },
  {
    title: "Community Health",
    description: "Composite health scoring that weighs sentiment, activity distribution, and member satisfaction signals.",
    icon: HeartPulse,
    code: "HLT-02",
    stat: "87",
    statLabel: "health index",
  },
  {
    title: "Retention Tracking",
    description: "Cohort-based retention analysis that identifies drop-off points and surfaces intervention opportunities.",
    icon: Users,
    code: "RET-03",
    stat: "+12%",
    statLabel: "week-2 retain",
  },
  {
    title: "Growth Intelligence",
    description: "Understand acquisition channels, referral patterns, and viral loops with confidence intervals.",
    icon: LineChart,
    code: "GRW-04",
    stat: "+94%",
    statLabel: "12-wk growth",
  },
  {
    title: "AI Insights",
    description: "Natural language summaries of community trends, anomaly detection, and contextual recommendations.",
    icon: Brain,
    code: "AI-05",
    stat: "96%",
    statLabel: "confidence",
  },
  {
    title: "Predictive Analytics",
    description: "Forecast engagement, churn risk, and growth outcomes using models trained on your community's history.",
    icon: Target,
    code: "PRD-06",
    stat: "2.4×",
    statLabel: "churn signal",
  },
];

export function Features() {
  return (
    <section id="features" className="premium-section section-screen relative border-t border-gold/10">
      <div className="page-container section-screen__content relative">
        <SectionHeader
          index="03"
          label="Capabilities"
          title="Everything you need to lead with clarity"
          description="Purpose-built analytics for community operators who need depth, not noise."
          tone="dark"
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.05}>
              <PremiumWidget label={feature.code} className="h-full" delay={index * 0.05}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.08] shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                    <feature.icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <div className="text-right">
                    <p className="font-display text-2xl text-gold">{feature.stat}</p>
                    <p className="font-mono text-[8px] uppercase tracking-widest text-white/40">{feature.statLabel}</p>
                  </div>
                </div>
                <h3 className="mt-4 font-display text-lg text-white/95">{feature.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/55">{feature.description}</p>
              </PremiumWidget>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
