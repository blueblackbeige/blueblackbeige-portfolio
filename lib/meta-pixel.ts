export type MetaPixelEvent = "PageView" | "ViewContent" | "Contact" | "Lead";

export type MetaPixelParameters = Record<string, string | number | boolean>;

declare global {
  interface Window {
    fbq?: (action: "track", eventName: MetaPixelEvent, parameters?: MetaPixelParameters) => void;
  }
}

export function trackMetaPixelEvent(
  eventName: MetaPixelEvent,
  parameters?: MetaPixelParameters,
) {
  if (typeof window === "undefined" || !window.fbq) {
    return;
  }

  window.fbq("track", eventName, parameters);
}
