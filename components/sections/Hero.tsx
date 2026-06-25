"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { HeroOrbitArtwork } from "@/components/visuals/HeroOrbitArtwork";
import { HeroOrbitEnvironment, HeroOrbitProcessLabel } from "@/components/visuals/HeroOrbitEnvironment";
import { ArrowRight } from "lucide-react";

const narrative = [
  { label: "Community chaos" },
  { label: "OrbitIQ core" },
  { label: "Intelligence" },
];

export function Hero() {
  return (
    <section className="section-screen relative overflow-hidden">
      <div className="absolute inset-0 paper-texture" />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 58% 52% at 57% 46%, rgba(255,251,240,0.9) 0%, rgba(255,250,205,0.38) 48%, transparent 78%)",
        }}
      />

      <div className="page-container section-screen__content relative">
        <div className="relative lg:min-h-[min(62vh,560px)]">
          <div className="relative grid items-center gap-6 lg:grid-cols-12 lg:gap-x-4 lg:gap-y-0">
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

          <FadeIn
            delay={0.14}
            className="hero-orbit-stage pointer-events-none relative z-10 mx-auto mt-4 w-full max-w-lg sm:max-w-xl lg:absolute lg:inset-y-0 lg:mx-0 lg:mt-0 lg:flex lg:flex-col lg:items-center lg:justify-center"
          >
            <div className="hero-orbit-canvas relative aspect-[5/4] w-full min-h-[286px] sm:min-h-[330px] lg:min-h-[min(56vh,515px)] xl:min-h-[min(60vh,560px)]">
              <HeroOrbitEnvironment className="inset-0" />
              <div className="absolute inset-0">
                <HeroOrbitArtwork />
              </div>
            </div>
            <HeroOrbitProcessLabel />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
