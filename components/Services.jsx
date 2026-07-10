import { services, premiumNote } from "@/lib/data";

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Services() {
  return (
    <section className="sec wrap" id="services">
      <div className="sec-head">
        <span className="eyebrow mono"><span className="dot"></span>Pricing</span>
        <h2 className="reveal">Priced by scope, not by the frame.</h2>
        <p className="reveal">Pick the level your game needs. Each package is a starting point — you get a fixed quote up front, with no hourly guessing or surprise add-ons.</p>
      </div>

      <div className="svc-grid">
        {services.map((s, i) => (
          <div className={`svc card reveal${s.highlight ? " hot" : ""}`} key={i}>
            {s.highlight && <span className="badge">Most Popular</span>}
            <div className="tier">{s.tier}</div>
            <div className="price">{s.price}</div>
            <div className="forwho">{s.forWho}</div>
            <ul>
              {s.features.map((f, j) => (<li key={j}><Check />{f}</li>))}
            </ul>
            <div className="sbtn">
              <a href="#contact" className={`btn magnetic ${s.highlight ? "btn-fill" : "btn-line"}`} data-cursor>
                {s.price === "Custom Quote" ? "Request a quote" : "Start with " + s.tier}
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="premium-note reveal"><b>Why Premium?</b> {premiumNote}</p>
    </section>
  );
}
