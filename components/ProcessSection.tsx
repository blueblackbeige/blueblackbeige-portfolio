"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, Palette, Code2, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    phase: "Week 1–2",
    description:
      "We immerse ourselves in your business, audience and goals. Through workshops, research and competitor analysis, we define a strategy that sets the foundation for everything that follows.",
    icon: Search,
    deliverables: ["Brand Audit", "User Research", "Competitor Analysis", "Strategic Roadmap"],
    outcome: "Full alignment on vision, audience and success metrics before a single pixel is designed.",
  },
  {
    number: "02",
    title: "Design",
    phase: "Week 2–4",
    description:
      "We craft purposeful designs that balance beauty with function. Every screen and interaction is designed to guide users toward meaningful action while reflecting your brand's identity.",
    icon: Palette,
    deliverables: ["Wireframes", "Visual Design", "Interactive Prototype", "Design System"],
    outcome: "A pixel-perfect prototype you can test, share with investors and hand off to developers.",
  },
  {
    number: "03",
    title: "Build",
    phase: "Week 4–8",
    description:
      "We develop scalable, high-performance web products using Next.js and modern stacks. AI-augmented workflows ensure quality and speed without compromise.",
    icon: Code2,
    deliverables: ["Frontend Development", "CMS Integration", "API & Backend", "QA & Testing"],
    outcome: "A production-ready product scoring 100/100 on Lighthouse, secured and optimised for launch.",
  },
  {
    number: "04",
    title: "Grow",
    phase: "Ongoing",
    description:
      "We optimise, iterate and scale your product for long-term success. From analytics to SEO and conversion — we ensure growth compounds well beyond launch day.",
    icon: Rocket,
    deliverables: ["Technical SEO", "Analytics Setup", "CRO Audits", "Growth Strategy"],
    outcome: "Measurable, compounding growth — with a partner who treats your metrics like their own.",
  },
];

export default function ProcessSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative py-20 lg:py-36">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      <div className="max-w-[1440px] mx-auto section-padding">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-end mb-12 lg:mb-24">
          <ScrollReveal>
            <div>
              <span className="text-xs tracking-[0.3em] text-accent-blue font-semibold uppercase mb-5 block">
                Our Process
              </span>
              <h2 className="text-4xl lg:text-6xl font-serif font-medium leading-[1.05]">
                A clear process.
                <br />
                Exceptional results<span className="text-accent-blue">.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div>
              <p className="text-text-secondary text-base leading-relaxed mb-6">
                Every project follows a proven four-phase process that ensures
                alignment, quality and measurable results at each milestone.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-white hover:text-accent-beige transition-colors"
              >
                Start your project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Steps — accordion rows */}
        <div>
          {steps.map((step, i) => {
            const isActive = active === i;
            const Icon = step.icon;

            return (
              <ScrollReveal key={step.number} delay={i * 0.07}>
                <div>
                  <div className="h-px bg-white/[0.06]" />

                  <button
                    onClick={() => setActive(isActive ? null : i)}
                    className="group w-full flex items-center gap-4 lg:gap-10 py-5 lg:py-8 text-left"
                  >
                    {/* Number */}
                    <span className="text-xs tracking-[0.3em] text-text-secondary/30 w-8 flex-shrink-0 group-hover:text-text-secondary/60 transition-colors duration-300">
                      {step.number}
                    </span>

                    {/* Phase badge */}
                    <span className="hidden sm:block text-[10px] tracking-[0.2em] uppercase text-text-secondary/25 border border-white/[0.06] px-2.5 py-1 rounded-full w-24 text-center flex-shrink-0">
                      {step.phase}
                    </span>

                    {/* Title */}
                    <span
                      className={`flex-1 text-xl sm:text-3xl lg:text-[2.5rem] font-serif font-medium leading-none transition-colors duration-300 ${
                        isActive ? "text-white" : "text-white/55 group-hover:text-white/85"
                      }`}
                    >
                      {step.title}
                    </span>

                    {/* Icon hint on hover */}
                    <Icon
                      className="hidden lg:block w-5 h-5 text-text-secondary/15 group-hover:text-text-secondary/40 transition-colors duration-300 flex-shrink-0"
                      strokeWidth={1.5}
                    />

                    {/* Toggle indicator */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-400 ${
                        isActive ? "rotate-45" : ""
                      }`}
                    >
                      <div className="relative w-4 h-4">
                        <span className="absolute top-1/2 left-0 w-full h-px bg-white/30 -translate-y-px group-hover:bg-white/60 transition-colors" />
                        <span
                          className={`absolute top-0 left-1/2 h-full w-px bg-white/30 -translate-x-px group-hover:bg-white/60 transition-all duration-300 ${
                            isActive ? "opacity-0" : "opacity-100"
                          }`}
                        />
                      </div>
                    </div>
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.25, 0, 0, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 lg:pb-14 pl-6 sm:pl-[3.5rem] lg:pl-[7rem]">
                          <div className="grid lg:grid-cols-[1fr_300px] gap-8 lg:gap-16">

                            {/* Description + outcome */}
                            <div>
                              <p className="text-text-secondary text-base lg:text-lg leading-relaxed mb-8">
                                {step.description}
                              </p>
                              <div className="flex items-start gap-3 pt-6 border-t border-white/[0.05]">
                                <div className="w-1 h-1 rounded-full bg-accent-beige/60 mt-2 flex-shrink-0" />
                                <p className="text-sm text-text-secondary/50 italic leading-relaxed">
                                  {step.outcome}
                                </p>
                              </div>
                            </div>

                            {/* Deliverables */}
                            <div>
                              <p className="text-[10px] tracking-[0.3em] text-text-secondary/25 uppercase font-semibold mb-5">
                                Key Deliverables
                              </p>
                              <ul className="space-y-3">
                                {step.deliverables.map((d, di) => (
                                  <li key={d} className="flex items-center gap-3">
                                    <span className="text-[10px] text-text-secondary/25 w-4 font-medium">
                                      {String(di + 1).padStart(2, "0")}
                                    </span>
                                    <span className="h-px flex-1 bg-white/[0.05]" />
                                    <span className="text-sm text-text-secondary/60">{d}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
          <div className="h-px bg-white/[0.06]" />
        </div>
      </div>
    </section>
  );
}
