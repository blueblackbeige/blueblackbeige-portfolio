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
  title: "Blue Black Beige - AI-Powered Digital Studio",
  description:
    "We combine strategy, design, motion and technology to create intelligent digital products for ambitious brands.",
  keywords: ["digital agency", "AI studio", "web design", "branding", "web development"],
  openGraph: {
    title: "Blue Black Beige - AI-Powered Digital Studio",
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
      <head />
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans bg-black text-white antialiased`}>
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
    </html>
  );
}
