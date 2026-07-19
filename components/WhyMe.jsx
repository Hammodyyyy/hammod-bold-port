import { why } from "@/lib/data";

export default function WhyMe() {
  return (
    <section className="sec wrap" id="why">
      <div className="sec-head">
        <span className="eyebrow mono reveal"><span className="dot"></span>Why Work With Me</span>
        <h2 className="reveal">Most designers hand you a file. I hand you a result.</h2>
        <p className="reveal">The gap between a mockup and shipped UI is everything that happens after the Figma file — and that&apos;s the part I own.</p>
      </div>
      <div className="why-grid">
        {why.map((w, i) => (
          <div className="why reveal" key={i}>
            <h3>{w.h}</h3>
            <p>{w.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
