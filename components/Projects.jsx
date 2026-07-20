import { projects } from "@/lib/data";
import CaseMedia from "@/components/CaseMedia";

export default function Projects() {
  // rendered 3x so the loop always fills the viewport and cycles seamlessly
  const set = (dupe) =>
    projects.map((p, i) => (
      <div className="proj card" key={`${dupe}-${i}`} aria-hidden={dupe !== "a" ? "true" : undefined}>
        <CaseMedia img={p.img} video={p.video} title={p.title} kind={p.tag} />
        <div className="proj-meta">
          <span className="pt">{p.title}</span>
          <span className="ptag">{p.tag}</span>
        </div>
      </div>
    ));

  return (
    <section className="sec wrap" id="projects">
      <div className="sec-head">
        <span className="eyebrow mono reveal"><span className="dot"></span>Selected Work</span>
        <h2 className="reveal">Interfaces, shipped.</h2>
        <p className="reveal">UI I&apos;ve designed and built for live Roblox games. Hover to pause, click any shot to see it full-size.</p>
      </div>

      <div className="proj-marquee">
        <div className="proj-track">
          {set("a")}
          {set("b")}
          {set("c")}
        </div>
      </div>
    </section>
  );
}
