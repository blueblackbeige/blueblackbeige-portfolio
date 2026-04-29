"use client";

import { useEffect, useRef, useState } from "react";

// ─── Easing ─────────────────────────────────────────────────────────────────
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}
function easeInExpo(t: number): number {
  return t === 0 ? 0 : Math.pow(2, 10 * t - 10);
}
function clamp01(v: number): number {
  return Math.min(1, Math.max(0, v));
}

// ─── Timeline ────────────────────────────────────────────────────────────────
const WORD_DELAYS     = [0, 300, 600];   // stagger (ms)
const EXPAND_DURATION = 1600;            // each word expands over this long
const SETTLE_START    = 2500;            // words fully visible from here
const SETTLE_END      = 5000;            // collapse begins here
const COLLAPSE_DELAY_STEP = 200;         // stagger between word collapses
const TOTAL_MS        = 9000;            // exit starts here (extra 1s of clean squares at end)

// ─── Expansion value 0→1→0 for a single word ─────────────────────────────────
function getExpansion(elapsed: number, wordIndex: number): number {
  const delay = WORD_DELAYS[wordIndex];

  // REVEAL: starts at delay, takes EXPAND_DURATION
  const revealStart = delay + 200;
  const revealEnd = revealStart + EXPAND_DURATION;

  // COLLAPSE: starts at SETTLE_END + stagger, takes EXPAND_DURATION
  const collapseStart = SETTLE_END + wordIndex * COLLAPSE_DELAY_STEP;
  const collapseEnd = collapseStart + EXPAND_DURATION;

  if (elapsed < revealStart) return 0;
  if (elapsed < revealEnd) {
    return easeOutExpo(clamp01((elapsed - revealStart) / EXPAND_DURATION));
  }
  if (elapsed < collapseStart) return 1; // fully expanded, holding
  if (elapsed < collapseEnd) {
    return 1 - easeInExpo(clamp01((elapsed - collapseStart) / EXPAND_DURATION));
  }
  return 0; // fully collapsed
}

// ─── Word config ──────────────────────────────────────────────────────────────
const WORDS = [
  { suffix: "lue",  bg: "#2952CC" }, // Blue
  { suffix: "lack", bg: "#0A0A0A" }, // Black
  { suffix: "eige", bg: "#8B7349" }, // Beige (dark warm tan — white reads clearly)
];

