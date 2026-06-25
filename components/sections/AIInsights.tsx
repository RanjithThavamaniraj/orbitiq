"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { AlertTriangle, Lightbulb, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const insights = [
  {
    type: "Opportunity",
    icon: TrendingUp,
    accent: "text-gold",
    title: "Peak engagement window identified",
    body: "Tuesday and Thursday evenings between 7–9 PM EST show 3.1× higher message volume. Consider scheduling AMAs and announcements during this window to maximize reach.",
    confidence: "94%",
    time: "2m ago",
  },
  {
    type: "Alert",
    icon: AlertTriangle,
    accent: "text-burgundy",
    title: "Retention dip in week-2 cohort",
    body: "Members who joined in the last 14 days show 23% lower day-14 retention compared to the prior cohort. The #welcome channel has 40% fewer moderator responses.",
    confidence: "89%",
    time: "14m ago",
  },
  {
    type: "Recommendation",
    icon: Lightbulb,
    accent: "text-burgundy-deep",
    title: "Channel consolidation opportunity",
    body: "Channels #help, #support, and #questions overlap by 67% in active users. Merging into a single support channel could reduce fragmentation and improve response times.",
    confidence: "91%",
    time: "1h ago",
  },
  {
    type: "Trend",
    icon: Sparkles,
    accent: "text-gold",
    title: "Voice activity driving retention",
    body: "Members who participate in at least one voice session within their first week retain at 2.4× the rate of text-only members. Voice channel utilization is up 31% month-over-month.",
    confidence: "96%",
    time: "3h ago",
  },
];

export function AIInsights() {
  return (
    <section className="relative py-24 lg:py-36">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          index="05"
          label="AI Insights"
          title="Intelligence that explains itself"
          description="OrbitIQ's AI layer analyzes patterns across millions of data points and delivers actionable narratives—not just charts."
        />

        <div className="relative max-w-3xl">
          <div className="signal-spine left-0" />

          <div className="space-y-6 pl-0 lg:pl-4">
            {insights.map((insight, index) => (
              <FadeIn key={insight.title} delay={index * 0.1}>
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.3 }}>
                  <GlassCard className="!p-8">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <div className="flex items-center gap-2">
                        <insight.icon className={`h-3.5 w-3.5 ${insight.accent}`} />
                        <span
                          className={`font-mono text-[10px] uppercase tracking-widest ${insight.accent}`}
                        >
                          {insight.type}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-muted">{insight.time}</span>
                      <span className="ml-auto font-mono text-[10px] text-muted">
                        {insight.confidence} confidence
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                      {insight.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-body">
                      {insight.body}
                    </p>
                  </GlassCard>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
