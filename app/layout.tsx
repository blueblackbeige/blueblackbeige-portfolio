import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from "next/script";
import MetaPixelTracker from "@/components/MetaPixelTracker";
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
        <Script id="meta-pixel" strategy="beforeInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1655379629524230');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1655379629524230&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <MetaPixelTracker />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationJsonLd, websiteJsonLd]) }} />
        {children}
        {process.env.NEXT_PUBLIC_GA_ID ? <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} /> : null}
      </body>
    </html>
  );
}
