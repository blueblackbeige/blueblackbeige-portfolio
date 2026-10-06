"use client";

import { ArrowRight, Sparkles, Globe, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const values = [
  {
    icon: Sparkles,
    title: "Craft-first",
    description:
      "Every pixel is intentional. We treat design as a discipline, not a decoration.",
  },
  {
    icon: Globe,
    title: "India-wide perspective",
    description:
      "We shape each digital experience around its customers, sector and local context.",
  },
  {
    icon: Zap,
    title: "Thoughtful delivery",
    description:
      "We use modern tools where they fit and review the work against agreed project requirements.",
  },
];

const team = [
  {
    name: "Marketing Team",
    role: "Strategy, Growth & Partnerships",
    initials: "MR",
  },
  {
    name: "Design Team",
    role: "UI/UX & Motion",
    initials: "DT",
  },
  {
    name: "Dev Team",
    role: "Engineering & Growth",
    initials: "DV",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 lg:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-beige/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto section-padding">
        {/* Top: label + headline */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-12 lg:mb-20 items-end">
          <ScrollReveal>
            <div>
              <span className="text-xs tracking-[0.3em] text-accent-blue font-semibold uppercase mb-5 block">
                Who We Are
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-serif font-medium leading-[1.1] tracking-tight">
                A studio built for
                <br />
                <em className="italic text-accent-beige not-italic">
                  ambitious
                </em>{" "}
                brands
                <span className="text-accent-blue">.</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="space-y-4 lg:max-w-lg">
              <p className="text-text-secondary text-base leading-relaxed">
                Blue Black Beige is an AI-powered digital studio based in
                Patna, India. We work with founders, startups and established
                brands across the country to plan and create digital products,
                websites and marketing experiences.
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                Our process brings strategy, design, development and marketing
                together around the audience and goals of each project.
              </p>
              <div className="flex gap-6 mt-4">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-white hover:text-accent-beige transition-colors"
                >
                  Read our story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-white transition-colors"
                >
                  Work with us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Studio image + stats bar */}
        <ScrollReveal>
          <div className="relative rounded-2xl overflow-hidden luxury-border mb-12 lg:mb-20">
            <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/7]">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
                alt="Shared creative workspace with desks and seating"
                fill
                className="object-cover"
                sizes="(max-width: 1440px) 100vw, 1440px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-bg-primary/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/60 via-transparent to-transparent" />
            </div>

            {/* Floating stat pills */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap gap-2 sm:gap-3">
              {[
                { value: "Patna", label: "Studio base" },
                { value: "India", label: "Working across" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-bg-primary/70 backdrop-blur-md border border-white/10"
                >
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {item.value}
                  </span>
                  <span className="text-[10px] sm:text-xs text-text-secondary">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Values + Team */}
        <div className="grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-16">
          {/* Values */}
          <div>
            <ScrollReveal>
              <h3 className="text-xs tracking-[0.3em] text-text-secondary/60 font-semibold uppercase mb-8">
                Our Values
              </h3>
            </ScrollReveal>
            <div className="grid sm:grid-cols-3 gap-5">
              {values.map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 0.1}>
                  <div className="group luxury-border rounded-xl p-6 bg-bg-secondary/20 hover:bg-bg-secondary/40 hover:border-accent-blue/15 transition-all duration-500 h-full">
                    <v.icon
                      className="w-6 h-6 text-accent-blue/50 group-hover:text-accent-blue/80 mb-4 transition-colors"
                      strokeWidth={1.5}
                    />
                    <h4 className="text-sm font-semibold text-white mb-2">
                      {v.title}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Team */}
          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="text-xs tracking-[0.3em] text-text-secondary/60 font-semibold uppercase mb-8">
                The Team
              </h3>
              <div className="space-y-4">
                {team.map((member) => (
                  <div
                    key={member.name}
                    className="flex items-center gap-4 luxury-border rounded-xl p-4 bg-bg-secondary/20 hover:bg-bg-secondary/40 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue/30 to-accent-beige/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-semibold text-white">
                        {member.initials}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {member.name}
                      </p>
                      <p className="text-xs text-text-secondary">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
