import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Blue Black Beige | AI-Powered Digital Studio, Patna",
  description:
    "Meet the team behind Blue Black Beige — a design and technology studio based in Patna, India. We build premium digital experiences, brands, and growth systems for ambitious founders.",
  openGraph: {
    title: "About — Blue Black Beige | AI-Powered Digital Studio, Patna",
    description:
      "Meet the team behind Blue Black Beige — a design and technology studio based in Patna, India.",
    url: "https://blueblackbeige.in/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
