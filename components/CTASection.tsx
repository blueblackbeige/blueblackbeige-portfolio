"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { useState } from "react";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Strategy & Branding",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! I'm ${formData.name}.\nEmail: ${formData.email}\nInterested in: ${formData.service}\n\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/917667649211?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-20 lg:py-36 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-bg-primary/70" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent-blue/[0.06] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">
          {/* Left: CTA copy */}
          <div>
            <ScrollReveal>
              <span className="text-xs tracking-[0.3em] text-accent-blue font-semibold uppercase mb-6 block">
                Ready to Start?
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium leading-[1.1] mb-6">
                Let&apos;s build something
                <br />
                extraordinary
                <span className="text-accent-blue">.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-text-secondary text-base leading-relaxed max-w-md mb-8 lg:mb-10">
                Whether you&apos;re launching a new brand, redesigning your
                digital presence or scaling your product — we&apos;re here to
                make it exceptional.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col gap-4 text-sm text-text-secondary">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  <a
                    href="https://wa.me/917667649211"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    +91 76676 49211 (WhatsApp)
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue/40" />
                  <span>Typical response: under 2 hours</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Trust signals */}
            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-6 mt-8 lg:mt-10 pt-8 lg:pt-10 border-t border-border-subtle">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {["RM", "SC", "AO", "JK"].map((initials) => (
                      <div
                        key={initials}
                        className="w-8 h-8 rounded-full border-2 border-bg-primary bg-gradient-to-br from-accent-blue/30 to-accent-beige/30 flex items-center justify-center"
                      >
                        <span className="text-[8px] font-bold text-white/70">
                          {initials}
                        </span>
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-text-secondary ml-1">
                    Trusted by clients
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 text-accent-beige"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-text-secondary ml-1">
                    4.9/5 rating
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Contact Form */}
          <ScrollReveal delay={0.2}>
            <div className="luxury-border rounded-2xl p-6 sm:p-8 lg:p-10 bg-bg-secondary/30 backdrop-blur-sm h-full flex flex-col justify-center">
              <h3 className="text-xl lg:text-2xl font-serif font-medium text-white mb-2">
                Project Enquiry
              </h3>
              <p className="text-sm text-text-secondary mb-6 lg:mb-8">
                Submit this form to instantly connect with us on WhatsApp.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-medium text-text-secondary ml-1">Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Jane Doe"
                      className="w-full bg-bg-primary/50 border border-border-subtle rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-secondary/30 focus:outline-none focus:border-accent-blue/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-medium text-text-secondary ml-1">Email</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="jane@example.com"
                      className="w-full bg-bg-primary/50 border border-border-subtle rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-secondary/30 focus:outline-none focus:border-accent-blue/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-medium text-text-secondary ml-1">Interested In</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-bg-primary/50 border border-border-subtle rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-blue/50 transition-colors appearance-none"
                  >
                    <option>Strategy & Branding</option>
                    <option>Digital Experience</option>
                    <option>Web Development</option>
                    <option>Motion & Interaction</option>
                    <option>Digital Marketing</option>
                    <option>Social Media Marketing</option>
                  </select>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-medium text-text-secondary ml-1">Project Details</label>
                  <textarea 
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your goals..."
                    className="w-full bg-bg-primary/50 border border-border-subtle rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-secondary/30 focus:outline-none focus:border-accent-blue/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center justify-center gap-3 px-8 py-3.5 bg-[#25D366] text-white rounded-xl text-sm font-semibold tracking-wide hover:bg-[#20b858] hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] transition-all duration-300 w-full mt-2"
                >
                  Send via WhatsApp
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
