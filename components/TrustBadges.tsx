import { Icon, type IconName } from "./Icon";

const badges: { icon: IconName; label: string }[] = [
  { icon: "clock", label: "Intervention rapide" },
  { icon: "check", label: "Devis clair" },
  { icon: "shield", label: "Technicien équipé" },
  { icon: "pin", label: "Bordeaux & alentours" },
];

/** Bandeau de micro-rassurances (sous le hero). */
export function TrustBadges({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <ul
      className={`grid grid-cols-2 gap-3 sm:grid-cols-4 ${
        isDark ? "text-cream" : "text-ink"
      }`}
    >
      {badges.map((b) => (
        <li
          key={b.label}
          className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 text-sm font-semibold ${
            isDark
              ? "border-white/10 bg-white/5"
              : "border-ink/10 bg-white shadow-soft"
          }`}
        >
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
              isDark ? "bg-amber/20 text-amber" : "bg-amber/15 text-amber-dark"
            }`}
          >
            <Icon name={b.icon} className="h-5 w-5" />
          </span>
          {b.label}
        </li>
      ))}
    </ul>
  );
}
