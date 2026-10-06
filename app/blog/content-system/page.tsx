import type { Metadata } from "next";
import { blogPostMetadata } from "@/lib/blog-metadata";
import BlogArticle from "@/components/BlogArticle";
import { newBlogPosts } from "@/data/blog-posts";

const post = newBlogPosts.find((item) => item.slug === "content-system")!;

export const metadata: Metadata = blogPostMetadata(post);

export default function ContentSystemPage() {
  return <BlogArticle post={post} />;
}
