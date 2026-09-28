"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { featuredProjects } from "@/data/projects";
import MarketingPreview from "./MarketingPreview";

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
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-white transition-colors"
            >
              View All Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Preview grid */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 mb-10 lg:mb-12">
          {featuredProjects.map((item, i) => (
            <ScrollReveal key={item.image} delay={i * 0.08} className="h-full">
              <Link
                href={`/work#${item.title.toLowerCase().replaceAll(" ", "-")}`}
                className="group relative block h-full rounded-2xl overflow-hidden border border-white/[0.06] bg-bg-secondary/20 hover:border-white/20 transition-all duration-500"
              >
                <div className="relative aspect-[2/1] bg-white/5 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.title} website homepage`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 lg:p-6">
                  <span className="text-[10px] tracking-[0.25em] text-accent-blue font-semibold uppercase mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-lg lg:text-xl font-serif font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <MarketingPreview />

        <ScrollReveal delay={0.2}>
          <div className="flex justify-center">
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 px-7 py-3.5 border border-white/15 rounded-full text-sm font-medium text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
            >
              View Full Portfolio
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
