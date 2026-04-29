import type { Metadata } from "next";
import Header  from "@/components/Header";
import Footer  from "@/components/Footer";
import Cursor  from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Web Design & Development Services",
  description:
    "Premium web design, Next.js development, brand identity, and design systems services. We build modern websites and web applications for startups and growing businesses in India and worldwide.",
};

const services = [
  {
    num: "01",
    name: "Web Design",
    description:
      "Modern, responsive web design with exceptional user experience. We create beautiful interfaces that convert visitors into customers.",
    features: [
      "UI/UX design",
      "Responsive design (mobile, tablet, desktop)",
      "Design systems",
      "Prototyping & wireframing",
      "Interactive Figma prototypes",
      "User research & testing",
    ],
    price: "From ₹1,50,000",
    timeline: "3–4 weeks",
  },
  {
    num: "02",
    name: "Web Development",
    description:
      "Full-stack web development using Next.js, React, and TypeScript. We build fast, scalable web applications and websites.",
    features: [
      "Next.js 14 development",
      "React web applications",
      "TypeScript implementation",
      "Headless CMS integration (Sanity, Contentful)",
      "API development",
      "Performance optimization",
    ],
    price: "From ₹2,50,000",
    timeline: "6–8 weeks",
  },
  {
    num: "03",
    name: "Brand Identity",
    description:
      "Complete brand identity systems including logo design, color palettes, typography, and comprehensive brand guidelines.",
    features: [
      "Logo design (3 concepts)",
      "Color palette development",
      "Typography system",
      "Brand guidelines (20–30 pages)",
      "Business card design",
      "Social media templates",
    ],
    price: "From ₹75,000",
    timeline: "3–4 weeks",
  },
  {
    num: "04",
    name: "Design Systems",
    description:
      "Scalable design systems with reusable components, documentation, and implementation guidelines.",
    features: [
      "Component library",
      "Design tokens",
      "Documentation",
      "Accessibility guidelines",
      "Code implementation",
      "Ongoing support",
    ],
    price: "From ₹2,00,000",
    timeline: "4–6 weeks",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Cursor />
      <Header />
      <main className="min-h-screen pt-40 pb-32">
        <div className="max-w-[1600px] mx-auto px-8">

          {/* Hero */}
          <div className="mb-24 fade-up">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-stone mb-8">
              <span className="w-8 h-px bg-electric" />
              Services
            </div>
            <h1
              className="font-serif font-normal leading-[0.95] tracking-tightest text-ink mb-8"
              style={{ fontSize: "clamp(48px, 8vw, 140px)" }}
            >
              What we{" "}
              <span className="italic text-electric">offer.</span>
            </h1>
            <p className="text-xl leading-relaxed text-ink/70 max-w-3xl">
              End-to-end design and development services for startups and growing
              businesses. We combine strategic thinking, beautiful design, and modern
              engineering to build digital products that work.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-24 fade-up">
            {services.map((service) => (
              <div
                key={service.num}
                className="p-10 bg-beige-light border border-stone-light hover:border-electric transition-colors duration-300 group"
              >
                {/* Number */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 rounded-full bg-electric" />
                  <span className="font-mono text-[11px] tracking-[0.2em] text-stone">
                    {service.num}
                  </span>
                </div>

                <h2 className="font-serif text-4xl tracking-tightest text-ink mb-3 group-hover:text-electric transition-colors duration-300">
                  {service.name}
                </h2>
                <p className="text-stone-dark leading-relaxed mb-8 text-[15px]">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="font-mono text-[10px] tracking-[0.25em] uppercase text-stone mb-4">
                    What&apos;s included
                  </h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-stone-dark">
                        <span className="text-electric mt-0.5 shrink-0">→</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Timeline */}
                <div className="flex items-center justify-between pt-6 border-t border-stone-light">
                  <div>
                    <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-stone mb-1">
                      Investment
                    </div>
                    <div className="font-serif text-2xl text-ink">{service.price}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-stone mb-1">
                      Timeline
                    </div>
                    <div className="font-serif text-2xl text-ink">{service.timeline}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="border-t border-stone-light pt-16 text-center fade-up">
            <p className="font-serif italic text-3xl md:text-4xl text-ink tracking-tightest mb-4">
              Ready to start your project?
            </p>
            <p className="text-stone mb-8 max-w-2xl mx-auto leading-relaxed">
              Schedule a free 30-minute consultation. We&apos;ll discuss your needs, timeline,
              and provide a detailed proposal with transparent pricing.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-ink text-beige text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-electric transition-colors duration-500"
            >
              <span>Book consultation</span>
              <span className="text-base leading-none">→</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
