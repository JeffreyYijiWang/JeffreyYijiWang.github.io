import { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';
import { Seo } from '../components/Seo';
import { graphicsCategories, graphicsProjects } from '../data/projects';

export default function GraphicsPage() {
  const [category, setCategory] = useState('All');
  const visible =
    category === 'All'
      ? graphicsProjects
      : graphicsProjects.filter((project) => project.categories.includes(category));

  return (
    <>
      <Seo
        title="Graphics Portfolio — Jeffrey Wang"
        description="Rendering, visualization, computer vision, creative coding, shaders, and interactive graphics work by Jeffrey Wang."
        path="/graphics"
        image={graphicsProjects[0].thumbnail}
      />
      <div className="content-wrap page-intro">
        <p className="eyebrow">Graphics portfolio</p>
        <h1 className="page-title">Rendering, visualization, and visual systems</h1>
        <p className="page-lede">
          Work across real-time Vulkan rendering, path tracing, volumetric visualization, computer
          vision, creative coding, and games—where images are both technical output and design
          material.
        </p>
        <div className="filter-bar" role="group" aria-label="Filter graphics projects by category">
          {['All', ...graphicsCategories].map((item) => (
            <button
              type="button"
              key={item}
              className={category === item ? 'is-active' : ''}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="results-count" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'project' : 'projects'}
        </p>
        <ul className="project-list graphics-list">
          {visible.map((project, index) => (
            <li key={project.slug}>
              <Reveal>
                <ProjectCard project={project} priority={index === 0} origin="graphics" />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
