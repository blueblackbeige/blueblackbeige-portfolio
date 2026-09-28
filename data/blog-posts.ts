export type BlogSource = {
  label: string;
  href: string;
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  quote?: string;
};

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  dek: string;
  readTime: string;
  keywords: string[];
  heroImage: string;
  heroAlt: string;
  sections: BlogSection[];
  sources: BlogSource[];
};

export const newBlogPosts: BlogPost[] = [
  {
    slug: "search-after-ai",
    category: "Search & Strategy",
    title: "Search After AI: What Brands Should Fix First",
    dek: "AI search changes the surface of discovery, but the foundation is still useful content, clear structure and a page experience people trust.",
    readTime: "6 min read",
    keywords: ["AI search SEO", "SEO content strategy", "digital marketing strategy", "search engine optimization"],
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2400&auto=format&fit=crop",
    heroAlt: "Laptop displaying a digital interface in a dark studio",
    sections: [
      {
        heading: "AI search changes the surface, not the foundation",
        paragraphs: [
          "Search results now answer more questions before someone clicks. That makes the first job of a brand page even clearer: explain what you do, who it is for and why the visitor should trust you.",
          "Google says its AI features use the same core Search systems as the wider web. There is no secret AI markup that replaces solid SEO. Crawlable pages, helpful writing, internal links and a good page experience still do the heavy lifting."
        ],
        quote: "Make the page useful when it is read on its own, then make it easy for search systems to understand."
      },
      {
        heading: "Make every page answer one real question",
        paragraphs: [
          "A service page should not try to be a company brochure, a pricing sheet and a blog at the same time. Give each page one clear job and use the heading, opening paragraph and calls to action to support that job.",
          "For an agency, that could mean a branding page that explains the decision process, a web page that shows the work and a marketing page that makes the deliverables concrete. Specific pages are easier for people to scan and easier to connect through internal links."
        ],
        bullets: [
          "Use a descriptive title that names the service and audience.",
          "Lead with the problem you solve instead of a generic promise.",
          "Link to a relevant case study, process step or contact action.",
          "Use original examples, screenshots or results when you have permission to share them."
        ]
      },
      {
        heading: "Do not chase magic markup",
        paragraphs: [
          "Structured data can help search engines classify a page, but it cannot rescue thin or confusing content. The markup should describe what visitors can actually see. If the visible page says one thing and the structured data says another, the extra code becomes a liability rather than an advantage.",
          "A better investment is a monthly content review. Check whether the page still reflects the service, whether the examples are current and whether a new visitor can understand the next step without opening another tab."
        ]
      },
      {
        heading: "A practical weekly audit",
        paragraphs: [
          "Pick one important page each week and review it as if you found it through a question in Google. Read the page title, the first two paragraphs, the main image alt text and the links. Then ask whether the page gives a complete answer or sends the reader back to search again."
        ],
        bullets: [
          "Confirm the page is indexable and linked from a relevant section of the site.",
          "Replace vague headings with words your customer would actually use.",
          "Add one proof point or example that is unique to your business.",
          "Check the page on a phone before publishing the next article."
        ]
      }
    ],
    sources: [
      { label: "Google Search Central: AI features and your website", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      { label: "Google Search Central: Optimizing for generative AI features", href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" }
    ]
  },
  {
    slug: "website-experience",
    category: "Digital Experience",
    title: "The Website Experience Customers Feel",
    dek: "Speed, responsiveness and visual stability are not invisible engineering details. They shape how confident a customer feels about a brand.",
    readTime: "5 min read",
    keywords: ["website experience", "website performance", "Core Web Vitals", "SEO-friendly website"],
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2400&auto=format&fit=crop",
    heroAlt: "Analytics dashboard on a laptop",
    sections: [
      {
        heading: "Measure the experience, not just the server",
        paragraphs: [
          "A page can return a fast server response and still feel slow. The useful question is what the visitor sees and can do: when the main content appears, when the interface responds to a tap and whether the layout stays in place while assets load.",
          "Google's Core Web Vitals turn those moments into three field metrics. They help a team discuss performance in terms of a real visit instead of a vague feeling that a page should be faster."
        ],
        quote: "Performance is part of the brand promise because every delay happens inside the customer experience."
      },
      {
        heading: "Three signals worth watching",
        paragraphs: [
          "Largest Contentful Paint measures when the main content is likely visible. Interaction to Next Paint measures how quickly the page responds after an interaction. Cumulative Layout Shift measures unexpected movement that makes people lose their place."
        ],
        bullets: [
          "Aim for LCP at 2.5 seconds or less.",
          "Aim for INP at 200 milliseconds or less.",
          "Aim for CLS at 0.1 or less.",
          "Review the 75th percentile so the result reflects most visits, not only the fastest device."
        ]
      },
      {
        heading: "Fix the moments that change decisions",
        paragraphs: [
          "Start with the screens closest to a business action. If a visitor reaches a booking form, product page or contact button, that path deserves the first performance pass. Compress the main image, reserve space for media, remove scripts that do not support the task and make the primary action respond immediately.",
          "Small improvements compound when they remove uncertainty. A stable card grid feels more considered. A button that responds on the first tap feels more reliable. A headline that appears before a blank hero gives the visitor a reason to stay."
        ]
      },
      {
        heading: "Use field data to choose the next fix",
        paragraphs: [
          "Lab tools are useful for finding a likely cause, but field data tells you what customers experience across real devices and networks. Compare the same page before and after a change, record the business metric that matters and keep the improvement that helps both the experience and the outcome."
        ]
      }
    ],
    sources: [
      { label: "web.dev: Core Web Vitals", href: "https://web.dev/articles/vitals" },
      { label: "web.dev: Getting started with measuring Web Vitals", href: "https://web.dev/articles/vitals-measurement-getting-started" }
    ]
  },
  {
    slug: "content-system",
    category: "Marketing",
    title: "A Content System That Compounds",
    dek: "A durable social presence comes from a repeatable system: one clear idea, several useful formats and a measurement loop that improves the next post.",
    readTime: "5 min read",
    keywords: ["social media marketing", "content marketing strategy", "social media content strategy", "digital marketing"],
    heroImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2400&auto=format&fit=crop",
    heroAlt: "Notebook and laptop ready for planning content",
    sections: [
      {
        heading: "Start with a business question",
        paragraphs: [
          "A content calendar becomes busywork when every post starts with a blank page. Start with the question your customer is asking and the decision you want to make easier. That gives the creative a job before the format is chosen.",
          "A restaurant might answer why a dish is different. A coaching brand might remove a study worry. An agency might show how a strategy turns into a visible result. The subject changes, but the discipline is the same: useful content earns attention because it helps someone move forward."
        ],
        quote: "Do not publish to fill a calendar. Publish to make the next customer decision easier."
      },
      {
        heading: "Build three layers from one idea",
        paragraphs: [
          "One strong idea can become a small campaign without feeling repetitive. The first layer explains the point. The second shows it in a visual or example. The third invites a response, proof point or next action."
        ],
        bullets: [
          "Anchor: a detailed post, article, case study or short video.",
          "Adaptations: a carousel, quote card, short clip or email section.",
          "Conversation: a question, reply prompt or customer example.",
          "Evidence: a result, behind-the-scenes detail or lesson learned."
        ]
      },
      {
        heading: "Reuse without repeating",
        paragraphs: [
          "Repurposing is not copying the same caption into every channel. Keep the idea, then change the entry point. A founder story can become a LinkedIn lesson, an Instagram carousel and a website case study because each format serves a different reading habit.",
          "LinkedIn recommends publishing relevant, useful content, measuring against a clear objective and reusing strong content across owned channels. That approach gives a small team more consistency without asking it to invent a new campaign every morning."
        ]
      },
      {
        heading: "Measure the signal that matches the job",
        paragraphs: [
          "Reach is useful when the goal is awareness, but it is not the only useful signal. Track saves and replies for education, profile visits and qualified clicks for consideration, and enquiries or booked calls for conversion. Review the pattern across a month instead of judging one post in isolation."
        ],
        bullets: [
          "Awareness: qualified reach and repeat exposure.",
          "Consideration: saves, replies, profile visits and quality clicks.",
          "Conversion: enquiries, booked calls and sales-qualified leads.",
          "Learning: which questions keep appearing in comments and conversations."
        ]
      }
    ],
    sources: [
      { label: "LinkedIn Marketing Solutions: Sponsored Content tips", href: "https://business.linkedin.com/marketing-solutions/best-practices/ad-tips/sponsored-content-tips" },
      { label: "LinkedIn Marketing Solutions: Content marketing workbook", href: "https://business.linkedin.com/marketing-solutions/content-marketing/introducing-the-linkedin-content-marketing-workbook-namer1" }
    ]
  },
  {
    slug: "mobile-first-accessibility",
    category: "Design & Inclusion",
    title: "Design for Everyone, Starting with Mobile",
    dek: "Mobile design and accessibility are the same business decision: make the important action clear, reachable and understandable in real conditions.",
    readTime: "4 min read",
    keywords: ["mobile-first design", "accessible website design", "mobile SEO", "inclusive digital experience"],
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2400&auto=format&fit=crop",
    heroAlt: "Person using a smartphone beside a laptop",
    sections: [
      {
        heading: "Small screens reveal weak priorities",
        paragraphs: [
          "Desktop layouts can hide indecision behind extra space. A phone cannot. When the screen is narrow, the hierarchy has to answer three questions quickly: what is this, why should I care and what can I do next?",
          "W3C treats mobile accessibility as part of the same accessibility standards that apply across the web. Touch targets, readable type, clear focus states and sensible motion are not optional polish. They are part of whether a person can use the experience."
        ],
        quote: "Responsive design is not a smaller desktop. It is a clearer decision path."
      },
      {
        heading: "Design around the task",
        paragraphs: [
          "Start with the most important task on the page and give it the most reliable path. If the page is a service page, that might be understanding the offer and requesting a conversation. If it is a portfolio page, that might be opening a project without losing the surrounding context."
        ],
        bullets: [
          "Keep the primary action visible without making it compete with five secondary links.",
          "Use headings and spacing to make scanning work before reading begins.",
          "Give images meaningful alt text when they carry information.",
          "Make focus states visible for keyboard users and people navigating with assistive technology."
        ]
      },
      {
        heading: "Make touch, type and motion predictable",
        paragraphs: [
          "People use phones in bright rooms, one hand and interrupted attention. Controls need enough space to tap, text needs enough contrast to read and animations should never hide the action a person came to complete.",
          "Test the page with a slow connection and a larger text setting. If the layout remains understandable, the design is doing its job instead of depending on perfect conditions."
        ]
      },
      {
        heading: "Check the real journey",
        paragraphs: [
          "A mobile review should follow a complete journey, not just inspect the first screen. Open the menu, jump to the relevant section, fill a form, close a dialog and return to the previous context. The small moments between those steps are where trust is either built or lost."
        ]
      }
    ],
    sources: [
      { label: "W3C Web Accessibility Initiative: Mobile accessibility", href: "https://www.w3.org/WAI/standards-guidelines/mobile/" },
      { label: "Google Search Essentials", href: "https://developers.google.com/search/docs/essentials" }
    ]
  }
];
