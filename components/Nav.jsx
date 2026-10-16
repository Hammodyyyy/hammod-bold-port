import { navLinks, profile, ctaLabel, availability } from "@/lib/data";
import RollText from "@/components/RollText";

// A row of small labels framing the top of the screen, then the links.
// The middle labels drop out on narrower screens so the bar stays one line.
export default function Nav() {
  return (
    <nav id="nav">
      <div className="nav-in">
        {/* alt is empty on purpose: the wordmark beside it already names the link */}
        <a href="#top" className="brand roll-host">
          <img className="brand-av" src={profile.avatar} alt="" width="26" height="26" />
          <RollText text={profile.name} />
        </a>
        <span className="nav-meta"><span className="k">Role</span>{profile.role}</span>
        {availability.open && (
          <span className="nav-meta"><span className="k">Status</span><span className="pip" aria-hidden="true"></span>{availability.label}</span>
        )}
        <div className="nav-links" id="navLinks">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="roll-host"><RollText text={l.label} /></a>
          ))}
          <a href="#contact" className="btn btn-fill nav-cta roll-host"><RollText text={ctaLabel} /></a>
        </div>
        <button className="burger" id="burger" aria-label="Toggle menu" aria-expanded="false" aria-controls="navLinks">
          <span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
