import Footer from "@/components/Footer";
import { profile } from "@/lib/data";

export const metadata = {
  title: "Terms · Hammody",
  description: "Payment split, revision policy, scope changes, and delivery for Roblox UI projects.",
};

// Plain-language terms. Everything here matches what the main page already
// states, so the two never drift apart. No .reveal classes: SiteEffects only
// runs on the home page, so anything tagged with it would stay invisible here.
const SECTIONS = [
  {
    h: "Payment",
    p: [
      "Projects are split 50% upfront and 50% on delivery. The upfront half locks your slot in the schedule and is what starts the work.",
      "You get a fixed quote before anything begins. The price does not change unless the scope does, and any change is quoted and agreed first.",
    ],
  },
  {
    h: "Revisions",
    p: [
      "Each tier includes the number of revision rounds listed on its card: one for single frames, two for a screen pack, three for a full interface. A round means one consolidated pass of feedback, not one comment.",
      "Rounds cover refining what was agreed. Redirecting a screen to a different concept after it is built counts as new scope.",
    ],
  },
  {
    h: "Scope changes",
    p: [
      "Pricing is per screen: $75 a screen for one to four screens, $60 a screen from five. Scope is your game's actual screen list, agreed in writing before the project starts. Complex screens such as skill trees, quest hubs, crafting, and trading take more work than a simple menu, so we settle where they land up front.",
      "Screens added beyond that list are quoted before any extra work starts. Nothing is added to your invoice without your say-so.",
    ],
  },
  {
    h: "Delivery",
    p: [
      "You receive the work built directly in Roblox Studio: responsive scaling, correct anchoring, and a named, organized hierarchy your developers can build on. Implementation is part of every tier, not a paid extra.",
      "Every tier includes a post-delivery fixes window: 7 days for single frames, 30 for a screen pack, 60 for a full interface. Anything that breaks or needs adjusting inside that window is on me.",
      "Files are yours to use in your game. I may show the work in my portfolio unless you ask me not to.",
    ],
  },
];

export default function Terms() {
  return (
    <>
            <div className="doc-page">
        <main className="sec wrap doc">
          <a href="/" className="doc-back">← Back to site</a>
          <h1>Terms</h1>
          <p className="doc-lead">
            The short version of how a project runs. If anything here is unclear, ask me on Discord before you book and I will spell it out.
          </p>

          {SECTIONS.map((s) => (
            <section className="doc-sec" key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((line) => (<p key={line}>{line}</p>))}
            </section>
          ))}

          <p className="doc-foot">
            Last updated October 2026. Questions? <a href={profile.discordUrl} target="_blank" rel="noopener">Message me on Discord.</a>
          </p>
        </main>
        <Footer />
      </div>
    </>
  );
}
