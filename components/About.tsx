export default function About() {
  const services = [
    { label: "Brand identity",        color: "sage"  },
    { label: "UI / UX design",        color: "slate" },
    { label: "Web design",            color: "sage"  },
    { label: "Frontend engineering",  color: "stone" },
    { label: "Backend development",   color: "slate" },
    { label: "Full-stack web apps",   color: "sage"  },
    { label: "E-commerce",            color: "stone" },
    { label: "Design systems",        color: "slate" },
    { label: "Motion & animation",    color: "stone" },
    { label: "CMS integration",       color: "sage"  },
    { label: "SEO & performance",     color: "slate" },
    { label: "Art direction",         color: "stone" },
  ];

  const stack = [
    { category: "Frontend",   items: "React · Next.js · TypeScript · Tailwind · Framer Motion · GSAP · Three.js" },
    { category: "Backend",    items: "Node.js · Express · Hono · REST · GraphQL · WebSockets" },
    { category: "Database",   items: "PostgreSQL · MongoDB · Supabase · Prisma · Redis" },
    { category: "CMS",        items: "Sanity · Contentful · Payload · Notion API" },
    { category: "DevOps",     items: "Vercel · Docker · GitHub Actions · AWS · Cloudflare" },
    { category: "Design",     items: "Figma · Adobe CC · Spline · Rive · Lottie" },
  ];

  return (
    <section id="about" className="relative py-32 md:py-48 fade-up">
      <div className="max-w-[1600px] mx-auto px-8">

        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-stone">
              <span className="w-8 h-px bg-electric" />
              01 — Studio
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-serif font-normal leading-[0.95] tracking-tightest text-ink"
              style={{ fontSize: "clamp(40px, 7vw, 120px)" }}
            >
              A studio of <span className="italic">three,</span>
              <br />
              three colours,{" "}
              <span className="text-electric italic">one promise.</span>
            </h2>
          </div>
        </div>

        {/* Three philosophy panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-light mb-20">
          <div className="bg-electric text-beige p-10 md:p-12 min-h-[360px] flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-70 mb-4">Blue</div>
              <h3 className="font-serif text-4xl md:text-5xl leading-[0.95] tracking-tightest mb-4 italic font-normal">Logic.</h3>
              <p className="text-sm leading-relaxed opacity-90 max-w-xs">
                The engineering. Clean architecture, performant code, systems that scale without falling apart.
              </p>
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-50">#2952CC</div>
          </div>

          <div className="bg-ink text-beige p-10 md:p-12 min-h-[360px] flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-70 mb-4">Black</div>
              <h3 className="font-serif text-4xl md:text-5xl leading-[0.95] tracking-tightest mb-4 italic font-normal">Intent.</h3>
              <p className="text-sm leading-relaxed opacity-90 max-w-xs">
                The structure. Typography, hierarchy, the unflinching ink that gives every layout its backbone.
              </p>
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-50">#0A0A0A</div>
          </div>

          <div className="bg-beige-dark text-beige p-10 md:p-12 min-h-[360px] flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-70 mb-4">Beige</div>
              <h3 className="font-serif text-4xl md:text-5xl leading-[0.95] tracking-tightest mb-4 italic font-normal">Warmth.</h3>
              <p className="text-sm leading-relaxed opacity-90 max-w-xs">
                The paper. Breathing room, texture, the human quality that keeps the work from feeling cold.
              </p>
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-50">#8B7349</div>
          </div>
        </div>

        {/* Text + facts + stack */}
        <div className="grid grid-cols-12 gap-6 md:gap-12">
          <div className="col-span-12 md:col-span-7">
            <p className="text-lg md:text-xl leading-relaxed text-ink/80 mb-6">
              Blue Black Beige is a three-person agency taking briefs from founders, product teams,
              and ambitious brands. We work in focused sprints — no layers, no handoffs, no middlemen.
              You talk directly to the people doing the work.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-stone-dark mb-10">
              Every project gets the same care. We&apos;d rather do fewer things properly than
              spread thin across everything.
            </p>

            {/* Service chips */}
            <div className="flex flex-wrap gap-2 mb-16">
              {services.map((s) => (
                <span
                  key={s.label}
                  className={`px-4 py-2 text-sm border transition-all duration-300 cursor-default
                    ${s.color === "sage"
                      ? "bg-sage-subtle border-sage/30 text-sage-dark hover:bg-sage hover:text-beige hover:border-sage"
                      : s.color === "slate"
                      ? "bg-slate-subtle border-slate/30 text-slate-dark hover:bg-slate hover:text-beige hover:border-slate"
                      : "bg-stone-subtle border-stone/30 text-stone-dark hover:bg-stone hover:text-beige hover:border-stone"
                    }`}
                >
                  {s.label}
                </span>
              ))}
            </div>

            {/* Stack table */}
            <div>
              <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-stone mb-6">
                <span className="w-6 h-px bg-electric" />
                Full-stack capability
              </div>
              <div className="space-y-0 border-t border-stone-light">
                {stack.map(({ category, items }) => (
                  <div
                    key={category}
                    className="grid grid-cols-[100px_1fr] gap-6 py-3.5 border-b border-stone-light items-baseline"
                  >
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-stone">
                      {category}
                    </span>
                    <span className="text-sm text-ink/80 leading-relaxed">{items}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Facts */}
          <div className="col-span-12 md:col-span-5 md:pl-12 md:border-l md:border-stone-light">
            {[
              ["Founded",      "2026"],
              ["Based in",     "Patna, India"],
              ["Address",      "Remote, strictly"],
              ["Working",      "Globally"],
              ["Team",         "3 people"],
              ["Availability", "Open to projects"],
              ["Reply within", "24 hours"],
            ].map(([k, v], i) => (
              <div
                key={k}
                className={`flex justify-between py-4 text-sm ${i === 0 ? "border-t" : ""} border-b border-stone-light`}
              >
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-stone">{k}</span>
                <span className={`text-ink text-right ${v === "Open to projects" ? "text-sage-dark font-medium" : ""}`}>
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
