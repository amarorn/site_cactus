import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const CustomCursor = dynamic(() => import("@/components/CustomCursor").then((m) => ({ default: m.CustomCursor })), {
  ssr: false,
});

const WhatsAppFab = dynamic(() => import("@/components/WhatsAppFab").then((m) => ({ default: m.WhatsAppFab })), {
  ssr: false,
});

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
        <GoogleAnalytics />
        <ThemeProvider>
          <CustomCursor />
          <WhatsAppFab />
          <JsonLd />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
