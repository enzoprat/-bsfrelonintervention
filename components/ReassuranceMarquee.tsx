import { Icon, type IconName } from "./Icon";

const items: { icon: IconName; label: string }[] = [
  { icon: "clock", label: "Intervention rapide à domicile" },
  { icon: "shield", label: "Technicien équipé & assuré" },
  { icon: "camera", label: "Diagnostic par photo avant déplacement" },
  { icon: "check", label: "Devis clair sans engagement" },
  { icon: "leaf", label: "Méthode adaptée à chaque nid" },
  { icon: "pin", label: "Bordeaux & toute la métropole" },
];

/** Bandeau défilant de réassurance (boucle infinie, masqué aux lecteurs d'écran). */
export function ReassuranceMarquee() {
  return (
    <div
      aria-hidden
      className="group relative flex overflow-hidden border-y border-white/10 bg-ink py-3 text-cream"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent" />
      {[0, 1].map((dup) => (
        <ul
          key={dup}
          className="flex shrink-0 animate-marquee items-center gap-10 px-5 group-hover:[animation-play-state:paused]"
        >
          {items.map((it, i) => (
            <li key={i} className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold">
              <Icon name={it.icon} className="h-4 w-4 text-amber" />
              {it.label}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
