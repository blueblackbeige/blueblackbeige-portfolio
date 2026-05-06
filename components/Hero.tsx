"use client";

import { useEffect, useRef, useState } from "react";

// Animated SVG graphic that builds trust — geometric precision = design precision
function HeroGraphic() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 800); }, []);

  return (
    <div className="absolute top-24 right-0 w-[40vw] max-w-[600px] h-[80vh] pointer-events-none hidden lg:block"
      style={{ opacity: mounted ? 0.06 : 0, transition: "opacity 2s ease" }}
    >
      <svg viewBox="0 0 500 700" fill="none" className="w-full h-full">
        {/* Large rotating circle */}
        <circle cx="300" cy="350" r="200" stroke="#2952CC" strokeWidth="0.5"
          style={{ animation: "spinSlow 30s linear infinite" }} />
        <circle cx="300" cy="350" r="160" stroke="#8B7349" strokeWidth="0.5"
          style={{ animation: "spinSlow 25s linear infinite reverse" }} />
        {/* Grid of dots */}
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 6 }).map((_, col) => (
            <circle key={`${row}-${col}`} cx={100 + col * 60} cy={100 + row * 70} r="1.5"
              fill="#0A0A0A" opacity="0.15" />
          ))
        )}
        {/* Diagonal slash */}
        <line x1="50" y1="600" x2="450" y2="100" stroke="#0A0A0A" strokeWidth="0.3" opacity="0.12" />
        <line x1="80" y1="600" x2="480" y2="100" stroke="#2952CC" strokeWidth="0.3" opacity="0.08" />
      </svg>
    </div>
  );
}

// Trust numbers that count up
function CountUp({ end, suffix = "", delay = 0 }: { end: number; suffix?: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const t = setTimeout(() => {
      let start = 0;
      const dur = 1800;
      const startTime = Date.now();
      const tick = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(1, elapsed / dur);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * end));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(t);
  }, [end, delay]);
  return <span ref={ref}>{count}{suffix}</span>;
}

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
      {/* Background graphic */}
      <HeroGraphic />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
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
            <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase text-sage-dark">
              <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
              Available — Booking now
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
            <span>We design &amp;</span>
          </span>
          <span className="reveal-line">
            <span className="italic">build websites</span>
          </span>
          <span className="reveal-line">
            <span>
              that <span className="text-electric italic">convert.</span>
            </span>
          </span>
        </h1>

        {/* Bottom row */}
        <div className="grid grid-cols-12 gap-6 mt-16 md:mt-28 items-end">
          {/* Left intro — keyword-rich, trust-building copy */}
          <div className="col-span-12 md:col-span-5 fade-up visible" style={{ transitionDelay: "0.7s" }}>
            <p className="text-lg md:text-xl leading-relaxed text-ink/75 max-w-md">
              Blue Black Beige is a design and development agency specializing in
              premium websites, web applications, and brand identities. We work with
              founders and growing companies worldwide — delivering pixel-perfect
              results, on time, every time.
            </p>
          </div>

          {/* Center spacer */}
          <div className="hidden md:block md:col-span-2" />

          {/* Right — trust metrics + CTAs */}
          <div className="col-span-12 md:col-span-5 fade-up visible" style={{ transitionDelay: "0.9s" }}>
            {/* Trust numbers grid */}
            <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-ink/15">
              <div>
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink/50 mb-2">
                  Projects
                </div>
                <div className="font-serif text-3xl text-ink">
                  <CountUp end={40} suffix="+" delay={1200} />
                </div>
              </div>
              <div>
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink/50 mb-2">
                  Clients
                </div>
                <div className="font-serif text-3xl text-ink">
                  <CountUp end={25} suffix="+" delay={1400} />
                </div>
              </div>
              <div>
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink/50 mb-2">
                  On-time
                </div>
                <div className="font-serif text-3xl text-electric">
                  <CountUp end={100} suffix="%" delay={1600} />
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2 px-3 py-1.5 border border-ink/10 bg-beige-light">
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                  <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.28l-4.77 2.44.91-5.33L2.27 6.62l5.34-.78L10 1z"
                    fill="#2952CC" />
                </svg>
                <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-ink/60">5.0 Rated</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 border border-ink/10 bg-beige-light">
                <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-ink/60">Verified Studio</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-7 py-4 bg-ink text-beige text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-electric transition-colors duration-500 group"
              >
                <span>Start a project</span>
                <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-3 px-7 py-4 border border-ink text-ink text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-ink hover:text-beige transition-all duration-500"
              >
                <span>See our work</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 hidden md:flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase text-ink/50">
        <div className="w-px h-12 bg-ink/20 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-full bg-electric" style={{ animation: "scrollLine 2s ease-in-out infinite" }} />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
