"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function SiteEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.registerPlugin(ScrollTrigger);

    let lenis = null;
    let rafId = 0;
    const cleanups = [];

    if (!reduce) {
      try {
        lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
        lenis.on("scroll", ScrollTrigger.update);
        const tick = (t) => lenis.raf(t * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);
        cleanups.push(() => gsap.ticker.remove(tick));
      } catch (e) { lenis = null; }
    }

    const nav = document.getElementById("nav");
    const navLinks = document.getElementById("navLinks");
    const burger = document.getElementById("burger");
    const closeMenu = () => { navLinks && navLinks.classList.remove("open"); burger && burger.classList.remove("open"); if (lenis) lenis.start(); };

    const anchorHandlers = [];
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      const h = (e) => {
        const id = a.getAttribute("href"); if (!id || id.length < 2) return;
        const el = document.querySelector(id); if (!el) return; e.preventDefault();
        closeMenu();
        if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.2 });
        else el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      };
      a.addEventListener("click", h); anchorHandlers.push([a, h]);
    });
    cleanups.push(() => anchorHandlers.forEach(([a, h]) => a.removeEventListener("click", h)));

    const loader = document.getElementById("loader");
    const lnum = document.getElementById("lnum");
    const lbar = document.getElementById("lbar");
    if (lenis) lenis.stop();

    const heroIn = () => {
      if (reduce) { document.querySelectorAll(".reveal").forEach((r) => { r.style.opacity = 1; r.style.transform = "none"; }); return; }
      // standardized: section-scale reveals at 500ms on one easing curve
      gsap.from(".hero h1 .ln", { yPercent: 112, duration: 0.7, ease: "power3.out", stagger: 0.07 });
      gsap.from(".hero-eyebrow", { opacity: 0, duration: 0.4, delay: 0.1 });
      gsap.from(".hero-sub", { y: 18, opacity: 0, duration: 0.5, ease: "power3.out", delay: 0.3 });
      gsap.from(".hero-cta", { y: 18, opacity: 0, duration: 0.5, ease: "power3.out", delay: 0.4 });
    };

    const buildScroll = () => {
      if (reduce) {
        gsap.utils.toArray(".reveal").forEach((el) => { el.style.opacity = 1; el.style.transform = "none"; });
        return;
      }
      // gentle fade + rise, staggered as each cluster of elements scrolls in
      gsap.set(".reveal", { opacity: 0, y: 30 });
      ScrollTrigger.batch(".reveal", {
        start: "top 90%",
        onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.75, ease: "power2.out", stagger: 0.1, overwrite: true }),
      });
      gsap.utils.toArray(".clip .ln").forEach((el) => {
        if (el.closest(".hero")) return;
        gsap.from(el, { yPercent: 112, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%" } });
      });
      // safety net: reveal anything already at/above the fold (e.g. reload mid-page)
      requestAnimationFrame(() => {
        gsap.utils.toArray(".reveal").forEach((el) => {
          if (el.getBoundingClientRect().top < window.innerHeight * 0.9 && gsap.getProperty(el, "opacity") === 0) {
            gsap.to(el, { opacity: 1, y: 0, duration: 0.75, ease: "power2.out" });
          }
        });
      });
      ScrollTrigger.refresh();
      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);
      cleanups.push(() => window.removeEventListener("load", onLoad));
    };

    const finish = () => {
      if (reduce) { if (loader) loader.style.display = "none"; if (lenis) lenis.start(); heroIn(); buildScroll(); return; }
      gsap.to(loader, { yPercent: -100, duration: 0.9, ease: "power4.inOut", delay: 0.2, onComplete: () => {
        if (loader) loader.style.display = "none"; if (lenis) lenis.start(); heroIn(); buildScroll();
      }});
    };

    if (reduce) { if (lnum) lnum.textContent = "[ 100 ]"; if (lbar) lbar.style.width = "100%"; finish(); }
    else {
      const p = { v: 0 };
      gsap.to(p, { v: 100, duration: 1.6, ease: "power2.inOut",
        onUpdate: () => { const n = Math.round(p.v); if (lnum) lnum.textContent = `[ ${String(n).padStart(3, "0")} ]`; if (lbar) lbar.style.width = n + "%"; },
        onComplete: finish });
    }

    const onScroll = () => { if (!nav) return; if (window.scrollY > 40) nav.classList.add("small"); else nav.classList.remove("small"); };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    const onBurger = () => {
      if (navLinks.classList.contains("open")) closeMenu();
      else { navLinks.classList.add("open"); burger.classList.add("open"); if (lenis) lenis.stop(); }
    };
    if (burger) { burger.addEventListener("click", onBurger); cleanups.push(() => burger.removeEventListener("click", onBurger)); }

    const dot = document.getElementById("dot");
    const ring = document.getElementById("ring");
    const glow = document.getElementById("glow");
    const fine = window.matchMedia("(any-pointer: fine)").matches;
    if (fine && !reduce && dot && ring) {
      document.body.classList.add("cursor-on");
      if (glow) document.body.classList.add("glow-on");
      let mx = window.innerWidth / 2, my = window.innerHeight / 2, rx = mx, ry = my, gx = mx, gy = my;
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
      const onMove = (e) => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`; };
      window.addEventListener("mousemove", onMove);
      // single rAF loop: ring (snappy lerp) + ambient glow (soft trailing lerp), both GPU-composited
      const loop = () => {
        rx += (mx - rx) * 0.2; ry += (my - ry) * 0.2;
        ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
        if (glow) { gx += (mx - gx) * 0.14; gy += (my - gy) * 0.14; glow.style.setProperty("--gx", gx + "px"); glow.style.setProperty("--gy", gy + "px"); }
        rafId = requestAnimationFrame(loop);
      };
      loop();
      const hoverEls = document.querySelectorAll("[data-cursor],a,button,summary");
      const enter = () => ring.classList.add("hover");
      const leave = () => ring.classList.remove("hover");
      hoverEls.forEach((el) => { el.addEventListener("mouseenter", enter); el.addEventListener("mouseleave", leave); });
      const magnets = document.querySelectorAll(".magnetic");
      const magHandlers = [];
      magnets.forEach((b) => {
        const move = (e) => { const r = b.getBoundingClientRect(); const x = e.clientX - (r.left + r.width / 2); const y = e.clientY - (r.top + r.height / 2); gsap.to(b, { x: x * 0.3, y: y * 0.4, duration: 0.5, ease: "power3.out" }); };
        const out = () => gsap.to(b, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,.4)" });
        b.addEventListener("mousemove", move); b.addEventListener("mouseleave", out);
        magHandlers.push([b, move, out]);
      });
      cleanups.push(() => {
        window.removeEventListener("mousemove", onMove);
        cancelAnimationFrame(rafId);
        hoverEls.forEach((el) => { el.removeEventListener("mouseenter", enter); el.removeEventListener("mouseleave", leave); });
        magHandlers.forEach(([b, mv, ml]) => { b.removeEventListener("mousemove", mv); b.removeEventListener("mouseleave", ml); });
        document.body.classList.remove("cursor-on");
        document.body.classList.remove("glow-on");
      });
    }

    return () => {
      cleanups.forEach((fn) => { try { fn(); } catch (e) {} });
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (lenis) { try { lenis.destroy(); } catch (e) {} }
    };
  }, []);

  return null;
}
