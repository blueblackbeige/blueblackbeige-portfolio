import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Blue Black Beige",
  description:
    "How Blue Black Beige collects, uses, and protects the information you share with us through our website and contact form.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Blue Black Beige",
    description: "How Blue Black Beige handles contact enquiries and website analytics.",
    url: "https://blueblackbeige.in/privacy",
    type: "website",
  },
};

const sections = [
  {
    title: "Information We Collect",
    body: `The website enquiry form asks for your name, email address, selected service and project details. We use Cloudflare Turnstile to help protect the form from automated abuse. We do not use this form to subscribe you to marketing updates.`,
  },
  {
    title: "How We Use Your Data",
    body: `We use information you choose to send to respond to your project enquiry. We may use website analytics, if configured, to understand visits and improve the site. We do not include enquiry form content in analytics events.`,
  },
  {
    title: "Cookies & Analytics",
    body: `We use Google Analytics and the Meta Pixel to understand website visits and meaningful interactions such as service-page views and contact actions. These analytics services can use cookies or similar technologies and may process information under their own terms. We do not send enquiry form content, names, email addresses or phone numbers in analytics events. You can manage cookies through your browser settings.`,
  },
  {
    title: "Data Storage & Security",
    body: `Enquiry form submissions are verified for abuse before they are sent to our email service. We do not store form content in a website database. Email or other messages you send us may be retained in the relevant communication system while we handle the enquiry.`,
  },
  {
    title: "Your Rights",
    body: `You may request access to, correction of, or deletion of any personal data we hold about you at any time. To exercise these rights, email us at nayan@blueblackbeige.in and we will respond within 7 business days.`,
  },
  {
    title: "Third-Party Links",
    body: `Our website may contain links to external sites. We are not responsible for the privacy practices of those sites and encourage you to review their policies separately.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this policy from time to time. The date at the top of this page reflects the most recent revision. Continued use of our site after changes are posted constitutes acceptance of those changes.`,
  },
  {
    title: "Contact",
    body: `For any privacy-related questions, contact us at nayan@blueblackbeige.in or call +91 92881 82862.`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-bg-primary text-text-primary min-h-screen">
      <Navbar />

      <section className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        {/* Header */}
        <span className="text-xs tracking-[0.3em] text-accent-blue font-semibold uppercase mb-6 block">
          Legal
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-medium leading-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-text-secondary text-sm mb-12">
          Last updated: October 2026
        </p>

        <div className="h-px bg-border-subtle mb-12" />

        {/* Intro */}
        <p className="text-text-secondary text-base leading-relaxed mb-12">
          Blue Black Beige (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to
          protecting your privacy. This policy explains what information we collect when you
          visit <strong className="text-white">blueblackbeige.in</strong>, how we use it, and
          your rights regarding your personal data.
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-lg font-semibold text-white mb-3">
                {i + 1}. {s.title}
              </h2>
              <p className="text-text-secondary text-base leading-relaxed whitespace-pre-line">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="h-px bg-border-subtle my-12" />

        <Link
          href="/"
          className="text-sm text-accent-blue hover:underline"
        >
          ← Back to home
        </Link>
      </section>

      <Footer />
    </main>
  );
}
