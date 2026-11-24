import { useEffect, useRef, useState } from 'react';
import { site } from '../data/site';
import { CopyIcon, CheckIcon } from './Icons';

export default function CopyEmailButton() {
  const [state, setState] = useState('idle'); // 'idle' | 'copied' | 'failed'
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      // Needs https (or localhost). On a plain-http test address it fails,
      // and we say so instead of pretending it worked.
      await navigator.clipboard.writeText(site.email);
      setState('copied');
    } catch {
      setState('failed');
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState('idle'), 2200);
  };

  const label =
    state === 'copied' ? 'Copied' : state === 'failed' ? "Couldn't copy" : 'Copy';

  return (
    <span className="copy-email">
      <a href={`mailto:${site.email}`}>{site.email}</a>
      <button
        type="button"
        className={`copy-email-btn ${state === 'copied' ? 'is-copied' : ''}`}
        onClick={copy}
        aria-label="Copy email address"
      >
        {state === 'copied' ? <CheckIcon /> : <CopyIcon />}
        <span>{label}</span>
      </button>
      <span className="visually-hidden" role="status">
        {state === 'copied' ? 'Email address copied to clipboard' : ''}
      </span>
    </span>
  );
}