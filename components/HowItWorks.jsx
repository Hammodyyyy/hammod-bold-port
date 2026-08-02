import { steps } from "@/lib/data";

// Left-aligned step timeline: one spine down the left, cards in a single column.
// The rail segment on each step runs from its own node to the next one, so the
// spine starts at the first node and stops at the last. SiteEffects scrubs the
// fill and lights the nodes as they are passed.
export default function HowItWorks() {
  return (
    <section className="sec wrap" id="process">
      <div className="sec-head">
        <span className="eyebrow mono reveal"><span className="dot"></span>How It Works</span>
        <h2 className="reveal">From first message to handoff.</h2>
      </div>

      <div className="tl">
        {steps.map((s) => (
          <div className="tl-step reveal" key={s.n}>
            <span className="tl-rail" aria-hidden="true"><span className="tl-fill"></span></span>
            <span className="tl-node" aria-hidden="true"></span>
            <div className="tl-card card">
              <span className="tl-num" aria-hidden="true">{s.n}</span>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
