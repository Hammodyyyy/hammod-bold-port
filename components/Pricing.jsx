import { tiers, pricingHead, priceNote, ctaLabel } from "@/lib/data";
import Heading from "@/components/Heading";
import RollText from "@/components/RollText";

// Per-screen pricing in three columns. Only the full interface gets a panel,
// so the eye lands on one plan. On hover the card lifts, a line sweeps across
// its top, the price rolls and the bullets stretch one after another.
export default function Pricing() {
  return (
    <section className="sec wrap" id="pricing">
      <Heading>{pricingHead.h}</Heading>
      <p className="sec-p reveal">{pricingHead.p}</p>

      <div className="tiers">
        {tiers.map((t) => (
          <article className={`tier reveal${t.highlight ? " hot" : ""}`} key={t.tier}>
            <h3>{t.tier}</h3>
            <div className="price">
              <span className="amt"><RollText text={t.price} /></span>
              {t.unit && <span className="unit">{t.unit}</span>}
              {t.was && <s className="was" aria-label={`instead of ${t.was}`}>{t.was}</s>}
            </div>
            <div className="tier-sub">{t.sub}</div>
            <p className="tier-desc">{t.desc}</p>
            <ul>
              {t.features.map((f, i) => (<li key={f} style={{ "--i": i }}>{f}</li>))}
            </ul>
            <a href="#contact" className={`btn roll-host ${t.highlight ? "btn-accent" : "btn-line"}`}><RollText text={ctaLabel} /></a>
          </article>
        ))}
      </div>

      <p className="price-note reveal">{priceNote}</p>
    </section>
  );
}
