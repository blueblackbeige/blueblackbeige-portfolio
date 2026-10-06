import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Web Design & Development in India | Blue Black Beige",
  description: "Plan, design and build a fast, accessible website with Blue Black Beige, a digital studio in Patna working with businesses across India.",
  alternates: { canonical: "/web-design-development" },
  openGraph: { title: "Web Design & Development in India | Blue Black Beige", description: "Website strategy, design and development for businesses across India.", url: "https://blueblackbeige.in/web-design-development", type: "website" },
};

export default function WebDesignPage() {
  return <ServiceLandingPage data={{
    slug: "web-design-development",
    title: "Web design and development for businesses across India", eyebrow: "Web design & development",
    description: "We plan, design and build business websites that explain your offer clearly, work well on phones and make the next customer action easy to find.",
    intro: "Based in Patna, Bihar, Blue Black Beige works remotely with Indian businesses. Projects begin with audience, content and business goals; the technology follows the job the site needs to do.",
    services: ["Website strategy and information architecture", "Responsive UI and visual design", "Next.js and React development", "Content structure and on-page SEO foundations", "Performance and accessibility review", "Launch QA and handover"],
    process: [
      { title: "Understand the job", body: "We clarify who the site is for, what visitors need to know and what action matters to the business." },
      { title: "Design and build", body: "We shape page structure and visual direction, then implement responsive pages and agreed integrations." },
      { title: "Review and launch", body: "We check key journeys, metadata, mobile layouts and launch details, then hand over the agreed work." },
    ],
    questions: [
      { question: "Can you work with a business outside Patna?", answer: "Yes. The studio is based in Patna, Bihar and works remotely with businesses across India. Meetings and project reviews can be handled online." },
      { question: "Does a new website automatically rank on Google?", answer: "No website can guarantee rankings. We can build crawlable, accessible pages with descriptive metadata and a sound technical foundation; visibility also depends on competition, content, authority and ongoing work." },
      { question: "Can you redesign an existing website?", answer: "Yes. We can review the current site, preserve useful content and URLs where possible, and agree on a migration plan before changes go live." },
      { question: "What do you need to estimate a project?", answer: "A short description of the business goal, audience, required pages, existing content and any integrations helps us scope the work and discuss an appropriate approach." },
    ],
    related: [{ title: "SEO and organic growth", href: "/seo-organic-growth" }, { title: "Digital marketing", href: "/digital-marketing" }],
  }} />;
}
