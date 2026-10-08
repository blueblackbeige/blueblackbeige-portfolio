import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { SocialMediaPlan } from "@/data/social-media-plans";

type ServicePageData = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  intro: string;
  services: string[];
  process: { title: string; body: string }[];
  questions: { question: string; answer: string }[];
  related: { title: string; href: string }[];
  packages?: SocialMediaPlan[];
};

export default function ServiceLandingPage({ data }: { data: ServicePageData }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.title,
    description: data.description,
    provider: { "@id": "https://blueblackbeige.in/#organization" },
    areaServed: [
      { "@type": "City", name: "Patna" },
      { "@type": "State", name: "Bihar" },
      { "@type": "Country", name: "India" },
    ],
    url: `https://blueblackbeige.in/${data.slug}`,
  };

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <header className="border-b border-border-subtle">
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-28 sm:pb-24 sm:pt-36">
          <Link href="/" className="text-sm text-text-secondary hover:text-white">Blue Black Beige <span aria-hidden="true">/</span> India</Link>
          <p className="mt-12 text-xs font-semibold uppercase tracking-[0.3em] text-accent-blue">{data.eyebrow} · Patna, India</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl font-medium leading-tight sm:text-6xl">{data.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-text-secondary">{data.description}</p>
          <p className="mt-4 max-w-3xl leading-relaxed text-text-secondary">{data.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/#contact" className="rounded-full bg-accent-beige px-6 py-3 text-sm font-semibold text-bg-primary">Discuss a project</Link>
            <Link href="/work" className="rounded-full border border-white/20 px-6 py-3 text-sm text-white">See selected work</Link>
          </div>
        </div>
      </header>

      {data.packages && data.packages.length > 0 && (
        <section id="social-plans" aria-labelledby="social-plans-heading" className="scroll-mt-24 border-y border-border-subtle bg-bg-secondary/10">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">Pricing · Social media · India</p>
                <h2 id="social-plans-heading" className="mt-3 font-serif text-3xl text-white sm:text-4xl">Choose how much momentum you need.</h2>
                <p className="mt-4 leading-relaxed text-text-secondary">Start with a steady foundation or put more production and growth support behind your brand. Contact us for a tailored quote; ad spend is separate.</p>
              </div>
              <Link href="/#contact" className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-accent-beige px-5 py-3 text-sm font-semibold text-bg-primary transition-colors hover:bg-accent-beige/90">Talk through your goals</Link>
            </div>
            <div className="mt-9 grid items-stretch gap-5 lg:grid-cols-[0.85fr_1.15fr]">
              {data.packages.map((plan, index) => {
                const isPilot = index === 1;
                return <article key={plan.name} className={`relative overflow-hidden rounded-2xl border p-6 shadow-2xl sm:p-8 ${isPilot ? "border-accent-blue/50 bg-gradient-to-br from-[#1d2b62] via-[#17234b] to-[#0d142b] shadow-accent-blue/15 lg:p-9" : "border-accent-beige/70 bg-gradient-to-br from-[#e9dccd] via-[#d8c1a7] to-[#c5a989] text-bg-primary shadow-black/30 lg:mt-8"}`}>
                  {isPilot && <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-accent-blue/30 blur-[80px]" />}
                  <div className="relative">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div><p className={`text-xs font-semibold uppercase tracking-[0.18em] ${isPilot ? "text-accent-beige" : "text-accent-blue"}`}>0{index + 1} · {plan.audience}</p><h3 className={`mt-3 font-serif text-2xl ${isPilot ? "text-white sm:text-3xl" : "text-bg-primary"}`}>{plan.name}</h3></div>
                      {isPilot && <span className="rounded-full border border-accent-beige/40 bg-white/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-accent-beige">Best for momentum</span>}
                    </div>
                    <p className={`mt-2 max-w-lg text-sm leading-relaxed ${isPilot ? "text-white/75" : "text-bg-primary/75"}`}>{plan.tagline}</p>
                    <div className={`mt-6 border-y py-4 ${isPilot ? "border-white/15" : "border-bg-primary/15"}`}>
                      <p className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${isPilot ? "text-white/65" : "text-bg-primary/65"}`}>Pricing</p>
                      <p className={`mt-1 font-semibold tracking-tight ${isPilot ? "text-white text-2xl sm:text-3xl" : "text-bg-primary text-2xl"}`}>Contact for a quote</p>
                      <p className={`mt-1 text-xs ${isPilot ? "text-white/65" : "text-bg-primary/65"}`}>Ad spend is billed separately.</p>
                    </div>
                    <div className={`mt-5 flex flex-wrap gap-2 text-xs ${isPilot ? "text-white/80" : "text-bg-primary/80"}`}>
                      <span className={`rounded-full border px-3 py-2 ${isPilot ? "border-white/15" : "border-bg-primary/20"}`}><strong className={isPilot ? "text-white" : "text-bg-primary"}>Platforms:</strong> {plan.platforms}</span>
                      <span className={`rounded-full border px-3 py-2 ${isPilot ? "border-white/15" : "border-bg-primary/20"}`}><strong className={isPilot ? "text-white" : "text-bg-primary"}>Focus:</strong> {plan.focus}</span>
                    </div>
                    <h4 className={`mt-7 text-xs font-semibold uppercase tracking-[0.16em] ${isPilot ? "text-white/65" : "text-bg-primary/65"}`}>What&apos;s included</h4>
                    <ul className={`mt-4 grid gap-3 ${isPilot ? "sm:grid-cols-2" : ""}`}>
                      {plan.deliverables.map((item) => (
                        <li key={item.title} className={`rounded-xl border p-4 ${isPilot ? "border-white/15 bg-white/[0.04]" : "border-bg-primary/15 bg-white/20"}`}>
                          <p className={`text-sm font-medium ${isPilot ? "text-white" : "text-bg-primary"}`}>{item.title}</p>
                          <p className={`mt-1 text-xs leading-relaxed ${isPilot ? "text-white/75" : "text-bg-primary/75"}`}>{item.description}</p>
                        </li>
                      ))}
                    </ul>
                    <Link href="/#contact" aria-label={`Contact us about the ${plan.name}`} className={`mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${isPilot ? "bg-accent-beige text-bg-primary hover:bg-accent-beige/90" : "bg-bg-primary text-white hover:bg-bg-primary/85"}`}>
                      Discuss this plan
                    </Link>
                  </div>
                </article>;
              })}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[0.7fr_1fr] md:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">Scope</p>
          <h2 className="mt-4 font-serif text-3xl text-white">What the work can include</h2>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {data.services.map((item) => <li key={item} className="rounded-xl border border-border-subtle bg-bg-secondary/20 p-4 text-sm leading-relaxed text-text-secondary">{item}</li>)}
        </ul>
      </section>

      <section className="border-y border-border-subtle bg-bg-secondary/10">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">How we work</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {data.process.map((step, index) => <article key={step.title} className="rounded-2xl border border-border-subtle p-6">
              <p className="text-xs text-accent-beige">0{index + 1}</p>
              <h3 className="mt-4 font-serif text-xl text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{step.body}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue">Questions</p>
          <h2 className="mt-4 font-serif text-3xl text-white">Answers before you begin</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {data.questions.map((item) => <details key={item.question} className="group rounded-2xl border border-border-subtle p-6">
            <summary className="cursor-pointer text-base font-medium text-white">{item.question}</summary>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">{item.answer}</p>
          </details>)}
        </div>
      </section>

      <nav aria-label="Related services" className="mx-auto max-w-5xl border-t border-border-subtle px-6 py-10">
        <p className="text-xs uppercase tracking-[0.2em] text-text-secondary">Related services</p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">{data.related.map((link) => <Link key={link.href} href={link.href} className="text-sm text-white underline decoration-white/20 underline-offset-4 hover:decoration-white">{link.title}</Link>)}</div>
      </nav>
      <footer className="mx-auto max-w-5xl px-6 pb-16">
        <p className="rounded-2xl bg-bg-secondary/30 p-7 text-text-secondary">Blue Black Beige is based in Patna, Bihar and works with businesses across India. <Link href="/#contact" className="ml-1 text-white underline underline-offset-4">Tell us what you are building.</Link></p>
      </footer>
      <Footer />
    </main>
  );
}
