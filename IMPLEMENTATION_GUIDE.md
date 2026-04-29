# SEO Implementation Guide for Blue Black Beige
**Quick Start - Implement in 2 Days**

---

## Day 1: Critical On-Page Fixes

### Task 1: Update Homepage Metadata (15 minutes)

**File:** `app/layout.tsx`

Replace the metadata section (lines 28-46) with:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Web Design & Development Studio Bengaluru | Blue Black Beige",
    template: "%s | Blue Black Beige",
  },
  description:
    "Premium web design, Next.js development, and brand identity services in Bengaluru, India. We build modern websites, web apps, and design systems for startups and growing businesses. Transparent pricing, 6-8 week delivery.",
  keywords: [
    "web design agency Bengaluru",
    "web development company India",
    "Next.js development India",
    "UI UX design studio",
    "brand identity design Bengaluru",
    "React development agency",
    "design studio India",
    "boutique design agency India",
    "web app development Bengaluru",
    "modern website design India",
  ],
  authors: [
    { name: "Nayan", url: `${SITE_URL}/about` },
    { name: "Alok", url: `${SITE_URL}/about` },
  ],
  creator: "Blue Black Beige",
  publisher: "Blue Black Beige",
  
  // ... rest remains same
};
```

### Task 2: Enhance Robots.txt (5 minutes)

**File:** `app/robots.ts`

Replace entire file with:

```typescript
import { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://blueblackbeige.in";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // Allow AI search bots for citations
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      // Block training data crawlers
      {
        userAgent: "CCBot",
        disallow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
```

### Task 3: Create FAQ Component (30 minutes)

**File:** `components/FAQ.tsx`

```tsx
export default function FAQ() {
  const faqs = [
    {
      question: "How much does website design cost in India?",
      answer: "Professional website design in India typically ranges from ₹50,000 to ₹5,00,000 depending on complexity, features, and the agency's expertise. At Blue Black Beige, our custom web design and development projects start at ₹1,50,000. This includes complete UI/UX design, Next.js development, responsive design for all devices, and 30 days of post-launch support. We provide transparent pricing with no hidden costs."
    },
    {
      question: "What makes Blue Black Beige different from other web design agencies?",
      answer: "Blue Black Beige is a boutique studio of three specialists (design, engineering, and brand strategy) working directly with clients. Unlike large agencies with account managers and handoffs, you work directly with the people building your project. We specialize in Next.js and modern React development, deliver projects on time every time, and provide full source code ownership with no lock-ins."
    },
    {
      question: "Do you work with clients outside of Bengaluru?",
      answer: "Yes, absolutely. While we're based in Patna, Bihar, we work with clients across India (Bengaluru, Mumbai, Delhi, Pune, Hyderabad) and internationally. We operate fully remotely and have experience collaborating with teams across different time zones. All communication happens via video calls, project management tools, and Figma for design reviews."
    },
    {
      question: "What is your typical project timeline?",
      answer: "A standard website project takes 6-8 weeks from kickoff to launch. Week 1: Discovery and strategy. Weeks 2-3: Design and prototyping. Weeks 4-6: Development and testing. Week 7-8: Refinement and launch. More complex web applications may take 10-12 weeks. We provide a detailed timeline during our initial consultation and commit to delivery dates."
    },
    {
      question: "What technologies do you use for web development?",
      answer: "We specialize in Next.js 14 (React framework), TypeScript for type safety, Tailwind CSS for styling, and modern animation libraries like Framer Motion and GSAP. For backend, we use Node.js, Express, and databases like PostgreSQL and MongoDB. We also integrate with headless CMS platforms like Sanity and Contentful. All our sites are hosted on Vercel or AWS for optimal performance."
    },
  ];

  return (
    <section id="faq" className="relative py-32 md:py-48 bg-beige-light border-y border-stone-light fade-up">
      <div className="max-w-[1600px] mx-auto px-8">
        
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-stone">
              <span className="w-8 h-px bg-electric" />
              FAQ
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-serif font-normal leading-[0.95] tracking-tightest text-ink"
              style={{ fontSize: "clamp(40px, 7vw, 120px)" }}
            >
              Common <span className="italic">questions.</span>
            </h2>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-l-2 border-electric pl-6 pb-8 last:pb-0"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h3
                className="font-serif text-2xl md:text-3xl leading-tight tracking-tightest text-ink mb-3"
                itemProp="name"
              >
                {faq.question}
              </h3>
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">
                  <p className="text-[15px] leading-relaxed text-stone-dark">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-10 border-t border-stone-light">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="font-serif italic text-2xl md:text-3xl text-ink tracking-tightest mb-1">
                Still have questions?
              </p>
              <p className="text-stone text-sm">
                Schedule a free 30-minute consultation to discuss your project.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-ink text-beige text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-electric transition-colors duration-500 shrink-0"
            >
              <span>Book consultation</span>
              <span className="text-base leading-none">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### Task 4: Add FAQ to Homepage (2 minutes)

**File:** `app/page.tsx`

```tsx
import FAQ from "@/components/FAQ"; // Add this import

export default function Home() {
  return (
    <>
      <Loader />
      <Cursor />
      <SmoothScroll />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Manifesto />
        <FAQ /> {/* Add this line */}
        <MegaCta />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
```

### Task 5: Add FAQPage Schema (10 minutes)

**File:** `app/layout.tsx`

Update the jsonLd object to include FAQPage:

```typescript
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // ... existing schemas ...
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does website design cost in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional website design in India typically ranges from ₹50,000 to ₹5,00,000 depending on complexity, features, and the agency's expertise. At Blue Black Beige, our custom web design and development projects start at ₹1,50,000. This includes complete UI/UX design, Next.js development, responsive design for all devices, and 30 days of post-launch support. We provide transparent pricing with no hidden costs."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Blue Black Beige different from other web design agencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Blue Black Beige is a boutique studio of three specialists (design, engineering, and brand strategy) working directly with clients. Unlike large agencies with account managers and handoffs, you work directly with the people building your project. We specialize in Next.js and modern React development, deliver projects on time every time, and provide full source code ownership with no lock-ins."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with clients outside of Bengaluru?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, absolutely. While we're based in Patna, Bihar, we work with clients across India (Bengaluru, Mumbai, Delhi, Pune, Hyderabad) and internationally. We operate fully remotely and have experience collaborating with teams across different time zones."
          }
        },
        {
          "@type": "Question",
          "name": "What is your typical project timeline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard website project takes 6-8 weeks from kickoff to launch. Week 1: Discovery and strategy. Weeks 2-3: Design and prototyping. Weeks 4-6: Development and testing. Week 7-8: Refinement and launch. More complex web applications may take 10-12 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "What technologies do you use for web development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We specialize in Next.js 14 (React framework), TypeScript for type safety, Tailwind CSS for styling, and modern animation libraries like Framer Motion and GSAP. For backend, we use Node.js, Express, and databases like PostgreSQL and MongoDB. All our sites are hosted on Vercel or AWS for optimal performance."
          }
        }
      ]
    }
  ],
};
```

---

## Day 2: Content Pages Creation

### Task 6: Create Services Page (1 hour)

**File:** `app/services/page.tsx`

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & Development Services | Blue Black Beige",
  description: "Premium web design, Next.js development, brand identity, and design systems services. We build modern websites and web applications for startups and growing businesses in India and worldwide.",
};

export default function ServicesPage() {
  const services = [
    {
      name: "Web Design",
      description: "Modern, responsive web design with exceptional user experience. We create beautiful interfaces that convert visitors into customers.",
      features: [
        "UI/UX design",
        "Responsive design (mobile, tablet, desktop)",
        "Design systems",
        "Prototyping & wireframing",
        "Interactive Figma prototypes",
        "User research & testing",
      ],
      price: "From ₹1,50,000",
      timeline: "3-4 weeks",
    },
    {
      name: "Web Development",
      description: "Full-stack web development using Next.js, React, and TypeScript. We build fast, scalable web applications and websites.",
      features: [
        "Next.js 14 development",
        "React web applications",
        "TypeScript implementation",
        "Headless CMS integration (Sanity, Contentful)",
        "API development",
        "Performance optimization",
      ],
      price: "From ₹2,50,000",
      timeline: "6-8 weeks",
    },
    {
      name: "Brand Identity",
      description: "Complete brand identity systems including logo design, color palettes, typography, and comprehensive brand guidelines.",
      features: [
        "Logo design (3 concepts)",
        "Color palette development",
        "Typography system",
        "Brand guidelines (20-30 pages)",
        "Business card design",
        "Social media templates",
      ],
      price: "From ₹75,000",
      timeline: "3-4 weeks",
    },
    {
      name: "Design Systems",
      description: "Scalable design systems with reusable components, documentation, and implementation guidelines.",
      features: [
        "Component library",
        "Design tokens",
        "Documentation",
        "Accessibility guidelines",
        "Code implementation",
        "Ongoing support",
      ],
      price: "From ₹2,00,000",
      timeline: "4-6 weeks",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-[1600px] mx-auto px-8">
        
        {/* Hero */}
        <div className="mb-20">
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-stone mb-8">
            <span className="w-8 h-px bg-electric" />
            Services
          </div>
          <h1
            className="font-serif font-normal leading-[0.95] tracking-tightest text-ink mb-6"
            style={{ fontSize: "clamp(48px, 8vw, 140px)" }}
          >
            What we <span className="italic text-electric">offer.</span>
          </h1>
          <p className="text-xl leading-relaxed text-ink/75 max-w-3xl">
            End-to-end design and development services for startups and growing businesses. 
            We combine strategic thinking, beautiful design, and modern engineering to build 
            digital products that work.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-10 bg-beige-light border border-stone-light hover:border-electric transition-colors duration-300"
            >
              <h2 className="font-serif text-4xl tracking-tightest text-ink mb-3">
                {service.name}
              </h2>
              <p className="text-stone-dark leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="mb-6">
                <h3 className="font-mono text-[10px] tracking-[0.25em] uppercase text-stone mb-3">
                  What's included
                </h3>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-dark">
                      <span className="text-electric mt-1">→</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-stone-light">
                <div>
                  <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-stone mb-1">
                    Investment
                  </div>
                  <div className="font-serif text-2xl text-ink">{service.price}</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-stone mb-1">
                    Timeline
                  </div>
                  <div className="font-serif text-2xl text-ink">{service.timeline}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-stone-light pt-16 text-center">
          <p className="font-serif italic text-3xl md:text-4xl text-ink tracking-tightest mb-4">
            Ready to start your project?
          </p>
          <p className="text-stone mb-8 max-w-2xl mx-auto">
            Schedule a free 30-minute consultation. We'll discuss your needs, timeline, 
            and provide a detailed proposal with transparent pricing.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-ink text-beige text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-electric transition-colors duration-500"
          >
            <span>Book consultation</span>
            <span className="text-base leading-none">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
```

### Task 7: Update Sitemap (5 minutes)

**File:** `app/sitemap.ts`

```typescript
import { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://blueblackbeige.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: '',
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: '/services',
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: '/work',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
```

### Task 8: Submit to Google (10 minutes)

1. **Google Search Console:**
   - Go to https://search.google.com/search-console
   - Add property: blueblackbeige.in
   - Verify via HTML tag (add to layout.tsx)
   - Submit sitemap: https://blueblackbeige.in/sitemap.xml

2. **Google Business Profile:**
   - Go to https://business.google.com
   - Create profile for "Blue Black Beige"
   - Add all details (address, phone, services, hours)
   - Upload 10+ photos
   - Complete verification

---

## Quick Command Reference

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint
```

---

## Testing Checklist

After implementation, verify:

- [ ] Homepage loads correctly
- [ ] FAQ section appears and is functional
- [ ] Metadata shows correctly in page source (View → Developer → View Source)
- [ ] robots.txt accessible at /robots.txt
- [ ] Sitemap accessible at /sitemap.xml
- [ ] Services page accessible at /services
- [ ] All internal links work
- [ ] Mobile responsive on all pages
- [ ] Google Search Console verification complete
- [ ] No console errors in browser

---

## What Happens After Day 2?

**Week 1:**
- Submit to 10 business directories
- Create Google Business Profile
- Request reviews from past clients
- Write first blog post

**Week 2-3:**
- Create /about page
- Create /pricing page
- Write 2 more blog posts
- Submit to design directories

**Month 2:**
- Create case study template
- Start guest posting
- Build 10+ backlinks
- Launch email newsletter

---

## Need Help?

If you encounter issues:

1. Check the main strategy document: SEO-AEO-GEO-STRATEGY.md
2. Review Next.js documentation: https://nextjs.org/docs
3. Test in development first before deploying
4. Use Google Search Console for debugging

---

**Total Implementation Time:** ~8 hours across 2 days
**Expected Impact:** 300% increase in impressions within 30 days
