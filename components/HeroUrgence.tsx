import { CallButton, PhotoButton } from "./CallButton";
import { TrustBadges } from "./TrustBadges";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { Icon } from "./Icon";
import { site } from "@/lib/config";

/** Hero principal de la page d'accueil. */
export function HeroUrgence() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      {/* Halos animés */}
      <div
        aria-hidden
        className="absolute -left-24 top-0 h-72 w-72 animate-float-slow rounded-full bg-amber/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-20 bottom-0 h-72 w-72 animate-float-slow rounded-full bg-safety/20 blur-3xl [animation-delay:-7s]"
      />
      {/* Motif points subtil */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#F8F5EF 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="container-page relative grid items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div>
          <span className="inline-flex animate-fade-in-up items-center gap-2 rounded-full bg-safety/20 px-3 py-1 text-sm font-semibold text-amber [animation-delay:60ms]">
            <span className="h-2 w-2 animate-pulse-soft rounded-full bg-safety" />
            Intervention rapide à domicile
          </span>

          <h1 className="mt-5 animate-fade-in-up text-4xl font-extrabold leading-tight text-cream [animation-delay:140ms] sm:text-5xl">
            Nid de frelons ou de guêpes à Bordeaux ?{" "}
            <span className="text-amber">Intervention rapide à domicile.</span>
          </h1>

          <p className="mt-5 max-w-xl animate-fade-in-up text-lg text-cream/80 [animation-delay:240ms]">
            Envoyez une photo du nid, obtenez un avis rapide et planifiez une intervention sécurisée
            à Bordeaux, Mérignac, Pessac, Talence et alentours.
          </p>

          <div className="mt-7 flex animate-fade-in-up flex-col gap-3 [animation-delay:340ms] sm:flex-row">
            <CallButton showNumber className="cta-glow text-lg" />
            <PhotoButton variant="amber" className="text-lg" />
          </div>

          <p className="mt-4 flex animate-fade-in-up items-center gap-2 text-sm text-cream/70 [animation-delay:420ms]">
            <Icon name="clock" className="h-4 w-4 text-amber" />
            {site.hours} · Devis sans engagement
          </p>

          <div className="mt-8 animate-fade-in-up [animation-delay:500ms]">
            <TrustBadges variant="dark" />
          </div>
        </div>

        <div className="relative animate-fade-in-up [animation-delay:300ms]">
          <div className="animate-float">
            <MediaPlaceholder
              src="/images/technicien-equipe.jpg"
              alt="Technicien équipé intervenant sur un nid de frelons sous une toiture à Bordeaux"
              caption="Technicien équipé en intervention"
              icon="shield"
              tone="amber"
              ratio="aspect-[4/5]"
              className="shadow-card"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden animate-float rounded-2xl border border-white/10 bg-anthracite/95 p-4 shadow-card [animation-delay:-3s] sm:block">
            <p className="flex items-center gap-2 text-sm font-semibold text-cream">
              <Icon name="check" className="h-5 w-5 text-eco" />
              Diagnostic par photo
            </p>
            <p className="text-xs text-cream/60">Avant tout déplacement</p>
          </div>
        </div>
      </div>
    </section>
  );
}
