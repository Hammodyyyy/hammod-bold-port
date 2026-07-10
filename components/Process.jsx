import { process } from "@/lib/data";
export default function Process() {
  return (
    <section className="sec wrap" id="process">
      <div className="chapter reveal"><span className="c">[ 02 / 08 ]</span><span className="t">How This Goes</span></div>
      <div className="double" style={{ marginBottom: 50 }}>
        <h2 data-lines>
          <span className="clip"><span className="ln">Easy for you.</span></span>
          <span className="clip"><span className="ln b">Hard part&apos;s mine.</span></span>
        </h2>
      </div>
      <div className="proc-grid">
        {process.map((p) => (
          <div className="proc reveal" key={p.n}>
            <div className="pn">{p.n}</div>
            <h3>{p.h}</h3>
            <p>{p.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
