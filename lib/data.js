// ─────────────────────────────────────────────────────────────
// CONTENT SOURCE OF TRUTH
// Only real, verifiable claims. No invented studios or metrics.
// House style: no em dashes anywhere in visitor-facing copy.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Hammody",
  role: "Roblox UI Design · Studio Implementation",
  // head-cropped from avatars/hammody.png, 128px so it stays sharp at 2x
  avatar: "/avatars/hammody-avatar.png",
  discordUrl: "https://discordapp.com/users/608785550656274609",
  robloxUrl: "https://www.roblox.com/users/144423870/profile",
  xUrl: "https://x.com/__Hammody",
  siteUrl: "https://hammody.pages.dev",
};

// Availability signal (scarcity/status). Set open:false to show "Booked".
// Update `label` by hand each month, e.g. "Taking 2 projects for September".
export const availability = { open: true, label: "Taking 2 projects for August" };

export const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Pricing", href: "#services" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Roblox UI Design · Studio Implementation",
  headline: ["Premium UI systems", "for Roblox games."],
  sub: "I design and build production-ready interfaces for Roblox: shops, HUDs, menus, and full systems. Every project arrives built in Roblox Studio, with responsive scaling and a clean hierarchy your developers can work in.",
  ctaPrimary: { label: "Book a project", href: "#contact" },
  ctaSecondary: { label: "View work", href: "#projects" },
};

// Social proof. REAL clients only.
export const clients = [
  { name: "DoBig", logo: "/clients/dobig.png" },
  { name: "Novaly", logo: "/clients/novaly.png" },
];

// "What I design", organized by UI SYSTEM TYPE so a studio self-identifies
// by what their game needs. Edit to match your real strengths.
export const specialties = [
  { n: "01", h: "Shops & Monetization", p: "Storefronts, bundles, and purchase flows built to be understood and used in the first second." },
  { n: "02", h: "HUDs & In-Game UI", p: "Health, currency, abilities, minimaps: the always-on layer, kept calm and legible under pressure." },
  { n: "03", h: "Progression & Quests", p: "Quest hubs, battle passes, and reward loops that read at a glance and keep players coming back." },
  { n: "04", h: "Menus & Lobbies", p: "Main menus, settings, and lobbies that set the tone the moment your game loads." },
  { n: "05", h: "Inventories & Crafting", p: "Deep systems like inventories, crafting, and trading, engineered to feel simple instead of overwhelming." },
];

// Projects: light visual gallery. Click opens the full shot in a lightbox.
// Add `video: "/work/x.mp4"` to any item to autoplay a clip instead.
export const projects = [
  { img: "/work/questlog.jpg", title: "Quest Log", tag: "RPG" },
  { img: "/work/shop.jpg", title: "Shop UI", tag: "Monetization" },
  { img: "/work/quests.jpg", title: "Quest UI", tag: "Systems" },
  { img: "/work/kitchen.jpg", title: "Kitchen", tag: "Crafting" },
  { img: "/work/store.jpg", title: "Store & Gifting", tag: "Store" },
];

// Pricing packages, priced per project by how many UI systems the game needs.
// Studio implementation is included in every tier, never a paid upgrade.
export const priceUnit = "/project";

export const services = [
  {
    tier: "Starter",
    price: "$325",
    forWho: "For a focused set of screens.",
    features: [
      "3 UI systems",
      "Design + all states",
      "Built in Roblox Studio",
      "Responsive scaling & clean hierarchy",
      "2 revision rounds",
    ],
    cta: "Start with Starter",
    highlight: false,
  },
  {
    tier: "Core",
    price: "$650",
    forWho: "The full front end for most games.",
    features: [
      "6 UI systems",
      "Everything in Starter",
      "Hover & press micro-interactions",
      "2 revision rounds",
    ],
    cta: "Start with Core",
    highlight: true,
  },
  {
    tier: "Complete",
    price: "$1,100",
    forWho: "Every screen your game needs, animated.",
    features: [
      "10 UI systems",
      "Everything in Core",
      "Full animation pass: tweening & transitions",
      "3 revision rounds",
    ],
    cta: "Start with Complete",
    highlight: false,
  },
];

export const scopeNote = {
  lead: "Bigger scope?",
  text: "Ongoing work, full studio partnerships, and anything past 10 systems.",
  linkLabel: "Get in touch for a tailored quote.",
};

