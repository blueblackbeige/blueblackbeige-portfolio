import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Blue Black Beige | Portfolio & Case Studies",
  description:
    "Explore websites, brand identities, motion design, and marketing campaigns built by Blue Black Beige. Real projects, real results — from strategy to launch.",
  openGraph: {
    title: "Work — Blue Black Beige | Portfolio & Case Studies",
    description:
      "Explore websites, brand identities, motion design, and marketing campaigns built by Blue Black Beige.",
    url: "https://blueblackbeige.in/work",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
