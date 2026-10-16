import { proof, clients } from "@/lib/data";

// Facts row under the hero, closing with the client logos.
export default function Proof() {
  return (
    <section className="proof wrap" aria-label="At a glance">
      <div className="proof-row">
        {proof.map((p) => (
          <div className="proof-cell reveal" key={p.big}>
            <div className="proof-big">{p.big}</div>
            <div className="proof-small">{p.small}</div>
          </div>
        ))}
        <div className="proof-cell reveal">
          <div className="proof-logos">
            {clients.map((c) => (
              <span className="client" key={c.name}>
                <img src={c.logo} alt="" width="28" height="28" loading="lazy" />
                {c.name}
              </span>
            ))}
          </div>
          <div className="proof-small">Trusted by</div>
        </div>
      </div>
    </section>
  );
}
