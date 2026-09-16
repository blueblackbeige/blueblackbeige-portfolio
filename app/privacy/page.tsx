import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Blue Black Beige",
  description:
    "How Blue Black Beige collects, uses, and protects the information you share with us through our website and contact form.",
};

const sections = [
  {
    title: "Information We Collect",
    body: `When you fill out our contact form, we collect your name, email address, and phone number. We use this information solely to respond to your enquiry and, if you agree, to send you relevant updates about our services. We do not sell or rent this information to any third party.`,
  },
  {
    title: "How We Use Your Data",
    body: `Your details are used to:\n• Respond to project enquiries and schedule discovery calls\n• Send occasional updates about Blue Black Beige (you can unsubscribe at any time)\n• Improve our website experience through aggregated, anonymous analytics (Google Analytics)`,
  },
  {
    title: "Cookies & Analytics",
    body: `We use Google Analytics to understand how visitors navigate our site. This collects anonymised data such as pages visited and time on site. No personally identifiable information is shared with Google Analytics. You can opt out via your browser settings or a browser extension such as the Google Analytics Opt-out Add-on.`,
  },
  {
    title: "Data Storage & Security",
    body: `Your information is stored securely and accessed only by the Blue Black Beige team. We take reasonable technical and organisational measures to protect it from unauthorised access, loss, or disclosure. We do not store payment card information.`,
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
          Last updated: September 2026
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
