import { Link, useLocation, useParams } from 'react-router-dom';
import { ExternalLink } from '../components/ExternalLink';
import { ArrowLeftIcon, GithubIcon } from '../components/Icons';
import { MediaGallery } from '../components/MediaGallery';
import { Seo } from '../components/Seo';
import { TagList } from '../components/TagList';
import { projectBySlug } from '../data/projects';
import NotFoundPage from './NotFoundPage';

export default function ProjectDetailPage() {
  const { slug = '' } = useParams();
  const location = useLocation();
  const project = projectBySlug.get(slug);

  if (!project) return <NotFoundPage />;

  const routeState = location.state as { from?: string } | null;
  const backTo = routeState?.from === 'graphics' ? '/graphics' : '/#projects';
  const backLabel = routeState?.from === 'graphics' ? 'Back to graphics' : 'Back to projects';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    creator: { '@type': 'Person', name: 'Jeffrey Wang' },
    url: `https://jeffreyyijiwang.dev/projects/${project.slug}`,
    image: `https://jeffreyyijiwang.dev${project.thumbnail}`,
    keywords: project.tags.join(', '),
  };

  return (
    <>
      <Seo
        title={`${project.title} — Jeffrey Wang`}
        description={project.summary}
        path={`/projects/${project.slug}`}
        image={project.thumbnail}
        type="article"
        jsonLd={jsonLd}
      />
      <article className="project-detail">
        <div className="content-wrap">
          <Link className="back-link" to={backTo}>
            <ArrowLeftIcon /> {backLabel}
          </Link>
          <header className="project-detail__header">
            <p className="eyebrow">Project case study</p>
            <h1>{project.title}</h1>
            <p className="project-detail__summary">{project.summary}</p>
            <TagList tags={project.tags} />
            <div className="project-detail__links">
              {project.links.map((link) => (
                <ExternalLink className="button-link" key={link.href} href={link.href}>
                  {link.kind === 'repository' && <GithubIcon />}
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </header>

          <MediaGallery key={project.slug} media={project.media} title={project.title} />

          <div className="project-detail__body">
            <aside className="project-facts" aria-label="Project facts">
              {project.facts?.map((fact) => (
                <p key={fact.label}>
                  <strong>{fact.label}</strong>
                  <span>{fact.value}</span>
                </p>
              ))}
            </aside>
            <div className="project-writeup">
              <section className="tldr" aria-labelledby="tldr-title">
                <h2 id="tldr-title">TL;DR</h2>
                <p>{project.tldr}</p>
              </section>
              {project.sections.map((section) => (
                <section
                  key={section.heading}
                  aria-labelledby={`${project.slug}-${section.heading.toLowerCase().replaceAll(' ', '-')}`}
                >
                  <h2 id={`${project.slug}-${section.heading.toLowerCase().replaceAll(' ', '-')}`}>
                    {section.heading}
                  </h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
              {project.todo && (
                <aside className="content-todo" aria-labelledby="content-todo-title">
                  <h2 id="content-todo-title">Documentation TODO</h2>
                  <p>{project.todo}</p>
                </aside>
              )}
            </div>
          </div>

          {project.related && project.related.length > 0 && (
            <nav className="related-projects" aria-label="Related projects">
              <h2>Related projects</h2>
              <ul>
                {project.related.map((relatedSlug) => {
                  const related = projectBySlug.get(relatedSlug);
                  return related ? (
                    <li key={related.slug}>
                      <Link to={`/projects/${related.slug}`}>{related.title} →</Link>
                    </li>
                  ) : null;
                })}
              </ul>
            </nav>
          )}
        </div>
      </article>
    </>
  );
}
