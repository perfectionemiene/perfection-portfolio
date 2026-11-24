import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);

  // Feeds the cursor position to the CSS spotlight (mouse only, never touch)
  const handlePointerMove = (e) => {
    if (e.pointerType !== 'mouse') return;
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <article className="project-card" onPointerMove={handlePointerMove}>
      <Link
        to={`/projects/${project.slug}`}
        viewTransition
        className="project-card-media"
      >
        {!imgError && project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="project-card-fallback" aria-hidden="true">
            <span>{project.title}</span>
          </div>
        )}
      </Link>

      <div className="project-card-body">
        <div className="project-meta">
          <span className="project-category">{project.category}</span>
          {project.status && (
            <span className="project-status">{project.status}</span>
          )}
        </div>

        <h3 className="project-title">
          <Link to={`/projects/${project.slug}`} viewTransition>
            {project.title}
          </Link>
        </h3>
        <p className="project-summary">{project.shortDescription}</p>

        <ul className="project-tags" aria-label="Skills and tools">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <Link
          to={`/projects/${project.slug}`}
          viewTransition
          className="project-link"
        >
          View project details <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}