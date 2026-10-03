import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aidme Medical Solutions",
  description:
    "Aidme Medical Solutions is a healthcare technology company
building an integrated digital platform that streamlines the
relationship between health service providers, medical aid
funders, and patients. We exist to solve one of healthcare
administration's most persistent problems: inefficient claims
processing, revenue leakage, delayed payments, weak
communication, and fragmented patient management.
Our platform automates claims tracking, debt monitoring,
preauthorizations, patient engagement, reporting, and
communication workflows. By reducing manual processes and
improving visibility across the healthcare value chain, we help
institutions strengthen cash flow, improve service delivery, and
increase operational accountability.
Built for hospitals, clinics, pharmacies, laboratories, and
medical aid funders — with a secure self-service portal for
patients — Aidme Medical Solutions enables every stakeholder
to make faster, more accurate, and more transparent
decisions",
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
