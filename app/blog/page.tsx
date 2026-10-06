import type { Metadata } from "next";
import BlogIndexClient from "./BlogIndexClient";

export const metadata: Metadata = {
  title: "Digital Marketing, SEO & Website Insights | Blue Black Beige",
  description: "Practical guidance on websites, SEO, digital marketing and content from Blue Black Beige, a digital studio based in Patna and working across India.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Digital Marketing, SEO & Website Insights | Blue Black Beige",
    description: "Practical guidance on websites, SEO, digital marketing and content from our studio in India.",
    url: "https://blueblackbeige.in/blog", type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const blogJsonLd = {
  "@context": "https://schema.org", "@type": "Blog", "@id": "https://blueblackbeige.in/blog#blog",
  name: "Blue Black Beige Insights", url: "https://blueblackbeige.in/blog",
  publisher: { "@id": "https://blueblackbeige.in/#organization" }, inLanguage: "en-IN",
};

export default function BlogPage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} /><BlogIndexClient /></>;
}
