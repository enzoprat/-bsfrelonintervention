import { Icon } from "./Icon";
import { CallButton } from "./CallButton";

/** Bandeau d'avertissement « ne vous approchez pas du nid ». */
export function UrgenceNotice({ withButton = true }: { withButton?: boolean }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border-l-4 border-safety bg-safety/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <div className="flex gap-3">
        <Icon name="alert" className="h-7 w-7 shrink-0 text-safety" />
        <div>
          <p className="font-display text-lg font-bold text-ink">
            Ne vous approchez pas du nid.
          </p>
          <p className="text-sm text-graytext">
            Gardez vos distances, éloignez enfants et animaux, et contactez un professionnel. Ne
            tentez pas de détruire le nid vous-même.
          </p>
        </div>
      </div>
      {withButton && <CallButton className="shrink-0" />}
    </div>
  );
}
