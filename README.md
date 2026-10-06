# Blue Black Beige - AI-Powered Digital Studio

Premium digital agency website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
# Clean old dependencies and reinstall
rm -rf node_modules .next
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contact-form security setup

The contact form is deliberately fail-closed: it will not send messages until both
Resend and Cloudflare Turnstile are configured. Copy `.env.example` to `.env.local`
for local development, then add the same values to the production host's encrypted
environment-variable settings:

- `RESEND_API_KEY` — server-only Resend API key.
- `TURNSTILE_SECRET_KEY` — server-only Cloudflare Turnstile secret.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` — Cloudflare Turnstile site key, configured for
  `blueblackbeige.in` and `www.blueblackbeige.in`.

The application checks the Turnstile token on the server, restricts requests to the
site's origins, applies a per-instance rate limit, caps request size, validates all
fields, and HTML-escapes email content. For network-level DDoS protection, enable
Cloudflare proxying/WAF and rate limiting in front of the deployment; app-level code
cannot absorb a volumetric attack before it reaches the host.

## Tech Stack

- **Framework:** Next.js 15+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Playfair Display (serif) + Inter (sans)

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles + design system
├── components/
│   ├── Navbar.tsx           # Sticky navbar with glass blur
│   ├── HeroSection.tsx      # Split-screen hero
│   ├── ServicesSection.tsx   # 5 service cards
│   ├── FeaturedProjects.tsx  # Project showcase
│   ├── ProcessSection.tsx    # Process timeline
│   ├── CTASection.tsx        # Call-to-action banner
│   ├── Footer.tsx            # Premium footer
│   └── ScrollReveal.tsx      # Reusable scroll animation
```
