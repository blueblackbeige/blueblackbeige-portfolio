import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { newBlogPosts } from "@/data/blog-posts";

const post = newBlogPosts.find((item) => item.slug === "digital-marketing-strategies-that-work")!;

export const metadata: Metadata = {
  title: `${post.title} | Blue Black Beige`,
  description: post.dek,
  keywords: post.keywords,
  alternates: { canonical: "https://blueblackbeige.in/blog/digital-marketing-strategies-that-work" },
  openGraph: { title: post.title, description: post.dek, url: "https://blueblackbeige.in/blog/digital-marketing-strategies-that-work", images: [{ url: post.heroImage, alt: post.heroAlt }] },
};

export default function DigitalMarketingStrategiesThatWorkPage() {
  return <BlogArticle post={post} />;
}
