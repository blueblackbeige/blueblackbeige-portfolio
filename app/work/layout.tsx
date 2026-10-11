import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - Blue Black Beige | Portfolio & Case Studies",
  description:
    "Explore the Blue Black Beige casebook: websites, campaign systems, social creative and motion work built for ambitious brands across India.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work - Blue Black Beige | Portfolio & Case Studies",
    description:
      "A curated casebook of websites, campaign worlds, brand identities and motion design from Blue Black Beige.",
    url: "https://blueblackbeige.in/work",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
