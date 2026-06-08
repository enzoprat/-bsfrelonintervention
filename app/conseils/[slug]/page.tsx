import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/PageLayout";
import { Section } from "@/components/Section";
import { UrgenceNotice } from "@/components/UrgenceNotice";
import { CTASection } from "@/components/CTASection";
import { CallButton } from "@/components/CallButton";
import { Icon } from "@/components/Icon";
import { articles, getArticle } from "@/lib/articles";
import { articleSchema, breadcrumbSchema } from "@/lib/jsonld";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/conseils/${article.slug}`,
  });
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const path = `/conseils/${article.slug}`;
  const jsonLd = [
    articleSchema({
      title: article.title,
      description: article.description,
      url: path,
      datePublished: article.date,
    }),
    breadcrumbSchema([
      { name: "Accueil", href: "/" },
      { name: "Conseils", href: "/conseils" },
      { name: article.title, href: path },
    ]),
  ];

  const dateLabel = new Date(article.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <PageLayout
      jsonLd={jsonLd}
      breadcrumbs={[
        { name: "Conseils", href: "/conseils" },
        { name: article.title, href: path },
      ]}
    >
      <section className="bg-ink text-cream">
        <div className="container-page py-12 lg:py-16">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-amber/20 px-3 py-1 text-xs font-semibold text-amber">
            {article.category}
          </span>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold text-cream sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-cream/80">{article.excerpt}</p>
          <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-cream/60">
            <span className="flex items-center gap-2">
              <Icon name="clock" className="h-4 w-4 text-amber" />
              {article.readingTime} de lecture
            </span>
            <time dateTime={article.date}>{dateLabel}</time>
          </p>
        </div>
      </section>

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <UrgenceNotice />
        </div>

        <article className="prose-local mx-auto mt-10 max-w-3xl">
          {article.blocks.map((block) => (
            <div key={block.heading}>
              <h2>{block.heading}</h2>
              {block.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
              {block.bullets && (
                <ul>
                  {block.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="my-8 flex flex-col items-center gap-3 rounded-2xl bg-amber/10 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="font-display text-lg font-bold text-ink">
              Un nid à faire retirer ? Demandez un avis rapide.
            </p>
            <CallButton className="shrink-0" />
          </div>
        </article>

        {article.related.length > 0 && (
          <div className="mx-auto mt-10 max-w-3xl">
            <h2 className="font-display text-lg font-bold text-ink">À lire aussi</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {article.related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink shadow-soft hover:border-amber hover:text-amber-dark"
                >
                  <Icon name="chevron" className="h-4 w-4 text-eco" />
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Section>

      <CTASection />
    </PageLayout>
  );
}
