import { process } from "@/lib/data";

const ICONS = {
  discovery: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.35-4.35" /></>,
  research: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /></>,
  design: <><path d="M4 20h4L19 9l-4-4L4 16v4Z" /><path d="m14 6 4 4" /></>,
  implementation: <><path d="m8 9-3 3 3 3" /><path d="m16 9 3 3-3 3" /></>,
  animation: <path d="M3 12h4l3-8 4 16 3-8h4" />,
  delivery: <><path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" /><path d="m3 8 9 5 9-5" /><path d="M12 13v9" /></>,
};

function Icon({ name }) {
  return (
    <span className="proc-ico" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {ICONS[name]}
      </svg>
    </span>
  );
}

export default function Process() {
  return (
    <section className="sec wrap" id="process">
      <div className="sec-head">
        <span className="eyebrow mono reveal"><span className="dot"></span>How I Work</span>
        <h2 className="reveal">A process that stays out of your way.</h2>
        <p className="reveal">Six steps from your brief to UI running in your live game — with updates at every stage, never silence.</p>
      </div>
      <div className="proc-grid">
        {process.map((p) => (
          <div className="proc card reveal" key={p.n}>
            <div className="proc-top">
              <Icon name={p.key} />
              <span className="pn">{p.n}</span>
            </div>
            <h3>{p.h}</h3>
            <p>{p.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
