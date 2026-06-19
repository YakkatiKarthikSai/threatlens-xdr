import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ThreatLens XDR",
  description: "AI-Powered Security Monitoring & Threat Detection Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
