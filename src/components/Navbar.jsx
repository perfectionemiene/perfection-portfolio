import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const { pathname } = useLocation();

  // Scroll state: passive listener, and check once on mount (e.g. after a refresh mid-page)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the menu whenever the route changes (back/forward buttons included)
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Escape closes the menu and returns focus to the toggle button
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <Link to="/" viewTransition className="brand">
          <span className="brand-name">PERFECTION ODEH</span>
          <span className="brand-tagline">Inspired to design.</span>
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`hamburger ${menuOpen ? "open" : ""}`} />
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} viewTransition>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}