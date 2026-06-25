"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HudPanel } from "@/components/ui/HudPanel";
import { AlertTriangle, Lightbulb, Sparkles, TrendingUp } from "lucide-react";

const insights = [
  {
    type: "Opportunity",
    icon: TrendingUp,
    title: "Peak engagement window identified",
    body: "Tuesday and Thursday evenings between 7–9 PM EST show 3.1× higher message volume. Consider scheduling AMAs during this window.",
    confidence: 94,
    time: "2m ago",
    id: "SIG-2847",
  },
  {
    type: "Alert",
    icon: AlertTriangle,
    title: "Retention dip in week-2 cohort",
    body: "Members who joined in the last 14 days show 23% lower day-14 retention. The #welcome channel has 40% fewer moderator responses.",
    confidence: 89,
    time: "14m ago",
    id: "SIG-2841",
  },
  {
    type: "Recommendation",
    icon: Lightbulb,
    title: "Channel consolidation opportunity",
    body: "Channels #help, #support, and #questions overlap by 67% in active users. Merging could reduce fragmentation.",
    confidence: 91,
    time: "1h ago",
    id: "SIG-2835",
  },
  {
    type: "Trend",
    icon: Sparkles,
    title: "Voice activity driving retention",
    body: "Members who join a voice session in week one retain at 2.4× the rate of text-only members. Utilization is up 31% MoM.",
    confidence: 96,
    time: "3h ago",
    id: "SIG-2829",
  },
];

export function AIInsights() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy/[0.03] via-transparent to-gold/[0.04]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          index="05"
          label="AI Insights"
          title="Intelligence that explains itself"
          description="Patterns across millions of data points, distilled into narratives you can act on."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {insights.map((insight, index) => (
            <FadeIn key={insight.title} delay={index * 0.1}>
              <HudPanel label={insight.type} id={insight.id} className="h-full">
                <div className="absolute inset-0 overflow-hidden opacity-30">
                  <div className="scan-sweep absolute left-0 right-0 h-px bg-gold/40" />
                </div>

                <div className="relative flex items-start gap-3">
                  <insight.icon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[9px] text-white/40">{insight.time}</span>
                      <span className="font-mono text-[9px] text-gold/70">{insight.confidence}% conf</span>
                    </div>
                    <h3 className="mt-2 font-display text-lg text-white">{insight.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/55">{insight.body}</p>

                    <div className="mt-5">
                      <div className="flex items-center justify-between font-mono text-[8px] text-white/30">
                        <span>CONFIDENCE</span>
                        <span>{insight.confidence}%</span>
                      </div>
                      <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-burgundy to-gold"
                          style={{ width: `${insight.confidence}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </HudPanel>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
