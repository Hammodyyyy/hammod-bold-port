"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// One vocabulary for the whole site: masks snap out fast and settle, everything
// else shares a single decelerating curve. Consistency is what reads as intentional.
const EASE_MASK = "expo.out";
const EASE_REVEAL = "power3.out";
const HOVER_TARGETS = "a,button,summary,[data-cursor],.rule,.work-card,.proc";
const MASK_TRAVEL = 115;

// Progress bars scale instead of animating width — a transform composites,
// a width change relayouts on every frame.
const scaleXSetter = (el) => (v) => { el.style.transform = `scaleX(${v})`; };

export default function SiteEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(any-pointer: fine)").matches;
    gsap.registerPlugin(ScrollTrigger);

    let lenis = null;
    let cancelled = false;
    const cleanups = [];
    const timers = [];
    cleanups.push(() => { cancelled = true; });

    // ---------- Smooth scroll ----------
    if (!reduce) {
      try {
        lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
        lenis.on("scroll", ScrollTrigger.update);
        const tick = (t) => lenis.raf(t * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);
        cleanups.push(() => gsap.ticker.remove(tick));
      } catch (e) {
        lenis = null;
      }
    }

    const nav = document.getElementById("nav");
    const navLinks = document.getElementById("navLinks");
    const burger = document.getElementById("burger");
    const closeMenu = () => {
      navLinks && navLinks.classList.remove("open");
      burger && burger.classList.remove("open");
      if (lenis) lenis.start();
    };

    // ---------- Anchor smooth scroll ----------
    const anchorHandlers = [];
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      const h = (e) => {
        const id = a.getAttribute("href");
        if (!id || id.length < 2) return;
        const el = document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        closeMenu();
        if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.2 });
        else el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      };
      a.addEventListener("click", h);
      anchorHandlers.push([a, h]);
    });
    cleanups.push(() => anchorHandlers.forEach(([a, h]) => a.removeEventListener("click", h)));

    // ---------- Scroll-position UI (runs even with reduced motion) ----------
    const buildScrollUI = () => {
      const navProg = document.getElementById("navProg");
      if (navProg) {
        const setProg = scaleXSetter(navProg);
        ScrollTrigger.create({ start: 0, end: "max", onUpdate: (self) => setProg(self.progress) });
      }

      document.querySelectorAll('.nav-links a[href^="#"]:not(.nav-cta)').forEach((link) => {
        const id = link.getAttribute("href");
        if (!id || id.length < 2) return;
        const sec = document.querySelector(id);
        if (!sec) return;
        ScrollTrigger.create({
          trigger: sec,
          start: "top 45%",
          end: "bottom 45%",
          onToggle: (self) => link.classList.toggle("active", self.isActive),
        });
      });
    };

    // ---------- Scroll-driven motion ----------
    const buildMotion = () => {
      // Headlines rise out of their own mask, line by line.
      gsap.utils.toArray("[data-lines]").forEach((h) => {
        const lines = h.querySelectorAll(".ln");
        if (!lines.length) return;
        gsap.from(lines, {
          yPercent: MASK_TRAVEL,
          duration: 1.1,
          ease: EASE_MASK,
          stagger: 0.09,
          scrollTrigger: { trigger: h, start: "top 90%", once: true },
        });
      });

      // batch() groups everything crossing the line together, so grid siblings
      // stagger as a set instead of each firing its own identical tween.
      ScrollTrigger.batch(".reveal", {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { opacity: 1, y: 0, duration: 1, ease: EASE_REVEAL, stagger: 0.08 }),
      });

      // Late-loading images change section heights; re-measure when they land.
      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);
      cleanups.push(() => window.removeEventListener("load", onLoad));
    };

    // ---------- Marquee reacts to scroll velocity ----------
    const buildMarquee = () => {
      const skew = document.querySelector(".marquee-skew");
      if (!skew) return;
      const clamp = gsap.utils.clamp(-6, 6);
      let target = 0;
      let current = 0;

      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => { target = clamp(self.getVelocity() / -420); },
      });

      const tick = () => {
        target *= 0.92;                       // decays to rest once scrolling stops
        current += (target - current) * 0.15;
        if (Math.abs(current) < 0.005 && Math.abs(target) < 0.005) return;
        skew.style.transform = `skewX(${current.toFixed(3)}deg)`;
      };
      gsap.ticker.add(tick);
      cleanups.push(() => {
        gsap.ticker.remove(tick);
        skew.style.transform = "";
      });
    };

    // ---------- Animated backdrop ----------
    const buildBackdrop = () => {
      // Scroll parallax: shapes are position:fixed, so they don't move with the
      // page — translate them by scroll * speed to fake depth. Owns .bg-shape's
      // transform; the float keyframes live on the inner .bg-mark, so no fight.
      const shapes = gsap.utils.toArray(".bg-shape").map((el) => ({
        set: gsap.quickSetter(el, "y", "px"),
        speed: parseFloat(el.dataset.float) || 0.3,
      }));
      if (shapes.length) {
        ScrollTrigger.create({
          start: 0, end: "max",
          onUpdate: (self) => {
            const y = self.scroll();
            shapes.forEach((s) => s.set(y * s.speed * 0.06));
          },
        });
      }

      // Pointer: glow trails the cursor, the whole shape field drifts a few px
      // the opposite way for a parallax feel. Fine pointers only.
      const glow = document.getElementById("bgGlow");
      const drift = document.getElementById("bgDrift");
      if (fine && glow) {
        gsap.set(glow, { xPercent: -50, yPercent: -50, x: window.innerWidth / 2, y: window.innerHeight / 2 });
        const gx = gsap.quickTo(glow, "x", { duration: 0.9, ease: "power3" });
        const gy = gsap.quickTo(glow, "y", { duration: 0.9, ease: "power3" });
        const dx = drift ? gsap.quickTo(drift, "x", { duration: 1.1, ease: "power3" }) : null;
        const dy = drift ? gsap.quickTo(drift, "y", { duration: 1.1, ease: "power3" }) : null;
        const onBg = (e) => {
          gx(e.clientX); gy(e.clientY);
          if (dx) dx((e.clientX / window.innerWidth - 0.5) * -34);
          if (dy) dy((e.clientY / window.innerHeight - 0.5) * -34);
        };
        window.addEventListener("pointermove", onBg, { passive: true });
        document.body.classList.add("bg-on");
        cleanups.push(() => {
          window.removeEventListener("pointermove", onBg);
          document.body.classList.remove("bg-on");
        });
      }
    };

    // ---------- Count-up stats ----------
    // Splits "600M+" into prefix / number / suffix so the number ticks while the
    // suffix stays put. Only runs in motion mode — the JSX already holds the final
    // value, so no-JS and reduced-motion show it correctly without touching this.
    const runCounters = () => {
      gsap.utils.toArray(".hero-stats .v").forEach((el) => {
        const m = el.textContent.trim().match(/^(\D*)(\d[\d,]*(?:\.\d+)?)(.*)$/);
        if (!m) return;
        const [, pre, numStr, suf] = m;
        const target = parseFloat(numStr.replace(/,/g, ""));
        const o = { v: 0 };
        el.textContent = pre + "0" + suf;
        gsap.to(o, {
          v: target, duration: 1.5, ease: "power2.out",
          onUpdate: () => { el.textContent = pre + Math.round(o.v).toLocaleString() + suf; },
        });
      });
    };

    // ---------- FAQ accordion ----------
    // <details> snaps open natively. Intercept and animate the panel height,
    // keeping the open attribute set until a close finishes so content stays laid out.
    const buildFAQ = () => {
      const handlers = [];
      document.querySelectorAll(".faq details").forEach((d) => {
        const summary = d.querySelector("summary");
        const panel = d.querySelector(".fa");
        const plus = d.querySelector(".plus");
        if (!summary || !panel) return;

        const onClick = (e) => {
          e.preventDefault();
          const isOpen = d.hasAttribute("open");
          gsap.killTweensOf(panel);
          if (plus) gsap.to(plus, { rotate: isOpen ? 0 : 45, duration: 0.35, ease: "power2.out" });

          if (isOpen) {
            gsap.to(panel, {
              height: 0, opacity: 0, duration: 0.42, ease: "power2.inOut",
              onComplete: () => {
                d.removeAttribute("open");
                gsap.set(panel, { clearProps: "height,opacity" });
              },
            });
          } else {
            d.setAttribute("open", "");
            gsap.fromTo(panel,
              { height: 0, opacity: 0 },
              {
                height: "auto", opacity: 1, duration: 0.5, ease: EASE_REVEAL,
                onComplete: () => gsap.set(panel, { clearProps: "height" }),
              }
            );
          }
        };
        summary.addEventListener("click", onClick);
        handlers.push([summary, onClick]);
      });
      cleanups.push(() => handlers.forEach(([s, h]) => s.removeEventListener("click", h)));
    };

    // ---------- Hero entrance ----------
    // Built paused so from() stages the start state behind the loader.
    const buildHeroTl = () => {
      const tl = gsap.timeline({ paused: true, defaults: { ease: EASE_REVEAL } });
      tl.from(".hero-eyebrow", { opacity: 0, y: 14, duration: 0.7 }, 0)
        .from(".hero h1 .ln", { yPercent: MASK_TRAVEL, duration: 1.15, ease: EASE_MASK, stagger: 0.1 }, 0.06)
        .from(".hero-sub", { y: 22, opacity: 0, duration: 0.8 }, 0.55)
        // Direct children only: `.hero-stats div` would also match .v and .l,
        // double-applying the fade and stretching the stagger across 9 nodes.
        .from(".hero-stats > div", { y: 20, opacity: 0, duration: 0.7, stagger: 0.08 }, 0.68)
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.7 }, 0.8)
        // Kick the count-up as the stats fade in, so the numbers arrive live.
        .add(runCounters, 0.72);
      return tl;
    };

    // ---------- Loader ----------
    const loader = document.getElementById("loader");
    const lnum = document.getElementById("lnum");
    const lbar = document.getElementById("lbar");
    const setLoaderBar = lbar ? scaleXSetter(lbar) : null;
    if (lenis) lenis.stop();

    const p = { v: 0 };
    const render = () => {
      const n = Math.round(p.v);
      if (lnum) lnum.textContent = `[ ${String(n).padStart(3, "0")} ]`;
      if (setLoaderBar) setLoaderBar(p.v / 100);
    };

    const finish = () => {
      if (cancelled) return;

      if (reduce) {
        // Reduced motion is handled entirely in CSS; nothing is staged here, so
        // there is nothing to animate back in. <details> keeps native behaviour.
        buildScrollUI();
        ScrollTrigger.refresh();
        if (loader) loader.style.display = "none";
        if (lenis) lenis.start();
        return;
      }

      buildMotion();
      buildMarquee();
      buildBackdrop();
      buildFAQ();
      buildScrollUI();
      ScrollTrigger.refresh();

      const hero = buildHeroTl();

      const out = gsap.timeline({
        onComplete: () => { if (loader) loader.style.display = "none"; },
      });
      out.to(".loader .lname, .loader .lnum", {
          y: -30, opacity: 0, duration: 0.5, ease: "power2.in", stagger: 0.06,
        })
        .to(loader, { yPercent: -100, duration: 1, ease: "power4.inOut" }, "-=0.2")
        .add(() => { if (lenis) lenis.start(); }, "<")
        // Hero begins while the loader is still clearing — the overlap is what
        // makes the handoff feel like one movement instead of two.
        .add(() => hero.play(), "<+=0.26");
    };

    if (reduce) {
      p.v = 100;
      render();
      finish();
    } else {
      // Climb to 90 on a curve, then let real readiness close the last 10 —
      // never stalls, never lies about being done.
      const climb = gsap.to(p, { v: 90, duration: 1.05, ease: "power2.out", onUpdate: render });

      const ready = new Promise((res) => {
        if (document.readyState === "complete") res();
        else window.addEventListener("load", res, { once: true });
      });
      const cap = new Promise((res) => timers.push(setTimeout(res, 2000)));
      const floor = new Promise((res) => timers.push(setTimeout(res, 900)));

      Promise.all([Promise.race([ready, cap]), floor]).then(() => {
        if (cancelled) return;
        climb.kill();
        gsap.to(p, { v: 100, duration: 0.45, ease: "power2.inOut", onUpdate: render, onComplete: finish });
      });
    }
    cleanups.push(() => timers.forEach(clearTimeout));

    // ---------- Nav scroll state ----------
    const onScroll = () => {
      if (!nav) return;
      nav.classList.toggle("small", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    // ---------- Mobile menu ----------
    if (burger && navLinks) {
      const onBurger = () => {
        if (navLinks.classList.contains("open")) {
          closeMenu();
        } else {
          navLinks.classList.add("open");
          burger.classList.add("open");
          if (lenis) lenis.stop();
        }
      };
      burger.addEventListener("click", onBurger);
      cleanups.push(() => burger.removeEventListener("click", onBurger));
    }

    // ---------- Custom cursor ----------
    const dot = document.getElementById("dot");
    const ring = document.getElementById("ring");
    if (fine && !reduce && dot && ring) {
      document.body.classList.add("cursor-on");
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      gsap.set([dot, ring], { xPercent: -50, yPercent: -50, x: cx, y: cy });

      const dx = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
      const dy = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });
      const rx = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3" });
      const ry = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3" });

      // One delegated listener replaces two per interactive element, and it keeps
      // working for anything added to the DOM later.
      let hovered = null;
      const onMove = (e) => {
        dx(e.clientX); dy(e.clientY);
        rx(e.clientX); ry(e.clientY);
        const el = e.target instanceof Element ? e.target.closest(HOVER_TARGETS) : null;
        if (el !== hovered) {
          hovered = el;
          ring.classList.toggle("hover", !!el);
          // Scale rather than width/height: keeps the ring centred under the
          // pointer instead of drifting as the box grows.
          gsap.to(ring, { scale: el ? 1.75 : 1, duration: 0.4, ease: "power3.out" });
        }
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      cleanups.push(() => {
        window.removeEventListener("pointermove", onMove);
        document.body.classList.remove("cursor-on");
      });

      // ---------- Magnetic buttons ----------
      const magHandlers = [];
      document.querySelectorAll(".magnetic").forEach((b) => {
        const move = (e) => {
          const r = b.getBoundingClientRect();
          gsap.to(b, {
            x: (e.clientX - (r.left + r.width / 2)) * 0.3,
            y: (e.clientY - (r.top + r.height / 2)) * 0.4,
            duration: 0.55, ease: "power3.out",
          });
        };
        const out = () => gsap.to(b, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1,.45)" });
        b.addEventListener("pointermove", move);
        b.addEventListener("pointerleave", out);
        magHandlers.push([b, move, out]);
      });
      cleanups.push(() =>
        magHandlers.forEach(([b, mv, ml]) => {
          b.removeEventListener("pointermove", mv);
          b.removeEventListener("pointerleave", ml);
        })
      );
    }

    // ---------- Cleanup ----------
    return () => {
      cleanups.forEach((fn) => { try { fn(); } catch (e) {} });
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (lenis) { try { lenis.destroy(); } catch (e) {} }
    };
  }, []);

  return null;
}
