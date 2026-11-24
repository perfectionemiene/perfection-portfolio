import Button from '../components/Button';
import usePageMeta from '../hooks/usePageMeta';
import CertificateButton from '../components/CertificateButton';
import { DownloadIcon } from '../components/Icons';
import { site } from '../data/site';

// Add a certificate by putting the file in public/certificates/ and setting
// `certificate` to its path, e.g. '/certificates/axia-africa.png'.
// Images (.png, .jpg, .webp) open in a pop-up viewer on the page.
// Leave it empty ('') and no "View certificate" button is shown.
const credentials = [
  {
    title: 'B.Sc. Computer Science',
    issuer: 'Miva Open University',
    period: 'In progress',
    note: 'Core studies in programming, software engineering, algorithms and computing systems.',
    certificate: '',
  },
  {
    title: 'Machine Learning Internship',
    issuer: 'UNICCON Institute of Technology',
    period: 'Current',
    note: 'Hands-on experience preparing datasets, training models and evaluating intelligent systems.',
    certificate: '',
  },
  {
    title: 'Miva Robotics Lab Fellows Program',
    issuer: 'Miva Robotics Lab',
    period: 'Current',
    note: 'Fellow in the first cohort, selected to expand my practical knowledge of robotics and intelligent systems through technical learning and collaboration.',
    certificate: '', // '/certificates/miva-robotics-fellows.png'
  },
  {
    title: 'Robotics Tutor Training Bootcamp',
    issuer: 'Nigenius',
    period: '2026',
    note: 'Practical robotics training covering sensors, microcontrollers, actuation and autonomous systems, preparing me to contribute as a tutor.',
    certificate: '', // '/certificates/nigenius-robotics.png'
  },
  {
    title: 'Cybersecurity Training',
    issuer: 'Axia Africa',
    period: 'May to Aug 2025',
    note: 'Cybersecurity fundamentals and networking concepts, with hands-on vulnerability assessment and penetration testing (VAPT) exercises using bWAPP.',
    certificate: '/certificates/axia-africa.png', // '/certificates/axia-africa.png'
  },
  {
    title: 'Microelectronics Credential',
    issuer: 'Chipmango',
    period: '2026',
    note: 'Exploration of microelectronics principles that support my growing work in Robotics.',
    certificate: '/certificates/chipmango-microelectronics.png', 
  },
  {
    title: 'Circuit Essentials Credential',
    issuer: 'Chipmango',
    period: '2026',
    note: 'Hardware and circuit fundamentals that support my growing work in robotics and embedded systems.',
    certificate: '/certificates/chipmangocircuit.png', 
  },
  {
    title: 'Digital Transformation with Google Cloud',
    issuer: 'Google Cloud & Google Skills',
    period: '2026',
    note: 'Micro-credentials covering cloud infrastructure and modern digital workflows.',
    certificate: '/certificates/google-cloud-genai.png', 
  },
];

