import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/PageLayout";
import { Section, SectionHeading } from "@/components/Section";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { CallButton, PhotoButton } from "@/components/CallButton";
import { Icon, type IconName } from "@/components/Icon";
import { faqPrix } from "@/lib/faq";
import { site } from "@/lib/config";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Prix destruction nid de frelons à Bordeaux | Tarifs indicatifs",
  description:
    "Prix destruction nid de frelons à Bordeaux : tarifs indicatifs selon l'espèce, la hauteur et l'accessibilité. Nid accessible à partir de " +
    site.priceFrom +
    ". Estimation rapide par photo.",
  path: "/tarifs-destruction-nid-frelons-bordeaux",
});

const path = "/tarifs-destruction-nid-frelons-bordeaux";

const factors: { icon: IconName; title: string; text: string }[] = [
  { icon: "guepe", title: "L'espèce", text: "Guêpes, frelon européen ou frelon asiatique : le traitement diffère." },
  { icon: "toiture", title: "La hauteur", text: "Au sol, sous toiture, en façade ou en haut d'un arbre." },
  { icon: "shield", title: "L'accessibilité", text: "Accès direct, conduit, faux plafond, caisson de volet roulant." },
  { icon: "alert", title: "L'urgence", text: "Une intervention le soir ou le week-end peut faire varier le tarif." },
  { icon: "frelon", title: "Le matériel", text: "Perche télescopique, nacelle ou équipement spécifique si nécessaire." },
  { icon: "pin", title: "Le déplacement", text: "Distance et commune d'intervention dans la métropole." },
];

const grid = [
  { label: "Nid accessible (guêpes / frelons)", value: `À partir de ${site.priceFrom}`, note: "Sol, façade basse, accès direct", highlight: true },
  { label: "Nid en hauteur (toiture, arbre)", value: "Sur devis", note: "Travail en hauteur, perche télescopique" },
  { label: "Nid difficile d'accès", value: "Sur devis", note: "Conduit, faux plafond, volet roulant" },
  { label: "Frelon asiatique en hauteur", value: "Sur devis", note: "Nid volumineux, matériel adapté" },
  { label: "Intervention urgente", value: "Selon disponibilité", note: "Soirée, week-end, délai court" },
];

export default function TarifsPage() {
  const jsonLd = [
    serviceSchema({
      name: "Destruction de nid de frelons à Bordeaux — tarifs",
      serviceType: "Destruction de nid de frelons et de guêpes",
      description:
        "Tarifs indicatifs de destruction de nids de frelons et de guêpes à Bordeaux selon l'espèce, la hauteur et l'accessibilité.",
      url: path,
    }),
    faqSchema(faqPrix),
    breadcrumbSchema([
      { name: "Accueil", href: "/" },
      { name: "Prix destruction nid de frelons Bordeaux", href: path },
    ]),
  ];

  return (
    <PageLayout
      jsonLd={jsonLd}
      breadcrumbs={[{ name: "Prix destruction nid de frelons Bordeaux", href: path }]}
    >
      <section className="bg-ink text-cream">
        <div className="container-page py-12 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow mb-4">Tarifs</span>
            <h1 className="text-3xl font-extrabold text-cream sm:text-4xl">
              Prix destruction nid de frelons à Bordeaux
            </h1>
            <p className="mt-4 text-lg text-cream/80">
              Chaque nid est différent. Voici les critères qui font varier le prix et une grille
              indicative pour vous donner un ordre d'idée. Pour un montant précis, une photo suffit.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CallButton showNumber />
              <PhotoButton variant="amber" label="Estimer par photo" />
            </div>
          </div>
        </div>
      </section>

      {/* Facteurs de prix */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Ce qui fait le prix"
          title="Les critères qui déterminent le tarif"
          intro="Le prix d'une intervention dépend d'abord de la configuration du nid. Ces éléments nous permettent d'établir un devis juste."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {factors.map((f) => (
            <div key={f.title} className="card flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber/15 text-amber-dark">
                <Icon name={f.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-base font-bold text-ink">{f.title}</h3>
                <p className="mt-1 text-sm text-graytext">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Grille tarifaire */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="Grille indicative"
          title="Tarifs de référence à Bordeaux"
          intro="Ces montants sont donnés à titre indicatif. Le tarif exact est confirmé après identification du nid, sans engagement."
        />
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-soft">
          <table className="w-full text-left">
            <caption className="sr-only">Grille tarifaire indicative</caption>
            <thead className="bg-ink text-cream">
              <tr>
                <th scope="col" className="px-5 py-3 text-sm font-semibold">Type d'intervention</th>
                <th scope="col" className="px-5 py-3 text-right text-sm font-semibold">Tarif</th>
              </tr>
            </thead>
            <tbody>
              {grid.map((r) => (
                <tr key={r.label} className="border-b border-ink/5 last:border-0">
                  <th scope="row" className="px-5 py-4">
                    <span className="block text-sm font-semibold text-ink sm:text-base">{r.label}</span>
                    <span className="block text-xs text-graytext">{r.note}</span>
                  </th>
                  <td className="whitespace-nowrap px-5 py-4 text-right">
                    <span className={`font-display font-bold ${r.highlight ? "text-safety" : "text-ink"}`}>
                      {r.value}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mx-auto mt-4 flex max-w-3xl items-start gap-2 text-sm text-graytext">
          <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0 text-amber-dark" />
          Nous ne communiquons pas de prix fixe sans avoir vu le nid : cela nous évite de vous
          annoncer un montant erroné. Une photo et la hauteur approximative suffisent pour une
          estimation fiable.
        </p>
      </Section>

      {/* Aides */}
      <Section tone="white" spacing="tight">
        <div className="mx-auto max-w-3xl rounded-2xl border border-eco/20 bg-eco/5 p-6">
          <h2 className="flex items-center gap-2 text-xl font-bold text-ink">
            <Icon name="leaf" className="h-6 w-6 text-eco" />
            Des aides possibles pour le frelon asiatique
          </h2>
          <p className="mt-3 text-graytext">
            Selon les communes de la Gironde et certains contrats d'assurance habitation, une
            participation financière peut exister pour la destruction d'un nid de frelon asiatique.
            Renseignez-vous auprès de votre mairie et de votre assureur. Nous vous remettons une
            facture détaillée pour faciliter vos démarches. Pour en savoir plus, consultez notre page{" "}
            <Link href="/frelon-asiatique-bordeaux" className="font-semibold text-eco underline">
              frelon asiatique à Bordeaux
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* Estimation par photo + FAQ */}
      <Section tone="cream" id="devis">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Estimation rapide"
              title="Envoyez une photo pour une estimation"
              intro={`Une photo du nid et sa hauteur approximative suffisent. Pour une urgence, appelez le ${site.phone}.`}
            />
            <ContactForm />
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Questions fréquentes" title="FAQ prix" />
            <FAQAccordion items={faqPrix} />
          </div>
        </div>
      </Section>

      <CTASection
        title="Besoin d'un tarif clair pour votre nid ?"
        text="Envoyez une photo ou appelez-nous : nous vous donnons une estimation transparente avant tout déplacement, à Bordeaux et alentours."
      />
    </PageLayout>
  );
}
