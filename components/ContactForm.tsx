"use client";

import { useState } from "react";
import { site, telDisplay, telLink } from "@/lib/config";
import { Icon } from "./Icon";

type Status = "idle" | "sending" | "success" | "error";

/**
 * Formulaire de demande de devis.
 * - Si NEXT_PUBLIC_WEB3FORMS_KEY est défini : envoi via Web3Forms.
 * - Sinon : repli mailto (ouvre le client mail pré-rempli).
 * `compact` = version express en 5 champs (page urgence).
 */
export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Repli mailto si aucune clé de formulaire n'est configurée.
    if (!site.web3formsKey) {
      const lines = [
        `Nom : ${data.get("nom")}`,
        `Téléphone : ${data.get("telephone")}`,
        `Ville : ${data.get("ville")}`,
        `Type de nid : ${data.get("type_nid")}`,
        !compact ? `Emplacement : ${data.get("emplacement")}` : "",
        !compact ? `Hauteur : ${data.get("hauteur")}` : "",
        !compact ? `Lien photo : ${data.get("lien_photo")}` : "",
        `Message : ${data.get("message")}`,
      ].filter(Boolean);
      window.location.href = `${`mailto:${site.email}`}?subject=${encodeURIComponent(
        "Demande de devis — nid de frelons/guêpes",
      )}&body=${encodeURIComponent(lines.join("\n"))}`;
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("sending");
    try {
      data.append("access_key", site.web3formsKey);
      data.append("subject", "Nouvelle demande de devis — nid de frelons/guêpes");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-eco/30 bg-eco/10 p-8 text-center">
        <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-eco text-white">
          <Icon name="check" className="h-8 w-8" />
        </span>
        <h3 className="text-xl font-bold text-ink">Demande bien reçue</h3>
        <p className="mt-2 text-graytext">
          Merci, nous revenons vers vous au plus vite. Pour une situation urgente, appelez
          directement le{" "}
          <a href={telLink} className="font-semibold text-eco-dark underline" data-event="click_call">
            {telDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      data-event="form_submit"
      className="space-y-4 rounded-2xl border border-ink/10 bg-white p-6 shadow-card sm:p-8"
      noValidate
    >
      {/* Anti-spam (honeypot) */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nom" name="nom" autoComplete="name" required />
        <Field
          label="Téléphone"
          name="telephone"
          type="tel"
          autoComplete="tel"
          required
          inputMode="tel"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Ville" name="ville" autoComplete="address-level2" required />
        <SelectField
          label="Type de nid supposé"
          name="type_nid"
          options={["Frelon", "Frelon asiatique", "Guêpes", "Je ne sais pas"]}
          required
        />
      </div>

      {!compact && (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <SelectField
              label="Emplacement"
              name="emplacement"
              options={["Toiture", "Arbre", "Volet roulant", "Comble", "Jardin", "Autre"]}
            />
            <SelectField
              label="Hauteur approximative"
              name="hauteur"
              options={[
                "Accessible (moins de 3 m)",
                "En hauteur (3 à 6 m)",
                "Très haut (plus de 6 m)",
                "Je ne sais pas",
              ]}
            />
          </div>
          <Field
            label="Lien vers une photo (optionnel)"
            name="lien_photo"
            type="url"
            placeholder="https://… (lien d'une photo hébergée)"
            hint="L'upload direct peut être branché plus tard. En attendant, collez un lien de photo."
          />
        </>
      )}

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-semibold text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 2 : 3}
          placeholder="Décrivez brièvement la situation (depuis quand, où exactement…)"
          className="w-full rounded-xl border border-ink/15 bg-cream/40 px-4 py-3 text-ink placeholder:text-graytext/60 focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/40"
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-safety/10 px-4 py-3 text-sm text-safety-dark">
          Une erreur est survenue. Réessayez ou appelez-nous au{" "}
          <a href={telLink} className="font-semibold underline">
            {telDisplay}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-call w-full text-lg disabled:opacity-60"
        data-event="form_submit"
      >
        {status === "sending" ? "Envoi en cours…" : "Demander un rappel rapide"}
      </button>

      <p className="text-center text-xs text-graytext">
        En envoyant ce formulaire, vous acceptez d'être recontacté au sujet de votre demande. Vos
        données ne sont jamais revendues.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
  hint,
  inputMode,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  hint?: string;
  inputMode?: "tel" | "text" | "url";
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-semibold text-ink">
        {label} {required && <span className="text-safety">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        inputMode={inputMode}
        className="w-full rounded-xl border border-ink/15 bg-cream/40 px-4 py-3 text-ink placeholder:text-graytext/60 focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/40"
      />
      {hint && <p className="mt-1 text-xs text-graytext">{hint}</p>}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-semibold text-ink">
        {label} {required && <span className="text-safety">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-xl border border-ink/15 bg-cream/40 px-4 py-3 text-ink focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/40"
      >
        <option value="" disabled>
          Sélectionnez…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
