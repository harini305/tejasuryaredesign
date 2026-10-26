"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Restrained motion: one-time reveals for sections below the hero (the hero is static).
// Content is fully visible in the server HTML; GSAP only animates *from* hidden
// states after hydration, and nothing runs when reduced motion is requested.
export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      gsap.utils.toArray("[data-reveal-group]").forEach((group) => {
        gsap.from(group.children, {
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: { trigger: group, start: "top 85%", once: true },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return null;
}
