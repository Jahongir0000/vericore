import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@pages-segments/project-detail";
import { getAllProjects, getProjectBySlug } from "@entities/project";
import { buildMetadata } from "@shared/seo/generate-metadata";
import { LOCALES, type Locale } from "@shared/config/locales";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return getAllProjects().flatMap((project) =>
    LOCALES.map((locale) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const loc = locale as Locale;
  const i18n = project.i18n[loc];
  return buildMetadata({
    title: `${i18n.title} | Verikore Global`,
    description: i18n.summary,
    locale,
    path: `/loyihalar/${slug}`,
  });
}

export default async function Page({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  if (!getProjectBySlug(slug)) notFound();
  return <ProjectDetailPage slug={slug} />;
}
