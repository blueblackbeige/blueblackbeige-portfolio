# Blue Black Beige — AI-Powered Digital Studio

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
