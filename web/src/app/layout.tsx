import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const sans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = "Atharva Biyani - Software Engineer";
const description =
  "Software Engineer at Oracle (OCI Identity & Access Management). MS in Artificial Intelligence at UT Austin. Portfolio, projects, and writing.";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s · ${title}`,
  },
  description,
  keywords: [
    "Atharva Biyani",
    "Software Engineer",
    "Oracle",
    "OCI",
    "UT Austin",
    "Artificial Intelligence",
    "Full Stack",
    "Cloud",
  ],
  authors: [{ name: "Atharva Biyani" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
      className={`dark ${sans.variable} ${mono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
