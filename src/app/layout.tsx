import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Horton | Product Engineer",
  description: "Product engineer who ships full-stack products end-to-end — with AI agents as force multipliers.",
  openGraph: {
    title: "Alex Horton | Product Engineer",
    description: "Product engineer who ships full-stack products end-to-end — with AI agents as force multipliers.",
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
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#e5e5e5]">{children}</body>
    </html>
  );
}
