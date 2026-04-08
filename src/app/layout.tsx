import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Horton | Full-Stack Engineer & ML Builder",
  description: "Full-stack engineer with ML background. Shipped production platforms in energy, fintech, and real estate.",
  openGraph: {
    title: "Alex Horton | Full-Stack Engineer & ML Builder",
    description: "Full-stack engineer with ML background. Shipped production platforms in energy, fintech, and real estate.",
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
