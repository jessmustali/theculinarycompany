import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Fragment_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Tobias — licensed display serif (Klim Type Foundry).
// Files are loaded from app/fonts/. Confirm your license covers web use.
const display = localFont({
  src: [
    { path: "./fonts/tobias-light.otf",         weight: "300", style: "normal" },
    { path: "./fonts/tobias-light-italic.otf",  weight: "300", style: "italic" },
    { path: "./fonts/tobias-regular.otf",       weight: "400", style: "normal" },
    { path: "./fonts/tobias-regular-italic.otf",weight: "400", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500"],
});

const mono = Fragment_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theculinarycompany.com"),
  title: {
    default: "The Culinary Company — by invitation",
    template: "%s · The Culinary Company",
  },
  description:
    "An after-hours dining society. Tables in places that don't exist yet.",
  applicationName: "The Culinary Company",
  authors: [{ name: "The Culinary Company" }],
  keywords: [
    "private dining",
    "supper club",
    "speakeasy dinner",
    "san francisco",
    "popup dinner",
    "invitation only",
  ],
  openGraph: {
    title: "The Culinary Company",
    description: "Tables in places that don't exist yet.",
    url: "https://theculinarycompany.com",
    siteName: "The Culinary Company",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Culinary Company",
    description: "Tables in places that don't exist yet.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1a1a1c",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
