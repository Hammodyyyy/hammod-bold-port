export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="bg-grid"></div>
      <div className="bg-glow" id="bgGlow"></div>
      <div className="bg-drift" id="bgDrift">
        <span className="bg-shape ring" data-float="0.4"><span className="bg-mark"></span></span>
        <span className="bg-shape ring sm" data-float="0.55"><span className="bg-mark"></span></span>
        <span className="bg-shape square" data-float="-0.6"><span className="bg-mark"></span></span>
        <span className="bg-shape plus" data-float="0.85"><span className="bg-mark">+</span></span>
        <span className="bg-shape dot" data-float="-0.35"><span className="bg-mark"></span></span>
      </div>
    </div>
  );
}
