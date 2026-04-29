import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://blueblackbeige.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:  "Web Design & Development Studio Patna | Blue Black Beige",
    template: "%s | Blue Black Beige",
  },
  description:
    "Premium web design, Next.js development, and brand identity services in Patna, India. We build modern websites, web apps, and design systems for startups and growing businesses. Transparent pricing, 6-8 week delivery.",
  keywords: [
    "web design agency Patna",
    "web development company India",
    "Next.js development India",
    "UI UX design studio",
    "brand identity design Patna",
    "React development agency",
    "design studio India",
    "boutique design agency India",
    "web app development Patna",
    "modern website design India",
  ],
  authors: [
    { name: "Nayan", url: `${SITE_URL}/about` },
    { name: "Alok",  url: `${SITE_URL}/about` },
  ],
  creator:   "Blue Black Beige",
  publisher: "Blue Black Beige",

  // ─── Open Graph ──────────────────────────────────────────────────────────────
  openGraph: {
    type:        "website",
    locale:      "en_IN",
    url:         SITE_URL,
    siteName:    "Blue Black Beige",
    title:       "Blue Black Beige — Design & Development Studio",
    description: "A boutique studio from Patna building premium digital products for founders worldwide.",
    images: [
      {
        url:    "/og-image.png",   // place a 1200×630 image in /public/og-image.png
        width:  1200,
        height: 630,
        alt:    "Blue Black Beige — Design & Development Studio",
      },
    ],
  },

  // ─── Twitter / X card ────────────────────────────────────────────────────────
  twitter: {
    card:        "summary_large_image",
    title:       "Blue Black Beige — Design & Development Studio",
    description: "A boutique studio from Patna building premium digital products for founders worldwide.",
    images:      ["/og-image.png"],
    creator:     "@blueblackbeige",
  },

  // ─── Canonical + alternates ──────────────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
    languages: { "en-IN": SITE_URL },
  },

  // ─── Verification (add your Search Console token here) ───────────────────────
  verification: {
    google: "ADD_YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN_HERE",
  },

  // ─── Icons ───────────────────────────────────────────────────────────────────
  icons: {
    icon:        "/favicon.ico",
    shortcut:    "/favicon-16x16.png",
    apple:       "/apple-touch-icon.png",
    other: [
      { rel: "icon", type: "image/png", sizes: "32x32",  url: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", url: "/android-chrome-192x192.png" },
    ],
  },

  manifest: "/site.webmanifest",

  robots: {
    index:            true,
    follow:           true,
    googleBot: {
      index:              true,
      follow:             true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },
};

// ─── JSON-LD Schema ──────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type":       "Organization",
      "@id":         `${SITE_URL}/#organization`,
      name:          "Blue Black Beige",
      url:           SITE_URL,
      logo:          `${SITE_URL}/logo.png`,
      description:   "A boutique design and development studio from Patna.",
      foundingDate:  "2026",
      address: {
        "@type":           "PostalAddress",
        addressLocality:   "Patna",
        addressRegion:     "Bihar",
        addressCountry:    "IN",
      },
      contactPoint: [
        {
          "@type":            "ContactPoint",
          email:              "nayan@blueblackbeige.in",
          contactType:        "sales",
          availableLanguage:  ["English", "Hindi"],
        },
      ],
      sameAs: [
        "https://www.linkedin.com/company/blueblackbeige",
        "https://www.instagram.com/blueblackbeige",
        "https://github.com/blueblackbeige",
      ],
    },
    {
      "@type":         "WebSite",
      "@id":           `${SITE_URL}/#website`,
      url:             SITE_URL,
      name:            "Blue Black Beige",
      description:     "Design & Development Studio",
      publisher:       { "@id": `${SITE_URL}/#organization` },
      inLanguage:      "en-IN",
    },
    {
      "@type":         "WebPage",
      "@id":           `${SITE_URL}/#webpage`,
      url:             SITE_URL,
      name:            "Blue Black Beige — Design & Development Studio",
      isPartOf:        { "@id": `${SITE_URL}/#website` },
      about:           { "@id": `${SITE_URL}/#organization` },
      inLanguage:      "en-IN",
    },
    {
      "@type":         "ProfessionalService",
      "@id":           `${SITE_URL}/#service`,
      name:            "Blue Black Beige",
      url:             SITE_URL,
      image:           `${SITE_URL}/og-image.png`,
      priceRange:      "₹₹₹",
      telephone:       "+91-XXXXXXXXXX",
      address: {
        "@type":           "PostalAddress",
        addressLocality:   "Patna",
        addressRegion:     "Bihar",
        addressCountry:    "IN",
      },
      areaServed:        "Worldwide",
      serviceType:       ["Web Design", "Web Development", "Brand Identity", "Design Systems"],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does website design cost in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Professional website design in India typically ranges from ₹50,000 to ₹5,00,000 depending on complexity, features, and the agency's expertise. At Blue Black Beige, our custom web design and development projects start at ₹1,50,000. This includes complete UI/UX design, Next.js development, responsive design for all devices, and 30 days of post-launch support. We provide transparent pricing with no hidden costs.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Blue Black Beige different from other web design agencies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Blue Black Beige is a boutique studio of three specialists (design, engineering, and brand strategy) working directly with clients. Unlike large agencies with account managers and handoffs, you work directly with the people building your project. We specialize in Next.js and modern React development, deliver projects on time every time, and provide full source code ownership with no lock-ins.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with clients outside of Patna?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, absolutely. While we're based in Patna, Bihar, we work with clients across India (Mumbai, Delhi, Pune, Hyderabad, Chennai) and internationally. We operate fully remotely and have experience collaborating with teams across different time zones.",
          },
        },
        {
          "@type": "Question",
          name: "What is your typical project timeline?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A standard website project takes 6-8 weeks from kickoff to launch. Week 1: Discovery and strategy. Weeks 2-3: Design and prototyping. Weeks 4-6: Development and testing. Week 7-8: Refinement and launch. More complex web applications may take 10-12 weeks.",
          },
        },
        {
          "@type": "Question",
          name: "What technologies do you use for web development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We specialize in Next.js 14 (React framework), TypeScript for type safety, Tailwind CSS for styling, and modern animation libraries like Framer Motion and GSAP. For backend, we use Node.js, Express, and databases like PostgreSQL and MongoDB. All our sites are hosted on Vercel or AWS for optimal performance.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#E8DCC4" />

        {/* Geo tags for Indian studio */}
        <meta name="geo.region"   content="IN-BR" />
        <meta name="geo.placename" content="Patna" />

        {/* WhatsApp preview */}
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
