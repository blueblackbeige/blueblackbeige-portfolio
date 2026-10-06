"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import ArticleShareLinks from "@/components/ArticleShareLinks";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { BlogPost } from "@/data/blog-posts";

export default function BlogArticle({ post }: { post: BlogPost }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.dek,
    image: [new URL(post.heroImage, "https://blueblackbeige.in").toString()],
    author: {
      "@type": "Organization",
      name: "Blue Black Beige",
      "@id": "https://blueblackbeige.in/#organization",
    },
    publisher: {
      "@type": "Organization",
      name: "Blue Black Beige",
      "@id": "https://blueblackbeige.in/#organization",
      url: "https://blueblackbeige.in",
      logo: { "@type": "ImageObject", url: "https://blueblackbeige.in/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://blueblackbeige.in/blog/${post.slug}` },
    keywords: post.keywords.join(", "),
    inLanguage: "en-IN",
  };

  return (
    <main className="bg-bg-primary min-h-screen text-text-primary selection:bg-accent-blue/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Navbar />

      <article className="pt-24 pb-16 sm:pt-32 sm:pb-24 max-w-[1440px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <span className="text-xs tracking-[0.2em] text-accent-blue font-semibold uppercase">{post.category}</span>
            <span className="w-1 h-1 rounded-full bg-text-secondary/30" />
            <span className="flex items-center gap-1.5 text-xs text-text-secondary uppercase tracking-widest">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-[2.25rem] xs:text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.15] md:leading-[1.1] mb-6 sm:mb-8">
            {post.title}
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary font-serif italic max-w-3xl mx-auto">{post.dek}</p>
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-text-secondary/70">By Blue Black Beige</p>
        </motion.div>

        <div ref={containerRef} className={`relative w-full ${post.heroImage.endsWith(".jpg") ? "aspect-[3/2]" : "aspect-[4/3] sm:aspect-[21/9] md:aspect-[2.5/1]"} rounded-3xl overflow-hidden mb-14 sm:mb-24 luxury-border`}>
          <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <Image
              src={post.heroImage}
              alt={post.heroAlt}
              fill
              className={`${post.heroImage.endsWith(".jpg") ? "object-contain" : "object-cover grayscale hover:grayscale-0"} transition-all duration-1000`}
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 relative max-w-6xl mx-auto">
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32 flex flex-col gap-10">
              <Link href="/blog" className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-text-secondary hover:text-white transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
              <div className="h-px w-full bg-border-subtle" />
              <div>
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-4">Share Article</p>
                <ArticleShareLinks url={`https://blueblackbeige.in/blog/${post.slug}`} title={post.title} />
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="prose prose-invert prose-base sm:prose-lg md:prose-xl max-w-none
              prose-p:text-text-secondary prose-p:leading-relaxed
              prose-headings:font-serif prose-headings:font-medium prose-headings:text-white
              prose-h2:text-2xl sm:prose-h2:text-4xl prose-h2:mt-10 sm:prose-h2:mt-16 prose-h2:mb-5 sm:prose-h2:mb-8
              prose-a:text-accent-blue hover:prose-a:text-accent-beige prose-a:transition-colors
              prose-blockquote:border-l-accent-beige prose-blockquote:bg-bg-secondary/30 prose-blockquote:p-5 sm:prose-blockquote:p-8 prose-blockquote:rounded-r-2xl prose-blockquote:my-8 sm:prose-blockquote:my-12 prose-blockquote:font-serif prose-blockquote:text-lg sm:prose-blockquote:text-2xl prose-blockquote:leading-snug prose-blockquote:not-italic
              prose-li:text-text-secondary prose-li:marker:text-accent-blue
              first-letter:float-left first-letter:text-5xl sm:first-letter:text-7xl first-letter:pr-3 sm:first-letter:pr-4 first-letter:font-serif first-letter:text-white first-letter:mt-1 sm:first-letter:mt-2 first-letter:leading-[0.8]"
            >
              {post.sections.map((section, index) => (
                <section key={section.heading}>
                  {index === 0 && <p>{section.paragraphs[0]}</p>}
                  <h2>{section.heading}</h2>
                  {(index > 0 ? section.paragraphs : section.paragraphs.slice(1)).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.quote && <blockquote>&quot;{section.quote}&quot;</blockquote>}
                  {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                </section>
              ))}

              <section className="mt-14 pt-8 border-t border-border-subtle">
                <h2>Sources &amp; further reading</h2>
                <ul>
                  {post.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}</a></li>)}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 sm:py-24 border-t border-border-subtle bg-bg-secondary/10 hover:bg-bg-secondary/30 transition-colors duration-500 group">
        <Link href="/blog" className="block max-w-[1440px] mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.3em] font-semibold uppercase text-text-secondary group-hover:text-accent-blue transition-colors mb-6 block">Back to the archive</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-medium text-white group-hover:text-accent-beige transition-colors duration-500 max-w-4xl mx-auto">More ideas from the studio</h2>
          <span className="mt-8 inline-flex items-center gap-3 text-sm text-white">Explore all articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
