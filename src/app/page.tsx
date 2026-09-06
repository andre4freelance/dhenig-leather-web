import React from "react";
import Image from "next/image";
import { storeInfo } from "@/data/catalog";
import { CatalogSection } from "@/components/CatalogSection";
import {
  ShieldCheck,
  Award,
  Globe2,
  MessageCircle,
  MapPin,
  Clock,
  Phone,
  Truck,
  Scissors
} from "lucide-react";

export default function Home() {
  const waUrl = `https://wa.me/${storeInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(storeInfo.whatsappTemplate)}`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Dispatch Notification Bar: No dashes */}
      <div className="bg-[#451a03] text-[#faf8f5] text-[11px] sm:text-xs py-2 px-4 text-center font-normal tracking-normal">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2">
          <Truck className="w-3.5 h-3.5 text-stone-300 shrink-0" />
          <span>International air courier and ocean freight available. Showroom in Harco Mangga Dua, Jakarta.</span>
        </div>
      </div>

      {/* Header Navigation: Fully responsive without dashes */}
      <header className="sticky top-0 z-40 bg-[#faf8f5]/95 backdrop-blur-xs border-b border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-2xl font-bold text-[#1c1917] tracking-tight">
              DHENIG LEATHER
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-stone-500 font-medium">
              Jakarta, Indonesia (Established 1997)
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-7 text-xs sm:text-sm font-medium text-stone-700">
            <a href="#about" className="hover:text-[#78350f] transition-colors">About Us</a>
            <a href="#collection" className="hover:text-[#78350f] transition-colors">Leather Catalog</a>
            <a href="#ordering" className="hover:text-[#78350f] transition-colors">How to Order</a>
            <a href="#location" className="hover:text-[#78350f] transition-colors">Store Location</a>
          </nav>

          <div className="flex items-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 bg-[#78350f] hover:bg-[#451a03] text-white text-xs font-medium px-3.5 sm:px-4 py-2 rounded-md transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Workshop Banner and Authentic Grounded CTAs */}
      <section className="relative overflow-hidden bg-stone-900 text-white border-b border-[#e7e5e4]">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/hero/leather-workshop-hero.jpg"
            alt="Leather craftsman workshop table"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-stone-950/90 via-stone-900/60 to-stone-950/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-32">
          <div className="max-w-2xl">
            <span className="inline-block text-xs uppercase tracking-widest text-amber-200/90 font-medium mb-3">
              Genuine Leather Supplier Since 1997
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4 sm:mb-6">
              Cowhide and garment leathers for workshops and independent makers.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-stone-200 mb-8 leading-relaxed">
              We stock Indonesian vegetable tanned hides, oil pull up cowhide, and imported Italian garment nappa in Harco Mangga Dua, Central Jakarta. Available by the side, roll, or bulk consignment.
            </p>

            {/* Grounded, Non-AI-Slop Buttons: Clear, understated, and functional */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#collection"
                className="w-full sm:w-auto text-center bg-[#78350f] hover:bg-[#5a270b] text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-md transition-colors"
              >
                View Current Stock
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-stone-800/80 hover:bg-stone-800 text-stone-100 border border-stone-600 font-medium text-xs sm:text-sm px-6 py-3 rounded-md transition-colors inline-flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Ask About Thickness and Price</span>
              </a>
            </div>

            {/* Factual Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/15 text-left">
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-white block">1997</span>
                <span className="text-[11px] text-stone-300">Year established</span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-white block">100%</span>
                <span className="text-[11px] text-stone-300">Genuine cow and sheep</span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-white block">Garut and Italy</span>
                <span className="text-[11px] text-stone-300">Tannery sources</span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-white block">Worldwide</span>
                <span className="text-[11px] text-stone-300">Shipping options</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Sourcing Practices */}
      <section id="about" className="py-16 sm:py-20 bg-white border-b border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-wider text-[#78350f] font-semibold">Store Background</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1917] mt-1 mb-3">
              Reliable Supplies for Working Crafters
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Based in the Mangga Dua trading district, we supply individual hides for small runs as well as recurrent batches for bag and shoe makers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="p-6 rounded-xl bg-[#faf8f5] border border-[#e7e5e4]">
              <ShieldCheck className="w-8 h-8 text-[#78350f] mb-4" />
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#1c1917] mb-2">Real Leather Only</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                We do not sell PU, vinyl, or bonded leather. Every hide is inspected for grain consistency, thickness, and temper.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#faf8f5] border border-[#e7e5e4]">
              <Award className="w-8 h-8 text-[#78350f] mb-4" />
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#1c1917] mb-2">Store Since 1997</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Operating continuously from Ruko Harco Mangga Dua for over 29 years, serving local leatherworkers and regional buyers.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#faf8f5] border border-[#e7e5e4]">
              <Globe2 className="w-8 h-8 text-[#78350f] mb-4" />
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#1c1917] mb-2">Domestic and Italian Sourcing</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Heavy cowhides from tanneries in East and West Java, paired with soft garment nappa and sheepskin imported from Italy.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#faf8f5] border border-[#e7e5e4]">
              <Scissors className="w-8 h-8 text-[#78350f] mb-4" />
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#1c1917] mb-2">Flexible Quantities</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Buy single sides for prototypes or order full dye lots with square footage grading for brand production lines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog & Swatches Section */}
      <CatalogSection />

      {/* Ordering & International Shipping Workflow */}
      <section id="ordering" className="py-16 sm:py-20 bg-white border-b border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-wider text-[#78350f] font-semibold">How to Order</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1917] mt-1 mb-3">
              Ordering Remote or In Store
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              If you cannot visit Harco Mangga Dua in person, we handle selection and dispatch remotely via WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-xl bg-[#faf8f5] border border-[#e7e5e4]">
              <div className="w-8 h-8 rounded-full bg-[#78350f] text-white flex items-center justify-center font-bold text-xs mb-4">
                1
              </div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#1c1917] mb-2">Check Specifications</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Tell us what you are making and your preferred thickness, temper, and color. We will confirm which current lots match.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-xl bg-[#faf8f5] border border-[#e7e5e4]">
              <div className="w-8 h-8 rounded-full bg-[#78350f] text-white flex items-center justify-center font-bold text-xs mb-4">
                2
              </div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#1c1917] mb-2">Review Photos and Video</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Our team sends daylight photos and video of the exact hides, including grain details, back suede condition, and footage stamps.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-xl bg-[#faf8f5] border border-[#e7e5e4]">
              <div className="w-8 h-8 rounded-full bg-[#78350f] text-white flex items-center justify-center font-bold text-xs mb-4">
                3
              </div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#1c1917] mb-2">Packaging and Dispatch</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Hides are rolled around tubes to prevent crease marks, wrapped in protective film, and handed to local couriers or international air cargo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section with Genuine Leather Rolls Image */}
      <section id="location" className="py-16 sm:py-20 bg-[#faf8f5] border-b border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#e7e5e4] rounded-2xl overflow-hidden shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Store Details */}
              <div className="lg:col-span-7 p-6 sm:p-10 md:p-12">
                <span className="text-xs uppercase tracking-wider text-[#78350f] font-semibold">Store and Warehouse</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1917] mt-1 mb-4">
                  Visit Toko Kulit Dhenig
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  You are welcome to come and handle the leather in person. We have parking available in the Harco Mangga Dua complex.
                </p>

                <div className="space-y-3.5 text-xs sm:text-sm text-stone-700 mb-8">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#78350f] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1c1917] block">Toko Kulit Dhenig</strong>
                      <span>{storeInfo.address.line1}, {storeInfo.address.line2}, {storeInfo.address.city} {storeInfo.address.postalCode}, Indonesia</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#78350f] shrink-0" />
                    <span>{storeInfo.operatingHours}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#78350f] shrink-0" />
                    <span>{storeInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-[#78350f] shrink-0" />
                    <span>{storeInfo.internationalShipping}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={storeInfo.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center bg-[#78350f] hover:bg-[#451a03] text-white text-xs font-medium px-5 py-3 rounded-md transition-colors inline-flex items-center justify-center space-x-2"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Open in Google Maps</span>
                  </a>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center bg-white hover:bg-stone-50 text-stone-800 border border-[#e7e5e4] text-xs font-medium px-5 py-3 rounded-md transition-colors inline-flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Message WhatsApp Desk</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Genuine Leather Rolls in Workshop / Warehouse */}
              <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] lg:min-h-full bg-stone-200">
                <Image
                  src="/images/store/leather-rolls-store.jpg"
                  alt="Rolls of tanned leather hides stacked in workshop"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <span className="text-white text-xs font-medium">
                    Stocked rolls of genuine leather hides ready for cutting and delivery.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer without dashes */}
      <footer className="bg-[#1c1917] text-stone-400 py-12 sm:py-16 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-8 border-b border-stone-800">
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold text-white block mb-1">DHENIG LEATHER</span>
              <span className="text-stone-400 text-xs">Genuine Leather Retail and Wholesale. Harco Mangga Dua, Jakarta Pusat.</span>
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6 text-stone-300">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#collection" className="hover:text-white transition-colors">Catalog</a>
              <a href="#ordering" className="hover:text-white transition-colors">How to Order</a>
              <a href="https://instagram.com/dhenigleather" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Instagram {storeInfo.instagram}
              </a>
            </div>
          </div>
          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[11px] text-stone-500">
            <p>&copy; {new Date().getFullYear()} Toko Kulit Dhenig. Established 1997.</p>
            <p>
              Website crafted by <a href="mailto:andre4freelance@gmail.com" className="text-stone-300 hover:underline">andre4freelance@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-lg transition-transform hover:scale-105"
          aria-label="Contact Dhenig Leather on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xs font-semibold">Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
