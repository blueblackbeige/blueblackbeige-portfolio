"use client";

import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const placeholders = [
  {
    number: "01",
    category: "B2B Platform",
    tags: ["Strategy", "Web Dev", "UI/UX"],
  },
  {
    number: "02",
    category: "Fintech / Web App",
    tags: ["UI/UX", "Motion", "Dev"],
  },
  {
    number: "03",
    category: "Luxury E-Commerce",
    tags: ["Branding", "UI/UX", "Dev"],
  },
];

export default function FeaturedProjects() {
  return (
    <section id="work" className="relative py-20 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      <div className="max-w-[1440px] mx-auto section-padding">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
          <ScrollReveal>
            <div>
              <span className="text-xs tracking-[0.3em] text-accent-blue font-semibold uppercase mb-5 block">
                Featured Work
              </span>
              <h2 className="text-4xl lg:text-6xl font-serif font-medium leading-[1.05]">
                Selected
                <br />
                Projects<span className="text-accent-blue">.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-white transition-colors"
            >
              Work with us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </ScrollReveal>
        </div>

        {/* Featured hero — coming soon */}
        <ScrollReveal>
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-bg-secondary/20 mb-5 aspect-[3/2] sm:aspect-[16/9] lg:aspect-[16/7]">
            {/* Ambient glow inside card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent-blue/[0.06] rounded-full blur-[120px]" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-8">
              {/* Coming soon pill */}
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-accent-blue/25 bg-accent-blue/[0.06] mb-5 sm:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-glow-pulse" />
                <span className="text-[9px] sm:text-[10px] tracking-[0.3em] text-accent-blue font-semibold uppercase">
                  Case studies coming soon
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl lg:text-6xl font-serif font-medium text-white/80 mb-3 sm:mb-4 leading-tight">
                Our work speaks
                <br />
                for itself<span className="text-accent-blue">.</span>
              </h3>
              <p className="text-text-secondary/60 text-xs sm:text-sm lg:text-base max-w-xs sm:max-w-md leading-relaxed mb-5 sm:mb-8">
                Detailed case studies with results, process and deliverables are
                being prepared. Reach out to see portfolio samples directly.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-white/15 rounded-full text-sm font-medium text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              >
                Request Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Decorative corner numbers */}
            <span className="absolute top-6 left-8 text-xs tracking-[0.3em] text-white/10 font-sans">
              01
            </span>
            <span className="absolute bottom-6 right-8 text-[6rem] font-serif font-medium text-white/[0.02] leading-none select-none">
              ★
            </span>
          </div>
        </ScrollReveal>

        {/* Placeholder rows */}
        <div>
          {placeholders.map((p, i) => (
            <ScrollReveal key={p.number} delay={i * 0.08}>
              <div>
                <div className="h-px bg-white/[0.05]" />
                <div className="flex items-center gap-4 lg:gap-10 py-5 lg:py-7">
                  {/* Number */}
                  <span className="text-xs tracking-[0.3em] text-text-secondary/20 w-8 flex-shrink-0">
                    {p.number}
                  </span>

                  {/* Placeholder image slot */}
                  <div className="w-14 h-10 lg:w-20 lg:h-14 rounded-lg flex-shrink-0 bg-white/[0.03] border border-white/[0.04] flex items-center justify-center">
                    <span className="text-[8px] tracking-[0.2em] text-white/15 uppercase font-sans">Soon</span>
                  </div>

                  {/* Name placeholder */}
                  <div className="flex-1 min-w-0">
                    <div className="h-4 w-28 sm:w-36 rounded bg-white/[0.04] mb-2" />
                    <div className="h-2.5 w-36 sm:w-52 rounded bg-white/[0.025]" />
                  </div>

                  {/* Category + tags */}
                  <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
                    <span className="text-xs tracking-[0.15em] text-text-secondary/25 uppercase">
                      {p.category}
                    </span>
                    <div className="flex gap-2">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] tracking-[0.1em] uppercase text-white/15 px-2 py-0.5 rounded border border-white/[0.05]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Coming soon badge */}
                  <div className="flex-shrink-0 px-2.5 sm:px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">
                    <span className="text-[9px] tracking-[0.2em] text-text-secondary/30 uppercase font-sans">
                      Coming soon
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
          <div className="h-px bg-white/[0.05]" />
        </div>
      </div>
    </section>
  );
}
