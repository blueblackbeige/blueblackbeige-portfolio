import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { newBlogPosts } from "@/data/blog-posts";

const post = newBlogPosts.find((item) => item.slug === "mobile-app-vs-website")!;

export const metadata: Metadata = {
  title: `${post.title} | Blue Black Beige`,
  description: post.dek,
  keywords: post.keywords,
  alternates: { canonical: "https://blueblackbeige.in/blog/mobile-app-vs-website" },
  openGraph: { title: post.title, description: post.dek, url: "https://blueblackbeige.in/blog/mobile-app-vs-website", images: [{ url: post.heroImage, alt: post.heroAlt }] },
};

export default function MobileAppVsWebsitePage() {
  return <BlogArticle post={post} />;
}
