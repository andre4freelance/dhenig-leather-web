export interface LeatherProduct {
  id: string;
  name: string;
  category: "pull-up" | "vegetable-tanned" | "crazy-horse" | "nappa" | "exotic";
  categoryLabel: string;
  origin: "Lokal (Magetan/Garut)" | "Import Italia";
  finish: string;
  thickness: string;
  colors: string[];
  suitableFor: string[];
  image: string;
  description: string;
  highlight?: boolean;
}

export interface StoreInfo {
  name: string;
  established: number;
  tagline: string;
  phone: string;
  whatsapp: string;
  whatsappTemplate: string;
  instagram: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    postalCode: string;
    mapsUrl: string;
  };
  operatingHours: string;
}

export const storeInfo: StoreInfo = {
  name: "Toko Kulit Dhenig (Dhenig Leather)",
  established: 1997,
  tagline: "Pusat Bahan Kulit Asli Terlengkap di Jakarta Sejak 1997",
  phone: "+62 21 6128888",
  whatsapp: "+6281234567890", // Placeholder to be customized
  whatsappTemplate: "Halo Toko Kulit Dhenig, saya tertarik konsultasi stok bahan kulit asli untuk proyek saya...",
  instagram: "@dhenigleather",
  address: {
    line1: "Ruko Harco Mangga Dua Blok B No. 2",
    line2: "Jl. Mangga Dua Raya, Kecamatan Sawah Besar",
    city: "Jakarta Pusat",
    postalCode: "10730",
    mapsUrl: "https://maps.google.com/?q=Harco+Mangga+Dua+Jakarta"
  },
  operatingHours: "Senin – Sabtu: 09.00 – 17.00 WIB"
};

export const sampleProducts: LeatherProduct[] = [
  {
    id: "pull-up-classic",
    name: "Classic Pull-Up Cowhide",
    category: "pull-up",
    categoryLabel: "Pull-Up Leather",
    origin: "Lokal (Magetan/Garut)",
    finish: "Oily Pull-Up with Two-Tone Effect",
    thickness: "1.4 – 1.6 mm",
    colors: ["Havana Tan", "Dark Brown", "Midnight Black"],
    suitableFor: ["Tas Kulit", "Boots", "Dompet Vintage"],
    image: "/images/products/pull-up-classic.jpg",
    description: "Karakter lentur dengan efek tarikan (pull-up) dua warna yang khas dan patina alami seiring pemakaian.",
    highlight: true
  },
  {
    id: "italian-veg-tan",
    name: "Italian Vegetable Tanned Full Grain",
    category: "vegetable-tanned",
    categoryLabel: "Veg-Tan (Nabati)",
    origin: "Import Italia",
    finish: "Natural Smooth Aniline Finish",
    thickness: "2.0 – 2.5 mm",
    colors: ["Natural Vachetta", "Saddle Tan", "Cognac"],
    suitableFor: ["Sabuk Kulit Premium", "Tote Bag Mewah", "Sarung Pisau & Holster"],
    image: "/images/products/italian-veg-tan.jpg",
    description: "Disamak secara tradisional dengan tanin nabati di Italia. Sangat kokoh, wangi khas tanin alami, dan mengkilap sempurna saat dipoles.",
    highlight: true
  },
  {
    id: "crazy-horse-distressed",
    name: "Crazy Horse Rustic Buffed",
    category: "crazy-horse",
    categoryLabel: "Crazy Horse",
    origin: "Lokal (Magetan/Garut)",
    finish: "Waxed Distressed Pull-Up",
    thickness: "1.6 – 1.8 mm",
    colors: ["Camel Rustic", "Olive Brown", "Charcoal"],
    suitableFor: ["Messenger Bag", "Jurnal Kulit", "Sepatu Kerja/Boots"],
    image: "/images/products/crazy-horse.jpg",
    description: "Permukaan beludru halus berlapis lilin wax premium yang menghasilkan goresan artistik rustic yang mudah dihaluskan kembali.",
    highlight: true
  },
  {
    id: "nappa-soft-glove",
    name: "Milano Soft Nappa Cowhide",
    category: "nappa",
    categoryLabel: "Nappa / Soft",
    origin: "Import Italia",
    finish: "Soft Supple Pebble Grain",
    thickness: "1.0 – 1.2 mm",
    colors: ["Classic Black", "Ivory Cream", "Burgundy"],
    suitableFor: ["Jaket Kulit", "Tas Jinjing Elegan", "Pelapis Interior Mewah"],
    image: "/images/products/nappa-soft.jpg",
    description: "Sentuhan tangan super halus dan lemas, cocok untuk kerajinan kulit yang membutuhkan kenyamanan elastis maksimal."
  }
];
