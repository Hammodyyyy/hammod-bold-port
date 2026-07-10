// ─────────────────────────────────────────────────────────────
// CONTENT SOURCE OF TRUTH
// Only real, verifiable claims live here. No invented studios, no
// unsupported revenue/conversion numbers. Prices are floors you can
// raise; "$150+" signals "starting at" without boxing you in.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Hammody",
  role: "Roblox UI Design · Studio Implementation",
  discordUrl: "https://discordapp.com/users/608785550656274609",
  robloxUrl: "https://www.roblox.com/users/144423870/profile",
  xUrl: "https://x.com/__Hammody",
  siteUrl: "https://hammody.pages.dev",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

// Hero — who / what in one screen, no buzzwords, no unsupported claims.
export const hero = {
  eyebrow: "Roblox UI Design · Studio Implementation",
  headline: ["Premium UI systems", "for Roblox games."],
  sub: "I design and build production-ready interfaces for Roblox — shops, HUDs, menus, and full systems — implemented directly in Roblox Studio with responsive scaling and clean hierarchy your developers can build on.",
  ctaPrimary: { label: "Start a project", href: "#contact" },
  ctaSecondary: { label: "View work", href: "#work" },
};

// Social proof — REAL clients only. Never add a name you can't back up.
export const clients = [
  { name: "DoBig", logo: "/clients/dobig.png" },   // blue controller mark
  { name: "Novaly", logo: "/clients/novaly.png" }, // red N mark
];

// Case studies. Every project's scope is tagged with monochrome badges.
export const work = [
  {
    img: "/work/shop.jpg",
    title: "Shop UI",
    kind: "Monetization UI",
    client: "DoBig", // TODO: confirm which project belongs to which client
    scope: ["Design", "Studio", "Animation"],
    problem:
      "The old shop buried its best bundles behind several taps. Players opened it, lost the thread, and closed it before finding anything worth buying.",
    solution:
      "Rebuilt around a single, glanceable hierarchy: featured offer first, honest price anchoring, and a purchase flow with no dead-ends. Every interaction state designed and animated.",
    deliverables: ["Full shop UI", "20+ interaction states", "Purchase & confirm flow", "Studio implementation", "Tween animations"],
    tools: ["Figma", "Roblox Studio", "TweenService"],
    outcome: "A shop that reads in the first second and a purchase path with no dead-ends.",
    why: "A shop is a storefront. Players engage with what they understand — clarity and hierarchy are the whole job.",
  },
  {
    img: "/work/quests.jpg",
    title: "Quest UI",
    kind: "Systems UI",
    client: "Novaly",
    scope: ["Design", "Studio", "Animation"],
    problem:
      "Six quest types shared one cramped panel. Active, locked, and claimable states were hard to tell apart at a glance.",
    solution:
      "Designed a calm information architecture — unmistakable status states, progress that reads instantly, and a claim flow that feels earned. Motion used as feedback, never decoration.",
    deliverables: ["Quest hub", "6 quest-type templates", "Progress & claim states", "Empty / complete states", "Studio build + animation"],
    tools: ["Figma", "Roblox Studio", "TweenService"],
    outcome: "A reward loop players can read under pressure, with every state clearly distinct.",
    why: "Systems UI lives or dies on legibility. If a player has to decode it, they stop engaging with it.",
  },
  {
    img: "/work/kitchen.jpg",
    title: "Kitchen",
    kind: "Crafting UI",
    client: "Independent creator",
    scope: ["Design", "Studio", "Animation"],
    problem:
      "A six-ingredient crafting system overwhelmed new players and buried the fun behind a wall of options.",
    solution:
      "Reduced the load to one readable board — ingredients, recipe, and result in a single view — with satisfying craft feedback on every action.",
    deliverables: ["Crafting interface", "Ingredient / recipe / result components", "Success & fail states", "Studio implementation", "Tween feedback"],
    tools: ["Figma", "Roblox Studio", "TweenService"],
    outcome: "A deep system that feels obvious in the first minute of play.",
    why: "Complexity is the enemy of onboarding. The best crafting UI makes a deep system feel simple.",
  },
  {
    img: "/work/store.jpg",
    title: "Store & Gifting",
    kind: "Store UI",
    client: "Independent creator",
    scope: ["Design", "Studio", "Animation"],
    problem:
      "Tabs, tiers, and gifting were crammed into one flow players kept getting lost inside.",
    solution:
      "Split buying-for-self from gifting into two clean paths that share one visual language, and made tier comparison instant so the value is obvious before the tap.",
    deliverables: ["Store UI", "Tabbed tiers", "Gifting flow", "Recipient & confirmation states", "Studio build + animation"],
    tools: ["Figma", "Roblox Studio", "TweenService"],
    outcome: "Two clear paths where there used to be one confusing one.",
    why: "Every extra decision is a chance to lose the player. Good store UI removes decisions, not options.",
  },
];

