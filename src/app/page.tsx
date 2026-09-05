import React from "react";
import { storeInfo } from "@/data/catalog";
import { CatalogSection } from "@/components/CatalogSection";
import {
  ShieldCheck,
  Award,
  Globe2,
  Sparkles,
  MessageCircle,
  MapPin,
  Clock,
  Phone,
  Truck,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Scissors
} from "lucide-react";

export default function Home() {
  const waUrl = `https://wa.me/${storeInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(storeInfo.whatsappTemplate)}`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top International Announcement Bar */}
      <div className="bg-[#451a03] text-[#faf8f5] text-xs py-2.5 px-4 text-center font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2">
          <Truck className="w-3.5 h-3.5 text-[#b45309]" />
          <span>Worldwide Air Cargo & Sea Freight Available | Jakarta Atelier & Showroom Est. 1997</span>
        </div>
      </div>

      {/* Sticky Header Navigation */}
      <header className="sticky top-0 z-40 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div>
              <span className="font-serif text-2xl font-black text-[#1c1917] tracking-tight block">
                DHENIG LEATHER
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#78350f]">
                Jakarta &bull; Est. 1997 &bull; Genuine Leather
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-[#44403c]">
            <a href="#about" className="hover:text-[#78350f] transition-colors">Our Heritage</a>
            <a href="#collection" className="hover:text-[#78350f] transition-colors">Leather Swatches</a>
            <a href="#ordering" className="hover:text-[#78350f] transition-colors">B2B & Custom Orders</a>
            <a href="#location" className="hover:text-[#78350f] transition-colors">Atelier & Contact</a>
          </nav>

          <div className="flex items-center space-x-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#78350f] hover:bg-[#451a03] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Showcase Section */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-[#faf8f5] via-[#f5f1ea] to-[#faf8f5] border-b border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-[#b45309]/10 text-[#78350f] text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#b45309]" />
              <span>Premier Genuine Leather Supplier in Jakarta</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-6xl font-bold text-[#1c1917] tracking-tight leading-[1.15] mb-6">
              Master-Crafted Leather for Discerning Creators Worldwide
            </h1>

            <p className="text-base sm:text-xl text-[#44403c] mb-10 leading-relaxed max-w-2xl mx-auto">
              From heirloom Indonesian pit-tanned hides to luxurious Italian nappa garment skins. Supplying bespoke leather crafters, luxury ateliers, and international brands with certified genuine leather since 1997.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <a
                href="#collection"
                className="w-full sm:w-auto bg-[#78350f] hover:bg-[#451a03] text-white font-semibold text-sm px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Explore Leather Swatches</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white hover:bg-stone-50 text-[#1c1917] font-semibold text-sm px-8 py-4 rounded-full border border-[#e7e5e4] transition-all flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Request Swatches & Quote</span>
              </a>
            </div>

            {/* Quick Metrics Badge */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-stone-300/60 max-w-3xl mx-auto">
              <div className="text-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1917] block">29+ Yrs</span>
                <span className="text-[11px] text-[#78350f] font-semibold uppercase tracking-wider">Heritage Since 1997</span>
              </div>
              <div className="text-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1917] block">100%</span>
                <span className="text-[11px] text-[#78350f] font-semibold uppercase tracking-wider">Certified Genuine</span>
              </div>
              <div className="text-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1917] block">IT & ID</span>
                <span className="text-[11px] text-[#78350f] font-semibold uppercase tracking-wider">Italian & Java Tannery</span>
              </div>
              <div className="text-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1917] block">Global</span>
                <span className="text-[11px] text-[#78350f] font-semibold uppercase tracking-wider">Worldwide Export</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage & 4 Value Pillars */}
      <section id="about" className="py-24 bg-white border-b border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#b45309] font-bold">Uncompromising Quality</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1c1917] mt-2 mb-4">
              Why Bespoke Craftsmen Source from Dhenig
            </h2>
            <p className="text-sm sm:text-base text-[#44403c]">
              We bridge traditional Indonesian tanning craft and world-renowned Italian leather houses directly to your workshop table.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-2xl bg-[#faf8f5] border border-[#e7e5e4] transition-all hover:border-[#78350f]/30">
              <ShieldCheck className="w-10 h-10 text-[#78350f] mb-5" />
              <h3 className="font-serif font-bold text-lg text-[#1c1917] mb-2.5">100% Genuine Leather Only</h3>
              <p className="text-xs sm:text-sm text-[#44403c] leading-relaxed">
                Strict no-synthetic guarantee. Every hide undergoes tactile grading for authentic grain, density, and natural pull-up characteristics.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#faf8f5] border border-[#e7e5e4] transition-all hover:border-[#78350f]/30">
              <Award className="w-10 h-10 text-[#78350f] mb-5" />
              <h3 className="font-serif font-bold text-lg text-[#1c1917] mb-2.5">29+ Years Established</h3>
              <p className="text-xs sm:text-sm text-[#44403c] leading-relaxed">
                Founded in 1997 in Central Jakarta. We have reliably equipped generations of shoemakers, bag designers, and bespoke ateliers.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#faf8f5] border border-[#e7e5e4] transition-all hover:border-[#78350f]/30">
              <Globe2 className="w-10 h-10 text-[#78350f] mb-5" />
              <h3 className="font-serif font-bold text-lg text-[#1c1917] mb-2.5">Italian & Heritage Javanese</h3>
              <p className="text-xs sm:text-sm text-[#44403c] leading-relaxed">
                Direct partnerships with master tanneries in Magetan & Garut alongside imported Italian sheepskin and Tuscan veg-tan selections.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#faf8f5] border border-[#e7e5e4] transition-all hover:border-[#78350f]/30">
              <Scissors className="w-10 h-10 text-[#78350f] mb-5" />
              <h3 className="font-serif font-bold text-lg text-[#1c1917] mb-2.5">Bespoke & Wholesale Tiers</h3>
              <p className="text-xs sm:text-sm text-[#44403c] leading-relaxed">
                Whether purchasing individual hides for single bespoke creations or bulk container batches for production lines, we cater to your scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog & Swatches Section */}
      <CatalogSection />

      {/* 3-Step Ordering & B2B International Sourcing Guide */}
      <section id="ordering" className="py-24 bg-white border-b border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#b45309] font-bold">Seamless Sourcing Process</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1c1917] mt-2 mb-4">
              How to Order Your Custom & Wholesale Hides
            </h2>
            <p className="text-sm sm:text-base text-[#44403c]">
              We facilitate transparent consultations, high-resolution swatch videos, and secure door-to-door international logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="p-8 rounded-2xl bg-[#faf8f5] border border-[#e7e5e4] relative">
              <div className="w-10 h-10 rounded-full bg-[#78350f] text-white flex items-center justify-center font-serif font-bold text-sm mb-6">
                01
              </div>
              <h3 className="font-serif font-bold text-xl text-[#1c1917] mb-3">Select Grain & Spec</h3>
              <p className="text-sm text-[#44403c] leading-relaxed">
                Choose your required temper, finish, and thickness (e.g. 1.0mm garment nappa vs 2.5mm tooling veg-tan). Browse our digital swatches or request custom colors.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#faf8f5] border border-[#e7e5e4] relative">
              <div className="w-10 h-10 rounded-full bg-[#78350f] text-white flex items-center justify-center font-serif font-bold text-sm mb-6">
                02
              </div>
              <h3 className="font-serif font-bold text-xl text-[#1c1917] mb-3">Video Swatch Inspection</h3>
              <p className="text-sm text-[#44403c] leading-relaxed">
                Connect via WhatsApp for real-time video inspect of available hides, surface flaw verification, footage measurements (sq ft), and sample requests.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#faf8f5] border border-[#e7e5e4] relative">
              <div className="w-10 h-10 rounded-full bg-[#78350f] text-white flex items-center justify-center font-serif font-bold text-sm mb-6">
                03
              </div>
              <h3 className="font-serif font-bold text-xl text-[#1c1917] mb-3">Express Global Dispatch</h3>
              <p className="text-sm text-[#44403c] leading-relaxed">
                Inspected hides are rolled gently, protected in waterproof barrier packaging, and dispatched via DHL/FedEx Express Air or local courier.
              </p>
            </div>
          </div>

          {/* B2B Callout */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#78350f] to-[#451a03] text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-2">Are you a Leather Brand or Workshop?</h3>
              <p className="text-sm text-stone-200 max-w-xl">
                Inquire about volume wholesale contracts, ongoing tannery batches, and export export documentation.
              </p>
            </div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#faf8f5] hover:bg-white text-[#78350f] font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all shadow whitespace-nowrap"
            >
              Start B2B Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Atelier Location & Contact Section */}
      <section id="location" className="py-24 bg-[#faf8f5] border-b border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#e7e5e4] rounded-3xl p-8 sm:p-14 flex flex-col lg:flex-row gap-12 justify-between items-start shadow-sm">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#b45309] font-bold">Physical Showroom & Warehouse</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1c1917] mt-2 mb-6">
                Visit Toko Kulit Dhenig in Central Jakarta
              </h2>

              <p className="text-sm sm:text-base text-[#44403c] leading-relaxed mb-8">
                Experience the tactile touch and natural aroma of genuine hides in person. Our Mangga Dua warehouse is open for local crafters, visiting buyers, and international delegations.
              </p>

              <div className="space-y-4 text-sm text-[#44403c] mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#78350f] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1c1917] block">{storeInfo.name}</strong>
                    <span>{storeInfo.address.line1}, {storeInfo.address.line2}, {storeInfo.address.city} {storeInfo.address.postalCode}, {storeInfo.address.country}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-[#78350f] shrink-0" />
                  <span>{storeInfo.operatingHours}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#78350f] shrink-0" />
                  <span>{storeInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-[#78350f] shrink-0" />
                  <span>{storeInfo.internationalShipping}</span>
                </div>
              </div>

              <a
                href={storeInfo.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#78350f] hover:bg-[#451a03] text-white text-xs font-semibold px-6 py-3.5 rounded-full transition-colors shadow-sm"
              >
                <MapPin className="w-4 h-4" />
                <span>Open Google Maps Directions</span>
              </a>
            </div>

            {/* Direct Contact Card */}
            <div className="w-full lg:w-96 p-8 bg-[#faf8f5] rounded-2xl border border-[#e7e5e4] text-center">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#1c1917] mb-2">Direct WhatsApp Desk</h4>
              <p className="text-xs text-[#44403c] leading-relaxed mb-6">
                Receive instant stock swatches, thickness measurements, and live video previews directly from our warehouse team.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 rounded-xl text-xs sm:text-sm transition-colors shadow-sm"
              >
                Chat on WhatsApp Now
              </a>
              <span className="text-[11px] text-stone-500 block mt-3">
                Typically responds within business hours (GMT+7)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1c1917] text-stone-400 py-16 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-stone-800">
            <div>
              <span className="font-serif text-xl font-bold text-white block mb-1">DHENIG LEATHER</span>
              <span className="text-stone-400">Pusat Bahan Kulit Asli Terlengkap di Jakarta Sejak 1997</span>
            </div>
            <div className="flex flex-wrap gap-6 text-stone-300">
              <a href="#about" className="hover:text-white transition-colors">About Us</a>
              <a href="#collection" className="hover:text-white transition-colors">Leather Swatches</a>
              <a href="#ordering" className="hover:text-white transition-colors">B2B Sourcing</a>
              <a href="https://instagram.com/dhenigleather" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Instagram {storeInfo.instagram}
              </a>
            </div>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-stone-500">
            <p>&copy; {new Date().getFullYear()} Toko Kulit Dhenig. All rights reserved. Est. 1997.</p>
            <p>Boutique Digital Showcase & Concept Architecture by NextOps</p>
          </div>
        </div>
      </footer>

      {/* Sticky Floating WhatsApp CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-emerald-400/30"
          aria-label="Contact Dhenig Leather on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs font-bold tracking-wide">Inquire via WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
