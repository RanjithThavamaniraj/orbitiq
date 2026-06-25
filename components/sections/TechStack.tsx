"use client";

import type { ReactNode } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Orbit } from "lucide-react";

const inputs = ["Community Activity", "Discord Signals"];

const processing = ["Apache Airflow", "Databricks", "Snowflake"];

const outputs = [
  "Community Health",
  "Growth Signals",
  "Retention Analysis",
  "AI Insights",
  "Recommendations",
];

function FlowArrow({ vertical = false }: { vertical?: boolean }) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center text-burgundy/25",
        vertical ? "py-1" : "px-1 lg:px-2"
      )}
      aria-hidden
    >
      {vertical ? (
        <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
      ) : (
        <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
      )}
    </div>
  );
}

function StageLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.28em] text-burgundy/55">{children}</p>
  );
}

function ItemList({ items, variant = "default" }: { items: string[]; variant?: "default" | "muted" | "output" }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: variant === "output" ? 8 : -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 + i * 0.05 }}
          className={cn(
            "rounded-lg border px-3 py-2.5 text-[13px] leading-snug",
            variant === "default" &&
              "border-burgundy/12 bg-white/50 text-burgundy-deep backdrop-blur-sm",
            variant === "muted" &&
              "border-border/60 bg-background/40 font-mono text-[11px] uppercase tracking-[0.12em] text-muted",
            variant === "output" &&
              "border-gold/20 bg-gradient-to-r from-gold/[0.08] to-transparent text-burgundy-deep"
          )}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  );
}

function CoreHub() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-burgundy-deep via-[#3a0010] to-[#2a000c] p-5 shadow-[0_16px_48px_rgba(74,0,14,0.28)] lg:p-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(212,175,55,0.14),transparent_65%)]" />
      <div className="relative">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/35 bg-gold/10">
            <Orbit className="h-5 w-5 text-gold" strokeWidth={1.5} />
          </div>
          <StageLabel>Core</StageLabel>
        </div>
        <h3 className="font-display text-xl leading-tight text-white lg:text-2xl">
          OrbitIQ
          <br />
          <span className="text-gold">Intelligence Engine</span>
        </h3>
        <p className="mt-3 text-[13px] leading-relaxed text-white/55">
          The intelligence layer that transforms raw community activity into actionable insight.
        </p>
        <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4">
          <span className="h-1.5 w-1.5 rounded-full bg-gold pulse-node" />
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold/80">
            Signals in · Intelligence out
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function FlowDiagram({ vertical = false }: { vertical?: boolean }) {
  if (vertical) {
    return (
      <div className="flex flex-col">
        <div>
          <StageLabel>Inputs</StageLabel>
          <ItemList items={inputs} />
        </div>
        <FlowArrow vertical />
        <div>
          <StageLabel>Processing</StageLabel>
          <p className="mb-2 font-mono text-[8px] uppercase tracking-[0.2em] text-muted">
            Data infrastructure
          </p>
          <ItemList items={processing} variant="muted" />
        </div>
        <FlowArrow vertical />
        <CoreHub />
        <FlowArrow vertical />
        <div>
          <StageLabel>Outputs</StageLabel>
          <ItemList items={outputs} variant="output" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid items-stretch gap-3 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1.15fr)_auto_minmax(0,1.2fr)] lg:gap-0">
      <div className="flex flex-col justify-center">
        <StageLabel>Inputs</StageLabel>
        <ItemList items={inputs} />
      </div>

      <FlowArrow />

      <div className="flex flex-col justify-center">
        <StageLabel>Processing</StageLabel>
        <p className="mb-2 font-mono text-[8px] uppercase tracking-[0.2em] text-muted">
          Data infrastructure
        </p>
        <ItemList items={processing} variant="muted" />
      </div>

      <FlowArrow />

      <CoreHub />

      <FlowArrow />

      <div className="flex flex-col justify-center">
        <StageLabel>Outputs</StageLabel>
        <ItemList items={outputs} variant="output" />
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section className="section-screen relative border-t border-border/50">
      <div className="absolute inset-0 sci-fi-bg" />

      <div className="page-container section-screen__content relative">
        <SectionHeader
          index="06"
          label="Intelligence Layer"
          title="Community signals in. Actionable intelligence out."
          description="OrbitIQ sits between raw community activity and operator decisions."
        />

        <FadeIn delay={0.12}>
          <div
            className="relative overflow-hidden rounded-2xl border border-burgundy/10 bg-gradient-to-br from-background/80 via-[#fffef5]/90 to-background/70 p-5 backdrop-blur-sm lg:rounded-[1.25rem] lg:p-7"
            role="img"
            aria-label="OrbitIQ system flow: community inputs flow through data infrastructure into the OrbitIQ Intelligence Engine, producing health, growth, retention, AI insights, and recommendations"
          >
            <div className="pointer-events-none absolute inset-0 hud-grid opacity-40" />

            <div className="relative hidden lg:block">
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 1000 200"
                preserveAspectRatio="none"
                aria-hidden
              >
                <motion.path
                  d="M 80 100 C 200 100, 220 100, 320 100 C 420 100, 440 100, 500 100 C 560 100, 580 100, 680 100 C 780 100, 800 100, 920 100"
                  fill="none"
                  stroke="rgba(212,175,55,0.2)"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </svg>
              <FlowDiagram />
            </div>

            <div className="relative lg:hidden">
              <FlowDiagram vertical />
            </div>
          </div>

          <p className="mt-6 text-center font-mono text-[10px] tracking-[0.25em] text-muted">
            RAW ACTIVITY → INTELLIGENCE ENGINE → OPERATOR DECISIONS
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
