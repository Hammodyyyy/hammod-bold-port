// ─────────────────────────────────────────────────────────────
// CONTENT SOURCE OF TRUTH
// Everything you might want to edit lives here. Anything wrapped in
// [brackets] or marked "TODO" is a placeholder — swap in your real
// numbers/clients before shipping. Only claims you confirmed are true
// are used; no invented tenure or visit counts.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Hammody",
  role: "Roblox UI/UX & Studio Implementation",
  discordUrl: "https://discordapp.com/users/608785550656274609",
  robloxUrl: "https://www.roblox.com/users/144423870/profile",
  xUrl: "https://x.com/__Hammody",
  siteUrl: "https://hammody.pages.dev",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

// Hero — answers who / what / why in one screen.
export const hero = {
  eyebrow: "Roblox UI/UX · Studio Implementation",
  // headline is split into lines; last line is the accented payoff
  headline: ["Interface design", "for Roblox games", "that convert."],
  sub: "I design and build the shops, HUDs, and systems players actually understand — and spend in. Shipped straight into Studio, animated, and built to move your numbers.",
  ctaPrimary: { label: "Start a project", href: "#contact" },
  ctaSecondary: { label: "View case studies", href: "#work" },
};

// Social proof — real names you confirmed you've worked with.
// Add/replace as needed. `wordmark` renders as clean text; drop in an
// <img> logo later if you have one.
export const clients = [
  { name: "Dobig" },
  { name: "Novaly" },
  { name: "Studio 3" }, // TODO: replace with a third real client name
  { name: "Studio 4" }, // TODO: replace with a real client name
  { name: "Studio 5" }, // TODO: replace with a real client name
];

// Case studies — each project reads as a case, not a screenshot.
// Fill the [bracketed] outcome lines with real, client-reported numbers
// when you have them; until then they stay honest and qualitative.
export const work = [
  {
    img: "/work/shop.jpg",
    title: "Neon Shop",
    kind: "Monetization UI",
    client: "Dobig", // TODO: confirm which client each project was for
    problem:
      "The old shop buried its best bundles three taps deep. Players opened it, got overwhelmed, and closed it — leaving revenue on the table.",
    solution:
      "Rebuilt around a single glanceable hierarchy: featured offer first, honest price anchoring, and a purchase flow that never makes the player stop and think. Every state designed and animated.",
    deliverables: ["Full shop UI", "20+ interaction states", "Purchase & confirm flow", "Studio implementation", "Tween animations"],
    tools: ["Figma", "Roblox Studio", "TweenService"],
    outcome: "Cleaner path to purchase and a shop players actually reopen. [Add client-reported conversion lift here.]",
    why: "A shop is a storefront. Players buy what they understand and want in the first second — clarity and desire are the whole job.",
  },
  {
    img: "/work/quests.jpg",
    title: "Quest System",
    kind: "Systems UI",
    client: "Novaly",
    problem:
      "Six quest types crammed into one panel. Players couldn't tell active from claimable, and drop-off on the reward loop was high.",
    solution:
      "Designed a calm information architecture — unmistakable status states, progress that reads at a glance, and a claim flow that feels earned. Motion used as feedback, never decoration.",
    deliverables: ["Quest hub", "6 quest-type templates", "Progress & claim states", "Empty / complete states", "Studio build + animation"],
    tools: ["Figma", "Roblox Studio", "TweenService"],
    outcome: "A reward loop players can read under pressure. [Add engagement / retention delta here.]",
    why: "Systems UI lives or dies on legibility. If a player has to decode it, they stop playing it.",
  },
  {
    img: "/work/kitchen.jpg",
    title: "Kitchen",
    kind: "Crafting UI",
    client: "Studio 3",
    problem:
      "A six-ingredient crafting system that overwhelmed new players and buried the fun behind a wall of options.",
    solution:
      "Reduced the cognitive load to one readable board — ingredients, recipe, and result in a single glance — with satisfying craft feedback on every action.",
    deliverables: ["Crafting interface", "Ingredient / recipe / result components", "Success & fail states", "Studio implementation", "Tween feedback"],
    tools: ["Figma", "Roblox Studio", "TweenService"],
    outcome: "A deep system that feels obvious in the first minute. [Add onboarding / completion metric here.]",
    why: "Complexity is the enemy of onboarding. The best crafting UI makes a deep system feel simple.",
  },
  {
    img: "/work/store.jpg",
    title: "Store & Gifting",
    kind: "Store UI",
    client: "Studio 4",
    problem:
      "Tabs, tiers, and gifting all crammed into one flow players kept getting lost inside.",
    solution:
      "Split buying-for-self from gifting into two clean paths that share one visual language, and made tier comparison instant so the value is obvious before the click.",
    deliverables: ["Store UI", "Tabbed tiers", "Gifting flow", "Recipient & confirmation states", "Studio build + animation"],
    tools: ["Figma", "Roblox Studio", "TweenService"],
    outcome: "Fewer dead-ends, faster decisions. [Add conversion / ARPU delta here.]",
    why: "Every extra decision is a chance to lose the sale. Good store UI removes decisions, not options.",
  },
];

