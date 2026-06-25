"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

const architectureLayers = [
  {
    name: "Discord API",
    description: "Gateway events, REST endpoints, webhooks",
    tag: "Source",
    width: "100%",
  },
  {
    name: "Apache Airflow",
    description: "DAG orchestration, scheduling, retries",
    tag: "Orchestration",
    width: "88%",
  },
  {
    name: "Databricks",
    description: "Spark jobs, Delta Lake, ML pipelines",
    tag: "Processing",
    width: "76%",
  },
  {
    name: "Snowflake",
    description: "Data warehouse, SQL analytics, sharing",
    tag: "Storage",
    width: "64%",
  },
  {
    name: "Analytics Layer",
    description: "dbt models, metrics API, caching",
    tag: "Semantic",
    width: "52%",
  },
  {
    name: "Next.js Dashboard",
    description: "Real-time UI, SSR, edge delivery",
    tag: "Presentation",
    width: "40%",
  },
];

export function Architecture() {
  return (
    <section id="architecture" className="relative overflow-hidden py-24 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/50 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          index="04"
          label="Architecture"
          title="Enterprise-grade from ingestion to insight"
          description="A vertically integrated stack built for reliability at scale. Each layer is independently monitorable and horizontally scalable."
        />

        <FadeIn delay={0.15}>
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent" />

            <div className="flex flex-col items-center gap-3">
              {architectureLayers.map((layer, index) => (
                <motion.div
                  key={layer.name}
                  className="group relative"
                  style={{ width: layer.width }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="card relative overflow-hidden px-6 py-5 transition-all duration-300 group-hover:border-[var(--border-hover)] group-hover:shadow-[var(--shadow-elevated)]">
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-burgundy/20 transition-colors group-hover:bg-burgundy" />

                    <div className="relative flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
                          {layer.name}
                        </h3>
                        <p className="mt-1 text-xs text-body sm:text-sm">
                          {layer.description}
                        </p>
                      </div>
                      <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-burgundy">
                        {layer.tag}
                      </span>
                    </div>
                  </div>

                  {index < architectureLayers.length - 1 && (
                    <div className="flex justify-center py-1">
                      <div className="h-3 w-px bg-gradient-to-b from-burgundy/20 to-transparent" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <p className="mt-12 text-center font-mono text-xs text-muted">
              End-to-end latency · ~45s from event to dashboard
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
