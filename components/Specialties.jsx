import { specialties } from "@/lib/data";

export default function Specialties() {
  return (
    <section className="sec wrap" id="specialties">
      <div className="sec-head">
        <span className="eyebrow mono reveal"><span className="dot"></span>What I Design</span>
        <h2 className="reveal">Whatever your game needs on screen.</h2>
        <p className="reveal">From the shop that drives your revenue to the HUD players stare at all match — I design and build the systems that carry your game.</p>
      </div>
      <div className="spec-grid">
        {specialties.map((s) => (
          <div className="spec card reveal" key={s.n}>
            <span className="num">{s.n}</span>
            <h3>{s.h}</h3>
            <p>{s.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
