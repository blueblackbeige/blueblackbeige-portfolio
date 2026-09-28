"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const REDIRECT_AFTER = 5; // seconds

export default function NotFound() {
  const router = useRouter();
  const [count, setCount] = useState(REDIRECT_AFTER);

  useEffect(() => {
    if (count <= 0) {
      router.push("/");
      return;
    }
    const timer = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, router]);

  return (
    <main className="relative bg-bg-primary text-text-primary min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-blue/[0.05] rounded-full blur-[140px] pointer-events-none" />

      {/* Top-left logo */}
      <Link href="/" className="absolute top-8 left-8 z-10">
        <Image
          src="/logo.png"
          alt="Blue Black Beige"
          width={48}
          height={48}
          className="object-contain opacity-80 hover:opacity-100 transition-opacity"
        />
      </Link>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl">

        {/* 404 number */}
        <p className="text-[120px] sm:text-[160px] leading-none font-serif font-bold tracking-tighter select-none mb-2"
          style={{ WebkitTextStroke: "2px rgba(255,255,255,0.12)", color: "transparent" }}>
          404
        </p>

        {/* Label */}
        <span className="text-xs tracking-[0.35em] text-accent-blue font-semibold uppercase mb-6 block">
          Page Not Found
        </span>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-serif font-medium leading-[1.05] mb-5">
          Coming<br />
          <span className="text-accent-blue">Soon</span>
          <span className="text-accent-beige">.</span>
        </h1>

        {/* Sub-text - no em-dashes */}
        <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-12 max-w-sm">
          This page is still being built. Head back home while you wait.
        </p>

        {/* Countdown ring */}
        <div className="relative w-20 h-20 mb-6">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
            <circle
              cx="40" cy="40" r="34"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="4"
            />
            <circle
              cx="40" cy="40" r="34"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              className="text-accent-blue transition-all duration-1000"
              strokeDasharray={`${2 * Math.PI * 34}`}
              strokeDashoffset={`${2 * Math.PI * 34 * (1 - count / REDIRECT_AFTER)}`}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-white tabular-nums">
            {count}
          </span>
        </div>

        <p className="text-text-secondary/50 text-xs tracking-widest uppercase mb-10">
          Redirecting to home in {count}s
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-4 text-sm font-semibold uppercase tracking-widest group"
        >
          <span className="w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center group-hover:border-accent-blue transition-colors">
            <ArrowRight className="w-4 h-4 group-hover:text-accent-blue transition-colors" />
          </span>
          Take me home now
        </Link>

      </div>

      {/* Bottom watermark */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center select-none pointer-events-none">
        <span className="text-[8vw] leading-none font-serif font-bold tracking-tighter opacity-[0.04]">
          BLUEBLACKBEIGE
        </span>
      </div>

    </main>
  );
}
