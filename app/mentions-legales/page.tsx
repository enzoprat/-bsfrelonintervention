import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/PageLayout";
import { Section } from "@/components/Section";
import { site } from "@/lib/config";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Mentions légales | " + site.shortName,
    description:
      "Mentions légales du site de destruction de nids de frelons et de guêpes à Bordeaux et alentours.",
    path: "/mentions-legales",
  }),
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <PageLayout breadcrumbs={[{ name: "Mentions légales", href: "/mentions-legales" }]}>
      <Section tone="white">
        <article className="prose-local mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">Mentions légales</h1>
          <p className="text-sm text-graytext">
            Conformément aux articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004 pour la
            confiance dans l'économie numérique, voici les informations relatives à l'éditeur et à
            l'hébergeur du présent site.
          </p>

          <h2>Éditeur du site</h2>
          <p>
            <strong>{site.name}</strong>
            <br />
            Entreprise individuelle exerçant une activité de destruction de nids de frelons, frelons
            asiatiques et guêpes.
            <br />
            Zone d'intervention : {site.addressZone}.
            <br />
            Téléphone : {site.phone}
            <br />
            Responsable de la publication : le représentant légal de {site.name}.
          </p>

          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
            — <a href="https://vercel.com" target="_blank" rel="noopener">vercel.com</a>.
          </p>

          <h2>Activité</h2>
          <p>
            {site.name} propose des prestations de destruction de nids de frelons, frelons asiatiques
            et guêpes à domicile à Bordeaux et dans toute la métropole. Les interventions sont
            réalisées avec un équipement de protection adapté et dans le respect des règles de
            sécurité.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus de ce site (textes, visuels, photographies, logo, structure et
            mise en forme) est protégé par le droit de la propriété intellectuelle et reste la
            propriété de {site.name} ou de leurs auteurs respectifs. Toute reproduction,
            représentation ou diffusion, totale ou partielle, sans autorisation préalable écrite est
            interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et
            suivants du Code de la propriété intellectuelle.
          </p>

          <h2>Responsabilité</h2>
          <p>
            Les informations fournies sur ce site le sont à titre indicatif. {site.name} s'efforce
            d'en assurer l'exactitude et la mise à jour, mais ne saurait être tenu responsable
            d'éventuelles erreurs, omissions ou indisponibilités du site. Les tarifs affichés sont
            donnés à titre indicatif et confirmés après diagnostic de la situation.
          </p>

          <h2>Liens hypertextes</h2>
          <p>
            Ce site peut contenir des liens vers d'autres sites. {site.name} n'exerce aucun contrôle
            sur ces ressources externes et décline toute responsabilité quant à leur contenu.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Le traitement des données transmises via le formulaire de demande de devis est décrit
            dans notre <a href="/politique-confidentialite">politique de confidentialité</a>.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question relative au site, à une intervention ou à vos données, contactez-nous
            au {site.phone}.
          </p>
        </article>
      </Section>
    </PageLayout>
  );
}
