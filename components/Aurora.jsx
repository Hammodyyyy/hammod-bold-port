// Soft, slow-drifting gradient blobs behind everything. Pure CSS —
// GPU-composited (transform only) and auto-frozen under reduced-motion.
export default function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <span className="blob b1"></span>
      <span className="blob b2"></span>
      <span className="blob b3"></span>
    </div>
  );
}
