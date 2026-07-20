"use client";
import { useEffect, useState } from "react";

// Framed, click-to-expand case media. Renders a still by default; if `video`
// is set (e.g. "/work/shop.mp4") it autoplays a muted loop instead — drop a
// clip in and it just works. The lightbox shows the full, uncropped asset.
export default function CaseMedia({ img, video, title, kind }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const inline = video ? (
    <video src={video} poster={img} autoPlay muted loop playsInline />
  ) : (
    <img src={img} alt={`${title} — ${kind}`} />
  );

  return (
    <>
      <button type="button" className="case-media" onClick={() => setOpen(true)} data-cursor aria-label={`Expand ${title} preview`}>
        {inline}
        <span className="media-expand" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${title} — full view`} onClick={() => setOpen(false)}>
          <button type="button" className="lightbox-close" aria-label="Close" onClick={() => setOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <figure className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            {video ? (
              <video src={video} poster={img} autoPlay muted loop playsInline controls />
            ) : (
              <img src={img} alt={`${title} — ${kind}`} />
            )}
            <figcaption>{title} · {kind}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
