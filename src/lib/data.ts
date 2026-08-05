// ─────────────────────────────────────────────────────────────
// CONTENT SOURCE OF TRUTH
// Ported from the main site (hammody.me). Only real, verifiable claims.
// House style: no em dashes anywhere in visitor-facing copy.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Hammody',
  role: 'Roblox UI Design · Studio Implementation',
  avatar: '/avatars/hammody.png',
  discordUrl: 'https://discordapp.com/users/608785550656274609',
  robloxUrl: 'https://www.roblox.com/users/144423870/profile',
  xUrl: 'https://x.com/__Hammody',
  siteUrl: 'https://hammody.me',
};

// Availability signal. Set open:false to show "Booked".
export const availability = {
  open: true,
  label: 'Taking 2 projects for August',
};

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
];

export const hero = {
  eyebrow: 'Roblox UI Design · Studio Implementation',
  headline: ['Premium UI systems', 'for Roblox games.'],
  sub: 'I design, animate, and build interfaces for Roblox games: shops, HUDs, menus, and full systems. Everything arrives working inside Studio, with responsive scaling, interactive states, and a clean hierarchy your developers can build on.',
  short: 'a roblox ui designer building interfaces that ship working inside studio',
  ctaPrimary: { label: 'Book a project', href: '#contact' },
  ctaSecondary: { label: 'View work', href: '#work' },
};

// Social proof. REAL clients only.
export const clients = [
  { name: 'DoBig', logo: '/clients/dobig.png' },
  { name: 'Novaly', logo: '/clients/novaly.png' },
];

export const studioDemo = {
  eyebrow: 'See It Running',
  h: 'Not a mockup. A working interface.',
  p: 'Every project ships animated and wired up, tested in Studio before it reaches you.',
  video: '/work/studio-demo.mp4',
  poster: '/work/studio-demo-poster.jpg',
};

export const about = {
  h: 'About me',
  text: "I design, animate, and build interfaces for Roblox games, and everything I make arrives working inside Studio instead of sitting in a Figma file. Shops, HUDs, menus, quest hubs, full systems. Responsive scaling, interactive states, and a hierarchy your developers can actually build on. Let's build something players remember!",
};

// "What I design", organized by UI system type.
export const specialties = [
  {
    n: '01',
    h: 'Shops & Monetization',
    p: 'Storefronts, bundles, and purchase flows built to be understood and used in the first second.',
  },
  {
    n: '02',
    h: 'HUDs & In-Game UI',
    p: 'Health, currency, abilities, minimaps: the always-on layer, kept calm and legible under pressure.',
  },
  {
    n: '03',
    h: 'Progression & Quests',
    p: 'Quest hubs, battle passes, and reward loops that read at a glance and keep players coming back.',
  },
  {
    n: '04',
    h: 'Menus & Lobbies',
    p: 'Main menus, settings, and lobbies that set the tone the moment your game loads.',
  },
  {
    n: '05',
    h: 'Inventories & Crafting',
    p: 'Deep systems like inventories, crafting, and trading, engineered to feel simple instead of overwhelming.',
  },
];

export interface Project {
  n: string;
  img: string;
  title: string;
  tag: string;
  p: string;
  /** What was delivered. Scope only, never invented outcomes or metrics. */
  role: string;
  /** Concrete interface problems the screen had to solve. */
  solves: string[];
}

