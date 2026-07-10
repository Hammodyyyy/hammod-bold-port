import { why } from "@/lib/data";

function Dot() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2 15 9l7 .5-5.5 4.5L18.5 21 12 17l-6.5 4 2-7L2 9.5 9 9z" />
    </svg>
  );
}

export default function WhyMe() {
  return (
    <section className="sec wrap" id="why">
      <div className="sec-head">
        <span className="eyebrow mono"><span className="dot"></span>Why Work With Me</span>
        <h2 className="reveal">Most designers hand you a file. I hand you a result.</h2>
        <p className="reveal">The difference between a mockup and shipped UI is everything that happens after the Figma file. That's the part I own.</p>
      </div>
      <div className="why-grid">
        {why.map((w, i) => (
          <div className="why card reveal" key={i}>
            <div className="ic"><Dot /></div>
            <h3>{w.h}</h3>
            <p>{w.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
