import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { ProjectsPage } from "@pages-segments/projects";
import { buildMetadata } from "@shared/seo/generate-metadata";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    locale,
    path: "/loyihalar",
  });
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProjectsPage />;
}