export const projects: Project[] = [
  {
    n: '01',
    img: '/work/questlog.jpg',
    title: 'Quest Log',
    tag: 'RPG',
    p: 'A main and side quest hub with tracked objectives, location tags, and a reward rail, built to stay readable as the quest list grows.',
    role: 'UI design · Studio build',
    solves: [
      'Main and side quests separated without a second screen',
      'Objective list stays scannable as quests accumulate',
      'Rewards readable at a glance before committing',
    ],
  },
  {
    n: '02',
    img: '/work/shop.jpg',
    title: 'Shop UI',
    tag: 'Monetization',
    p: 'Bundle and VIP offers with clear value framing, priced tiles, and a purchase flow a player understands in the first second.',
    role: 'UI design · Studio build',
    solves: [
      'Bundle contents legible before the price is considered',
      'Value framing that does not rely on reading fine print',
      'Offer hierarchy holds up when new products are added',
    ],
  },
  {
    n: '03',
    img: '/work/quests.jpg',
    title: 'Quest UI',
    tag: 'Systems',
    p: 'Daily, weekly, and seasonal tabs with locked states, progress counters, and a pick-a-reward step at the end of the loop.',
    role: 'UI design · Studio build · Animation',
    solves: [
      'Six quest cadences housed in one screen',
      'Locked and in-progress states read differently at a glance',
      'Reward selection sits at the end of the loop, not beside it',
    ],
  },
  {
    n: '04',
    img: '/work/kitchen.jpg',
    title: 'Kitchen',
    tag: 'Crafting',
    p: 'An ingredient and modifier crafting screen with live flavour bars and a star rating that responds as the player builds a recipe.',
    role: 'UI design · Studio build · Animation',
    solves: [
      'Six flavour values tracked without burying the ingredients',
      'Modifier slots show locked and empty states in one row',
      'Result quality visible while building, not after cooking',
    ],
  },
  {
    n: '05',
    img: '/work/store.jpg',
    title: 'Store & Gifting',
    tag: 'Store',
    p: 'A tabbed store with gamepasses, cases, and boosts, plus a gifting panel wired alongside it for sending items to friends.',
    role: 'UI design · Studio build',
    solves: [
      'Four store categories without a nested menu',
      'Gifting runs beside the store instead of replacing it',
      'Bundle tiles stay consistent across every tab',
    ],
  },
];

// Pricing is per project, quoted against the game's actual screens.
// The trailing "+" on each price is intentional. Do not remove it.
export const priceUnit = '/project';

export const pricingHead = {
  eyebrow: 'Pricing',
  h: 'One price. Designed, animated, and built.',
  p: "Every package covers your game's full interface, implemented in Roblox Studio. You get a fixed quote before anything starts.",
};

export const services = [
  {
    tier: 'Starter',
    price: '$450+',
    forWho: 'Enough to launch',
    features: [
      'Designed and built in Studio',
      '1 concept direction',
      '1 to 2 weeks turnaround',
      '1 revision round',
      'Progress update on delivery',
      '7 days of post-delivery fixes',
    ],
    cta: 'Start with Starter',
    highlight: false,
  },
  {
    tier: 'Core',
    price: '$800+',
    forWho: 'A complete front end',
    features: [
      'Designed and built in Studio',
      '2 concept directions',
      'Interactive wiring: tabs switch, panels open and close, states respond',
      '2 to 3 weeks turnaround',
      '2 revision rounds',
      'Weekly progress updates',
      '30 days of post-delivery fixes',
    ],
    cta: 'Start with Core',
    highlight: true,
  },
  {
    tier: 'Complete',
    price: '$1,400+',
    forWho: 'A full design system',
    features: [
      'Designed and built in Studio',
      '2 concept directions',
      'Interactive wiring: tabs switch, panels open and close, states respond',
      'Full animation pass: tweening and transitions',
      '3 to 4 weeks turnaround',
      '3 revision rounds',
      'Weekly progress updates plus a call',
      '60 days of post-delivery fixes',
    ],
    cta: 'Start with Complete',
    highlight: false,
  },
];

export const priceNote = {
  main: "Every package is quoted against your game's actual screens. You'll get the exact list, in writing, before anything starts.",
  small: 'Larger scopes and ongoing studio work:',
  smallLink: 'get in touch for a tailored quote.',
};

