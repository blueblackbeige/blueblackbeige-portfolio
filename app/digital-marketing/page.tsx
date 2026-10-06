import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";

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
    packages: [
      {
        name: "Startup Plan",
        tagline: "Build a polished, consistent social presence from day one.",
        audience: "For new businesses",
        focus: "Brand awareness and organic consistency",
        platforms: "Choice of 2 platforms",
        deliverables: [
          { title: "Post frequency", description: "8-10 posts per month, including static and carousel content." },
          { title: "Reels and video editing", description: "4-5 Reels or Shorts monthly, using stock or client-provided footage." },
          { title: "Content strategy", description: "A content calendar prepared one week in advance." },
          { title: "Captions and hashtags", description: "Creative captions and targeted hashtag research for every post." },
          { title: "Profile optimization", description: "One-time optimization of bios, profile photos and highlight covers." },
          { title: "Monthly reporting", description: "A basic report on page reach and engagement." },
          { title: "Meta campaign setup", description: "Campaign setup according to your requirements." },
        ],
      },
      {
        name: "Pilot Plan",
        tagline: "Test organic growth and paid promotion in one balanced plan.",
        audience: "For businesses testing a broader mix",
        focus: "Engagement, page growth and trial ads",
        platforms: "Up to 3 platforms",
        deliverables: [
          { title: "Post frequency", description: "12 posts per month, including 3-4 carousel posts." },
          { title: "Reels and video editing", description: "7-8 Reels or Shorts per month, produced by our team with two shoots each month." },
          { title: "Paid ad management", description: "Ads managed to agreed requirements, including lead-generation campaign setup." },
          { title: "Story updates", description: "5 designed stories per month to keep your page active." },
          { title: "Community engagement", description: "Basic comments and DMs checked and answered twice a week." },
          { title: "Performance review", description: "A monthly report plus a 30-minute performance review call." },
        ],
      },
    ],
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
