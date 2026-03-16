import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { A11yProvider } from "@/components/A11yProvider";
import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { FirebaseInit } from "@/components/FirebaseInit";
import { ClientOnlyWidgets } from "@/components/ClientOnlyWidgets";
import { PersonalizationProvider } from "@/components/PersonalizationProvider";
import { SKIP_TARGET_ID } from "@/components/SkipLink";
import { GlobalEffects } from "@/components/layout/GlobalEffects";

const Footer = dynamic(
  () => import("@/components/Footer").then((m) => ({ default: m.Footer })),
  { ssr: true }
);

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || "";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";

export const metadata: Metadata = {
  title: "Cactus System | Desenvolvimento de Software, Dados e IA",
  description:
    "Empresa de tecnologia em Natal/RN. Desenvolvimento de aplicativos, sistemas web, arquitetura e engenharia de dados, analytics, BI e IA aplicada. Atendimento nacional.",
  metadataBase: new URL("https://cactussystems.com.br"),
  icons: {
    icon: "/brand/mark-green.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
  },
  ...(GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: GOOGLE_SITE_VERIFICATION,
    },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <Script
        id="a11y-apply-inline"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(){var k='cactus-a11y';try{var r=localStorage.getItem(k);if(!r)return;var p=JSON.parse(r);var el=document.documentElement;['a11y-font-100','a11y-font-110','a11y-font-125'].forEach(function(c){el.classList.remove(c);});var fs=[100,110,125].indexOf(Number(p.fontScale))>=0?p.fontScale:100;el.classList.add('a11y-font-'+fs);if(p.highContrast)el.classList.add('a11y-contrast-high');else el.classList.remove('a11y-contrast-high');if(p.reduceMotion)el.classList.add('a11y-reduce-motion');else el.classList.remove('a11y-reduce-motion');}catch(e){}})();`,
        }}
      />
      <body className={`${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-config" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`}
            </Script>
          </>
        )}
        <FirebaseInit />
        <ThemeProvider>
          <A11yProvider>
            <PersonalizationProvider>
              <GlobalEffects />
              <div className="relative z-10">
                <SkipLink />
                <ClientOnlyWidgets />
                <JsonLd />
                <Header />
                <main id={SKIP_TARGET_ID} tabIndex={-1}>
                  {children}
                </main>
                <Footer />
              </div>
            </PersonalizationProvider>
          </A11yProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
