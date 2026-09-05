"use client";

import React, { useState } from "react";
import { sampleProducts, LeatherProduct, storeInfo } from "@/data/catalog";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { MessageCircle, Check, Info, ArrowUpRight } from "lucide-react";

type CategoryFilter = "all" | "pull-up" | "vegetable-tanned" | "crazy-horse" | "nappa" | "exotic";

export function CatalogSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [selectedProduct, setSelectedProduct] = useState<LeatherProduct | null>(null);

  const categories = [
    { id: "all", label: "All Collections" },
    { id: "nappa", label: "Nappa & Garment" },
    { id: "exotic", label: "Exotic & Embossed" },
    { id: "vegetable-tanned", label: "Veg-Tan (Nabati)" },
    { id: "pull-up", label: "Pull-Up Heritage" },
    { id: "crazy-horse", label: "Crazy Horse Waxed" }
  ];

  const filteredProducts = selectedCategory === "all"
    ? sampleProducts
    : sampleProducts.filter((p) => p.category === selectedCategory);

  const getWaLink = (productName: string) => {
    const text = `Hello Dhenig Leather, I would like to inquire about availability and pricing for: ${productName}. Could you share current hide swatches and international shipping rates?`;
    return `https://wa.me/${storeInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="collection" className="py-24 bg-[#faf8f5] border-b border-[#e7e5e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center space-x-2 bg-[#b45309]/10 text-[#78350f] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <span>Curated Leather Library</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c1917] tracking-tight mb-4">
            Master-Grade Genuine Leather Swatches
          </h2>
          <p className="text-[#44403c] text-base sm:text-lg leading-relaxed">
            Supplying artisan crafters, atelier designers, and international bespoke makers with responsibly tanned bovine and ovine leathers.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 mb-12 gap-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as CategoryFilter)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#78350f] text-white shadow-sm"
                  : "bg-white text-[#44403c] hover:bg-stone-100 border border-[#e7e5e4]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#e7e5e4] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Product Image Swatch with Fallback */}
                <div className="relative cursor-pointer" onClick={() => setSelectedProduct(p)}>
                  <ImageWithFallback
                    src={p.image}
                    alt={p.name}
                    aspectRatio="aspect-[4/3]"
                    badgeLabel={p.origin}
                  />
                  <div className="absolute top-3 left-3 bg-[#1c1917]/85 backdrop-blur-sm text-[#faf8f5] text-[11px] font-semibold px-3 py-1 rounded-full">
                    {p.categoryLabel}
                  </div>
                  {p.highlight && (
                    <div className="absolute top-3 right-3 bg-[#b45309] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-[#78350f] font-semibold mb-2">
                    <span>{p.origin}</span>
                    <span className="text-stone-500 font-normal">{p.thickness}</span>
                  </div>

                  <h3
                    onClick={() => setSelectedProduct(p)}
                    className="font-serif text-xl font-bold text-[#1c1917] hover:text-[#78350f] transition-colors cursor-pointer mb-2"
                  >
                    {p.name}
                  </h3>

                  <p className="text-sm text-[#44403c] line-clamp-2 mb-5 leading-relaxed">
                    {p.description}
                  </p>

                  {/* Spec highlights */}
                  <div className="bg-[#faf8f5] rounded-xl p-3.5 space-y-2 text-xs border border-[#e7e5e4]">
                    <div className="flex justify-between">
                      <span className="text-stone-500 font-medium">Finish & Grain:</span>
                      <span className="text-[#1c1917] font-semibold text-right">{p.finish}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500 font-medium">Suitable For:</span>
                      <span className="text-[#1c1917] font-semibold text-right">{p.suitableFor.slice(0, 2).join(", ")}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex gap-2">
                <button
                  onClick={() => setSelectedProduct(p)}
                  className="flex-1 text-center bg-white hover:bg-stone-50 text-[#1c1917] border border-[#e7e5e4] font-medium py-2.5 rounded-xl transition-colors text-xs inline-flex items-center justify-center space-x-1"
                >
                  <Info className="w-3.5 h-3.5 text-stone-500" />
                  <span>View Specs</span>
                </button>
                <a
                  href={getWaLink(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-[#78350f] hover:bg-[#451a03] text-white font-medium py-2.5 rounded-xl transition-colors text-xs inline-flex items-center justify-center space-x-1 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Specs Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#e7e5e4] animate-in fade-in zoom-in-95 duration-200">
              <div className="relative">
                <ImageWithFallback
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  aspectRatio="aspect-[16/9]"
                />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 bg-[#1c1917]/70 hover:bg-[#1c1917] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold transition-all"
                >
                  ✕
                </button>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs bg-[#b45309]/10 text-[#78350f] font-bold px-2.5 py-0.5 rounded-full uppercase">
                    {selectedProduct.categoryLabel}
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    {selectedProduct.origin}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1c1917] mb-3">
                  {selectedProduct.name}
                </h3>
                <p className="text-sm text-[#44403c] leading-relaxed mb-6">
                  {selectedProduct.description}
                </p>

                <div className="space-y-2 text-xs bg-[#faf8f5] p-4 rounded-2xl border border-[#e7e5e4] mb-6">
                  <div className="flex justify-between py-1 border-b border-stone-200/60">
                    <span className="text-stone-500">Thickness / Weight:</span>
                    <span className="font-bold text-[#1c1917]">{selectedProduct.thickness}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-200/60">
                    <span className="text-stone-500">Tannery Origin:</span>
                    <span className="font-bold text-[#1c1917]">{selectedProduct.origin}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-200/60">
                    <span className="text-stone-500">Surface Finish:</span>
                    <span className="font-bold text-[#1c1917]">{selectedProduct.finish}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-stone-500">Recommended For:</span>
                    <span className="font-bold text-[#1c1917]">{selectedProduct.suitableFor.join(", ")}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 py-3 px-4 rounded-xl border border-[#e7e5e4] text-xs font-semibold text-[#44403c] hover:bg-stone-50"
                  >
                    Close
                  </button>
                  <a
                    href={getWaLink(selectedProduct.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#78350f] hover:bg-[#451a03] text-white text-xs font-semibold inline-flex items-center justify-center space-x-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
