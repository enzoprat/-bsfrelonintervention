import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/PageLayout";
import { Section, SectionHeading } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { articles } from "@/lib/articles";
import { breadcrumbSchema } from "@/lib/jsonld";

const path = "/conseils";

export const metadata: Metadata = buildMetadata({
  title: "Conseils frelons et guêpes : guides pratiques | Bordeaux",
  description:
    "Nos conseils pour reconnaître, prévenir et gérer les nids de frelons et de guêpes : que faire face à un nid, différencier les espèces, prix, piqûres et sécurité.",
  path,
});

export default function ConseilsPage() {
  const jsonLd = breadcrumbSchema([
    { name: "Accueil", href: "/" },
    { name: "Conseils", href: path },
  ]);

  return (
    <PageLayout jsonLd={jsonLd} breadcrumbs={[{ name: "Conseils", href: path }]}>
      <section className="bg-ink text-cream">
        <div className="container-page py-12 lg:py-16">
          <span className="eyebrow mb-4">Guides pratiques</span>
          <h1 className="text-3xl font-extrabold text-cream sm:text-4xl">
            Conseils frelons &amp; guêpes
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-cream/80">
            Reconnaître une espèce, réagir face à un nid, comprendre les prix ou gérer une piqûre :
            nos guides clairs et fiables pour prendre les bonnes décisions en sécurité.
          </p>
        </div>
      </section>

      <Section tone="white">
        <SectionHeading
          align="left"
          eyebrow="Tous nos articles"
          title="Nos derniers conseils"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {articles.map((article, i) => (
            <Reveal key={article.slug} delay={i * 80}>
              <Link
                href={`/conseils/${article.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-amber hover:shadow-card"
              >
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-amber/10 px-3 py-1 text-xs font-semibold text-amber-dark">
                  {article.category}
                </span>
                <h2 className="mt-4 font-display text-xl font-bold text-ink group-hover:text-amber-dark">
                  {article.title}
                </h2>
                <p className="mt-3 flex-1 text-graytext">{article.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-dark">
                  Lire l'article
                  <Icon
                    name="arrow"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Un doute sur un nid ? Demandez un avis."
        text="Envoyez une photo ou appelez-nous : nous identifions l'espèce et vous conseillons avant toute intervention à Bordeaux et alentours."
      />
    </PageLayout>
  );
}
