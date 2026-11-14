import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileCta } from "@/components/mobile-cta";
import { Providers } from "@/components/providers";
import { site, socialLinks } from "@/content/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const googleAnalyticsId = "G-4DT8PFE5MV";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    images: [{ url: "/images/residence/facade.jpg", width: 1920, height: 1080, alt: "Façade de la Résidence La Lionne" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0c1724",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/images/residence/facade.jpg`,
  telephone: site.phones[0].tel,
  email: site.email,
  sameAs: socialLinks.map((s) => s.href),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressCountry: "CG",
  },
  checkinTime: "13:00",
  checkoutTime: "12:00",
  priceRange: "45 000 – 55 000 FCFA / nuit",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Script id="google-analytics-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileCta />
        </Providers>
      </body>
    </html>
  );
}
