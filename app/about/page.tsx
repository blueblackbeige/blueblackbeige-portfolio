"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight, Sparkles, Globe, Zap, Cpu } from "lucide-react";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="bg-bg-primary text-text-primary min-h-screen selection:bg-accent-blue/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image / Overlay */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
            alt="Studio Atmosphere"
            fill
            className="object-cover opacity-30 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-transparent" />
        </motion.div>

        <div className="relative z-10 w-full max-w-[1440px] px-6 flex flex-col items-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-xs md:text-sm tracking-[0.4em] text-accent-blue font-semibold uppercase mb-6 block text-center">
              Our Vision
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-[7rem] font-serif font-medium leading-[1.1] md:leading-[0.9] tracking-tight text-center max-w-5xl"
          >
            We engineer <br className="hidden md:block" /> <em className="italic text-accent-beige">digital flagship</em> <br className="hidden md:block" /> experiences.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary/50"
          >
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <ArrowDownRight className="w-4 h-4 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Sticky Scroll Narrative */}
      <section ref={containerRef} className="relative w-full bg-bg-primary pt-10 lg:pt-32 pb-32">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Sticky Left Side */}
            <div className="sticky top-32 hidden lg:block h-[70vh] w-full rounded-3xl overflow-hidden luxury-border">
              <Image 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop"
                alt="Creative Process"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/20 to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="text-3xl font-serif text-white mb-2">Patna, India</p>
                <p className="text-xs text-text-secondary uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                  Global Reach
                </p>
              </div>
            </div>

            {/* Scrolling Right Side */}
            <div className="flex flex-col gap-24 lg:gap-40 py-10 lg:py-20">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white leading-tight">
                  Born from a desire to <span className="text-accent-blue">elevate</span> the web.
                </h2>
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                  Blue Black Beige started with a simple observation: the digital world was becoming dangerously generic. Templates had replaced craftsmanship. We set out to change that by treating code as poetry and pixels as art.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white leading-tight">
                  Powered by <span className="text-accent-beige">Intelligence</span>.
                </h2>
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                  We are not just a traditional agency. We are an AI-augmented studio. By integrating advanced machine learning into our creative workflows, we eliminate the mundane and focus entirely on the magical. We deliver premium quality at unprecedented speed.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white leading-tight">
                  Built for the <span className="italic">Ambitious</span>.
                </h2>
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                  Our partners are founders who refuse to settle. They understand that their digital presence is their most important physical asset. We don&apos;t just execute their vision; we challenge, refine, and elevate it.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Bento Grid */}
      <section className="py-32 bg-bg-secondary/10 border-t border-border-subtle relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-beige/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs tracking-[0.3em] text-accent-blue font-semibold uppercase block mb-4">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium">
              Principles we swear by.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Sparkles, title: "Craft-First", desc: "Every pixel is intentional. We treat design as a discipline, not a decoration." },
              { icon: Globe, title: "Global Thinking", desc: "We build for audiences worldwide — with a clear understanding of local context." },
              { icon: Zap, title: "Speed & Scale", desc: "AI-augmented workflows let us deliver premium quality faster than anyone else." },
              { icon: Cpu, title: "Tech Agnostic", desc: "We choose the right stack for the job, ensuring performance is never compromised. We leverage the edge to deliver lightning-fast experiences.", span: "md:col-span-2 lg:col-span-3 lg:flex lg:items-center lg:gap-12" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group relative p-10 rounded-3xl luxury-border bg-bg-primary hover:bg-bg-secondary/40 transition-all duration-500 overflow-hidden ${item.span || ""}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`${item.span ? "lg:w-1/3" : ""}`}>
                  <item.icon className="w-8 h-8 text-accent-beige/70 mb-8 group-hover:text-accent-blue transition-colors duration-500" />
                  <h3 className="text-2xl font-serif text-white mb-4">{item.title}</h3>
                </div>
                <div className={`${item.span ? "lg:w-2/3" : ""}`}>
                  <p className="text-text-secondary leading-relaxed text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Stats */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
            {[
              { label: "Projects Shipped", value: "40+" },
              { label: "Avg. Conversion Uplift", value: "3x" },
              { label: "Lines of Perfect Code", value: "1M+" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="flex flex-col items-center"
              >
                <span className="text-6xl md:text-7xl lg:text-[6.5rem] font-serif font-medium text-white mb-6 block">
                  {stat.value}
                </span>
                <span className="text-sm uppercase tracking-widest text-text-secondary/70">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Massive CTA */}
      <section className="py-32 bg-bg-secondary/20 border-t border-border-subtle text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-serif font-medium mb-10">Ready to <span className="italic text-accent-beige">build?</span></h2>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-bg-primary rounded-full text-lg font-semibold hover:bg-accent-beige transition-colors duration-300 group"
          >
            Start a project
            <ArrowDownRight className="w-5 h-5 -rotate-90 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
