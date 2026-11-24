import ContactForm from '../components/ContactForm';
import usePageMeta from '../hooks/usePageMeta';
import CopyEmailButton from '../components/CopyEmailButton';
import { site } from '../data/site';

// Shows "linkedin.com/in/..." instead of the full https://www... address
const display = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

export default function Contact() {
  usePageMeta('Contact', 'Get in touch with Perfection Odeh about web development, machine learning, robotics or collaboration.');
  return (
    <div className="contact-page">
      <section className="section page-header-section">
        <div className="container narrow-container">
          <span className="section-label">Contact</span>
          <h1>Let's connect.</h1>
          <p className="page-intro-text">
            Whether it's a conversation about web development, machine learning,
            robotics, or an opportunity to collaborate and grow, I'd love to
            hear from you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          {/* Direct Channels */}
          <aside className="contact-details">
            <h2>Direct channels</h2>
            <p className="contact-aside-text">
              Prefer reaching out directly? Email me, or find me on LinkedIn and
              GitHub.
            </p>

            <ul className="contact-links-list">
              <li>
                <span className="contact-link-label">Email</span>
                <CopyEmailButton />
              </li>
              <li>
                <span className="contact-link-label">LinkedIn</span>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {display(site.linkedin)}
                </a>
              </li>
              <li>
                <span className="contact-link-label">GitHub</span>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {display(site.github)}
                </a>
              </li>
              <li>
                <span className="contact-link-label">Based in</span>
                <span>{site.location}</span>
              </li>
            </ul>
          </aside>

          {/* Interactive Contact Form */}
          <div className="contact-form-wrapper">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="contact-closing-strip">
        <div className="container text-center">
          <p className="closing-mantra">
         Creating with purpose. 
          </p>
        </div>
      </section>
    </div>
  );
}