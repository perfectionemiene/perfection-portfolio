import Button from '../components/Button';
import usePageMeta from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta('Page not found', 'This page could not be found.');

  return (
    <section className="section notfound">
      <div className="container narrow-container text-center">
        <p className="notfound-code" aria-hidden="true">
          404
        </p>
        <h1>This page wandered off.</h1>
        <p className="cta-text">
          The link may be broken, or the page may have moved. Let's get you
          back on track.
        </p>
        <div className="cta-actions">
          <Button to="/" variant="primary">
            Back home
          </Button>
          <Button to="/projects" variant="secondary">
            See my projects
          </Button>
        </div>
      </div>
    </section>
  );
}