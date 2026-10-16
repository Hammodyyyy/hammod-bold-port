"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Page-level behaviour: smooth scroll on desktop, anchor links, the mobile
// menu, the nav's scrolled state, and the entrance and scroll reveals.
// Everything degrades to instant and static under reduced motion.
export default function SiteEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.registerPlugin(ScrollTrigger);
    const cleanups = [];

    // Lenis smooth-scroll is desktop-only; native scroll on touch avoids jank/lock issues
    const touch = window.matchMedia("(hover: none)").matches;
    let lenis = null;
    if (!reduce && !touch) {
      try {
        lenis = new Lenis({ lerp: 0.075, smoothWheel: true, wheelMultiplier: 0.9 });
        lenis.on("scroll", ScrollTrigger.update);
        const tick = (t) => lenis.raf(t * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);
        cleanups.push(() => gsap.ticker.remove(tick));
      } catch (e) { lenis = null; }
    }
    const lockScroll = () => { if (lenis) lenis.stop(); else document.documentElement.style.overflow = "hidden"; };
    const unlockScroll = () => { if (lenis) lenis.start(); else document.documentElement.style.overflow = ""; };

    // CaseMedia's lightbox cannot reach the Lenis instance itself, so it asks
    // for the freeze by event. Without this the page keeps scrolling behind
    // the overlay, since Lenis ignores overflow:hidden.
    window.addEventListener("lightbox:open", lockScroll);
    window.addEventListener("lightbox:close", unlockScroll);
    cleanups.push(() => {
      window.removeEventListener("lightbox:open", lockScroll);
      window.removeEventListener("lightbox:close", unlockScroll);
    });

    // mobile menu
    const navLinks = document.getElementById("navLinks");
    const burger = document.getElementById("burger");
    const closeMenu = () => {
      if (!navLinks || !navLinks.classList.contains("open")) return;
      navLinks.classList.remove("open"); burger.classList.remove("open");
      burger.setAttribute("aria-expanded", "false"); unlockScroll();
    };
    const onBurger = () => {
      if (navLinks.classList.contains("open")) return closeMenu();
      navLinks.classList.add("open"); burger.classList.add("open");
      burger.setAttribute("aria-expanded", "true"); lockScroll();
    };
    if (burger && navLinks) { burger.addEventListener("click", onBurger); cleanups.push(() => burger.removeEventListener("click", onBurger)); }

    // anchor links scroll through Lenis when it is running
    const anchorHandlers = [];
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      const h = (e) => {
        const id = a.getAttribute("href"); if (!id || id.length < 2) return;
        const el = document.querySelector(id); if (!el) return;
        e.preventDefault(); closeMenu();
        if (lenis) lenis.scrollTo(el, { offset: id === "#top" ? 0 : -60, duration: 1.1 });
        else el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      };
      a.addEventListener("click", h); anchorHandlers.push([a, h]);
    });
    cleanups.push(() => anchorHandlers.forEach(([a, h]) => a.removeEventListener("click", h)));

    // nav gets its backdrop once the top of the page has scrolled away
    const nav = document.getElementById("nav");
    if (nav && "IntersectionObserver" in window) {
      const sentinel = document.createElement("div");
      sentinel.style.cssText = "position:absolute;top:0;left:0;height:24px;width:1px;pointer-events:none";
      document.body.prepend(sentinel);
      const io = new IntersectionObserver(([e]) => nav.classList.toggle("small", !e.isIntersecting));
      io.observe(sentinel);
      cleanups.push(() => { io.disconnect(); sentinel.remove(); });
    }

    // reveals
    const reveals = gsap.utils.toArray(".reveal");
    if (reduce) {
      document.documentElement.classList.add("no-motion");
    } else {
      // headings outside the hero rise out of their masks as they scroll in
      // (the hero runs its own entrance)
      gsap.utils.toArray(".clip .ln").forEach((ln) => {
        if (ln.closest(".hero")) return;
        gsap.from(ln, { yPercent: 105, duration: 1.1, ease: "expo.out", scrollTrigger: { trigger: ln.parentElement, start: "top 88%" } });
      });

      gsap.set(reveals, { opacity: 0, y: 24 });
      ScrollTrigger.batch(reveals, {
        start: "top 90%",
        onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.08, overwrite: true }),
      });
      // anything already past the trigger line on load (e.g. reload mid-page)
      requestAnimationFrame(() => {
        reveals.forEach((el) => {
          if (el.getBoundingClientRect().top < window.innerHeight * 0.9) gsap.to(el, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" });
        });
      });
      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);
      cleanups.push(() => window.removeEventListener("load", onLoad));
    }

    return () => {
      cleanups.forEach((fn) => { try { fn(); } catch (e) {} });
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (lenis) { try { lenis.destroy(); } catch (e) {} }
      document.documentElement.style.overflow = "";
    };
  }, []);

  return null;
}
