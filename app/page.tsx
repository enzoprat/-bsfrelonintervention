import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/PageLayout";
import { HeroUrgence } from "@/components/HeroUrgence";
import { Section, SectionHeading } from "@/components/Section";
import { UrgenceNotice } from "@/components/UrgenceNotice";
import { ServiceCards } from "@/components/ServiceCards";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ZoneMapPlaceholder } from "@/components/ZoneMapPlaceholder";
import { PricingPreview } from "@/components/PricingPreview";
import { ReviewPlaceholder } from "@/components/ReviewPlaceholder";
import { ReassuranceMarquee } from "@/components/ReassuranceMarquee";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { CallButton, PhotoButton } from "@/components/CallButton";
import { Icon } from "@/components/Icon";
import { faqGeneral } from "@/lib/faq";
import { site } from "@/lib/config";
import { faqSchema, serviceSchema } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Destruction nid de frelons à Bordeaux | Intervention rapide",
  description:
    "Nid de frelons ou de guêpes à Bordeaux ? " +
    site.name +
    " intervient rapidement à domicile à Bordeaux et alentours. Devis rapide, intervention sécurisée.",
  path: "/",
});

export default function HomePage() {
  const jsonLd = [
    serviceSchema({
      name: "Destruction de nids de frelons et de guêpes à Bordeaux",
      serviceType: "Désinsectisation frelons et guêpes",
      description:
        "Intervention à domicile pour détruire les nids de frelons, frelons asiatiques et guêpes à Bordeaux et dans la métropole.",
      url: "/",
    }),
    faqSchema(faqGeneral),
  ];

  return (
    <PageLayout jsonLd={jsonLd} hideBreadcrumbs>
      <HeroUrgence />
      <ReassuranceMarquee />

      {/* Bloc urgence */}
      <Section tone="white" spacing="tight">
        <div className="mx-auto max-w-4xl">
          <UrgenceNotice />
        </div>
      </Section>

      {/* Services */}
      <Section tone="cream" id="services">
        <SectionHeading
          eyebrow="Nos interventions"
          title="Frelons, frelons asiatiques et guêpes"
          intro="Nous neutralisons les nids quel que soit l'emplacement, avec un matériel adapté à la hauteur et à l'accès."
        />
        <ServiceCards />
      </Section>

      {/* Comment ça se passe */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Comment ça se passe"
          title="Une intervention simple, en 4 étapes"
          intro="De votre premier appel aux conseils après intervention, vous savez à chaque instant ce qu'il se passe."
        />
        <ProcessSteps />
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CallButton showNumber />
          <PhotoButton variant="amber" />
        </div>
      </Section>

      {/* Zones */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="Zones d'intervention"
          title="Bordeaux, la métropole et les communes voisines"
          intro="Mérignac, Pessac, Talence, Bègles, Lormont, Cenon et alentours : nous nous déplaçons rapidement près de chez vous."
        />
        <ZoneMapPlaceholder />
      </Section>

      {/* Tarifs */}
      <Section tone="white" id="tarifs">
        <SectionHeading
          eyebrow="Tarifs"
          title={`Une intervention à partir de ${site.priceFrom}`}
          intro="Le tarif dépend de la hauteur, de l'accessibilité et du type de nid. Nous restons transparents dès le départ."
        />
        <PricingPreview />
      </Section>

      {/* Avis */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="Avis clients"
          title="La confiance de nos clients à Bordeaux"
          intro="Les avis affichés ici sont des emplacements à connecter à votre profil Google Business. Aucun avis n'est inventé."
        />
        <ReviewPlaceholder />
      </Section>

      {/* Devis (ancre #devis) */}
      <Section tone="white" id="devis">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Demande de devis"
              title="Envoyez une photo, recevez un avis rapide"
              intro="Décrivez la situation en quelques champs. Pour une urgence, le téléphone reste le plus rapide."
            />
            <div className="mb-6 space-y-3">
              {[
                "Envoyez une photo, nous vous aidons à identifier la situation.",
                "Une intervention adaptée selon la hauteur, l'accès et le type de nid.",
                "Ne prenez aucun risque avec un nid actif.",
              ].map((t) => (
                <p key={t} className="flex items-start gap-2 text-graytext">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-eco" />
                  {t}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CallButton showNumber />
              <Link
                href="/urgence-nid-frelons-bordeaux"
                className="btn-ghost"
              >
                <Icon name="alert" className="h-5 w-5 text-safety" />
                C'est une urgence
              </Link>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="Questions fréquentes"
          title="Vos questions sur nos interventions"
        />
        <FAQAccordion items={faqGeneral} />
      </Section>

      <CTASection />
    </PageLayout>
  );
}
