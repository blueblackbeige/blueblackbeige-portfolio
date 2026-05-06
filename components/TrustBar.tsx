"use client";

// Trust indicators section — builds confidence for clients viewing the portfolio
// Shows review stars, verified badges, and trust signals

export default function TrustBar() {
  return (
    <section className="relative py-10 bg-ink overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="flex items-center justify-between flex-wrap gap-8">
          
          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} viewBox="0 0 20 20" className="w-4 h-4">
                  <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.28l-4.77 2.44.91-5.33L2.27 6.62l5.34-.78L10 1z"
                    fill="#2952CC" />
                </svg>
              ))}
            </div>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-beige/50">
              5.0 from 12 reviews
            </span>
          </div>

          {/* Trust badges */}
          <div className="hidden md:flex items-center gap-6">
            {[
              { icon: "◆", label: "Next.js Partner" },
              { icon: "◉", label: "Verified on Clutch" },
              { icon: "✦", label: "100% On-time Delivery" },
              { icon: "△", label: "ISO Compliant Process" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                <span className="text-electric text-xs">{badge.icon}</span>
                <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-beige/40">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>

          {/* Client count */}
          <div className="flex items-center gap-3">
            {/* Overlapping avatar circles */}
            <div className="flex -space-x-2">
              {["#2952CC", "#7C9A84", "#8B7349", "#64748B"].map((color, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-ink flex items-center justify-center"
                  style={{ background: color }}
                >
                  <span className="text-white text-[8px] font-mono font-bold">
                    {["N", "A", "R", "M"][i]}
                  </span>
                </div>
              ))}
            </div>
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-beige/50">
              25+ happy clients
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
