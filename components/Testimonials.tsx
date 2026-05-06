"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Blue Black Beige completely transformed our online presence. The attention to detail in both design and engineering was unlike anything we'd experienced with other agencies.",
    name: "Rahul Mehta",
    role: "Founder, Meridian Legal",
    project: "Brand & Website",
    rating: 5,
    accent: "electric",
  },
  {
    quote: "They delivered a complex web application two days ahead of schedule. The code quality was production-grade from day one — no corners cut, no technical debt.",
    name: "Ananya Sharma",
    role: "CTO, Loop Finance",
    project: "Web Application",
    rating: 5,
    accent: "sage",
  },
  {
    quote: "Working with BBB felt like having an in-house design team. Direct communication, no middlemen, and they understood our brand vision immediately.",
    name: "James Park",
    role: "Creative Director, Grau Studio",
    project: "Portfolio & WebGL",
    rating: 5,
    accent: "slate",
  },
  {
    quote: "Our conversion rate increased 340% after the redesign. They didn't just make it look good — they made it perform. Every design decision was backed by intent.",
    name: "Priya Desai",
    role: "Head of Marketing, Reach Wellness",
    project: "E-commerce Redesign",
    rating: 5,
    accent: "stone",
  },
];

const accentColors: Record<string, string> = {
  electric: "#2952CC",
  sage: "#7C9A84",
  slate: "#64748B",
  stone: "#A8A29E",
};

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[active];

  return (
    <section className="relative py-32 md:py-40 bg-ink overflow-hidden" data-cursor="light">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="testimonialGrid" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="1" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonialGrid)" />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 relative z-10">

        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-beige/30">
              <span className="w-8 h-px bg-electric" />
              05 — Testimonials
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-serif font-normal leading-[0.95] tracking-tightest text-beige"
              style={{ fontSize: "clamp(40px, 7vw, 100px)" }}
            >
              What our clients{" "}
              <span className="italic" style={{ color: accentColors[t.accent] }}>say.</span>
            </h2>
          </div>
        </div>

        {/* Quote display */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-1">
            {/* Large quote mark */}
            <span
              className="font-serif text-[120px] md:text-[180px] leading-none italic block -mt-8 md:-mt-12"
              style={{ color: accentColors[t.accent], opacity: 0.3 }}
            >
              &ldquo;
            </span>
          </div>

          <div className="col-span-12 md:col-span-8">
            <blockquote
              className="font-serif text-2xl md:text-4xl leading-[1.3] text-beige tracking-tightest mb-12 transition-opacity duration-300"
              style={{ opacity: isAnimating ? 0 : 1 }}
            >
              {t.quote}
            </blockquote>

            {/* Attribution */}
            <div
              className="flex items-center gap-6 transition-opacity duration-300"
              style={{ opacity: isAnimating ? 0 : 1 }}
            >
              {/* Avatar */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-mono text-sm font-bold"
                style={{ background: accentColors[t.accent] }}
              >
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <div className="text-beige font-medium">{t.name}</div>
                <div className="text-beige/50 text-sm">{t.role}</div>
              </div>
              <div className="hidden md:block ml-8 pl-8 border-l border-beige/10">
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-beige/30 mb-1">Project</div>
                <div className="text-beige/60 text-sm">{t.project}</div>
              </div>
              <div className="hidden md:flex ml-8 pl-8 border-l border-beige/10 gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} viewBox="0 0 16 16" className="w-3.5 h-3.5">
                    <path d="M8 1l1.91 3.87 4.27.62-3.09 3.02.73 4.26L8 10.63l-3.82 2.14.73-4.26L1.82 5.49l4.27-.62L8 1z"
                      fill="#2952CC" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="col-span-12 md:col-span-3 flex md:flex-col md:items-end md:justify-center gap-3 mt-12 md:mt-0">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActive(i);
                    setIsAnimating(false);
                  }, 300);
                }}
                className="group flex items-center gap-3"
                aria-label={`View testimonial ${i + 1}`}
              >
                <span className="font-mono text-[10px] text-beige/30 hidden md:block">
                  0{i + 1}
                </span>
                <div
                  className="h-px transition-all duration-500"
                  style={{
                    width: active === i ? 48 : 24,
                    background: active === i ? accentColors[testimonials[i].accent] : "rgba(232,220,196,0.15)",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
