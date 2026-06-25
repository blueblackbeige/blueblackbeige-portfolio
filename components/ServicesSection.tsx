"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Target, Layout, Code2, Waves, TrendingUp, Megaphone, Share2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    number: "01",
    title: "Strategy & Branding",
    tagline: "Define before you design.",
    description:
      "We build strong foundations through deep discovery, market positioning and brand identity systems that make your business immediately recognisable and deeply trusted.",
    icon: Target,
    deliverables: ["Brand Identity", "Positioning Strategy", "Visual System", "Brand Guidelines", "Competitor Analysis"],
    result: "Brands that launch with a clear strategy see 2× faster market traction.",
  },
  {
    number: "02",
    title: "Digital Experience",
    tagline: "Design that moves people.",
    description:
      "Human-centred UI/UX crafted to guide users through experiences that feel effortless. Every screen is designed to reduce friction and drive meaningful action.",
    icon: Layout,
    deliverables: ["User Research", "Wireframing", "UI Design", "Prototype & Testing", "Design System"],
    result: "Clients typically see a 40–80% improvement in user engagement post-redesign.",
  },
  {
    number: "03",
    title: "Web Development",
    tagline: "Fast, scalable, future-proof.",
    description:
      "We engineer high-performance web products using Next.js, React and modern stacks — optimised for speed, SEO and scale from day one.",
    icon: Code2,
    deliverables: ["Next.js / React", "CMS Integration", "API Development", "Performance Optimisation", "QA & Testing"],
    result: "100/100 Lighthouse scores. Sub-second load times. Production-grade security.",
  },
  {
    number: "04",
    title: "Motion & Interaction",
    tagline: "Animation that earns attention.",
    description:
      "Purposeful motion design that brings interfaces to life — from micro-interactions to full page transitions — creating moments that elevate your brand story.",
    icon: Waves,
    deliverables: ["Micro-interactions", "Page Transitions", "Scroll Animations", "Lottie / SVG", "Video Direction"],
    result: "Motion-first sites see 35% longer session durations on average.",
  },
  {
    number: "05",
    title: "Growth & Optimisation",
    tagline: "Launch is just the beginning.",
    description:
      "Data-driven SEO, conversion rate optimisation and marketing infrastructure that turns traffic into revenue and keeps compounding over time.",
    icon: TrendingUp,
    deliverables: ["Technical SEO", "CRO Audits", "Analytics Setup", "A/B Testing", "Growth Strategy"],
    result: "Clients on our growth plan see 3× more organic leads within 6 months.",
  },
  {
    number: "06",
    title: "Digital Marketing",
    tagline: "Drive measurable growth.",
    description:
      "Data-driven SEO, Google Ads/PPC, email campaigns, and performance reporting designed to dominate search and maximize ROI.",
    icon: Megaphone,
    deliverables: ["Technical SEO", "Google Ads / PPC", "Email Marketing", "Performance Analytics", "Conversion Tracking"],
    result: "Clients see an average 250% ROI on paid campaigns within the first quarter.",
  },
  {
    number: "07",
    title: "Social Media Marketing",
    tagline: "Build vibrant communities.",
    description:
      "End-to-end social strategy, from viral short-form content (Reels/TikTok) to robust community management and analytics.",
    icon: Share2,
    deliverables: ["Content Strategy", "Reels & Post Production", "Community Management", "Social Analytics", "Influencer Partnerships"],
    result: "Consistent engagement growth and 40% increase in brand awareness metrics.",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (i: number) => setActive(active === i ? null : i);

  return (
    <section id="services" className="relative py-20 lg:py-36">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      <div className="max-w-[1440px] mx-auto section-padding">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 lg:mb-20">
          <ScrollReveal>
            <div>
              <span className="text-xs tracking-[0.3em] text-accent-blue font-semibold uppercase mb-5 block">
                What We Do
              </span>
              <h2 className="text-4xl lg:text-6xl font-serif font-medium leading-[1.05]">
                End-to-end digital
                <br />
                <em className="italic text-white/50 not-italic">craftsmanship</em>
                <span className="text-accent-blue">.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-white transition-colors"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </ScrollReveal>
        </div>

        {/* Accordion rows */}
        <div>
          {services.map((service, i) => {
            const isActive = active === i;
            const Icon = service.icon;

            return (
              <ScrollReveal key={service.number} delay={i * 0.06}>
                <div>
                  {/* Top divider */}
                  <div className="h-px bg-white/[0.07]" />

                  {/* Row button */}
                  <button
                    onClick={() => toggle(i)}
                    className="group w-full flex items-center gap-4 lg:gap-10 py-5 lg:py-7 text-left"
                  >
                    {/* Number */}
                    <span className="text-xs tracking-[0.3em] text-text-secondary/30 font-medium w-8 flex-shrink-0 group-hover:text-text-secondary/60 transition-colors duration-300">
                      {service.number}
                    </span>

                    {/* Title */}
                    <span
                      className={`flex-1 text-xl sm:text-3xl lg:text-[2.5rem] font-serif font-medium leading-none transition-colors duration-400 ${
                        isActive ? "text-white" : "text-white/60 group-hover:text-white/90"
                      }`}
                    >
                      {service.title}
                    </span>

                    {/* Tagline — visible on hover */}
                    <span className="hidden lg:block text-sm text-text-secondary/40 font-light italic max-w-[200px] text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {service.tagline}
                    </span>

                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-9 h-9 lg:w-10 lg:h-10 rounded-full border flex items-center justify-center transition-all duration-400 ${
                        isActive
                          ? "border-accent-blue/40 bg-accent-blue/10 rotate-45"
                          : "border-white/10 group-hover:border-white/25"
                      }`}
                    >
                      <ArrowUpRight
                        className={`w-4 h-4 transition-colors duration-300 ${
                          isActive ? "text-accent-blue" : "text-text-secondary/40 group-hover:text-white/70"
                        }`}
                      />
                    </div>
                  </button>

                  {/* Expanded detail */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.25, 0, 0, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 lg:pb-14 pl-6 sm:pl-[3.5rem] lg:pl-[4.5rem]">
                          <div className="grid lg:grid-cols-[1fr_340px] gap-8 lg:gap-16">

                            {/* Left: description */}
                            <div>
                              <p className="text-sm tracking-[0.2em] text-accent-blue/80 uppercase font-semibold mb-5">
                                {service.tagline}
                              </p>
                              <p className="text-text-secondary text-base lg:text-lg leading-relaxed mb-8 max-w-2xl">
                                {service.description}
                              </p>
                              {/* Result */}
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-px bg-accent-blue/50" />
                                <p className="text-sm text-text-secondary/60 italic">
                                  {service.result}
                                </p>
                              </div>
                            </div>

                            {/* Right: deliverables */}
                            <div>
                              <p className="text-[10px] tracking-[0.3em] text-text-secondary/30 uppercase font-semibold mb-4">
                                Deliverables
                              </p>
                              <ul className="space-y-2.5">
                                {service.deliverables.map((d) => (
                                  <li key={d} className="flex items-center gap-3">
                                    <Icon className="w-3 h-3 text-accent-blue/40 flex-shrink-0" strokeWidth={2} />
                                    <span className="text-sm text-text-secondary/70">{d}</span>
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

          {/* Bottom divider */}
          <div className="h-px bg-white/[0.07]" />
        </div>
      </div>
    </section>
  );
}
