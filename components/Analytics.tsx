import Script from "next/script";

/**
 * Tracking prêt à l'emploi mais désactivé par défaut.
 * Renseignez les variables d'environnement pour activer :
 *  - NEXT_PUBLIC_GA_ID        (Google Analytics 4 / Google Ads gtag)
 *  - NEXT_PUBLIC_META_PIXEL_ID (Meta Pixel)
 * Aucun script n'est chargé tant que les identifiants sont vides (RGPD-friendly).
 */
export function Analytics() {
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  const ads = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const pixel = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const gtagId = ga || ads;

  return (
    <>
      {gtagId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              ${ga ? `gtag('config', '${ga}');` : ""}
              ${ads ? `gtag('config', '${ads}');` : ""}
            `}
          </Script>
        </>
      )}

      {pixel && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixel}');fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
