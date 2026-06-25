"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BRUTAL = "#3D0C1E";
const LIVE_GREEN = "#22C55E";

function useCountUp(target: number, duration: number) {
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDone(true);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return { value, done };
}

function StatContent({ value, label }: { value: string; label: string }) {
  return (
    <>
      <div
        className="mb-1.5 h-px w-6"
        style={{ backgroundColor: BRUTAL, opacity: 0.3 }}
      />
      <p className="text-[28px] font-bold leading-none" style={{ color: BRUTAL }}>
        {value}
      </p>
      <p
        className="mt-1 text-[9px] uppercase tracking-[0.18em]"
        style={{ color: BRUTAL, opacity: 0.4 }}
      >
        {label}
      </p>
    </>
  );
}

function FloatingStat({
  value,
  label,
  position,
  delay,
}: {
  value: string;
  label: string;
  position: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`absolute hidden md:block ${position}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      <StatContent value={value} label={label} />
    </motion.div>
  );
}

function LiveIndicator() {
  return (
    <>
      <motion.span
        className="inline-flex h-[7px] w-[7px] rounded-full"
        style={{ backgroundColor: LIVE_GREEN }}
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="text-[10px] tracking-[0.15em]" style={{ color: LIVE_GREEN }}>
        LIVE
      </span>
      <span className="text-[10px]" style={{ color: BRUTAL, opacity: 0.3 }}>
        · updating
      </span>
    </>
  );
}

export function HeroBrutalistScore() {
  const { value: score, done } = useCountUp(87, 1800);

  return (
    <div className="relative mx-auto flex h-full min-h-[320px] w-full max-w-[320px] items-center justify-center overflow-hidden md:mx-0 md:max-w-none md:min-h-[480px]">
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "radial-gradient(circle 300px at 60% 50%, rgba(61,12,30,0.06) 0%, transparent 70%)",
        }}
      />

      <span
        className="pointer-events-none absolute z-0 hidden select-none md:block"
        style={{
          fontSize: "280px",
          fontWeight: 900,
          color: BRUTAL,
          opacity: 0.12,
          letterSpacing: "-0.05em",
          lineHeight: 1,
          right: "-6%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        aria-hidden
      >
        87
      </span>

      <div className="relative z-[1] flex w-full flex-col items-center text-center">
        <div className="inline-flex items-baseline">
          <span
            className="tabular-nums"
            style={{ fontSize: "96px", fontWeight: 800, color: BRUTAL, lineHeight: 1 }}
          >
            {score}
          </span>
          <motion.span
            className="inline-flex items-baseline"
            initial={{ opacity: 0 }}
            animate={{ opacity: done ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span
              className="mx-1"
              style={{ fontSize: "48px", fontWeight: 300, color: BRUTAL, opacity: 0.3 }}
            >
              /
            </span>
            <span
              style={{ fontSize: "48px", fontWeight: 300, color: BRUTAL, opacity: 0.3 }}
            >
              100
            </span>
          </motion.span>
        </div>

        <motion.p
          className="mt-2 text-[10px] uppercase tracking-[0.2em]"
          style={{ color: BRUTAL, opacity: 0.4 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: done ? 0.4 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Community Health Score
        </motion.p>

        <div className="mt-8 flex items-start justify-center gap-12 md:hidden">
          {[
            { value: "12.8k", label: "Members", delay: 0.3 },
            { value: "34.6%", label: "Engagement", delay: 0.5 },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: stat.delay }}
            >
              <StatContent value={stat.value} label={stat.label} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-6 flex items-center justify-center gap-2 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <LiveIndicator />
        </motion.div>
      </div>

      <FloatingStat value="12.8k" label="Members" position="top-[20%] left-[8%]" delay={0.3} />
      <FloatingStat value="34.6%" label="Engagement" position="bottom-[25%] left-[5%]" delay={0.5} />
      <FloatingStat value="+18%" label="Growth" position="top-[18%] right-[12%]" delay={0.7} />

      <motion.div
        className="absolute right-[8%] bottom-[15%] hidden items-center gap-2 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <LiveIndicator />
      </motion.div>
    </div>
  );
}
