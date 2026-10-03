import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aidme Medical Solutions",
  description:
    "Aidme Medical Solutions is a healthcare technology company
building an integrated digital platform that streamlines the
relationship between health service providers, medical aid
funders, and patients.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
