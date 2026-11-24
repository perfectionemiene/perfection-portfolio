import { useRef, useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from './Icons';

// Uses the browser's built-in <dialog>: Escape closes it, focus stays inside it,
// and the page behind is inert. Broken image paths are skipped silently, and if
// a project has no screenshots yet the whole section simply doesn't render.
export default function Gallery({ images = [], title }) {
  const dialogRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [broken, setBroken] = useState([]);

  const visible = images.filter((img) => !broken.includes(img.src));
  if (visible.length === 0) return null;

  const active = visible[Math.min(current, visible.length - 1)];

  const open = (index) => {
    setCurrent(index);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = (dir) =>
    setCurrent((i) => (i + dir + visible.length) % visible.length);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  };

  return (
    <section className="gallery" aria-labelledby="gallery-heading">
      <h2 id="gallery-heading">Screenshots</h2>

      <div className="gallery-grid">
        {visible.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className="gallery-thumb"
            onClick={() => open(i)}
            aria-label={`Enlarge: ${img.alt}`}
          >
            <img
              src={img.src}
              alt=""
              loading="lazy"
              onError={() => setBroken((list) => [...list, img.src])}
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={`${title} screenshots`}
        onKeyDown={handleKeyDown}
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        <div className="lightbox-inner">
          <button
            type="button"
            className="lightbox-btn lightbox-close"
            onClick={close}
            aria-label="Close"
          >
            <CloseIcon />
          </button>

          <img className="lightbox-img" src={active.src} alt={active.alt} />
          <p className="lightbox-caption">{active.alt}</p>

          {visible.length > 1 && (
            <div className="lightbox-bar">
              <button
                type="button"
                className="lightbox-btn"
                onClick={() => step(-1)}
                aria-label="Previous screenshot"
              >
                <ArrowLeftIcon />
              </button>
              <span aria-live="polite">
                {Math.min(current, visible.length - 1) + 1} / {visible.length}
              </span>
              <button
                type="button"
                className="lightbox-btn"
                onClick={() => step(1)}
                aria-label="Next screenshot"
              >
                <ArrowRightIcon />
              </button>
            </div>
          )}
        </div>
      </dialog>
    </section>
  );
}