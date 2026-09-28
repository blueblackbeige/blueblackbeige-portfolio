import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { newBlogPosts } from "@/data/blog-posts";

const post = newBlogPosts.find((item) => item.slug === "mobile-first-accessibility")!;

export const metadata: Metadata = {
  title: `${post.title} | Blue Black Beige`,
  description: post.dek,
  keywords: post.keywords,
  openGraph: { title: post.title, description: post.dek, url: "https://blueblackbeige.in/blog/mobile-first-accessibility" }
};

export default function MobileFirstAccessibilityPage() {
  return <BlogArticle post={post} />;
}
