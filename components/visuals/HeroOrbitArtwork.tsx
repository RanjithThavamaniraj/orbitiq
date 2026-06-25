"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroOrbitArtwork() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 400], [0, 12]);

  return (
    <motion.div style={{ y: parallaxY }} className="relative h-full w-full">
      <motion.div
        className="relative h-full w-full"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="pointer-events-none absolute left-1/2 top-[52%] h-[42%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(109,7,26,0.14) 0%, rgba(212,175,55,0.08) 38%, rgba(255,251,240,0.35) 58%, transparent 78%)",
          }}
          animate={{ opacity: [0.75, 1, 0.75], scale: [0.96, 1.04, 0.96] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div
          className="pointer-events-none absolute bottom-[6%] left-1/2 h-5 w-[58%] -translate-x-1/2 rounded-full blur-2xl"
          style={{
            background: "radial-gradient(ellipse, rgba(109,7,26,0.16) 0%, rgba(43,33,24,0.06) 45%, transparent 72%)",
          }}
        />

        <div className="hero-orbit-artwork relative h-full w-full">
          <Image
            src="/hero-orbit.png"
            alt="Community chaos flows through the OrbitIQ core into actionable intelligence"
            fill
            priority
            sizes="(max-width: 1024px) 95vw, 58vw"
            className="hero-orbit-image object-contain object-center"
          />
          <div className="hero-orbit-edge-fade pointer-events-none absolute inset-[-2%]" />
        </div>
      </motion.div>
    </motion.div>
  );
}
