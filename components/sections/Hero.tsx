"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { HeroBrutalistScore } from "@/components/visuals/HeroBrutalistScore";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[4.5rem]">
      <div className="absolute inset-0 paper-texture" />
      <div className="pointer-events-none absolute -right-32 top-20 h-[480px] w-[480px] rounded-full bg-surface/90 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-10 lg:pb-32 lg:pt-24">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12 xl:gap-20">
          <div className="max-w-xl lg:max-w-none">
            <FadeIn delay={0.05}>
              <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.24em] text-burgundy">
                Community Intelligence
              </p>
            </FadeIn>

            <FadeIn delay={0.12}>
              <h1 className="font-display text-[2.75rem] leading-[1.08] text-burgundy-deep sm:text-5xl lg:text-[3.75rem] xl:text-[4.125rem]">
                Understand your community{" "}
                <em className="not-italic text-burgundy">beyond the numbers</em>
              </h1>
            </FadeIn>

            <FadeIn delay={0.22}>
              <p className="mt-8 max-w-md text-[17px] leading-[1.7] text-text">
                OrbitIQ transforms Discord activity into clear, actionable intelligence —
                through enterprise pipelines and thoughtful AI that speaks human.
              </p>
            </FadeIn>

            <FadeIn delay={0.32}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="#dashboard">
                  Explore Platform
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="#architecture" variant="secondary">
                  View Architecture
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.42}>
              <div className="mt-16 flex gap-12 border-t border-burgundy/10 pt-10">
                {[
                  { value: "2.4M+", label: "Signals daily" },
                  { value: "99.9%", label: "Reliability" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl text-burgundy-deep">{stat.value}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-label">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.25} className="relative lg:pl-4">
            <HeroBrutalistScore />
          </FadeIn>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-label">Discover</span>
          <div className="h-10 w-px bg-gradient-to-b from-burgundy/25 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
