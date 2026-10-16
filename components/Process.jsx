import { steps } from "@/lib/data";
import Heading from "@/components/Heading";
import RollText from "@/components/RollText";

// Four full-width rows: number, stage, what happens, and the gate that has to
// be true before the next stage starts. Stacks on mobile. On hover a dark
// panel wipes up behind the row and the stage name rolls.
export default function Process() {
  return (
    <section className="sec wrap" id="process">
      <Heading>From first message to handoff.</Heading>
      <ol className="stages">
        {steps.map((s, i) => (
          <li className="stage reveal roll-host" key={s.h}>
            <span className="stage-n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <h3><RollText text={s.h} /></h3>
            <p>{s.p}</p>
            <div className="gate">
              <span className="gate-l">Next stage when</span>
              {s.gate}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
