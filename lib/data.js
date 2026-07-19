// ─────────────────────────────────────────────────────────────
// CONTENT SOURCE OF TRUTH
// Only real, verifiable claims. No invented studios or metrics.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Hammody",
  role: "Roblox UI Design · Studio Implementation",
  discordUrl: "https://discordapp.com/users/608785550656274609",
  robloxUrl: "https://www.roblox.com/users/144423870/profile",
  xUrl: "https://x.com/__Hammody",
  siteUrl: "https://hammody.pages.dev",
};

// Availability signal (scarcity/status). Set open:false to show "Booked".
// You can also make `label` a scarcity line like "Booking for August".
export const availability = { open: true, label: "Available for new projects" };

export const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Pricing", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Roblox UI Design · Studio Implementation",
  headline: ["Premium UI systems", "for Roblox games."],
  sub: "I design and build production-ready interfaces for Roblox — shops, HUDs, menus, and full systems — implemented directly in Roblox Studio with responsive scaling and clean hierarchy your developers can build on.",
  ctaPrimary: { label: "Book a project", href: "#contact" },
  ctaSecondary: { label: "View work", href: "#projects" },
};

// Social proof — REAL clients only.
export const clients = [
  { name: "DoBig", logo: "/clients/dobig.png" },
  { name: "Novaly", logo: "/clients/novaly.png" },
];

// "What I design" — organized by UI SYSTEM TYPE so a studio self-identifies
// by what their game needs. Edit to match your real strengths.
export const specialties = [
  { n: "01", h: "Shops & Monetization", p: "Storefronts, bundles, and purchase flows built to be understood — and used — in the first second." },
  { n: "02", h: "HUDs & In-Game UI", p: "Health, currency, abilities, minimaps — the always-on layer, kept calm and legible under pressure." },
  { n: "03", h: "Progression & Quests", p: "Quest hubs, battle passes, and reward loops that read at a glance and keep players coming back." },
  { n: "04", h: "Menus & Lobbies", p: "Main menus, settings, and lobbies that set the tone the moment your game loads." },
  { n: "05", h: "Inventories & Crafting", p: "Deep systems — inventories, crafting, trading — engineered to feel simple, not overwhelming." },
  { n: "06", h: "Logos & Branding", p: "Game logos and marks that hold up from a store thumbnail to a billboard." },
];

// Projects — light visual gallery. Click opens the full shot in a lightbox.
// Add `video: "/work/x.mp4"` to any item to autoplay a clip instead.
export const projects = [
  { img: "/work/shop.jpg", title: "Shop UI", tag: "Monetization" },
  { img: "/work/quests.jpg", title: "Quest UI", tag: "Systems" },
  { img: "/work/kitchen.jpg", title: "Kitchen", tag: "Crafting" },
  { img: "/work/store.jpg", title: "Store & Gifting", tag: "Store" },
];

// Pricing packages — scoped by outcome. Prices are your floors.
export const services = [
  {
    tier: "Design",
    price: "Starting at $50+",
    forWho: "Perfect for teams that already have a developer.",
    features: ["UI Design", "Responsive Layout", "Organized Design Files", "Design Revisions"],
    highlight: false,
  },
  {
    tier: "Production",
    price: "Starting at $75+",
    forWho: "For teams that want it built, not just designed.",
    features: ["Everything in Design", "Roblox Studio Implementation", "Responsive Scaling", "Organized UI Hierarchy", "Ready for Scripting"],
    highlight: true,
  },
  {
    tier: "Premium",
    price: "Custom Quote",
    forWho: "For interfaces that need to feel alive, not just work.",
    features: ["Everything in Production", "Custom UI Animations", "Micro-interactions", "Polish Pass", "Priority Revisions"],
    highlight: false,
  },
];

export const premiumNote =
  "Premium isn't more screens. It's the motion and polish that separate an interface that works from one players remember — animation, micro-interactions, and a final pass on every detail.";

