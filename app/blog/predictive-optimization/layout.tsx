import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Predictive Optimization for Digital Experiences | Blue Black Beige",
  description: "An overview of predictive optimization ideas for digital experience and experimentation teams.",
  alternates: { canonical: "/blog/predictive-optimization" },
  openGraph: { type: "article", url: "https://blueblackbeige.in/blog/predictive-optimization" },
};

export default function PredictiveArticleLayout({ children }: { children: React.ReactNode }) { return children; }
