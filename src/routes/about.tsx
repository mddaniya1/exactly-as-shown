import { createFileRoute } from "@tanstack/react-router";
import { company, images } from "@/lib/site-data";
import { CountUp, PageHero, Reveal } from "@/components/site/ui";
import { Awards, Cta, Process } from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Designer Elite" },
      { name: "description", content: "Meet Designer Elite and founder Syed Sheeraz Ali — 10+ years designing interiors in Karachi." },
      { property: "og:title", content: "About Us — Designer Elite" },
      { property: "og:description", content: "A Karachi studio for interiors, architecture, furniture and lighting." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="Designing calm, personal spaces since day one." text={`Led by ${company.founder}, Designer Elite brings ${company.experience} of experience to homes, offices and hospitality projects across Pakistan.`} />
      <section className="container-site">
        <Reveal className="img-zoom aspect-[16/8] overflow-hidden rounded-[2rem]">
          <img src={images.hero} alt="Designer Elite interior" width={1920} height={1088} className="h-full w-full object-cover" />
        </Reveal>
      </section>
      <section className="section-pad container-site grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Founder</p>
          <h2 className="h-section mt-5">{company.founder}</h2>
          <ul className="mt-8 space-y-2 text-muted-foreground">
            {company.education.map((e) => <li key={e}>— {e}</li>)}
            <li>— {company.experience} of professional experience</li>
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-xl leading-relaxed">
            Trained as an engineer and project manager, Sheeraz founded Designer Elite to bring structure and craft together. Our studio handles design, planning, furniture production and lighting in-house — so every project is delivered with one vision and one accountable team.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div><p className="text-4xl font-medium"><CountUp to={150} suffix="+" /></p><p className="text-sm text-muted-foreground">Projects completed</p></div>
            <div><p className="text-4xl font-medium"><CountUp to={30} suffix="+" /></p><p className="text-sm text-muted-foreground">Team members</p></div>
          </div>
        </Reveal>
      </section>
      <Process />
      <Awards />
      <Cta />
    </>
  );
}
