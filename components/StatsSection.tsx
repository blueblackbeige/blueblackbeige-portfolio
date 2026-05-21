"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const stats = [
  {
    value: 90,
    suffix: "+",
    label: "Lighthouse Score",
    sub: "Performance",
  },
  {
    value: 100,
    suffix: "%",
    label: "SEO Best Practices",
    sub: "Rank-ready from day one",
  },
  {
    value: 99,
    suffix: ".9%",
    label: "Uptime Commitment",
    sub: "Always online",
  },
  {
    value: 3,
    suffix: "×",
    label: "Avg. Conversion Uplift",
    sub: "Post-launch results",
  },
];

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.round(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <>
      {count}
      <span className="text-white/25">{suffix}</span>
    </>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-16 lg:py-20">
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08}>
              <div
                className={`py-12 lg:py-16 px-6 lg:px-10 ${
                  i > 0 ? "border-l border-white/[0.06]" : ""
                }`}
              >
                {/* Giant number */}
                <div className="text-5xl sm:text-6xl xl:text-7xl font-serif font-medium tracking-tight text-white leading-none mb-4">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </div>

                {/* Label */}
                <p className="text-sm font-medium text-white/70 mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-text-secondary/40 tracking-wide">
                  {stat.sub}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}
