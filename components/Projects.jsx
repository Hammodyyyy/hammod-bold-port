import { projects } from "@/lib/data";
import CaseMedia from "@/components/CaseMedia";

export default function Projects() {
  return (
    <section className="sec wrap" id="projects">
      <div className="sec-head">
        <span className="eyebrow mono reveal"><span className="dot"></span>Selected Work</span>
        <h2 className="reveal">Interfaces, shipped.</h2>
        <p className="reveal">UI I&apos;ve designed and built for live Roblox games. Click any shot to see it full-size.</p>
      </div>
      <div className="proj-grid">
        {projects.map((p, i) => (
          <div className="proj card reveal" key={i}>
            <CaseMedia img={p.img} video={p.video} title={p.title} kind={p.tag} />
            <div className="proj-meta">
              <span className="pt">{p.title}</span>
              <span className="ptag">{p.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
