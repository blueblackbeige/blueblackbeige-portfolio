"use client";

import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// EDIT ME: replace title / category / description for each piece
// as real projects are ready to publish. Category drives the
// filter pills below — use "Website", "Marketing", or "Branding"
// (or add a new one) to match what each image actually shows.
// ─────────────────────────────────────────────────────────────
const gallery = [
  {
    image: "/images/work/001.png",
    title: "Project One",
    category: "Website",
    description: "Add a short description of this project.",
  },
  {
    image: "/images/work/002.png",
    title: "Project Two",
    category: "Website",
    description: "Add a short description of this project.",
  },
  {
    image: "/images/work/003.png",
    title: "Project Three",
    category: "Marketing",
    description: "Add a short description of this project.",
  },
  {
    image: "/images/work/004.png",
    title: "Project Four",
    category: "Marketing",
    description: "Add a short description of this project.",
  },
  {
    image: "/images/work/005.png",
    title: "Project Five",
    category: "Branding",
    description: "Add a short description of this project.",
  },
  {
    image: "/images/work/006.png",
    title: "Project Six",
    category: "Branding",
    description: "Add a short description of this project.",
  },
];

const filters = ["All", "Website", "Marketing", "Branding"];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const filtered =
    activeFilter === "All"
      ? gallery
      : gallery.filter((item) => item.category === activeFilter);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <main className="bg-bg-primary text-text-primary min-h-screen selection:bg-accent-blue/30">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-accent-blue/[0.05] rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto section-padding">
          <ScrollReveal>
            <span className="text-xs tracking-[0.3em] text-accent-blue font-semibold uppercase mb-6 block">
              Our Work
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-medium leading-[1.05] max-w-4xl">
              A running record of what we&apos;ve built
              <span className="text-accent-blue">.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mt-6">
              Websites, campaigns and brand work from the studio floor —
              updated as each project ships.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Showreel ── */}
      <section className="relative py-10 lg:py-16">
        <div className="max-w-[1440px] mx-auto section-padding">
          <ScrollReveal>
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden luxury-border aspect-video bg-bg-secondary/30 group">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/frames/hero-video_000.svg"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 right-5 sm:right-8 flex items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] sm:text-xs tracking-[0.25em] text-accent-blue font-semibold uppercase mb-2 block">
                    Studio Showreel
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-white">
                    A look at our motion &amp; brand craft
                  </h2>
                </div>
                <button
                  onClick={toggleSound}
                  aria-label={muted ? "Unmute video" : "Mute video"}
                  className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                >
                  {muted ? (
                    <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  ) : (
                    <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  )}
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="gallery" className="relative py-16 lg:py-24">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

        <div className="max-w-[1440px] mx-auto section-padding">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 lg:mb-14">
            <ScrollReveal>
              <div>
                <span className="text-xs tracking-[0.3em] text-accent-blue font-semibold uppercase mb-5 block">
                  Selected Projects
                </span>
                <h2 className="text-3xl lg:text-5xl font-serif font-medium leading-[1.1]">
                  Websites, campaigns
                  <br />
                  and brand systems<span className="text-accent-blue">.</span>
                </h2>
              </div>
            </ScrollReveal>

            {/* Filter pills */}
            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap gap-2">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide border transition-all duration-300 ${
                      activeFilter === f
                        ? "bg-white text-bg-primary border-white"
                        : "border-white/15 text-text-secondary hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {filtered.map((item, i) => (
              <ScrollReveal key={item.image} delay={i * 0.06}>
                <div className="group relative rounded-2xl overflow-hidden luxury-border bg-bg-secondary/20 hover:border-white/20 transition-all duration-500">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/10 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                    <span className="text-[10px] tracking-[0.25em] text-accent-blue font-semibold uppercase mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-lg lg:text-xl font-serif font-medium text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-text-secondary text-sm text-center py-16">
              Nothing here yet — check back soon.
            </p>
          )}

          <ScrollReveal delay={0.2}>
            <div className="flex justify-center mt-14 lg:mt-20">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-7 py-3.5 border border-white/15 rounded-full text-sm font-medium text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              >
                Have a project in mind? Let&apos;s talk
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
