"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const pendulums: Array<{
  left: string;
  delay: number;
  swing: number[];
  shape: "triangle" | "circle" | "square";
}> = [
  { left: "30%", delay: 0, swing: [-17, 14, -17], shape: "triangle" },
  { left: "50%", delay: 0.12, swing: [12, -15, 12], shape: "circle" },
  { left: "70%", delay: 0.24, swing: [-13, 17, -13], shape: "square" },
];

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2800;
    const steps = 80;
    const interval = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 100 / steps;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(() => setLoading(false), 700);
      }
      setCount(Math.round(current));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] overflow-hidden bg-bg-primary text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,193,167,0.07)_0%,rgba(59,91,255,0.055)_34%,rgba(5,5,5,0)_64%)]" />
          <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]" />

          <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-10 text-center">
            <motion.div
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.12, duration: 0.7, ease: [0.25, 0, 0, 1] }}
              className="relative h-[300px] w-full max-w-[520px] sm:h-[360px]"
              aria-label="Loading progress"
              role="status"
            >
              <div className="absolute left-1/2 top-8 h-px w-[min(76vw,460px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute left-1/2 top-6 h-4 w-4 -translate-x-1/2 rounded-full border border-white/15 bg-bg-primary shadow-[0_0_28px_rgba(255,255,255,0.08)]" />

              {pendulums.map((pendulum) => (
                <motion.div
                  key={pendulum.shape}
                  className="absolute top-8 h-[188px] w-px origin-top sm:h-[228px]"
                  style={{ left: pendulum.left }}
                  animate={{ rotate: pendulum.swing }}
                  transition={{
                    delay: pendulum.delay,
                    duration: 1.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-white/28 via-white/14 to-transparent" />
                  <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-white/20" />

                  {pendulum.shape === "triangle" && (
                    <span className="absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2 border-b-[42px] border-l-[25px] border-r-[25px] border-b-accent-blue border-l-transparent border-r-transparent drop-shadow-[0_0_24px_rgba(59,91,255,0.45)] sm:border-b-[50px] sm:border-l-[30px] sm:border-r-[30px]" />
                  )}

                  {pendulum.shape === "circle" && (
                    <span className="absolute bottom-0 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full bg-[#050505] shadow-[0_0_0_2px_rgba(216,193,167,0.42),0_0_28px_rgba(216,193,167,0.14)] sm:h-14 sm:w-14" />
                  )}

                  {pendulum.shape === "square" && (
                    <span className="absolute bottom-1 left-1/2 h-12 w-12 -translate-x-1/2 rotate-12 bg-accent-beige shadow-[0_0_26px_rgba(216,193,167,0.28)] sm:h-14 sm:w-14" />
                  )}
                </motion.div>
              ))}

              <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center">
                <span className="mb-3 text-[9px] font-medium uppercase tracking-[0.42em] text-text-secondary/35">
                  Loading
                </span>
                <span className="font-serif text-[3rem] font-medium leading-none text-white/85 tabular-nums sm:text-[3.7rem]">
                  {String(count).padStart(2, "0")}
                  <span className="ml-1 align-super text-[1rem] font-sans font-semibold text-accent-blue/75 sm:text-[1.25rem]">
                    %
                  </span>
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.65, ease: "easeOut" }}
              className="mt-7 w-full max-w-[440px]"
            >
              <div className="mb-4 flex items-center justify-between gap-5">
                <span className="text-left text-[10px] font-medium uppercase tracking-[0.32em] text-text-secondary/35">
                  Preparing
                </span>
                <span className="text-right text-[10px] font-medium uppercase tracking-[0.32em] text-accent-beige/55">
                  {count === 100 ? "Ready" : "In motion"}
                </span>
              </div>
              <div className="relative h-[3px] overflow-hidden rounded-full bg-white/[0.07]">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent-blue via-white to-accent-beige"
                  initial={{ width: "0%" }}
                  animate={{ width: `${count}%` }}
                  transition={{ duration: 0.08, ease: "linear" }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
