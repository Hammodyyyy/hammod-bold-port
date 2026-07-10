import { testimonials } from "@/lib/data";
export default function Testimonials() {
  const big = testimonials.find((t) => t.big);
  const rest = testimonials.filter((t) => !t.big);
  return (
    <section className="sec wrap" id="words">
      <div className="chapter reveal"><span className="c">[ 06 / 08 ]</span><span className="t">Kind Words</span></div>
      <div className="double" style={{ marginBottom: 44 }}>
        <h2 data-lines>
          <span className="clip"><span className="ln">They said it.</span></span>
          <span className="clip"><span className="ln b">Not me.</span></span>
        </h2>
      </div>
      <div className="quotes">
        <div className="q big reveal">
          <div className="stars">★★★★★</div>
          <div className="qt">{big.quote}</div>
          <div className="who">
            <div className="av"><img src={big.avatar} alt={`${big.name} avatar`} /></div>
            <div><div className="nm">{big.name}</div><div className="rl">{big.role}</div></div>
          </div>
        </div>
        {rest.map((t, i) => (
          <div className="q reveal" key={i}>
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
