"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Maximize2,
  Play,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { featuredProjects } from "@/data/projects";
import { marketingProjects } from "@/data/marketing-projects";
import { marketingVideos } from "@/data/marketing-videos";

type SelectedCreative = { client: number; image: number };

function VideoCreativeCard({ video }: { video: (typeof marketingVideos)[number] }) {
  const [playing, setPlaying] = useState(false);
  const [poster, setPoster] = useState(`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`);

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-white/25">
      <div className="relative aspect-video overflow-hidden bg-[#111]">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${video.title}`}
            className="absolute inset-0 block h-full w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-accent-blue"
          >
            <Image
              src={poster}
              alt={`${video.title} video preview`}
              fill
              unoptimized
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
              className="object-cover transition duration-700 group-hover:scale-105"
              onError={() => setPoster("/images/hero-poster.jpg")}
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/15" />
            <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-black/45 text-white backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-accent-blue">
              <Play aria-hidden="true" className="ml-1 h-5 w-5 fill-current" />
            </span>
            <span className="absolute bottom-3 left-4 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
              Watch film
            </span>
          </button>
        )}
      </div>
      <div className="p-5">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-accent-blue">Motion study</p>
        <h3 className="font-serif text-xl text-white">{video.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">{video.description}</p>
        <a href={`https://youtu.be/${video.id}`} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-beige transition-colors hover:text-white">
          Open on YouTube <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

export default function EditorialWorkPage() {
  const [muted, setMuted] = useState(true);
  const [expandedClients, setExpandedClients] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState<SelectedCreative | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
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

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const changeImage = (direction: number) => {
    setSelected((current) => current && ({
      client: current.client,
      image: (current.image + direction + marketingProjects[current.client].images.length) % marketingProjects[current.client].images.length,
    }));
  };

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-blue/30">
      <Navbar />

      <section className="relative overflow-hidden pb-20 pt-36 sm:pt-40 lg:pb-28 lg:pt-48">
        <div className="pointer-events-none absolute -right-20 top-24 h-[520px] w-[520px] rounded-full bg-accent-blue/[0.08] blur-[140px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[520px] rounded-full bg-accent-beige/[0.05] blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-[1440px] section-padding">
          <div className="mb-10 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-blue sm:mb-14">
            <span className="h-px w-12 bg-accent-blue" />
            Selected work · 2023—2026
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(260px,0.75fr)] lg:items-end lg:gap-20">
            <ScrollReveal>
              <h1 className="max-w-5xl font-serif text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-white sm:text-7xl lg:text-[7.2rem]">
                Work that gives brands a reason to be <span className="text-accent-beige">remembered.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <div className="max-w-sm border-l border-white/15 pl-5 lg:mb-2 lg:pl-7">
                <p className="text-base leading-relaxed text-text-secondary sm:text-lg">Strategy, identity, digital experiences and campaign systems built to make the right people stop, feel and act.</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="#casebook" className="inline-flex items-center gap-2 rounded-full bg-accent-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-blue/85">Explore the work <ArrowRight aria-hidden="true" className="h-4 w-4" /></a>
                  <a href="#marketing-work" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm text-white transition-colors hover:border-white/40 hover:bg-white/5">Browse campaigns</a>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="mt-16 grid grid-cols-2 border-y border-white/10 sm:grid-cols-4">
            {["04", "06", "04", "04"].map((value, index) => (
              <div key={value + index} className="border-white/10 py-5 first:border-l-0 sm:border-l sm:px-6 lg:px-8">
                <p className="font-serif text-3xl text-white sm:text-4xl">{value}</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-text-secondary">{["Website builds", "Campaign worlds", "Brands in motion", "Creative disciplines"][index]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="casebook" className="relative scroll-mt-24 overflow-hidden border-t border-white/10 py-16 lg:py-28">
        <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-blue/[0.04] blur-[120px]" />
        <div className="relative mx-auto max-w-[1440px] section-padding">
          <div className="grid gap-12 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
            <ScrollReveal direction="left" className="lg:sticky lg:top-28 lg:self-start">
              <div className="border-l border-accent-blue/60 pl-5 lg:pl-7">
                <div className="mb-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-blue"><span>01</span><span className="h-px w-8 bg-accent-blue/70" /><span>Casebook</span></div>
                <h2 className="max-w-sm font-serif text-4xl leading-[1.02] text-white sm:text-5xl">A few of the stories behind the screens<span className="text-accent-blue">.</span></h2>
                <p className="mt-6 max-w-xs text-sm leading-relaxed text-text-secondary">Every project starts with a sharp question and ends with a clearer reason to choose the brand.</p>
                <a href="#marketing-work" className="group mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-beige transition-colors hover:text-white">Continue to campaign worlds <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
              </div>
            </ScrollReveal>

            <div className="space-y-5">
              {[featuredProjects[0], featuredProjects[2]].map((project, index) => (
                <ScrollReveal key={project.image} direction={index === 0 ? "right" : "up"} delay={index * 0.1}>
                  <article className="group overflow-hidden rounded-2xl border border-white/10 bg-bg-secondary/40 transition-colors duration-500 hover:border-white/25">
                    <div className={`grid lg:grid-cols-[1.12fr_0.88fr] ${index === 1 ? "lg:grid-cols-[0.88fr_1.12fr]" : ""}`}>
                      <div className={`relative aspect-[1.12] overflow-hidden bg-[#111] lg:aspect-auto lg:min-h-[390px] ${index === 1 ? "lg:order-2" : ""}`}>
                        <Image src={project.image} alt={`${project.title} website project`} fill sizes="(max-width: 1023px) 100vw, 55vw" className="object-contain p-3 transition duration-700 group-hover:scale-[1.02] sm:p-5" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
                        <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">Featured website · 0{index + 1}</span>
                      </div>
                      <div className={`flex flex-col justify-between p-6 sm:p-8 lg:p-10 ${index === 1 ? "lg:order-1" : ""}`}>
                        <div><p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-accent-beige">{project.category} · Digital experience</p><h3 className="mt-4 font-serif text-4xl leading-none text-white sm:text-5xl">{project.title}</h3><p className="mt-5 max-w-md text-sm leading-relaxed text-text-secondary">{project.description}</p></div>
                        <div className="mt-10 flex items-center justify-between gap-4 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.18em] text-white/50"><span>Strategy · Design · Build</span><span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition duration-300 group-hover:border-accent-blue group-hover:bg-accent-blue"><ArrowUpRight aria-hidden="true" className="h-4 w-4" /></span></div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}

              <div className="grid gap-5 pt-1 sm:grid-cols-2">
                {featuredProjects.filter((_, index) => index === 1 || index === 3).map((project, index) => (
                  <ScrollReveal key={project.image} direction="up" delay={0.08 + index * 0.08}>
                    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-bg-secondary/30 transition-colors duration-500 hover:border-white/25">
                      <div className="relative aspect-[1.55] overflow-hidden bg-[#111]">
                        <Image src={project.image} alt={`${project.title} website project`} fill sizes="(max-width: 639px) 100vw, 50vw" className="object-contain p-3 transition duration-700 group-hover:scale-[1.02] sm:p-4" />
                      </div>
                      <div className="p-5 sm:p-6"><p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-blue">{project.category}</p><div className="flex items-start justify-between gap-4"><h3 className="font-serif text-2xl text-white">{project.title}</h3><ArrowUpRight aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-text-secondary transition-colors group-hover:text-accent-blue" /></div><p className="mt-3 line-clamp-2 text-sm leading-relaxed text-text-secondary">{project.description}</p></div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="marketing-work" className="scroll-mt-24 border-t border-white/10 py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] section-padding">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.65fr)] lg:items-end">
              <div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent-blue">Campaign worlds</p><h2 className="max-w-3xl font-serif text-4xl leading-[1.05] text-white sm:text-6xl">Creative systems made to live in the real world<span className="text-accent-blue">.</span></h2></div>
              <p className="max-w-sm text-sm leading-relaxed text-text-secondary">From a first scroll-stopping frame to a repeatable visual language, these campaigns were designed to keep showing up with a point of view.</p>
            </div>
            <nav aria-label="Campaign collections" className="mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {marketingProjects.map((item) => <a key={item.slug} href={`#${item.slug}`} className="shrink-0 rounded-full border border-white/15 px-4 py-2.5 text-xs text-text-secondary transition hover:border-white/40 hover:text-white">{item.name}</a>)}
            </nav>
          </ScrollReveal>

          <div className="mt-14 space-y-20 lg:mt-20 lg:space-y-28">
            {marketingProjects.map((item, clientIndex) => (
              <article key={item.slug} id={item.slug} className="scroll-mt-28">
                <ScrollReveal>
                  <div className="mb-8 grid gap-5 border-b border-white/10 pb-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
                    <div><p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-beige">{item.industry} · Collection 0{clientIndex + 1}</p><h3 className="font-serif text-3xl text-white sm:text-4xl">{item.name}</h3><p className="mt-3 text-xs uppercase tracking-[0.18em] text-text-secondary">{item.images.length} selected creatives</p></div>
                    <div><p className="max-w-xl text-sm leading-relaxed text-text-secondary">{item.description}</p><ul className="mt-5 flex flex-wrap gap-2">{item.services.map((service) => <li key={service} className="rounded-full border border-white/10 px-3 py-2 text-xs text-accent-beige">{service}</li>)}</ul></div>
                  </div>
                </ScrollReveal>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                  {item.images.slice(0, expandedClients[item.slug] ? item.images.length : 4).map((creative, imageIndex) => (
                    <ScrollReveal key={creative.src} delay={imageIndex * 0.03}>
                      <figure>
                        <button type="button" onClick={() => setSelected({ client: clientIndex, image: imageIndex })} aria-label={`View ${item.name}: ${creative.title}`} aria-haspopup="dialog" className="group relative block aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10 bg-[#101010] transition hover:border-accent-beige/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-blue">
                          <Image src={creative.src} alt={creative.alt} fill sizes="(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 25vw" className="object-contain transition duration-500 group-hover:scale-[1.03]" />
                          <span className="absolute bottom-3 right-3 rounded-full border border-white/20 bg-black/70 p-2.5 text-white backdrop-blur-sm"><Maximize2 aria-hidden="true" className="h-4 w-4" /></span>
                        </button>
                        <figcaption className="pt-3"><p className="text-sm font-medium text-white">{creative.title}</p><p className="mt-1 text-xs text-text-secondary">{creative.type}</p></figcaption>
                      </figure>
                    </ScrollReveal>
                  ))}
                </div>
                {item.images.length > 4 && <div className="mt-7 flex flex-col items-center gap-2"><button type="button" aria-expanded={Boolean(expandedClients[item.slug])} onClick={() => setExpandedClients((current) => ({ ...current, [item.slug]: !current[item.slug] }))} className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-accent-beige px-6 py-3 text-sm font-semibold text-bg-primary transition hover:bg-accent-beige/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-blue">{expandedClients[item.slug] ? "Show fewer" : `View all creatives (${item.images.length - 4})`}<ArrowDown aria-hidden="true" className={`h-4 w-4 transition-transform ${expandedClients[item.slug] ? "rotate-180" : "group-hover:translate-y-0.5"}`} /></button><span className="text-xs text-text-secondary">Showing {expandedClients[item.slug] ? item.images.length : Math.min(4, item.images.length)} of {item.images.length} creatives</span></div>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 lg:py-24" aria-labelledby="showreel-title">
        <div className="mx-auto max-w-[1440px] section-padding">
          <ScrollReveal>
            <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent-blue">Studio motion</p><h2 id="showreel-title" className="font-serif text-4xl leading-[1.05] text-white sm:text-6xl">Ideas that move<span className="text-accent-blue">.</span></h2></div><p className="max-w-sm text-sm leading-relaxed text-text-secondary">Short-form campaign pieces for social feeds, launches and brand storytelling.</p></div>
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black sm:rounded-3xl">
              <video ref={videoRef} autoPlay loop muted playsInline preload="metadata" poster="/images/hero-poster.jpg" className="absolute inset-0 h-full w-full object-cover"><source src="/hero-video.mp4" type="video/mp4" /></video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8"><div><p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-accent-blue">Blue Black Beige · Showreel</p><h3 className="font-serif text-2xl text-white sm:text-3xl">A look at our motion &amp; brand craft</h3></div><button type="button" onClick={toggleSound} aria-label={muted ? "Unmute showreel" : "Mute showreel"} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20">{muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}</button></div>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {marketingVideos.map((video, index) => <ScrollReveal key={video.id} delay={index * 0.05}><VideoCreativeCard video={video} /></ScrollReveal>)}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />

      <dialog ref={dialogRef} aria-labelledby="creative-title" aria-describedby="creative-caption" onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }} onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); changeImage(event.key === "ArrowRight" ? 1 : -1); } }} className="fixed inset-0 m-auto max-h-[95dvh] w-[calc(100%-1rem)] max-w-5xl overflow-y-auto rounded-2xl border border-white/20 bg-[#0d0d0d] p-0 text-white backdrop:bg-black/90">
        {selected && client && image && <div className="p-3 sm:p-5"><div className="mb-4 flex items-start justify-between gap-4"><div><p className="mb-1 text-xs text-accent-beige">{client.name} · {selected.image + 1} of {client.images.length}</p><h3 id="creative-title" className="font-serif text-lg">{image.title}</h3><p id="creative-caption" className="mt-1 text-xs text-text-secondary">{image.type}</p></div><button type="button" onClick={() => setSelected(null)} aria-label="Close creative viewer" className="shrink-0 rounded-full border border-white/20 p-3 transition hover:bg-white/10"><X aria-hidden="true" className="h-5 w-5" /></button></div><Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 639px) 95vw, 800px" className="mx-auto max-h-[68dvh] w-auto max-w-full object-contain" /><div className="mt-4 flex items-center justify-between gap-3"><button type="button" onClick={() => changeImage(-1)} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-3 text-sm hover:bg-white/10"><ArrowLeft aria-hidden="true" className="h-4 w-4" />Previous</button><button type="button" onClick={() => changeImage(1)} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-3 text-sm hover:bg-white/10">Next<ArrowRight aria-hidden="true" className="h-4 w-4" /></button></div></div>}
      </dialog>
    </main>
  );
}
