import { Link } from "@tanstack/react-router";
import { useRef, useState, type TouchEvent } from "react";
import { awards, images, process, testimonials, type projects, type posts } from "@/lib/site-data";
import { BtnInner, Reveal } from "./ui";

type Project = (typeof projects)[number];
type Post = (typeof posts)[number];

export function ProjectCard({ p, tall = false }: { p: Project; tall?: boolean }) {
  return (
    <Link to="/portfolios/$slug" params={{ slug: p.slug }} className="group block">
      <div className={`img-zoom relative rounded-3xl ${tall ? "aspect-[4/5]" : "aspect-[5/6]"}`}>
        <img src={p.image} alt={p.title} loading="lazy" width={1200} height={1408} className="h-full w-full object-cover" />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs backdrop-blur">{p.category}</span>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <h3 className="text-xl">{p.title}</h3>
        <span className="text-sm text-muted-foreground">{p.year}</span>
      </div>
    </Link>
  );
}

export function PostCard({ p }: { p: Post }) {
  return (
    <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block lift">
      <div className="img-zoom aspect-[4/3] rounded-3xl">
        <img src={p.image} alt={p.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
      </div>
      <p className="mt-5 text-sm text-muted-foreground">{p.date}</p>
      <h3 className="mt-2 text-xl leading-snug">{p.title}</h3>
    </Link>
  );
}

export function Process() {
  const [active, setActive] = useState(0);
  return (
    <section className="section-pad container-site">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-3xl lg:order-1 lg:sticky lg:top-28 lg:self-start">
          {process.map((s, i) => (
            <img
              key={s.title}
              src={s.image}
              alt={s.title}
              loading="lazy"
              width={1200}
              height={1400}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${i === active ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
            />
          ))}
        </div>
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">Our working process</p>
            <h2 className="h-section mt-5">From first conversation to finished space.</h2>
          </Reveal>
          <ol className="mt-12 border-t">
            {process.map((s, i) => (
              <li key={s.title}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="flex w-full gap-6 border-b py-7 text-left"
                  aria-pressed={i === active}
                >
                  <span className={`text-sm transition-colors ${i === active ? "text-accent" : "text-muted-foreground"}`}>0{i + 1}</span>
                  <span>
                    <span className={`block text-2xl transition-colors duration-500 md:text-3xl ${i === active ? "text-foreground" : "text-muted-foreground"}`}>{s.title}</span>
                    <span className={`grid transition-all duration-700 ${i === active ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <span className="overflow-hidden text-muted-foreground">{s.text}</span>
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
          <Link to="/contact" className="btn btn-dark group mt-10"><BtnInner label="Contact Us" /></Link>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [i, setI] = useState(0);
  const x = useRef(0);
  const n = testimonials.length;
  const go = (d: number) => setI((v) => (v + d + n) % n);
  const ts = (e: TouchEvent) => (x.current = e.touches[0]?.clientX ?? 0);
  const te = (e: TouchEvent) => {
    const dx = (e.changedTouches[0]?.clientX ?? 0) - x.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
  };
  return (
    <section className="section-pad bg-secondary">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow">Testimonials</p>
            <h2 className="h-section mt-5 max-w-xl">What our clients say.</h2>
          </Reveal>
          <div className="flex gap-3">
            <button onClick={() => go(-1)} aria-label="Previous testimonial" className="btn btn-outline group h-12 w-12 justify-center p-0 rotate-180">→</button>
            <button onClick={() => go(1)} aria-label="Next testimonial" className="btn btn-dark group h-12 w-12 justify-center p-0">→</button>
          </div>
        </div>
        <div className="mt-14 overflow-hidden" onTouchStart={ts} onTouchEnd={te} aria-live="polite">
          <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${i * 100}%)`, transitionTimingFunction: "var(--ease-out-expo)" }}>
            {testimonials.map((t) => (
              <figure key={t.name} className="w-full shrink-0 pr-1">
                <blockquote className="max-w-4xl text-2xl leading-snug md:text-4xl">“{t.text}”</blockquote>
                <figcaption className="mt-10 flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground">{t.initials}</span>
                  <span>
                    <span className="block font-medium">{t.name}</span>
                    <span className="block text-sm text-muted-foreground">{t.date}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="mt-10 flex gap-2">
          {testimonials.map((t, k) => (
            <button key={t.name} onClick={() => setI(k)} aria-label={`Show testimonial ${k + 1}`} className={`h-1 rounded-full transition-all duration-500 ${k === i ? "w-10 bg-primary" : "w-4 bg-border"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Awards() {
  return (
    <section className="section-pad container-site">
      <Reveal>
        <p className="eyebrow">Awards & recognition</p>
        <h2 className="h-section mt-5 max-w-2xl">Recognised for quiet, lasting design.</h2>
      </Reveal>
      <ul className="mt-14 border-t">
        {awards.map((a, k) => (
          <Reveal as="li" key={a.title} delay={k * 80} className="group relative overflow-hidden border-b">
            <span className="absolute inset-0 origin-bottom scale-y-0 bg-primary transition-transform duration-700 group-hover:scale-y-100" style={{ transitionTimingFunction: "var(--ease-out-expo)" }} />
            <div className="relative grid grid-cols-[1fr_auto] gap-4 px-2 py-7 transition-colors duration-500 group-hover:text-primary-foreground md:grid-cols-[2fr_1fr_auto] md:px-6">
              <span className="text-xl md:text-2xl">{a.title}</span>
              <span className="hidden text-muted-foreground group-hover:text-primary-foreground/70 md:block">{a.city}</span>
              <span>{a.date}</span>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function Cta() {
  return (
    <section className="container-site pb-20">
      <div className="relative overflow-hidden rounded-[2rem] text-ink-foreground">
        <img src={images.hero} alt="" loading="lazy" width={1920} height={1088} className="kenburns absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-overlay" />
        <Reveal className="relative flex flex-col items-center px-6 py-28 text-center md:py-40">
          <h2 className="h-section max-w-3xl">Let's Design Your Dream Space.</h2>
          <p className="mt-5 max-w-md text-ink-foreground/80">Tell us about your project — we'll take it from there.</p>
          <Link to="/contact" className="btn btn-light group mt-10"><BtnInner label="Get Started Now" /></Link>
        </Reveal>
      </div>
    </section>
  );
}
