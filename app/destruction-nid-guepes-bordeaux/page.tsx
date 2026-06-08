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
import { faqGuepes } from "@/lib/faq";
import { site } from "@/lib/config";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Destruction nid de guêpes à Bordeaux | Intervention rapide",
  description:
    "Destruction de nid de guêpes à Bordeaux : intervention rapide sous toiture, volet roulant, grenier ou jardin. Devis clair, déplacement Bordeaux et communes voisines.",
  path: "/destruction-nid-guepes-bordeaux",
});

const path = "/destruction-nid-guepes-bordeaux";

export default function GuepesBordeauxPage() {
  const jsonLd = [
    serviceSchema({
      name: "Destruction de nid de guêpes à Bordeaux",
      serviceType: "Destruction de nid de guêpes",
      description:
        "Suppression des nids de guêpes à Bordeaux et dans la métropole, dans les endroits abrités : toiture, volet roulant, grenier, muret.",
      url: path,
    }),
    faqSchema(faqGuepes),
    breadcrumbSchema([
      { name: "Accueil", href: "/" },
      { name: "Destruction nid de guêpes Bordeaux", href: path },
    ]),
  ];

  return (
    <PageLayout
      jsonLd={jsonLd}
      breadcrumbs={[{ name: "Destruction nid de guêpes Bordeaux", href: path }]}
    >
      <section className="bg-ink text-cream">
        <div className="container-page grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <span className="eyebrow mb-4">Service · Guêpes</span>
            <h1 className="text-3xl font-extrabold text-cream sm:text-4xl">
              Destruction de nid de guêpes à Bordeaux
            </h1>
            <p className="mt-4 max-w-xl text-lg text-cream/80">
              Sous une toiture, dans un volet roulant, un grenier ou au jardin : nous localisons et
              neutralisons le nid de guêpes en sécurité, rapidement et proprement.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CallButton showNumber />
              <PhotoButton variant="amber" />
            </div>
          </div>
          <MediaPlaceholder
            src="/images/nid-guepes-actif.jpg"
            alt="Nid de guêpes dans un caisson de volet roulant d'une maison à Bordeaux"
            caption="Nid de guêpes actif"
            icon="guepe"
            tone="amber"
          />
        </div>
      </section>

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <UrgenceNotice />
        </div>

        <article className="prose-local mx-auto mt-10 max-w-3xl">
          <h2>Guêpes ou frelons : comment faire la différence ?</h2>
          <p>
            On confond souvent guêpes et frelons, mais leur comportement et leurs nids diffèrent. La{" "}
            <strong>guêpe</strong> est plus petite, fine, jaune rayée de noir, et construit un nid
            souvent caché dans un endroit sombre et protégé. Le <strong>frelon</strong>, beaucoup
            plus gros, fait un nid plus volumineux ; le frelon asiatique, en particulier, forme une
            grande boule grise visible, fréquemment perchée en hauteur. Cette distinction est
            importante car la méthode d'intervention n'est pas la même.
          </p>
          <p>
            Si vous hésitez, le plus simple est de nous envoyer une photo : nous identifions l'espèce
            à distance et préparons le bon matériel. Pour les frelons, consultez notre page{" "}
            <Link href="/destruction-nid-frelons-bordeaux">destruction de nid de frelons</Link> ;
            pour le frelon asiatique, notre page{" "}
            <Link href="/frelon-asiatique-bordeaux">frelon asiatique à Bordeaux</Link>.
          </p>

          <h2>Où les guêpes font-elles leur nid à Bordeaux ?</h2>
          <p>
            Les guêpes recherchent des cavités sombres et abritées. Dans les habitations bordelaises,
            on retrouve très souvent les nids :
          </p>
          <ul>
            <li>Sous la toiture et dans les combles</li>
            <li>Dans un caisson de volet roulant</li>
            <li>Au grenier ou dans un faux plafond</li>
            <li>Dans un garage, un abri de jardin ou une dépendance</li>
            <li>Dans un muret, un trou de mur ou une cavité de façade</li>
            <li>Derrière un coffre de climatisation ou un coffrage</li>
          </ul>
          <p>
            Ces emplacements discrets expliquent pourquoi un nid passe parfois inaperçu jusqu'à ce
            que le va-et-vient des guêpes devienne important. Dès que vous repérez une entrée
            régulièrement empruntée, mieux vaut agir sans tarder, surtout si elle se situe près d'un
            lieu de passage.
          </p>

          <div className="my-8 flex flex-col items-center gap-3 rounded-2xl bg-amber/10 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="font-display text-lg font-bold text-ink">
              Un nid de guêpes près d'une fenêtre ou d'une terrasse ?
            </p>
            <CallButton className="shrink-0" />
          </div>

          <h2>Les risques de piqûres</h2>
          <p>
            Contrairement à l'abeille, une guêpe peut piquer plusieurs fois. Un nid installé près
            d'une porte d'entrée, d'une terrasse, d'une chambre d'enfant ou d'un lieu de repas
            augmente nettement le risque de piqûre. Pour les personnes allergiques, une seule piqûre
            peut suffire à déclencher une réaction sévère. C'est pourquoi un nid proche d'un espace de
            vie doit être traité en priorité, sans tenter de le déloger soi-même.
          </p>
          <p>
            Boucher l'entrée d'un nid ou l'asperger de produit ménager est contre-productif : cela
            rend la colonie plus agressive et la pousse parfois à trouver une autre issue, à
            l'intérieur du logement. La bonne réaction consiste à garder ses distances et à faire
            appel à un professionnel équipé.
          </p>

          <h2>Une intervention rapide et propre</h2>
          <p>
            Notre technicien localise précisément le nid, y compris lorsqu'il est dissimulé dans un
            volet roulant ou une cavité de toiture, puis le neutralise avec un produit homologué
            avant de le retirer si l'accès le permet. L'intervention est généralement courte pour un
            nid accessible ; elle demande davantage de préparation lorsqu'il faut travailler en
            hauteur ou ouvrir un coffre. Dans tous les cas, nous laissons les lieux propres et vous
            indiquons quoi surveiller ensuite.
          </p>

          <h2>Conseils avant notre passage</h2>
          <p>
            En attendant l'intervention, repérez l'emplacement du nid sans vous en approcher, fermez
            les fenêtres et volets à proximité, et éloignez les enfants comme les animaux de la zone.
            N'essayez pas d'obstruer l'entrée du nid. Notez si possible la hauteur et la localisation
            exacte : ces informations nous aident à intervenir efficacement dès notre arrivée.
          </p>

          <h2>Zones desservies</h2>
          <p>
            Nous intervenons à Bordeaux et dans les communes voisines :{" "}
            <Link href="/destruction-nid-frelons-merignac">Mérignac</Link>,{" "}
            <Link href="/destruction-nid-frelons-pessac">Pessac</Link>,{" "}
            <Link href="/destruction-nid-frelons-talence">Talence</Link>, Bègles, Lormont, Cenon et
            alentours. La liste complète figure sur la page{" "}
            <Link href="/zones-intervention">zones d'intervention</Link>.
          </p>
        </article>
      </Section>

      <Section tone="white" id="devis" spacing="tight">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Demande de devis"
              title="Faire retirer un nid de guêpes"
              intro={`Décrivez la situation, joignez une photo si possible. Urgence ? Appelez le ${site.phone}.`}
            />
            <ContactForm />
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Questions fréquentes" title="FAQ guêpes" />
            <FAQAccordion items={faqGuepes} />
          </div>
        </div>
      </Section>

      <CTASection
        title="Un nid de guêpes à faire retirer ?"
        text="Intervention rapide et sécurisée à Bordeaux et alentours. Appelez-nous ou envoyez une photo du nid pour un avis clair."
      />
    </PageLayout>
  );
}
