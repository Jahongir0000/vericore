import { PROJECTS, type Project } from "@shared/mock-data/projects";

export function getAllProjects(): Project[] {
  return [...PROJECTS].sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    // Keep newest real installs visible first within the same year
    if (a.slug === "shifer-zavodi") return -1;
    if (b.slug === "shifer-zavodi") return 1;
    return 0;
  });
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getRelatedProjects(slug: string, limit = 2): Project[] {
  const current = getProjectBySlug(slug);
  if (!current) return [];
  return getAllProjects()
    .filter((p) => p.slug !== slug)
    .slice(0, limit);
}
