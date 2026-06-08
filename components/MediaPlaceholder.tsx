import Image from "next/image";
import { Icon, type IconName } from "./Icon";

type Props = {
  /** Texte alternatif SEO (sert d'aria-label tant qu'aucune image réelle n'est branchée). */
  alt: string;
  /** Chemin d'une vraie image (ex : "/images/nid-guepes.jpg"). Si absent → placeholder. */
  src?: string;
  /** Légende visible (placeholder) ou survol (image). */
  caption?: string;
  icon?: IconName;
  className?: string;
  /** Ratio Tailwind, ex : "aspect-[4/3]". */
  ratio?: string;
  tone?: "amber" | "ink" | "eco";
  /** Charge l'image en priorité (hero au-dessus de la ligne de flottaison). */
  priority?: boolean;
};

/**
 * Affiche une vraie photo (next/image) quand `src` est fourni, sinon un
 * emplacement visuel dégradé. L'attribut `alt` reste utilisé dans les deux cas.
 */
export function MediaPlaceholder({
  alt,
  src,
  caption,
  icon = "camera",
  className = "",
  ratio = "aspect-[4/3]",
  tone = "amber",
  priority = false,
}: Props) {
  const tones = {
    amber: "from-amber/25 via-cream to-eco/15 text-amber-dark",
    ink: "from-ink/90 via-anthracite to-ink text-amber",
    eco: "from-eco/25 via-cream to-amber/15 text-eco-dark",
  } as const;

  if (src) {
    return (
      <figure
        className={`group relative overflow-hidden rounded-2xl border border-ink/10 ${ratio} ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {caption && (
          <>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/70 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-4 text-sm font-semibold text-cream">
              <Icon name={icon} className="h-4 w-4 text-amber" />
              {caption}
            </figcaption>
          </>
        )}
      </figure>
    );
  }

  return (
    <figure
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden rounded-2xl border border-ink/10 bg-gradient-to-br ${tones[tone]} ${ratio} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
        <Icon name={icon} className="h-10 w-10 opacity-80" />
        {caption && (
          <figcaption className="max-w-[80%] text-sm font-semibold opacity-90">
            {caption}
          </figcaption>
        )}
        <span className="text-[0.7rem] uppercase tracking-wide opacity-60">Photo à intégrer</span>
      </div>
    </figure>
  );
}
