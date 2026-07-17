import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import type { Metadata } from "next";
import ServicePageContent from "@/components/ServicePageContent";
import CrmServiceContent from "@/components/CrmServiceContent";

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
    title: service.title,
    description: service.heroDescription,
    keywords: [
      service.title.toLowerCase(),
      "digital agency",
      "devnix",
      ...service.title.toLowerCase().split(" "),
    ],
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      type: "website",
      title: service.title,
      description: service.heroDescription,
      url: `/services/${slug}`,
      images: [service.image],
    },
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

  if (slug === "crm-solutions") {
    return <CrmServiceContent />;
  }

  return <ServicePageContent slug={slug} />;
}
