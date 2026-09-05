import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toko Kulit Dhenig | Pusat Bahan Kulit Asli Jakarta Sejak 1997",
  description: "Penyedia bahan kulit sapi & domba asli berkualitas tinggi (lokal & impor Italia) di Ruko Harco Mangga Dua, Jakarta Pusat. Melayani eceran & partai besar grosir.",
  keywords: ["Toko Kulit Dhenig", "Bahan Kulit Jakarta", "Kulit Asli Mangga Dua", "Leather Supplier Jakarta", "Jual Kulit Sapi Asli", "Vegetable Tanned Leather Indonesia"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased min-h-screen selection:bg-[#b45309] selection:text-white">
        {children}
      </body>
    </html>
  );
}
