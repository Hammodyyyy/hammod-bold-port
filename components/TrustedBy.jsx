"use client";
import { clients } from "@/lib/data";

export default function TrustedBy() {
  return (
    <section className="trusted wrap" aria-label="Clients">
      <div className="trusted-in reveal">
        <span className="lbl mono">Trusted by creators including</span>
        <span className="names">
          {clients.map((c, i) => (
            <span className="client" key={i}>
              {c.logo && (
                <img
                  className="clogo"
                  src={c.logo}
                  alt={`${c.name} logo`}
                  width="34"
                  height="34"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              )}
              <span className="name">{c.name}</span>
            </span>
          ))}
        </span>
      </div>
    </section>
  );
}
