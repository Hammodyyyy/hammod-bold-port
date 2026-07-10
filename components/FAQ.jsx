import { faqs } from "@/lib/data";
export default function FAQ() {
  return (
    <section className="sec wrap" id="faq">
      <div className="chapter"><span className="c">[ 05 / 08 ]</span><span className="t">Objections, Handled</span></div>
      <div className="double" style={{ marginBottom: 30 }}>
        <h2 className="reveal">You&apos;re thinking it.<br /><span className="b">I&apos;ll answer it.</span></h2>
      </div>
      <div className="faq">
        {faqs.map((f, i) => (
          <details key={i} {...(i === 0 ? { open: true } : {})}>
            <summary data-cursor>{f.q}<span className="plus">+</span></summary>
            <div className="fa">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
