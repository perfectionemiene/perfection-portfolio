import { useEffect } from 'react';

export default function IntroAnimation({ onComplete }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const duration = prefersReducedMotion ? 1200 : 3000;

    const timer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className="intro-overlay"
      role="status"
      aria-label="Welcome to Perfection Odeh's portfolio"
    >
      <div className="intro-content">
        <div className="intro-initials" aria-hidden="true">
          PO
        </div>
        <div className="intro-line" aria-hidden="true" />
        <p className="intro-name">PERFECTION ODEH</p>
        <p className="intro-philosophy">
          Inspired by Design. Rooted in the Imago Dei.
        </p>
      </div>

      <button
        type="button"
        className="intro-skip"
        onClick={onComplete}
      >
        Skip intro
      </button>
    </div>
  );
}