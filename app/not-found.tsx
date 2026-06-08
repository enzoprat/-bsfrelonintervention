import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { Icon } from "@/components/Icon";
import { routes } from "@/lib/routes";

const quickLinks = routes
  .filter((r) =>
    [
      "/",
      "/destruction-nid-frelons-bordeaux",
      "/destruction-nid-guepes-bordeaux",
      "/urgence-nid-frelons-bordeaux",
      "/tarifs-destruction-nid-frelons-bordeaux",
      "/zones-intervention",
    ].includes(r.path),
  )
  .map((r) => ({ href: r.path, label: r.label }));

export default function NotFound() {
  return (
    <section className="bg-ink text-cream">
      <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-16 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber/15 text-amber">
          <Icon name="alert" className="h-9 w-9" />
        </span>
        <p className="mt-6 font-display text-6xl font-extrabold text-amber">404</p>
        <h1 className="mt-2 text-2xl font-extrabold text-cream sm:text-3xl">
          Cette page est introuvable
        </h1>
        <p className="mt-3 max-w-md text-cream/80">
          Le lien que vous avez suivi n'existe pas ou a été déplacé. Mais pas d'inquiétude : nous
          intervenons toujours rapidement pour vos nids de frelons et de guêpes à Bordeaux.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <CallButton showNumber />
          <Link href="/" className="btn-amber">
            <Icon name="arrow" className="h-5 w-5 rotate-180" />
            Retour à l'accueil
          </Link>
        </div>

        <nav aria-label="Liens utiles" className="mt-10">
          <ul className="flex flex-wrap justify-center gap-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-cream hover:border-amber hover:text-amber"
                >
                  <Icon name="pin" className="h-4 w-4 text-amber" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
