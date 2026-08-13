import { Figtree, Inter } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Provider from "./Provider";

const figtreeHeading = Figtree({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  description: "Simple ERP",
  title: "Simple ERP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-full",
          "antialiased",
          "font-sans",
          inter.variable,
          figtreeHeading.variable
        )}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
