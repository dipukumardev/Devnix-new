import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getProjectBySlug,
  getAllProjectSlugs,
} from "@/data/portfolio";
import ProjectPageContent from "@/components/ProjectPageContent";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} | Devnix Case Study`,
    description: project.summary,
    keywords: [
      project.title.toLowerCase(),
      "case study",
      "portfolio",
      "devnix",
      ...project.tags.map((t) => t.toLowerCase()),
    ],
  };
}

export default async function WorkProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectPageContent slug={slug} />;
}
