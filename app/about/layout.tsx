import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Blue Black Beige | Digital Studio in Patna, India",
  description:
    "Meet Blue Black Beige, a design and technology studio based in Patna, India, working with businesses across the country.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Blue Black Beige | Digital Studio in Patna, India",
    description:
      "Meet the team behind Blue Black Beige, a design and technology studio based in Patna, India.",
    url: "https://blueblackbeige.in/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
