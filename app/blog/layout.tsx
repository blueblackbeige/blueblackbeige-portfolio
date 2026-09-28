import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Blue Black Beige | Design, AI & Brand Strategy Insights",
  description:
    "Thoughts on design systems, AI-augmented workflows, branding, and building digital products that actually convert. Written by the Blue Black Beige studio team.",
  openGraph: {
    title: "Blog - Blue Black Beige | Design, AI & Brand Strategy Insights",
    description:
      "Thoughts on design systems, AI-augmented workflows, branding, and building digital products that actually convert.",
    url: "https://blueblackbeige.in/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
