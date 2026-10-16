import { contact, socials, profile, ctaLabel } from "@/lib/data";
import SocialIcon from "@/components/SocialIcon";
import RollText from "@/components/RollText";

// Closing statement set at poster scale, then the one action.
export default function Contact() {
  return (
    <section className="sec wrap contact" id="contact">
      <h2 className="contact-h">
        {contact.lines.map((l) => (
          <span className="clip" key={l}><span className="ln">{l}</span></span>
        ))}
      </h2>
      <div className="contact-row reveal">
        <p className="sub">{contact.sub}</p>
        <div className="contact-act">
          <a href={profile.discordUrl} target="_blank" rel="noopener" className="btn btn-accent btn-lg roll-host">
            <SocialIcon name="discord" /><RollText text={ctaLabel} />
          </a>
          <p className="reply">{contact.replyTime}</p>
        </div>
      </div>
      <div className="socials reveal">
        {socials.map((s) => (
          <a key={s.href} href={s.href} target="_blank" rel="noopener" className="roll-host" aria-label={`${s.label}: ${s.handle}`}>
            <SocialIcon name={s.platform} />
            <RollText text={s.handle} />
          </a>
        ))}
      </div>
    </section>
  );
}