export const steps = [
  {
    n: '01',
    h: 'Pick your package',
    p: "Choose Starter, Core, or Complete, or just tell me what your game needs and I'll tell you which one fits. You get a fixed quote and a real timeline before anything begins.",
  },
  {
    n: '02',
    h: 'Kick off',
    p: "50% upfront to lock your slot. Send me your game, your references, and anything you already have. I'll come back with questions before I open Figma.",
  },
  {
    n: '03',
    h: 'Design, build, animate',
    p: 'Every screen gets designed with all its states, then built in Studio with responsive scaling and a clean hierarchy. Interactions and animation are wired up and tested before you see it.',
  },
  {
    n: '04',
    h: 'Handoff',
    p: 'Final 50% on delivery. You get organized, properly named Studio files, ready for your developers.',
  },
];

export const toolkit = [
  { name: 'Figma', role: 'Design & prototyping', key: 'figma' as const },
  { name: 'Roblox Studio', role: 'Build & implementation', key: 'roblox' as const },
  { name: 'Photoshop', role: 'Textures & assets', key: 'photoshop' as const },
];

export const faqs = [
  {
    q: 'How does pricing work?',
    a: "Priced per project, not per screen. Packages cover your game's full interface, and implementation in Studio is included in every one. You get a fixed quote against your actual screen list before work starts.",
  },
  {
    q: 'Are your prices fixed?',
    a: 'Package prices are a starting point that depends on how many screens your game needs and how complex they are. You always get a fixed number in writing before anything begins.',
  },
  {
    q: 'What if my game only needs a few screens?',
    a: "Starter covers smaller projects. Tell me what you need and I'll quote it.",
  },
  {
    q: 'Does the UI come imported inside Roblox Studio?',
    a: 'Yes, always, in every package. Built directly in Studio with responsive scaling, correct anchoring, and a hierarchy your developers can work in.',
  },
  {
    q: 'Can you animate the UI?',
    a: 'Yes. Interactive wiring is included from Core up, so tabs switch and panels open without your developers writing menu plumbing. Complete adds a full animation pass with tweening and transitions.',
  },
  {
    q: 'How long does a project take?',
    a: 'It depends on scope. Starter runs 1 to 2 weeks, Core 2 to 3, and Complete 3 to 4. You get a real timeline before any work begins, and I keep you updated throughout.',
  },
  {
    q: 'Can you work with our existing UI?',
    a: "Absolutely. I can refine, rebuild, or extend what you already have while keeping it consistent with your game's identity, so there's no need to start from zero.",
  },
  {
    q: 'What happens after delivery?',
    a: 'Every package includes a fixes window, 7 to 60 days depending on tier. If something breaks or needs adjusting inside that window, I handle it.',
  },
  {
    q: 'What do you need to get started?',
    a: "Your game, the problem you're solving, and any references you like. Rough is fine. I'll turn it into a plan and a timeline.",
  },
];

export const testimonials = [
  {
    avatar: '/avatars/tangerine.gif',
    name: 'Tangerine',
    role: 'Client',
    stars: 5,
    quote:
      'Fast, efficient, and communicated the whole way. Implemented every revision without complaint and checked in after to make sure I was happy.',
  },
  {
    avatar: '/avatars/cyy.gif',
    name: 'CYY',
    role: 'Client',
    stars: 5,
    quote: 'Fast and efficient, with genuinely good quality.',
  },
  {
    avatar: '/avatars/aomine.webp',
    name: 'aomine',
    role: 'Client',
    stars: 5,
    quote:
      'Quality work, always on time. Great to work with and amazing at what he does.',
  },
];

export const contact = {
  headline: ['Ready to build something', 'players remember?'],
  sub: "Tell me about your game and where you are in development. I'll recommend the right package and send a fixed quote before any work starts. Discord is the fastest way to reach me.",
  ctaPrimary: { label: 'Book a project on Discord', href: profile.discordUrl },
  ctaSecondary: { label: 'View work', href: '#work' },
  replyTime: 'I reply within 12 hours.',
};

export const socials = [
  { label: 'Discord', handle: 'hammodyy', href: profile.discordUrl, platform: 'discord' as const },
  { label: 'Roblox', handle: 'H4MMODY', href: profile.robloxUrl, platform: 'roblox' as const },
  { label: 'X', handle: '@__Hammody', href: profile.xUrl, platform: 'x' as const },
];
