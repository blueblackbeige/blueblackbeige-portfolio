import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { socialMediaPlans } from "@/data/social-media-plans";

export const metadata: Metadata = {
  title: "Web, SEO & Digital Marketing Services in India | Blue Black Beige",
  description: "Explore web design, organic growth and digital marketing services from Blue Black Beige, based in Patna and working with businesses across India.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Web, SEO & Digital Marketing Services in India | Blue Black Beige", description: "Web design, SEO and digital marketing services for businesses across India.", url: "https://blueblackbeige.in/services", type: "website" },
};

const services = [
  { title: "Web design & development", href: "/web-design-development", description: "Plan, design and build accessible, mobile-ready business websites with a clear customer journey." },
  { title: "SEO & organic growth", href: "/seo-organic-growth", description: "Improve technical health, useful content and measurement to build sustainable search visibility." },
  { title: "Digital marketing", href: "/digital-marketing", description: "Connect content, social, campaigns and your website to business goals and measurable next steps." },
];

export default function ServicesPage() {
  return <main className="min-h-screen bg-bg-primary text-text-primary"><Navbar />
    <header className="relative overflow-hidden border-b border-border-subtle">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-accent-blue/[0.08] blur-[100px]" />
      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-32 sm:pb-24 sm:pt-40">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-blue">Services · India</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <div>
            <h1 className="max-w-4xl font-serif text-4xl font-medium leading-tight sm:text-6xl">Digital services for businesses across India</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-secondary">From brand and web to organic growth and social media, find the service that fits your next step.</p>
          </div>
          <a href="#pricing" className="group inline-flex min-h-14 items-center justify-between gap-5 rounded-2xl border border-accent-blue/40 bg-accent-blue/[0.08] px-5 py-4 text-sm font-semibold text-white transition-colors hover:border-accent-blue hover:bg-accent-blue/[0.14]">
            <span><span className="block text-[10px] uppercase tracking-[0.2em] text-accent-blue">Looking for rates?</span><span className="mt-1 block">See plans &amp; pricing</span></span>
            <ArrowDown aria-hidden="true" className="h-4 w-4 text-accent-beige transition-transform group-hover:translate-y-1" />
          </a>
        </div>
        <nav aria-label="On this page" className="mt-10 flex flex-wrap gap-3 border-t border-border-subtle pt-5">
          <a href="#service-list" className="rounded-full border border-border-subtle px-4 py-2 text-xs text-text-secondary transition-colors hover:border-white/40 hover:text-white">Explore services</a>
          <a href="#pricing" className="rounded-full border border-border-subtle px-4 py-2 text-xs text-text-secondary transition-colors hover:border-white/40 hover:text-white">Pricing</a>
          <Link href="/#contact" className="rounded-full border border-border-subtle px-4 py-2 text-xs text-text-secondary transition-colors hover:border-white/40 hover:text-white">Custom project quote</Link>
        </nav>
      </div>
    </header>
    <section id="service-list" aria-labelledby="service-list-heading" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-20">
      <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">What we do</p><h2 id="service-list-heading" className="mt-3 font-serif text-3xl text-white sm:text-4xl">Choose a place to start</h2></div>
        <p className="max-w-md text-sm leading-relaxed text-text-secondary">Explore the scope, approach and next steps for each service.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service, index) => <article key={service.href} className="group flex min-h-64 flex-col rounded-2xl border border-border-subtle bg-bg-secondary/20 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent-blue/40 hover:bg-bg-secondary/35 sm:p-7">
          <div className="flex items-center justify-between"><span className="text-xs font-medium tracking-[0.18em] text-accent-beige">0{index + 1}</span><ArrowUpRight aria-hidden="true" className="h-4 w-4 text-text-secondary transition-colors group-hover:text-accent-beige" /></div>
          <h3 className="mt-7 font-serif text-2xl text-white">{service.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">{service.description}</p>
          <Link href={service.href} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-beige">Explore service <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
        </article>)}
      </div>
    </section>
    <section id="pricing" aria-labelledby="pricing-heading" className="scroll-mt-24 border-y border-border-subtle bg-bg-secondary/10">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">Pricing · Social media · India</p><h2 id="pricing-heading" className="mt-3 max-w-3xl font-serif text-3xl text-white sm:text-4xl">Choose how much momentum you need.</h2><p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">Start with a steady foundation or put more production and growth support behind your brand. Monthly fees are shown clearly; ad spend is separate.</p></div>
          <Link href="/#contact" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-accent-beige px-5 py-3 text-sm font-semibold text-bg-primary transition-colors hover:bg-accent-beige/90">Talk through your goals <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
        </div>
        <div className="mt-9 grid items-stretch gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          {socialMediaPlans.map((plan, index) => {
            const isPilot = index === 1;
            return <article key={plan.name} className={`relative overflow-hidden rounded-2xl border p-6 sm:p-8 ${isPilot ? "border-accent-blue/50 bg-accent-blue/[0.08] lg:p-9" : "border-border-subtle bg-bg-primary/70 lg:mt-8"}`}>
              {isPilot && <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-accent-blue/[0.12] blur-[80px]" />}
              <div className="relative">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-blue">0{index + 1} · {plan.audience}</p><h3 className={`mt-3 font-serif text-2xl text-white ${isPilot ? "sm:text-3xl" : ""}`}>{plan.name}</h3></div>
                  {isPilot && <span className="rounded-full border border-accent-blue/40 bg-accent-blue/[0.1] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-accent-blue">Best for momentum</span>}
                </div>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-text-secondary">{plan.tagline}</p>
                <div className="mt-6 border-y border-border-subtle py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-secondary">Monthly plan fee</p>
                  <p className={`mt-1 font-semibold tracking-tight text-white ${isPilot ? "text-4xl sm:text-5xl" : "text-3xl"}`}>{plan.monthlyPrice} <span className="text-sm font-normal text-text-secondary">/ month</span></p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2 text-xs"><span className="rounded-full border border-border-subtle px-3 py-2 text-text-secondary"><strong className="text-white">Platforms:</strong> {plan.platforms}</span><span className="rounded-full border border-border-subtle px-3 py-2 text-text-secondary"><strong className="text-white">Focus:</strong> {plan.focus}</span></div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">What&apos;s included</p>
                <ul className={`mt-4 grid gap-3 ${isPilot ? "sm:grid-cols-2" : ""}`}>{plan.highlights.map((highlight) => <li key={highlight} className="flex items-start gap-2 text-sm leading-relaxed text-text-secondary"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent-beige" />{highlight}</li>)}</ul>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href="/digital-marketing#social-plans" className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-white/20 px-4 py-3 text-sm font-medium text-white transition-colors hover:border-white/40">View full inclusions</Link>
                  <Link href="/#contact" aria-label={`Contact us about the ${plan.name}`} className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-accent-beige px-4 py-3 text-sm font-semibold text-bg-primary transition-colors hover:bg-accent-beige/90">Discuss this plan</Link>
                </div>
              </div>
            </article>;
          })}
        </div>
        <p className="mt-7 rounded-xl border border-border-subtle px-5 py-4 text-sm leading-relaxed text-text-secondary">Need web design, SEO or a broader marketing scope? Those projects are quoted to fit the goals and work involved. <Link href="/#contact" className="font-medium text-white underline decoration-white/30 underline-offset-4">Request a custom quote</Link>.</p>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20"><div className="rounded-2xl border border-border-subtle bg-bg-secondary/20 p-7 sm:p-10"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">Based in Patna · Working across India</p><h2 className="mt-3 font-serif text-2xl text-white">A scope built around your business</h2><p className="mt-4 max-w-3xl leading-relaxed text-text-secondary">We work remotely with teams and business owners across India. Recommendations are based on your goals, customer questions and available evidence, with no promise of specific search rankings.</p><Link href="/#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-beige">Tell us what you need <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link></div>
    </section>
    <Footer /></main>;
}
