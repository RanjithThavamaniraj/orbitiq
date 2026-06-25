"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      anchors: {
        offset: 68,
      },
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
