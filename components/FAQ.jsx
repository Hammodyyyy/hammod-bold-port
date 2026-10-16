"use client";
import { useId, useState } from "react";
import { faqs } from "@/lib/data";
import Heading from "@/components/Heading";

// Accordion, one answer open at a time. Native <details> can't animate its
// height, so each answer sits in a grid row that eases between 0fr and 1fr,
// and the text fades up once there is room for it. Closed answers are inert,
// so keyboard and screen-reader users skip what they can't see.
export default function FAQ() {
  const [open, setOpen] = useState(0);
  const uid = useId();

  return (
    <section className="sec wrap faq-sec" id="faq">
      <Heading>Before you message.</Heading>
      <div className="faq">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          const qId = `${uid}-q${i}`;
          const aId = `${uid}-a${i}`;
          return (
            <div className={`qa reveal${isOpen ? " open" : ""}`} key={f.q}>
              <div role="heading" aria-level={3}>
                <button
                  type="button"
                  className="qa-q"
                  id={qId}
                  aria-expanded={isOpen}
                  aria-controls={aId}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="qa-n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <span className="qa-t">{f.q}</span>
                  <span className="plus" aria-hidden="true"></span>
                </button>
              </div>
              <div className="qa-a" id={aId} role="region" aria-labelledby={qId} inert={isOpen ? undefined : ""}>
                <div className="qa-in"><p>{f.a}</p></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
