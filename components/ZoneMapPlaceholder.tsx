import Link from "next/link";
import { cities } from "@/lib/zones";
import { Icon } from "./Icon";

/** Aperçu carte + liste des communes desservies. */
export function ZoneMapPlaceholder() {
  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-2">
      <div
        role="img"
        aria-label="Carte de la zone d'intervention autour de Bordeaux et de la métropole"
        className="relative min-h-[260px] overflow-hidden rounded-2xl border border-ink/10 bg-gradient-to-br from-eco/20 via-cream to-amber/20"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center text-eco-dark">
          <Icon name="pin" className="h-10 w-10" />
          <p className="font-display text-xl font-bold text-ink">Bordeaux & métropole</p>
          <p className="max-w-xs text-sm text-graytext">
            Carte interactive à intégrer (Google Maps / OpenStreetMap)
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-soft">
        <h3 className="mb-4 text-lg font-bold text-ink">Communes desservies</h3>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          {cities.map((city) => (
            <li key={city.name}>
              {city.slug ? (
                <Link
                  href={`/${city.slug}`}
                  className="flex items-center gap-1.5 font-medium text-eco hover:text-eco-dark"
                >
                  <Icon name="check" className="h-4 w-4" />
                  {city.name}
                </Link>
              ) : (
                <span className="flex items-center gap-1.5 text-graytext">
                  <Icon name="check" className="h-4 w-4 text-amber-dark" />
                  {city.name}
                </span>
              )}
            </li>
          ))}
        </ul>
        <Link
          href="/zones-intervention"
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-eco hover:text-eco-dark"
        >
          Voir toutes les zones d'intervention
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
