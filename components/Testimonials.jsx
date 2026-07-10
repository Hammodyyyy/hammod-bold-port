import { testimonials, metrics } from "@/lib/data";

export default function Testimonials() {
  const big = testimonials.find((t) => t.big);
  const rest = testimonials.filter((t) => !t.big);
  return (
    <section className="sec wrap" id="results">
      <div className="sec-head">
        <span className="eyebrow mono"><span className="dot"></span>Results &amp; Words</span>
        <h2 className="reveal">The proof, in their words.</h2>
      </div>

      <div className="metrics reveal">
        {metrics.map((m, i) => (
          <div className="metric" key={i}>
            <div className="mv">{m.v}</div>
            <div className="ml">{m.l}</div>
          </div>
        ))}
      </div>

      <div className="quotes">
        <div className="q big card reveal">
          <div className="stars">★★★★★</div>
          <div className="qt">{big.quote}</div>
          <div className="who">
            <div className="av"><img src={big.avatar} alt={`${big.name} avatar`} /></div>
            <div><div className="nm">{big.name}</div><div className="rl">{big.role}</div></div>
          </div>
        </div>
        {rest.map((t, i) => (
          <div className="q card reveal" key={i}>
            <div className="stars">★★★★★</div>
            <div className="qt">{t.quote}</div>
            <div className="who">
              <div className="av"><img src={t.avatar} alt={`${t.name} avatar`} /></div>
              <div><div className="nm">{t.name}</div><div className="rl">{t.role}</div></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
