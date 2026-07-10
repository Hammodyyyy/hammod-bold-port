export default function Marquee() {
  const row = (
    <span>
      Roblox UI that ships <i>◆</i> Interfaces players feel <i>◆</i> 600M+ visits <i>◆</i> Where do I sign <i>◆</i>
    </span>
  );
  return (
    <div className="marquee" aria-hidden="true"><div className="marquee-track">{row}{row}</div></div>
  );
}
