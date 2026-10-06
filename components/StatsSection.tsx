import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "01", label: "Based in Patna", sub: "Bihar, India" },
  { value: "02", label: "Working across India", sub: "Remote collaboration" },
  { value: "03", label: "Strategy to launch", sub: "Connected digital services" },
  { value: "04", label: "Selected work", sub: "Explore real project examples" },
];

export default function StatsSection() {
  return (
    <section className="relative py-16 lg:py-20">
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08}>
              <div
                className={`py-10 lg:py-16 px-4 sm:px-6 lg:px-10 ${
                  i === 1
                    ? "border-l border-white/[0.06]"
                    : i === 2
                    ? "border-t border-white/[0.06] lg:border-t-0 lg:border-l"
                    : i === 3
                    ? "border-t border-l border-white/[0.06] lg:border-t-0"
                    : ""
                }`}
              >
                {/* Giant number */}
                <div className="text-4xl sm:text-5xl xl:text-7xl font-serif font-medium tracking-tight text-white leading-none mb-3 lg:mb-4">
                  {stat.value}
                </div>

                {/* Label */}
                <p className="text-xs sm:text-sm font-medium text-white/70 mb-1">
                  {stat.label}
                </p>
                <p className="text-[10px] sm:text-xs text-text-secondary/60 tracking-wide">
                  {stat.sub}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}
