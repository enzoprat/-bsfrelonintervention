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
import { faqAsiatique } from "@/lib/faq";
import { site } from "@/lib/config";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Frelon asiatique à Bordeaux : que faire face à un nid ?",
  description:
    "Frelon asiatique à Bordeaux : comment le reconnaître, pourquoi il est problématique et que faire face à un nid sur propriété privée ou publique. Intervention sécurisée en Gironde.",
  path: "/frelon-asiatique-bordeaux",
});

const path = "/frelon-asiatique-bordeaux";

export default function FrelonAsiatiquePage() {
  const jsonLd = [
    serviceSchema({
      name: "Intervention frelon asiatique à Bordeaux",
      serviceType: "Destruction de nid de frelon asiatique",
      description:
        "Identification et destruction des nids de frelons asiatiques (Vespa velutina) à Bordeaux et en Gironde, dans le respect de la réglementation.",
      url: path,
    }),
    faqSchema(faqAsiatique),
    breadcrumbSchema([
      { name: "Accueil", href: "/" },
      { name: "Frelon asiatique Bordeaux", href: path },
    ]),
  ];

  return (
    <PageLayout jsonLd={jsonLd} breadcrumbs={[{ name: "Frelon asiatique Bordeaux", href: path }]}>
      <section className="bg-ink text-cream">
        <div className="container-page grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <span className="eyebrow mb-4">Espèce invasive · Gironde</span>
            <h1 className="text-3xl font-extrabold text-cream sm:text-4xl">
              Frelon asiatique à Bordeaux : que faire face à un nid ?
            </h1>
            <p className="mt-4 max-w-xl text-lg text-cream/80">
              Reconnaître l'espèce, comprendre pourquoi elle pose problème et savoir comment réagir
              selon que le nid se trouve sur une propriété privée ou un espace public.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CallButton showNumber />
              <PhotoButton variant="amber" label="Identifier mon nid (photo)" />
            </div>
          </div>
          <MediaPlaceholder
            src="/images/nid-frelon-asiatique.jpg"
            alt="Nid de frelon asiatique sphérique perché en hauteur dans un arbre en Gironde"
            caption="Nid de frelon asiatique en hauteur"
            icon="asiatique"
            tone="amber"
          />
        </div>
      </section>

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <UrgenceNotice />
        </div>

        <article className="prose-local mx-auto mt-10 max-w-3xl">
          <h2>Reconnaître le frelon asiatique</h2>
          <p>
            Le frelon asiatique (<em>Vespa velutina nigrithorax</em>) est arrivé en France par le
            Sud-Ouest, dans le Lot-et-Garonne, au début des années 2000, avant de coloniser la
            Gironde et l'ensemble du territoire. On le distingue du frelon européen par plusieurs
            détails : il est un peu plus petit, nettement plus sombre, avec un thorax brun-noir, un
            abdomen foncé marqué d'un seul anneau orangé, une tête orange et surtout des{" "}
            <strong>pattes jaunes</strong> très caractéristiques.
          </p>
          <p>
            Son nid est tout aussi reconnaissable : une boule grise, feuilletée, pouvant atteindre
            une grande taille, avec une ouverture latérale sur le côté ou le bas. On le trouve
            souvent perché en hauteur dans un arbre, mais aussi, en zone urbaine, dans une haie, sous
            une toiture, dans un cabanon ou un recoin abrité. Si vous repérez ce type de nid,
            envoyez-nous une photo : nous confirmons l'espèce avant toute intervention.
          </p>

          <h2>Pourquoi le frelon asiatique est-il problématique ?</h2>
          <p>
            C'est une espèce exotique envahissante. Le frelon asiatique se nourrit en grande partie
            d'autres insectes, et notamment d'abeilles, qu'il chasse devant les ruches. Sa présence
            exerce une forte pression sur les colonies d'abeilles et, plus largement, sur les
            pollinisateurs locaux, ce qui en fait un enjeu pour l'apiculture et la biodiversité en
            Gironde.
          </p>
          <p>
            Pour les habitants, le risque principal vient de la proximité d'un nid volumineux et
            actif. Le frelon asiatique n'est pas plus agressif qu'une autre espèce loin de son nid,
            mais il défend vigoureusement sa colonie : s'approcher ou faire vibrer le support
            (taille de haie, tonte, travaux) peut déclencher une attaque collective.
          </p>

          <h2>Pourquoi éviter les pièges artisanaux non sélectifs</h2>
          <p>
            Les pièges « maison » à base de bière ou de sirop, posés au printemps, sont souvent
            présentés comme une solution. En réalité, ces pièges non sélectifs capturent énormément
            d'insectes utiles — abeilles, papillons, syrphes — pour un effet très limité sur la
            population de frelons asiatiques. Plutôt que de multiplier ces dispositifs, mieux vaut
            faire identifier puis traiter le nid par un professionnel, ce qui agit directement sur la
            colonie.
          </p>

          <div className="my-8 flex flex-col items-center gap-3 rounded-2xl bg-amber/10 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="font-display text-lg font-bold text-ink">
              Un nid de frelon asiatique repéré ? Ne vous en approchez pas.
            </p>
            <CallButton className="shrink-0" />
          </div>

          <h2>Un nid sur une propriété privée</h2>
          <p>
            Lorsque le nid se situe sur un terrain privé — votre jardin, votre toiture, un arbre vous
            appartenant — sa destruction relève de la responsabilité du propriétaire, qui fait appel
            à une entreprise spécialisée. C'est le cas le plus fréquent. Nous intervenons alors avec
            un équipement adapté à la hauteur et à l'emplacement du nid, en sécurisant la zone autour
            de l'habitation.
          </p>
          <p>
            Selon les communes de la Gironde et certains contrats d'assurance habitation, une
            participation financière peut exister pour la destruction d'un nid de frelon asiatique.
            Renseignez-vous auprès de votre mairie et de votre assureur ; nous vous remettons une
            facture détaillée si nécessaire.
          </p>

          <h2>Un nid sur l'espace public</h2>
          <p>
            Si le nid se trouve sur le domaine public — un parc, un trottoir, un arbre municipal, un
            équipement collectif — le bon réflexe est de le <strong>signaler à votre mairie</strong>.
            Selon les communes de la métropole bordelaise, un service dédié peut prendre en charge ou
            organiser la destruction. La mairie est aujourd'hui l'interlocuteur de référence pour le
            signalement des nids. En cas de doute sur la nature du terrain, contactez-nous : nous vous
            orientons vers la bonne démarche.
          </p>

          <h2>Quand intervenir ?</h2>
          <p>
            Plus le nid est traité tôt, plus l'intervention est simple et sûre. Au printemps, les
            nids primaires sont petits et peu peuplés ; en fin d'été et à l'automne, la colonie est
            à son maximum et le nid bien plus volumineux. Dans tous les cas, dès qu'un nid actif est
            proche d'une habitation, d'un lieu de passage ou d'une ruche, il est préférable de ne pas
            attendre.
          </p>
          <p>
            Pour les autres espèces, consultez nos pages{" "}
            <Link href="/destruction-nid-frelons-bordeaux">nid de frelons</Link> et{" "}
            <Link href="/destruction-nid-guepes-bordeaux">nid de guêpes</Link>. Nous couvrons
            Bordeaux et toute la métropole : voir les{" "}
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
              title="Faire identifier ou retirer un nid"
              intro={`Envoyez une photo du nid : nous confirmons l'espèce et vous conseillons. Urgence ? Appelez le ${site.phone}.`}
            />
            <ContactForm />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Questions fréquentes"
              title="FAQ frelon asiatique"
            />
            <FAQAccordion items={faqAsiatique} />
          </div>
        </div>
      </Section>

      <CTASection
        title="Un nid de frelon asiatique à Bordeaux ?"
        text="Ne tentez rien vous-même. Envoyez une photo pour identifier le nid, ou appelez-nous pour une intervention sécurisée en Gironde."
      />
    </PageLayout>
  );
}
