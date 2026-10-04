import { createFileRoute, Link } from "@tanstack/react-router";
import { company, images, posts, projects, services } from "@/lib/site-data";
import { BtnInner, CountUp, Reveal } from "@/components/site/ui";
import { Awards, PostCard, Process, ProjectCard, Testimonials } from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Designer Elite — Luxury Interior Design in Karachi" },
      { name: "description", content: "Interior design, architecture, bespoke furniture and lighting design by Designer Elite, Karachi." },
      { property: "og:title", content: "Designer Elite — Luxury Interior Design in Karachi" },
      { property: "og:description", content: "Interiors crafted for comfort and style. Residential, commercial and corporate." },
    ],
  }),
  component: Home,
});

const clients = ["Aurum Homes", "Clifton Towers", "Meridian Group", "Saffron Hotels", "Indus Capital", "Noor Estates", "Habib & Co.", "Crescent Retail"];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden text-ink-foreground">
        <img src={images.hero} alt="Warm modern living room designed by Designer Elite" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-overlay via-overlay/40 to-overlay/30" />
        <div className="container-site relative pb-10 pt-40">
          <Reveal>
            <h1 className="h-display max-w-5xl">Luxury Interiors Crafted for Comfort &amp; Style.</h1>
          </Reveal>
          <Reveal delay={150} className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-ink-foreground/80">Interior design, architecture, bespoke furniture and lighting — from our studio in Karachi.</p>
            <Link to="/portfolios" className="btn btn-light group self-start"><BtnInner label="View Projects" /></Link>
          </Reveal>
          <div className="mt-16 overflow-hidden border-t border-ink-foreground/20 pt-8">
            <div className="marquee gap-16">
              {[...clients, ...clients].map((c, i) => (
                <span key={i} className="text-xl font-semibold tracking-tight text-ink-foreground/70">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-pad container-site">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <p className="eyebrow">About us</p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-4">
                <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-background bg-primary text-primary-foreground">SA</span>
                <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-background bg-accent text-accent-foreground">DE</span>
              </div>
              <span className="text-sm text-muted-foreground">Lead Designers</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-2xl leading-snug md:text-4xl">
              Designer Elite is a Karachi studio led by {company.founder}, bringing {company.experience} of experience in interiors, architecture and custom furniture. We design spaces that feel calm, personal and built to last.
            </p>
            <Link to="/about" className="btn btn-dark group mt-10"><BtnInner label="More About Us" /></Link>
          </Reveal>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border bg-border lg:grid-cols-4">
          {[
            { to: 25, prefix: "PKR ", suffix: "M", label: "Average Project Value" },
            { to: 150, suffix: "+", label: "Projects Completed" },
            { to: 120, prefix: "PKR ", suffix: "M", label: "Highest Project Value" },
            { to: 30, suffix: "+", label: "Expert Team Members" },
          ].map((s) => (
            <div key={s.label} className="bg-background p-6 md:p-10">
              <p className="text-3xl font-medium tracking-tight md:text-5xl"><CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} /></p>
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="service" className="section-pad scroll-mt-20 bg-secondary">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Services</p>
            <h2 className="h-section mt-5 max-w-2xl">Everything your space needs, under one roof.</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((s, k) => (
              <Reveal key={s.slug} delay={k * 100}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="group lift flex h-full flex-col overflow-hidden rounded-3xl bg-card">
                  <div className="img-zoom aspect-[16/10]">
                    <img src={s.image} alt={s.title} loading="lazy" width={1200} height={912} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-2xl">{s.title}</h3>
                    <p className="mt-3 flex-1 text-muted-foreground">{s.short}</p>
                    <span className="btn btn-plain mt-6 self-start"><BtnInner label="See More" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Works */}
      <section className="section-pad container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow">Selected works</p>
            <h2 className="h-section mt-5 max-w-xl">Spaces we're proud of.</h2>
          </Reveal>
          <Link to="/portfolios" className="btn btn-outline group"><BtnInner label="View All Projects" /></Link>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {projects.slice(0, 3).map((p, k) => (
            <Reveal key={p.slug} delay={k * 120} className={k === 1 ? "md:mt-16" : ""}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <Process />
      <Testimonials />
      <Awards />

      {/* Blog */}
      <section className="section-pad container-site pt-0">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow">Journal</p>
            <h2 className="h-section mt-5">Ideas & insights.</h2>
          </Reveal>
          <Link to="/blog" className="btn btn-outline group"><BtnInner label="See All Blogs" /></Link>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((p, k) => (
            <Reveal key={p.slug} delay={k * 120}><PostCard p={p} /></Reveal>
          ))}
        </div>
      </section>

    </>
  );
}
