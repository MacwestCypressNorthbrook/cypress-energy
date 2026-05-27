import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import AppShell from "@/components/AppShell";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-display" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cypress Energy | West Africa's Offshore Marine & Logistics Experts",
  description:
    "Cypress Energy Company Limited - Delivering excellence in the oil and gas sector through innovative marine and logistics solutions in West Africa.",
  icons: {
    icon: "/LOGO-FOOTER-3.png",
  },
};

import SmoothScrolling from "@/components/SmoothScrolling";
import PageTransition from "@/components/PageTransition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
        outfit.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScrolling>
          <PageTransition />
          <AppShell>{children}</AppShell>
        </SmoothScrolling>
      </body>
    </html>
  );
}
