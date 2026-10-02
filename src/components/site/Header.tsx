import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BtnInner } from "./ui";

const links = [
  { label: "Portfolio", to: "/portfolios" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Blog", to: "/blog" as const },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const onDarkHero = path === "/" && !scrolled && !open;

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [path]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-background/90 py-3 shadow-sm backdrop-blur-md" : "py-6"
      } ${onDarkHero ? "text-ink-foreground" : "text-foreground"}`}
    >
      <div className="container-site flex items-center justify-between gap-4">
        <Link to="/" className="text-xl font-semibold tracking-tight" aria-label="Designer Elite home">
          Designer Elite<span className="text-accent">.</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          <Link to="/portfolios" className="nav-link">Portfolio</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/" hash="service" className="nav-link">Services</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className={`btn group hidden sm:inline-flex ${onDarkHero ? "btn-light" : "btn-dark"}`}>
            <BtnInner label="Contact Us" />
          </Link>
          <button
            className="relative grid h-11 w-11 place-items-center rounded-full border border-current/20 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`absolute h-px w-5 bg-current transition-transform duration-500 ${open ? "rotate-45" : "-translate-y-1"}`} />
            <span className={`absolute h-px w-5 bg-current transition-transform duration-500 ${open ? "-rotate-45" : "translate-y-1"}`} />
          </button>
        </div>
      </div>
      <div className={`grid transition-all duration-500 lg:hidden ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <nav className="container-site overflow-hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1 py-6 text-3xl">
            {links.map((l) => (
              <li key={l.to}><Link to={l.to} className="block py-2">{l.label}</Link></li>
            ))}
            <li><Link to="/" hash="service" className="block py-2" onClick={() => setOpen(false)}>Services</Link></li>
            <li className="pt-4"><Link to="/contact" className="btn btn-dark group"><BtnInner label="Contact Us" /></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