// Service packages — scoped by outcome, not by the frame.
// Prices are ANCHORS you set. Showing a floor filters out hobby budgets
// and signals premium — recommended. Replace the amounts with yours.
export const services = [
  {
    tier: "Starter",
    name: "Core UI",
    price: "From $250", // TODO: set your real floor
    forWho: "Teams with their own developers who need design-only.",
    summary: "One focused system, designed to spec and ready for handoff.",
    features: [
      "1 UI system (shop, menu, or HUD)",
      "All key states designed",
      "Responsive-ready layout",
      "Source files + Figma handoff",
      "2 revision rounds",
    ],
    note: "Studio implementation & animation available as add-ons.",
    highlight: false,
  },
  {
    tier: "Professional",
    name: "System + Build",
    price: "From $600", // TODO: set your real floor
    forWho: "Studios that want it live in-game, not just designed.",
    summary: "A complete system, designed and implemented inside Roblox Studio.",
    features: [
      "Full UI system, multiple screens & states",
      "Responsive scaling & proper anchoring",
      "Studio implementation, built to maintain",
      "Core tween animations included",
      "3 revision rounds + handoff docs",
    ],
    note: "Most-picked. The sweet spot for serious games.",
    highlight: true,
  },
  {
    tier: "Premium",
    name: "Full Product UI",
    price: "Custom",
    forWho: "Studios shipping a flagship that needs to feel like a product.",
    summary: "End-to-end interface across your whole game, plus a system to keep it consistent.",
    features: [
      "Multiple systems (shop + quests + HUD…)",
      "Full responsive Studio implementation",
      "Complete animation & motion pass",
      "Reusable component library / design system",
      "Priority timeline + ongoing revisions",
    ],
    note: "For teams treating UI as a competitive advantage.",
    highlight: false,
  },
];

// The upsell — attach to any package.
export const upsell = {
  tag: "Add-on",
  name: "Motion & UI Animation Pass",
  copy: "Micro-interactions, transitions, and feedback tweens on every meaningful action. Static UI informs. Animated UI feels expensive — and expensive UI converts.",
  cta: "Add to any package",
};

// Process — the 6-step workflow.
export const process = [
  { n: "01", h: "Discovery", p: "We start with your game, your player, and the problem the UI has to solve. I ask the sharp questions so nothing gets designed on a guess." },
  { n: "02", h: "Wireframe", p: "Structure before style. I map flows and hierarchy so we agree on how it works before it gets pretty." },
  { n: "03", h: "UI Design", p: "High-fidelity screens and every state — hover, active, empty, error. Pixel-level polish, on-brand for your game." },
  { n: "04", h: "Studio Implementation", p: "I build it inside Roblox Studio: responsive scaling, correct anchoring, clean hierarchy your devs can maintain." },
  { n: "05", h: "Animation", p: "Tweens and micro-interactions that turn a static layout into something that feels responsive and premium." },
  { n: "06", h: "Delivery", p: "Documented, organized handoff. It runs in your live game and it's built to scale with it." },
];

