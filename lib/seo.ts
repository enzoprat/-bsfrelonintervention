import type { Metadata } from "next";
import { site } from "./config";

type SeoArgs = {
  title: string;
  description: string;
  /** Chemin relatif, ex : "/tarifs-...". "/" pour l'accueil. */
  path: string;
};

/**
 * Construit l'objet Metadata Next.js pour une page :
 * title + description uniques, canonical, Open Graph et Twitter.
 * L'image OG est fournie par la convention app/opengraph-image.tsx.
 */
export function buildMetadata({ title, description, path }: SeoArgs): Metadata {
  const url = path === "/" ? site.domain : `${site.domain}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: site.locale,
      url,
      siteName: site.shortName,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };
}
