import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Fingerprint } from "lucide-react";
import { company } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function Footer() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error">("idle");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setState("error");
    setState("idle");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("Join Designer Elite updates")}&body=${encodeURIComponent(`Please add ${email.trim()} to your updates list.`)}`;
  };

  return (
    <footer className="terion-footer text-ink-foreground">
      <div className="footer-invitation flex flex-col items-center justify-end text-center">
        <h2 className="footer-invitation-title">Let’s Design Your<br /><em>Dream Space.</em></h2>
        <Link to="/contact" className="footer-invitation-link group">
          Get Started Now <ArrowRight aria-hidden="true" size={18} strokeWidth={1.7} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="footer-main">
        <div className="footer-content">
          <div className="footer-contact">
            <Link to="/" className="footer-brand" aria-label="Designer Elite home">
              <Fingerprint aria-hidden="true" strokeWidth={1.8} />
              <span>Designer Elite<span className="footer-brand-period">.</span></span>
            </Link>

            <address className="not-italic">
              <div className="footer-info-block">
                <p className="footer-label">Address</p>
                <p className="footer-info-value">{company.city}, {company.country}</p>
              </div>
              <div className="footer-info-block">
                <p className="footer-label">Phone</p>
                <a className="footer-info-value footer-hover" href={company.whatsapp}>{company.phone}</a>
              </div>
            </address>

            <form onSubmit={submit} noValidate className="footer-newsletter">
              <label htmlFor="footer-email" className="footer-label">Enter Your Email</label>
              <div className="footer-email-wrap">
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setState("idle"); }}
                  placeholder="hello@gmail.com"
                  aria-invalid={state === "error"}
                />
                <Button type="submit" className="footer-submit">
                  Join Us
                  <ArrowRight aria-hidden="true" size={20} strokeWidth={1.7} />
                </Button>
              </div>
              <p className="footer-status" role="status">
                {state === "error" && "Please enter a valid email address."}
              </p>
            </form>
          </div>

          <nav className="footer-navigation" aria-label="Footer">
            <FooterCol title="Main Pages">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/" hash="service">Services</Link>
              <Link to="/portfolios">Portfolios</Link>
              <Link to="/contact">Contact Us</Link>
            </FooterCol>
            <FooterCol title="Others">
              <Link to="/services/$slug" params={{ slug: "interior-design" }}>Interior Design</Link>
              <Link to="/services/$slug" params={{ slug: "architecture" }}>Architecture</Link>
              <Link to="/blog">Blog</Link>
              <a href={`mailto:${company.email}`}>Email Us</a>
              <a href={company.whatsapp}>WhatsApp</a>
            </FooterCol>
            <FooterCol title="Socials">
              <a href={company.facebook} target="_blank" rel="noreferrer">Facebook</a>
              <a href={company.instagram} target="_blank" rel="noreferrer">Instagram</a>
              <a href={company.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </FooterCol>
          </nav>

          <div className="footer-legal">
            <p>© 2026 Copyright - Designer Elite</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="footer-column">
      <h3 className="footer-label">{title}</h3>
      <div className="footer-column-links">{children}</div>
    </div>
  );
}