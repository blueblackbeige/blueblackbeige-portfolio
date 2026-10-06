import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 lg:py-36">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/[0.03] rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-[1440px] mx-auto section-padding">
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-xs tracking-[0.3em] text-accent-blue font-semibold uppercase mb-5 block">
              Selected Work
            </span>
            <h2 className="text-3xl lg:text-5xl font-serif font-medium">
              Work across different needs
              <span className="text-accent-blue">.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5">
          <Link href="/work#fixnear" className="luxury-border rounded-3xl p-7 sm:p-9 bg-bg-secondary/20 hover:bg-bg-secondary/40 transition-colors">
            <p className="text-xs tracking-[0.2em] text-accent-blue uppercase mb-4">Home services · Website</p>
            <h3 className="text-2xl font-serif text-white mb-3">FixNear</h3>
            <p className="text-sm leading-relaxed text-text-secondary">A service website that brings household repair options together with clear service choices and booking calls to action.</p>
            <span className="mt-6 inline-block text-sm text-white">View selected work →</span>
          </Link>
          <Link href="/work#aurum" className="luxury-border rounded-3xl p-7 sm:p-9 bg-bg-secondary/20 hover:bg-bg-secondary/40 transition-colors">
            <p className="text-xs tracking-[0.2em] text-accent-blue uppercase mb-4">Restaurant · Website</p>
            <h3 className="text-2xl font-serif text-white mb-3">AURUM</h3>
            <p className="text-sm leading-relaxed text-text-secondary">A restaurant website presenting its menu, private dining and table reservation journey through atmospheric photography.</p>
            <span className="mt-6 inline-block text-sm text-white">View selected work →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
