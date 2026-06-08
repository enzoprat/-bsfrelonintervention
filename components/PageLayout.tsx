import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { JsonLd } from "./JsonLd";

type Props = {
  children: ReactNode;
  /** Fil d'ariane (le 1er « Accueil » est ajouté automatiquement). */
  breadcrumbs?: Crumb[];
  /** Blocs de données structurées JSON-LD propres à la page. */
  jsonLd?: object | object[];
  /** Masquer le fil d'ariane (ex : page d'accueil). */
  hideBreadcrumbs?: boolean;
};

/**
 * Enveloppe de contenu de page : injecte le JSON-LD, le fil d'ariane,
 * puis le contenu. Header / Footer / barre mobile sont dans le layout racine.
 */
export function PageLayout({ children, breadcrumbs, jsonLd, hideBreadcrumbs }: Props) {
  const crumbs: Crumb[] = breadcrumbs
    ? [{ name: "Accueil", href: "/" }, ...breadcrumbs]
    : [];

  return (
    <>
      {jsonLd && <JsonLd data={jsonLd} />}
      {!hideBreadcrumbs && crumbs.length > 1 && <Breadcrumbs items={crumbs} />}
      {children}
    </>
  );
}
