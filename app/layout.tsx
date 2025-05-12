import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "מושך גבי את אריה",
  description: "auto repair and maintenance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
