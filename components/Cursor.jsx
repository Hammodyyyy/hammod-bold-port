export default function Cursor() {
  return (
    <>
      <div className="cursor-glow" id="glow" aria-hidden="true"></div>
      <div className="cur-ring" id="ring"></div>
      <div className="cur-dot" id="dot"></div>
    </>
  );
}
