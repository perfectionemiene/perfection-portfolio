import { useState } from 'react';
import { PauseIcon, PlayIcon } from './Icons';

// Edit this list to change what scrolls past.
const items = [
  { label: 'Building', text: 'Folia, a reading and writing platform' },
  { label: 'Learning', text: 'machine learning and robotics' },
  { label: 'Studying', text: 'Computer Science at Miva Open University' },
  { label: 'Making', text: 'handmade crochet at Perfectly Hooked' },
  { label: 'Fellow', text: 'Miva Robotics Lab, first cohort' },
];

function Row({ hidden = false }) {
  return (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item.label} className="marquee-item">
          <span className="marquee-label">{item.label}</span>
          <span className="marquee-text">{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      className={`marquee ${paused ? 'is-paused' : ''}`}
      aria-label="What I'm up to right now"
    >
      <div className="marquee-badge">
        <span className="now-dot" aria-hidden="true" />
        Currently
      </div>

      <div className="marquee-viewport">
        {/* The second row is a visual duplicate that makes the loop seamless,
            so screen readers skip it (aria-hidden). */}
        <div className="marquee-track">
          <Row />
          <Row hidden />
        </div>
      </div>

      {/* People can stop moving text, not just pause it with the mouse */}
      <button
        type="button"
        className="marquee-toggle"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        aria-label={paused ? 'Play scrolling text' : 'Pause scrolling text'}
      >
        {paused ? <PlayIcon /> : <PauseIcon />}
      </button>
    </section>
  );
}