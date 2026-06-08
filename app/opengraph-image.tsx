import { ImageResponse } from "next/og";
import { site } from "@/lib/config";

export const alt =
  "Destruction de nids de frelons, frelons asiatiques et guêpes à Bordeaux";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Image Open Graph générée (partagée par toutes les pages). */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #111111 0%, #1C1C1C 100%)",
          padding: "70px",
          color: "#F8F5EF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "18px",
              background: "#F4B000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
            }}
          >
            🐝
          </div>
          <div style={{ fontSize: "30px", fontWeight: 700, color: "#F4B000" }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            Nid de frelons ou de guêpes à Bordeaux ?
          </div>
          <div style={{ display: "flex", fontSize: "34px", color: "#F4B000", fontWeight: 700 }}>
            Intervention rapide & sécurisée à domicile
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "26px",
            color: "rgba(248,245,239,0.85)",
          }}
        >
          <div
            style={{
              background: "#FF6B1A",
              color: "#fff",
              padding: "10px 22px",
              borderRadius: "12px",
              fontWeight: 700,
            }}
          >
            Bordeaux & Métropole
          </div>
          <div>Mérignac · Pessac · Talence · Gironde</div>
        </div>
      </div>
    ),
    size,
  );
}
