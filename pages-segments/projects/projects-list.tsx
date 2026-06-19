"use client";

import { ProjectCard } from "@widgets/project-card";
import type { Project } from "@entities/project";

interface ProjectsListProps {
  projects: Project[];
}

export function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {projects.map((project, idx) => (
        <li key={project.slug}>
          <ProjectCard project={project} priority={idx < 2} />
        </li>
      ))}
    </ul>
  );
}
