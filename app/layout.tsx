import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Blue Black Beige | Web Design & Digital Marketing in India",
  description: "Blue Black Beige is a digital studio based in Patna, India, working with businesses across India on web design, development, branding and digital marketing.",
  icons: {
    icon: [{ url: "/logo.png" }],
    apple: [{ url: "/logo.png" }],
    shortcut: "/logo.png",
  },
  openGraph: {
    title: "Blue Black Beige | Web Design & Digital Marketing in India",
    description: "A digital studio based in Patna, India, working with businesses across India.",
    type: "website",
    url: "https://blueblackbeige.in/",
    siteName: "Blue Black Beige",
    images: [{ url: "/images/og-studio.png", width: 1200, height: 630, alt: "Blue Black Beige digital studio in India" }],
  },
  twitter: { card: "summary_large_image", title: "Blue Black Beige | Web Design & Digital Marketing in India", description: "A digital studio based in Patna, India, working with businesses across India.", images: ["/images/og-studio.png"] },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://blueblackbeige.in"),
};

const organizationJsonLd = {
  "@context": "https://schema.org", "@type": "Organization", "@id": "https://blueblackbeige.in/#organization",
  name: "Blue Black Beige", url: "https://blueblackbeige.in/", logo: "https://blueblackbeige.in/logo.png",
  email: "nayan@blueblackbeige.in", telephone: "+91-92881-82862",
  address: { "@type": "PostalAddress", addressLocality: "Patna", addressRegion: "Bihar", addressCountry: "IN" },
  areaServed: { "@type": "Country", name: "India" },
  sameAs: ["https://www.instagram.com/blueblackbeige.in/", "https://www.facebook.com/blueblackbeige", "https://youtube.com/@blueblackbeigeofficial"],
};
const websiteJsonLd = {
  "@context": "https://schema.org", "@type": "WebSite", "@id": "https://blueblackbeige.in/#website",
  url: "https://blueblackbeige.in/", name: "Blue Black Beige", publisher: { "@id": "https://blueblackbeige.in/#organization" }, inLanguage: "en-IN",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head />
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans bg-black text-white antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationJsonLd, websiteJsonLd]) }} />
        {children}
        {process.env.NEXT_PUBLIC_GA_ID ? <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} /> : null}
      </body>
    </html>
  );
}
