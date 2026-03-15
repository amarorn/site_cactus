import type { Metadata } from "next";
import dynamic from "next/dynamic";
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
      <body className={`${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
        <FirebaseInit />
        <ThemeProvider>
          <A11yProvider>
            <PersonalizationProvider>
              <SkipLink />
              <ClientOnlyWidgets />
              <JsonLd />
              <Header />
              <main id={SKIP_TARGET_ID} tabIndex={-1}>
                {children}
              </main>
              <Footer />
            </PersonalizationProvider>
          </A11yProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
