import Link from "next/link";
import { services } from "@/lib/services";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function ServiceCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s, i) => (
        <Reveal key={s.title} from="up" delay={i * 90}>
          <Link
            href={s.href}
            className="card-interactive group flex h-full flex-col gap-3"
          >
            <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber/20 to-safety/15 text-amber-dark transition-all duration-300 group-hover:from-amber group-hover:to-amber group-hover:text-ink group-hover:shadow-glow">
              <Icon
                name={s.icon}
                className="h-7 w-7 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
              />
            </span>
            <h3 className="text-lg font-bold text-ink">{s.title}</h3>
            <p className="text-sm leading-relaxed text-graytext">{s.short}</p>
            <span className="mt-auto inline-flex items-center gap-1 pt-1 text-sm font-semibold text-eco">
              En savoir plus
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
