"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "Blue Black Beige transformed our digital presence entirely. The attention to detail, strategic thinking and design quality exceeded every expectation. Our conversion rate tripled within three months.",
    author: "Unknown",
    role: "",
    company: "Fashion Brand",
  },
  {
    quote:
      "Working with this team felt like having an in-house design department that truly understands fintech. They delivered a product that our users love and our investors were impressed by.",
    author: "Unknown",
    role: "",
    company: "Food & Beverages Brand",
  },
  {
    quote:
      "The level of craft is unmatched. Every interaction, every animation, every pixel was intentional. They don't just build websites — they create experiences that sell.",
    author: "Unknown",
    role: "",
    company: "Startup",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-20 lg:py-36">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/[0.03] rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-[1440px] mx-auto section-padding">
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-xs tracking-[0.3em] text-accent-blue font-semibold uppercase mb-5 block">
              Client Voices
            </span>
            <h2 className="text-3xl lg:text-5xl font-serif font-medium">
              Trusted by ambitious brands
              <span className="text-accent-blue">.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative luxury-border rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 bg-bg-secondary/20">
            {/* Quote icon */}
            <Quote className="w-8 h-8 lg:w-10 lg:h-10 text-accent-blue/20 mb-6 lg:mb-8" strokeWidth={1} />

            {/* Animated quote */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] font-serif text-white/90 leading-relaxed mb-8 lg:mb-10">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-accent-blue/30 to-accent-beige/30 flex items-center justify-center">
                    <span className="text-sm font-semibold text-white">
                      {testimonials[current].author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {testimonials[current].author}
                    </p>
                    <p className="text-xs text-text-secondary">
                      {testimonials[current].role} — {testimonials[current].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-3 mt-8 lg:mt-10 pt-6 lg:pt-8 border-t border-border-subtle">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all"
              >
                <ChevronLeft className="w-4 h-4 text-text-secondary" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all"
              >
                <ChevronRight className="w-4 h-4 text-text-secondary" />
              </button>
              <div className="ml-auto flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-8 h-1 rounded-full transition-all duration-300 ${i === current ? "bg-accent-blue" : "bg-white/10"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
