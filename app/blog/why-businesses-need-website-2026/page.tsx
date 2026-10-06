import type { Metadata } from "next";
import { blogPostMetadata } from "@/lib/blog-metadata";
import BlogArticle from "@/components/BlogArticle";
import { newBlogPosts } from "@/data/blog-posts";

const post = newBlogPosts.find((item) => item.slug === "why-businesses-need-website-2026")!;

export const metadata: Metadata = blogPostMetadata(post);

export default function WhyBusinessesNeedWebsite2026Page() {
  return <BlogArticle post={post} />;
}
