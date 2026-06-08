import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/PageLayout";
import { Section } from "@/components/Section";
import { site } from "@/lib/config";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Conditions générales de vente | " + site.shortName,
    description:
      "Conditions générales de vente des prestations de destruction de nids de frelons, frelons asiatiques et guêpes à Bordeaux et alentours.",
    path: "/conditions-generales-vente",
  }),
  robots: { index: false, follow: true },
};

export default function ConditionsGeneralesVentePage() {
  return (
    <PageLayout
      breadcrumbs={[
        { name: "Conditions générales de vente", href: "/conditions-generales-vente" },
      ]}
    >
      <Section tone="white">
        <article className="prose-local mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">
            Conditions générales de vente
          </h1>
          <p className="text-sm text-graytext">
            Les présentes conditions générales de vente (CGV) régissent les prestations de
            destruction de nids de frelons, frelons asiatiques et guêpes réalisées par {site.name}.
          </p>

          <h2>1. Objet</h2>
          <p>
            Les présentes CGV ont pour objet de définir les conditions dans lesquelles {site.name}{" "}
            (ci-après « le prestataire ») réalise, pour ses clients (ci-après « le client »), des
            prestations de destruction et de retrait de nids de frelons, frelons asiatiques et
            guêpes, ainsi que les prestations connexes. Toute commande de prestation implique
            l'acceptation sans réserve des présentes conditions par le client.
          </p>

          <h2>2. Prestations</h2>
          <p>
            Le prestataire intervient à domicile pour localiser, traiter et neutraliser les nids de
            frelons, frelons asiatiques et guêpes, dans le respect des règles de sécurité et à l'aide
            d'un équipement de protection adapté. Le retrait du nid est proposé lorsqu'il est
            techniquement possible et sans risque. Certaines situations (hauteur importante,
            difficulté d'accès, nid en façade ou en toiture) peuvent nécessiter un matériel
            spécifique ou être refusées pour des raisons de sécurité.
          </p>

          <h2>3. Devis et tarifs</h2>
          <p>
            Les tarifs affichés sur le site, à partir de {site.priceFrom}, sont donnés à titre
            indicatif. Le prix définitif est confirmé après diagnostic de la situation (type de nid,
            emplacement, hauteur et accessibilité). Des frais supplémentaires peuvent s'appliquer
            pour les interventions éloignées, en hauteur, d'urgence, le dimanche ou les jours fériés.
            Tout devis communiqué oralement ou par écrit est valable pour la situation décrite par le
            client ; une situation différente constatée sur place peut donner lieu à une révision du
            prix, communiquée au client avant le début de l'intervention.
          </p>

          <h2>4. Commande et rendez-vous</h2>
          <p>
            La commande est confirmée lors de la prise de rendez-vous, par téléphone ou via le
            formulaire de demande de devis. Le client s'engage à fournir des informations exactes sur
            la situation et à garantir un accès sûr à la zone d'intervention. En cas d'impossibilité
            d'accès ou d'absence du client au rendez-vous convenu, un déplacement pourra être facturé.
          </p>

          <h2>5. Exécution de la prestation</h2>
          <p>
            Le prestataire met en œuvre tous les moyens nécessaires à la bonne réalisation de la
            prestation. La destruction d'un nid est généralement effective sous quelques heures à
            quelques jours, le temps que la colonie soit totalement neutralisée par le traitement
            appliqué. Le prestataire ne saurait être tenu responsable de l'activité résiduelle d'un
            nid pendant ce délai ni d'une éventuelle nouvelle colonisation ultérieure.
          </p>

          <h2>6. Paiement</h2>
          <p>
            Le règlement s'effectue à l'issue de l'intervention, selon les moyens de paiement acceptés
            et communiqués par le prestataire. Le prix est exigible à réception. Tout retard de
            paiement pourra donner lieu à l'application de pénalités dans les conditions prévues par
            la loi.
          </p>

          <h2>7. Droit de rétractation</h2>
          <p>
            Conformément à l'article L.221-28 du Code de la consommation, le client est informé que le
            droit de rétractation ne peut être exercé pour les prestations d'urgence ou pleinement
            exécutées avant la fin du délai de rétractation, dès lors que leur exécution a commencé
            avec son accord exprès. Pour les prestations non urgentes conclues à distance ou hors
            établissement, le client dispose d'un délai de quatorze (14) jours pour se rétracter, sauf
            renonciation expresse afin de bénéficier d'une intervention immédiate.
          </p>

          <h2>8. Responsabilité</h2>
          <p>
            Le prestataire intervient avec soin et dans le respect des règles de l'art. Sa
            responsabilité est limitée à la prestation réalisée. Il ne saurait être tenu responsable
            des dommages préexistants, ni des dégâts résultant d'un accès rendu nécessaire par la
            configuration des lieux (toiture, façade, combles) lorsque le client a été informé du
            risque et a donné son accord pour l'intervention.
          </p>

          <h2>9. Réclamations</h2>
          <p>
            Toute réclamation relative à une prestation doit être adressée au prestataire dans les
            meilleurs délais, par téléphone au {site.phone}, afin qu'une solution amiable puisse être
            recherchée.
          </p>

          <h2>10. Droit applicable et litiges</h2>
          <p>
            Les présentes CGV sont soumises au droit français. En cas de litige, les parties
            s'efforceront de trouver une solution amiable avant toute action judiciaire. À défaut, les
            tribunaux français seront seuls compétents.
          </p>
        </article>
      </Section>
    </PageLayout>
  );
}
