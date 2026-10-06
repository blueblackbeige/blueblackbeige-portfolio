"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Clock } from "lucide-react";
import ArticleShareLinks from "@/components/ArticleShareLinks";

export default function Blog2() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <main className="bg-bg-primary min-h-screen text-text-primary selection:bg-accent-blue/30">
      <Navbar />
      
      {/* Editorial Header */}
      <article className="pt-24 pb-16 sm:pt-32 sm:pb-24 max-w-[1440px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-xs tracking-[0.2em] text-accent-beige font-semibold uppercase">
              Technology
            </span>
            <span className="w-1 h-1 rounded-full bg-text-secondary/30" />
            <span className="flex items-center gap-1.5 text-xs text-text-secondary uppercase tracking-widest">
              <Clock className="w-3.5 h-3.5" />
              5 min read
            </span>
          </div>
          
          <h1 className="text-[2.1rem] xs:text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.15] md:leading-[1.1] mb-6 sm:mb-8">
            Predictive Optimization <br className="hidden md:block"/> for Digital Experiences
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary font-serif italic max-w-2xl mx-auto">
            Where automation may help experimentation—and where careful measurement and human review remain necessary.
          </p>
        </motion.div>

        {/* Hero Image with Parallax */}
        <div ref={containerRef} className="relative w-full aspect-[4/3] sm:aspect-[21/9] md:aspect-[2.5/1] rounded-3xl overflow-hidden mb-14 sm:mb-24 luxury-border">
          <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop"
              alt="Predictive Optimization"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
        </div>
        
        {/* Two-Column Reading Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 relative max-w-6xl mx-auto">
          
          {/* Sticky Sidebar */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32 flex flex-col gap-10">
              <Link href="/blog" className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-text-secondary hover:text-white transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
              
              <div className="h-px w-full bg-border-subtle" />
              
              <div>
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-4">Share Article</p>
                <ArticleShareLinks url="https://blueblackbeige.in/blog/predictive-optimization" title="Predictive Optimization for Digital Experiences" />
              </div>
            </div>
          </div>

          {/* Main Prose Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-invert prose-base sm:prose-lg md:prose-xl max-w-none 
              prose-p:text-text-secondary prose-p:leading-relaxed
              prose-headings:font-serif prose-headings:font-medium prose-headings:text-white
              prose-h2:text-2xl sm:prose-h2:text-4xl prose-h2:mt-10 sm:prose-h2:mt-16 prose-h2:mb-5 sm:prose-h2:mb-8
              prose-a:text-accent-blue hover:prose-a:text-accent-beige prose-a:transition-colors
              prose-blockquote:border-l-accent-blue prose-blockquote:bg-bg-secondary/30 prose-blockquote:p-5 sm:prose-blockquote:p-8 prose-blockquote:rounded-r-2xl prose-blockquote:my-8 sm:prose-blockquote:my-12 prose-blockquote:font-serif prose-blockquote:text-lg sm:prose-blockquote:text-2xl prose-blockquote:leading-snug prose-blockquote:not-italic
              prose-li:text-text-secondary prose-li:marker:text-accent-blue
              first-letter:float-left first-letter:text-5xl sm:first-letter:text-7xl first-letter:pr-3 sm:first-letter:pr-4 first-letter:font-serif first-letter:text-white first-letter:mt-1 sm:first-letter:mt-2 first-letter:leading-[0.8]
            ">
              <p>
                Teams use experimentation to compare changes to a digital experience. Automation can assist with analysis and workflow tasks, but performance claims depend on the particular system, experiment design and data quality.
              </p>
              
              <h2>The Limitation of Traditional Testing</h2>
              <p>
                A useful controlled test starts with a clear hypothesis, a defined audience and a measure tied to the business goal. Duration depends on traffic, variance and the size of the effect being measured; teams should avoid declaring a winner before the evidence is sufficient.
              </p>

              <p>Traditional experiments can take time and enough eligible traffic to distinguish meaningful differences. Automated tools may help teams prioritise analysis or test variations, but they do not make every experiment real-time or eliminate the need for sound measurement.</p>
              <h2>Where automation may help</h2>
              <p>
                More autonomous systems may monitor allowed product signals and suggest or apply changes within set rules. Teams need human oversight, privacy safeguards, logging and a way to reverse changes. The actual capabilities depend on the tools and integrations in use.
              </p>
              
              <blockquote>
                Automated recommendations still need a valid measurement plan, safe rollout and human review.
              </blockquote>
              
              <h2>Hyper-Personalized Journeys</h2>
              <p>
                Personalisation can adapt content to a user segment or context when the business has a valid use case and appropriate consent. Avoid inferring sensitive traits, making unsupported assumptions from sparse behaviour or changing a page in ways that reduce user control.
              </p>

              <p>Conversion charts should use real, documented experiment data. There is no customer or Blue Black Beige performance result represented on this page.</p>

              <ul>
                <li><strong>Variation review:</strong> Teams can draft and compare page or copy options before choosing whether to test them.</li>
                <li><strong>Audience-aware content:</strong> Any adaptation should use appropriate signals, respect privacy choices and remain useful to the visitor.</li>
                <li><strong>Careful measurement:</strong> Test changes against a defined outcome and avoid claiming a lift without reliable evidence.</li>
              </ul>
              
              <p>
                Predictive and generative tools continue to evolve. Before using one in a customer journey, teams should check whether it solves a real problem, how it uses data, how changes are measured and how a person can review or reverse them.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Next Article CTA */}
      <section className="py-16 sm:py-24 border-t border-border-subtle bg-bg-secondary/10 hover:bg-bg-secondary/30 transition-colors duration-500 group">
        <Link href="/blog/ai-augmented-director" className="block max-w-[1440px] mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.3em] font-semibold uppercase text-text-secondary group-hover:text-accent-beige transition-colors mb-6 block">
            Previous Article
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-medium text-white group-hover:text-accent-blue transition-colors duration-500 max-w-4xl mx-auto">
            The AI-Augmented Director
          </h2>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
