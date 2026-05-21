"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/about")) {
      setActiveLink("About");
    } else if (pathname.startsWith("/blog")) {
      setActiveLink("Blog");
    } else if (pathname === "/") {
      // Check hash if we are on the home page
      const hash = window.location.hash;
      if (hash === "#services") setActiveLink("Services");
      else if (hash === "#work") setActiveLink("Work");
      else if (hash === "#contact") setActiveLink("Contact");
      else if (!hash || hash === "#home") setActiveLink("Home");
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-strong border-b border-border-subtle"
            : "bg-transparent"
        }`}
      >
        {/* Fixed height navbar — everything vertically centered inside */}
        <div className="max-w-[1440px] mx-auto section-padding h-[72px] flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 flex items-center"
            style={{ height: "72px" }}
          >
            <Image
              src="/logo.png"
              alt="Blue Black Beige"
              width={120}
              height={120}
              style={{
                height: "140%",       
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
              priority
            />
          </Link>

          {/* Center Nav - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                  activeLink === link.label
                    ? "text-white"
                    : "text-text-secondary hover:text-white"
                }`}
              >
                {link.label}
                {activeLink === link.label && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-accent-blue rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            href="/#contact"
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 border border-white/20 rounded-full text-sm font-medium tracking-wide hover:border-white/40 hover:bg-white/5 transition-all duration-300 group shrink-0"
          >
            Let&apos;s Talk
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white flex items-center"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-primary/98 backdrop-blur-xl pt-24 px-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.label);
                    setMobileOpen(false);
                  }}
                  className={`text-3xl font-serif ${
                    activeLink === link.label ? "text-white" : "text-text-secondary"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    {link.label}
                  </motion.div>
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-lg font-medium w-fit"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-2"
                >
                  Let&apos;s Talk
                  <ArrowUpRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
