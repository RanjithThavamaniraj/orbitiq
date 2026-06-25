"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { HeroOrbitArtwork } from "@/components/visuals/HeroOrbitArtwork";
import { HeroOrbitEnvironment } from "@/components/visuals/HeroOrbitEnvironment";
import { HeroMegaType } from "@/components/visuals/HeroMegaType";
import { ArrowRight } from "lucide-react";

const narrative = [
  { label: "Community chaos" },
  { label: "OrbitIQ core" },
  { label: "Intelligence" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[4.5rem]">
      <div className="absolute inset-0 paper-texture" />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 55% at 78% 45%, rgba(255,251,240,0.85) 0%, rgba(255,250,205,0.35) 55%, transparent 85%)",
        }}
      />

      <div className="page-container relative py-6 sm:py-8 lg:py-9">
        <div className="relative grid items-center gap-6 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
          <FadeIn delay={0.06} className="relative z-30 lg:col-span-5 lg:row-start-1">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-burgundy">
              OrbitIQ · Community Intelligence
            </p>

            <h1 className="font-display text-[2.25rem] leading-[1.05] text-burgundy-deep sm:text-[2.5rem] lg:text-[2.875rem] xl:text-[3rem]">
              Chaos in.
              <br />
              <em className="not-italic text-burgundy">Intelligence out.</em>
            </h1>
          </FadeIn>

          <FadeIn
            delay={0.14}
            className="relative z-20 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1"
          >
            <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto lg:w-[92%] lg:max-w-[36rem]">
              <div className="relative aspect-[5/4] w-full min-h-[260px] sm:min-h-[300px] lg:min-h-[min(40vh,380px)] xl:min-h-[min(44vh,420px)]">
                <HeroOrbitEnvironment className="inset-0" />
                <div className="absolute inset-0">
                  <HeroOrbitArtwork />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="relative z-30 lg:col-span-5 lg:row-start-2">
            <div className="mt-1 lg:mt-2">
              <div className="mb-4 space-y-0.5">
                {narrative.map((step, i) => (
                  <div key={step.label}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-label">{step.label}</p>
                    {i < narrative.length - 1 && (
                      <p className="my-1 font-mono text-[9px] text-burgundy/35">↓</p>
                    )}
                  </div>
                ))}
              </div>

              <p className="mb-4 text-[13px] leading-relaxed text-muted sm:text-[14px]">
                Turning community activity into intelligence
              </p>

              <a href="#dashboard" className="editorial-cta group">
                <span className="editorial-cta-line">Explore the transformation</span>
                <ArrowRight className="editorial-cta-arrow h-3.5 w-3.5 text-burgundy" strokeWidth={1.5} />
              </a>
            </div>
          </FadeIn>
        </div>

        <div
          className="pointer-events-none absolute right-0 bottom-[10%] z-[5] hidden w-[48%] overflow-hidden lg:block"
          aria-hidden
        >
          <HeroMegaType variant="atmospheric" />
        </div>

      </div>
    </section>
  );
}
