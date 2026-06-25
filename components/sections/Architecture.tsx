"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HudPanel } from "@/components/ui/HudPanel";
import { motion } from "framer-motion";

const architectureLayers = [
  { name: "Discord API", description: "Gateway events, REST endpoints, webhooks", tag: "SRC", offset: "lg:ml-0" },
  { name: "Apache Airflow", description: "DAG orchestration, scheduling, retries", tag: "ORC", offset: "lg:ml-[5%]" },
  { name: "Databricks", description: "Spark jobs, Delta Lake, ML pipelines", tag: "PRC", offset: "lg:ml-[10%]" },
  { name: "Snowflake", description: "Data warehouse, SQL analytics, sharing", tag: "STG", offset: "lg:ml-[15%]" },
  { name: "Analytics Layer", description: "dbt models, metrics API, caching", tag: "SEM", offset: "lg:ml-[20%]" },
  { name: "Next.js Dashboard", description: "Real-time UI, SSR, edge delivery", tag: "UI", offset: "lg:ml-[25%]", terminal: true },
];

export function Architecture() {
  return (
    <section id="architecture" className="section-pad relative sci-fi-bg overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-burgundy/[0.04] blur-3xl" />

      <div className="page-container relative">
        <SectionHeader
          index="04"
          label="Architecture"
          title="Enterprise-grade, thoughtfully composed"
          description="A vertically integrated stack built for reliability. Each layer is independently monitorable and horizontally scalable."
        />

        <FadeIn delay={0.15}>
          <div className="relative space-y-3">
            {architectureLayers.map((layer, index) => (
              <motion.div
                key={layer.name}
                className={`relative max-w-lg ${layer.offset}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <HudPanel label={layer.tag} id={`LYR-${String(index + 1).padStart(2, "0")}`}>
                  <h3 className="font-display text-lg text-white lg:text-xl">{layer.name}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">{layer.description}</p>
                  {layer.terminal && (
                    <div className="mt-3 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold pulse-node" />
                      <span className="font-mono text-[9px] uppercase tracking-widest text-gold/80">
                        Output · Live Dashboard
                      </span>
                    </div>
                  )}
                </HudPanel>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-center font-mono text-[11px] tracking-widest text-muted">
            E2E LATENCY · ~45s · EVENT → DASHBOARD
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
