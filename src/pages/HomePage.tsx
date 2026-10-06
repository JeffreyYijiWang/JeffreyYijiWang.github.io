import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from '../components/ExternalLink';
import { FileIcon, GithubIcon, LinkedinIcon, MailIcon } from '../components/Icons';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';
import { Seo } from '../components/Seo';
import { interests, skills } from '../data/profile';
import { projects } from '../data/projects';

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jeffrey Wang',
  url: 'https://jeffreyyijiwang.dev',
  image: 'https://jeffreyyijiwang.dev/assets/generated/headshot.webp',
  jobTitle: 'Software Engineer and Computer Graphics Developer',
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Carnegie Mellon University' },
  sameAs: ['https://github.com/JeffreyYijiWang', 'https://www.linkedin.com/in/jeffrey-yiji-wang/'],
};

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText('jw8@andrew.cmu.edu');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <>
      <Seo
        title="Jeffrey Wang — Computer Graphics & Software"
        description="Jeffrey Wang is a computer science and art student building graphics, visualization, web, mobile, and interactive systems."
        path="/"
        image="/assets/generated/headshot.webp"
        jsonLd={homeJsonLd}
      />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grid">
          <div className="hero__photo">
            <img
              src="/assets/generated/headshot.webp"
              alt="Jeffrey Wang"
              width="512"
              height="512"
              fetchPriority="high"
            />
          </div>
          <div className="hero__intro">
            <h1 id="hero-title">Jeffrey Wang</h1>
            <ul className="hero__meta" aria-label="Contact and study information">
              <li>
                <Link to="/education">
                  <strong>Computer Science</strong> and <strong>Art</strong> at Carnegie Mellon
                  University
                </Link>
              </li>
              <li>
                <strong>Location:</strong> Pittsburgh, PA{' '}
                <span className="muted">[from Dallas, TX]</span>
              </li>
              <li className="email-line">
                <strong>Email:</strong>{' '}
                <button type="button" className="copy-email" onClick={() => void copyEmail()}>
                  jw8@andrew.cmu.edu
                  <span className="copy-email__feedback" role="status" aria-live="polite">
                    {copied ? 'Copied!' : ''}
                  </span>
                </button>
              </li>
            </ul>
            <ul className="social-links" aria-label="Social profiles and resume">
              <li>
                <ExternalLink
                  href="https://www.linkedin.com/in/jeffrey-yiji-wang/"
                  showIcon={false}
                  aria-label="Jeffrey Wang on LinkedIn"
                >
                  <LinkedinIcon />
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  href="https://github.com/JeffreyYijiWang"
                  showIcon={false}
                  aria-label="Jeffrey Wang on GitHub"
                >
                  <GithubIcon />
                </ExternalLink>
              </li>
              <li>
                <a href="mailto:jw8@andrew.cmu.edu" aria-label="Email Jeffrey Wang">
                  <MailIcon />
                </a>
              </li>
              <li>
                <a
                  href="/assets/resume/Jeffrey%20Wang%20Resume.pdf"
                  aria-label="Download Jeffrey Wang's resume"
                >
                  <FileIcon />
                </a>
              </li>
            </ul>
          </div>
          <aside className="hero__aside" aria-labelledby="interests-title">
            <h2 id="interests-title">Interests</h2>
            <ul>
              {interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <div className="content-wrap">
        <Reveal>
          <section className="section about" id="about" aria-labelledby="about-title">
            <h2 className="section-title" id="about-title">
              About Me
            </h2>
            <div className="prose">
              <p>
                <strong>Computer Science</strong> and <strong>Art</strong> student at{' '}
                <strong>Carnegie Mellon University</strong> building at the intersection of code and
                visuals. I work in real-time systems, <strong>full-stack development</strong>,
                computer graphics, <strong>data visualization</strong>, and machine learning.
              </p>
              <p>
                Currently, I am a <strong>software engineer</strong> at Handshake and a{' '}
                <strong>software developer</strong> with{' '}
                <ExternalLink href="https://scottylabs.org/">ScottyLabs</ExternalLink>. Previously,
                I worked at the{' '}
                <ExternalLink href="https://www.cmu.edu/ctp/index.html">
                  Center for Transformational Play
                </ExternalLink>{' '}
                and the{' '}
                <ExternalLink href="https://www.sei.cmu.edu/">
                  Software Engineering Institute
                </ExternalLink>
                .
              </p>
            </div>
            <ul className="skill-list" aria-label="Relevant skills and technologies">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        </Reveal>

        <section
          className="section projects-section"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="section-heading-row">
            <h2 className="section-title" id="projects-title">
              Selected Projects
            </h2>
            <Link className="section-link" to="/graphics">
              View graphics portfolio →
            </Link>
          </div>
          <ul className="project-list">
            {projects.map((project, index) => (
              <li key={project.slug}>
                <Reveal>
                  <ProjectCard project={project} priority={index === 0} />
                </Reveal>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
