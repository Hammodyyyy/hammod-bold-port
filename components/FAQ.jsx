import { faqs } from "@/lib/data";
export default function FAQ() {
  return (
    <section className="sec wrap" id="faq">
      <div className="chapter reveal"><span className="c">[ 05 / 08 ]</span><span className="t">Objections, Handled</span></div>
      <div className="double" style={{ marginBottom: 30 }}>
        <h2 data-lines>
          <span className="clip"><span className="ln">You&apos;re thinking it.</span></span>
          <span className="clip"><span className="ln b">I&apos;ll answer it.</span></span>
        </h2>
      </div>
      <div className="faq">
        {faqs.map((f, i) => (
          <details key={i} {...(i === 0 ? { open: true } : {})}>
            <summary data-cursor>{f.q}<span className="plus">+</span></summary>
            <div className="fa"><p>{f.a}</p></div>
          </details>
        ))}
      </div>
    </section>
  );
}
