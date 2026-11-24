import { Link, useLocation } from 'react-router-dom';
import { site } from '../data/site';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';

export default function Footer({ onReplayIntro }) {
  const year = new Date().getFullYear();
  // The About page is burgundy, so the footer matches it there and is ivory elsewhere
  const { pathname } = useLocation();
  const onDarkPage = pathname.startsWith('/about');

  return (
    <footer className={`site-foot ${onDarkPage ? 'is-dark' : ''}`}>
      <div className="container foot-main">
        <div className="foot-brand">
          <Link to="/" viewTransition className="foot-name">
            Perfection Odeh
          </Link>
          <p>Creating with purpose.</p>
        </div>

        <nav className="foot-nav" aria-label="Footer">
          <Link to="/about" viewTransition>About</Link>
          <Link to="/projects" viewTransition>Projects</Link>
          <Link to="/contact" viewTransition>Contact</Link>
          <a href={site.cv.href} download={site.cv.filename}>CV</a>
        </nav>

        <ul className="foot-social">
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (opens in a new tab)"
            >
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} aria-label="Send me an email">
              <MailIcon />
            </a>
          </li>
        </ul>
      </div>

      <div className="container foot-base">
        <p>© {year} Perfection Odeh</p>
        {onReplayIntro && (
          <button type="button" className="foot-replay" onClick={onReplayIntro}>
            Replay intro
          </button>
        )}
      </div>
    </footer>
  );
}