export default function About() {
  usePageMeta('About', 'The story of Perfection Odeh: a Computer Science student whose work in web development, machine learning and robotics is rooted in creativity and faith.');
  return (
    <div className="about-theme">
      {/* A. Page Introduction */}
      <section className="section about-hero">
        <div className="container narrow-container">
          <span className="section-label rose-label">About me</span>
          <h1>More than what I build.</h1>
          <p className="about-lead">
            I'm Perfection Odeh: a Computer Science student, web developer,
            Machine Learning Intern and creative, drawn to the place where
            logic, design and purpose meet.
          </p>
          <p>
            What I build is only half the story. The part I care about most is{' '}
            <em>why</em> I build.
          </p>
        </div>
      </section>

      {/* B. Merged Creative Philosophy */}
      <section className="section about-philosophy">
        <div className="container narrow-container">
          <span className="section-label rose-label">Creative philosophy</span>
          <h2>Inspired by Design. Rooted in the Imago Dei.</h2>

          <div className="essay-body">
            <p>
              True creativity starts with the ultimate Creator, <strong>God</strong>. The word{' '}
              <em>creativity</em> comes from the Latin <em>creāre</em>, which
              means “to produce or cause to grow.” Only God can create out of
              nothing (<em>creatio ex nihilo</em>), but Genesis 1:27 reminds us
              that He uniquely fashioned humanity in His own image. The Latin
              phrase for that is <strong>Imago Dei</strong>.
            </p>

            <p>
              Because we carry His imprint, we're invited to mirror His
              creativity by working with the raw materials, logic and
              inspiration He has given us. I don't see my work as independent
              invention. I see it as a humble reflection of His craftsmanship.
              So for me, creativity isn't just about making something clever or
              good-looking. It's about intention, stewardship and building
              things that genuinely serve people.
            </p>

            <p>
              That God-given imagination shows up in places that might look
              unrelated. In <strong>web development</strong>, it's clean code
              that turns a blank screen into a clear, human-centered
              experience. In <strong>robotics and machine learning</strong>,
              it's pairing algorithms with hardware to explore how intelligent
              systems perceive and respond to the real world. And in my
              downtime, it's <strong>crochet</strong>, through my brand{' '}
              <em>Perfectly Hooked</em>, where I turn yarn into intricate designs.
            </p>

            <p>
              Whether a project is digital, mechanical or made of yarn, it
              comes back to the same truth. Before I'm a developer or a
              technologist, I'm God's creation, using the hands and mind my
              Father gave me to reflect His endless capacity to create.
            </p>
          </div>

          <blockquote className="about-callout">
            “Created with purpose, now I build with intention.”
          </blockquote>
        </div>
      </section>

      {/* C. Personal Story */}
      <section className="section about-story">
        <div className="container narrow-container">
          <span className="section-label rose-label">My journey into tech</span>
          <h2>Curiosity became direction.</h2>

          <div className="essay-body">
            <p>
              My path into tech didn't start with a five-year plan. It started
              with allot of time on my hands and a willingness to explore. One of my first
              steps was cybersecurity training with <strong>Axia Africa</strong>,
              where I learned how digital systems are protected and why
              structure and responsibility matter behind the scenes. But the
              more I looked at how systems get defended, the more I wanted to
              understand how they're made in the first place. I wanted to
              build.
            </p>

            <p>
              That led me to a Computer Science degree at{' '}
              <strong>Miva Open University</strong> and into web development. I
              started with HTML, CSS and JavaScript and fell in love with the
              whole craft: turning requirements into clear interfaces, planning
              layouts and learning from the times it didn't work on the first try.
            </p>

            <p>
              These days my curiosity has stretched into{' '}
              <strong>Artificial Intelligence, Machine Learning and Robotics</strong>.
              Through my Machine Learning internship and my own exploring, I'm
              building practical foundations in data, models, and how
              intelligent software can connect to physical automation. I don't
              see myself as a finished product. I'm an intentional student of
              the things I hope to build.
            </p>
          </div>
        </div>
      </section>

      {/* D. What I Am Building Towards */}
      <section className="section about-focus">
        <div className="container">
          <div className="narrow-container" style={{ marginBottom: '2.5rem' }}>
            <span className="section-label rose-label">Current focus</span>
            <h2>What I'm building towards</h2>
          </div>

          <div className="focus-grid">
            <div className="focus-card">
              <h3>Web development and UI</h3>
              <p>
                Designing and building responsive, accessible websites with
                React, JavaScript and other programming languages.
              </p>
            </div>

            <div className="focus-card">
              <h3>Machine learning and AI</h3>
              <p>
                Strengthening my applied ML foundations through my internship,
                and learning how data and models power adaptive solutions.
              </p>
            </div>

            <div className="focus-card">
              <h3>Robotics and automation</h3>
              <p>
                Exploring how software logic, sensors and microelectronics work
                together to interact with the physical world.
              </p>
            </div>

            <div className="focus-card">
              <h3>Creative craft and entrepreneurship</h3>
              <p>
                Running <em>Perfectly Hooked</em>, my handmade crochet
                accessories brand, where design and hands-on artistry
                meet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* E. Education & Credentials */}
      <section className="section about-credentials">
        <div className="container narrow-container">
          <span className="section-label rose-label">Learning and milestones</span>
          <h2>Education and credentials</h2>

          <div className="credentials-list">
            {credentials.map((item) => (
              <div key={item.title} className="credential-item">
                <div className="credential-header">
                  <h3>{item.title}</h3>
                  <span className="credential-badge">{item.period}</span>
                </div>
                <p className="credential-issuer">{item.issuer}</p>
                <p className="credential-note">{item.note}</p>
                {item.certificate && (
                  <CertificateButton file={item.certificate} title={item.title} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F. Still Becoming (Closing) */}
      <section className="section about-closing">
        <div className="container narrow-container text-center">
          <span className="section-label rose-label">Still becoming</span>
          <h2>Growing with humility, creating with intention.</h2>
          <p className="closing-paragraph">
            Growth is rarely a straight line. There are always new concepts to
            learn, unfamiliar problems to untangle and ideas worth coming back
            to. Through all of it, my aim stays simple: think critically, build
            useful things, and honor God with the gifts I've been given.
          </p>
          <p className="signature-lines">
            I'm Perfection Odeh.
            <br />A Computer Science student. A creative thinker. An aspiring
            technologist.
          </p>

          <div className="cta-actions">
            <Button to="/projects" variant="primary">
              Explore my work
            </Button>
            <Button to="/contact" variant="secondary">
              Get in touch
            </Button>
            <Button href={site.cv.href} download={site.cv.filename} variant="ghost">
              <DownloadIcon /> Download CV
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}