// Why work with me — the differentiators.
export const why = [
  { h: "Roblox-native", p: "I design for how Roblox players actually behave and how Studio actually works — not a mockup that breaks the moment it ships." },
  { h: "I implement, not just design", p: "Most designers hand you a Figma file and vanish. I build it in Studio myself, so nothing gets lost in translation." },
  { h: "Motion is built in", p: "Animation isn't an afterthought. Feedback and juice are designed from the first frame, not bolted on later." },
  { h: "Fast, no ghosting", p: "You get updates, not silence. Clear timelines up front — and I hit them, every project." },
  { h: "Clean & scalable", p: "Named layers, reusable components, a structure your team can build on for years without a rewrite." },
  { h: "Premium polish", p: "The last 10% of detail that makes UI feel like a real product instead of an asset flip." },
];

// Metrics — keep these defensible. Edit to your real, verifiable numbers.
export const metrics = [
  { v: "Millions", l: "Players reached across shipped UI" }, // true if your games have M+ visits
  { v: "100%", l: "On-time, every project" }, // supported by client testimonials
  { v: "5.0★", l: "Average client rating" }, // supported by testimonials
  { v: "1–2 wks", l: "Typical single-system turnaround" },
];

export const faqs = [
  { q: "How does pricing work?", a: "By scope and outcome, not by the frame. You get a fixed quote up front based on what your game actually needs — no hourly guessing, no surprise add-ons. Bigger systems and full implementation cost more; you'll always know the number before we start." },
  { q: "How long does a project take?", a: "Most single systems ship in 1–2 weeks. Full product UI takes longer. Either way you get a real timeline before any work begins — and I hit it." },
  { q: "Can you implement inside Roblox Studio?", a: "Yes — it's a core part of what I do. I don't just hand off a Figma file; I build responsive, properly-anchored UI directly in Studio so it works in your live game exactly as designed." },
  { q: "Can you animate the UI?", a: "Yes. Tweening and micro-interactions are part of the work — the difference between UI that looks fine and UI that feels expensive. It's included in most packages and available as an add-on to any." },
  { q: "Can you work with our existing UI?", a: "Absolutely. I can refine, rebuild, or extend what you already have while keeping it consistent with your game's identity — no need to start from zero." },
  { q: "Do you only work on Roblox?", a: "It's my specialty and where I'm strongest. I design specifically for how Roblox players behave and how Studio actually works — that focus is exactly why studios bring me in." },
  { q: "What do you need to get started?", a: "Your game, the problem you're solving, and any references you like. Rough is fine — I'll turn it into a plan and a timeline, usually within a day." },
];

export const testimonials = [
  {
    big: true, avatar: "/avatars/tangerine.gif", name: "@Tangerine", role: "UI commission",
    quote: "Highly recommend Hammody for your UIs. Fast, efficient, communicated the whole way, and implemented every single revision without complaint. He even checked in after to make sure I was happy. You really can't get better than this.",
  },
  { avatar: "/avatars/cyy.gif", name: "@CYY", role: "UI commission", quote: "Fast & efficient with good quality." },
  { avatar: "/avatars/aomine.webp", name: "@aomine", role: "UI commission", quote: "Quality work, always on time. Great to work with and amazing at what he does — highly recommend." },
];

// Final CTA.
export const contact = {
  headline: ["Make your UI the reason", "players stay."],
  sub: "Tell me your game and what it needs. I'll come back with a plan and a timeline — usually within a day. Discord is the fastest way to reach me.",
  ctaPrimary: { label: "Start a project on Discord", href: profile.discordUrl },
  ctaSecondary: { label: "See the work", href: "#work" },
};

export const socials = [
  { label: "Discord — .hammody", href: profile.discordUrl },
  { label: "Roblox — H4MMODY", href: profile.robloxUrl },
  { label: "X — @__Hammody", href: profile.xUrl },
];
