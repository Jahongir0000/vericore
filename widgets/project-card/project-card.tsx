"use client";

import Image from "next/image";
import { Calendar, ChevronRight, MapPin } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@shared/i18n/navigation";
import { Button } from "@shared/ui/button";
import type { Project } from "@entities/project";
import type { Locale } from "@shared/config/locales";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const t = useTranslations("projects");
  const locale = useLocale() as Locale;
  const i18n = project.i18n[locale];
  const coverSrc = project.images[0];
  const useBlobImage = Boolean(coverSrc?.includes("blob.vercel-storage.com"));

  return (
    <article className="bg-surface-container-lowest shadow-soft border-outline-variant/10 group flex flex-col overflow-hidden rounded-3xl border">
      <Link href={`/loyihalar/${project.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          {coverSrc ? (
            <Image
              src={coverSrc}
              alt={i18n.title}
              fill
              unoptimized={useBlobImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={priority}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : null}
          <div className="from-on-surface/70 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent p-4 pt-12">
            <span className="font-label text-primary-fixed inline-flex items-center gap-1 rounded-lg bg-black/30 px-2 py-1 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm">
              {project.year}
            </span>
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="space-y-2">
          <h3 className="font-headline text-on-surface text-xl leading-tight font-extrabold">
            <Link
              href={`/loyihalar/${project.slug}`}
              className="hover:text-primary transition-colors"
            >
              {i18n.title}
            </Link>
          </h3>
          <p className="text-on-surface-variant flex items-center gap-1.5 text-sm">
            <MapPin size={14} className="text-primary shrink-0" aria-hidden />
            {i18n.location}
          </p>
          <p className="text-on-surface-variant line-clamp-2 text-sm leading-relaxed">
            {i18n.tagline}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <span className="text-on-surface-variant flex items-center gap-1 text-xs">
            <Calendar size={14} className="text-primary" aria-hidden />
            {t("durationDays", { days: project.stats.durationDays })}
          </span>
          <Button asChild variant="accent" size="sm">
            <Link href={`/loyihalar/${project.slug}`}>
              {t("viewProject")}
              <ChevronRight size={16} aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
