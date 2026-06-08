import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/PageLayout";
import { Section, SectionHeading } from "@/components/Section";
import { UrgenceNotice } from "@/components/UrgenceNotice";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { CallButton, PhotoButton } from "@/components/CallButton";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { Icon } from "@/components/Icon";
import { faqFrelons } from "@/lib/faq";
import { nestLocations } from "@/lib/services";
import { site } from "@/lib/config";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Destruction nid de frelons à Bordeaux | Intervention sécurisée",
  description:
    "Destruction de nid de frelons à Bordeaux : intervention rapide et sécurisée à domicile sur toiture, arbre, cheminée ou comble. Devis clair, déplacement Bordeaux et alentours.",
  path: "/destruction-nid-frelons-bordeaux",
});

const path = "/destruction-nid-frelons-bordeaux";

export default function FrelonsBordeauxPage() {
  const jsonLd = [
    serviceSchema({
      name: "Destruction de nid de frelons à Bordeaux",
      serviceType: "Destruction de nid de frelons",
      description:
        "Intervention professionnelle pour détruire les nids de frelons à Bordeaux et dans la métropole, sur tout type d'emplacement.",
      url: path,
    }),
    faqSchema(faqFrelons),
    breadcrumbSchema([
      { name: "Accueil", href: "/" },
      { name: "Destruction nid de frelons Bordeaux", href: path },
    ]),
  ];

  return (
    <PageLayout
      jsonLd={jsonLd}
      breadcrumbs={[{ name: "Destruction nid de frelons Bordeaux", href: path }]}
    >
      <section className="bg-ink text-cream">
        <div className="container-page grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <span className="eyebrow mb-4">Service · Frelons</span>
            <h1 className="text-3xl font-extrabold text-cream sm:text-4xl">
              Destruction de nid de frelons à Bordeaux
            </h1>
            <p className="mt-4 max-w-xl text-lg text-cream/80">
              Une intervention rapide, sécurisée et adaptée à chaque emplacement : toiture, arbre,
              cheminée, comble ou volet. Envoyez une photo, obtenez un avis clair avant tout
              déplacement.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CallButton showNumber />
              <PhotoButton variant="amber" />
            </div>
          </div>
          <MediaPlaceholder
            src="/images/gros-nid-frelons.jpg"
            alt="Nid de frelons sous une toiture, intervention d'un technicien à Bordeaux"
            caption="Nid de frelons sous toiture"
            icon="toiture"
            tone="amber"
          />
        </div>
      </section>

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <UrgenceNotice />
        </div>

        <article className="prose-local mx-auto mt-10 max-w-3xl">
          <h2>Qu'est-ce qu'un nid de frelons ?</h2>
          <p>
            Un nid de frelons est une structure construite en fibres de bois mâchées, dans laquelle
            une colonie élève ses larves tout au long de la belle saison. À Bordeaux, on rencontre
            principalement deux espèces : le <strong>frelon européen</strong> (Vespa crabro), une
            grosse guêpe au thorax roux dont le nid dépasse rarement 40 cm, et le{" "}
            <strong>frelon asiatique</strong> (Vespa velutina), reconnaissable à ses pattes jaunes
            et capable de bâtir un nid sphérique de grande taille en hauteur.
          </p>
          <p>
            La colonie démarre au printemps avec une reine fondatrice, puis grossit jusqu'à
            atteindre son pic à la fin de l'été. C'est à cette période que le nid devient le plus
            actif — et le plus risqué à proximité d'une habitation. Plus on attend, plus la colonie
            est nombreuse et défensive : il est donc préférable de faire intervenir un professionnel
            dès la découverte du nid.
          </p>

          <h2>Où se forment les nids de frelons à Bordeaux ?</h2>
          <p>
            Les frelons recherchent des emplacements abrités, secs et tranquilles. Dans les maisons
            bordelaises — échoppes, maisons de ville, pavillons des communes voisines — les nids
            apparaissent le plus souvent aux endroits suivants :
          </p>
          <ul>
            {nestLocations.map((loc) => (
              <li key={loc}>{loc}</li>
            ))}
          </ul>
          <p>
            Le frelon européen apprécie particulièrement les volumes fermés : combles, troncs creux,
            conduits de cheminée, granges et dépendances. Le frelon asiatique, lui, suspend volontiers
            son nid en hauteur dans un grand arbre, une haie dense ou sous un débord de toiture. Dans
            les deux cas, une identification précise oriente le choix du matériel et de la méthode
            d'intervention.
          </p>

          <div className="my-8 flex flex-col items-center gap-3 rounded-2xl bg-amber/10 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="font-display text-lg font-bold text-ink">
              Un doute sur l'emplacement ou l'espèce ? Envoyez-nous une photo.
            </p>
            <CallButton className="shrink-0" />
          </div>

          <h2>Pourquoi ne pas détruire un nid de frelons soi-même ?</h2>
          <p>
            Tenter de détruire un nid sans équipement est l'une des principales causes de piqûres
            multiples. Les frelons défendent leur colonie de façon coordonnée et peuvent piquer
            plusieurs fois, ce qui représente un danger réel pour tout le monde — et un risque grave
            pour les personnes allergiques. Les bombes insecticides du commerce sont rarement
            efficaces sur un nid volumineux ou en hauteur, et la manipulation déclenche presque
            toujours une réaction agressive de la colonie.
          </p>
          <p>
            Un professionnel travaille à distance, avec une combinaison de protection adaptée, une
            perche télescopique pour les nids en hauteur et des produits homologués. Il sait aussi
            sécuriser la zone : voisinage, animaux, accès. Au-delà de la sécurité, l'intervention est
            tout simplement plus efficace, car elle neutralise l'ensemble de la colonie plutôt qu'une
            partie seulement.
          </p>

          <h2>Notre intervention professionnelle à Bordeaux</h2>
          <p>
            Notre déroulé est pensé pour être clair et rassurant. Tout commence par un appel ou une
            photo : cela nous permet d'identifier l'espèce et l'emplacement, puis de vous donner une
            estimation avant tout déplacement. Sur place, le technicien évalue précisément la
            situation, neutralise le nid en sécurité, puis le retire ou le traite selon la
            configuration des lieux. Enfin, nous vous donnons des conseils pour limiter le risque de
            réinstallation les saisons suivantes.
          </p>
          <p>
            Nous intervenons à Bordeaux et dans toute la métropole, en tenant compte des contraintes
            propres au tissu urbain : stationnement, accès en hauteur, mitoyenneté. Que le nid soit
            sur une toiture en zinc des Chartrons, dans un arbre de Caudéran ou sous un débord de
            toit à la Bastide, nous adaptons notre matériel à chaque chantier.
          </p>

          <h2>Prix et critères d'une intervention</h2>
          <p>
            Le prix d'une destruction de nid de frelons à Bordeaux dépend de plusieurs facteurs :
            l'espèce concernée, la hauteur et l'accessibilité du nid, la taille de la colonie,
            l'urgence et le besoin éventuel de matériel spécifique. Un nid accessible se traite à
            partir de <strong>{site.priceFrom}</strong>, tandis qu'un nid en hauteur ou difficile
            d'accès fait l'objet d'un devis personnalisé. Pour le détail, consultez notre{" "}
            <Link href="/tarifs-destruction-nid-frelons-bordeaux">page tarifs</Link>.
          </p>

          <h2>Zones d'intervention autour de Bordeaux</h2>
          <p>
            Au-delà de Bordeaux intra-muros, nous nous déplaçons dans les communes voisines :{" "}
            <Link href="/destruction-nid-frelons-merignac">Mérignac</Link>,{" "}
            <Link href="/destruction-nid-frelons-pessac">Pessac</Link>,{" "}
            <Link href="/destruction-nid-frelons-talence">Talence</Link>, Bègles, Lormont, Cenon, Le
            Bouscat, Bruges, Villenave-d'Ornon, Gradignan et Saint-Médard-en-Jalles. Retrouvez la
            liste complète sur notre page{" "}
            <Link href="/zones-intervention">zones d'intervention</Link>.
          </p>
          <p>
            S'il s'agit d'un frelon asiatique, notre page dédiée vous explique comment le{" "}
            <Link href="/frelon-asiatique-bordeaux">reconnaître et réagir face à un nid</Link>. Pour
            les guêpes, consultez la page{" "}
            <Link href="/destruction-nid-guepes-bordeaux">destruction de nid de guêpes</Link>.
          </p>
        </article>
      </Section>

      <Section tone="white" id="devis" spacing="tight">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Demande de devis"
              title="Faire retirer un nid de frelons"
              intro={`Envoyez une photo et quelques informations : nous vous répondons avec un avis clair. Urgence ? Appelez le ${site.phone}.`}
            />
            <ContactForm />
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Questions fréquentes" title="FAQ frelons" />
            <FAQAccordion items={faqFrelons} />
          </div>
        </div>
      </Section>

      <CTASection
        title="Un nid de frelons actif chez vous ?"
        text="Ne vous approchez pas du nid. Appelez-nous ou envoyez une photo pour planifier une intervention sécurisée à Bordeaux et alentours."
      />
    </PageLayout>
  );
}
