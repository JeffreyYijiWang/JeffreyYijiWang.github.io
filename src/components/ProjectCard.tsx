import { Link } from 'react-router-dom';
import { useReducedMotion } from '../hooks/useReducedMotion';
import type { Project } from '../types';
import { ExternalLink } from './ExternalLink';
import { GithubIcon } from './Icons';
import { TagList } from './TagList';

export function ProjectCard({
  project,
  priority = false,
  origin = 'projects',
}: {
  project: Project;
  priority?: boolean;
  origin?: 'projects' | 'graphics';
}) {
  const reducedMotion = useReducedMotion();
  const repository = project.links.find((link) => link.kind === 'repository');
  const secondary = project.links.find((link) => link.kind !== 'repository');
  const cover = project.media[0];

  return (
    <article className="project-card">
      <div className="project-card__media">
        <img
          src={project.thumbnail}
          alt={cover.alt}
          width="800"
          height="500"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
        />
        {!reducedMotion && cover.src.toLowerCase().endsWith('.gif') && (
          <span className="project-card__motion-note">Animation in case study</span>
        )}
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">
          <Link
            className="project-card__primary-link"
            to={`/projects/${project.slug}`}
            state={{ from: origin }}
          >
            {project.title}
          </Link>
        </h3>
        <TagList tags={project.tags} />
        <p>{project.summary}</p>
        <div className="project-card__actions">
          {repository && (
            <ExternalLink
              className="icon-link"
              href={repository.href}
              showIcon={false}
              aria-label={`${project.title} repository on GitHub`}
            >
              <GithubIcon />
            </ExternalLink>
          )}
          {secondary && (
            <ExternalLink className="text-link" href={secondary.href}>
              {secondary.label}
            </ExternalLink>
          )}
          <span className="project-card__read-more" aria-hidden="true">
            Read case study →
          </span>
        </div>
      </div>
    </article>
  );
}
