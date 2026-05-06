"use client";

const steps = [
  {
    num: "01",
    title: "Discovery",
    italic: "Discovery",
    duration: "Week 1",
    description: "We learn your business, goals, audience, and competitors. We define the scope, timeline, and deliverables — no surprises later.",
    deliverables: ["Project brief", "Sitemap", "Wireframes", "Timeline"],
    accent: "electric",
  },
  {
    num: "02",
    title: "Design",
    italic: "Design",
    duration: "Week 2–3",
    description: "High-fidelity designs in Figma — not generic templates. Every page is custom-designed to match your brand and convert your audience.",
    deliverables: ["UI design", "Style guide", "Responsive layouts", "Prototype"],
    accent: "sage",
  },
  {
    num: "03",
    title: "Development",
    italic: "Development",
    duration: "Week 4–6",
    description: "We build with Next.js and React — production-grade code that's fast, accessible, and SEO-optimized. You see progress every week.",
    deliverables: ["Frontend code", "CMS setup", "Animations", "Testing"],
    accent: "slate",
  },
  {
    num: "04",
    title: "Launch",
    italic: "Launch",
    duration: "Week 7–8",
    description: "Final QA, performance optimization, and deployment. We handle DNS, SSL, analytics, and hand you a site that's ready to grow.",
    deliverables: ["Deployment", "SEO setup", "Analytics", "30-day support"],
    accent: "stone",
  },
];

const accentDot: Record<string, string> = {
  electric: "bg-electric",
  sage: "bg-sage",
  slate: "bg-slate",
  stone: "bg-stone",
};

const accentBorder: Record<string, string> = {
  electric: "border-electric/30",
  sage: "border-sage/30",
  slate: "border-slate/30",
  stone: "border-stone/30",
};

export default function Process() {
  return (
    <section id="process" className="relative py-32 md:py-48 bg-beige-light border-y border-stone-light fade-up">
      <div className="max-w-[1600px] mx-auto px-8">

        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-ink/45">
              <span className="w-8 h-px bg-electric" />
              04 — Process
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-serif font-normal leading-[0.95] tracking-tightest text-ink"
              style={{ fontSize: "clamp(40px, 7vw, 120px)" }}
            >
              How we <span className="italic text-electric">deliver.</span>
            </h2>
            <p className="text-lg text-ink/60 mt-6 max-w-xl">
              A transparent, proven process from first call to launch. No black boxes,
              no disappearing acts — you see exactly where your project stands at every stage.
            </p>
          </div>
        </div>

        {/* Process timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-0 md:left-[60px] top-0 bottom-0 w-px bg-stone-light hidden md:block" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`relative grid grid-cols-12 gap-6 md:gap-8 py-12 ${
                  i < steps.length - 1 ? "border-b border-stone-light" : ""
                }`}
              >
                {/* Step number with dot */}
                <div className="col-span-12 md:col-span-1 flex items-start gap-3 md:block">
                  <div className={`w-3 h-3 rounded-full ${accentDot[step.accent]} relative z-10 md:ml-[54px] hidden md:block`} />
                  <div className="font-mono text-[12px] tracking-[0.2em] text-ink/30 md:mt-4 md:text-center">
                    {step.num}
                  </div>
                </div>

                {/* Content */}
                <div className="col-span-12 md:col-span-6">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="font-serif text-3xl md:text-4xl tracking-tightest text-ink italic">
                      {step.title}
                    </h3>
                    <span className={`px-3 py-1 text-[10px] font-mono tracking-[0.15em] uppercase border ${accentBorder[step.accent]} text-ink/50`}>
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-[15px] leading-[1.6] text-ink/65 max-w-lg">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="col-span-12 md:col-span-5 md:pl-8 md:border-l md:border-stone-light">
                  <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-ink/35 mb-4">
                    Deliverables
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {step.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2">
                        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0" fill="none">
                          <path d="M3 8l3.5 3.5L13 5" stroke="#2952CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-sm text-ink/70">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline summary bar */}
        <div className="mt-16 p-8 bg-beige border border-stone-light">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-ink/35 mb-2">Typical timeline</div>
              <div className="font-serif text-2xl italic text-ink">6–8 weeks, kickoff to launch</div>
            </div>
            <div className="flex items-center gap-8">
              {steps.map((s) => (
                <div key={s.num} className="hidden md:flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${accentDot[s.accent]}`} />
                  <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-ink/40">{s.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
