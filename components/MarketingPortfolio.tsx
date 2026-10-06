"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import { marketingProjects } from "@/data/marketing-projects";
import ScrollReveal from "./ScrollReveal";

export default function MarketingPortfolio() {
  const [selected, setSelected] = useState<{ client: number; image: number } | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = selected !== null;
  const client = selected ? marketingProjects[selected.client] : null;
  const image = selected && client ? client.images[selected.image] : null;

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    const trigger = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  const changeImage = (direction: number) => {
    setSelected((current) => current && ({
      client: current.client,
      image: (current.image + direction + marketingProjects[current.client].images.length) % marketingProjects[current.client].images.length,
    }));
  };

  return (
    <section id="marketing-work" className="py-16 lg:py-24 border-t border-white/10 scroll-mt-24" aria-labelledby="marketing-title">
      <div className="max-w-[1440px] mx-auto section-padding">
        <ScrollReveal>
          <p className="text-xs tracking-[0.3em] uppercase text-accent-blue font-semibold mb-5">Marketing &amp; Social Media</p>
          <h2 id="marketing-title" className="text-3xl lg:text-5xl font-serif leading-tight mb-6">Campaign creative,<br />made for each brand<span className="text-accent-blue">.</span></h2>
          <p className="text-text-secondary max-w-2xl leading-relaxed">A selection of social content, product stories and promotional visuals from the brands we work with. Explore each campaign collection and select any creative for a closer look.</p>
          <nav aria-label="Marketing collections" className="flex flex-wrap gap-3 mt-7 mb-12">
            {marketingProjects.map((item) => <a key={item.slug} href={`#${item.slug}`} className="rounded-full border border-white/20 px-5 py-3 text-sm hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-blue">{item.name} <span className="text-text-secondary">({item.images.length})</span></a>)}
          </nav>
        </ScrollReveal>

        <div className="space-y-16 lg:space-y-24">
          {marketingProjects.map((item, clientIndex) => (
            <article key={item.slug} id={item.slug} aria-labelledby={`${item.slug}-title`} className="scroll-mt-28">
              <ScrollReveal>
                <div className="grid lg:grid-cols-2 gap-6 pb-8 border-b border-white/10 mb-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-accent-beige mb-3">{item.industry} · Ongoing collaboration</p>
                    <h3 id={`${item.slug}-title`} className="text-3xl lg:text-4xl font-serif text-white">{item.name}</h3>
                    <p className="mt-3 text-sm text-text-secondary">{item.images.length} selected creatives</p>
                  </div>
                  <div>
                    <p className="text-text-secondary leading-relaxed">{item.description}</p>
                    <ul className="flex flex-wrap gap-2 mt-5" aria-label={`${item.name} creative focus`}>
                      {item.services.map((service) => <li key={service} className="text-xs text-accent-beige rounded-full border border-white/10 px-3 py-2">{service}</li>)}
                    </ul>
                    {item.slug === "jonex-gym" && <p className="text-xs text-text-secondary mt-4 leading-relaxed">Concept explorations show draft artwork with placeholder branding or contact details.</p>}
                  </div>
                </div>
              </ScrollReveal>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 items-start">
                {item.images.map((creative, imageIndex) => (
                  <ScrollReveal key={creative.src}>
                    <figure>
                      <button type="button" onClick={() => setSelected({ client: clientIndex, image: imageIndex })} aria-label={`View ${item.name}: ${creative.title}`} aria-haspopup="dialog" className="group relative block w-full aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-[#101010] hover:border-accent-beige/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-blue">
                        <Image src={creative.src} alt={creative.alt} fill sizes="(max-width: 639px) 50vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw" className="object-contain" />
                        <span className="absolute bottom-3 right-3 rounded-full bg-black/75 border border-white/20 p-2.5 text-white"><Maximize2 aria-hidden="true" className="w-4 h-4" /></span>
                      </button>
                      <figcaption className="pt-3">
                        <p className="text-sm text-white font-medium">{creative.title}</p>
                        <p className="text-xs text-text-secondary mt-1">{creative.type}</p>
                      </figcaption>
                    </figure>
                  </ScrollReveal>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-5 sm:items-center sm:justify-between">
          <p className="font-serif text-2xl">Ready to give your brand a consistent voice?</p>
          <a href="#contact" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm hover:bg-white/5">Talk about your marketing <ArrowRight aria-hidden="true" className="w-4 h-4" /></a>
        </div>
      </div>

      <dialog ref={dialogRef} aria-labelledby="creative-title" aria-describedby="creative-caption" onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }} onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); changeImage(event.key === "ArrowRight" ? 1 : -1); } }} className="fixed inset-0 m-auto w-[calc(100%-1rem)] max-w-5xl max-h-[95dvh] overflow-y-auto rounded-2xl border border-white/20 bg-[#0d0d0d] p-0 text-white backdrop:bg-black/90">
        {selected && client && image && <div className="p-3 sm:p-5">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div><p className="text-xs text-accent-beige mb-1">{client.name} · {selected.image + 1} of {client.images.length}</p><h3 id="creative-title" className="text-lg font-serif">{image.title}</h3><p id="creative-caption" className="text-xs text-text-secondary mt-1">{image.type}</p></div>
            <button type="button" onClick={() => setSelected(null)} aria-label="Close creative viewer" className="shrink-0 p-3 rounded-full border border-white/20 hover:bg-white/10"><X aria-hidden="true" className="w-5 h-5" /></button>
          </div>
          <Image key={image.src} src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 639px) 95vw, 800px" className="mx-auto w-auto max-w-full max-h-[68dvh] object-contain" />
          <div className="flex justify-between items-center mt-4 gap-3">
            <button type="button" onClick={() => changeImage(-1)} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-3 text-sm hover:bg-white/10"><ArrowLeft aria-hidden="true" className="w-4 h-4" />Previous</button>
            <span aria-live="polite" className="sr-only">{client.name}, {image.title}, {selected.image + 1} of {client.images.length}</span>
            <button type="button" onClick={() => changeImage(1)} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-3 text-sm hover:bg-white/10">Next<ArrowRight aria-hidden="true" className="w-4 h-4" /></button>
          </div>
        </div>}
      </dialog>
    </section>
  );
}
