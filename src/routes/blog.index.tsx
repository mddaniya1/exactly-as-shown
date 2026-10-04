import { createFileRoute } from "@tanstack/react-router";
import { posts } from "@/lib/site-data";
import { PageHero, Reveal } from "@/components/site/ui";
import { PostCard } from "@/components/site/sections";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Journal — Designer Elite" },
      { name: "description", content: "Design ideas, material guides and lighting tips from Designer Elite." },
      { property: "og:title", content: "Journal — Designer Elite" },
      { property: "og:description", content: "Ideas and insights on interiors, furniture and light." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHero eyebrow="Journal" title="Ideas & insights." />
      <section className="container-site grid gap-10 pb-24 md:grid-cols-3">
        {posts.map((p, k) => <Reveal key={p.slug} delay={k * 120}><PostCard p={p} /></Reveal>)}
      </section>
    </>
  );
}
