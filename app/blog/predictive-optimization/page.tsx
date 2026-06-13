"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Clock, Share2, Twitter, Linkedin, BarChart3 } from "lucide-react";

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
      <article className="pt-32 pb-24 max-w-[1440px] mx-auto px-6">
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
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] mb-8">
            Agentic AI & <br className="hidden md:block"/> Predictive Optimization
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary font-serif italic max-w-2xl mx-auto">
            The end of A/B testing and the rise of real-time interface evolution.
          </p>
        </motion.div>

        {/* Hero Image with Parallax */}
        <div ref={containerRef} className="relative w-full aspect-[21/9] md:aspect-[2.5/1] rounded-3xl overflow-hidden mb-24 luxury-border">
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
              prose-blockquote:border-l-accent-blue prose-blockquote:bg-bg-secondary/30 prose-blockquote:p-8 prose-blockquote:rounded-r-2xl prose-blockquote:my-12 prose-blockquote:font-serif prose-blockquote:text-2xl prose-blockquote:leading-snug prose-blockquote:not-italic
              prose-li:text-text-secondary prose-li:marker:text-accent-blue
              first-letter:float-left first-letter:text-7xl first-letter:pr-4 first-letter:font-serif first-letter:text-white first-letter:mt-2 first-letter:leading-[0.8]
            ">
              <p>
                For years, growth marketing relied on manual A/B testing—a slow, reactive process. Enter Agentic AI, the technology that is proactively optimizing user experiences in real-time.
              </p>
              
              <h2>The Limitation of Traditional Testing</h2>
              <p>
                Setting up an A/B test requires formulating a hypothesis, building variations, routing traffic, and waiting weeks for statistical significance. By the time a winner is declared, user behavior might have already shifted. It is a lagging indicator of what your audience wants.
              </p>

              {/* Data Table */}
              <div className="my-12 not-prose bg-bg-secondary/20 luxury-border rounded-2xl p-6 md:p-8 overflow-x-auto">
                <div className="flex items-center gap-3 mb-6">
                  <BarChart3 className="w-5 h-5 text-accent-beige" />
                  <h3 className="text-xl font-serif text-white font-medium">Methodology Comparison</h3>
                </div>
                <table className="w-full text-left text-sm md:text-base border-collapse">
                  <thead>
                    <tr className="border-b border-border-subtle text-text-secondary font-medium">
                      <th className="py-4 pr-4 uppercase tracking-wider text-xs">Metric</th>
                      <th className="py-4 px-4 uppercase tracking-wider text-xs text-center">Manual A/B Testing</th>
                      <th className="py-4 pl-4 uppercase tracking-wider text-xs text-right text-accent-beige">Agentic AI</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-border-subtle/50 hover:bg-white/5 transition-colors">
                      <td className="py-4 pr-4 font-medium">Time to Significance</td>
                      <td className="py-4 px-4 text-center text-text-secondary">2-4 Weeks</td>
                      <td className="py-4 pl-4 text-right text-accent-beige font-semibold">Real-time</td>
                    </tr>
                    <tr className="border-b border-border-subtle/50 hover:bg-white/5 transition-colors">
                      <td className="py-4 pr-4 font-medium">Variables Tested</td>
                      <td className="py-4 px-4 text-center text-text-secondary">1 to 3 (Max)</td>
                      <td className="py-4 pl-4 text-right text-accent-beige font-semibold">10,000+</td>
                    </tr>
                    <tr className="border-b border-border-subtle/50 hover:bg-white/5 transition-colors">
                      <td className="py-4 pr-4 font-medium">User Context</td>
                      <td className="py-4 px-4 text-center text-text-secondary">Ignored</td>
                      <td className="py-4 pl-4 text-right text-accent-beige font-semibold">Hyper-specific</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-4 pr-4 font-medium">Avg. Conversion Uplift</td>
                      <td className="py-4 px-4 text-center text-text-secondary">2.5%</td>
                      <td className="py-4 pl-4 text-right text-white font-semibold">14.8%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h2>Enter Agentic AI</h2>
              <p>
                Agentic AI models don&apos;t just wait for instructions; they observe, analyze, and act autonomously. In the context of premium web experiences, these AI agents constantly monitor user flows, identifying micro-frictions such as cursor hesitation, slow scroll rates, or drop-offs at specific form fields.
              </p>
              
              <blockquote>
                &quot;Instead of simply reporting issues to a dashboard, Agentic AI predictively optimizes the interface, running thousands of micro-experiments simultaneously.&quot;
              </blockquote>
              
              <h2>Hyper-Personalized Journeys</h2>
              <p>
                The result is a website that evolves in real-time. If the AI detects a user prefers reading long-form text over watching video, it dynamically adjusts the layout to surface textual case studies. If it notices hesitation at a pricing tier, it might proactively surface a relevant social proof testimonial.
              </p>

              {/* Trend Chart Mockup using Tailwind */}
              <div className="my-12 not-prose bg-bg-secondary/20 luxury-border rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-serif text-white font-medium mb-6">30-Day Conversion Growth Curve</h3>
                
                <div className="relative h-64 w-full flex items-end justify-between gap-2 md:gap-4 mt-10">
                  {/* Y-Axis Labels */}
                  <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-text-secondary pb-8">
                    <span>15%</span>
                    <span>10%</span>
                    <span>5%</span>
                    <span>0%</span>
                  </div>
                  
                  {/* Grid Lines */}
                  <div className="absolute inset-0 ml-8 border-b border-border-subtle flex flex-col justify-between pb-8 pointer-events-none">
                    <div className="w-full border-t border-border-subtle/30 h-0"></div>
                    <div className="w-full border-t border-border-subtle/30 h-0"></div>
                    <div className="w-full border-t border-border-subtle/30 h-0"></div>
                    <div className="w-full h-0"></div>
                  </div>

                  {/* Bars - Weeks 1 to 4 */}
                  <div className="w-full ml-10 flex justify-around items-end h-[calc(100%-2rem)] relative z-10">
                    {/* Week 1 */}
                    <div className="flex flex-col items-center gap-2 group w-1/5">
                      <div className="w-full flex justify-center gap-1 items-end h-full relative">
                        {/* A/B Test */}
                        <div className="w-1/2 bg-text-secondary/20 rounded-t-sm transition-all duration-500" style={{ height: '20%' }}></div>
                        {/* Agentic AI */}
                        <div className="w-1/2 bg-accent-beige rounded-t-sm transition-all duration-500 group-hover:bg-accent-blue" style={{ height: '35%' }}></div>
                      </div>
                      <span className="text-xs text-text-secondary mt-2">Week 1</span>
                    </div>

                    {/* Week 2 */}
                    <div className="flex flex-col items-center gap-2 group w-1/5">
                      <div className="w-full flex justify-center gap-1 items-end h-full relative">
                        <div className="w-1/2 bg-text-secondary/20 rounded-t-sm transition-all duration-500" style={{ height: '20%' }}></div>
                        <div className="w-1/2 bg-accent-beige rounded-t-sm transition-all duration-500 group-hover:bg-accent-blue" style={{ height: '55%' }}></div>
                      </div>
                      <span className="text-xs text-text-secondary mt-2">Week 2</span>
                    </div>

                    {/* Week 3 */}
                    <div className="flex flex-col items-center gap-2 group w-1/5">
                      <div className="w-full flex justify-center gap-1 items-end h-full relative">
                        <div className="w-1/2 bg-text-secondary/40 rounded-t-sm transition-all duration-500" style={{ height: '25%' }}></div>
                        <div className="w-1/2 bg-accent-beige rounded-t-sm transition-all duration-500 group-hover:bg-accent-blue" style={{ height: '80%' }}></div>
                      </div>
                      <span className="text-xs text-text-secondary mt-2">Week 3</span>
                    </div>

                    {/* Week 4 */}
                    <div className="flex flex-col items-center gap-2 group w-1/5">
                      <div className="w-full flex justify-center gap-1 items-end h-full relative">
                        <div className="w-1/2 bg-text-secondary/40 rounded-t-sm transition-all duration-500" style={{ height: '25%' }}></div>
                        <div className="w-1/2 bg-accent-beige rounded-t-sm transition-all duration-500 group-hover:bg-accent-blue" style={{ height: '100%' }}></div>
                      </div>
                      <span className="text-xs text-text-secondary mt-2">Week 4</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-6 mt-6">
                  <div className="flex items-center gap-2 text-xs text-text-secondary">
                    <span className="w-3 h-3 bg-text-secondary/30 rounded-sm"></span> A/B Testing
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-secondary">
                    <span className="w-3 h-3 bg-accent-beige rounded-sm"></span> Agentic AI
                  </div>
                </div>
              </div>

              <ul>
                <li><strong>Dynamic Layouts:</strong> Sections rearrange based on demonstrated user intent.</li>
                <li><strong>Real-time Copywriting:</strong> Headlines adapt to match the exact search context the user arrived from.</li>
                <li><strong>Frictionless Conversion:</strong> CTAs appear at the exact moment of highest user intent.</li>
              </ul>
              
              <p>
                At Blue Black Beige, we are implementing these predictive models to ensure that our premium designs aren&apos;t just visually stunning, but functionally perfect, offering a uniquely tailored journey for every single visitor.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Next Article CTA */}
      <section className="py-24 border-t border-border-subtle bg-bg-secondary/10 hover:bg-bg-secondary/30 transition-colors duration-500 group">
        <Link href="/blog/ai-augmented-director" className="block max-w-[1440px] mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.3em] font-semibold uppercase text-text-secondary group-hover:text-accent-beige transition-colors mb-6 block">
            Previous Article
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-white group-hover:text-accent-blue transition-colors duration-500 max-w-4xl mx-auto">
            The AI-Augmented Director
          </h2>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
