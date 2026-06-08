import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

export type IconName =
  | "phone"
  | "camera"
  | "shield"
  | "clock"
  | "pin"
  | "check"
  | "alert"
  | "menu"
  | "close"
  | "chevron"
  | "arrow"
  | "star"
  | "mail"
  | "frelon"
  | "asiatique"
  | "guepe"
  | "toiture"
  | "leaf";

const paths: Record<IconName, ReactNode> = {
  phone: (
    <path d="M2.5 5.5C2.5 4 3.7 3 5.1 3h1.6c.7 0 1.3.5 1.5 1.2l.8 2.7c.2.7-.1 1.4-.7 1.8l-1.1.7a12 12 0 0 0 5 5l.7-1.1c.4-.6 1.1-.9 1.8-.7l2.7.8c.7.2 1.2.8 1.2 1.5v1.6c0 1.4-1 2.6-2.5 2.6C9.6 20.4 3.6 14.4 2.5 5.5Z" />
  ),
  camera: (
    <>
      <path d="M3 8.5C3 7.7 3.7 7 4.5 7h2l1-2h5l1 2h2c.8 0 1.5.7 1.5 1.5v8c0 .8-.7 1.5-1.5 1.5h-12C3.7 18 3 17.3 3 16.5v-8Z" />
      <circle cx="11" cy="12.5" r="3" />
    </>
  ),
  shield: <path d="M12 3 5 6v5c0 4.4 3 8.4 7 9.6 4-1.2 7-5.2 7-9.6V6l-7-3Zm-1 11-2.5-2.5 1.4-1.4L11 11.2l3.1-3.1 1.4 1.4L11 14Z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  check: <path d="M5 12.5 10 17 19 7" />,
  alert: (
    <>
      <path d="M12 3 2.5 20h19L12 3Z" />
      <path d="M12 10v4M12 17.5v.5" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  star: <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.2l5.9-.9L12 3Z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </>
  ),
  frelon: (
    <>
      <ellipse cx="12" cy="14" rx="3.2" ry="5" />
      <path d="M9 12h6M9 15h6M12 9V6" />
      <path d="M12 9c-3-2-6-2-7 0M12 9c3-2 6-2 7 0" />
    </>
  ),
  asiatique: (
    <>
      <ellipse cx="12" cy="13.5" rx="3" ry="4.5" />
      <path d="M8.8 13h6.4" />
      <path d="M12 9c-3.5-1.5-6.5-1-8 1M12 9c3.5-1.5 6.5-1 8 1" />
      <path d="M12 9V5.5" />
    </>
  ),
  guepe: (
    <>
      <circle cx="12" cy="8" r="2" />
      <ellipse cx="12" cy="14.5" rx="2.6" ry="4" />
      <path d="M9.4 13.5h5.2M9.4 16h5.2" />
      <path d="M12 10c-2.5-1.5-5-1-6 .5M12 10c2.5-1.5 5-1 6 .5" />
    </>
  ),
  toiture: (
    <>
      <path d="M3 11 12 4l9 7" />
      <path d="M5 10v9h14v-9" />
      <path d="M10 19v-5h4v5" />
    </>
  ),
  leaf: <path d="M5 19c0-7 5-12 14-13-1 9-6 14-13 14 0-3 2-6 6-8" />,
};

/** Icônes SVG inline, sans dépendance, héritant de currentColor. */
export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.1}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
