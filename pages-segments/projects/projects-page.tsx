import { getTranslations } from "next-intl/server";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { PageContent } from "@shared/ui/page-content";
import { getAllProjects } from "@entities/project";
import { ProjectsList } from "./projects-list";

export async function ProjectsPage() {
  const t = await getTranslations();
  const projects = getAllProjects();

  return (
    <main className="bg-background pt-8 pb-14" id="main-content">
      <PageContent className="space-y-4 pb-7 lg:pb-9">
        <Breadcrumb items={[{ label: t("nav.home"), href: "/" }, { label: t("projects.title") }]} />
        <header className="max-w-2xl space-y-3">
          <span className="font-label text-primary text-xs font-bold tracking-widest uppercase">
            {t("projects.badge")}
          </span>
          <h1 className="font-headline text-on-surface text-4xl font-extrabold tracking-tight lg:text-5xl">
            {t("projects.title")}
          </h1>
          <div className="bg-primary-container h-1 w-16 rounded-full lg:w-20" aria-hidden />
          <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
            {t("projects.subtitle")}
          </p>
        </header>
      </PageContent>

      <PageContent>
        <ProjectsList projects={projects} />
      </PageContent>
    </main>
  );
}
