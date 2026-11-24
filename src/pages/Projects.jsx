import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import usePageMeta from '../hooks/usePageMeta';
import { projects } from '../data/projects';

// Built from the data, so a filter never appears without a project behind it
const CATEGORIES = ['All', ...new Set(projects.map((p) => p.category))];

const countFor = (category) =>
  category === 'All'
    ? projects.length
    : projects.filter((p) => p.category === category).length;

export default function Projects() {
  usePageMeta('Projects', 'Projects by Perfection Odeh, including the Perfectly Hooked crochet store, the Folia reading and writing platform and a team fashion website.');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="projects-page">
      <section className="section page-header-section">
        <div className="container narrow-container">
          <span className="section-label">Portfolio</span>
          <h1>Things I've been building</h1>
          <p className="page-intro-text">
            A growing collection of what I've built and am still building, from
            a storefront to a full-stack application. Each
            one has taught me something new.
          </p>

          {/* Text tabs with an animated underline: no wrapping pills, scrolls
              sideways if it ever runs out of room on a small screen */}
          <div className="tabs" role="group" aria-label="Filter projects by category">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  className={`tab ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                  <span className="tab-count">{countFor(category)}</span>
                </button>
              );
            })}
          </div>
          <p className="visually-hidden" aria-live="polite">
            Showing {filteredProjects.length}{' '}
            {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '3rem' }}>
        <div className="container">
          {/* key restarts the fade-in each time the filter changes */}
          <div
            key={activeCategory}
            className="projects-grid projects-gallery-grid grid-fade"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}