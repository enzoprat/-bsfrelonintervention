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
            Les informations ci-dessous sont à compléter avec les données réelles de l'entreprise
            (champs entre crochets).
          </p>

          <h2>Éditeur du site</h2>
          <p>
            <strong>{site.name}</strong>
            <br />
            Forme juridique : [[FORME_JURIDIQUE]]
            <br />
            Adresse / zone : {site.addressZone}
            <br />
            Téléphone : {site.phone}
            <br />
            E-mail : {site.email}
            <br />
            SIRET : [[SIRET]]
            <br />
            Numéro de TVA intracommunautaire : [[TVA]]
            <br />
            Directeur de la publication : [[DIRECTEUR_PUBLICATION]]
          </p>

          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par [[HEBERGEUR]] — [[ADRESSE_HEBERGEUR]].
            <br />À titre indicatif, en cas de déploiement sur Vercel : Vercel Inc., 440 N Barranca
            Ave #4133, Covina, CA 91723, États-Unis.
          </p>

          <h2>Activité et certifications</h2>
          <p>
            {site.name} propose des prestations de destruction de nids de frelons, frelons asiatiques
            et guêpes à domicile à Bordeaux et dans la métropole.
            <br />
            Certifications : {site.certifications}.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus de ce site (textes, visuels, logo, structure) est protégé par le
            droit de la propriété intellectuelle. Toute reproduction sans autorisation préalable est
            interdite.
          </p>

          <h2>Responsabilité</h2>
          <p>
            Les informations fournies sur ce site le sont à titre indicatif. {site.name} s'efforce de
            les tenir à jour mais ne saurait être tenu responsable d'éventuelles erreurs ou omissions.
            Les tarifs affichés sont indicatifs et confirmés après diagnostic.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Le traitement des données transmises via le formulaire de contact est décrit dans notre{" "}
            <a href="/politique-confidentialite">politique de confidentialité</a>.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question relative au site ou à vos données : {site.email} — {site.phone}.
          </p>
        </article>
      </Section>
    </PageLayout>
  );
}
