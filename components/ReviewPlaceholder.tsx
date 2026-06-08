import { site } from "@/lib/config";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

/**
 * Bloc avis clients. N'invente aucun avis : affiche des emplacements
 * à connecter aux vrais avis Google. Remplacez le contenu par les avis
 * réels une fois le profil Google Business relié.
 */
export function ReviewPlaceholder() {
  const slots = [
    "Avis client à connecter",
    "Avis client à connecter",
    "Avis client à connecter",
  ];
  return (
    <div>
      <div className="mb-6 flex flex-col items-center gap-2 text-center">
        <div className="flex items-center gap-1 text-amber" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon key={i} name="star" className="h-6 w-6 fill-amber" />
          ))}
        </div>
        <p className="text-sm font-medium text-graytext">
          Emplacement pour vos avis Google vérifiés
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        {slots.map((text, i) => (
          <Reveal key={i} from="up" delay={i * 110} className="h-full">
          <figure className="card flex h-full flex-col gap-3">
            <div className="flex items-center gap-1 text-amber" aria-hidden>
              {Array.from({ length: 5 }).map((_, j) => (
                <Icon key={j} name="star" className="h-4 w-4 fill-amber" />
              ))}
            </div>
            <blockquote className="text-sm italic text-graytext">
              « {text} »
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-2 text-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-eco/15 text-eco-dark">
                <Icon name="check" className="h-4 w-4" />
              </span>
              <span className="font-semibold text-ink">Client à afficher</span>
            </figcaption>
          </figure>
          </Reveal>
        ))}
      </div>

      {site.googleBusinessUrl && (
        <div className="mt-6 text-center">
          <a
            href={site.googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Icon name="star" className="h-5 w-5 text-amber-dark" />
            Voir nos avis sur Google
          </a>
        </div>
      )}
    </div>
  );
}
