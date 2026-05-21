"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  return (
    <section id="contact" className="relative py-28 lg:py-36 overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
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
              <p className="text-text-secondary text-base leading-relaxed max-w-md mb-10">
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
              <div className="flex flex-wrap items-center gap-6 mt-10 pt-10 border-t border-border-subtle">
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
            <div className="luxury-border rounded-2xl p-8 lg:p-12 bg-bg-secondary/30 backdrop-blur-sm h-full flex flex-col items-center justify-center text-center min-h-[400px]">
              <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-medium text-white mb-4">
                Let&apos;s chat on WhatsApp
              </h3>
              <p className="text-sm text-text-secondary mb-8 max-w-sm">
                Skip the forms. Drop us a message directly and we&apos;ll respond as soon as possible to discuss your project.
              </p>
              <a
                href="https://wa.me/917667649211"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-xl text-sm font-semibold tracking-wide hover:bg-[#20b858] hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] transition-all duration-300 w-full sm:w-auto"
              >
                Message on WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
