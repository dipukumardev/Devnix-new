import { notFound } from "next/navigation";
import { services, getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import type { Metadata } from "next";
import ServicePageContent from "@/components/ServicePageContent";

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} | Devnix Digital Agency`,
    description: service.heroDescription,
    keywords: [
      service.title.toLowerCase(),
      "digital agency",
      "devnix",
      ...service.title.toLowerCase().split(" "),
    ],
  };
}

export default async function ServicePage(
  props: PageProps<"/services/[slug]">
) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServicePageContent service={service} />;
}
