import { processSteps } from "@/lib/services";
import { Reveal } from "./Reveal";

export function ProcessSteps() {
  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((step, i) => (
        <Reveal key={step.title} from="up" delay={i * 110} className="h-full">
          <li className="group relative h-full overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-card">
            {/* Gros chiffre filigrane */}
            <span
              aria-hidden
              className="pointer-events-none absolute -right-2 -top-4 font-display text-7xl font-extrabold text-amber/10 transition-colors duration-300 group-hover:text-amber/20"
            >
              {i + 1}
            </span>
            <span className="relative mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-lg font-bold text-amber transition-transform duration-300 group-hover:scale-110">
              {i + 1}
            </span>
            <h3 className="relative mb-2 text-base font-bold text-ink">{step.title}</h3>
            <p className="relative text-sm leading-relaxed text-graytext">{step.text}</p>
            {i < processSteps.length - 1 && (
              <span
                aria-hidden
                className="absolute -right-3 top-12 hidden h-0.5 w-6 bg-amber/50 lg:block"
              />
            )}
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