// ─── Main component ───────────────────────────────────────────────────────────
export default function Loader() {
  const [elapsed, setElapsed]   = useState(0);
  const [done, setDone]         = useState(false);
  // Measured dimensions — set once on mount
  const [blockH, setBlockH]       = useState(180);  // square height (clamp value)
  const [bWidth, setBWidth]         = useState(100);  // actual "B" glyph width
  const [suffixPxs, setSuffixPxs]   = useState([0, 0, 0]);

  const rafRef      = useRef<number>(0);
  const startRef    = useRef<number>(0);
  const squareRef   = useRef<HTMLDivElement>(null); // height reference
  const bRef        = useRef<HTMLSpanElement>(null); // actual B glyph width
  const suffixRefs  = useRef<(HTMLSpanElement | null)[]>([null, null, null]);

  const PAD = 28; // equal padding left + right of the word

  // ── Step 1: measure actual pixel widths ────────────────────────────────────
  useEffect(() => {
    if (squareRef.current) setBlockH(squareRef.current.offsetWidth);
    if (bRef.current)      setBWidth(bRef.current.offsetWidth);
    const widths = suffixRefs.current.map((el) => el?.offsetWidth ?? 0);
    setSuffixPxs(widths);
  }, []);

  // ── Step 2: RAF loop — single source of truth ───────────────────────────────
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

  // ── Derived values ──────────────────────────────────────────────────────────
  const pct       = Math.min(100, Math.round((elapsed / TOTAL_MS) * 100));
  const isExiting = elapsed >= TOTAL_MS;

  return (
    <div
      className="fixed inset-0 z-[200] bg-beige overflow-hidden"
      style={{
        transform: isExiting ? "translateY(-100%)" : "translateY(0)",
        transition: isExiting
          ? "transform 1.2s cubic-bezier(0.85, 0, 0.15, 1)"
          : "none",
      }}
    >
      {/* ── Hidden measurement elements (off-screen) ────────────────────── */}
      <div
        className="fixed opacity-0 pointer-events-none flex"
        style={{ top: -9999, left: 0 }}
        aria-hidden="true"
      >
        {/* Height reference — clamp square dimension */}
        <div
          ref={squareRef}
          style={{ width: "clamp(110px, 18vw, 220px)", height: 1, flexShrink: 0 }}
        />
        {/* Actual "B" glyph width */}
        <span
          ref={bRef}
          className="font-serif italic whitespace-nowrap"
          style={{ fontSize: "clamp(70px, 12vw, 150px)" }}
        >
          B
        </span>
        {/* Suffix text widths */}
        {WORDS.map((w, i) => (
          <span
            key={i}
            ref={(el) => { suffixRefs.current[i] = el; }}
            className="font-serif italic whitespace-nowrap"
            style={{ fontSize: "clamp(70px, 12vw, 150px)" }}
          >
            {w.suffix}
          </span>
        ))}
      </div>

      {/* ── Top meta bar ─────────────────────────────────────────────────── */}
      <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-10">
        <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-ink/60">
          <span
            className="w-1.5 h-1.5 rounded-full bg-electric"
            style={{ animation: "pulseDot 1.4s ease-in-out infinite" }}
          />
          INITIALISING STUDIO
        </div>
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink/60">
          EST. 2026
        </div>
      </div>

      {/* ── Center: three word blocks ─────────────────────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="flex items-center"
          style={{ gap: "clamp(8px, 1.2vw, 16px)" }}
        >
          {WORDS.map((word, i) => {
            const expansion = getExpansion(elapsed, i);
            const delay     = WORD_DELAYS[i];

            // Perfect square when collapsed: width = height = blockH
            // B is centered inside the square
            // Expands rightward to show suffix
            const centerPad  = (blockH - bWidth) / 2;  // centers B in the square
            const collapsedW = blockH;                  // width = height → perfect square
            const expandedW  = blockH + suffixPxs[i] + PAD;
            const blockWidth = collapsedW + (expandedW - collapsedW) * expansion;

            // B text visible only while word is expanding/expanded
            // Fades out as collapse finishes (expansion < 0.12 on way back)
            const bVisible        = elapsed > delay + 400;
            const collapseStarted = elapsed > SETTLE_END + i * COLLAPSE_DELAY_STEP;
            const textOpacity     = !bVisible
              ? 0
              : collapseStarted
              ? Math.min(1, expansion / 0.12)   // fade out in final 12% of collapse
              : 1;

            return (
              <div
                key={i}
                style={{
                  backgroundColor: word.bg,
                  width: blockWidth,
                  height: blockH,
                  overflow: "hidden",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  // paddingLeft interpolates: centred in square → left-aligned as word expands
                  paddingLeft: centerPad + (PAD - centerPad) * expansion,
                  paddingRight: PAD,
                }}
              >
                {/* B + suffix sit directly next to each other — no gap div */}
                <span
                  className="font-serif italic whitespace-nowrap"
                  style={{
                    fontSize: "clamp(70px, 12vw, 150px)",
                    lineHeight: 1,
                    color: "#ffffff",
                    display: "block",
                    opacity: textOpacity,
                    transform: bVisible ? "translateY(0)" : "translateY(70%)",
                    transition: bVisible
                      ? "transform 1.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
                      : "none",
                  }}
                >
                  B{word.suffix}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Bottom: progress bar + counter ──────────────────────────────────── */}
      <div className="absolute bottom-10 left-8 right-8 z-10">
        <div className="flex items-end justify-between mb-4">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink/60">
            Blue · Black · Beige
          </div>
          <div className="font-mono text-[13px] tracking-[0.2em] text-ink/80 tabular-nums">
            {String(pct).padStart(3, "0")}%
          </div>
        </div>

        {/* Progress bar — driven by same pct value, perfectly in sync */}
        <div className="relative w-full h-px bg-ink/20">
          <div
            className="absolute inset-y-0 left-0 bg-ink"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  );
}
