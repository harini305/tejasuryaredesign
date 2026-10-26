"use client";

import { useEffect, useState } from "react";
import { navItems, waLink } from "@/lib/content";
import { WhatsAppIcon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [hidden, setHidden] = useState(false);

  // Expose the footer height so the last section plus the footer fill exactly one screen.
  useEffect(() => {
    const footer = document.querySelector(".site-footer");
    if (!footer) return;
    const root = document.documentElement;
    const observer = new ResizeObserver(() => root.style.setProperty("--footer-h", `${footer.offsetHeight}px`));
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  // Slide the header away once the last section (above the footer) reaches the top.
  useEffect(() => {
    const last = document.getElementById(navItems[navItems.length - 1].id);
    if (!last) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const reached = last.getBoundingClientRect().top <= 1;
      setHidden(reached);
      if (reached) setOpen(false);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = navItems.map((n) => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 960 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={`site-header${hidden ? " is-hidden" : ""}`}>
      <div className="container header-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <img src="/images/logo.webp" alt="TejaSurya — Orbit Spiritual" width="253" height="73" />
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-toggle-bars" aria-hidden="true" />
          <span>{open ? "Close" : "Menu"}</span>
        </button>

        <nav id="site-nav" className={`site-nav${open ? " is-open" : ""}`} aria-label="Main navigation">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-gold btn-sm nav-cta" href={waLink()} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon width="18" height="18" />
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
