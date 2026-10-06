"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const directionRef = useRef<1 | -1>(1);
  const prevTimestampRef = useRef<number>(0);

  // Single RAF loop controls EVERYTHING - no reliance on native play/ended events
  const animate = useCallback((timestamp: number) => {
    const video = videoRef.current;
    if (!video || video.readyState < 2) {
      rafRef.current = requestAnimationFrame(animate);
      return;
    }

    if (!prevTimestampRef.current) prevTimestampRef.current = timestamp;
    const delta = (timestamp - prevTimestampRef.current) / 1000;
    prevTimestampRef.current = timestamp;

    // Speed multiplier - lower = slower (0.35 feels luxury cinematic)
    const speed = 0.8;
    const step = delta * speed;

    const newTime = video.currentTime + step * directionRef.current;

    if (newTime >= video.duration) {
      // Hit the end - immediately reverse, no pause
      video.currentTime = video.duration;
      directionRef.current = -1;
    } else if (newTime <= 0) {
      // Hit the start - immediately go forward, no pause
      video.currentTime = 0;
      directionRef.current = 1;
    } else {
      video.currentTime = newTime;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Match the lg breakpoint used for the video crop below (1024px)
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    let cleanupDesktopAnim: (() => void) | null = null;

    const setupForMode = (isDesktop: boolean) => {
      // Tear down whatever mode was previously running
      if (cleanupDesktopAnim) {
        cleanupDesktopAnim();
        cleanupDesktopAnim = null;
      }

      if (!isDesktop) {
        // Native playback keeps the video frames painting reliably on mobile.
        video.loop = true;
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {
            // If autoplay is blocked, the poster remains visible.
          });
        }
        return;
      }

      // Desktop: custom reverse/forward ping-pong scrub for a cinematic loop
      video.loop = false;
      video.pause();

      const startAnimation = () => {
        prevTimestampRef.current = 0;
        rafRef.current = requestAnimationFrame(animate);
      };

      if (video.readyState >= 2) {
        startAnimation();
      } else {
        video.addEventListener("loadeddata", startAnimation, { once: true });
      }

      cleanupDesktopAnim = () => {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
        video.removeEventListener("loadeddata", startAnimation);
      };
    };

    setupForMode(desktopQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setupForMode(e.matches);
    desktopQuery.addEventListener("change", handleChange);

    return () => {
      desktopQuery.removeEventListener("change", handleChange);
      if (cleanupDesktopAnim) cleanupDesktopAnim();
    };
  }, [animate]);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] lg:min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Full-bleed Video Background ── */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute top-0 right-0 w-full lg:w-[80%] h-full object-cover object-[65%_center] lg:object-center"
          poster="/images/hero-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* ── Multi-layer gradient blending ── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #050505 0%, #050505 20%, rgba(5,5,5,0.9) 30%, rgba(5,5,5,0.5) 42%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #050505 0%, rgba(5,5,5,0.7) 15%, rgba(5,5,5,0.2) 35%, transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,5,5,0.6) 0%, rgba(5,5,5,0.2) 12%, transparent 25%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to left, rgba(5,5,5,0.4) 0%, transparent 8%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 85% 80% at 65% 50%, transparent 35%, rgba(5,5,5,0.5) 75%, #050505 100%)",
          }}
        />

        {/* Mobile-only readability overlay: video is full-bleed on small screens (unlike the 80%-width desktop split), so text needs stronger contrast here */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.35) 30%, rgba(5,5,5,0.75) 68%, #050505 100%)",
          }}
        />
      </div>

      {/* ── Ambient Glow ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-accent-blue/[0.03] rounded-full blur-[150px]" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full section-padding pt-24 pb-24 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-2xl">
          {/* Scroll Indicator */}
          <div className="hidden lg:flex absolute -left-4 xl:left-4 top-1/2 -translate-y-1/2 flex-col items-center gap-3">
            
          </div>
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="text-[1.7rem] xs:text-[1.9rem] sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-7xl font-serif font-medium leading-[1.15] sm:leading-[1.1] tracking-tight mb-5 lg:mb-8"
          >
            Web design and digital growth <br />
            <em className="gradient-text not-italic font-serif italic">for ambitious brands</em>
            <span className="text-accent-blue">.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-text-secondary text-sm md:text-lg leading-relaxed max-w-lg mb-7 lg:mb-10"
          >
            Based in Patna, India and working with businesses across the country, we combine strategy, design, digital marketing, and technology
            <br className="hidden md:block" />
            to create and grow intelligent digital products for ambitious brands.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 lg:gap-4"
          >
            <a
              href="#work"
              className="group flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-3.5 lg:py-3.5 lg:px-7 bg-accent-beige text-bg-primary rounded-full text-sm font-semibold tracking-wide hover:bg-accent-beige/90 transition-all duration-300"
            >
              View Our Work
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="group flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-3.5 lg:py-3.5 lg:px-7 border border-white/15 rounded-full text-sm font-medium tracking-wide text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Vertical Text ── */}
      <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 z-20">
        <span className="text-[9px] tracking-[0.25em] text-text-secondary/40 uppercase [writing-mode:vertical-lr]">
          BLUEBLACKBEIGE.IN
        </span>
      </div>
    </section>
  );
}
