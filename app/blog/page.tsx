"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight, Clock, ArrowRight } from "lucide-react";

// Data
const featuredPost = {
  tag: "Design & Future",
  title: "The AI-Augmented Director: How Designers are Evolving in 2025",
  excerpt:
    "We are moving from building pixels to directing systems. Here is how AI is freeing up designers to focus entirely on strategy, storytelling, and deep emotional connection.",
  readTime: "6 min read",
  image: "https://images.unsplash.com/photo-1633424683050-61ba4f40f0cd?q=80&w=1600&auto=format&fit=crop",
  href: "/blog/ai-augmented-director",
};

const posts = [
  {
    tag: "Technology",
    title: "Agentic AI & Predictive Optimization",
    excerpt: "Why run manual A/B tests when AI can proactively identify friction and optimize conversions in real-time?",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    href: "/blog/predictive-optimization",
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    tag: "Strategy",
    title: "Hyper-Personalization at Scale",
    excerpt: "Moving beyond basic targeting to offer context-aware journeys that adapt dynamically.",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    href: "#",
    span: "md:col-span-1 lg:col-span-1",
  }
];

export default function BlogPage() {
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
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop"
            alt="Editorial Atmosphere"
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
              Editorial
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-[7rem] font-serif font-medium leading-[1.1] md:leading-[0.9] tracking-tight text-center max-w-5xl"
          >
            Ideas that shape <br className="hidden md:block" /> the <em className="italic text-accent-beige">digital frontier</em>.
          </motion.h1>
        </div>
      </section>

      {/* Sticky Scroll Featured Article */}
      <section ref={containerRef} className="relative w-full bg-bg-primary pt-10 lg:pt-32 pb-32">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Sticky Left Side (Image) */}
            <div className="sticky top-32 hidden lg:block h-[70vh] w-full rounded-3xl overflow-hidden luxury-border group">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <span className="text-xs tracking-[0.2em] font-semibold uppercase text-accent-blue bg-accent-blue/10 border border-accent-blue/20 px-3 py-1.5 rounded-full mb-4 inline-block">
                  Featured
                </span>
                <p className="text-sm text-text-secondary uppercase tracking-widest flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredPost.readTime}
                </p>
              </div>
            </div>

            {/* Scrolling Right Side (Content) */}
            <div className="flex flex-col justify-center min-h-[70vh] py-10 lg:py-20">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col"
              >
                {/* Mobile Image (Hidden on Desktop) */}
                <div className="lg:hidden relative h-[300px] w-full rounded-2xl overflow-hidden mb-8 luxury-border">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary to-transparent" />
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs tracking-[0.2em] font-semibold uppercase text-accent-beige">
                    {featuredPost.tag}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-white leading-tight hover:text-accent-beige transition-colors duration-500">
                  {featuredPost.title}
                </h2>

                <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-12">
                  {featuredPost.excerpt}
                </p>

                <Link
                  href={featuredPost.href}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white hover:text-bg-primary transition-all duration-500 group w-fit"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Bento Grid */}
      <section className="py-32 bg-bg-secondary/10 border-t border-border-subtle relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex items-end justify-between"
          >
            <div>
              <span className="text-xs tracking-[0.3em] text-accent-beige font-semibold uppercase block mb-4">
                The Archive
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-medium">
                Latest Insights.
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`${post.span || "md:col-span-1"}`}
              >
                <Link href={post.href} className="group relative flex flex-col h-full rounded-3xl luxury-border bg-bg-primary hover:border-white/20 transition-all duration-500 overflow-hidden hover:-translate-y-1">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] tracking-[0.2em] font-semibold uppercase text-accent-blue">
                        {post.tag}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-text-secondary ml-auto">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h4 className="text-2xl lg:text-3xl font-serif font-medium leading-snug mb-4 group-hover:text-accent-beige transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-text-secondary leading-relaxed line-clamp-2 mt-auto">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
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
          <h2 className="text-5xl md:text-7xl font-serif font-medium mb-10">Ready to <span className="italic text-accent-blue">disrupt?</span></h2>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-bg-primary rounded-full text-lg font-semibold hover:bg-accent-blue hover:text-white transition-colors duration-300 group"
          >
            Start a conversation
            <ArrowDownRight className="w-5 h-5 -rotate-90 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
