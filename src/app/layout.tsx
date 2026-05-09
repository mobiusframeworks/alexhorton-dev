import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Horton | AI-native product builder",
  description:
    "AI-native product engineer. Three live full-stack products and a multi-agent dev harness that lets me run them solo. Founding-engineer and product-engineer roles.",
  keywords: [
    "AI engineer",
    "AI-native",
    "product engineer",
    "founding engineer",
    "full-stack",
    "ML engineer",
    "applied AI",
    "agent infrastructure",
    "Claude",
    "Next.js",
    "Python",
  ],
  openGraph: {
    title: "Alex Horton | AI-native product builder",
    description:
      "AI-native product engineer. Three live full-stack products and a multi-agent dev harness that lets me run them solo.",
    url: "https://alexhorton.dev",
    type: "website",
  },
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
