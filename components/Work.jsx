import { work } from "@/lib/data";
export default function Work() {
  return (
    <section className="sec wrap" id="work">
      <div className="chapter"><span className="c">[ 04 / 08 ]</span><span className="t">The Receipts</span></div>
      <div className="double" style={{ marginBottom: 44 }}>
        <h2 className="reveal">Don&apos;t take<br /><span className="b">my word.</span></h2>
      </div>
      <div className="work-grid">
        {work.map((w, i) => (
          <div className="work-card reveal" key={i} data-cursor>
            <div className="wimg"><img src={w.img} alt={`${w.title} — ${w.kind}`} loading="lazy" /></div>
            <div className="wmeta"><span className="wt">{w.title}</span><span className="wc">{w.kind}</span></div>
            <div className="wq">{w.quip}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
