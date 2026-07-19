import { toolkit } from "@/lib/data";

const ICONS = {
  figma: (
    <svg viewBox="0 0 38 57" width="22" height="22" aria-hidden="true">
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z" fill="#1ABCFE" />
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z" fill="#0ACF83" />
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z" fill="#FF7262" />
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" fill="#A259FF" />
    </svg>
  ),
  roblox: (
    <svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true" fill="#f5f5f7" fillRule="evenodd" clipRule="evenodd">
      <path d="M5.164 0 0 18.927 18.836 24 24 5.073 5.164 0Zm5.947 7.66 5.234 1.401-1.401 5.234-5.234-1.401 1.401-5.234Z" />
    </svg>
  ),
  photoshop: (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <rect x="1" y="1" width="22" height="22" rx="5" fill="#001E36" />
      <text x="12" y="16.5" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="11" fill="#31A8FF">Ps</text>
    </svg>
  ),
};

export default function Toolkit() {
  return (
    <section className="sec wrap" id="toolkit">
      <div className="sec-head">
        <span className="eyebrow mono reveal"><span className="dot"></span>Toolkit</span>
        <h2 className="reveal">The tools behind the work.</h2>
      </div>
      <div className="tool-grid">
        {toolkit.map((t, i) => (
          <div className="tool-card card reveal" key={i}>
            <span className="tool-ico">{ICONS[t.key]}</span>
            <span className="tool-text">
              <span className="tool-name">{t.name}</span>
              <span className="tool-role">{t.role}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
