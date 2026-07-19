import { toolkit } from "@/lib/data";

export default function Toolkit() {
  return (
    <section className="sec wrap" id="toolkit">
      <div className="sec-head">
        <span className="eyebrow mono reveal"><span className="dot"></span>Toolkit</span>
        <h2 className="reveal">The tools behind the work.</h2>
      </div>
      <div className="toolkit reveal">
        {toolkit.map((t, i) => (
          <span className="tool" key={i}><span className="tdot" aria-hidden="true"></span>{t}</span>
        ))}
      </div>
    </section>
  );
}
