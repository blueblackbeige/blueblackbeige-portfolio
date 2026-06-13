import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Blue Black Beige - AI-Powered Digital Studio",
  description:
    "We combine strategy, design, motion and technology to create intelligent digital products for ambitious brands.",
  keywords: ["digital agency", "AI studio", "web design", "branding", "web development"],
  openGraph: {
    title: "Blue Black Beige — AI-Powered Digital Studio",
    description:
      "We combine strategy, design, motion and technology to create intelligent digital products for ambitious brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-bg-primary text-text-primary antialiased`}>
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
    </html>
  );
}
