// ─────────────────────────────────────────────────────────────
// CONTENT SOURCE OF TRUTH
// Only real, verifiable claims. No invented studios or metrics.
// House style: no em dashes anywhere in visitor-facing copy.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Hammody",
  role: "Roblox UI designer",
  // head crop, sized by scripts/optimize-images.mjs (source in assets-src/)
  avatar: "/avatars/hammody-avatar-96.webp",
  discordUrl: "https://discordapp.com/users/608785550656274609",
  robloxUrl: "https://www.roblox.com/users/144423870/profile",
  xUrl: "https://x.com/__Hammody",
  siteUrl: "https://hammody.me",
};

// Availability signal (scarcity/status). Set open:false to show "Booked".
// Update `label` by hand each month, e.g. "Taking 2 projects for September".
export const availability = { open: true, label: "Taking 2 projects for November" };

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

// One label per intent, used everywhere on the page (nav, hero, pricing, contact).
export const ctaLabel = "Book a project";

export const hero = {
  headline: ["Roblox UI,", "built in Studio."],
  sub: "Shops, HUDs, menus and full systems, designed and delivered working inside Studio with scaling, states and a clean hierarchy.",
  ctaSecondary: { label: "View work", href: "#work" },
};

// Proof row directly under the hero. Real claims only.
export const proof = [
  { big: "2+ years", small: "Designing Roblox interfaces" },
  { big: "Built in Studio", small: "Every project, never just a Figma file" },
  { big: "6 hours", small: "Typical reply time on Discord" },
];

// Social proof. REAL clients only.
export const clients = [
  { name: "DoBig", logo: "/clients/dobig-72.webp" },
  { name: "Novaly", logo: "/clients/novaly-72.webp" },
];

// Screen recording of animated UI running in Studio. It is the hero visual:
// the strongest proof on the page, so it is the first thing anyone sees.
// Re-encode any replacement clip before committing it: raw Studio captures
// run ~28 Mbps, which is far too heavy.
export const studioDemo = {
  video: "/work/studio-demo.mp4",
  // First frame of the clip, shown while it loads. Regenerate when the clip is swapped.
  poster: "/work/studio-demo-poster-1600.webp",
  caption: "Skill tree, animated and running in Roblox Studio.",
};

// Work strip. Click opens the full shot in a lightbox.
// Add `video: "/work/x.mp4"` to any item to autoplay a clip instead.
export const projects = [
  { img: "/work/questlog-1600.webp", title: "Quest Log", tag: "RPG" },
  { img: "/work/shop-1600.webp", title: "Shop UI", tag: "Monetization" },
  { img: "/work/quests-1600.webp", title: "Quest UI", tag: "Systems" },
  { img: "/work/kitchen-1600.webp", title: "Kitchen", tag: "Crafting" },
  { img: "/work/store-1600.webp", title: "Store & Gifting", tag: "Store" },
];

// What studios hire for. Shown as a compact list beside the work strip.
export const specialties = [
  "Shops and monetization",
  "HUDs and in-game UI",
  "Progression and quests",
  "Menus and lobbies",
  "Inventories and crafting",
];

// The one sequence on the site. Each stage has a gate: the thing that has to
// be true before the next stage starts.
export const steps = [
  {
    h: "Quote",
    p: "Tell me what your game needs. I turn it into a screen list and a fixed price, in writing.",
    gate: "Screen list and price agreed",
  },
  {
    h: "Kick off",
    p: "50% upfront locks your slot. Send your game, references and existing art, and I come back with questions first.",
    gate: "Deposit paid, direction approved",
  },
  {
    h: "Design and build",
    p: "Every screen designed with all its states, then built in Studio with responsive scaling and a named hierarchy.",
    gate: "Tested in Studio on phone to ultrawide",
  },
  {
    h: "Handoff",
    p: "Final 50% on delivery. You get organized Studio files your developers can wire straight in.",
    gate: "Files delivered, fixes window starts",
  },
];

// Pricing is per screen. Studio implementation is included at every tier and
// is never described as an add-on. `was` is the honest anchor: the same screen
// count at the single-frame rate, shown struck through.
export const pricingHead = {
  h: "Priced per screen. Built in Studio.",
  p: "$75 a screen on its own, $60 a screen from five. Fixed scope and price, agreed before anything starts.",
};

export const tiers = [
  {
    tier: "Single frames",
    price: "$75",
    unit: "per screen",
    sub: "For 1 to 4 screens",
    desc: "One-off screens. A short run costs more per screen because the setup is the same either way.",
    features: [
      "Designed and built in Studio",
      "Responsive scaling and states",
      "1 revision round",
      "7 days of post-delivery fixes",
    ],
  },
  {
    tier: "Screen pack",
    price: "$300+",
    was: "$375",
    sub: "From 5 screens, $60 a screen",
    desc: "A connected set, like a shop, inventory and settings, sharing one component system so it stays consistent.",
    features: [
      "Designed and built in Studio",
      "Shared component system",
      "2 revision rounds",
      "30 days of post-delivery fixes",
    ],
  },
  {
    tier: "Full interface",
    price: "$600+",
    was: "$750",
    sub: "From 10 screens, $60 a screen",
    desc: "Every screen your game needs, art-directed from scratch on one system your team can extend.",
    features: [
      "Designed and built in Studio",
      "3 revision rounds",
      "Weekly updates plus a call",
      "60 days of post-delivery fixes",
    ],
    highlight: true,
  },
];

export const priceNote = "Struck-through prices are the same screen count at the single-frame rate. Complex screens like skill trees, crafting and trading are settled on the screen list before work starts.";

export const faqs = [
  { q: "How does pricing work?", a: "Per screen. A single screen is $75. From five screens the rate drops to $60 a screen, because the component system is built once and shared. You get a fixed price against your actual screen list before work starts." },
  { q: "Does the UI come built inside Roblox Studio?", a: "Yes, at every tier. Built directly in Studio with responsive scaling, correct anchoring, and a hierarchy your developers can work in. It is part of the price, not an extra." },
  { q: "How long does a project take?", a: "Usually a few days to 1-3 weeks, depending on the scope of the project and my availability. You get a date in writing before work begins, and updates as it goes." },
  { q: "Can you work with our existing UI?", a: "Yes. I can refine, rebuild, or extend what you already have while keeping it consistent with your game, so there is no need to start from zero." },
  { q: "What do you need to get started?", a: "Your game, the screens you need, and any references you like. Rough is fine. I turn it into a screen list and a quote." },
];

// Testimonials. The first one is shown largest.
export const testimonials = [
  { avatar: "/avatars/tangerine.gif", name: "Tangerine", role: "Client", quote: "Fast, efficient, and communicated the whole way. Implemented every revision without complaint and checked in after to make sure I was happy." },
  { avatar: "/avatars/aomine-96.webp", name: "aomine", role: "Client", quote: "Quality work, always on time. Great to work with and amazing at what he does." },
  { avatar: "/avatars/cyy.gif", name: "CYY", role: "Client", quote: "Fast and efficient, with genuinely good quality." },
];

export const contact = {
  lines: ["Tell me what", "you’re building."],
  sub: "Send your game and the screens you need. You get a screen list and a fixed price before any work starts.",
  replyTime: "I reply within 6 hours.",
};

export const socials = [
  { label: "Discord", handle: "hammodyy", href: profile.discordUrl, platform: "discord" },
  { label: "Roblox", handle: "H4MMODY", href: profile.robloxUrl, platform: "roblox" },
  { label: "X", handle: "@__Hammody", href: profile.xUrl, platform: "x" },
];
