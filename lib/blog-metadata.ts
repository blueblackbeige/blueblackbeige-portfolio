import type { Metadata } from "next";
import type { BlogPost } from "@/data/blog-posts";

export function blogPostMetadata(post: BlogPost): Metadata {
  const path = `/blog/${post.slug}`;
  return {
    title: `${post.title} | Blue Black Beige`,
    description: post.dek,
    keywords: post.keywords,
    alternates: { canonical: path },
    openGraph: {
      title: post.title,
      description: post.dek,
      url: `https://blueblackbeige.in${path}`,
      siteName: "Blue Black Beige",
      type: "article",
      images: [{ url: post.heroImage, alt: post.heroAlt }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.dek, images: [post.heroImage] },
  };
}
