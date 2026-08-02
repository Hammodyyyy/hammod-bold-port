import { profile, socials } from "@/lib/data";
import SocialIcon from "@/components/SocialIcon";

// X and Discord only. Roblox stays in the contact band's fuller list.
const FOOT_SOCIALS = ["x", "discord"];

export default function Footer() {
  const year = 2026;
  const links = FOOT_SOCIALS.map((p) => socials.find((s) => s.platform === p)).filter(Boolean);

  return (
    <footer>
      <div className="wrap foot reveal">
        <div>© {year} {profile.name}</div>
        <div>Roblox UI/UX · Studio Implementation · Motion</div>
        <div>Available for select projects</div>
        <div className="foot-end">
          <a href="/terms" className="foot-link" data-cursor>Terms</a>
          <span className="foot-socials">
            {links.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener" data-cursor aria-label={s.label}>
                <SocialIcon name={s.platform} />
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
