"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { OrbitVisualization } from "@/components/visuals/OrbitVisualization";
import { ArrowRight, Layers } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "2.4M+", label: "Events / day" },
  { value: "99.9%", label: "Uptime" },
  { value: "<2s", label: "Latency" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 subtle-grid" />
      <div className="absolute inset-0 noise-overlay" />
      <div className="pointer-events-none absolute top-0 right-0">
        <div className="h-[500px] w-[500px] rounded-full bg-ivory/80 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative min-h-[calc(100vh-4rem)]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="pointer-events-none absolute -right-16 top-8 z-0 opacity-70 lg:-right-24 lg:top-0 lg:opacity-100"
          >
            <OrbitVisualization />
          </motion.div>

          <div className="relative z-10 flex min-h-[calc(100vh-4rem)] flex-col justify-center pt-16 pb-32 lg:max-w-[58%] lg:pt-24">
            <FadeIn delay={0.1}>
              <div className="mb-8 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-burgundy" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  Community Intelligence Platform
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1 className="text-[2.75rem] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-[4.25rem]">
                Understand Your
                <br />
                Community{" "}
                <span className="text-burgundy">Beyond the Numbers</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-body">
                OrbitIQ ingests Discord activity through enterprise-grade pipelines,
                processes it with Databricks and Snowflake, and surfaces AI-powered
                insights that reveal what your community truly needs.
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="#dashboard">
                  Explore Platform
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="#architecture" variant="secondary">
                  <Layers className="h-4 w-4" />
                  View Architecture
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div className="mt-20 flex items-stretch divide-x divide-border">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="pr-10 first:pl-0 last:pr-0 [&:not(:first-child)]:pl-10"
                  >
                    <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted/60">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-burgundy/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
