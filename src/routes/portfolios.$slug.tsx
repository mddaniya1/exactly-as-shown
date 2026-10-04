import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects } from "@/lib/site-data";
import { BtnInner, Reveal } from "@/components/site/ui";
import { ProjectCard } from "@/components/site/sections";

export const Route = createFileRoute("/portfolios/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Project not found — Designer Elite" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.project;
    return {
      meta: [
        { title: `${p.title} — Designer Elite` },
        { name: "description", content: p.body },
        { property: "og:title", content: `${p.title} — Designer Elite` },
        { property: "og:description", content: p.body },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const more = projects.filter((x) => x.slug !== p.slug).slice(0, 2);
  return (
    <>
      <section className="container-site pt-40 md:pt-48">
        <Reveal>
          <p className="eyebrow">{p.category}</p>
          <h1 className="h-display mt-6 max-w-4xl">{p.title}</h1>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-3 gap-4 border-y py-6 text-sm">
          <div><p className="text-muted-foreground">Category</p><p className="mt-1">{p.category}</p></div>
          <div><p className="text-muted-foreground">Year</p><p className="mt-1">{p.year}</p></div>
          <div><p className="text-muted-foreground">Area</p><p className="mt-1">{p.area}</p></div>
        </Reveal>
        <Reveal className="mt-12 overflow-hidden rounded-[2rem]">
          <img src={p.image} alt={p.title} width={1200} height={1408} className="max-h-[80vh] w-full object-cover" />
        </Reveal>
        <Reveal className="mx-auto max-w-3xl py-20 text-xl leading-relaxed">
          <p>{p.body} Working closely with the client, our team handled planning, material selection, bespoke furniture and lighting from start to finish.</p>
          <Link to="/contact" className="btn btn-dark group mt-10"><BtnInner label="Start a Similar Project" /></Link>
        </Reveal>
      </section>
      <section className="container-site pb-24">
        <h2 className="h-section mb-10">More projects</h2>
        <div className="grid gap-10 md:grid-cols-2">{more.map((x) => <ProjectCard key={x.slug} p={x} />)}</div>
      </section>
    </>
  );
}
