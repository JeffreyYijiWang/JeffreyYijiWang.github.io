import { describe, expect, it } from 'vitest';
import { graphicsProjects, projectBySlug, projects } from './projects';

describe('project content', () => {
  it('uses unique stable slugs', () => {
    expect(new Set(projects.map((project) => project.slug)).size).toBe(projects.length);
    expect(projectBySlug.size).toBe(projects.length);
  });

  it('provides accessible media and documentation for every card', () => {
    for (const project of projects) {
      expect(project.media.length).toBeGreaterThan(0);
      expect(project.thumbnail).toMatch(/^\/assets\/generated\/thumbnails\/.+\.webp$/);
      expect(project.media.every((media) => media.alt.trim().length > 8)).toBe(true);
      expect(project.sections.length).toBeGreaterThan(0);
      expect(project.summary.length).toBeGreaterThan(40);
    }
  });

  it('uses valid external URLs and internal related-project references', () => {
    for (const project of projects) {
      for (const link of project.links) expect(() => new URL(link.href)).not.toThrow();
      for (const related of project.related ?? []) expect(projectBySlug.has(related)).toBe(true);
    }
  });

  it('has a meaningful graphics collection', () => {
    expect(graphicsProjects.length).toBeGreaterThanOrEqual(8);
    expect(graphicsProjects.every((project) => project.graphics)).toBe(true);
  });
});
