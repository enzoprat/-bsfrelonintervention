import Link from "next/link";
import { site } from "@/lib/config";
import { Icon } from "./Icon";
import { PhotoButton } from "./CallButton";
import { Reveal } from "./Reveal";

const rows = [
  { label: "Nid de guêpes accessible", value: `À partir de ${site.priceFrom}`, highlight: true },
  { label: "Nid de frelons accessible", value: `À partir de ${site.priceFrom}` },
  { label: "Nid en hauteur (toiture, arbre)", value: "Sur devis" },
  { label: "Nid difficile d'accès", value: "Sur devis" },
  { label: "Intervention urgente", value: "Selon disponibilité" },
];

/** Aperçu tarifaire (indicatif) pour l'accueil. */
export function PricingPreview() {
  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <Reveal from="left" className="lg:col-span-3">
        <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-soft">
          <table className="w-full text-left">
            <caption className="sr-only">Tarifs indicatifs de destruction de nids</caption>
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.label}
                  className={`border-b border-ink/5 transition-colors duration-200 last:border-0 hover:bg-cream ${
                    r.highlight ? "bg-safety/5" : ""
                  }`}
                >
                  <th
                    scope="row"
                    className="px-3 py-4 text-sm font-medium text-graytext sm:px-5 sm:text-base"
                  >
                    <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      {r.highlight && (
                        <span className="rounded-full bg-safety/15 px-2 py-0.5 text-xs font-bold text-safety-dark">
                          Populaire
                        </span>
                      )}
                      {r.label}
                    </span>
                  </th>
                  <td className="px-3 py-4 text-right sm:px-5">
                    <span
                      className={`font-display font-bold ${
                        r.highlight ? "text-safety" : "text-ink"
                      }`}
                    >
                      {r.value}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 flex items-start gap-2 text-sm text-graytext">
          <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0 text-amber-dark" />
          Le tarif dépend de la hauteur, de l'accessibilité et du type de nid. Ces montants sont
          donnés à titre indicatif.
        </p>
      </Reveal>

      <Reveal from="right" delay={120} className="flex flex-col justify-center gap-4 rounded-2xl bg-ink p-6 text-cream lg:col-span-2">
        <h3 className="font-display text-xl font-bold text-cream">
          Envoyez une photo pour une estimation rapide
        </h3>
        <p className="text-sm text-cream/80">
          Une photo du nid et sa hauteur approximative suffisent pour obtenir un avis clair avant
          tout déplacement.
        </p>
        <PhotoButton variant="amber" className="w-full" label="Estimer mon intervention" />
        <Link
          href="/tarifs-destruction-nid-frelons-bordeaux"
          className="text-center text-sm font-semibold text-amber hover:text-amber-dark"
        >
          Voir le détail des tarifs →
        </Link>
      </Reveal>
    </div>
  );
}
