# Code On Time® — Portfolio

A Next.js portfolio for the Code On Time freelance studio. Inspired by No Graphism's editorial Swiss design.

## Stack

- **Next.js 14** — React framework with App Router
- **TypeScript** — type safety
- **Tailwind CSS** — utility-first styling
- **Lenis** — smooth scroll
- **GSAP** — installed for future animations (text splits, scroll triggers)

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000 in your browser
```

That's it.

## Project structure

```
code-on-time/
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Home page (composes sections)
│   └── globals.css      # Global styles + animations
├── components/
│   ├── Loader.tsx       # Initial load screen
│   ├── Cursor.tsx       # Custom cursor
│   ├── Header.tsx       # Fixed header with live time
│   ├── Hero.tsx         # First fold
│   ├── Marquee.tsx      # Scrolling text strip
│   ├── About.tsx        # Studio info
│   ├── Work.tsx         # Project list with hover preview
│   ├── Manifesto.tsx    # Six principles
│   ├── MegaCta.tsx      # Final call-to-action
│   ├── Footer.tsx       # World clocks + links
│   └── SmoothScroll.tsx # Lenis init + scroll reveals
├── public/              # Static assets (add images here)
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## Customization

### Update project list

Open `components/Work.tsx` and edit the `projects` array. Each entry has a `num`, `name`, `italicize` (which word to italicize), `tags`, `year`, and `color` (used for the cursor preview tile).

### Update studio info

Open `components/About.tsx` — the `services` and `facts` arrays at the top.

### Update principles

Open `components/Manifesto.tsx` — the `principles` array at the top.

### Update contact email

Search for `hello@codeontime.dev` across the project (it appears in `Footer.tsx` and `MegaCta.tsx`) and replace.

### Change accent color

Edit `tailwind.config.js` — change the `accent` value (currently `#FF4F19`).

## Deploying to production

The fastest way:

1. Push the project to a GitHub repo
2. Go to https://vercel.com — sign in with GitHub
3. Import the repo, click Deploy
4. Free SSL, free CDN, custom domain support

Build command: `npm run build` (Vercel auto-detects).

## Adding real project case studies

Create a new folder `app/work/[slug]/page.tsx` for individual project pages. Then update the `href` in `components/Work.tsx` from `#` to `/work/atelier-norden` etc.

## Notes

- Custom cursor disables on touch devices via media query
- Smooth scroll handled by Lenis
- Sections fade-up on scroll via IntersectionObserver
- Live time and world clocks update every second
- Marquee uses pure CSS animation (no JS)
# blueblackbeige-portfolio
