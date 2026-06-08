import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  children: ReactNode;
  className?: string;
  /** Couleur de fond de section. */
  tone?: "cream" | "white" | "ink" | "amber";
  id?: string;
  /** Espacement vertical. */
  spacing?: "normal" | "tight";
};

const tones = {
  cream: "bg-cream",
  white: "bg-white",
  ink: "bg-ink text-cream",
  amber: "bg-amber/10",
} as const;

export function Section({ children, className = "", tone = "cream", id, spacing = "normal" }: Props) {
  const pad = spacing === "tight" ? "py-10 sm:py-12" : "py-14 sm:py-20";
  return (
    <section id={id} className={`${tones[tone]} ${pad} ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "ink",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  tone?: "ink" | "cream";
}) {
  return (
    <Reveal
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} mb-10`}
    >
      {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
      <h2
        className={`text-3xl font-extrabold sm:text-4xl ${
          tone === "cream" ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg ${tone === "cream" ? "text-cream/80" : "text-graytext"}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
