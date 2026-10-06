import type { Metadata } from "next";
import { blogPostMetadata } from "@/lib/blog-metadata";
import BlogArticle from "@/components/BlogArticle";
import { newBlogPosts } from "@/data/blog-posts";

const post = newBlogPosts.find((item) => item.slug === "mobile-first-accessibility")!;

export const metadata: Metadata = blogPostMetadata(post);

export default function MobileFirstAccessibilityPage() {
  return <BlogArticle post={post} />;
}
