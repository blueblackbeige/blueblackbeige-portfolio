"use client";

import { useEffect, useRef, useState } from "react";

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function clamp01(v: number): number {
  return Math.min(1, Math.max(0, v));
}

const SQUARES = [
  { bg: "#2952CC", label: "Blue",  hex: "#2952CC" },
  { bg: "#0A0A0A", label: "Black", hex: "#0A0A0A" },
  { bg: "#8B7349", label: "Beige", hex: "#8B7349" },
];

const DROP_START = [0, 180, 360];
const DROP_DUR = 650;
const TOTAL_MS = 4200;

export default function Loader() {
  const [elapsed, setElapsed] = useState(0);
  const [done, setDone] = useState(false);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);

  useEffect(() => {
    startRef.current = performance.now();
    const tick = (now: number) => {
      const e = now - startRef.current;
      setElapsed(e);
      if (e < TOTAL_MS + 1200) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDone(true);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  if (done) return null;

  const pct = Math.min(100, Math.round((elapsed / TOTAL_MS) * 100));
  const isExiting = elapsed >= TOTAL_MS;
  const geoP = easeInOutCubic(clamp01((elapsed - 200) / 2200));
  const tagP = clamp01((elapsed - DROP_START[2] - DROP_DUR - 100) / 600);
  const gridP = clamp01((elapsed - 50) / 800);
  const rotAngle = (elapsed / 40) % 360;

  return (
    <div
      className="fixed inset-0 z-[200] overflow-hidden"
      style={{
        background: "#E8DCC4",
        transform: isExiting ? "translateY(-100%)" : "translateY(0)",
        transition: isExiting ? "transform 1.1s cubic-bezier(0.85, 0, 0.15, 1)" : "none",
      }}
    >
      {/* ── Dot grid texture ───────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: gridP * 0.04 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lgrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="0.6" fill="#0A0A0A" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lgrid)" />
        </svg>
      </div>

      {/* ── Orbiting rings — visible on ALL screen sizes ─────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 800 800"
          className="absolute"
          style={{
            width: "min(90vw, 90vh, 750px)",
            height: "min(90vw, 90vh, 750px)",
            opacity: geoP * 0.08,
          }}
        >
          <circle cx="400" cy="400" r="380" fill="none" stroke="#2952CC" strokeWidth="0.6"
            strokeDasharray={`${geoP * 2388} ${2388 - geoP * 2388}`}
            style={{ transform: `rotate(${rotAngle}deg)`, transformOrigin: "400px 400px" }}
          />
          <circle cx="400" cy="400" r="300" fill="none" stroke="#0A0A0A" strokeWidth="0.5"
            strokeDasharray={`${geoP * 1885} ${1885 - geoP * 1885}`}
            style={{ transform: `rotate(${-rotAngle * 0.7}deg)`, transformOrigin: "400px 400px" }}
          />
          <circle cx="400" cy="400" r="220" fill="none" stroke="#8B7349" strokeWidth="0.5"
            strokeDasharray={`${geoP * 1382} ${1382 - geoP * 1382}`}
            style={{ transform: `rotate(${rotAngle * 0.5}deg)`, transformOrigin: "400px 400px" }}
          />
          <line x1="400" y1="10" x2="400" y2="790" stroke="#0A0A0A" strokeWidth="0.25" opacity={geoP * 0.3} />
          <line x1="10" y1="400" x2="790" y2="400" stroke="#0A0A0A" strokeWidth="0.25" opacity={geoP * 0.3} />
          <line x1="120" y1="120" x2="680" y2="680" stroke="#2952CC" strokeWidth="0.2" opacity={geoP * 0.15} />
          <line x1="680" y1="120" x2="120" y2="680" stroke="#8B7349" strokeWidth="0.2" opacity={geoP * 0.15} />
          {[[400,20],[400,780],[20,400],[780,400]].map(([cx,cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="3" fill={i%2===0?"#2952CC":"#8B7349"} opacity={geoP*0.5} />
          ))}
          {[0, 90, 180, 270].map((angle, i) => {
            const r = 380;
            const a = ((angle + rotAngle) * Math.PI) / 180;
            const x = 400 + r * Math.cos(a);
            const y = 400 + r * Math.sin(a);
            return (
              <rect key={`d${i}`} x={x-4} y={y-4} width="8" height="8"
                fill="#2952CC" opacity={geoP*0.3}
                style={{ transform: "rotate(45deg)", transformOrigin: `${x}px ${y}px` }}
              />
            );
          })}
        </svg>
      </div>

      {/* ── Floating brand words ──────────────────────────────────── */}
      {/* Desktop: large watermarks in corners */}
      {[
        { text: "DESIGN", x: "8%",  y: "20%", delay: 400,  color: "#2952CC" },
        { text: "BUILD",  x: "78%", y: "18%", delay: 700,  color: "#0A0A0A" },
        { text: "BRAND",  x: "82%", y: "72%", delay: 1000, color: "#8B7349" },
        { text: "SHIP",   x: "6%",  y: "75%", delay: 1300, color: "#0A0A0A" },
      ].map((w, i) => {
        const wP = clamp01((elapsed - w.delay) / 800);
        return (
          <div
            key={`dw${i}`}
            className="absolute pointer-events-none hidden lg:block"
            style={{
              left: w.x, top: w.y,
              opacity: wP * 0.06,
              transform: `translateY(${(1 - wP) * 20}px)`,
            }}
          >
            <span className="font-serif italic"
              style={{ fontSize: "clamp(60px, 8vw, 120px)", color: w.color, letterSpacing: "-0.03em" }}>
              {w.text}
            </span>
          </div>
        );
      })}

      {/* Mobile: smaller brand words stacked vertically behind the squares */}
      {[
        { text: "Design",  delay: 300,  color: "#2952CC", y: "-110px" },
        { text: "Develop", delay: 550,  color: "#0A0A0A", y: "-60px"  },
        { text: "Brand",   delay: 800,  color: "#8B7349", y: "110px"  },
        { text: "Launch",  delay: 1050, color: "#0A0A0A", y: "160px"  },
      ].map((w, i) => {
        const wP = clamp01((elapsed - w.delay) / 700);
        return (
          <div
            key={`mw${i}`}
            className="absolute inset-x-0 flex justify-center pointer-events-none lg:hidden"
            style={{
              top: "50%",
              transform: `translateY(${w.y})`,
              opacity: wP * 0.06,
            }}
          >
            <span className="font-serif italic text-[56px] sm:text-[72px]"
              style={{ color: w.color, letterSpacing: "-0.03em" }}>
              {w.text}
            </span>
          </div>
        );
      })}

      {/* ── Corner brackets (responsive) ──────────────────────────── */}
      {[
        { className: "top-5 left-5 md:top-10 md:left-10",         d: "M0 16L0 0L16 0",   color: "#2952CC" },
        { className: "top-5 right-5 md:top-10 md:right-10",       d: "M28 0L44 0L44 16",  color: "#8B7349" },
        { className: "bottom-16 left-5 md:bottom-20 md:left-10",  d: "M0 28L0 44L16 44",  color: "#8B7349" },
        { className: "bottom-16 right-5 md:bottom-20 md:right-10",d: "M28 44L44 44L44 28",color: "#2952CC" },
      ].map((c, i) => (
        <div key={i}
          className={`absolute w-11 h-11 md:w-14 md:h-14 pointer-events-none ${c.className}`}
          style={{ opacity: geoP * 0.25 }}>
          <svg viewBox="0 0 44 44" fill="none" stroke={c.color} strokeWidth="1"><path d={c.d} /></svg>
        </div>
      ))}

      {/* ── Top bar ──────────────────────────────────────────────── */}
      <div className="absolute top-5 left-5 right-5 md:top-8 md:left-8 md:right-8 flex justify-between items-center z-10">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex gap-0.5 md:gap-1">
            {SQUARES.map((sq, i) => {
              const s = clamp01((elapsed - i * 180) / 400);
              return (
                <div key={i} style={{
                  width: 8, height: 8,
                  background: sq.bg, opacity: s,
                  transform: `scale(${s})`,
                }} />
              );
            })}
          </div>
          <span className="font-mono text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.35em] uppercase text-ink/40">
            Blue Black Beige
          </span>
        </div>
        <span className="font-mono text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.35em] uppercase text-ink/30">
          EST. 2026
        </span>
      </div>

      {/* ── Three B squares ──────────────────────────────────────── */}
      {/* 
        Mobile: 3 squares in a row, each ~28vw (105px on 375px screen)
        Tablet: ~18vw
        Desktop: max 210px
      */}
      <div className="absolute inset-0 flex items-center justify-center px-4 md:px-0">
        <div className="flex" style={{ gap: "clamp(6px, 1.5vw, 18px)" }}>
          {SQUARES.map((sq, i) => {
            const t = clamp01((elapsed - DROP_START[i]) / DROP_DUR);
            const eased = easeOutCubic(t);

            return (
              <div
                key={i}
                className="relative overflow-hidden"
                style={{
                  // Mobile: 28vw ensures 3 fit with gaps on 375px
                  // Tablet/Desktop: scales up naturally
                  width:  "clamp(95px, 28vw, 210px)",
                  height: "clamp(95px, 28vw, 210px)",
                  background: sq.bg,
                  transform: `translateY(${(1 - eased) * -70}px) scale(${0.92 + eased * 0.08})`,
                  opacity: eased,
                  display: "flex", flexDirection: "column",
                  alignItems: "flex-start", justifyContent: "space-between",
                  padding: "clamp(10px, 2vw, 22px)",
                  flexShrink: 0,
                  boxShadow: `0 ${18 * eased}px ${36 * eased}px rgba(10,10,10,${0.07 * eased})`,
                }}
              >
                {/* Diagonal line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100"
                  preserveAspectRatio="none" style={{ opacity: geoP * 0.12 }}>
                  <line x1="0" y1="100" x2="100" y2="0" stroke="#ffffff" strokeWidth="0.3" />
                  <line x1="0" y1="75"  x2="75"  y2="0" stroke="#ffffff" strokeWidth="0.15" />
                </svg>

                {/* Corner tick */}
                <svg className="absolute top-1.5 right-1.5 md:top-2 md:right-2 w-3 h-3 md:w-3.5 md:h-3.5 pointer-events-none"
                  viewBox="0 0 14 14" style={{ opacity: geoP * 0.35 }}>
                  <path d="M10 0L14 0L14 4" fill="none" stroke="#ffffff" strokeWidth="0.8" />
                </svg>

                {/* B */}
                <span style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontStyle: "italic",
                  // Mobile: 42px, scales with viewport
                  fontSize: "clamp(42px, 8vw, 100px)",
                  lineHeight: 1, color: "#ffffff",
                  position: "relative", zIndex: 1,
                }}>
                  B
                </span>

                {/* Label + hex */}
                <div style={{ position: "relative", zIndex: 1 }}>
                  <span style={{
                    fontFamily: "var(--font-mono), monospace",
                    // Slightly smaller on mobile
                    fontSize: "clamp(7px, 1.2vw, 9px)",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase" as const,
                    color: "rgba(255,255,255,0.45)", display: "block",
                  }}>
                    {sq.label}
                  </span>
                  {/* Hide hex on very small screens */}
                  <span className="hidden sm:block" style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: 7, letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.18)", marginTop: 2,
                  }}>
                    {sq.hex}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Tagline ──────────────────────────────────────────────── */}
      <div
        className="absolute left-4 right-4 md:left-0 md:right-0 flex flex-col items-center gap-1.5 md:gap-2"
        style={{
          // Position relative to bottom so it never overlaps squares
          bottom: "max(15%, 90px)",
          opacity: tagP,
          transform: `translateY(${(1 - tagP) * 12}px)`,
        }}
      >
        <p className="font-serif italic text-lg sm:text-xl md:text-2xl tracking-tightest text-ink/55 text-center">
          Design · Development · Brand
        </p>
        <p className="font-mono text-[8px] sm:text-[9px] tracking-[0.4em] md:tracking-[0.5em] uppercase text-ink/22 text-center">
          Premium web agency — Patna, India
        </p>
      </div>

      {/* ── Bottom progress ──────────────────────────────────────── */}
      <div className="absolute bottom-5 left-5 right-5 md:bottom-9 md:left-8 md:right-8 z-10">
        <div className="flex justify-between items-center mb-2 md:mb-3">
          <div className="flex items-center gap-2 md:gap-3">
            <span className="font-mono text-[9px] md:text-[10px] tracking-[0.25em] md:tracking-[0.3em] uppercase text-ink/30">
              {pct < 35 ? "Loading" : pct < 80 ? "Preparing" : "Ready"}
            </span>
            <span
              className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full"
              style={{
                background: pct < 80 ? "#2952CC" : "#7C9A84",
                animation: "pulseDot 1.2s ease-in-out infinite",
              }}
            />
          </div>
          <span className="font-mono text-[11px] md:text-[13px] tabular-nums text-ink/40">
            {String(pct).padStart(3, "0")}%
          </span>
        </div>
        <div className="relative w-full overflow-hidden" style={{ height: 2, background: "rgba(10,10,10,0.06)" }}>
          <div
            className="absolute inset-y-0 left-0"
            style={{
              width: `${pct}%`,
              background: "linear-gradient(90deg, #2952CC, #0A0A0A, #8B7349)",
              transition: "width 0.08s linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}
