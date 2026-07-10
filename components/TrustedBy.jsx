import { clients } from "@/lib/data";

export default function TrustedBy() {
  return (
    <section className="trusted wrap" aria-label="Clients">
      <div className="trusted-in reveal">
        <span className="lbl mono">Trusted by creators including</span>
        <span className="names">
          {clients.map((c, i) => (<span className="name" key={i}>{c.name}</span>))}
        </span>
      </div>
    </section>
  );
}
