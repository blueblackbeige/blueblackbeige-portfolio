"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let cx = 0, cy = 0, rx = 0, ry = 0;

    const move = (e: MouseEvent) => {
      cx = e.clientX;
      cy = e.clientY;
      cursor.style.left = cx + "px";
      cursor.style.top = cy + "px";
    };

    const animate = () => {
      rx += (cx - rx) * 0.15;
      ry += (cy - ry) * 0.15;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("mousemove", move);

    const enterHov = () => { cursor.classList.add("hov"); ring.classList.add("hov"); };
    const leaveHov = () => { cursor.classList.remove("hov"); ring.classList.remove("hov"); };

    const interactive = document.querySelectorAll("a, button, input, textarea, select, [data-cursor='hover']");
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", enterHov);
      el.addEventListener("mouseleave", leaveHov);
    });

    // Light mode: white cursor over dark backgrounds
    const enterLight = () => { cursor.classList.add("light"); ring.classList.add("light"); };
    const leaveLight = () => { cursor.classList.remove("light"); ring.classList.remove("light"); };

    const lightZones = document.querySelectorAll("[data-cursor='light']");
    lightZones.forEach((el) => {
      el.addEventListener("mouseenter", enterLight);
      el.addEventListener("mouseleave", leaveLight);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", enterHov);
        el.removeEventListener("mouseleave", leaveHov);
      });
      lightZones.forEach((el) => {
        el.removeEventListener("mouseenter", enterLight);
        el.removeEventListener("mouseleave", leaveLight);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor fixed w-2 h-2 bg-ink rounded-full pointer-events-none z-[1000] -translate-x-1/2 -translate-y-1/2 transition-[width,height,background] duration-300"
      />
      <div
        ref={ringRef}
        className="custom-cursor fixed w-10 h-10 border border-ink/40 rounded-full pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-300"
      />
      <style jsx global>{`
        .custom-cursor.hov:first-of-type {
          width: 0px !important;
          height: 0px !important;
        }
        .custom-cursor.hov:last-of-type {
          width: 56px !important;
          height: 56px !important;
          border-color: #2952CC !important;
          background: rgba(41, 82, 204, 0.1);
        }
        .custom-cursor.light:first-of-type {
          background: #ffffff !important;
        }
        .custom-cursor.light:last-of-type {
          border-color: rgba(255,255,255,0.5) !important;
        }
      `}</style>
    </>
  );
}
