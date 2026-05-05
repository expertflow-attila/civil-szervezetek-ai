import { pageContent } from "@/content/page-data";
import { Hero } from "@/components/Hero";
import { Situation } from "@/components/Situation";
import { UseCases } from "@/components/UseCases";
import { Surprises } from "@/components/Surprises";
import { Timeline } from "@/components/Timeline";
import { Stack } from "@/components/Stack";
import { Metrics } from "@/components/Metrics";
import { Gdpr } from "@/components/Gdpr";
import { Download } from "@/components/Download";
import { StartHere } from "@/components/StartHere";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Hero content={pageContent} />
      <Situation content={pageContent} />
      <UseCases content={pageContent} />
      <Surprises content={pageContent} />
      <Timeline content={pageContent} />
      <Stack content={pageContent} />
      <Metrics content={pageContent} />
      <Gdpr content={pageContent} />
      <Download content={pageContent} />
      <StartHere />
      <Footer content={pageContent} />
    </main>
  );
}
