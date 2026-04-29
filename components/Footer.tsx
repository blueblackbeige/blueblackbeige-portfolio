"use client";

import { useEffect, useState } from "react";

const cities = [
  { id: "BLR", name: "Bengaluru", tz: "Asia/Kolkata"     },
  { id: "LDN", name: "London",    tz: "Europe/London"     },
  { id: "NYC", name: "New York",  tz: "America/New_York"  },
  { id: "TYO", name: "Tokyo",     tz: "Asia/Tokyo"        },
];

function timeIn(tz: string) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: tz, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
  }).format(new Date());
}

export default function Footer() {
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const tick = () => {
      const next: Record<string, string> = {};
      cities.forEach((c) => (next[c.id] = timeIn(c.tz)));
      setTimes(next);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative bg-ink text-beige pt-24 pb-10" data-cursor="light">
      <div className="max-w-[1600px] mx-auto px-8">

        {/* Six-colour bar at top — three core + three accents */}
        <div className="grid grid-cols-6 gap-px mb-16 h-1.5">
          <div className="bg-electric" />
          <div className="bg-ink-mid border-t border-beige/10" />
          <div className="bg-beige-dark" />
          <div className="bg-sage" />
          <div className="bg-slate" />
          <div className="bg-stone" />
        </div>

        {/* Wordmark */}
        <div className="border-b border-beige/10 pb-12 mb-12">
          <h2
            className="font-serif font-normal leading-[0.85] tracking-tightest text-beige"
            style={{ fontSize: "clamp(64px, 16vw, 280px)" }}
          >
            Blue Black <span className="italic text-beige-dark">Beige</span>
          </h2>
          <div className="flex items-end justify-between flex-wrap gap-4 mt-6">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-stone">
              Design &amp; development studio · Est. 2026
            </p>
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-stone">
              Made in India 🇮🇳
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-5">
            <p className="text-base leading-relaxed text-beige/70 max-w-md">
              A three-person agency working at the intersection of design and
              engineering. Based in Patna, working remotely for clients
              worldwide.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2">
            <h5 className="font-mono text-[10px] tracking-[0.3em] uppercase text-slate mb-5">
              Studio
            </h5>
            <ul className="space-y-3 text-sm">
              {["Work", "About", "Approach", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`}
                     className="link-line text-beige/70 hover:text-beige transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <h5 className="font-mono text-[10px] tracking-[0.3em] uppercase text-sage mb-5">
              Reach us
            </h5>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:nayan@blueblackbeige.in"
                   className="link-line text-beige/70 hover:text-beige transition-colors">
                  nayan@blueblackbeige.in
                </a>
              </li>
              <li>
                <a href="mailto:alok@blueblackbeige.in"
                   className="link-line text-beige/70 hover:text-beige transition-colors">
                  alok@blueblackbeige.in
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <h5 className="font-mono text-[10px] tracking-[0.3em] uppercase text-stone mb-5">
              Networks
            </h5>
            <ul className="space-y-3 text-sm">
              {["LinkedIn ↗", "Instagram ↗", "GitHub ↗"].map((l) => (
                <li key={l}>
                  <a href="#" className="link-line text-beige/70 hover:text-beige transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mini swatch */}
            <div className="mt-8 flex gap-1.5">
              {[
                { bg: "bg-electric",   title: "Blue"   },
                { bg: "bg-beige-dark", title: "Beige"  },
                { bg: "bg-sage",       title: "Sage"   },
                { bg: "bg-slate",      title: "Slate"  },
                { bg: "bg-stone",      title: "Stone"  },
              ].map((s) => (
                <div key={s.title} title={s.title}
                     className={`w-5 h-5 rounded-sm ${s.bg} transition-transform duration-300 hover:scale-110`} />
              ))}
            </div>
          </div>
        </div>

        {/* World clocks — labels in their accent color */}
        <div className="pt-8 border-t border-beige/10 flex gap-12 flex-wrap mb-12">
          {cities.map((c, i) => {
            const colors = ["text-electric", "text-slate", "text-sage", "text-stone"];
            return (
              <div key={c.id} className="font-serif text-[22px] italic flex items-baseline gap-3">
                <span className="tabular-nums text-beige">
                  {times[c.id] || "—:—:—"}
                </span>
                <span className={`font-sans not-italic text-[10px] tracking-[0.25em] uppercase ${colors[i]}`}>
                  {c.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-beige/10 flex justify-between flex-wrap gap-4 text-[11px] text-stone font-mono tracking-wider">
          <span>© 2026 Blue Black Beige. All rights reserved.</span>
          <span>Made in India · Patna, Bihar</span>
        </div>

      </div>
    </footer>
  );
}
