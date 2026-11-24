import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import Marquee from '../components/Marquee';
import { DownloadIcon } from '../components/Icons';
import { projects } from '../data/projects';
import { site } from '../data/site';
import usePageMeta from '../hooks/usePageMeta';

export default function Home() {
  usePageMeta(
    null,
    'Portfolio of Perfection Odeh, a Computer Science student and Machine Learning intern in Abuja, Nigeria, building thoughtful web experiences and exploring AI and robotics.'
  );

  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <div className="home-page">
      {/* B. Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Computer Science student and Machine Learning Intern</p>
            <h1>Inspired by Design. Rooted in the Imago Dei.</h1>
            <p className="hero-subtitle">
              I'm Perfection Odeh, a Computer Science student exploring where
              technology, creativity and purposeful design meet.
            </p>
            <div className="hero-actions">
              <Button to="/projects" variant="primary">
                Explore projects
              </Button>
              <Button to="/about" variant="secondary">
                About me
              </Button>
              <Button href={site.cv.href} download={site.cv.filename} variant="ghost">
                <DownloadIcon /> Download CV
              </Button>
            </div>
          </div>

          {/* Editorial Visual Composition / Portrait Frame */}
          <div className="hero-visual" aria-hidden="true">
            <div className="editorial-frame">
              <span className="frame-monogram">PO</span>
              <span className="frame-line" />
              <span className="frame-caption">Curiosity, creativity and technology</span>
            </div>
          </div>
        </div>
      </section>

      {/* Currently (scrolling band) */}
      <Marquee />

      {/* C. Brief Introduction */}
      <section className="section intro-strip">
        <div className="container narrow-container">
          <span className="section-label">The approach</span>
          <h2>Building software intentionally.</h2>
          <p className="lead-text">
            I'm studying Computer Science at Miva Open University and gaining
            hands-on experience as a Machine Learning intern. Most of my work
            is on the web, where I build responsive interfaces. 
            I'm just as drawn to AI and robotics, and to
            understanding how intelligent systems make decisions. In both, I
            care about technology that is reliable and human-centered.
          </p>
        </div>
      </section>

      {/* D. Selected Projects */}
      <section className="section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-label">Selected work</span>
              <h2>Projects I've been building</h2>
            </div>
            <Button to="/projects" variant="secondary">
              View all projects
            </Button>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* E. Creative Philosophy Preview */}
      <section className="philosophy-banner">
        <div className="container narrow-container text-center">
          <span className="section-label rose-label">Creative philosophy</span>
          <blockquote className="philosophy-quote">
            “True creativity starts with the ultimate Creator, God.”
          </blockquote>
          <p className="philosophy-excerpt">
            There are always new concepts to learn, unfamiliar problems to
            explore and ideas worth coming back to. Through all of it, my aim
            stays simple: think critically, build useful things, and honor God
            with the gifts I've been given.
          </p>
          <Button to="/about" variant="rose">
            Read my full story
          </Button>
        </div>
      </section>

      {/* F. Final Call to Action */}
      <section className="section cta-section">
        <div className="container narrow-container text-center">
          <h2>Let's build something meaningful.</h2>
          <p className="cta-text">
            Whether it's a software project, feedback on my work, or an
            opportunity in tech, I'd love to hear from you.
          </p>
          <div className="cta-actions">
            <Button to="/contact" variant="primary">
              Get in touch
            </Button>
            <Button to="/projects" variant="secondary">
              See my projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}