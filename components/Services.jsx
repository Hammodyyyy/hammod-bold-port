import { services, upsell, profile } from "@/lib/data";

function Check() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Services() {
  return (
    <section className="sec wrap" id="services">
      <div className="sec-head">
        <span className="eyebrow mono"><span className="dot"></span>Services &amp; Packages</span>
        <h2 className="reveal">Priced by outcome, not by the frame.</h2>
        <p className="reveal">Pick the scope your game needs. Every package is a fixed quote up front — no hourly guessing, no surprise add-ons.</p>
      </div>

      <div className="svc-grid">
        {services.map((s, i) => (
          <div className={`svc card reveal${s.highlight ? " hot" : ""}`} key={i}>
            {s.highlight && <span className="badge">Most picked</span>}
            <div className="tier">{s.tier}</div>
            <div className="sname">{s.name}</div>
            <div className="price">{s.price}</div>
            <div className="forwho">{s.forWho}</div>
            <div className="ssum">{s.summary}</div>
            <ul>
              {s.features.map((f, j) => (<li key={j}><Check />{f}</li>))}
            </ul>
            <div className="snote">{s.note}</div>
            <div className="sbtn">
              <a href="#contact" className={`btn magnetic ${s.highlight ? "btn-fill" : "btn-line"}`} data-cursor>
                {s.price === "Custom" ? "Request a quote" : "Start with " + s.tier}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="upsell reveal">
        <div>
          <div className="u-tag">{upsell.tag}</div>
          <div className="u-name">{upsell.name}</div>
          <div className="u-copy">{upsell.copy}</div>
        </div>
        <a href={profile.discordUrl} target="_blank" rel="noopener" className="btn btn-fill magnetic" data-cursor>{upsell.cta} →</a>
      </div>
    </section>
  );
}
