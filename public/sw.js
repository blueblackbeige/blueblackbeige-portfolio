// No-op service worker placeholder.
// Keeps browsers with an older registration from hitting the Next.js not-found route in dev.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
