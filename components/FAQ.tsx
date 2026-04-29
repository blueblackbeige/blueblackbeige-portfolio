"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How much does website design cost in India?",
    answer:
      "Professional website design in India typically ranges from ₹50,000 to ₹5,00,000 depending on complexity, features, and the agency's expertise. At Blue Black Beige, our custom web design and development projects start at ₹1,50,000. This includes complete UI/UX design, Next.js development, responsive design for all devices, and 30 days of post-launch support. We provide transparent pricing with no hidden costs.",
  },
  {
    question: "What makes Blue Black Beige different from other web design agencies?",
    answer:
      "Blue Black Beige is a boutique studio of three specialists (design, engineering, and brand strategy) working directly with clients. Unlike large agencies with account managers and handoffs, you work directly with the people building your project. We specialize in Next.js and modern React development, deliver projects on time every time, and provide full source code ownership with no lock-ins.",
  },
  {
    question: "Do you work with clients outside of Patna?",
    answer:
      "Yes, absolutely. While we're based in Patna, Bihar, we work with clients across India (Mumbai, Delhi, Pune, Hyderabad, Chennai) and internationally. We operate fully remotely and have experience collaborating with teams across different time zones. All communication happens via video calls, project management tools, and Figma for design reviews.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "A standard website project takes 6-8 weeks from kickoff to launch. Week 1: Discovery and strategy. Weeks 2-3: Design and prototyping. Weeks 4-6: Development and testing. Week 7-8: Refinement and launch. More complex web applications may take 10-12 weeks. We provide a detailed timeline during our initial consultation and commit to delivery dates.",
  },
  {
    question: "What technologies do you use for web development?",
    answer:
      "We specialize in Next.js 14 (React framework), TypeScript for type safety, Tailwind CSS for styling, and modern animation libraries like Framer Motion and GSAP. For backend, we use Node.js, Express, and databases like PostgreSQL and MongoDB. We also integrate with headless CMS platforms like Sanity and Contentful. All our sites are hosted on Vercel or AWS for optimal performance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative py-32 md:py-48 bg-beige-light border-y border-stone-light fade-up"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-[1600px] mx-auto px-8">

        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-stone">
              <span className="w-8 h-px bg-electric" />
              FAQ
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-serif font-normal leading-[0.95] tracking-tightest text-ink"
              style={{ fontSize: "clamp(40px, 7vw, 120px)" }}
            >
              Common <span className="italic">questions.</span>
            </h2>
          </div>
        </div>

        {/* FAQ Items – interactive accordion */}
        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-t border-stone-light last:border-b"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  className="w-full flex items-start justify-between gap-6 py-8 text-left group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <h3
                    className="font-serif text-xl md:text-2xl leading-tight tracking-tightest text-ink group-hover:text-electric transition-colors duration-300"
                    itemProp="name"
                  >
                    {faq.question}
                  </h3>
                  <span
                    className={`shrink-0 w-6 h-6 flex items-center justify-center border border-stone-light rounded-full text-stone text-xs transition-all duration-300 mt-0.5 ${
                      isOpen ? "rotate-45 border-electric text-electric" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text" className="pb-8">
                    <p className="text-[15px] leading-relaxed text-stone-dark">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-10 border-t border-stone-light">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="font-serif italic text-2xl md:text-3xl text-ink tracking-tightest mb-1">
                Still have questions?
              </p>
              <p className="text-stone text-sm">
                Schedule a free 30-minute consultation to discuss your project.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-ink text-beige text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-electric transition-colors duration-500 shrink-0"
            >
              <span>Book consultation</span>
              <span className="text-base leading-none">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
