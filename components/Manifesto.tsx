const principles = [
  { num: "01", title: "Excellent, not just good", italic: "Excellent,",  accent: "electric",
    body: "Acceptable isn't the goal. Every line, every spacing decision, every animation gets the same scrutiny — even if no one would notice." },
  { num: "02", title: "Challenge welcome",         italic: "welcome",     accent: "sage",
    body: "Ambitious briefs energise us. Hand us the problem you've been told is unsolvable and we'll find the angle." },
  { num: "03", title: "No time to lose",           italic: "time",        accent: "slate",
    body: "Your time is valuable. So is ours. We won't promise the impossible — but what we promise, we deliver, on the day we said we would." },
  { num: "04", title: "It belongs to you",         italic: "belongs",     accent: "stone",
    body: "You own everything we make — code, design, components, ideas. No lock-ins, no proprietary middleware. Your independence comes first." },
  { num: "05", title: "All is said",               italic: "said",        accent: "sage",
    body: "Honest collaboration means anyone — you, us, your team — can speak to anything at any time. All ideas welcome. The best one wins." },
  { num: "06", title: "Action!",                   italic: "Action!",     accent: "electric",
    body: "Enough about how we work. Time to prove what we're worth." },
];

const accentDot: Record<string, string> = {
  electric: "bg-electric",
  sage:     "bg-sage",
  slate:    "bg-slate",
  stone:    "bg-stone",
};

const accentText: Record<string, string> = {
  electric: "text-electric",
  sage:     "text-sage-dark",
  slate:    "text-slate-dark",
  stone:    "text-stone-dark",
};

const accentBorder: Record<string, string> = {
  electric: "border-electric/30",
  sage:     "border-sage/30",
  slate:    "border-slate/30",
  stone:    "border-stone/30",
};

function formatTitle(title: string, italic: string) {
  if (title === italic) return <em className="italic">{title}</em>;
  const parts = title.split(italic);
  return (<>{parts[0]}<em className="italic">{italic}</em>{parts[1]}</>);
}

export default function Manifesto() {
  return (
    <section id="approach" className="relative py-32 md:py-48 bg-beige-light border-y border-stone-light fade-up">
      <div className="max-w-[1600px] mx-auto px-8">

        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-stone">
              <span className="w-8 h-px bg-electric" />
              03 — Approach
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-serif font-normal leading-[0.95] tracking-tightest text-ink"
              style={{ fontSize: "clamp(40px, 7vw, 120px)" }}
            >
              Six things we{" "}
              <span className="italic text-electric">believe.</span>
            </h2>
          </div>
        </div>

        {/* Principles */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
          {principles.map((p) => (
            <div
              key={p.num}
              className={`pt-6 border-t ${accentBorder[p.accent]}`}
            >
              {/* Number + dot */}
              <div className="flex items-center gap-3 mb-5">
                <span className={`w-2 h-2 rounded-full ${accentDot[p.accent]}`} />
                <span className="font-mono text-[11px] tracking-[0.2em] text-stone">
                  {p.num}
                </span>
              </div>

              <h3 className={`font-serif text-3xl md:text-4xl leading-tight tracking-tightest mb-3 text-ink`}>
                {formatTitle(p.title, p.italic)}
              </h3>

              <p className="text-[15px] leading-[1.55] text-stone-dark max-w-md">
                {p.body}
                {p.num === "06" && (
                  <> <a href="#contact" className={`link-line ${accentText[p.accent]}`}>
                    Introduce us to your project →
                  </a></>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
