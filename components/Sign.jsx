import { contact, socials } from "@/lib/data";
import SocialIcon from "@/components/SocialIcon";

export default function Contact() {
  return (
    <section className="sec wrap" id="contact">
      <div className="contact reveal">
        <h2>
          {contact.headline.map((line, i) => (
            <span className="clip" key={i}>
              <span className={`ln${i === contact.headline.length - 1 ? " l2" : ""}`}>{line}</span>
            </span>
          ))}
        </h2>
        <p className="sub">{contact.sub}</p>
        <div className="cta">
          <a href={contact.ctaPrimary.href} target="_blank" rel="noopener" className="btn btn-fill magnetic" data-cursor>{contact.ctaPrimary.label} →</a>
          <a href={contact.ctaSecondary.href} className="btn btn-line magnetic" data-cursor>{contact.ctaSecondary.label}</a>
        </div>
        <p className="reply mono">{contact.replyTime}</p>
        <div className="socials">
          {socials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener" data-cursor aria-label={`${s.label}: ${s.handle}`}>
              <SocialIcon name={s.platform} />
              <span className="s-name">{s.label}</span>
              <span className="s-handle">{s.handle}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
