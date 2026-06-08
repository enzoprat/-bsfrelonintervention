import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/PageLayout";
import { Section, SectionHeading } from "@/components/Section";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContactForm } from "@/components/ContactForm";
import { CallButton } from "@/components/CallButton";
import { Icon, type IconName } from "@/components/Icon";
import { faqUrgence } from "@/lib/faq";
import { site, telLink, telDisplay } from "@/lib/config";
import { breadcrumbSchema, faqSchema } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Urgence nid de frelons à Bordeaux | Intervention immédiate",
  description:
    "Urgence nid de frelons à Bordeaux : vous venez de découvrir un nid ? Ne touchez pas au nid, éloignez enfants et animaux et appelez-nous pour une intervention rapide.",
  path: "/urgence-nid-frelons-bordeaux",
});

const path = "/urgence-nid-frelons-bordeaux";

const cases: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "pin",
    title: "Nid près de l'entrée",
    text: "Un nid juste au-dessus ou à côté de la porte d'entrée rend chaque passage risqué.",
  },
  {
    icon: "leaf",
    title: "Près d'une terrasse ou piscine",
    text: "Zone de vie en extérieur très fréquentée l'été : risque élevé de piqûres.",
  },
  {
    icon: "toiture",
    title: "Dans un volet roulant",
    text: "Le caisson de volet est un emplacement fréquent, difficile à traiter soi-même.",
  },
  {
    icon: "shield",
    title: "Près d'une chambre d'enfant",
    text: "Proximité immédiate d'un lieu de sommeil : intervention à traiter en priorité.",
  },
  {
    icon: "alert",
    title: "Commerce ou restaurant",
    text: "Sécurité des clients et continuité d'activité : nous intervenons vite et proprement.",
  },
];

export default function UrgencePage() {
  const jsonLd = [
    faqSchema(faqUrgence),
    breadcrumbSchema([
      { name: "Accueil", href: "/" },
      { name: "Urgence nid de frelons Bordeaux", href: path },
    ]),
  ];

  return (
    <PageLayout
      jsonLd={jsonLd}
      breadcrumbs={[{ name: "Urgence nid de frelons Bordeaux", href: path }]}
    >
      {/* Hero urgence très direct */}
      <section className="bg-ink text-cream">
        <div className="container-page py-12 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-safety/20 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-amber">
              <span className="h-2 w-2 animate-pulse-soft rounded-full bg-safety" />
              Urgence
            </span>
            <h1 className="mt-5 text-4xl font-extrabold text-cream sm:text-5xl">
              Urgence nid de frelons à Bordeaux
            </h1>
            <p className="mt-4 text-lg text-cream/80">
              Vous venez de découvrir un nid ? Restez calme, ne vous en approchez pas, et appelez-nous
              pour une intervention rapide.
            </p>

            <div className="mx-auto mt-8 max-w-md space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
              {[
                "Ne touchez pas au nid et ne tentez pas de le détruire.",
                "Éloignez les enfants, les animaux et les personnes allergiques.",
                "Fermez les fenêtres et volets proches du nid.",
              ].map((t) => (
                <p key={t} className="flex items-start gap-3 font-medium text-cream">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-amber" />
                  {t}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center gap-3">
              <a
                href={telLink}
                className="btn-call w-full max-w-md py-4 text-xl"
                data-event="click_call"
              >
                <Icon name="phone" className="h-6 w-6" />
                Appeler {telDisplay}
              </a>
              <p className="text-sm text-cream/70">{site.hours}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cas urgents */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Situations prioritaires"
          title="Ces situations demandent une intervention rapide"
          intro="Un nid actif proche d'un lieu de vie ou de passage augmente fortement le risque de piqûre."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <div key={c.title} className="card flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-safety/15 text-safety">
                <Icon name={c.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-base font-bold text-ink">{c.title}</h3>
                <p className="mt-1 text-sm text-graytext">{c.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border-l-4 border-safety bg-safety/10 p-5 text-center">
          <p className="font-semibold text-ink">
            En cas de piqûres multiples, de gêne respiratoire ou de réaction allergique, appelez
            immédiatement le 15 (SAMU) ou le 112.
          </p>
        </div>
      </Section>

      {/* Formulaire express */}
      <Section tone="cream" id="devis">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Demande express"
            title="Décrivez votre urgence en quelques secondes"
            intro="Le téléphone reste le plus rapide. Vous pouvez aussi remplir ce formulaire court : nous vous rappelons au plus vite."
          />
          <ContactForm compact />
          <div className="mt-6 text-center">
            <CallButton showNumber className="text-lg" />
          </div>
        </div>
      </Section>

      {/* FAQ urgence */}
      <Section tone="white">
        <SectionHeading eyebrow="Questions fréquentes" title="Réagir face à un nid : vos questions" />
        <FAQAccordion items={faqUrgence} />
      </Section>
    </PageLayout>
  );
}
