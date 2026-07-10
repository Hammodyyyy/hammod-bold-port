import { process } from "@/lib/data";

export default function Process() {
  return (
    <section className="sec wrap" id="process">
      <div className="sec-head">
        <span className="eyebrow mono"><span className="dot"></span>How I Work</span>
        <h2 className="reveal">A process that stays out of your way.</h2>
        <p className="reveal">Six steps from your brief to UI running in your live game. You get updates at every stage — never silence.</p>
      </div>
      <div className="proc-grid">
        {process.map((p) => (
          <div className="proc reveal" key={p.n}>
            <div className="pn">{p.n} — Step</div>
            <h3>{p.h}</h3>
            <p>{p.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
