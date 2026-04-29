"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function MegaCta() {
  const [status,  setStatus]  = useState<Status>("idle");
  const [errMsg,  setErrMsg]  = useState("");
  const [formData, setForm]   = useState({
    name: "", company: "", email: "", phone: "", budget: "Not sure yet", message: "",
  });

  const update = (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrMsg("");

    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrMsg(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      setForm({ name: "", company: "", email: "", phone: "", budget: "Not sure yet", message: "" });
      setTimeout(() => setStatus("idle"), 6000);

    } catch {
      setErrMsg("Network error. Please email us directly.");
      setStatus("error");
    }
  };

  const inputBase =
    "w-full bg-transparent text-lg text-ink outline-none placeholder:text-stone-light py-2 focus:placeholder:opacity-0 transition-all";

  return (
    <section id="contact" className="relative py-32 md:py-48 fade-up">
      <div className="max-w-[1600px] mx-auto px-8">

        {/* ── Header ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-stone">
              <span className="w-8 h-px bg-electric" />
              04 — Contact
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-serif font-normal leading-[0.92] tracking-tightest text-ink"
              style={{ fontSize: "clamp(48px, 9vw, 180px)" }}
            >
              Tell us about
              <br />
              <span className="italic">your project.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-12">

          {/* ── Form ─────────────────────────────────────────────── */}
          <div className="col-span-12 md:col-span-7">

            {/* Success state */}
            {status === "sent" ? (
              <div className="py-16 border border-sage/30 bg-sage-subtle px-10">
                <div className="font-serif text-4xl md:text-5xl italic tracking-tightest text-ink mb-4">
                  Message received.
                </div>
                <p className="text-ink/70 text-lg leading-relaxed mb-2">
                  Thanks for reaching out. We&apos;ll be back with you within 24 hours.
                </p>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-stone">
                  Check your inbox — we&apos;ve sent a confirmation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10" noValidate>

                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-b border-stone-light pb-2 focus-within:border-slate transition-colors duration-300">
                    <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-slate block mb-2">
                      Your name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={update("name")}
                      className={inputBase}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="border-b border-stone-light pb-2 focus-within:border-stone transition-colors duration-300">
                    <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-stone block mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={update("company")}
                      className={inputBase}
                      placeholder="Optional"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-b border-stone-light pb-2 focus-within:border-slate transition-colors duration-300">
                    <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-slate block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={update("email")}
                      className={inputBase}
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div className="border-b border-stone-light pb-2 focus-within:border-stone transition-colors duration-300">
                    <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-stone block mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={update("phone")}
                      className={inputBase}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="border-b border-stone-light pb-2 focus-within:border-stone transition-colors duration-300">
                  <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-stone block mb-2">
                    Budget range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={update("budget")}
                    className={`${inputBase} cursor-pointer`}
                  >
                    <option>Not sure yet</option>
                    <option>Under ₹50,000</option>
                    <option>₹50,000 – ₹1,50,000</option>
                    <option>₹1,50,000 – ₹5,00,000</option>
                    <option>₹5,00,000+</option>
                    <option>Let&apos;s discuss</option>
                  </select>
                </div>

                {/* Message */}
                <div className="border-b border-stone-light pb-2 focus-within:border-sage transition-colors duration-300">
                  <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-sage block mb-2">
                    About the project *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={update("message")}
                    className={`${inputBase} resize-none`}
                    placeholder="Tell us what you're building, your timeline, and anything else we should know."
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <div className="px-4 py-3 bg-red-50 border border-red-200 text-red-700 text-sm">
                    {errMsg}
                  </div>
                )}

                {/* Submit */}
                <div className="flex items-center gap-6 flex-wrap">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-3 px-9 py-5 bg-ink text-beige text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-electric transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>
                      {status === "sending" ? "Sending…" : "Send message"}
                    </span>
                    {status !== "sending" && (
                      <span className="text-base leading-none">→</span>
                    )}
                    {status === "sending" && (
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                    )}
                  </button>

                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-stone">
                    Reply within 24 hours
                  </p>
                </div>

              </form>
            )}
          </div>

          {/* ── Right sidebar ──────────────────────────────────────── */}
          <div className="col-span-12 md:col-span-5 md:pl-12 md:border-l md:border-stone-light">
            <div className="space-y-10">

              {/* Contacts */}
              <div>
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-stone mb-2">
                  Nayan — design
                </div>
                <a
                  href="mailto:nayan@blueblackbeige.in"
                  className="link-line text-xl font-serif italic text-ink hover:text-electric transition-colors"
                >
                  nayan@blueblackbeige.in
                </a>
              </div>

              <div>
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-stone mb-2">
                  Alok — engineering
                </div>
                <a
                  href="mailto:alok@blueblackbeige.in"
                  className="link-line text-xl font-serif italic text-ink hover:text-electric transition-colors"
                >
                  alok@blueblackbeige.in
                </a>
              </div>

              {/* WhatsApp CTA */}
              <div className="p-6 bg-[#25D366]/8 border border-[#25D366]/20">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-stone mb-3">
                  Prefer to chat?
                </div>
                <a
                  href={`https://wa.me/917667649211?text=${encodeURIComponent("Hi Blue Black Beige! I'd like to discuss a project with you.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-ink hover:text-[#25D366] transition-colors font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#25D366]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Message us on WhatsApp
                </a>
              </div>

              {/* Location */}
              <div className="pt-8 border-t border-stone-light">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-stone mb-3">
                  Based in
                </div>
                <p className="text-base leading-relaxed text-ink">
                  Patna, India
                  <br />
                  <span className="text-stone">Remote-first, working globally</span>
                </p>
              </div>

              {/* Palette swatch */}
              <div className="pt-8 border-t border-stone-light">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-stone mb-4">
                  Brand palette
                </div>
                <div className="flex gap-2">
                  {[
                    { bg: "bg-electric",   label: "Blue"  },
                    { bg: "bg-ink",        label: "Black" },
                    { bg: "bg-beige-dark", label: "Beige" },
                    { bg: "bg-sage",       label: "Sage"  },
                    { bg: "bg-slate",      label: "Slate" },
                    { bg: "bg-stone",      label: "Stone" },
                  ].map((s) => (
                    <div key={s.label} className={`flex-1 h-12 ${s.bg} flex items-end p-1.5`}>
                      <span className="font-mono text-[8px] tracking-[0.1em] uppercase text-white/70">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
