import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Blue Black Beige | Digital Marketing & Social Media Insights",
  description:
    "Practical notes on digital marketing, social media strategy, content systems, websites, and brand growth from the Blue Black Beige studio team.",
  keywords: [
    "digital marketing agency",
    "digital marketing strategy",
    "social media marketing",
    "social media marketing strategy",
    "content marketing strategy",
    "SEO strategy",
    "brand strategy",
    "website design and development",
    "online brand growth",
    "digital marketing tips for small business",
  ],
  alternates: {
    canonical: "https://blueblackbeige.in/blog",
  },
  openGraph: {
    title: "Blog - Blue Black Beige | Digital Marketing & Social Media Insights",
    description:
      "Practical notes on digital marketing, social media strategy, content systems, websites, and brand growth.",
    url: "https://blueblackbeige.in/blog",
    siteName: "Blue Black Beige",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & Social Media Insights | Blue Black Beige",
    description:
      "Practical notes on digital marketing, social media strategy, content systems, websites, and brand growth.",
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blue Black Beige Digital Marketing and Social Media Blog",
  description:
    "Helpful insights on digital marketing, social media marketing, content strategy, SEO, websites, and brand growth.",
  url: "https://blueblackbeige.in/blog",
  publisher: {
    "@type": "Organization",
    name: "Blue Black Beige",
    url: "https://blueblackbeige.in",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      {children}
    </>
  );
}
