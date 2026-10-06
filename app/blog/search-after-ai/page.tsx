import type { Metadata } from "next";
import { blogPostMetadata } from "@/lib/blog-metadata";
import BlogArticle from "@/components/BlogArticle";
import { newBlogPosts } from "@/data/blog-posts";

const post = newBlogPosts.find((item) => item.slug === "search-after-ai")!;

export const metadata: Metadata = blogPostMetadata(post);

export default function SearchAfterAiPage() {
  return <BlogArticle post={post} />;
}
