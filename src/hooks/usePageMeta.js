import { useEffect } from 'react';

const SITE = 'Perfection Odeh';
const DEFAULT_TITLE = `${SITE} | Computer Science student and developer`;

// Sets the browser-tab title and the meta description for the current page.
//   usePageMeta('About', 'A short description...')  -> "About | Perfection Odeh"
//   usePageMeta(null, 'Home description...')        -> the default home title
// (Social previews on LinkedIn/WhatsApp read index.html only, because those
// crawlers don't run JavaScript. That's why the sharing tags live there.)
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : DEFAULT_TITLE;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]);
}