import type { Metadata } from "next";
import { Figtree, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteInit from "@/components/SiteInit";
import AleqSymbol from "@/components/AleqSymbol";
import Analytics from "@/components/Analytics";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aleq.com"),
  title: {
    default: "Aleq — the controller you can audit.",
    template: "%s | Aleq",
  },
  description:
    "Aleq closes the books, reconciles to the penny, and runs collections by voice — with every action gated, signed, and reversible.",
  icons: { icon: "/Favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <AleqSymbol />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <SiteInit />
        <Analytics />
      </body>
    </html>
  );
}
