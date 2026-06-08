import { site } from "./config";
import { cityNames } from "./zones";
import type { FaqItem } from "./faq";

/** Schéma LocalBusiness réutilisable (footer / accueil). */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.domain}/#business`,
    name: site.name,
    image: `${site.domain}${site.ogImage}`,
    url: site.domain,
    telephone: site.phone,
    email: site.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.mainCity,
      addressRegion: site.region,
      addressCountry: "FR",
      streetAddress: site.addressZone,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: cityNames.map((name) => ({ "@type": "City", name })),
    openingHours: site.hours,
    sameAs: [site.googleBusinessUrl].filter(Boolean),
  };
}

/** Schéma Service pour une page service. */
export function serviceSchema(args: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    serviceType: args.serviceType,
    description: args.description,
    url: `${site.domain}${args.url}`,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phone,
    },
    areaServed: cityNames.map((name) => ({ "@type": "City", name })),
  };
}

/** Schéma FAQPage. */
export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** Schéma Article (BlogPosting) pour une page de conseil. */
export function articleSchema(args: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: args.title,
    description: args.description,
    datePublished: args.datePublished,
    dateModified: args.datePublished,
    image: `${site.domain}${site.ogImage}`,
    mainEntityOfPage: `${site.domain}${args.url}`,
    author: {
      "@type": "Organization",
      name: site.name,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
    },
  };
}

/** Schéma BreadcrumbList à partir d'une liste {name, href}. */
export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.domain}${item.href}`,
    })),
  };
}
