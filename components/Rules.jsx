import { rules } from "@/lib/data";
export default function Rules() {
  return (
    <section className="sec wrap" id="rules">
      <div className="chapter reveal"><span className="c">[ 01 / 08 ]</span><span className="t">The House Rules</span></div>
      <div className="double" style={{ marginBottom: 40 }}>
        <h2 data-lines>
          <span className="clip"><span className="ln">Rules meet design.</span></span>
          <span className="clip"><span className="ln b">Design meets rules.</span></span>
        </h2>
      </div>
      <div className="rules-list">
        {rules.map((r, i) => (
          <div className="rule" key={i} data-cursor>
            <span className="rn">{String(i + 1).padStart(3, "0")}</span>
            <span className="rt">{r}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
