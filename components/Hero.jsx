import { stats } from "@/lib/data";
export default function Hero() {
  return (
    <header className="hero wrap" id="top">
      <div className="hero-eyebrow mono"><span className="dot"></span>[ 00 / 08 ] — Roblox UI/UX &amp; Motion Designer</div>
      <h1>
        <span className="clip"><span className="ln">Most Roblox UI</span></span>
        <span className="clip"><span className="ln">is forgettable.</span></span>
        <span className="clip"><span className="ln l2">Mine isn&apos;t.</span></span>
      </h1>
      <p className="hero-sub">I design and animate the interfaces that make players <b>stay, spend, and come back</b>. Six years, 600M+ visits, and a client list that keeps saying the same thing: you can&apos;t get better than this.</p>
      <div className="hero-row">
        <div className="hero-stats">
          {stats.map((s, i) => (<div key={i}><div className="v">{s.v}</div><div className="l">{s.l}</div></div>))}
        </div>
        <div className="hero-cta">
          <a href="#sign" className="btn btn-fill magnetic" data-cursor>Where do I sign →</a>
          <a href="#work" className="btn btn-line magnetic" data-cursor>See the receipts</a>
        </div>
      </div>
    </header>
  );
}
