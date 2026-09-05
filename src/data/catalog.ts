export interface LeatherProduct {
  id: string;
  name: string;
  category: "pull-up" | "vegetable-tanned" | "crazy-horse" | "nappa" | "exotic";
  categoryLabel: string;
  origin: "Indonesian Tannery (Garut/Magetan)" | "Italian Imported Tannery";
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
  name: "Dhenig Leather Jakarta",
  established: 1997,
  tagline: "Premier Genuine Leather Supplier & Bespoke Atelier — Jakarta, Est. 1997",
  phone: "+62 21 6128888",
  whatsapp: "+6281234567890", // Official contact channel
  whatsappTemplate: "Hello Dhenig Leather, I am interested in sourcing genuine leather hides and inquiring about worldwide shipping / wholesale details...",
  instagram: "@dhenigleather",
  address: {
    line1: "Ruko Harco Mangga Dua Block B No. 2",
    line2: "Jl. Mangga Dua Raya, Sawah Besar",
    city: "Central Jakarta",
    postalCode: "10730",
    country: "Indonesia",
    mapsUrl: "https://maps.google.com/?q=Harco+Mangga+Dua+Jakarta"
  },
  operatingHours: "Monday – Saturday: 09:00 AM – 05:00 PM (GMT+7)",
  internationalShipping: "Worldwide Courier Air Cargo (DHL / FedEx) & Ocean Freight Available"
};

export const sampleProducts: LeatherProduct[] = [
  {
    id: "milano-soft-nappa",
    name: "Milano Full Grain Soft Nappa",
    category: "nappa",
    categoryLabel: "Nappa & Garment",
    origin: "Italian Imported Tannery",
    finish: "Supple Natural Pebble Grain",
    thickness: "1.0 – 1.2 mm (2.5 – 3.0 oz)",
    colors: ["Jet Black", "Ivory Tan", "Mocha Brown"],
    suitableFor: ["Bespoke Leather Jackets", "Fine Handbags", "Luxury Upholstery"],
    image: "/images/products/nappa-leather.jpg",
    description: "Ultra-plush Italian nappa cowhide crafted for bespoke apparel, gloves, and premium soft accessories requiring unmatched drape and softness.",
    highlight: true
  },
  {
    id: "italian-sheep-garment",
    name: "Italian Sheepskin Nappa Garment",
    category: "nappa",
    categoryLabel: "Nappa & Garment",
    origin: "Italian Imported Tannery",
    finish: "Silky Smooth Aniline Garment Finish",
    thickness: "0.7 – 0.9 mm (1.8 – 2.2 oz)",
    colors: ["Espresso Brown", "Classic Cognac", "Onyx Black"],
    suitableFor: ["Custom Aviator Jackets", "Motorcycle Garments", "Designer Vests"],
    image: "/images/products/italian-sheep-jacket.jpg",
    description: "Tailored specifically for international fashion designers and atelier brands seeking pristine Italian lamb/sheepskin hides with butter-soft hand feel.",
    highlight: true
  },
  {
    id: "red-wine-crocodile-embossed",
    name: "Red Wine Crocodile Embossed Cowhide",
    category: "exotic",
    categoryLabel: "Exotic & Embossed",
    origin: "Indonesian Tannery (Garut/Magetan)",
    finish: "High-Gloss Glazed Crocodile Print",
    thickness: "1.4 – 1.6 mm (3.5 – 4.0 oz)",
    colors: ["Bordeaux Red Wine", "Royal Emerald", "Midnight Navy"],
    suitableFor: ["Luxury Statement Handbags", "Executive Portfolios", "Collector Wallets"],
    image: "/images/products/red-wine-croc-bag.webp",
    description: "Exquisite high-relief crocodile grain embossed on top-grade cowhide, offering the opulent visual texture of exotic hides with maximum durability.",
    highlight: true
  },
  {
    id: "italian-veg-tan-full-grain",
    name: "Italian Tuscan Vegetable Tanned",
    category: "vegetable-tanned",
    categoryLabel: "Vegetable Tanned (Veg-Tan)",
    origin: "Italian Imported Tannery",
    finish: "Natural Smooth Aniline with Rich Patina",
    thickness: "2.0 – 2.5 mm (5.0 – 6.5 oz)",
    colors: ["Natural Vachetta", "Saddle Tan", "Dark Chestnut"],
    suitableFor: ["Heritage Belts", "Structured Briefcases", "Artisan Sheaths & Straps"],
    image: "/images/products/italian-veg-tan.jpg", // Gracefully handled by SVG fallback
    description: "Traditional pit-tanned leather infused with natural tree barks and oils. Ages gracefully with a golden patina, ideal for master leathercrafters.",
    highlight: true
  },
  {
    id: "classic-pull-up-heritage",
    name: "Javanese Heritage Oily Pull-Up",
    category: "pull-up",
    categoryLabel: "Pull-Up Leather",
    origin: "Indonesian Tannery (Garut/Magetan)",
    finish: "Heavy Wax & Oil Burst Effect",
    thickness: "1.6 – 1.8 mm (4.0 – 4.5 oz)",
    colors: ["Havana Sunburst", "Vintage Walnut", "Distressed Tobacco"],
    suitableFor: ["Work Boots", "Rugged Duffel Bags", "Classic Bifold Wallets"],
    image: "/images/products/pull-up-classic.jpg", // Gracefully handled by SVG fallback
    description: "Rich wax and oil concentration that produces a dramatic lightning color burst when folded, building authentic vintage patina over time.",
    highlight: true
  },
  {
    id: "rustic-crazy-horse",
    name: "Rustic Crazy Horse Waxed Nubuck",
    category: "crazy-horse",
    categoryLabel: "Crazy Horse",
    origin: "Indonesian Tannery (Garut/Magetan)",
    finish: "Matte Waxed Velvet Texture",
    thickness: "1.8 – 2.0 mm (4.5 – 5.0 oz)",
    colors: ["Desert Camel", "Forest Olive", "Charcoal Gray"],
    suitableFor: ["Field Messenger Bags", "Traveler Journals", "Heritage Footwear"],
    image: "/images/products/crazy-horse.jpg", // Gracefully handled by SVG fallback
    description: "Full grain cowhide buffed and saturated with specialty waxes. Responds to every scratch and rub with distinctive vintage character.",
    highlight: false
  }
];
