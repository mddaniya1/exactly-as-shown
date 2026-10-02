import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { services } from "@/lib/site-data";
import { BtnInner, Reveal } from "@/components/site/ui";
import { Cta, Process } from "@/components/site/sections";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Service not found — Designer Elite" }, { name: "robots", content: "noindex" }] };
    const s = loaderData.service;
    return {
      meta: [
        { title: `${s.title} — Designer Elite` },
        { name: "description", content: s.short },
        { property: "og:title", content: `${s.title} — Designer Elite` },
        { property: "og:description", content: s.short },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service: s } = Route.useLoaderData();
  return (
    <>
      <section className="container-site pt-40 md:pt-48">
        <Reveal>
          <p className="eyebrow">Service</p>
          <h1 className="h-display mt-6 max-w-4xl">{s.title}</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{s.short}</p>
        </Reveal>
        <Reveal className="mt-12 overflow-hidden rounded-[2rem]">
          <img src={s.image} alt={s.title} width={1200} height={912} className="aspect-[16/8] w-full object-cover" />
        </Reveal>
      </section>
      <section className="section-pad container-site grid gap-12 lg:grid-cols-2">
        <Reveal><p className="text-2xl leading-snug">{s.body}</p></Reveal>
        <Reveal delay={100}>
          <ul className="border-t">
            {s.points.map((pt) => <li key={pt} className="border-b py-5 text-lg">{pt}</li>)}
          </ul>
          <Link to="/contact" className="btn btn-dark group mt-10"><BtnInner label="Book a Consultation" /></Link>
        </Reveal>
      </section>
      <section className="container-site pb-10">
        <p className="eyebrow mb-6">Other services</p>
        <div className="flex flex-wrap gap-3">
          {services.filter((x) => x.slug !== s.slug).map((x) => (
            <Link key={x.slug} to="/services/$slug" params={{ slug: x.slug }} className="btn btn-outline group"><BtnInner label={x.title} /></Link>
          ))}
        </div>
      </section>
      <Process />
      <Cta />
    </>
  );
}
