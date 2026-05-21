"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Clock, Share2, Twitter, Linkedin, TrendingUp } from "lucide-react";

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
      <article className="pt-32 pb-24 max-w-[1440px] mx-auto px-6">
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
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] mb-8">
            The AI-Augmented <br className="hidden md:block"/> Director
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary font-serif italic max-w-2xl mx-auto">
            How designers are evolving in 2025, moving from pixel builders to system directors.
          </p>
        </motion.div>

        {/* Hero Image with Parallax */}
        <div ref={containerRef} className="relative w-full aspect-[21/9] md:aspect-[2.5/1] rounded-3xl overflow-hidden mb-24 luxury-border">
          <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <Image
              src="https://images.unsplash.com/photo-1633424683050-61ba4f40f0cd?q=80&w=2400&auto=format&fit=crop"
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
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center hover:bg-white hover:text-bg-primary transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center hover:bg-white hover:text-bg-primary transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center hover:bg-white hover:text-bg-primary transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Prose Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-invert prose-lg md:prose-xl max-w-none 
              prose-p:text-text-secondary prose-p:leading-relaxed
              prose-headings:font-serif prose-headings:font-medium prose-headings:text-white
              prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8
              prose-a:text-accent-blue hover:prose-a:text-accent-beige prose-a:transition-colors
              prose-blockquote:border-l-accent-beige prose-blockquote:bg-bg-secondary/30 prose-blockquote:p-8 prose-blockquote:rounded-r-2xl prose-blockquote:my-12 prose-blockquote:font-serif prose-blockquote:text-2xl prose-blockquote:leading-snug prose-blockquote:not-italic
              first-letter:float-left first-letter:text-7xl first-letter:pr-4 first-letter:font-serif first-letter:text-white first-letter:mt-2 first-letter:leading-[0.8]
            ">
              <p>
                For decades, achieving a truly premium digital experience required sacrificing speed for quality. Every layout change, every micro-animation, and every responsive breakpoint required manual, painstaking execution. But we are entering a new era where Artificial Intelligence acts as a foundational partner.
              </p>
              
              <h2>From Builder to Director</h2>
              <p>
                The role of the web designer has fundamentally evolved into that of an <strong>AI Director</strong>. With advanced tools integrating deeply into our workflows, designers now use strategic prompts to generate complex layouts, elegant typography, and cohesive color palettes. 
              </p>
              
              {/* Data Table */}
              <div className="my-12 not-prose bg-bg-secondary/20 luxury-border rounded-2xl p-6 md:p-8 overflow-x-auto">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-5 h-5 text-accent-blue" />
                  <h3 className="text-xl font-serif text-white font-medium">Time Allocation Shift: Traditional vs. AI-Augmented</h3>
                </div>
                <table className="w-full text-left text-sm md:text-base border-collapse">
                  <thead>
                    <tr className="border-b border-border-subtle text-text-secondary font-medium">
                      <th className="py-4 pr-4 uppercase tracking-wider text-xs">Project Phase</th>
                      <th className="py-4 px-4 uppercase tracking-wider text-xs text-center">Traditional</th>
                      <th className="py-4 px-4 uppercase tracking-wider text-xs text-center">AI-Augmented</th>
                      <th className="py-4 pl-4 uppercase tracking-wider text-xs text-right text-accent-blue">Time Saved</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-border-subtle/50 hover:bg-white/5 transition-colors">
                      <td className="py-4 pr-4">Wireframing & Ideation</td>
                      <td className="py-4 px-4 text-center">12 hrs</td>
                      <td className="py-4 px-4 text-center text-white font-medium">2 hrs</td>
                      <td className="py-4 pl-4 text-right text-accent-beige">-83%</td>
                    </tr>
                    <tr className="border-b border-border-subtle/50 hover:bg-white/5 transition-colors">
                      <td className="py-4 pr-4">Asset Creation</td>
                      <td className="py-4 px-4 text-center">24 hrs</td>
                      <td className="py-4 px-4 text-center text-white font-medium">4 hrs</td>
                      <td className="py-4 pl-4 text-right text-accent-beige">-83%</td>
                    </tr>
                    <tr className="border-b border-border-subtle/50 hover:bg-white/5 transition-colors">
                      <td className="py-4 pr-4">Coding & Layout</td>
                      <td className="py-4 px-4 text-center">40 hrs</td>
                      <td className="py-4 px-4 text-center text-white font-medium">10 hrs</td>
                      <td className="py-4 pl-4 text-right text-accent-beige">-75%</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-4 pr-4 text-accent-blue font-medium">Strategy & Polish</td>
                      <td className="py-4 px-4 text-center text-text-secondary">4 hrs</td>
                      <td className="py-4 px-4 text-center text-accent-blue font-semibold">24 hrs</td>
                      <td className="py-4 pl-4 text-right text-accent-blue">+500%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                At Blue Black Beige, we no longer start from an entirely blank canvas. Instead, we spend our time refining, curating, and injecting the <em>soul</em> into the output. As the data above illustrates, the hours previously spent pushing pixels are now reallocated to deep strategic thinking and high-end polish. We focus on storytelling and emotional connection—areas where human intuition is irreplaceable.
              </p>
              
              <h2>The Human Touch Advantage</h2>
              <p>
                It is a common misconception that AI creates a homogenized web. In reality, when applied correctly, AI frees us from the "grunt work" of development. This liberation allows us to craft deeper, more meaningful brand identities. 
              </p>
              
              {/* Custom Bar Chart */}
              <div className="my-12 not-prose bg-bg-secondary/20 luxury-border rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-serif text-white font-medium mb-6">Designer Energy Distribution</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2 text-text-secondary">
                      <span>Execution (Manual Coding/Drafting)</span>
                      <span>2020 vs 2025</span>
                    </div>
                    <div className="h-10 w-full bg-bg-primary rounded-full overflow-hidden flex">
                      <div className="h-full bg-text-secondary/30 flex items-center px-4 text-xs font-semibold text-white/50" style={{ width: '80%' }}>2020: 80%</div>
                    </div>
                    <div className="h-10 w-full bg-bg-primary rounded-full overflow-hidden flex mt-2">
                      <div className="h-full bg-accent-blue/50 flex items-center px-4 text-xs font-semibold text-white" style={{ width: '20%' }}>2025: 20%</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2 text-text-secondary">
                      <span>Strategy, Emotion & Polish</span>
                      <span>2020 vs 2025</span>
                    </div>
                    <div className="h-10 w-full bg-bg-primary rounded-full overflow-hidden flex">
                      <div className="h-full bg-text-secondary/30 flex items-center px-4 text-xs font-semibold text-white/50" style={{ width: '20%' }}>2020: 20%</div>
                    </div>
                    <div className="h-10 w-full bg-bg-primary rounded-full overflow-hidden flex mt-2 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-beige opacity-50" style={{ width: '80%' }}></div>
                      <div className="h-full flex items-center px-4 text-xs font-semibold text-white z-10" style={{ width: '80%' }}>2025: 80%</div>
                    </div>
                  </div>
                </div>
              </div>

              <blockquote>
                "AI doesn't lower the ceiling of what's possible; it raises the floor of what's expected. The difference between good and great is still purely human."
              </blockquote>
              
              <p>
                Premium design in 2025 emphasizes depth. AI-powered 3D graphics, parallax scrolling, and sophisticated micro-interactions are now seamlessly integrated, creating rich, tactile environments that feel overwhelmingly human and immersive. The future belongs to brands that harness this synergy to launch faster while setting entirely new standards for digital excellence.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Next Article CTA */}
      <section className="py-24 border-t border-border-subtle bg-bg-secondary/10 hover:bg-bg-secondary/30 transition-colors duration-500 group">
        <Link href="/blog/predictive-optimization" className="block max-w-[1440px] mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.3em] font-semibold uppercase text-text-secondary group-hover:text-accent-blue transition-colors mb-6 block">
            Next Article
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-white group-hover:text-accent-beige transition-colors duration-500 max-w-4xl mx-auto">
            Agentic AI & Predictive Optimization
          </h2>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
