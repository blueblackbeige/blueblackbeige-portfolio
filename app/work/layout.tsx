import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - Blue Black Beige | Portfolio & Case Studies",
  description:
    "Explore selected website, brand, motion and marketing projects from Blue Black Beige, a digital studio based in Patna and working across India.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work - Blue Black Beige | Portfolio & Case Studies",
    description:
      "Explore selected websites, brand identities, motion design and marketing projects from our studio in India.",
    url: "https://blueblackbeige.in/work",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
