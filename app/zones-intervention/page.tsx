import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/PageLayout";
import { Section, SectionHeading } from "@/components/Section";
import { ZoneMapPlaceholder } from "@/components/ZoneMapPlaceholder";
import { CTASection } from "@/components/CTASection";
import { CallButton, PhotoButton } from "@/components/CallButton";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { cities } from "@/lib/zones";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Zones d'intervention frelons & guêpes | Bordeaux et alentours",
  description:
    "Intervention nids de frelons et guêpes à Bordeaux et alentours : Mérignac, Pessac, Talence, Bègles, Lormont, Cenon et toute la métropole. Trouvez votre commune.",
  path: "/zones-intervention",
});

const path = "/zones-intervention";

export default function ZonesPage() {
  const jsonLd = breadcrumbSchema([
    { name: "Accueil", href: "/" },
    { name: "Zones d'intervention", href: path },
  ]);

  return (
    <PageLayout jsonLd={jsonLd} breadcrumbs={[{ name: "Zones d'intervention", href: path }]}>
      <section className="bg-ink text-cream">
        <div className="container-page py-12 lg:py-16">
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">Zones d'intervention</span>
            <h1 className="text-3xl font-extrabold text-cream sm:text-4xl">
              Intervention nids de frelons et guêpes à Bordeaux et alentours
            </h1>
            <p className="mt-4 text-lg text-cream/80">
              Nous nous déplaçons à Bordeaux, dans Bordeaux Métropole et les communes voisines.
              Trouvez votre ville ci-dessous : pour chaque secteur, nous adaptons notre matériel à la
              configuration des habitations.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CallButton showNumber />
              <PhotoButton variant="amber" />
            </div>
          </div>
        </div>
      </section>

      <Section tone="white">
        <ZoneMapPlaceholder />
      </Section>

      <Section tone="cream">
        <SectionHeading
          eyebrow="Communes desservies"
          title="Nos zones d'intervention, ville par ville"
          intro="Chaque commune a ses spécificités : type d'habitat, végétation, emplacements de nids fréquents."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {cities.map((city, i) => (
            <Reveal key={city.name} from="up" delay={(i % 2) * 90} className="h-full">
            <article className="card h-full transition-shadow duration-300 hover:shadow-card">
              <div className="mb-2 flex items-center justify-between gap-3">
                <h2 className="flex items-center gap-2 text-lg font-bold text-ink">
                  <Icon name="pin" className="h-5 w-5 text-eco" />
                  {city.name}
                </h2>
                {city.slug && (
                  <Link
                    href={`/${city.slug}`}
                    className="shrink-0 text-sm font-semibold text-eco hover:text-eco-dark"
                  >
                    Page dédiée →
                  </Link>
                )}
              </div>
              <p className="text-sm leading-relaxed text-graytext">{city.intro}</p>
            </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-graytext">
          Votre commune n'apparaît pas ? Nous intervenons largement autour de Bordeaux :{" "}
          <Link href="/#devis" className="font-semibold text-eco underline">
            contactez-nous
          </Link>{" "}
          pour vérifier.
        </p>
      </Section>

      <CTASection
        title="Un nid à faire retirer près de chez vous ?"
        text="Où que vous soyez dans la métropole bordelaise, appelez-nous ou envoyez une photo du nid pour une intervention rapide et sécurisée."
      />
    </PageLayout>
  );
}
