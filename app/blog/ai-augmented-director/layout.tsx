import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The AI-Augmented Director | Blue Black Beige",
  description: "A perspective on how AI tools may change the role of designers and creative directors.",
  alternates: { canonical: "/blog/ai-augmented-director" },
  openGraph: { type: "article", url: "https://blueblackbeige.in/blog/ai-augmented-director" },
};

export default function AiArticleLayout({ children }: { children: React.ReactNode }) { return children; }
