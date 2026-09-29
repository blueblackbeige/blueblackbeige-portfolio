import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { newBlogPosts } from "@/data/blog-posts";

const post = newBlogPosts.find((item) => item.slug === "why-businesses-need-website-2026")!;

export const metadata: Metadata = {
  title: `${post.title} | Blue Black Beige`,
  description: post.dek,
  keywords: post.keywords,
  alternates: { canonical: "https://blueblackbeige.in/blog/why-businesses-need-website-2026" },
  openGraph: { title: post.title, description: post.dek, url: "https://blueblackbeige.in/blog/why-businesses-need-website-2026", images: [{ url: post.heroImage, alt: post.heroAlt }] },
};

export default function WhyBusinessesNeedWebsite2026Page() {
  return <BlogArticle post={post} />;
}
