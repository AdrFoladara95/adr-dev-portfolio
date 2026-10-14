import { ExternalLink } from 'lucide-react';

import type { Project } from '../data/portfolio';
import ProjectPreview from './ProjectPreview';

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const hasDemo = /^https?:\/\//i.test(project.demoUrl);

  return (
    <article className="project-card">
      <ProjectPreview project={project} />

      <div className="project-info">
        <div className="project-heading">
          <span className="project-number">
            /{project.number}
          </span>

          <span className="project-category">
            {project.category}
          </span>
        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tech-list">
          {project.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="project-actions">
          {hasDemo ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo <ExternalLink size={15} />
            </a>
          ) : (
            <span className="link-disabled">
              Demo coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}