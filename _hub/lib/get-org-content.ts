import type { PageContent } from "./types";

const loaders = {
  "01-noe": () => import("@/content/orgs/01-noe"),
  "02-egyszulos-kozpont": () => import("@/content/orgs/02-egyszulos-kozpont"),
  "03-fonjuk": () => import("@/content/orgs/03-fonjuk"),
  "04-deveny-peto": () => import("@/content/orgs/04-deveny-peto"),
  "05-elelmiszerbank": () => import("@/content/orgs/05-elelmiszerbank"),
  "06-ezust-vonal": () => import("@/content/orgs/06-ezust-vonal"),
  "07-hintalovon": () => import("@/content/orgs/07-hintalovon"),
  "08-mopesz": () => import("@/content/orgs/08-mopesz"),
  "09-indahouse": () => import("@/content/orgs/09-indahouse"),
  "10-bagazs": () => import("@/content/orgs/10-bagazs"),
  "11-nane": () => import("@/content/orgs/11-nane"),
  "12-hunor": () => import("@/content/orgs/12-hunor"),
} as const;

export type OrgSlug = keyof typeof loaders;

export async function getOrgContent(slug: string): Promise<PageContent | null> {
  if (!(slug in loaders)) return null;
  const mod = await loaders[slug as OrgSlug]();
  return mod.pageContent;
}

export function getAllOrgSlugs(): OrgSlug[] {
  return Object.keys(loaders) as OrgSlug[];
}
