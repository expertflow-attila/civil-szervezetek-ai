import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getOrgContent, getAllOrgSlugs } from "@/lib/get-org-content";
import { Hero } from "@/components/org/Hero";
import { Situation } from "@/components/org/Situation";
import { UseCases } from "@/components/org/UseCases";
import { Surprises } from "@/components/org/Surprises";
import { ReadyPackages } from "@/components/org/ReadyPackages";
import { Timeline } from "@/components/org/Timeline";
import { Stack } from "@/components/org/Stack";
import { Metrics } from "@/components/org/Metrics";
import { Gdpr } from "@/components/org/Gdpr";
import { Download } from "@/components/org/Download";
import { StartHere } from "@/components/org/StartHere";
import { Footer } from "@/components/org/Footer";

export async function generateStaticParams() {
  return getAllOrgSlugs().map((slug) => ({ org: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ org: string }>;
}): Promise<Metadata> {
  const { org } = await params;
  const content = await getOrgContent(org);
  if (!content) return {};
  return {
    title: `${content.org.name} — AI a napi munkában · Expert Flow`,
    description: content.org.lead,
  };
}

export default async function OrgPage({
  params,
}: {
  params: Promise<{ org: string }>;
}) {
  const { org } = await params;
  const content = await getOrgContent(org);
  if (!content) notFound();

  return (
    <main className="relative">
      <Hero content={content} />
      <Situation content={content} />
      <UseCases content={content} />
      <ReadyPackages content={content} />
      <Surprises content={content} />
      <Timeline content={content} />
      <Stack content={content} />
      <Metrics content={content} />
      <Gdpr content={content} />
      <Download content={content} />
      <StartHere />
      <Footer content={content} />
    </main>
  );
}