// The one sequence on the site: what happens from first message to handoff.
// Replaces both the old four-bullet terms strip and the six-step process grid.
export const steps = [
  {
    n: "01",
    h: "Pick your package",
    p: "Choose Starter, Core, or Complete, or just tell me what your game needs and I'll tell you which one fits. You get a fixed quote and a real timeline before anything begins.",
  },
  {
    n: "02",
    h: "Kick off",
    p: "50% upfront to lock your slot. Send me your game, your references, and anything you already have. I'll come back with questions before I open Figma.",
  },
  {
    n: "03",
    h: "Design and build",
    p: "Every system gets designed with all its states, then built directly in Roblox Studio with responsive scaling and a clean hierarchy. Revision rounds are included as listed in your package.",
  },
  {
    n: "04",
    h: "Handoff",
    p: "Final 50% on delivery. You get organized, properly named Studio files, ready for your scripters to wire up.",
  },
];

// Toolkit: real tools you use. `key` maps to a brand icon in Toolkit.jsx.
export const toolkit = [
  { name: "Figma", role: "Design & prototyping", key: "figma" },
  { name: "Roblox Studio", role: "Build & implementation", key: "roblox" },
  { name: "Photoshop", role: "Textures & assets", key: "photoshop" },
];

export const faqs = [
  { q: "How does pricing work?", a: "Per project, not per screen. Packages are based on how many UI systems your game needs, and implementation in Studio is included in all of them. You get a fixed quote up front, so there's no hourly guessing and no surprise add-ons." },
  { q: "How long does a project take?", a: "It depends on scope. A single system is quick; a full front end takes longer. Either way you get a real timeline before any work begins, and I keep you updated throughout." },
  { q: "Does the UI come imported inside Roblox Studio?", a: "Yes, always. It's included in every package, not an upgrade. I build it directly in Studio with responsive scaling, correct anchoring, and a hierarchy your scripters can work in." },
  { q: "Can you animate the UI?", a: "Yes. Hover and press micro-interactions are included from Core up. A full animation pass with tweening and transitions comes with Complete." },
  { q: "What if I only need one menu?", a: "Single systems are $130, with a $150 project minimum. Packages work out cheaper per system, so if you need three or more, Starter is the better deal." },
  { q: "Can you work with our existing UI?", a: "Absolutely. I can refine, rebuild, or extend what you already have while keeping it consistent with your game's identity, so there's no need to start from zero." },
  { q: "Are your prices fixed?", a: "Package prices are fixed for the scope listed. We agree on what your systems involve before anything starts, and if the scope grows later I quote it first, so you always know the number before we begin." },
  { q: "What do you need to get started?", a: "Your game, the problem you're solving, and any references you like. Rough is fine. I'll turn it into a plan and a timeline." },
];

// Testimonials rotate one at a time in the carousel.
// `stars` is optional: delete it from an entry to hide the rating on that card.
export const testimonials = [
  { avatar: "/avatars/tangerine.gif", name: "Tangerine", role: "Client", stars: 5, quote: "Fast, efficient, and communicated the whole way. Implemented every revision without complaint and checked in after to make sure I was happy." },
  { avatar: "/avatars/cyy.gif", name: "CYY", role: "Client", stars: 5, quote: "Fast and efficient, with genuinely good quality." },
  { avatar: "/avatars/aomine.webp", name: "aomine", role: "Client", stars: 5, quote: "Quality work, always on time. Great to work with and amazing at what he does." },
];

export const contact = {
  headline: ["Ready to build something", "players remember?"],
  sub: "Tell me about your game and where you are in development. I'll recommend the right package and send a fixed quote before any work starts. Discord is the fastest way to reach me.",
  ctaPrimary: { label: "Book a project on Discord", href: profile.discordUrl },
  ctaSecondary: { label: "View work", href: "#projects" },
  replyTime: "I reply within 12 hours.",
};

export const socials = [
  { label: "Discord", handle: "hammodyy", href: profile.discordUrl, platform: "discord" },
  { label: "Roblox", handle: "H4MMODY", href: profile.robloxUrl, platform: "roblox" },
  { label: "X", handle: "@__Hammody", href: profile.xUrl, platform: "x" },
];
