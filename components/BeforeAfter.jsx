export default function BeforeAfter() {
  return (
    <section className="sec wrap" id="before-after">
      <div className="chapter"><span className="c">[ 03 / 08 ]</span><span className="t">Before / After</span></div>
      <div className="double" style={{ marginBottom: 40 }}>
        <h2 className="reveal">Spot the<br /><span className="b">difference.</span></h2>
      </div>
      <div className="ba-grid">
        <div className="ba bad reveal">
          <div className="ba-label"><span>Before — default UI</span><span>Players bounce</span></div>
          <div className="ba-stage">
            <div className="bland">
              <div className="bh"></div>
              <div className="brow"><span className="bb"></span><span className="bb"></span><span className="bb"></span></div>
              <div className="brow"><span className="bb"></span><span className="bb"></span><span className="bb"></span></div>
              <div className="bbtn">BUY?</div>
            </div>
          </div>
          <div className="ba-cap">Cramped, generic, confusing. The kind of UI players close in two seconds.</div>
        </div>
        <div className="ba good reveal">
          <div className="ba-label"><span>After — Hammody</span><span>Players stay</span></div>
          <div className="ba-stage"><img src="/work/shop.jpg" alt="Shop UI designed by Hammody" /></div>
          <div className="ba-cap">Clear hierarchy, real feel, a shop that actually sells. Same game — leveled up.</div>
        </div>
      </div>
    </section>
  );
}
