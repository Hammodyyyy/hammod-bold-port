import { clients } from "@/lib/data";

export default function TrustedBy() {
  // Duplicated track so the marquee loops seamlessly.
  const row = (
    <span className="item">
      {clients.map((c, i) => (
        <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 44 }}>
          {c.name}<i>◆</i>
        </span>
      ))}
    </span>
  );
  return (
    <section className="strip" aria-label="Clients">
      <div className="wrap">
        <div className="lbl mono">Shipped for teams you know</div>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">{row}{row}</div>
      </div>
    </section>
  );
}
