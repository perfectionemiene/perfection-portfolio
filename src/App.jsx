import { useState, useLayoutEffect, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import IntroAnimation from './components/IntroAnimation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const INTRO_KEY = 'po_intro_seen';

// sessionStorage can throw (private mode, blocked cookies). If it does, the
// site must still work, so every access is wrapped.
const hasSeenIntro = () => {
  try {
    return sessionStorage.getItem(INTRO_KEY) === 'true';
  } catch {
    return false;
  }
};

const markIntroSeen = (seen) => {
  try {
    if (seen) sessionStorage.setItem(INTRO_KEY, 'true');
    else sessionStorage.removeItem(INTRO_KEY);
  } catch {
    /* ignore */
  }
};

function ScrollToTop() {
  const { pathname } = useLocation();
  // useLayoutEffect runs before the browser paints (and before a page
  // transition takes its snapshot), so the new page never flashes at the old
  // scroll position. "instant" overrides the smooth scrolling in global.css.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  const [showIntro, setShowIntro] = useState(() => !hasSeenIntro());

  const handleIntroComplete = useCallback(() => {
    markIntroSeen(true);
    setShowIntro(false);
  }, []);

  const handleReplayIntro = useCallback(() => {
    markIntroSeen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setShowIntro(true);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <ScrollToTop />
      <Navbar />
      <main id="main" tabIndex={-1} style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer onReplayIntro={handleReplayIntro} />
      <BackToTop />
    </>
  );
}