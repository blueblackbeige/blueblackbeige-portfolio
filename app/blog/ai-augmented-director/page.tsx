"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Clock } from "lucide-react";
import ArticleShareLinks from "@/components/ArticleShareLinks";

export default function Blog1() {
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
            <span className="text-xs tracking-[0.2em] text-accent-blue font-semibold uppercase">
              Design & Future
            </span>
            <span className="w-1 h-1 rounded-full bg-text-secondary/30" />
            <span className="flex items-center gap-1.5 text-xs text-text-secondary uppercase tracking-widest">
              <Clock className="w-3.5 h-3.5" />
              6 min read
            </span>
          </div>
          
          <h1 className="text-[2.25rem] xs:text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.15] md:leading-[1.1] mb-6 sm:mb-8">
            The AI-Augmented <br className="hidden md:block"/> Director
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary font-serif italic max-w-2xl mx-auto">
            How designers are evolving in 2025, moving from pixel builders to system directors.
          </p>
        </motion.div>

        {/* Hero Image with Parallax */}
        <div ref={containerRef} className="relative w-full aspect-[4/3] sm:aspect-[21/9] md:aspect-[2.5/1] rounded-3xl overflow-hidden mb-14 sm:mb-24 luxury-border">
          <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <Image
              src="/images/blog/digital-strategy-hero.png"
              alt="AI augmenting design"
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
                <ArticleShareLinks url="https://blueblackbeige.in/blog/ai-augmented-director" title="The AI-Augmented Director" />
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
              prose-blockquote:border-l-accent-beige prose-blockquote:bg-bg-secondary/30 prose-blockquote:p-5 sm:prose-blockquote:p-8 prose-blockquote:rounded-r-2xl prose-blockquote:my-8 sm:prose-blockquote:my-12 prose-blockquote:font-serif prose-blockquote:text-lg sm:prose-blockquote:text-2xl prose-blockquote:leading-snug prose-blockquote:not-italic
              first-letter:float-left first-letter:text-5xl sm:first-letter:text-7xl first-letter:pr-3 sm:first-letter:pr-4 first-letter:font-serif first-letter:text-white first-letter:mt-1 sm:first-letter:mt-2 first-letter:leading-[0.8]
            ">
              <p>
                AI tools are becoming part of some design and development workflows. Their usefulness depends on the task, the quality of the output and the review a team applies before anything reaches a customer.
              </p>
              
              <h2>From Builder to Director</h2>
              <p>
                AI can help a designer explore layout or copy options, but it does not replace user research, design decisions, accessibility checks or implementation review. A more useful role for the designer is to direct the work, verify suggestions and make the experience fit its audience.
              </p>
              
              <p>AI can support draft generation, variant exploration and routine production tasks. Teams still need to check originality, accessibility, facts, brand fit and implementation quality. The time saved varies by team, tools and scope, so it should be measured on real projects rather than assumed.</p>
              <h2>The Human Touch Advantage</h2>
              <p>
                Generated drafts can be useful starting points, but they may also repeat familiar patterns or miss important context. A clear brief and careful review help a team decide what to keep, change or discard.
              </p>

              

              <p>
                AI tools can assist with parts of a workflow; people remain responsible for the final design, facts, accessibility and user experience.
              </p>
              
              <p>
                For a digital product, choose AI-assisted techniques only when they improve the user experience and can be maintained. Review generated copy and visuals for accuracy, rights, accessibility, privacy and brand fit before publication.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Next Article CTA */}
      <section className="py-16 sm:py-24 border-t border-border-subtle bg-bg-secondary/10 hover:bg-bg-secondary/30 transition-colors duration-500 group">
        <Link href="/blog/predictive-optimization" className="block max-w-[1440px] mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.3em] font-semibold uppercase text-text-secondary group-hover:text-accent-blue transition-colors mb-6 block">
            Next Article
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-medium text-white group-hover:text-accent-beige transition-colors duration-500 max-w-4xl mx-auto">
            Agentic AI & Predictive Optimization
          </h2>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
