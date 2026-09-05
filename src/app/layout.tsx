import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhenig Leather Jakarta | Premier Genuine Leather Supplier Est. 1997",
  description: "Boutique supplier of premium cowhide & sheepskin leather (Fine Indonesian Tannery & Imported Italian Hides) based in Jakarta, Indonesia. Supplying bespoke ateliers, crafters, and international fashion houses since 1997.",
  keywords: [
    "Dhenig Leather Jakarta",
    "Genuine Leather Supplier Indonesia",
    "Italian Nappa Leather",
    "Vegetable Tanned Leather Indonesia",
    "Bespoke Leather Jacket Material",
    "Full Grain Cowhide Exporter",
    "Harco Mangga Dua Leather Store"
  ],
  openGraph: {
    title: "Dhenig Leather Jakarta | Authentic Leather Since 1997",
    description: "Source premium genuine leather hides: Italian Nappa, Veg-Tan, Pull-Up, and Custom Bespoke Garment Leathers with worldwide export shipping.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen selection:bg-[#b45309] selection:text-white">
        {children}
      </body>
    </html>
  );
}
