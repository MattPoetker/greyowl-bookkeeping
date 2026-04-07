import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Grey Owl Bookkeeping | Stress-Free Bookkeeping for Small Businesses & Non-Profits",
    template: "%s | Grey Owl Bookkeeping",
  },
  description:
    "Education-first bookkeeping for small businesses and non-profits. Save up to $3,000/year with our proprietary software. Serving non-profits, sole proprietors, and growing businesses.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Grey Owl Bookkeeping",
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
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
