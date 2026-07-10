import { work } from "@/lib/data";

export default function Work() {
  return (
    <section className="sec wrap" id="work">
      <div className="sec-head">
        <span className="eyebrow mono"><span className="dot"></span>Selected Work</span>
        <h2 className="reveal">Not screenshots. Case studies.</h2>
        <p className="reveal">Every project below started as a business problem — players bouncing, systems no one understood, revenue left on the table. Here's what I changed and why it worked.</p>
      </div>

      <div className="cases">
        {work.map((w, i) => (
          <article className="case card reveal" key={i} data-cursor>
            <div className="case-in">
              <div className="case-media" style={{ order: i % 2 === 1 ? 2 : 0 }}>
                <span className="case-tag">{w.kind}</span>
                <img src={w.img} alt={`${w.title} — ${w.kind}`} loading="lazy" />
              </div>
              <div className="case-body">
                <h3 className="ct">{w.title}</h3>
                <div className="cclient">For {w.client}</div>

                <div className="case-cols">
                  <div className="case-block">
                    <div className="k">The problem</div>
                    <div className="v">{w.problem}</div>
                  </div>
                  <div className="case-block">
                    <div className="k">The solution</div>
                    <div className="v">{w.solution}</div>
                  </div>
                </div>

                <div className="case-cols" style={{ marginTop: 4 }}>
                  <div className="case-block">
                    <div className="k">Deliverables</div>
                    <div className="chips">
                      {w.deliverables.map((d, j) => (<span className="chip" key={j}>{d}</span>))}
                    </div>
                  </div>
                  <div className="case-block">
                    <div className="k">Tools</div>
                    <div className="chips">
                      {w.tools.map((t, j) => (<span className="chip" key={j}>{t}</span>))}
                    </div>
                  </div>
                </div>

                <div className="case-block" style={{ marginTop: 4 }}>
                  <div className="k">Why the design decisions matter</div>
                  <div className="v">{w.why}</div>
                </div>

                <div className="case-outcome">
                  <div className="k">Outcome</div>
                  <div className="v">{w.outcome}</div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
