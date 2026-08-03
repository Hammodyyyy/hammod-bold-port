import { services, priceUnit, pricingHead, priceNote } from "@/lib/data";

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
        <span className="eyebrow mono reveal"><span className="dot"></span>{pricingHead.eyebrow}</span>
        <h2 className="reveal">{pricingHead.h}</h2>
        <p className="reveal">{pricingHead.p}</p>
      </div>

      <div className="svc-grid">
        {services.map((s) => (
          <div className={`svc card reveal${s.highlight ? " hot" : ""}`} key={s.tier}>
            {s.highlight && <span className="badge">Most Popular</span>}
            <div className="tier">{s.tier}</div>
            <div className="price">{s.price}<span className="unit">{priceUnit}</span></div>
            <div className="forwho">{s.forWho}</div>
            <ul>
              {s.features.map((f) => (<li key={f}><Check />{f}</li>))}
            </ul>
            <div className="sbtn">
              <a href="#contact" className={`btn magnetic ${s.highlight ? "btn-fill" : "btn-line"}`} data-cursor>
                {s.cta}
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="scope-note reveal">{priceNote.main}</p>
      <p className="scope-fine reveal">
        {priceNote.small}{" "}
        <a href="#contact" data-cursor>{priceNote.smallLink}</a>
      </p>
    </section>
  );
}
