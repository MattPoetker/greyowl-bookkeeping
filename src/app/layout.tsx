import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const siteUrl = "https://greyowlbookkeeping.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Grey Owl Bookkeeping | Education-First Bookkeeping for Small Businesses & Non-Profits",
    template: "%s | Grey Owl Bookkeeping",
  },
  description:
    "Education-first bookkeeping for small businesses and non-profits. QuickBooks Pro Advisor offering discounted software, monthly base packages, and personal tax preparation across Canada.",
  keywords: [
    "bookkeeping",
    "small business bookkeeping",
    "non-profit bookkeeping",
    "QuickBooks Pro Advisor",
    "personal tax preparation",
    "tax filing Canada",
    "bookkeeper",
    "education-first bookkeeping",
    "monthly bookkeeping packages",
    "Grey Owl Bookkeeping",
  ],
  authors: [{ name: "Heather Klassen", url: siteUrl }],
  creator: "Grey Owl Bookkeeping",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Grey Owl Bookkeeping",
    title:
      "Grey Owl Bookkeeping | Education-First Bookkeeping for Small Businesses & Non-Profits",
    description:
      "Education-first bookkeeping for small businesses and non-profits. QuickBooks Pro Advisor with discounted software and monthly base packages.",
    images: [
      {
        url: "/images/heather-headshot.jpeg",
        width: 800,
        height: 1000,
        alt: "Heather Klassen, founder of Grey Owl Bookkeeping",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grey Owl Bookkeeping | Education-First Bookkeeping",
    description:
      "Stress-free bookkeeping for small businesses and non-profits. QuickBooks Pro Advisor with discounted software.",
    images: ["/images/heather-headshot.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
