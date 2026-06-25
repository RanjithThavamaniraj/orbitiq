"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const technologies = [
  { name: "Airflow", role: "Orchestration" },
  { name: "Databricks", role: "Processing" },
  { name: "Snowflake", role: "Warehouse" },
  { name: "Next.js", role: "Framework" },
  { name: "TypeScript", role: "Language" },
  { name: "Vercel", role: "Deployment" },
];

const marqueeItems = [...technologies, ...technologies];

export function TechStack() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          index="06"
          label="Technology"
          title="Built on proven infrastructure"
          description="We integrate with the tools your data team already trusts, so OrbitIQ fits seamlessly into your existing stack."
        />
      </div>

      <FadeIn delay={0.1}>
        <div className="relative mt-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

          <div className="flex overflow-hidden">
            <div className="marquee-track flex shrink-0 items-center gap-16 px-8">
              {marqueeItems.map((tech, i) => (
                <div key={`${tech.name}-${i}`} className="flex shrink-0 items-baseline gap-4">
                  <span className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {tech.name}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    {tech.role}
                  </span>
                  <span className="text-gold/40">·</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mx-auto mt-16 flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-6 font-mono text-[11px] text-muted lg:px-8">
          {technologies.map((tech, i) => (
            <span key={tech.name} className="flex items-center gap-3">
              <span className="transition-colors duration-200 hover:text-burgundy">
                {tech.name}
              </span>
              {i < technologies.length - 1 && (
                <span className="text-burgundy/20">──</span>
              )}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
