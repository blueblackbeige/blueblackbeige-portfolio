import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { marketingProjects } from "@/data/marketing-projects";
import ScrollReveal from "./ScrollReveal";

export default function MarketingPreview() {
  return (
    <div className="mb-12 pt-10 border-t border-white/10">
      <ScrollReveal>
        <p className="text-xs uppercase tracking-[0.25em] text-accent-blue font-semibold mb-3">Marketing &amp; Social Media</p>
        <h3 className="text-3xl lg:text-4xl font-serif mb-4">Brands we create for<span className="text-accent-blue">.</span></h3>
        <p className="text-text-secondary max-w-2xl leading-relaxed mb-8">Explore campaign visuals and social content from our client work and Blue Black Beige studio experiments.</p>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-6">
        {marketingProjects.map((client) => (
          <ScrollReveal key={client.slug} className="h-full">
            <Link href={`/work#${client.slug}`} className="group block h-full rounded-2xl border border-white/10 overflow-hidden bg-bg-secondary/20 hover:border-accent-beige/40 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-blue">
              <div className="grid grid-cols-3 gap-2 p-3 bg-white/[0.03]">
                {client.images.slice(0, 3).map((image) => (
                  <div key={image.src} className="relative aspect-[4/5] overflow-hidden rounded-lg bg-black">
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width: 639px) 50vw, 25vw" className="object-contain" />
                  </div>
                ))}
              </div>
              <div className="p-5 lg:p-6">
                <p className="text-xs text-accent-beige mb-2">{client.industry} · Ongoing collaboration</p>
                <h4 className="font-serif text-2xl text-white">{client.name}</h4>
                <p className="text-sm text-text-secondary leading-relaxed mt-3">{client.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white">View more creatives <ArrowUpRight aria-hidden="true" className="w-4 h-4" /></span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
