import type { Project } from '../data/portfolio';

export default function ProjectPreview({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="project-preview project-real-preview">
      <img
        className="project-image"
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        loading="lazy"
      />
    </div>
  );
}