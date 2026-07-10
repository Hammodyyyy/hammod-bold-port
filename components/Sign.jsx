import { contact, socials } from "@/lib/data";

const ICONS = {
  discord: "M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.249a18.27 18.27 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.25.077.077 0 0 0-.079-.036A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.893.077.077 0 0 1-.008-.127c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.661a.061.061 0 0 0-.031-.03ZM8.02 15.331c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.332-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.332-.946 2.418-2.157 2.418Z",
  x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z",
  roblox: "M5.164 0 0 18.927 18.836 24 24 5.073 5.164 0Zm5.947 7.66 5.234 1.401-1.401 5.234-5.234-1.401 1.401-5.234Z",
};

function SocialIcon({ name }) {
  return (
    <svg className="s-ico" viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd" aria-hidden="true">
      <path d={ICONS[name]} />
    </svg>
  );
}

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
        <div className="socials">
          {socials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener" data-cursor aria-label={`${s.label} — ${s.handle}`}>
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
