import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "SEO & Organic Growth in India | Blue Black Beige",
  description: "Technical SEO, useful content and measurement for Indian businesses. Blue Black Beige is a Patna-based digital studio working across India.",
  alternates: { canonical: "/seo-organic-growth" },
  openGraph: { title: "SEO & Organic Growth in India | Blue Black Beige", description: "Technical SEO, helpful content and organic visibility foundations for businesses across India.", url: "https://blueblackbeige.in/seo-organic-growth", type: "website" },
};

export default function SeoGrowthPage() {
  return <ServiceLandingPage data={{
    slug: "seo-organic-growth",
    title: "SEO foundations and organic growth for Indian businesses", eyebrow: "SEO & organic growth",
    description: "We improve how your website is crawled, understood and measured, then help build useful pages around the questions your customers actually ask.",
    intro: "Search visibility is earned over time. Our approach connects technical health, page intent, original expertise, internal links and conversion measurement—without promising rankings or shortcuts.",
    services: ["Technical crawl and indexation review", "Keyword and search-intent mapping", "Canonical, sitemap and internal-link checks", "Service-page and content planning", "Structured data that matches visible content", "Search Console and analytics measurement setup"],
    process: [
      { title: "Establish the baseline", body: "Review indexation, priority queries, landing pages, mobile usability and available Search Console data." },
      { title: "Fix and focus", body: "Prioritise technical blockers and map clear search intent to useful pages rather than duplicating near-identical pages." },
      { title: "Measure and improve", body: "Track impressions, relevant clicks, enquiries and page quality over time; refine work from observed data." },
    ],
    questions: [
      { question: "How long does SEO take?", answer: "There is no fixed timetable. Search engines need to recrawl changes, and competition and site history affect results. We report leading indicators such as indexation and impressions while the longer-term trend develops." },
      { question: "Can you guarantee a first-page ranking?", answer: "No. Rankings depend on many factors outside any agency’s control. We focus on sound implementation, useful content, transparent measurement and sustainable improvements." },
      { question: "What is AEO or GEO in relation to SEO?", answer: "Answer engine and generative engine visibility builds on clear, crawlable pages that answer real questions and demonstrate expertise. There is no universal special markup that guarantees AI citations." },
      { question: "Do you create city pages for all of India?", answer: "We recommend location pages only where there is a real local service, useful local information and evidence to support the page. Thin city-name variations can confuse visitors and search systems." },
    ],
    related: [{ title: "Web design and development", href: "/web-design-development" }, { title: "Digital marketing", href: "/digital-marketing" }],
  }} />;
}
