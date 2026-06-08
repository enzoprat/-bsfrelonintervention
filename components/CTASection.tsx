import { site } from "@/lib/config";
import { CallButton, PhotoButton } from "./CallButton";
import { Icon } from "./Icon";

type Props = {
  title?: string;
  text?: string;
};

/** Bloc d'appel à l'action final, fond sombre, fort contraste. */
export function CTASection({
  title = "Un nid de frelons ou de guêpes ? Ne prenez aucun risque.",
  text = "Appelez-nous ou envoyez une photo du nid. Nous vous aidons à identifier la situation et planifions une intervention sécurisée à Bordeaux et alentours.",
}: Props) {
  return (
    <section className="bg-ink py-14 text-cream sm:py-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-anthracite to-ink p-8 sm:p-12">
          <div
            aria-hidden
            className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber/20 blur-3xl"
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="eyebrow mb-4">Intervention rapide · Bordeaux & alentours</span>
              <h2 className="text-3xl font-extrabold text-cream sm:text-4xl">{title}</h2>
              <p className="mt-4 max-w-lg text-cream/80">{text}</p>
              <p className="mt-5 flex items-center gap-2 text-sm text-cream/70">
                <Icon name="clock" className="h-4 w-4 text-amber" />
                {site.hours}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              <CallButton showNumber className="text-lg" />
              <PhotoButton variant="amber" className="text-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
