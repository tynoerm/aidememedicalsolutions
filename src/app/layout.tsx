import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meridian RCM | Accounts Receivable Follow-Up for Medical Practices",
  description:
    "Meridian RCM helps medical practices recover aging claims faster with dedicated AR follow-up, denial management, and payer escalation services.",
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
