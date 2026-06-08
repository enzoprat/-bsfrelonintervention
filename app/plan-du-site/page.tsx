import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/PageLayout";
import { Section } from "@/components/Section";
import { Icon } from "@/components/Icon";
import { routes, groups } from "@/lib/routes";

export const metadata: Metadata = buildMetadata({
  title: "Plan du site | Frelons & guêpes Bordeaux",
  description:
    "Plan du site : retrouvez toutes les pages du site de destruction de nids de frelons et de guêpes à Bordeaux et alentours.",
  path: "/plan-du-site",
});

export default function PlanDuSitePage() {
  return (
    <PageLayout breadcrumbs={[{ name: "Plan du site", href: "/plan-du-site" }]}>
      <Section tone="white">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow mb-3">Navigation</span>
          <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">Plan du site</h1>
          <p className="mt-4 text-lg text-graytext">
            Toutes les pages du site, organisées par catégorie.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {groups.map((group) => {
            const items = routes.filter((r) => r.group === group);
            if (items.length === 0) return null;
            return (
              <div key={group} className="card">
                <h2 className="mb-3 text-lg font-bold text-ink">{group}</h2>
                <ul className="space-y-2">
                  {items.map((r) => (
                    <li key={r.path}>
                      <Link
                        href={r.path}
                        className="flex items-center gap-2 text-sm font-medium text-eco hover:text-eco-dark"
                      >
                        <Icon name="arrow" className="h-4 w-4" />
                        {r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>
    </PageLayout>
  );
}
