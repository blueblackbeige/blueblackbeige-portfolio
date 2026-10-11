"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef } from "react";

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      action: string;
      callback: (token: string) => void;
      "error-callback": () => void;
      "expired-callback": () => void;
    }
  ) => string;
  remove: (widgetId: string) => void;
  reset: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

type TurnstileProps = {
  onToken: (token: string | null) => void;
  resetKey: number;
};

export default function Turnstile({ onToken, resetKey }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const isDevelopment = process.env.NODE_ENV === "development";

  const renderWidget = useCallback(() => {
    if (!siteKey || !containerRef.current || !window.turnstile || widgetIdRef.current) return;

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      action: "contact",
      callback: (token) => onToken(token),
      "error-callback": () => onToken(null),
      "expired-callback": () => onToken(null),
    });
  }, [onToken, siteKey]);

  useEffect(() => {
    renderWidget();
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget]);

  useEffect(() => {
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
  }, [resetKey]);

  useEffect(() => {
    if (!siteKey && isDevelopment) {
      onToken("development-preview-token");
      return () => onToken(null);
    }
  }, [isDevelopment, onToken, siteKey]);

  if (!siteKey) {
    return (
      <p className={`text-xs ${isDevelopment ? "text-accent-beige" : "text-red-300"}`} role="status">
        {isDevelopment ? (
          "Local preview mode: security check is bypassed. Configure Turnstile before publishing."
        ) : (
          <>
            The secure check is unavailable. <a href="mailto:alok@blueblackbeige.in" className="underline underline-offset-2">Email us directly</a> instead.
          </>
        )}
      </p>
    );
  }

  return (
    <div>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderWidget}
      />
      <div ref={containerRef} />
    </div>
  );
}