export const process = [
  { n: "01", key: "discovery", h: "Discovery", p: "We start with your game, your player, and the problem the UI has to solve — so nothing gets designed on a guess." },
  { n: "02", key: "research", h: "Research", p: "I study how similar systems behave and where players get stuck, then map the flows and states before anything gets drawn." },
  { n: "03", key: "design", h: "Design", p: "High-fidelity screens and every state — hover, active, empty, error. Pixel-level polish, on-brand for your game." },
  { n: "04", key: "implementation", h: "Implementation", p: "I build it inside Roblox Studio: responsive scaling, correct anchoring, and a clean hierarchy your developers can maintain." },
  { n: "05", key: "animation", h: "Animation", p: "Tweens and micro-interactions that turn a static layout into something that feels responsive and refined." },
  { n: "06", key: "delivery", h: "Delivery", p: "Documented, organized handoff — ready for scripting and built to scale with your game." },
];

export const why = [
  { h: "Roblox-native", p: "I design for how Roblox players behave and how Studio actually works — not a mockup that breaks the moment it ships." },
  { h: "I implement, not just design", p: "Most designers hand you a Figma file and stop there. I build it in Studio myself, so nothing gets lost in translation." },
  { h: "Motion is built in", p: "Animation isn't an afterthought. Feedback and micro-interactions are designed from the first frame, not bolted on later." },
  { h: "Clear communication", p: "You get updates at every stage and a real timeline up front — no silence, no guesswork." },
  { h: "Clean & scalable", p: "Named layers, reusable components, a hierarchy your team can build on for years without a rewrite." },
  { h: "Production-ready", p: "Everything is delivered organized and ready for scripting — the last 10% of detail is where I spend the most time." },
];

// Toolkit — real tools you use. Trim/add to match.
export const toolkit = [
  "Figma", "Roblox Studio", "TweenService", "Photoshop", "Illustrator", "Notion",
];

export const faqs = [
  { q: "How does pricing work?", a: "By scope, not by the frame. Each package is a starting point; I give you a fixed quote up front based on what your game actually needs — no hourly guessing, no surprise add-ons." },
  { q: "How long does a project take?", a: "It depends on scope. A single system is quick; full product UI takes longer. Either way you get a real timeline before any work begins, and I keep you updated throughout." },
  { q: "Does the UI come imported inside Roblox Studio?", a: "Yes — with the Production and Premium packages I build it directly in Studio: responsive, properly anchored, and ready for your scripters. The Design package is design-only, with Studio implementation available as an add-on." },
  { q: "Can you animate the UI?", a: "Yes. Tweening and micro-interactions are part of the work — the difference between UI that looks fine and UI that feels refined. It's the focus of the Premium package." },
  { q: "Can you work with our existing UI?", a: "Absolutely. I can refine, rebuild, or extend what you already have while keeping it consistent with your game's identity — no need to start from zero." },
  { q: "Are your prices fixed?", a: "The package prices are starting points. Final pricing depends on complexity, number of interfaces, and scope — you'll always get a clear quote before we begin." },
  { q: "What do you need to get started?", a: "Your game, the problem you're solving, and any references you like. Rough is fine — I'll turn it into a plan and a timeline." },
];

export const testimonials = [
  { avatar: "/avatars/tangerine.gif", name: "Tangerine", role: "Client", quote: "Fast, efficient, and communicated the whole way. Implemented every revision without complaint and checked in after to make sure I was happy." },
  { avatar: "/avatars/cyy.gif", name: "CYY", role: "Client", quote: "Fast and efficient, with genuinely good quality." },
  { avatar: "/avatars/aomine.webp", name: "aomine", role: "Client", quote: "Quality work, always on time. Great to work with and amazing at what he does." },
];

export const contact = {
  headline: ["Ready to build something", "players remember?"],
  sub: "Tell me about your game, your goals, and where you are in development. I'll recommend the best approach and send a tailored quote. Discord is the fastest way to reach me.",
  ctaPrimary: { label: "Book a project on Discord", href: profile.discordUrl },
  ctaSecondary: { label: "View work", href: "#projects" },
};

export const socials = [
  { label: "Discord", handle: ".hammody", href: profile.discordUrl, platform: "discord" },
  { label: "Roblox", handle: "H4MMODY", href: profile.robloxUrl, platform: "roblox" },
  { label: "X", handle: "@__Hammody", href: profile.xUrl, platform: "x" },
];
