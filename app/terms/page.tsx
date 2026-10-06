import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Blue Black Beige",
  description:
    "Terms governing your use of the Blue Black Beige website and engagement with our design, development, and marketing services.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | Blue Black Beige",
    description: "Terms for using the Blue Black Beige website and engaging its services.",
    url: "https://blueblackbeige.in/terms",
    type: "website",
  },
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: `By accessing or using blueblackbeige.in, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website.`,
  },
  {
    title: "Services",
    body: `Blue Black Beige provides design, web development, branding, motion design, digital marketing, and social media marketing services. Specific deliverables, timelines, and fees for client engagements are defined in individual project agreements or proposals, which take precedence over these general terms.`,
  },
  {
    title: "Intellectual Property",
    body: `All content on this website, including text, images, motion graphics, and code, is owned by or licensed to Blue Black Beige and protected under applicable copyright law. You may not reproduce, distribute, or create derivative works from our content without prior written consent.\n\nFor client projects: upon full payment, ownership of final agreed deliverables transfers to the client as outlined in the project agreement. Working files and source assets remain the property of Blue Black Beige unless explicitly included in the agreement.`,
  },
  {
    title: "Use of the Website",
    body: `You agree not to:\n• Use the site for any unlawful purpose\n• Attempt to gain unauthorised access to any part of the site or its related systems\n• Transmit any harmful, offensive, or disruptive content via our contact form`,
  },
  {
    title: "Limitation of Liability",
    body: `Blue Black Beige provides this website on an &quot;as is&quot; basis. We make no warranties, express or implied, regarding the accuracy or completeness of any content. To the maximum extent permitted by law, Blue Black Beige shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.`,
  },
  {
    title: "Third-Party Services",
    body: `Our site uses third-party services including Google Analytics. These services have their own terms and privacy policies, which you are encouraged to review separately.`,
  },
  {
    title: "Governing Law",
    body: `These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Patna, Bihar.`,
  },
  {
    title: "Changes to Terms",
    body: `We reserve the right to modify these terms at any time. Updated terms will be posted on this page with a revised date. Continued use of the site after updates constitutes acceptance.`,
  },
  {
    title: "Contact",
    body: `For questions about these terms, contact us at nayan@blueblackbeige.in.`,
  },
];

export default function TermsPage() {
  return (
    <main className="bg-bg-primary text-text-primary min-h-screen">
      <Navbar />

      <section className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        {/* Header */}
        <span className="text-xs tracking-[0.3em] text-accent-blue font-semibold uppercase mb-6 block">
          Legal
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-medium leading-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-text-secondary text-sm mb-12">
          Last updated: September 2026
        </p>

        <div className="h-px bg-border-subtle mb-12" />

        {/* Intro */}
        <p className="text-text-secondary text-base leading-relaxed mb-12">
          Please read these terms carefully before using our website or engaging us for services.
          These terms apply to all visitors and clients of Blue Black Beige.
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-lg font-semibold text-white mb-3">
                {i + 1}. {s.title}
              </h2>
              <p
                className="text-text-secondary text-base leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
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
