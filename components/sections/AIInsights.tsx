"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PremiumWidget } from "@/components/ui/PremiumWidget";
import { AlertTriangle, Lightbulb, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const insights = [
  {
    type: "Opportunity",
    icon: TrendingUp,
    title: "Peak engagement window identified",
    body: "Tuesday and Thursday evenings show 3.1x higher activity than average. Consider scheduling community events during these periods.",
    confidence: 94,
    time: "2m ago",
    id: "SIG-2847",
  },
  {
    type: "Alert",
    icon: AlertTriangle,
    title: "Retention dip detected",
    body: "Members who joined in the last 14 days are returning 22% less frequently than previous cohorts.",
    confidence: 89,
    time: "14m ago",
    id: "SIG-2841",
  },
  {
    type: "Recommendation",
    icon: Lightbulb,
    title: "Newcomer onboarding recommended",
    body: "Create a newcomer onboarding channel and automated welcome sequence.",
    confidence: 91,
    time: "1h ago",
    id: "SIG-2835",
  },
  {
    type: "Trend",
    icon: Sparkles,
    title: "Voice participation correlates with member retention",
    body: "Communities with weekly voice sessions retain members 2.4x longer.",
    confidence: 96,
    time: "3h ago",
    id: "SIG-2829",
  },
];

function ConfidenceBadge({ value, large }: { value: number; large?: boolean }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-gold/15 bg-black/30",
        large ? "px-8 py-6" : "px-4 py-3"
      )}
    >
      <span className={cn("font-display text-gold", large ? "text-5xl" : "text-2xl")}>{value}</span>
      <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.22em] text-white/40">
        confidence
      </span>
    </div>
  );
}

function MosaicTile({
  type,
  icon: Icon,
  title,
  body,
  confidence,
  time,
  id,
  delay,
}: {
  type: string;
  icon: LucideIcon;
  title: string;
  body: string;
  confidence: number;
  time: string;
  id: string;
  delay: number;
}) {
  return (
    <PremiumWidget delay={delay} className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/20 bg-gold/[0.08]">
          <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
        </div>
        <ConfidenceBadge value={confidence} />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-gold/80">{type}</span>
        <span className="font-mono text-[8px] text-white/30">{id}</span>
      </div>
      <h3 className="mt-2 font-display text-base leading-snug text-white/95">{title}</h3>
      <p className="mt-2 flex-1 text-[12px] leading-relaxed text-white/50">{body}</p>
      <p className="mt-4 font-mono text-[9px] text-white/35">{time}</p>
    </PremiumWidget>
  );
}

export function AIInsights() {
  const [featured, ...mosaic] = insights;

  return (
    <section className="premium-section section-screen relative border-t border-gold/10">
      <div className="page-container section-screen__content relative">
        <SectionHeader
          index="05"
          label="AI Insights"
          title="Intelligence that explains itself"
          description="OrbitIQ doesn't just show metrics. It explains why they changed and what to do next."
          tone="dark"
        />

        <FadeIn delay={0.08}>
          <PremiumWidget glow delay={0} className="mb-4 lg:mb-5">
            <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/25 bg-gold/[0.1]">
                    <featured.icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-gold/85">
                      Featured · {featured.type}
                    </span>
                    <span className="font-mono text-[9px] text-white/35">{featured.id}</span>
                    <span className="font-mono text-[9px] text-white/45">{featured.time}</span>
                  </div>
                </div>
                <h3 className="mt-5 font-display text-2xl leading-tight text-white lg:text-[1.75rem] xl:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-white/55 lg:text-[15px]">
                  {featured.body}
                </p>
              </div>
              <div className="flex items-center justify-center lg:col-span-4 lg:border-l lg:border-gold/10 lg:pl-8">
                <ConfidenceBadge value={featured.confidence} large />
              </div>
            </div>
          </PremiumWidget>

          <div className="grid gap-3 sm:grid-cols-3 lg:gap-4">
            {mosaic.map((insight, index) => (
              <MosaicTile key={insight.id} {...insight} delay={0.1 + index * 0.08} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
