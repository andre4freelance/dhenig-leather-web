export interface LeatherProduct {
  id: string;
  name: string;
  category: "pullup" | "vegtan" | "crazyhorse" | "nappa" | "exotic";
  categoryLabel: string;
  origin: "Java Tanneries (Garut & Magetan)" | "Italian Imported Tannery";
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
    country: string;
    mapsUrl: string;
  };
  operatingHours: string;
  internationalShipping: string;
}

export const storeInfo: StoreInfo = {
  name: "Dhenig Leather",
  established: 1997,
  tagline: "Wholesale and retail genuine leather supplier based in Harco Mangga Dua, Jakarta.",
  phone: "+62 21 6128888",
  whatsapp: "+6281234567890",
  whatsappTemplate: "Hello Dhenig Leather, I saw your catalog and would like to check available hides and pricing...",
  instagram: "@dhenigleather",
  address: {
    line1: "Ruko Harco Mangga Dua Block B No. 2",
    line2: "Jl. Mangga Dua Raya, Sawah Besar",
    city: "Jakarta Pusat",
    postalCode: "10730",
    country: "Indonesia",
    mapsUrl: "https://maps.google.com/?q=Harco+Mangga+Dua+Jakarta"
  },
  operatingHours: "Monday to Saturday: 9:00 AM to 5:00 PM (WIB / GMT+7)",
  internationalShipping: "Air courier (DHL and FedEx) or sea cargo for larger orders"
};

export const sampleProducts: LeatherProduct[] = [
  {
    id: "milano_soft_nappa",
    name: "Milano Soft Nappa Cowhide",
    category: "nappa",
    categoryLabel: "Nappa",
    origin: "Italian Imported Tannery",
    finish: "Milled pebble grain",
    thickness: "1.0 to 1.2 mm",
    colors: ["Black", "Tan", "Dark Brown"],
    suitableFor: ["Bespoke jackets", "Soft handbags", "Lining and upholstery"],
    image: "/images/products/nappa-leather.jpg",
    description: "Pliable cowhide with a soft temper and fine milled grain. Suitable for garments and unlined bags that need flexibility.",
    highlight: true
  },
  {
    id: "italian_sheep_garment",
    name: "Italian Sheepskin Garment Leather",
    category: "nappa",
    categoryLabel: "Garment Nappa",
    origin: "Italian Imported Tannery",
    finish: "Smooth aniline finish",
    thickness: "0.7 to 0.9 mm",
    colors: ["Espresso", "Cognac", "Onyx Black"],
    suitableFor: ["Custom jackets", "Vests", "Apparel panels"],
    image: "/images/products/italian-sheep-jacket.jpg",
    description: "Lightweight Italian sheepskin with a silky surface. Used for leather jackets, apparel, and lightweight accessories.",
    highlight: true
  },
  {
    id: "red_wine_crocodile_embossed",
    name: "Embossed Crocodile Print Cowhide",
    category: "exotic",
    categoryLabel: "Embossed",
    origin: "Java Tanneries (Garut & Magetan)",
    finish: "Glazed embossed scale pattern",
    thickness: "1.4 to 1.6 mm",
    colors: ["Deep Red Wine", "Bottle Green", "Dark Navy"],
    suitableFor: ["Structured tote bags", "Wallets", "Small leather goods"],
    image: "/images/products/red-wine-croc-bag.webp",
    description: "Firm cowhide embossed with a distinct crocodile grain and glazed for wear resistance. Holds structure well in small goods.",
    highlight: true
  },
  {
    id: "italian_veg_tan_full_grain",
    name: "Tuscan Vegetable Tanned Cowhide",
    category: "vegtan",
    categoryLabel: "Vegetable Tanned",
    origin: "Italian Imported Tannery",
    finish: "Natural smooth grain",
    thickness: "2.0 to 2.5 mm",
    colors: ["Natural Vachetta", "Saddle Tan", "Chestnut"],
    suitableFor: ["Sturdy belts", "Briefcases", "Tool sheaths"],
    image: "/images/products/italian-veg-tan.jpg",
    description: "Full grain cowhide tanned with natural tree bark extracts. It develops a rich darker patina with handling and exposure to light.",
    highlight: true
  },
  {
    id: "classic_pull_up_heritage",
    name: "Oil Pull Up Cowhide",
    category: "pullup",
    categoryLabel: "Pull Up",
    origin: "Java Tanneries (Garut & Magetan)",
    finish: "Waxy oil saturated surface",
    thickness: "1.6 to 1.8 mm",
    colors: ["Havana Brown", "Tobacco", "Charcoal"],
    suitableFor: ["Boots", "Duffel bags", "Field notes covers"],
    image: "/images/products/pull-up-classic.jpg",
    description: "Treated with oils and waxes so that bending or pulling creates a lighter tone along the crease, producing an authentic aged look.",
    highlight: true
  },
  {
    id: "rustic_crazy_horse",
    name: "Waxed Crazy Horse Cowhide",
    category: "crazyhorse",
    categoryLabel: "Crazy Horse",
    origin: "Java Tanneries (Garut & Magetan)",
    finish: "Buffed matte wax finish",
    thickness: "1.8 to 2.0 mm",
    colors: ["Desert Tan", "Olive Brown", "Dark Gray"],
    suitableFor: ["Messenger bags", "Journal covers", "Casual footwear"],
    image: "/images/products/crazy-horse.jpg",
    description: "Buffed full grain surface coated in wax. Scuffs and surface marks blend in with rubbing, giving each piece an aged character.",
    highlight: false
  }
];
