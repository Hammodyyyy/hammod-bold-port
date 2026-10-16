// Letter-roll label: each character is stacked over a copy of itself, and on
// hover of the nearest .roll-host the stack slides up one line, character by
// character. Screen readers get the plain string once via aria-label.
export default function RollText({ text }) {
  return (
    <span className="roll" aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <span className="roll-ch" key={i} style={{ "--i": i }} aria-hidden="true" data-ch={ch === " " ? " " : ch}>
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
}
