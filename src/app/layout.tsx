import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/shared/StickyCTA";

export const metadata: Metadata = {
  title: {
    default: "ConglomerateIT - AI-First Global Delivery Partner",
    template: "%s | ConglomerateIT",
  },
  description:
    "ConglomerateIT (CGIT LLC) is an AI-first global delivery partner delivering QA/QE, infrastructure, software development, data analytics, enterprise platforms, GCC, and executive hiring across 4 countries.",
  keywords: [
    "IT services",
    "QA testing",
    "cloud infrastructure",
    "AI solutions",
    "executive hiring",
    "software development",
    "ConglomerateIT",
    "CGIT2",
  ],
  authors: [{ name: "ConglomerateIT" }],
  creator: "ConglomerateIT",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://conglomerateit.com",
    siteName: "ConglomerateIT",
    title: "ConglomerateIT - AI-First Global Delivery Partner",
    description:
      "AI-first global delivery partner for enterprise transformation, GCC scale, software engineering, cloud, QA/QE, data, and executive hiring.",
    images: [{ url: "/images/logo.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ConglomerateIT",
    description: "AI-first global delivery for enterprise transformation.",
    creator: "@conglomerateit",
  },
  verification: {
    google: "Oj1iurjqPIavlR5UNIqJlOJudTtHz30QieAaP6b6TSU",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WP665FJ5');`}
        </Script>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5SSFXDZDT9"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5SSFXDZDT9');`}
        </Script>
      </head>
      <body>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WP665FJ5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
