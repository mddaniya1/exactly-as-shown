import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { projects } from "@/lib/site-data";
import { PageHero, Reveal } from "@/components/site/ui";
import { Cta, ProjectCard } from "@/components/site/sections";

export const Route = createFileRoute("/portfolios/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Designer Elite" },
      { name: "description", content: "Residential, commercial and corporate projects by Designer Elite, Karachi." },
      { property: "og:title", content: "Portfolio — Designer Elite" },
      { property: "og:description", content: "Browse interiors, architecture and lighting projects." },
    ],
  }),
  component: Portfolios,
});

function Portfolios() {
  const cats = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? projects : projects.filter((p) => p.category === cat);
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Our projects." />
      <section className="container-site pb-24">
        <div className="mb-12 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`btn px-5 py-2 ${c === cat ? "btn-dark" : "btn-outline"}`}>{c}</button>
          ))}
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          {list.map((p, k) => (
            <Reveal key={p.slug} delay={(k % 2) * 120}><ProjectCard p={p} tall /></Reveal>
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}
