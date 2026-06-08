import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/config";

export const alt =
  "Destruction de nids de frelons, frelons asiatiques et guêpes à Bordeaux";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Photo de l'équipe encodée en base64 pour l'intégrer dans l'image OG. */
const photo = readFileSync(join(process.cwd(), "public/images/og-equipe.jpg"));
const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

/** Image Open Graph générée (partagée par toutes les pages). */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #111111 0%, #1C1C1C 100%)",
          color: "#F8F5EF",
          fontFamily: "sans-serif",
        }}
      >
        {/* Colonne texte */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            padding: "64px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "16px",
                background: "#F4B000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "36px",
              }}
            >
              🐝
            </div>
            <div style={{ fontSize: "28px", fontWeight: 700, color: "#F4B000" }}>
              {site.name}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div
              style={{
                display: "flex",
                fontSize: "56px",
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              Nid de frelons ou de guêpes à Bordeaux ?
            </div>
            <div style={{ display: "flex", fontSize: "30px", color: "#F4B000", fontWeight: 700 }}>
              Intervention rapide & sécurisée à domicile
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              fontSize: "23px",
              color: "rgba(248,245,239,0.85)",
            }}
          >
            <div
              style={{
                background: "#FF6B1A",
                color: "#fff",
                padding: "9px 20px",
                borderRadius: "12px",
                fontWeight: 700,
              }}
            >
              Bordeaux & Métropole
            </div>
            <div>Mérignac · Pessac · Talence</div>
          </div>
        </div>

        {/* Colonne photo */}
        <div style={{ display: "flex", position: "relative", width: "440px", height: "100%" }}>
          <img
            src={photoSrc}
            width={440}
            height={630}
            style={{ width: "440px", height: "630px", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, #1C1C1C 0%, rgba(28,28,28,0) 22%)",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
