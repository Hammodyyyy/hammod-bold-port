import { work } from "@/lib/data";

export default function Work() {
  return (
    <section className="sec wrap" id="work">
      <div className="sec-head">
        <span className="eyebrow mono reveal"><span className="dot"></span>Selected Work</span>
        <h2 className="reveal">Case studies, not screenshots.</h2>
        <p className="reveal">Each project started as a real problem — a system players couldn&apos;t read, a flow they got lost in. Here&apos;s what I changed, and why it worked.</p>
      </div>

      <div className="cases">
        {work.map((w, i) => (
          <article className="case card reveal" key={i} data-cursor>
            <div className="case-in">
              <div className="case-media">
                <img src={w.img} alt={`${w.title} — ${w.kind}`} loading="lazy" />
              </div>
              <div className="case-body">
                <div className="case-head">
                  <div>
                    <h3 className="ct">{w.title}</h3>
                    <div className="cclient">{w.kind} · {w.client}</div>
                  </div>
                  <div className="scope" aria-label="Scope of work">
                    {w.scope.map((s, j) => (<span className="badge" key={j}>{s}</span>))}
                  </div>
                </div>

                <div className="case-cols">
                  <div className="case-block">
                    <div className="k">Problem</div>
                    <div className="v">{w.problem}</div>
                  </div>
                  <div className="case-block">
                    <div className="k">Solution</div>
                    <div className="v">{w.solution}</div>
                  </div>
                </div>

                <div className="case-cols">
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

                <div className="case-block">
                  <div className="k">Why it matters</div>
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
