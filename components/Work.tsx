"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    num: "001",
    name: "Brand identity project",
    italicize: "identity",
    tags: "Brand identity / Web design",
    year: "2026",
    accent: "electric",
    tagColor: "sage",
    comingSoon: true,
  },
  {
    num: "002",
    name: "Web application",
    italicize: "application",
    tags: "Web app / Design system",
    year: "2026",
    accent: "ink",
    tagColor: "slate",
    comingSoon: true,
  },
  {
    num: "003",
    name: "E-commerce platform",
    italicize: "platform",
    tags: "E-commerce / Frontend",
    year: "2026",
    accent: "electric",
    tagColor: "stone",
    comingSoon: true,
  },
  {
    num: "004",
    name: "Marketing website",
    italicize: "website",
    tags: "Brand site / Motion",
    year: "2026",
    accent: "ink",
    tagColor: "sage",
    comingSoon: true,
  },
  {
    num: "005",
    name: "Design system",
    italicize: "system",
    tags: "Design system / Docs",
    year: "2026",
    accent: "electric",
    tagColor: "slate",
    comingSoon: true,
  },
  {
    num: "006",
    name: "Full-stack product",
    italicize: "product",
    tags: "SaaS / Engineering",
    year: "2026",
    accent: "ink",
    tagColor: "stone",
    comingSoon: true,
  },
];

const previewBg: Record<string, string> = {
  electric: "#2952CC",
  ink:      "#0A0A0A",
};

const tagStyles: Record<string, string> = {
  sage:  "bg-sage-subtle  text-sage-dark  border-sage/30",
  slate: "bg-slate-subtle text-slate-dark border-slate/30",
  stone: "bg-stone-subtle text-stone-dark border-stone/30",
};

function formatName(name: string, italicize: string) {
  const parts = name.split(italicize);
  return (
    <>
      {parts[0]}
      <em className="italic">{italicize}</em>
      {parts[1]}
    </>
  );
}

export default function Work() {
  const [hover, setHover] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (previewRef.current) {
        previewRef.current.style.left = e.clientX + "px";
        previewRef.current.style.top  = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section id="work" className="relative py-32 md:py-48 fade-up">
      <div className="max-w-[1600px] mx-auto px-8">

        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-stone">
              <span className="w-8 h-px bg-electric" />
              02 — Work
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-serif font-normal leading-[0.95] tracking-tightest text-ink"
              style={{ fontSize: "clamp(40px, 7vw, 120px)" }}
            >
              Selected <span className="italic">projects.</span>
            </h2>
          </div>
        </div>

        {/* Notice banner */}
        <div className="col-span-12 mb-16 flex items-center gap-4 px-6 py-4 bg-electric/5 border border-electric/15">
          <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse shrink-0" />
          <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-electric/80">
            Currently building our portfolio — client work coming soon.
            We&apos;re open to new projects and collaborations.
          </p>
          <a
            href="#contact"
            className="ml-auto shrink-0 font-mono text-[11px] tracking-[0.15em] uppercase text-electric underline underline-offset-4 hover:text-electric/70 transition-colors"
          >
            Work with us →
          </a>
        </div>

        {/* Project list */}
        <div className="border-t border-stone-light">
          {projects.map((p, i) => (
            <div
              key={p.num}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="grid md:grid-cols-[60px_1fr_auto_auto_120px] gap-6 md:gap-8 items-center py-6 md:py-7 border-b border-stone-light relative group cursor-default"
            >
              <span className="font-mono text-[11px] text-stone">{p.num}</span>

              {/* Name */}
              <span
                className="font-serif tracking-tightest leading-none text-ink/40"
                style={{ fontSize: "clamp(24px, 2.8vw, 40px)" }}
              >
                {formatName(p.name, p.italicize)}
              </span>

              {/* Tag chip */}
              <span className={`hidden md:inline-flex items-center px-3 py-1 text-[11px] font-mono tracking-[0.15em] uppercase border opacity-50 ${tagStyles[p.tagColor]}`}>
                {p.tags.split(" / ")[0]}
              </span>

              {/* Coming Soon pill */}
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-beige-dark/10 border border-beige-dark/20">
                <span className="w-1 h-1 rounded-full bg-beige-dark" />
                <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-beige-dark">
                  Coming soon
                </span>
              </span>

              {/* Year */}
              <span className="font-mono text-[12px] text-stone text-right hidden md:block">
                {p.year}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col md:flex-row md:items-center justify-between gap-6 pt-10 border-t border-stone-light">
          <div>
            <p className="font-serif italic text-2xl md:text-3xl text-ink tracking-tightest mb-1">
              Your project could be first.
            </p>
            <p className="text-stone text-sm">
              We&apos;re actively taking on clients for Q3 2026.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-ink text-beige text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-electric transition-colors duration-500 shrink-0"
          >
            <span>Start a project</span>
            <span className="text-base leading-none">→</span>
          </a>
        </div>
      </div>

      {/* Cursor preview — still shows on hover */}
      <div
        ref={previewRef}
        className={`fixed w-[260px] h-[300px] pointer-events-none z-[80] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          hover !== null ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ boxShadow: "0 30px 60px rgba(10,10,10,0.15)" }}
      >
        {hover !== null && (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{ background: previewBg[projects[hover].accent] }}
          >
            <span className="font-serif italic text-2xl text-beige/60">
              {projects[hover].tags.split(" / ")[0]}
            </span>
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-beige/40">
              Coming soon
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
