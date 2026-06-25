"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HudPanel } from "@/components/ui/HudPanel";
import {
  BarChart3,
  Brain,
  HeartPulse,
  LineChart,
  Target,
  Users,
} from "lucide-react";

const features = [
  { title: "Engagement Analytics", description: "Track message velocity, reaction patterns, and channel participation with granular time-series breakdowns.", icon: BarChart3, code: "ENG-01" },
  { title: "Community Health", description: "Composite health scoring that weighs sentiment, activity distribution, and member satisfaction signals.", icon: HeartPulse, code: "HLT-02" },
  { title: "Retention Tracking", description: "Cohort-based retention analysis that identifies drop-off points and surfaces intervention opportunities.", icon: Users, code: "RET-03" },
  { title: "Growth Intelligence", description: "Understand acquisition channels, referral patterns, and viral loops with confidence intervals.", icon: LineChart, code: "GRW-04" },
  { title: "AI Insights", description: "Natural language summaries of community trends, anomaly detection, and contextual recommendations.", icon: Brain, code: "AI-05" },
  { title: "Predictive Analytics", description: "Forecast engagement, churn risk, and growth outcomes using models trained on your community's history.", icon: Target, code: "PRD-06" },
];

export function Features() {
  return (
    <section id="features" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 sci-fi-bg opacity-60" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeader
          index="03"
          label="Capabilities"
          title="Everything you need to lead with clarity"
          description="Purpose-built analytics for community operators who need depth, not noise."
        />

        <div className="space-y-5">
          {features.map((feature, index) => {
            const isRight = index % 2 === 1;
            return (
              <FadeIn key={feature.title} delay={index * 0.07}>
                <div className={`flex ${isRight ? "lg:justify-end" : "lg:justify-start"}`}>
                  <HudPanel
                    label={feature.code}
                    variant="light"
                    className={`w-full max-w-md ${isRight ? "lg:ml-16" : "lg:mr-16"}`}
                  >
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-burgundy/15 bg-burgundy/[0.05]">
                        <feature.icon className="h-4 w-4 text-burgundy" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-display text-lg text-burgundy-deep">{feature.title}</h3>
                        <p className="mt-2 text-[13px] leading-relaxed text-muted">{feature.description}</p>
                      </div>
                    </div>
                  </HudPanel>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
