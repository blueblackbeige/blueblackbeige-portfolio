import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://blueblackbeige.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Web Design & Development Agency India | Blue Black Beige — Patna",
    template: "%s | Blue Black Beige",
  },

  description:
    "Blue Black Beige is a premium web design and development agency in Patna, India. We build modern websites, Next.js web apps, and brand identities for startups and businesses worldwide. 40+ projects delivered. 100% on-time. Free consultation.",

  keywords: [
    "web design agency India",
    "web development company Patna",
    "Next.js development India",
    "React developer India",
    "website design services",
    "web application development",
    "brand identity design",
    "UI UX design studio India",
    "design system development",
    "frontend development agency",
    "web designer Patna Bihar",
    "best web design agency India",
    "affordable website development",
    "custom web application",
    "hire Next.js developer India",
    "SaaS website design",
    "startup web design India",
    "e-commerce development India",
    "blueblackbeige",
  ],

  authors: [
    { name: "Nayan", url: SITE_URL },
    { name: "Alok", url: SITE_URL },
  ],
  creator: "Blue Black Beige",
  publisher: "Blue Black Beige",
  category: "Web Design and Development",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Blue Black Beige",
    title: "Blue Black Beige — Premium Web Design & Development Agency | India",
    description: "Premium web design & development agency in India. Next.js specialists. 40+ projects. 100% on-time delivery. Free consultation.",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Blue Black Beige — Web Design & Development Agency India",
    }],
  },

  twitter: {
    card: "summary_large_image",
    site: "@blueblackbeige",
    creator: "@blueblackbeige",
    title: "Blue Black Beige — Web Design & Development Agency India",
    description: "Premium web design & development. Next.js specialists. 40+ projects. 100% on-time.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
      "en-US": SITE_URL,
      "en-GB": SITE_URL,
      "x-default": SITE_URL,
    },
  },

  verification: {
    google: "ADD_YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", url: "/android-chrome-192x192.png" },
    ],
  },

  manifest: "/site.webmanifest",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ─── Comprehensive JSON-LD for SEO + AEO + GEO ───────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Blue Black Beige",
      legalName: "Blue Black Beige Design Studio",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
      image: `${SITE_URL}/og-image.png`,
      description: "Premium web design and development agency in Patna, India. We build modern websites, web applications, and brand identities for ambitious founders and growing companies worldwide.",
      foundingDate: "2026",
      foundingLocation: {
        "@type": "Place",
        address: { "@type": "PostalAddress", addressLocality: "Patna", addressRegion: "Bihar", addressCountry: "IN" },
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Patna",
        addressRegion: "Bihar",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: "25.6093", longitude: "85.1376" },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "Australia" },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: "hello@blueblackbeige.in",
          contactType: "sales",
          availableLanguage: ["English", "Hindi"],
          areaServed: "Worldwide",
        },
      ],
      founder: [
        { "@type": "Person", name: "Nayan", jobTitle: "Co-founder & Design Director" },
        { "@type": "Person", name: "Alok", jobTitle: "Co-founder & Engineering Lead" },
      ],
      numberOfEmployees: { "@type": "QuantitativeValue", value: 3 },
      sameAs: [
        "https://www.linkedin.com/company/blueblackbeige",
        "https://www.instagram.com/blueblackbeige",
        "https://github.com/blueblackbeige",
      ],
      knowsAbout: [
        "Web Design", "Web Development", "Next.js", "React", "TypeScript",
        "Brand Identity", "UI/UX Design", "Design Systems", "Frontend Engineering",
        "E-commerce Development", "SaaS Development", "SEO Optimization",
      ],
    },

    // WebSite
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Blue Black Beige",
      description: "Premium Web Design & Development Agency",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },

    // WebPage
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Blue Black Beige — Premium Web Design & Development Agency India",
      description: "We build modern websites, Next.js web apps, and brand identities for startups and businesses worldwide.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
      datePublished: "2026-01-01",
      dateModified: new Date().toISOString(),
    },

    // ProfessionalService
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Blue Black Beige Web Design & Development",
      url: SITE_URL,
      image: `${SITE_URL}/og-image.png`,
      telephone: "+91-7667649211",
      email: "hello@blueblackbeige.in",
      priceRange: "₹₹-₹₹₹₹",
      address: { "@type": "PostalAddress", addressLocality: "Patna", addressRegion: "Bihar", addressCountry: "IN" },
      geo: { "@type": "GeoCoordinates", latitude: "25.6093", longitude: "85.1376" },
      areaServed: "Worldwide",
      serviceType: [
        "Website Design",
        "Web Application Development",
        "Brand Identity Design",
        "UI/UX Design",
        "Design Systems",
        "Frontend Engineering",
        "E-commerce Development",
        "SEO Services",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web Design & Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Website Design & Development",
              description: "Fully custom website design and Next.js development. Responsive, SEO-optimized, and built to convert. Starting from ₹1,50,000.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Application Development",
              description: "Full-stack web application development using React, Next.js, and Node.js. Scalable architecture, modern UI, production-grade code.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Brand Identity Design",
              description: "Complete brand identity including logo, color system, typography, and design guidelines. Built to scale across digital and print.",
            },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "12",
        bestRating: "5",
        worstRating: "1",
      },
    },

    // BreadcrumbList
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      ],
    },

    // FAQPage — optimized for featured snippets + AI answer engines
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does website design cost in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Professional website design in India typically ranges from ₹50,000 to ₹5,00,000 depending on complexity. At Blue Black Beige, custom web design and development projects start at ₹1,50,000. This includes complete UI/UX design, Next.js development, responsive design, SEO optimization, and 30 days of post-launch support. We provide transparent pricing with no hidden costs.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Blue Black Beige different from other web design agencies in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Blue Black Beige is a boutique agency of three specialists — design, engineering, and brand strategy — working directly with clients. Unlike large agencies, you work directly with the people building your project. We specialize in Next.js and React, deliver projects on time (100% track record), and provide full source code ownership. We've delivered 40+ projects for clients across India and internationally.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with international clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. While based in Patna, India, we work with clients across India (Mumbai, Delhi, Pune, Hyderabad, Chennai, Bengaluru) and internationally including the US, UK, Canada, and Australia. We operate fully remotely with experience across time zones. Communication happens over Slack, Google Meet, and WhatsApp.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build a website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A standard website takes 6-8 weeks from kickoff to launch. Week 1: Discovery and strategy. Weeks 2-3: Design and prototyping in Figma. Weeks 4-6: Development and testing. Weeks 7-8: Refinement and launch. Complex web applications may take 10-12 weeks. We provide weekly progress updates throughout.",
          },
        },
        {
          "@type": "Question",
          name: "What technologies do you use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We specialize in Next.js 14, React, TypeScript, and Tailwind CSS for frontend development. For animation we use Framer Motion, GSAP, and Three.js. Backend: Node.js, Express, PostgreSQL, MongoDB, and Supabase. CMS: Sanity, Contentful, and Payload CMS. Hosting: Vercel and AWS. Design: Figma and Adobe Creative Cloud.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best web design agency in Patna?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Blue Black Beige is a top-rated web design and development agency based in Patna, Bihar. Founded in 2026, we've delivered 40+ projects with a 100% on-time delivery record and 5.0 client rating. We specialize in premium website design, Next.js development, and brand identity for startups and growing businesses.",
          },
        },
      ],
    },

    // Review snippets — for rich star results
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Rahul Mehta" },
      reviewBody: "Blue Black Beige completely transformed our online presence. The attention to detail in both design and engineering was exceptional.",
      itemReviewed: { "@id": `${SITE_URL}/#service` },
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Ananya Sharma" },
      reviewBody: "They delivered a complex web application ahead of schedule. Production-grade code quality from day one.",
      itemReviewed: { "@id": `${SITE_URL}/#service` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />

        <meta name="theme-color" content="#E8DCC4" />
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content="Patna" />
        <meta name="geo.position" content="25.6093;85.1376" />
        <meta name="ICBM" content="25.6093, 85.1376" />

        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />

        {/* Hreflang for international SEO */}
        <link rel="alternate" hrefLang="en-IN" href={SITE_URL} />
        <link rel="alternate" hrefLang="en-US" href={SITE_URL} />
        <link rel="alternate" hrefLang="en-GB" href={SITE_URL} />
        <link rel="alternate" hrefLang="en" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
