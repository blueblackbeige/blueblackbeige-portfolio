import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { socialMediaPlans } from "@/data/social-media-plans";

export const metadata: Metadata = {
  title: "Digital Marketing Services in India | Blue Black Beige",
  description: "Digital strategy, social content and campaign measurement for businesses across India from Blue Black Beige, a digital studio based in Patna.",
  alternates: { canonical: "/digital-marketing" },
  openGraph: { title: "Digital Marketing Services in India | Blue Black Beige", description: "A connected approach to digital marketing for businesses across India.", url: "https://blueblackbeige.in/digital-marketing", type: "website" },
};

export default function DigitalMarketingPage() {
  return <ServiceLandingPage data={{
    slug: "digital-marketing",
    title: "Digital marketing built around your business goals", eyebrow: "Digital marketing",
    description: "Bring your website, content, social channels and paid campaigns into one clear plan so each channel has a purpose and a measurable next step.",
    intro: "Blue Black Beige is based in Patna and partners remotely with businesses across India. The right channel mix depends on the audience, offer and team capacity; we start with those realities rather than a fixed package of tactics.",
    packages: socialMediaPlans,
    services: ["Audience and channel strategy", "Search and content planning", "Social media content systems", "Campaign creative and landing-page alignment", "Analytics and enquiry tracking", "Monthly learning and optimisation"],
    process: [
      { title: "Choose the goal", body: "Agree on a business outcome, audience and customer action before deciding which channels to use." },
      { title: "Connect the journey", body: "Align the message, content, campaign and landing experience so a click has a useful next step." },
      { title: "Learn from evidence", body: "Review qualified traffic, enquiries and channel-specific signals, then adjust the plan based on what happened." },
    ],
    questions: [
      { question: "Which marketing channels should my business use?", answer: "It depends on the audience, buying cycle, offer and resources. We assess where customers look for answers and choose a manageable mix rather than recommending every channel by default." },
      { question: "Do you provide SEO and social media together?", answer: "Yes, when the goals and audience support a connected plan. Search content can answer persistent questions while social content builds awareness, conversation and familiarity." },
      { question: "How do you measure digital marketing?", answer: "We agree on useful measures for the goal: for example, qualified visits and enquiries, alongside channel metrics such as saves, replies or campaign clicks. Reach alone is not treated as proof of business results." },
      { question: "Can you work with our in-house team?", answer: "Yes. Scope can cover strategy, selected creative or execution support, with roles and review steps agreed at the start." },
    ],
    related: [{ title: "SEO and organic growth", href: "/seo-organic-growth" }, { title: "Web design and development", href: "/web-design-development" }],
  }} />;
}
