import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="sec wrap" id="words">
      <div className="sec-head">
        <span className="eyebrow mono"><span className="dot"></span>Client Words</span>
        <h2 className="reveal">What it&apos;s like to work with me.</h2>
      </div>
      <div className="quotes">
        {testimonials.map((t, i) => (
          <div className="q reveal" key={i}>
            <div className="qt">“{t.quote}”</div>
            <div className="who">
              <div className="av"><img src={t.avatar} alt="" loading="lazy" /></div>
              <div><div className="nm">{t.name}</div><div className="rl">{t.role}</div></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
