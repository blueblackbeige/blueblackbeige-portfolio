import type { Metadata } from "next";
import { blogPostMetadata } from "@/lib/blog-metadata";
import BlogArticle from "@/components/BlogArticle";
import { newBlogPosts } from "@/data/blog-posts";

const post = newBlogPosts.find((item) => item.slug === "digital-marketing-strategies-that-work")!;

export const metadata: Metadata = blogPostMetadata(post);

export default function DigitalMarketingStrategiesThatWorkPage() {
  return <BlogArticle post={post} />;
}
