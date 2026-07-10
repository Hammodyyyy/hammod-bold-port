import { navLinks } from "@/lib/data";
export default function Nav() {
  return (
    <nav id="nav">
      <div className="wrap nav-in">
        <a href="#top" className="brand" data-cursor><span className="sq"></span>Hammody</a>
        <div className="nav-links" id="navLinks">
          {navLinks.map((l) => (<a key={l.href} href={l.href}>{l.label}</a>))}
          <a href="#sign" className="nav-cta" data-cursor>Where do I sign</a>
        </div>
        <button className="burger" id="burger" aria-label="Toggle menu"><span></span><span></span><span></span></button>
      </div>
      <div className="nav-prog" aria-hidden="true"><i id="navProg"></i></div>
    </nav>
  );
}
