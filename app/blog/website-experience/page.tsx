import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { newBlogPosts } from "@/data/blog-posts";

const post = newBlogPosts.find((item) => item.slug === "website-experience")!;

export const metadata: Metadata = {
  title: `${post.title} | Blue Black Beige`,
  description: post.dek,
  openGraph: { title: post.title, description: post.dek, url: "https://blueblackbeige.in/blog/website-experience" }
};

export default function WebsiteExperiencePage() {
  return <BlogArticle post={post} />;
}
