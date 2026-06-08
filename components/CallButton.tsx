import Link from "next/link";
import { telLink, telDisplay } from "@/lib/config";
import { Icon } from "./Icon";

type Props = {
  variant?: "call" | "amber" | "ghost";
  className?: string;
  showNumber?: boolean;
  label?: string;
};

/**
 * Bouton « Appeler maintenant » réutilisable.
 * Toujours cliquable en mobile via tel:, avec attribut de tracking.
 */
export function CallButton({
  variant = "call",
  className = "",
  showNumber = false,
  label = "Appeler maintenant",
}: Props) {
  const cls =
    variant === "amber" ? "btn-amber" : variant === "ghost" ? "btn-ghost" : "btn-call";
  return (
    <a href={telLink} className={`btn-shine ${cls} ${className}`} data-event="click_call">
      <Icon name="phone" className="h-5 w-5" />
      <span>{showNumber ? telDisplay : label}</span>
    </a>
  );
}

/** Lien vers le formulaire / envoi de photo. */
export function PhotoButton({
  variant = "ghost",
  className = "",
  label = "Envoyer une photo du nid",
  href = "/#devis",
}: {
  variant?: "call" | "amber" | "ghost" | "eco";
  className?: string;
  label?: string;
  href?: string;
}) {
  const cls =
    variant === "amber"
      ? "btn-amber"
      : variant === "call"
        ? "btn-call"
        : variant === "eco"
          ? "btn-eco"
          : "btn-ghost";
  return (
    <Link href={href} className={`btn-shine ${cls} ${className}`} data-event="photo_upload">
      <Icon name="camera" className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );
}
