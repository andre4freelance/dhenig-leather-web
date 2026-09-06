import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhenig Leather | Genuine Leather Supplier in Jakarta Since 1997",
  description: "Stocking full grain cowhide, Italian garment sheepskin, vegetable-tanned hides, and pull-up leathers in Harco Mangga Dua, Jakarta. Supplying workshops and brands worldwide.",
  keywords: [
    "Dhenig Leather Jakarta",
    "Leather Supplier Jakarta",
    "Harco Mangga Dua Leather",
    "Italian Nappa Leather Indonesia",
    "Vegetable Tanned Leather Jakarta",
    "Garut Cowhide Supplier",
    "Bespoke Leather Sourcing"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen selection:bg-[#78350f] selection:text-white bg-[#faf8f5] text-[#44403c]">
        {children}
      </body>
    </html>
  );
}
