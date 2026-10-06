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
  tag: "Digital marketing strategy",
  title: "Digital Marketing Strategies That Actually Work",
  excerpt:
    "Connect SEO, content, social media, paid campaigns and conversion into one measurable customer journey.",
  readTime: "8 min read",
  image: "/images/blog/digital-strategy-hero.png",
  href: "/blog/digital-marketing-strategies-that-work",
};

const posts = [
  {
    tag: "Digital marketing",
    title: "Agentic AI & Predictive Optimization",
    excerpt: "How automated analysis may support experimentation, and why human review and sound measurement still matter.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    href: "/blog/predictive-optimization",
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    tag: "Search strategy",
    title: "Search After AI: What Brands Should Fix First",
    excerpt: "AI search changes the surface of discovery, but the foundation is still useful content, clear structure and a page experience people trust.",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    href: "/blog/search-after-ai",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    tag: "Website experience",
    title: "The Website Experience Customers Feel",
    excerpt: "Speed, responsiveness and visual stability are brand signals that shape customer confidence.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    href: "/blog/website-experience",
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    tag: "Social media marketing",
    title: "A Content System That Compounds",
    excerpt: "Build a repeatable social content system with one clear idea, useful formats and a measurement loop.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
    href: "/blog/content-system",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    tag: "Inclusive design",
    title: "Design for Everyone, Starting with Mobile",
    excerpt: "Mobile design and accessibility make the important action clear, reachable and understandable in real conditions.",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    href: "/blog/mobile-first-accessibility",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    tag: "Websites & growth",
    title: "Why Every Business Needs a Website in 2026",
    excerpt: "A website gives your business a trusted home for its story, services, search visibility and customer journey.",
    readTime: "7 min read",
    image: "/images/blog/website-2026-hero.png",
    href: "/blog/why-businesses-need-website-2026",
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    tag: "Mobile & UX",
    title: "Why Mobile-Friendly Websites Matter in 2026",
    excerpt: "Fast, responsive pages help customers browse, understand and act with confidence wherever they discover your brand.",
    readTime: "7 min read",
    image: "/images/blog/mobile-friendly-hero.png",
    href: "/blog/mobile-friendly-websites-matter-2026",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    tag: "Digital products",
    title: "Mobile App vs Website: Which Is Better for Business?",
    excerpt: "Choose the digital product that matches how customers discover, use and return to your business.",
    readTime: "7 min read",
    image: "/images/blog/app-vs-website-hero.png",
    href: "/blog/mobile-app-vs-website",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    tag: "Digital marketing",
    title: "Digital Marketing Strategies That Actually Work",
    excerpt: "Connect SEO, content, social media, paid campaigns and conversion into one measurable customer journey.",
    readTime: "8 min read",
    image: "/images/blog/digital-strategy-hero.png",
    href: "/blog/digital-marketing-strategies-that-work",
    span: "md:col-span-2 lg:col-span-2",
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
      <section className="relative min-h-[100svh] lg:h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={featuredPost.image}
            alt="Digital marketing strategy desk with campaign analytics"
            fill
            className="object-cover opacity-45 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/75 to-bg-primary/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/85 via-bg-primary/25 to-transparent" />
        </motion.div>

        <div className="relative z-10 w-full max-w-[1440px] px-6 flex flex-col items-center mt-16 sm:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-xs md:text-sm tracking-[0.4em] text-accent-blue font-semibold uppercase mb-6 block text-center">
              Digital marketing & social media
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="text-[2.5rem] xs:text-5xl md:text-7xl lg:text-[7rem] font-serif font-medium leading-[1.15] md:leading-[0.9] tracking-tight text-center max-w-5xl"
          >
            Strategy for the <br className="hidden md:block" /> <em className="italic text-accent-beige">scroll, search and sale</em>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="mt-8 max-w-2xl text-base sm:text-lg text-text-secondary leading-relaxed text-center"
          >
            Explore digital marketing strategy, social media marketing ideas, SEO guidance, content systems and website experience insights for brands that want steady online growth.
          </motion.p>
        </div>
      </section>

      {/* Sticky Scroll Featured Article */}
      <section ref={containerRef} className="relative w-full bg-bg-primary pt-10 lg:pt-32 pb-20 lg:pb-32">
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
      <section className="py-20 lg:py-32 bg-bg-secondary/10 border-t border-border-subtle relative">
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
                Field notes for growing brands.
              </h2>
              <p className="mt-5 max-w-xl text-text-secondary leading-relaxed">
                Digital marketing, social media marketing and brand systems explained in clear, useful notes you can put to work.
              </p>
              <div className="mt-7 flex flex-wrap gap-2" aria-label="Blog topics">
                {["Digital marketing", "Social media", "Content systems", "Web experience"].map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.16em] text-text-secondary"
                  >
                    {topic}
                  </span>
                ))}
              </div>
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
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
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

      {/* Search-led FAQ */}
      <section className="py-20 lg:py-28 bg-bg-primary border-t border-border-subtle" aria-labelledby="blog-faq-heading">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs tracking-[0.3em] text-accent-blue font-semibold uppercase block mb-4">
              Common questions
            </span>
            <h2 id="blog-faq-heading" className="text-4xl md:text-5xl font-serif font-medium">
              Practical answers for better marketing.
            </h2>
            <p className="mt-5 text-text-secondary leading-relaxed">
              Start here for clear guidance on digital marketing, social media content, SEO and building a stronger online brand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                question: "What does a digital marketing strategy include?",
                answer: "A useful digital marketing strategy connects business goals to the right audience, message, channel and measurement plan. It can include SEO, content marketing, social media, paid campaigns, email and website conversion improvements.",
              },
              {
                question: "How can social media marketing help a small business?",
                answer: "Social media marketing helps a small business build awareness, answer customer questions and create repeat touchpoints. The strongest plans combine useful content, a consistent brand voice and a clear next step such as a website visit, enquiry or booking.",
              },
              {
                question: "What makes website content SEO-friendly?",
                answer: "SEO-friendly website content uses a clear page title, descriptive headings, natural search language, helpful answers, accessible images, internal links and a fast mobile experience. It should satisfy the visitor first and make the topic easy for search engines to understand.",
              },
              {
                question: "How often should a brand publish social media content?",
                answer: "There is no universal posting number. Choose a schedule your team can sustain, then use saves, replies, qualified clicks and enquiries to learn what deserves more attention. Consistent, useful content usually beats a high volume of rushed posts.",
              },
            ].map((item) => (
              <details key={item.question} className="group rounded-2xl border border-border-subtle bg-bg-secondary/20 p-6 open:bg-bg-secondary/40 transition-colors">
                <summary className="cursor-pointer list-none pr-8 text-lg font-medium text-white marker:hidden [&::-webkit-details-marker]:hidden">
                  {item.question}
                </summary>
                <p className="mt-4 text-text-secondary leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final Massive CTA */}
      <section className="py-20 lg:py-32 bg-bg-secondary/20 border-t border-border-subtle text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-medium mb-8 lg:mb-10">Ready to <span className="italic text-accent-blue">grow with direction?</span></h2>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-bg-primary rounded-full text-lg font-semibold hover:bg-accent-blue hover:text-white transition-colors duration-300 group"
          >
            Start a conversation
            <ArrowDownRight className="w-5 h-5 -rotate-90 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
