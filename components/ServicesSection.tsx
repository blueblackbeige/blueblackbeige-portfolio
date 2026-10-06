"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus, Target, Layout, Code2, Waves, TrendingUp, Megaphone, Share2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    number: "01",
    title: "Strategy & Branding",
    image: "/images/services/branding.webp",
    imageAlt: "Sculptural brand materials, stationery and cobalt colour swatches",
    tagline: "Define before you design.",
    description:
      "We build strong foundations through deep discovery, market positioning and brand identity systems that make your business immediately recognisable and deeply trusted.",
    icon: Target,
    deliverables: ["Brand Identity", "Positioning Strategy", "Visual System", "Brand Guidelines", "Competitor Analysis"],
  },
  {
    number: "02",
    title: "Digital Experience",
    image: "/images/services/digital-experience.webp",
    imageAlt: "Layered glass interface panels with tactile controls",
    tagline: "Design that moves people.",
    description:
      "Human-centred UI/UX crafted to guide users through experiences that feel effortless. Every screen is designed to reduce friction and drive meaningful action.",
    icon: Layout,
    deliverables: ["User Research", "Wireframing", "UI Design", "Prototype & Testing", "Design System"],
  },
  {
    number: "03",
    title: "Web Development",
    image: "/images/services/web-development.webp",
    imageAlt: "Modular browser architecture built from blue and ivory blocks",
    tagline: "Built to evolve.",
    description:
      "We engineer high-performance web products using Next.js, React and modern stacks, optimised for speed, SEO and scale from day one.",
    icon: Code2,
    deliverables: ["Next.js / React", "CMS Integration", "API Development", "Performance Optimisation", "QA & Testing"],
  },
  {
    number: "04",
    title: "Motion & Interaction",
    image: "/images/services/motion-interaction.webp",
    imageAlt: "A flowing blue ribbon moving through sculptural metal rings",
    tagline: "Animation that earns attention.",
    description:
      "Purposeful motion design that brings interfaces to life, from micro-interactions to full page transitions, creating moments that elevate your brand story.",
    icon: Waves,
    deliverables: ["Micro-interactions", "Page Transitions", "Scroll Animations", "Lottie / SVG", "Video Direction"],
  },
  {
    number: "05",
    title: "Growth & Optimisation",
    image: "/images/services/growth-optimisation.webp",
    imageAlt: "Rising sculptural columns and a glass magnifying lens",
    tagline: "Launch is just the beginning.",
    description:
      "Data-driven SEO, conversion rate optimisation and marketing infrastructure that turns traffic into revenue and keeps compounding over time.",
    icon: TrendingUp,
    deliverables: ["Technical SEO", "CRO Audits", "Analytics Setup", "A/B Testing", "Growth Strategy"],
  },
  {
    number: "06",
    title: "Digital Marketing",
    image: "/images/services/digital-marketing.webp",
    imageAlt: "A cobalt megaphone surrounded by abstract campaign panels",
    tagline: "Drive measurable growth.",
    description:
      "Connect SEO, Google Ads/PPC, email campaigns and performance reporting to clear audience and business goals.",
    icon: Megaphone,
    deliverables: ["Technical SEO", "Google Ads / PPC", "Email Marketing", "Performance Analytics", "Conversion Tracking"],
  },
  {
    number: "07",
    title: "Social Media Marketing",
    image: "/images/services/social-media.webp",
    imageAlt: "Connected speech bubbles and a glass phone frame",
    tagline: "Build vibrant communities.",
    description:
      "Social strategy, short-form content, community management and analytics shaped around your audience and capacity.",
    icon: Share2,
    deliverables: ["Content Strategy", "Reels & Post Production", "Community Management", "Social Analytics", "Influencer Partnerships"],
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();

  return (
    <section id="services" className="relative py-20 lg:py-36 scroll-mt-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-16">
          <ScrollReveal>
            <span className="text-xs tracking-[0.3em] text-accent-blue font-semibold uppercase mb-5 block">
              What We Do
            </span>
            <h2 className="text-4xl lg:text-6xl font-serif font-medium leading-[1.05]">
              End-to-end digital<br />
              <span className="text-accent-beige">craftsmanship</span>
              <span className="text-accent-blue">.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="lg:max-w-sm">
            <p className="text-text-secondary text-base leading-relaxed mb-5">
              From your first brand idea to your next stage of growth, we bring
              strategy, design, technology and marketing together.
            </p>
            <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-medium text-white hover:text-accent-beige transition-colors">
              Start a Project
              <ArrowUpRight aria-hidden="true" className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </ScrollReveal>
        </div>

        <div className="border-t border-white/10">
          {services.map((service, i) => {
            const isActive = active === i;
            const Icon = service.icon;
            const serviceHref = i === 0 ? "/services" : i <= 3 ? "/web-design-development" : i === 4 ? "/seo-organic-growth" : "/digital-marketing";
            const panelId = `service-details-${service.number}`;
            const buttonId = `service-toggle-${service.number}`;

            return (
              <ScrollReveal key={service.number}>
                <article className="grid md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.5fr)] gap-6 md:gap-10 lg:gap-14 py-8 lg:py-10 border-b border-white/10">
                  <div className="relative aspect-[3/2] self-start overflow-hidden rounded-2xl border border-white/10 bg-[#101114]">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 35vw, 420px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 md:py-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs tracking-[0.15em] text-accent-beige font-medium">{service.number}</span>
                      <span className="w-6 h-px bg-white/20" />
                      <p className="text-xs sm:text-sm text-text-secondary">{service.tagline}</p>
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium leading-tight text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                    <Link href={serviceHref} className="mt-3 inline-flex items-center gap-2 text-sm text-accent-beige hover:text-white transition-colors">
                      Explore {service.title.toLowerCase()} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                    <button
                      id={buttonId}
                      type="button"
                      aria-label={`${isActive ? "Hide" : "Show"} ${service.title} deliverables`}
                      aria-expanded={isActive}
                      aria-controls={panelId}
                      onClick={() => setActive(isActive ? null : i)}
                      className="group mt-5 inline-flex min-h-11 items-center gap-3 rounded-lg text-sm font-medium text-white hover:text-accent-beige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-blue transition-colors"
                    >
                      {isActive ? "Hide deliverables" : "What's included"}
                      <Plus aria-hidden="true" className={`w-4 h-4 transition-transform motion-reduce:transition-none ${isActive ? "rotate-45" : ""}`} />
                    </button>
                    <div id={panelId} role="region" aria-labelledby={buttonId}>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: reducedMotion ? 0 : 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 pb-1">
                              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                                {service.deliverables.map((deliverable) => (
                                  <li key={deliverable} className="flex items-center gap-2.5 text-sm text-text-secondary">
                                    <Icon aria-hidden="true" className="w-3.5 h-3.5 text-accent-beige shrink-0" />
                                    {deliverable}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
