import { useState } from 'react';
import Button from './Button';
import { site } from '../data/site';

// Paste your Formspree endpoint here when ready (e.g., 'https://formspree.io/f/yourFormId')
const FORMSPREE_ENDPOINT = '';
// Change the address in src/data/site.js
const DIRECT_EMAIL = site.email;

const FIELD_ORDER = ['name', 'email', 'subject', 'message'];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  // 'idle' | 'submitting' | 'success' | 'error' | 'mailto'
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Enter your name.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address, like name@example.com.';
    }
    if (!formData.subject.trim()) nextErrors.subject = 'Add a subject.';
    if (formData.message.trim().length < 10) {
      nextErrors.message = 'Write a message of at least 10 characters.';
    }
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Move focus to the first field with a problem so keyboard and
      // screen-reader users land on it.
      const firstInvalid = FIELD_ORDER.find((field) => validationErrors[field]);
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    // Until a Formspree endpoint is added, open the visitor's email app
    if (!FORMSPREE_ENDPOINT) {
      const mailtoSubject = encodeURIComponent(formData.subject);
      const mailtoBody = encodeURIComponent(
        `Hi Perfection,\n\n${formData.message}\n\n${formData.name} (${formData.email})`
      );
      setStatus('mailto');
      window.location.href = `mailto:${DIRECT_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="form-feedback form-success" role="status">
        <h3>Message sent</h3>
        <p>
          Thank you for reaching out. Your message has been delivered and I
          will get back to you soon.
        </p>
        <Button
          type="button"
          variant="secondary"
          onClick={() => setStatus('idle')}
        >
          Send another message
        </Button>
      </div>
    );
  }

  const isSubmitting = status === 'submitting';

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'error-name' : undefined}
        />
        {errors.name && (
          <span id="error-name" className="field-error" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="contact-email">Email address</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'error-email' : undefined}
        />
        {errors.email && (
          <span id="error-email" className="field-error" role="alert">
            {errors.email}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="contact-subject">Subject</label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Collaboration, internship, or a quick hello"
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? 'error-subject' : undefined}
        />
        {errors.subject && (
          <span id="error-subject" className="field-error" role="alert">
            {errors.subject}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me what you're working on or how we can connect..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'error-message' : undefined}
        />
        {errors.message && (
          <span id="error-message" className="field-error" role="alert">
            {errors.message}
          </span>
        )}
      </div>

      {status === 'error' && (
        <p className="field-error" role="alert">
          Your message didn't send. Try again, or email me at{' '}
          <a href={`mailto:${DIRECT_EMAIL}`}>{DIRECT_EMAIL}</a>.
        </p>
      )}

      {status === 'mailto' && (
        <p className="form-note" role="status">
          Your email app should open with this message ready to send. If
          nothing opens, email me at{' '}
          <a href={`mailto:${DIRECT_EMAIL}`}>{DIRECT_EMAIL}</a>.
        </p>
      )}

      <Button type="submit" variant="primary" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send message'}
      </Button>
    </form>
  );
}