"use client";

import Image from "next/image";
import { Calendar, MapPin, Users, Gauge } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { Badge } from "@shared/ui/badge";
import { PageContent } from "@shared/ui/page-content";
import { Button } from "@shared/ui/button";
import { ProjectCard } from "@widgets/project-card";
import { LeadForm } from "@features/lead-form";
import { getProjectBySlug, getRelatedProjects } from "@entities/project";
import { Link } from "@shared/i18n/navigation";
import type { Locale } from "@shared/config/locales";

interface ProjectDetailPageProps {
  slug: string;
}

export function ProjectDetailPage({ slug }: ProjectDetailPageProps) {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const i18n = project.i18n[locale];
  const related = getRelatedProjects(slug, 2);
  const capacityLabel = project.stats.capacityLabel[locale];

  const sections = [
    { title: t("projects.sectionSummary"), body: i18n.summary },
    { title: t("projects.sectionChallenge"), body: i18n.challenge },
    { title: t("projects.sectionSolution"), body: i18n.solution },
    { title: t("projects.sectionEquipment"), body: i18n.equipment },
    { title: t("projects.sectionResults"), body: i18n.results },
  ] as const;

  return (
    <main className="bg-background pb-24" id="main-content">
      <div className="relative aspect-[4/3] max-h-[min(52vh,28rem)] w-full lg:aspect-[21/9] lg:max-h-[32rem]">
        <Image
          src={project.images[0] ?? ""}
          alt={i18n.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="from-on-surface/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
      </div>

      <PageContent className="space-y-4 pt-8 lg:space-y-5 lg:pt-10">
        <Breadcrumb
          items={[
            { label: t("nav.home"), href: "/" },
            { label: t("projects.title"), href: "/loyihalar" },
            { label: i18n.title },
          ]}
        />
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="primary">{project.year}</Badge>
          <Badge tone="surface">{i18n.location}</Badge>
        </div>
        <h1 className="font-headline text-on-surface text-4xl font-extrabold tracking-tight lg:text-5xl">
          {i18n.title}
        </h1>
        <div className="bg-primary-container h-1 w-16 rounded-full" aria-hidden />
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">{i18n.tagline}</p>
      </PageContent>

      <PageContent className="py-6 lg:py-8">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          <li className="bg-surface-container-low rounded-2xl p-4">
            <MapPin size={20} className="text-primary mb-2" aria-hidden />
            <p className="font-label text-outline text-[10px] tracking-widest uppercase">
              {t("projects.statLocation")}
            </p>
            <p className="font-headline text-on-surface mt-1 text-sm font-bold">{i18n.location}</p>
          </li>
          <li className="bg-surface-container-low rounded-2xl p-4">
            <Gauge size={20} className="text-primary mb-2" aria-hidden />
            <p className="font-label text-outline text-[10px] tracking-widest uppercase">
              {capacityLabel}
            </p>
            <p className="font-headline text-on-surface mt-1 text-sm font-bold">
              {project.stats.capacityValue}
            </p>
          </li>
          <li className="bg-surface-container-low rounded-2xl p-4">
            <Calendar size={20} className="text-primary mb-2" aria-hidden />
            <p className="font-label text-outline text-[10px] tracking-widest uppercase">
              {t("projects.statDuration")}
            </p>
            <p className="font-headline text-on-surface mt-1 text-sm font-bold">
              {t("projects.durationDays", { days: project.stats.durationDays })}
            </p>
          </li>
          <li className="bg-surface-container-low rounded-2xl p-4">
            <Users size={20} className="text-primary mb-2" aria-hidden />
            <p className="font-label text-outline text-[10px] tracking-widest uppercase">
              {t("projects.statEngineers")}
            </p>
            <p className="font-headline text-on-surface mt-1 text-sm font-bold">
              {project.stats.engineers}
            </p>
          </li>
        </ul>
      </PageContent>

      {project.images.length > 1 ? (
        <PageContent className="pb-6">
          <ul className="grid grid-cols-2 gap-3 lg:grid-cols-3">
            {project.images.slice(1).map((src, idx) => (
              <li
                key={src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:rounded-3xl"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </PageContent>
      ) : null}

      <PageContent className="space-y-10 py-6 lg:py-10">
        {sections.map((section) => (
          <section key={section.title} className="max-w-3xl space-y-3">
            <h2 className="font-headline text-on-surface text-2xl font-extrabold">
              {section.title}
            </h2>
            <p className="text-on-surface-variant leading-relaxed">{section.body}</p>
          </section>
        ))}
      </PageContent>

      <PageContent className="py-8">
        <div className="from-primary-container/25 to-secondary-container/20 border-outline-variant/10 flex flex-col items-start gap-4 rounded-3xl border bg-gradient-to-br p-6 sm:flex-row sm:items-center sm:justify-between lg:p-8">
          <div className="space-y-2">
            <h2 className="font-headline text-on-surface text-xl font-extrabold lg:text-2xl">
              {t("projects.ctaTitle")}
            </h2>
            <p className="text-on-surface-variant max-w-md text-sm leading-relaxed lg:text-base">
              {t("projects.ctaBody")}
            </p>
          </div>
          <Button asChild variant="accent" size="lg">
            <Link href="/kontakt">{t("projects.ctaButton")}</Link>
          </Button>
        </div>
      </PageContent>

      {related.length > 0 ? (
        <PageContent className="space-y-6 py-10 lg:py-12">
          <h2 className="font-headline text-on-surface text-2xl font-extrabold">
            {t("projects.relatedTitle")}
          </h2>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {related.map((p) => (
              <li key={p.slug}>
                <ProjectCard project={p} />
              </li>
            ))}
          </ul>
        </PageContent>
      ) : null}

      <PageContent className="space-y-4 py-10 lg:py-12">
        <header className="space-y-2">
          <Badge tone="primary">{t("product.bottomFormTitle")}</Badge>
          <p className="text-on-surface-variant max-w-xl text-sm leading-relaxed lg:text-base">
            {t("product.bottomFormSubtitle")}
          </p>
        </header>
        <LeadForm />
      </PageContent>
    </main>
  );
}