// Three packages. Priced by scope, not by the frame.
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

// Why Premium exists — shown under the pricing grid.
export const premiumNote =
  "Premium isn't more screens. It's the motion and polish that separate an interface that works from one players remember — animation, micro-interactions, and a final pass on every detail.";

// Process — 6 steps. Icons are drawn inline in the component.
export const process = [
  { n: "01", key: "discovery", h: "Discovery", p: "We start with your game, your player, and the problem the UI has to solve — so nothing gets designed on a guess." },
  { n: "02", key: "research", h: "Research", p: "I study how similar systems behave and where players get stuck, then map the flows and states before anything gets drawn." },
  { n: "03", key: "design", h: "Design", p: "High-fidelity screens and every state — hover, active, empty, error. Pixel-level polish, on-brand for your game." },
  { n: "04", key: "implementation", h: "Implementation", p: "I build it inside Roblox Studio: responsive scaling, correct anchoring, and a clean hierarchy your developers can maintain." },
  { n: "05", key: "animation", h: "Animation", p: "Tweens and micro-interactions that turn a static layout into something that feels responsive and refined." },
  { n: "06", key: "delivery", h: "Delivery", p: "Documented, organized handoff — ready for scripting and built to scale with your game." },
];

// Why work with me — the differentiators.
export const why = [
  { h: "Roblox-native", p: "I design for how Roblox players behave and how Studio actually works — not a mockup that breaks the moment it ships." },
  { h: "I implement, not just design", p: "Most designers hand you a Figma file and stop there. I build it in Studio myself, so nothing gets lost in translation." },
  { h: "Motion is built in", p: "Animation isn't an afterthought. Feedback and micro-interactions are designed from the first frame, not bolted on later." },
  { h: "Clear communication", p: "You get updates at every stage and a real timeline up front — no silence, no guesswork." },
  { h: "Clean & scalable", p: "Named layers, reusable components, a hierarchy your team can build on for years without a rewrite." },
  { h: "Production-ready", p: "Everything is delivered organized and ready for scripting — the last 10% of detail is where I spend the most time." },
];

export const faqs = [
  { q: "How does pricing work?", a: "By scope, not by the frame. Each package is a starting point; I give you a fixed quote up front based on what your game actually needs — no hourly guessing, no surprise add-ons." },
  { q: "How long does a project take?", a: "It depends on scope. A single system is quick; full product UI takes longer. Either way you get a real timeline before any work begins, and I keep you updated throughout." },
  { q: "Can you implement inside Roblox Studio?", a: "Yes — it's core to what I do. I don't just hand off a Figma file; I build responsive, properly-anchored UI directly in Studio so it works in your live game exactly as designed." },
  { q: "Can you animate the UI?", a: "Yes. Tweening and micro-interactions are part of the work — the difference between UI that looks fine and UI that feels refined. It's the focus of the Premium package." },
  { q: "Can you work with our existing UI?", a: "Absolutely. I can refine, rebuild, or extend what you already have while keeping it consistent with your game's identity — no need to start from zero." },
  { q: "Do you only work on Roblox?", a: "It's my specialty and where I'm strongest. I design specifically for how Roblox players behave and how Studio works — that focus is the point." },
  { q: "What do you need to get started?", a: "Your game, the problem you're solving, and any references you like. Rough is fine — I'll turn it into a plan and a timeline." },
];

export const testimonials = [
  { avatar: "/avatars/tangerine.gif", name: "Tangerine", role: "Client", quote: "Fast, efficient, and communicated the whole way. Implemented every revision without complaint and checked in after to make sure I was happy." },
  { avatar: "/avatars/cyy.gif", name: "CYY", role: "Client", quote: "Fast and efficient, with genuinely good quality." },
  { avatar: "/avatars/aomine.webp", name: "aomine", role: "Client", quote: "Quality work, always on time. Great to work with and amazing at what he does." },
];

// Final CTA.
export const contact = {
  headline: ["Ready to build something", "players remember?"],
  sub: "Tell me about your game, your goals, and where you are in development. I'll recommend the best approach and provide a tailored quote. Discord is the fastest way to reach me.",
  ctaPrimary: { label: "Start the conversation", href: profile.discordUrl },
  ctaSecondary: { label: "View work", href: "#work" },
};

export const socials = [
  { label: "Discord", handle: ".hammody", href: profile.discordUrl, platform: "discord" },
  { label: "Roblox", handle: "H4MMODY", href: profile.robloxUrl, platform: "roblox" },
  { label: "X", handle: "@__Hammody", href: profile.xUrl, platform: "x" },
];
