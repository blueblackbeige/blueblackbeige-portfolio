"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    num: "001",
    name: "Voss & Cairn",
    italicize: "Cairn",
    tags: "Law firm / Brand / Marketing site",
    year: "2026",
    accent: "electric",
    tagColor: "slate",
  },
  {
    num: "002",
    name: "Meridian Legal",
    italicize: "Legal",
    tags: "Law firm / Strategy / Development",
    year: "2026",
    accent: "ink",
    tagColor: "stone",
  },
  {
    num: "003",
    name: "Albright Partners",
    italicize: "Partners",
    tags: "Law firm / Brand / CMS",
    year: "2025",
    accent: "electric",
    tagColor: "slate",
  },
  {
    num: "004",
    name: "Grau Studio",
    italicize: "Studio",
    tags: "Architecture / Portfolio / WebGL",
    year: "2025",
    accent: "ink",
    tagColor: "sage",
  },
  {
    num: "005",
    name: "Sable Table",
    italicize: "Sable",
    tags: "Hospitality / Brand site / CMS",
    year: "2025",
    accent: "electric",
    tagColor: "stone",
  },
  {
    num: "006",
    name: "Atelier Norden",
    italicize: "Atelier",
    tags: "Marketing site / Design / Development",
    year: "2024",
    accent: "ink",
    tagColor: "sage",
  },
  {
    num: "007",
    name: "Loop Finance app",
    italicize: "app",
    tags: "Web app / Dashboard / System",
    year: "2024",
    accent: "electric",
    tagColor: "slate",
  },
  {
    num: "008",
    name: "Reach Wellness",
    italicize: "Wellness",
    tags: "Brand site / E-commerce",
    year: "2024",
    accent: "ink",
    tagColor: "stone",
  },
  {
    num: "009",
    name: "Kura Studio",
    italicize: "Studio",
    tags: "Portfolio / Editorial / WebGL",
    year: "2023",
    accent: "electric",
    tagColor: "sage",
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
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-ink/45">
              <span className="w-8 h-px bg-electric" />
              02 - Work
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-serif font-normal leading-[0.95] tracking-tightest text-ink"
              style={{ fontSize: "clamp(40px, 7vw, 120px)" }}
            >
              Client <span className="italic">work.</span>
            </h2>
          </div>
        </div>

        {/* Project list */}
        <div className="border-t border-ink/10">
          {projects.map((p, i) => (
            <div
              key={p.num}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="grid md:grid-cols-[60px_1fr_auto_80px] gap-6 md:gap-8 items-center py-6 md:py-7 border-b border-ink/10 relative group cursor-default transition-all duration-300 hover:pl-4"
            >
              {/* Left accent bar */}
              <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-electric scale-y-0 origin-bottom group-hover:scale-y-100 group-hover:origin-top transition-transform duration-500" />

              <span className="font-mono text-[11px] text-ink/40">{p.num}</span>

              <div className="flex items-center gap-6">
                <span
                  className="font-serif tracking-tightest leading-none text-ink"
                  style={{ fontSize: "clamp(24px, 2.8vw, 40px)" }}
                >
                  {formatName(p.name, p.italicize)}
                </span>
                <span className={`hidden md:inline-flex items-center px-3 py-1 text-[11px] font-mono tracking-[0.15em] uppercase border ${tagStyles[p.tagColor]}`}>
                  {p.tags.split(" / ")[0]}
                </span>
              </div>

              <span className="font-mono text-[12px] text-ink/40 text-right hidden md:block">
                {p.year}
              </span>

              <span className="text-lg text-right text-ink/30 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink">
                ↗
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col md:flex-row md:items-center justify-between gap-6 pt-10 border-t border-ink/10">
          <div>
            <p className="font-serif italic text-2xl md:text-3xl text-ink tracking-tightest mb-1">
              Your brief, our next project.
            </p>
            <p className="text-ink/50 text-sm">
              Taking on new clients — 3 to 4 projects per quarter.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-ink text-beige text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-electric transition-colors duration-500 shrink-0"
          >
            <span>Brief us</span>
            <span className="text-base leading-none">→</span>
          </a>
        </div>
      </div>

      {/* Cursor preview */}
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
            <span className="font-serif italic text-2xl text-beige/80">
              {projects[hover].name.split(" ")[0]}
            </span>
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-beige/40">
              {projects[hover].tags.split(" / ")[0]}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
