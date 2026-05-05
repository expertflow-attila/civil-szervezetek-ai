import { HubHero } from "@/components/HubHero";
import { PromiseSection } from "@/components/Promise";
import { OrgGrid } from "@/components/OrgGrid";
import { Methodology } from "@/components/Methodology";
import { ClaudeForNonprofits } from "@/components/ClaudeForNonprofits";
import { HubFooter } from "@/components/HubFooter";

export default function HubPage() {
  return (
    <main className="relative">
      <HubHero />
      <PromiseSection />
      <OrgGrid />
      <Methodology />
      <ClaudeForNonprofits />
      <HubFooter />
    </main>
  );
}
