import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/PageLayout";
import { Section } from "@/components/Section";
import { site } from "@/lib/config";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Politique de confidentialité | " + site.shortName,
    description:
      "Politique de confidentialité : comment sont traitées les données transmises via le site et le formulaire de demande de devis.",
    path: "/politique-confidentialite",
  }),
  robots: { index: false, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <PageLayout
      breadcrumbs={[{ name: "Politique de confidentialité", href: "/politique-confidentialite" }]}
    >
      <Section tone="white">
        <article className="prose-local mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">
            Politique de confidentialité
          </h1>
          <p className="text-sm text-graytext">
            Document type à adapter avec les informations réelles de l'entreprise (champs entre
            crochets).
          </p>

          <h2>Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données collectées sur ce site est <strong>{site.name}</strong>,
            joignable au {site.phone} ou par e-mail à {site.email}.
          </p>

          <h2>Données collectées</h2>
          <p>
            Via le formulaire de demande de devis, nous collectons les informations que vous nous
            transmettez : nom, téléphone, ville, type et emplacement supposés du nid, hauteur, message
            et, le cas échéant, un lien vers une photo. Ces données sont nécessaires pour traiter
            votre demande et vous recontacter.
          </p>

          <h2>Finalité et base légale</h2>
          <p>
            Les données sont utilisées uniquement pour répondre à votre demande, établir un devis et
            organiser l'intervention. La base légale est votre consentement et l'exécution de mesures
            précontractuelles prises à votre demande.
          </p>

          <h2>Destinataires</h2>
          <p>
            Vos données sont destinées aux seules personnes en charge du traitement des demandes au
            sein de {site.name}. Elles ne sont jamais revendues. Le formulaire peut transiter par un
            prestataire technique d'envoi (par exemple [[PRESTATAIRE_FORMULAIRE]]) agissant comme
            sous-traitant.
          </p>

          <h2>Durée de conservation</h2>
          <p>
            Les données sont conservées le temps nécessaire au traitement de votre demande, puis
            pendant la durée légale applicable, avant d'être supprimées ou archivées.
          </p>

          <h2>Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement,
            de limitation et d'opposition au traitement de vos données. Pour les exercer, contactez
            {" "}
            {site.email}. Vous pouvez également introduire une réclamation auprès de la CNIL
            (www.cnil.fr).
          </p>

          <h2>Cookies et mesure d'audience</h2>
          <p>
            Par défaut, ce site ne dépose pas de cookie de suivi. Des outils de mesure d'audience
            (Google Analytics, Meta Pixel, Google Ads) peuvent être activés ultérieurement ; le cas
            échéant, un bandeau de consentement sera mis en place conformément à la réglementation.
          </p>
        </article>
      </Section>
    </PageLayout>
  );
}
