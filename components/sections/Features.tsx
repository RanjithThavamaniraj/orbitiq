"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  BarChart3,
  Brain,
  HeartPulse,
  LineChart,
  Target,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Engagement Analytics",
    description:
      "Track message velocity, reaction patterns, and channel participation with granular time-series breakdowns across your entire community.",
    icon: BarChart3,
  },
  {
    title: "Community Health",
    description:
      "Composite health scoring that weighs sentiment, activity distribution, moderator response times, and member satisfaction signals.",
    icon: HeartPulse,
  },
  {
    title: "Retention Tracking",
    description:
      "Cohort-based retention analysis that identifies drop-off points in your member journey and surfaces intervention opportunities.",
    icon: Users,
  },
  {
    title: "Growth Intelligence",
    description:
      "Understand acquisition channels, referral patterns, and viral loops. Model growth trajectories with confidence intervals.",
    icon: LineChart,
  },
  {
    title: "AI Insights",
    description:
      "Natural language summaries of community trends, anomaly detection, and contextual recommendations powered by LLM analysis.",
    icon: Brain,
  },
  {
    title: "Predictive Analytics",
    description:
      "Forecast engagement, churn risk, and growth outcomes using ML models trained on your community's historical patterns.",
    icon: Target,
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          index="03"
          label="Features"
          title="Everything you need to lead with data"
          description="Purpose-built analytics for community operators who need more than vanity metrics."
        />

        <div className="space-y-4">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.06}>
              <motion.div
                className="group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="!p-8 lg:!p-10">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
                    <div className="flex items-center gap-5 lg:w-56 lg:shrink-0">
                      <span className="font-mono text-3xl font-light tracking-tighter text-burgundy/[0.12]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white">
                        <feature.icon
                          className="h-5 w-5 text-burgundy"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    <div className="flex-1 lg:flex lg:items-start lg:justify-between lg:gap-12">
                      <h3 className="text-xl font-semibold tracking-tight text-foreground lg:text-2xl">
                        {feature.title}
                      </h3>
                      <p className="mt-3 max-w-lg text-sm leading-relaxed text-body lg:mt-0 lg:text-right lg:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
