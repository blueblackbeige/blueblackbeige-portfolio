import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { newBlogPosts } from "@/data/blog-posts";

const post = newBlogPosts.find((item) => item.slug === "search-after-ai")!;

export const metadata: Metadata = {
  title: `${post.title} | Blue Black Beige`,
  description: post.dek,
  keywords: post.keywords,
  openGraph: { title: post.title, description: post.dek, url: "https://blueblackbeige.in/blog/search-after-ai" }
};

export default function SearchAfterAiPage() {
  return <BlogArticle post={post} />;
}
