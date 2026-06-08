import Link from "next/link";
import { Icon } from "./Icon";

export type Crumb = { name: string; href: string };

/** Fil d'ariane. Le dernier élément représente la page courante. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Fil d'ariane" className="container-page pt-5">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-graytext">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1">
              {i > 0 && <Icon name="chevron" className="h-3.5 w-3.5 -rotate-90 opacity-50" />}
              {isLast ? (
                <span aria-current="page" className="font-semibold text-ink">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-eco hover:underline">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
