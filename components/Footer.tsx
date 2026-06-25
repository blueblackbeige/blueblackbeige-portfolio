"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

const serviceLinks = [
  "Strategy & Branding",
  "Digital Experience",
  "Web Development",
  "Motion & Interaction",
  "Growth & Optimization",
  "Digital Marketing",
  "Social Media Marketing",
];

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "Behance", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-bg-primary pt-20 lg:pt-32 overflow-hidden border-t border-border-subtle">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-blue/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 mb-16 lg:mb-24">

          {/* Brand Column (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Image
                  src="/logo.png"
                  alt="Blue Black Beige Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <p className="text-lg md:text-2xl text-text-secondary font-serif italic max-w-md leading-relaxed">
                We design, build and grow ambitious brands — through premium digital experiences, marketing and social strategy.
              </p>
            </div>

            <div className="mt-10 lg:mt-12">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-4 text-sm font-semibold uppercase tracking-widest group"
              >
                <span className="w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center group-hover:border-accent-blue transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:text-accent-blue transition-colors" />
                </span>
                Let&apos;s Start a Project
              </Link>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Links Grid (Spans 6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10">

            {/* Nav */}
            <div>
              <h4 className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em] mb-6 lg:mb-8">
                Navigation
              </h4>
              <ul className="space-y-3 lg:space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base lg:text-lg text-text-secondary hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em] mb-6 lg:mb-8">
                Services
              </h4>
              <ul className="space-y-3 lg:space-y-4">
                {serviceLinks.map((s) => (
                  <li key={s}>
                    <Link
                      href="/#services"
                      className="text-base lg:text-lg text-text-secondary hover:text-white transition-colors"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials & Connect */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em] mb-6 lg:mb-8">
                Connect
              </h4>
              <ul className="space-y-3 lg:space-y-4 mb-8 lg:mb-10">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="text-base lg:text-lg text-text-secondary hover:text-white transition-colors"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>

              <h4 className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em] mb-4">
                Direct
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:nayan@blueblackbeige.in" className="text-sm text-text-secondary hover:text-white transition-colors">
                    nayan@blueblackbeige.in
                  </a>
                </li>
                <li>
                  <a href="tel:+917667649211" className="text-sm text-text-secondary hover:text-white transition-colors">
                    +91 76676 49211
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Massive Brand Name Footer */}
        <div className="w-full border-t border-border-subtle pt-10 lg:pt-12 pb-6">
          {/* Giant Typography */}
          <div className="w-full mb-8 lg:mb-12">
            <h1 className="w-full flex justify-center text-[7vw] sm:text-[8vw] leading-none font-serif font-bold tracking-tighter select-none">
              <span className="text-accent-blue">BLUE</span>
              <span style={{ WebkitTextStroke: "2px rgba(255,255,255,0.8)", color: "transparent" }}>BLACK</span>
              <span className="text-accent-beige italic pr-2">BEIGE</span>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-text-secondary/50 font-medium">
            <p>
              © {new Date().getFullYear()} Blue Black Beige. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                Based in Patna, Global Reach
              </span>
              <div className="hidden md:flex items-center gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
