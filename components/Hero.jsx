import { hero, availability } from "@/lib/data";

export default function Hero() {
  return (
    <header className="hero wrap" id="top">
      <div className="hero-eyebrow">
        <span className="eyebrow mono"><span className="dot"></span>{hero.eyebrow}</span>
        {availability.open && (
          <span className="avail"><span className="pip" aria-hidden="true"></span>{availability.label}</span>
        )}
      </div>
      <h1>
        {hero.headline.map((line, i) => (
          <span className="clip" key={i}>
            <span className={`ln${i === hero.headline.length - 1 ? " l2" : ""}`}>{line}</span>
          </span>
        ))}
      </h1>
      <p className="hero-sub">{hero.sub}</p>
      <div className="hero-cta">
        <a href={hero.ctaPrimary.href} className="btn btn-fill magnetic" data-cursor>{hero.ctaPrimary.label} →</a>
        <a href={hero.ctaSecondary.href} className="btn btn-line magnetic" data-cursor>{hero.ctaSecondary.label}</a>
      </div>
    </header>
  );
}
