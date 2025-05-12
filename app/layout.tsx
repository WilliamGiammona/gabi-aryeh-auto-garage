import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "המוסך של גבי ואריה",
  description: "auto repair and maintenance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
