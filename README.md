# Hammody — Bold (Cocky Light Portfolio)

A third, standalone portfolio for Hammody in a bold, magazine / "manifesto" style
(inspired by the energy of withhoney.com — original execution, cream + ember palette).
Next.js (App Router) + React + Tailwind + GSAP + Lenis. Separate from the other projects.

## Run locally
Node 18.17+.
```bash
npm install
npm run dev   # http://localhost:3000
```
## Deploy
New GitHub repo → import at vercel.com.

## Edit content / voice
All the (deliberately cocky) copy lives in **lib/data.js** — rules, process, FAQ, work quips,
testimonials, stats, links. Tune the voice there to sound exactly like you.
Images: public/work, public/avatars. Share image: public/og.png.

## Notes
- Voice is intentionally bold/confident. Soften any line in lib/data.js or the section components.
- The "Before" panel in BeforeAfter.jsx is a CSS mock of bland default UI; "After" is your real screenshot.
- Fonts: Anton (display), Inter (body), Space Mono (labels), Instrument Serif (italic accents) via next/font.
