import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Web, SEO & Digital Marketing Services in India | Blue Black Beige",
  description: "Explore web design, organic growth and digital marketing services from Blue Black Beige, based in Patna and working with businesses across India.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Web, SEO & Digital Marketing Services in India | Blue Black Beige", description: "Web design, SEO and digital marketing services for businesses across India.", url: "https://blueblackbeige.in/services", type: "website" },
};

const services = [
  { title: "Web design & development", href: "/web-design-development", description: "Plan, design and build accessible, mobile-ready business websites with a clear customer journey." },
  { title: "SEO & organic growth", href: "/seo-organic-growth", description: "Improve technical health, useful content and measurement to build sustainable search visibility." },
  { title: "Digital marketing", href: "/digital-marketing", description: "Connect content, social, campaigns and your website to business goals and measurable next steps." },
];

export default function ServicesPage() {
  return <main className="min-h-screen bg-bg-primary text-text-primary"><Navbar />
    <header className="mx-auto max-w-5xl px-6 pb-14 pt-32 sm:pb-20 sm:pt-40">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-blue">Services · India</p>
      <h1 className="mt-5 max-w-4xl font-serif text-4xl font-medium leading-tight sm:text-6xl">Digital services for businesses across India</h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-secondary">Blue Black Beige is a digital studio based in Patna, Bihar. Explore our core services and how we approach each one.</p>
    </header>
    <section className="mx-auto grid max-w-5xl gap-5 px-6 pb-20 md:grid-cols-3">
      {services.map((service) => <article key={service.href} className="flex flex-col rounded-2xl border border-border-subtle bg-bg-secondary/20 p-7">
        <h2 className="font-serif text-2xl text-white">{service.title}</h2><p className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">{service.description}</p>
        <Link href={service.href} className="mt-7 text-sm font-medium text-accent-beige underline decoration-white/20 underline-offset-4">Explore service →</Link>
      </article>)}
    </section>
    <section className="mx-auto max-w-5xl px-6 pb-24"><div className="rounded-2xl border border-border-subtle p-7 sm:p-10"><h2 className="font-serif text-2xl text-white">Serving India from Patna</h2><p className="mt-4 max-w-3xl leading-relaxed text-text-secondary">We work remotely with teams and business owners across India. Recommendations are based on each business’s goals, customer questions and available evidence—not on a promise of specific search rankings.</p></div>
      <p className="mt-8 text-sm text-text-secondary">Want to talk through a project? <Link href="/#contact" className="text-white underline underline-offset-4">Send an enquiry.</Link></p>
    </section>
    <Footer /></main>;
}
