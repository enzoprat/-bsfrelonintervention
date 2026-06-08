import Link from "next/link";
import { site, telLink, telDisplay, mailLink } from "@/lib/config";
import { footerNav } from "@/lib/navigation";
import { Icon } from "./Icon";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-cream">
      {/* CTA téléphone */}
      <div className="border-b border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-8 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-display text-xl font-bold text-cream">
              Un nid à faire retirer rapidement ?
            </p>
            <p className="text-sm text-cream/70">Bordeaux, Mérignac, Pessac, Talence et alentours.</p>
          </div>
          <a href={telLink} className="btn-call" data-event="click_call">
            <Icon name="phone" className="h-5 w-5" />
            Appeler {telDisplay}
          </a>
        </div>
      </div>

      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* NAP */}
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-amber">
              <Icon name="shield" className="h-6 w-6" />
            </span>
            <span className="font-display text-lg font-extrabold text-cream">{site.name}</span>
          </div>
          <address className="space-y-2 text-sm not-italic text-cream/80">
            <p className="flex items-start gap-2">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
              {site.addressZone}
            </p>
            <p>
              <a href={telLink} className="flex items-center gap-2 hover:text-amber" data-event="click_call">
                <Icon name="phone" className="h-4 w-4 shrink-0 text-amber" />
                {telDisplay}
              </a>
            </p>
            <p>
              <a href={mailLink} className="flex items-center gap-2 hover:text-amber">
                <Icon name="mail" className="h-4 w-4 shrink-0 text-amber" />
                {site.email}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Icon name="clock" className="h-4 w-4 shrink-0 text-amber" />
              {site.hours}
            </p>
          </address>
          {site.googleBusinessUrl && (
            <a
              href={site.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber hover:underline"
            >
              <Icon name="star" className="h-4 w-4" />
              Profil Google Business
            </a>
          )}
        </div>

        {/* Services */}
        <FooterColumn title="Services" links={footerNav.services} />
        {/* Zones */}
        <FooterColumn title="Zones d'intervention" links={footerNav.zones} />
        {/* Légal + contact */}
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-amber">Informations</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/#devis" className="text-cream/80 hover:text-amber">
                Demande de devis
              </Link>
            </li>
            {footerNav.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-cream/80 hover:text-amber">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-cream/50">
            Certifications : {site.certifications}. {site.guarantee}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-cream/60 sm:flex-row">
          <p>
            © {year} {site.name}. Tous droits réservés.
          </p>
          <p>Destruction de nids de frelons, frelons asiatiques et guêpes · Bordeaux & Gironde</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-amber">{title}</h2>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-cream/80 hover:text-amber">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
