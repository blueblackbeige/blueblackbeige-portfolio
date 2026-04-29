"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headlineRef.current) {
      const lines = headlineRef.current.querySelectorAll(".reveal-line");
      lines.forEach((line, i) => {
        setTimeout(() => line.classList.add("visible"), 200 + i * 150);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute top-0 left-1/4 w-px h-full bg-ink" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-ink" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-ink" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-8 z-10">
        {/* Top meta row */}
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24 fade-up visible">
          <div className="col-span-12 md:col-span-3">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink/60">
              Studio · Est. 2026
            </span>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:text-right">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink/60">
              ◉ Available — Booking Q3
            </span>
          </div>
        </div>

        {/* Main headline */}
        <h1
          ref={headlineRef}
          className="font-serif font-normal leading-[0.92] tracking-tightest text-ink"
          style={{ fontSize: "clamp(56px, 11vw, 200px)" }}
        >
          <span className="reveal-line">
            <span>Three colours.</span>
          </span>
          <span className="reveal-line">
            <span className="italic">One studio.</span>
          </span>
          <span className="reveal-line">
            <span>
              Built <span className="text-electric italic">on time.</span>
            </span>
          </span>
        </h1>

        {/* Bottom row */}
        <div className="grid grid-cols-12 gap-6 mt-16 md:mt-28 items-end">
          {/* Left intro */}
          <div className="col-span-12 md:col-span-5 fade-up" style={{ transitionDelay: "0.7s" }}>
            <p className="text-lg md:text-xl leading-relaxed text-ink/75 max-w-md">
              Blue Black Beige is a small studio working at the intersection
              of design and engineering. We build digital products with
              restraint — and ship them when promised.
            </p>
          </div>

          {/* Center spacer */}
          <div className="hidden md:block md:col-span-2" />

          {/* Right meta + CTAs */}
          <div className="col-span-12 md:col-span-5 fade-up" style={{ transitionDelay: "0.9s" }}>
            <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-ink/15">
              <div>
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink/60 mb-2">
                  Founded
                </div>
                <div className="font-serif text-2xl text-ink">2026</div>
              </div>
              <div>
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink/60 mb-2">
                  Based
                </div>
                <div className="font-serif text-2xl text-ink">PATNA</div>
              </div>
              <div>
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink/60 mb-2">
                  Team
                </div>
                <div className="font-serif text-2xl text-ink">03</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-7 py-4 bg-ink text-beige text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-electric transition-colors duration-500"
              >
                <span>Start a project</span>
                <span className="text-base leading-none">→</span>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-3 px-7 py-4 border border-ink text-ink text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-ink hover:text-beige transition-all duration-500"
              >
                <span>See work</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 hidden md:flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60">
        <div className="w-px h-12 bg-ink/30" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
