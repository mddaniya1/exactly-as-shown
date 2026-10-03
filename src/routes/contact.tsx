import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { company, services } from "@/lib/site-data";
import { BtnInner, PageHero, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Designer Elite" },
      { name: "description", content: "Call, WhatsApp or email Designer Elite in Karachi to start your project." },
      { property: "og:title", content: "Contact — Designer Elite" },
      { property: "og:description", content: "Start your interior, architecture or furniture project today." },
    ],
  }),
  component: Contact,
});

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const errs: Errors = {};
    if (v("name").length < 2) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) errs.email = "Please enter a valid email.";
    if (v("phone") && !/^[+\d\s-]{7,}$/.test(v("phone"))) errs.phone = "Please enter a valid phone number.";
    if (v("message").length < 10) errs.message = "Tell us a little more (10+ characters).";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    const form = e.currentTarget;
    setTimeout(() => { setStatus("sent"); form.reset(); }, 800);
  };

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk about your space." />
      <section className="container-site grid gap-14 pb-24 lg:grid-cols-[1fr_1.4fr]">
        <Reveal className="space-y-8">
          <div><p className="text-sm text-muted-foreground">Phone / WhatsApp</p><a href={company.whatsapp} className="nav-link mt-1 inline-block text-2xl">{company.phone}</a></div>
          <div><p className="text-sm text-muted-foreground">Email</p><a href={`mailto:${company.email}`} className="nav-link mt-1 inline-block break-all text-xl">{company.email}</a></div>
          <div><p className="text-sm text-muted-foreground">Studio</p><p className="mt-1 text-xl">{company.city}, {company.country}</p></div>
          <a href={company.whatsapp} target="_blank" rel="noreferrer" className="btn btn-dark group"><BtnInner label="Chat on WhatsApp" /></a>
        </Reveal>
        <Reveal delay={100}>
          <form onSubmit={submit} noValidate className="grid gap-5 rounded-3xl bg-card p-6 md:grid-cols-2 md:p-10">
            <Field name="name" label="Name" error={errors.name} />
            <Field name="email" label="Email" type="email" error={errors.email} />
            <Field name="phone" label="Phone (optional)" error={errors.phone} />
            <label className="flex flex-col gap-2 text-sm">
              Service
              <select name="service" className="field">
                {services.map((s) => <option key={s.slug}>{s.title}</option>)}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm md:col-span-2">
              Message
              <textarea name="message" rows={5} className="field" aria-invalid={!!errors.message} />
              {errors.message && <span className="text-destructive">{errors.message}</span>}
            </label>
            <div className="flex flex-wrap items-center gap-4 md:col-span-2">
              <button type="submit" disabled={status === "sending"} className="btn btn-dark group">
                <BtnInner label={status === "sending" ? "Sending…" : "Send Message"} />
              </button>
              {status === "sent" && <p role="status" className="text-success">Thank you! We'll be in touch within 24 hours.</p>}
            </div>
          </form>
        </Reveal>
      </section>
    </>
  );
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string | undefined }) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      {label}
      <input name={name} type={type} className="field" aria-invalid={!!error} />
      {error && <span className="text-destructive">{error}</span>}
    </label>
  );
}
