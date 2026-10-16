import { testimonials } from "@/lib/data";
import Heading from "@/components/Heading";
import RollText from "@/components/RollText";

// One large quote beside two smaller ones. Static on purpose: three reviews
// read faster all at once than through a carousel. On hover a line sweeps
// across the top, the quote lifts, the name rolls and the avatar tilts.
export default function Testimonials() {
  const [lead, ...rest] = testimonials;
  const Who = ({ t }) => (
    <figcaption className="who">
      <img src={t.avatar} alt="" width="36" height="36" loading="lazy" />
      <span><span className="nm"><RollText text={t.name} /></span><span className="rl">{t.role}</span></span>
    </figcaption>
  );

  return (
    <section className="sec wrap" id="words">
      <Heading>What clients say.</Heading>
      <div className="quotes">
        <figure className="q q-lead reveal roll-host">
          <blockquote>“{lead.quote}”</blockquote>
          <Who t={lead} />
        </figure>
        <div className="q-side">
          {rest.map((t) => (
            <figure className="q reveal roll-host" key={t.name}>
              <blockquote>“{t.quote}”</blockquote>
              <Who t={t} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
