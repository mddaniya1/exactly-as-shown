import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { company } from "@/lib/site-data";
import { BtnInner } from "./ui";

export function Footer() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error" | "loading" | "done">("idle");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setState("error");
    setState("loading");
    setTimeout(() => {
      setState("done");
      setEmail("");
    }, 700);
  };

  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-site grid gap-14 py-20 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="h-section max-w-md">Stay inspired with Designer Elite.</h2>
          <form onSubmit={submit} noValidate className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="nl" className="sr-only">Email address</label>
            <input
              id="nl"
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (state !== "loading") setState("idle"); }}
              placeholder="Your email"
              aria-invalid={state === "error"}
              className="field min-w-0 flex-1 border-ink-foreground/20 bg-transparent text-ink-foreground placeholder:text-ink-foreground/50"
            />
            <button type="submit" disabled={state === "loading"} className="btn btn-light group justify-between">
              <BtnInner label={state === "loading" ? "Joining…" : state === "done" ? "Joined" : "Join Us"} />
            </button>
          </form>
          <p className="mt-3 h-5 text-sm" role="status">
            {state === "error" && <span className="text-destructive">Please enter a valid email address.</span>}
            {state === "done" && <span className="text-ink-foreground/80">Thank you — you're on the list.</span>}
          </p>
          <address className="mt-8 space-y-1 not-italic text-ink-foreground/70">
            <p>{company.city}, {company.country}</p>
            <p><a className="nav-link" href={company.whatsapp}>{company.phone}</a></p>
            <p><a className="nav-link break-all" href={`mailto:${company.email}`}>{company.email}</a></p>
          </address>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <FooterCol title="Main Pages">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/portfolios" className="nav-link">Portfolio</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
          </FooterCol>
          <FooterCol title="Others">
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/services/$slug" params={{ slug: "interior-design" }} className="nav-link">Services</Link>
            <a href={company.whatsapp} className="nav-link">WhatsApp</a>
          </FooterCol>
          <FooterCol title="Socials">
            <a href={company.facebook} target="_blank" rel="noreferrer" className="nav-link">Facebook</a>
            <a href={company.instagram} target="_blank" rel="noreferrer" className="nav-link">Instagram</a>
            <a href={company.linkedin} target="_blank" rel="noreferrer" className="nav-link">LinkedIn</a>
          </FooterCol>
        </div>
      </div>
      <div className="container-site flex flex-col justify-between gap-2 border-t border-ink-foreground/10 py-6 text-sm text-ink-foreground/60 sm:flex-row">
        <p>© 2026 Designer Elite. All rights reserved.</p>
        <p>Interior · Architecture · Furniture · Lighting</p>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-5 text-sm uppercase tracking-[0.14em] text-ink-foreground/50">{title}</h3>
      <div className="flex flex-col items-start gap-3">{children}</div>
    </div>
  );
}
