import { faqs } from "@/lib/data";
export default function FAQ() {
  return (
    <section className="sec wrap" id="faq">
      <div className="sec-head">
        <span className="eyebrow mono reveal"><span className="dot"></span>FAQ</span>
        <h2 className="reveal">Everything you're about to ask.</h2>
      </div>
      <div className="faq">
        {faqs.map((f, i) => (
          <details className="reveal" key={i} {...(i === 0 ? { open: true } : {})}>
            <summary data-cursor>{f.q}<span className="plus">+</span></summary>
            <div className="fa">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
