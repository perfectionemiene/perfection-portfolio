import { useRef } from 'react';
import { CloseIcon } from './Icons';

// PDFs open in a new tab because phones often can't show PDFs inside a page.
// Images open in a pop-up viewer (native <dialog>: Escape closes it).
export default function CertificateButton({ file, title }) {
  const dialogRef = useRef(null);
  const isPdf = /\.pdf($|\?)/i.test(file);

  if (isPdf) {
    return (
      <a
        className="credential-link"
        href={file}
        target="_blank"
        rel="noopener noreferrer"
      >
        View certificate{' '}
        <span className="visually-hidden">
          for {title} (PDF, opens in a new tab)
        </span>
      </a>
    );
  }

  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        className="credential-link"
        onClick={() => dialogRef.current?.showModal()}
      >
        View certificate
        <span className="visually-hidden"> for {title}</span>
      </button>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={`${title} certificate`}
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
          <img
            className="lightbox-img"
            src={file}
            alt={`Certificate for ${title}`}
            loading="lazy"
          />
        </div>
      </dialog>
    </>
  );
}