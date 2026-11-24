import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/Button';
import Gallery from '../components/Gallery';
import usePageMeta from '../hooks/usePageMeta';
import { ArrowRightIcon } from '../components/Icons';
import { projects } from '../data/projects';

export default function ProjectDetails() {
  const { slug } = useParams();
  const [imgError, setImgError] = useState(false);

  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];
  const nextProject =
    projects.length > 1 ? projects[(index + 1) % projects.length] : null;

  usePageMeta(
    project ? project.title : 'Project not found',
    project ? project.shortDescription : 'This project could not be found.'
  );

  if (!project) {
    return (
      <section className="section">
        <div className="container narrow-container text-center">
          <span className="section-label">Not found</span>
          <h1>Project not found</h1>
          <p style={{ margin: '1rem auto 2rem' }}>
            The project you're looking for doesn't exist or may have been moved.
          </p>
          <Button to="/projects" variant="primary">
            Back to projects
          </Button>
        </div>
      </section>
    );
  }

  return (
    <article className="project-detail-page">
      {/* Header & Back Navigation */}
      <section className="section page-header-section">
        <div className="container narrow-container">
          <Link to="/projects" viewTransition className="back-link">
            <span aria-hidden="true">←</span> Back to projects
          </Link>

          <div className="project-meta" style={{ marginTop: '1.25rem' }}>
            <span className="section-label" style={{ marginBottom: 0 }}>
              {project.category}
            </span>
            {project.status && (
              <span className="project-status">{project.status}</span>
            )}
          </div>

          <h1>{project.title}</h1>
          <p className="page-intro-text">{project.shortDescription}</p>

          {project.role && (
            <p className="project-role">
              <strong>My role:</strong> {project.role}
            </p>
          )}

          <ul
            className="project-tags"
            aria-label="Skills and tools"
            style={{ marginTop: '1.5rem', marginBottom: 0 }}
          >
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          {/* Only render links that are actually configured */}
          {(project.liveUrl || project.repoUrl) && (
            <div className="detail-actions">
              {project.liveUrl && (
                <Button href={project.liveUrl} variant="primary">
                  Visit live site
                </Button>
              )}
              {project.repoUrl && (
                <Button href={project.repoUrl} variant="secondary">
                  View source code
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Main Case Study Content */}
      <section className="section" style={{ paddingTop: '3rem' }}>
        <div className="container narrow-container">
          <div className="detail-media-frame">
            {!imgError && project.image ? (
              <img
                src={project.image}
                alt={`Interface preview of ${project.title}`}
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="detail-media-fallback">
                <span>{project.title}</span>
                <p>Screenshots coming soon</p>
              </div>
            )}
          </div>

          <div className="detail-sections">
            <div className="detail-block">
              <h2>Project overview</h2>
              <p>{project.overview}</p>
            </div>

            {project.features?.length > 0 && (
              <div className="detail-block">
                <h2>{project.featuresHeading || 'Key features'}</h2>
                <ul className="detail-feature-list">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && (
              <div className="detail-block">
                <h2>Challenges and decisions</h2>
                <p>{project.challenges}</p>
              </div>
            )}

            {project.learned && (
              <div className="detail-block">
                <h2>What I learned</h2>
                <p>{project.learned}</p>
              </div>
            )}
          </div>

          {/* Renders nothing until you add images to the project's gallery */}
          <Gallery images={project.gallery} title={project.title} />

          {nextProject && (
            <Link
              to={`/projects/${nextProject.slug}`}
              viewTransition
              className="next-project"
            >
              <span>
                <span className="next-project-label">Next project</span>
                <span className="next-project-title">{nextProject.title}</span>
              </span>
              <ArrowRightIcon className="next-project-arrow" width={32} height={32} />
            </Link>
          )}

          <div className="detail-footer-nav">
            <Button to="/projects" variant="secondary">
              ← All projects
            </Button>
            <Button to="/contact" variant="primary">
              Discuss this project
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}