import Link from "next/link";
import { PageLayout } from "./PageLayout";
import { Section, SectionHeading } from "./Section";
import { CallButton, PhotoButton } from "./CallButton";
import { UrgenceNotice } from "./UrgenceNotice";
import { FAQAccordion } from "./FAQAccordion";
import { CTASection } from "./CTASection";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { Icon } from "./Icon";
import { ContactForm } from "./ContactForm";
import { site } from "@/lib/config";
import { faqLocal } from "@/lib/faq";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/jsonld";

export type LocalContent = {
  /** Bloc de contenu : titre H2 + paragraphes. */
  heading: string;
  paragraphs: string[];
  /** Liste à puces optionnelle sous les paragraphes. */
  bullets?: string[];
};

/** Données complètes d'une page locale (depuis lib/localPages). */
export type LocalPage = {
  city: string;
  slug: string;
  lead: string;
  blocks: LocalContent[];
  nearby: { label: string; href: string }[];
};

type Props = {
  city: string;
  slug: string;
  /** Phrase d'accroche sous le H1. */
  lead: string;
  /** Blocs de contenu uniques (rédigés par page). */
  blocks: LocalContent[];
  /** Liens vers communes proches. */
  nearby: { label: string; href: string }[];
};

/** Gabarit réutilisable pour les pages locales (Mérignac, Pessac, Talence…). */
export function LocalPageTemplate({ city, slug, lead, blocks, nearby }: Props) {
  const faq = faqLocal(city);
  const path = `/${slug}`;

  const jsonLd = [
    serviceSchema({
      name: `Destruction de nid de frelons à ${city}`,
      serviceType: "Destruction de nid de frelons et de guêpes",
      description: lead,
      url: path,
    }),
    faqSchema(faq),
    breadcrumbSchema([
      { name: "Accueil", href: "/" },
      { name: "Zones d'intervention", href: "/zones-intervention" },
      { name: city, href: path },
    ]),
  ];

  // On insère un rappel CTA après le 2e bloc de contenu.
  const ctaAfter = Math.min(2, blocks.length - 1);

  return (
    <PageLayout
      jsonLd={jsonLd}
      breadcrumbs={[
        { name: "Zones d'intervention", href: "/zones-intervention" },
        { name: city, href: path },
      ]}
    >
      {/* Hero local */}
      <section className="bg-ink text-cream">
        <div className="container-page grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <span className="eyebrow mb-4">
              <Icon name="pin" className="h-4 w-4" /> {city} · Bordeaux Métropole
            </span>
            <h1 className="text-3xl font-extrabold text-cream sm:text-4xl">
              Destruction nid de frelons à {city}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-cream/80">{lead}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CallButton showNumber />
              <PhotoButton variant="amber" />
            </div>
          </div>
          <MediaPlaceholder
            src="/images/nid-guepes-macro.jpg"
            alt={`Intervention de destruction de nid de frelons dans une maison à ${city}`}
            caption={`Intervention à ${city}`}
            icon="toiture"
            tone="amber"
            priority
          />
        </div>
      </section>

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <UrgenceNotice />
        </div>

        <article className="prose-local mx-auto mt-10 max-w-3xl">
          {blocks.map((block, i) => (
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

              {i === ctaAfter && (
                <div className="my-8 flex flex-col items-center gap-3 rounded-2xl bg-amber/10 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
                  <p className="font-display text-lg font-bold text-ink">
                    Un nid actif à {city} ? Ne prenez aucun risque.
                  </p>
                  <CallButton className="shrink-0" />
                </div>
              )}
            </div>
          ))}
        </article>
      </Section>

      {/* Communes proches */}
      <Section tone="cream" spacing="tight">
        <SectionHeading
          align="left"
          eyebrow="À proximité"
          title={`Nous intervenons aussi près de ${city}`}
        />
        <div className="flex flex-wrap gap-3">
          {nearby.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink shadow-soft hover:border-amber hover:text-amber-dark"
            >
              <Icon name="pin" className="h-4 w-4 text-eco" />
              {n.label}
            </Link>
          ))}
        </div>
      </Section>

      {/* Devis + FAQ */}
      <Section tone="white" id="devis">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Demande de devis"
              title={`Faire retirer un nid à ${city}`}
              intro={`Décrivez votre situation : nous vous donnons un avis clair avant tout déplacement. Pour une urgence, appelez le ${site.phone}.`}
            />
            <ContactForm />
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Questions fréquentes" title={`FAQ — ${city}`} />
            <FAQAccordion items={faq} />
          </div>
        </div>
      </Section>

      <CTASection
        title={`Nid de frelons ou de guêpes à ${city} ?`}
        text={`Intervention rapide et sécurisée à ${city} et dans les communes voisines. Appelez-nous ou envoyez une photo du nid.`}
      />
    </PageLayout>
  );
}
