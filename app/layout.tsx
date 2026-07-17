import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCallBar } from "@/components/StickyCallBar";
import { BackToTop } from "@/components/BackToTop";
import { Analytics } from "@/components/Analytics";
import { ConversionEvents } from "@/components/ConversionEvents";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/jsonld";
import { site } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Destruction nid de frelons à Bordeaux | Intervention rapide",
    template: "%s",
  },
  description:
    "Nid de frelons ou de guêpes à Bordeaux ? Intervention rapide à domicile à Bordeaux et alentours. Devis rapide, intervention sécurisée.",
  applicationName: site.shortName,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  verification: {
    google: "jyz735adQevrfExp1p7JY1eMUF2JiEX5Dcu1M-I31vk",
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallBar />
        <BackToTop />
        <Analytics />
        <ConversionEvents />
      </body>
    </html>
  );
}
