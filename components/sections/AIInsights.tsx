"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { AIInsightsBridgeIllustration } from "@/components/visuals/AIInsightsBridgeIllustration";
import { motion } from "framer-motion";
import { communityProfile as c } from "@/lib/community-profile";

const insights = [
  {
    type: "Opportunity",
    title: "Peak Engagement Window Identified",
    body: `Community activity is 3.1× higher on Tuesday and Thursday evenings across ${c.messagesPerDayFormatted} daily messages.`,
    confidence: 94,
    id: "SIG-2847",
  },
  {
    type: "Alert",
    title: "Retention Dip Detected",
    body: `New members are returning less frequently. Retention currently sits at ${c.retentionFormatted}, despite an overall health score of ${c.healthScore}.`,
    confidence: 89,
    id: "SIG-2841",
  },
  {
    type: "Recommendation",
    title: "Newcomer Onboarding Recommended",
    body: "Create a dedicated onboarding channel and automated welcome sequence to improve activation rates.",
    confidence: 91,
    id: "SIG-2835",
  },
  {
    type: "Trend",
    title: "Voice Participation Correlates With Retention",
    body: "Communities with higher voice participation show significantly stronger long-term retention patterns.",
    confidence: 96,
    id: "SIG-2829",
  },
];

function ConfidenceBadge({ value }: { value: number }) {
  return (
    <span className="shrink-0 rounded-full border border-gold/20 bg-gold/[0.06] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-burgundy/65">
      {value}% Confidence
    </span>
  );
}

function InsightLine({
  insight,
  index,
}: {
  insight: (typeof insights)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.45 }}
      className="border-t border-burgundy/8 py-4 first:border-t-0"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 gap-y-1">
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-burgundy/55">
          {insight.type} · {insight.id}
        </span>
        <ConfidenceBadge value={insight.confidence} />
      </div>
      <p className="mt-2 font-display text-[15px] leading-snug text-burgundy-deep">{insight.title}</p>
      <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{insight.body}</p>
    </motion.div>
  );
}

export function AIInsights() {
  return (
    <section className="section-screen relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 paper-texture" />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 85% 25%, rgba(255,251,240,0.9) 0%, rgba(255,250,205,0.4) 50%, transparent 80%)",
        }}
      />

      <div className="page-container section-screen__content relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <FadeIn delay={0.06} className="relative z-10">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-burgundy">
              SYS.05 · AI Insights
            </p>

            <h2 className="font-display text-[2rem] leading-[1.15] text-burgundy-deep/70 sm:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem]">
              You lead the{" "}
              <span className="font-semibold text-burgundy-deep">community.</span>
            </h2>
            <h2 className="mt-1 font-display text-[2rem] leading-[1.15] text-burgundy-deep/70 sm:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem]">
              OrbitIQ delivers the{" "}
              <span className="font-semibold text-burgundy">intelligence.</span>
            </h2>

            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-muted lg:text-[15px]">
              OrbitIQ has generated {c.insightsGenerated} insights and {c.recommendationsGenerated}{" "}
              recommendations from 2.4M community events — explaining why metrics changed and what
              operators should do next.
            </p>

            <div className="mt-8 max-w-lg">
              {insights.map((insight, index) => (
                <InsightLine key={insight.id} insight={insight} index={index} />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.14} className="relative z-10 lg:min-h-[380px]">
            <AIInsightsBridgeIllustration />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
