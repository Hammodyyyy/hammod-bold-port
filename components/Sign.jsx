import { profile, socials } from "@/lib/data";
export default function Sign() {
  return (
    <section className="sec wrap" id="sign">
      <div className="chapter"><span className="c">[ 07 / 08 ]</span><span className="t">Contact</span></div>
      <div className="sign">
        <h2>
          <span className="clip"><span className="ln">Where do</span></span>
          <span className="clip"><span className="ln accent">I sign?</span></span>
        </h2>
        <p className="sub">Your game deserves UI that pulls its weight. Discord&apos;s the fastest way to reach me — send the game and what you need.</p>
        <div className="cta">
          <a href={profile.discordUrl} target="_blank" rel="noopener" className="btn btn-fill magnetic" data-cursor>Message on Discord →</a>
          <a href="#work" className="btn btn-line magnetic" data-cursor>See the work</a>
        </div>
        <div className="socials">
          {socials.map((s) => (<a key={s.href} href={s.href} target="_blank" rel="noopener" data-cursor>{s.label}</a>))}
        </div>
      </div>
    </section>
  );
}
