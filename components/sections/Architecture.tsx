"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HudPanel } from "@/components/ui/HudPanel";
import { motion } from "framer-motion";

const architectureLayers = [
  { name: "Community Signals", description: "Discord events, conversations, reactions, member activity.", tag: "IN", offset: "lg:ml-0" },
  { name: "Apache Airflow", description: "Reliable orchestration and ingestion.", tag: "ORC", offset: "lg:ml-[5%]" },
  { name: "Databricks", description: "Behavioral processing and feature engineering.", tag: "PRC", offset: "lg:ml-[10%]" },
  { name: "Snowflake", description: "Analytics-ready community warehouse.", tag: "STG", offset: "lg:ml-[15%]" },
  {
    name: "OrbitIQ Intelligence Engine",
    description: "Central intelligence layer producing recommendations and insights.",
    tag: "CORE",
    offset: "lg:ml-[20%]",
    terminal: true,
  },
];

export function Architecture() {
  return (
    <section id="architecture" className="section-screen relative sci-fi-bg">
      <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-burgundy/[0.04] blur-3xl" />

      <div className="page-container section-screen__content relative">
        <SectionHeader
          index="04"
          label="Architecture"
          title="Signals in. Intelligence out."
          description="A scalable analytics architecture designed to convert community activity into operational insight."
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
                        Output · Actionable insights
                      </span>
                    </div>
                  )}
                </HudPanel>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-center font-mono text-[11px] tracking-widest text-muted">
            E2E FLOW · COMMUNITY SIGNAL → INTELLIGENCE
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
