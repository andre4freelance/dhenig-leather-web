"use client";

import React, { useState } from "react";
import { sampleProducts, LeatherProduct, storeInfo } from "@/data/catalog";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { MessageCircle, Info } from "lucide-react";

type CategoryFilter = "all" | "pullup" | "vegtan" | "crazyhorse" | "nappa" | "exotic";

export function CatalogSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [selectedProduct, setSelectedProduct] = useState<LeatherProduct | null>(null);

  const categories = [
    { id: "all", label: "All Swatches" },
    { id: "nappa", label: "Nappa and Garment" },
    { id: "vegtan", label: "Vegetable Tanned" },
    { id: "pullup", label: "Oil Pull Up" },
    { id: "crazyhorse", label: "Crazy Horse" },
    { id: "exotic", label: "Embossed" }
  ];

  const filteredProducts = selectedCategory === "all"
    ? sampleProducts
    : sampleProducts.filter((p) => p.category === selectedCategory);

  const getWaLink = (productName: string) => {
    const text = `Hello Dhenig Leather, I would like to check current stock and pricing for: ${productName}.`;
    return `https://wa.me/${storeInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="collection" className="py-16 sm:py-20 bg-[#14110f] border-b border-[#2d251f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-wider text-amber-500 font-semibold">Leather Samples</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#f5f0eb] mt-1 mb-3">
            Available Leather Articles
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            We supply whole hides, sides, and cuts for crafters, sample rooms, and production workshops.
          </p>
        </div>

        {/* Filter Tabs: Dark Slate & Warm Leather Accents */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 mb-8 gap-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as CategoryFilter)}
              className={`px-4 py-2 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#b45309] text-white shadow-xs"
                  : "bg-[#1e1916] text-stone-300 hover:bg-[#28211c] border border-[#342b23]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid: Warm Dark Card Surfaces */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="bg-[#1e1916] rounded-xl overflow-hidden border border-[#342b23] shadow-sm hover:border-[#78350f] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Product Image Swatch */}
                <div className="relative cursor-pointer" onClick={() => setSelectedProduct(p)}>
                  <ImageWithFallback
                    src={p.image}
                    alt={p.name}
                    aspectRatio="aspect-[4/3]"
                    badgeLabel={p.origin}
                  />
                  <div className="absolute top-3 left-3 bg-[#14110f]/85 text-amber-300 text-[11px] font-medium px-2.5 py-0.5 rounded-md border border-amber-900/30">
                    {p.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between text-xs text-amber-500 font-medium mb-1.5">
                    <span>{p.origin}</span>
                    <span className="text-stone-400">{p.thickness}</span>
                  </div>

                  <h3
                    onClick={() => setSelectedProduct(p)}
                    className="font-serif text-lg sm:text-xl font-bold text-[#f5f0eb] hover:text-amber-400 transition-colors cursor-pointer mb-2"
                  >
                    {p.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-400 line-clamp-2 mb-4 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="bg-[#14110f] rounded-lg p-3 space-y-1.5 text-xs border border-[#2d251f]">
                    <div className="flex justify-between gap-2">
                      <span className="text-stone-500 shrink-0">Finish:</span>
                      <span className="text-stone-200 text-right font-medium">{p.finish}</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-stone-500 shrink-0">Applications:</span>
                      <span className="text-stone-200 text-right font-medium">{p.suitableFor.join(", ")}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-5 sm:p-6 pt-0 flex gap-2">
                <button
                  onClick={() => setSelectedProduct(p)}
                  className="flex-1 text-center bg-[#28211c] hover:bg-[#342b23] text-stone-200 border border-[#3e342b] font-medium py-2.5 rounded-md transition-colors text-xs inline-flex items-center justify-center space-x-1"
                >
                  <Info className="w-3.5 h-3.5 text-stone-400" />
                  <span>Details</span>
                </button>
                <a
                  href={getWaLink(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-[#b45309] hover:bg-[#d97706] text-white font-medium py-2.5 rounded-md transition-colors text-xs inline-flex items-center justify-center space-x-1.5 shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Check stock</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Sheet for Mobile and Desktop: Deep Dark Theme */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 sm:p-6">
            <div className="bg-[#1e1916] rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#3e342b]">
              <div className="relative">
                <ImageWithFallback
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  aspectRatio="aspect-[16/9]"
                />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-3 right-3 bg-[#14110f]/80 hover:bg-[#14110f] text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-1.5">
                  <span className="text-xs bg-amber-950/80 text-amber-300 font-semibold px-2.5 py-0.5 rounded border border-amber-800/40">
                    {selectedProduct.categoryLabel}
                  </span>
                  <span className="text-xs text-stone-400">
                    {selectedProduct.origin}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f5f0eb] mb-2">
                  {selectedProduct.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-5">
                  {selectedProduct.description}
                </p>

                <div className="space-y-2 text-xs bg-[#14110f] p-3.5 rounded-lg border border-[#2d251f] mb-5">
                  <div className="flex justify-between py-1 border-b border-stone-800">
                    <span className="text-stone-400">Thickness:</span>
                    <span className="font-medium text-[#f5f0eb]">{selectedProduct.thickness}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-800">
                    <span className="text-stone-400">Tannery source:</span>
                    <span className="font-medium text-[#f5f0eb]">{selectedProduct.origin}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-800">
                    <span className="text-stone-400">Finish:</span>
                    <span className="font-medium text-[#f5f0eb]">{selectedProduct.finish}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-stone-400">Suitable for:</span>
                    <span className="font-medium text-[#f5f0eb]">{selectedProduct.suitableFor.join(", ")}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 py-2.5 px-3 rounded-md border border-[#3e342b] text-xs font-medium text-stone-300 hover:bg-[#28211c]"
                  >
                    Close
                  </button>
                  <a
                    href={getWaLink(selectedProduct.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-md bg-[#b45309] hover:bg-[#d97706] text-white text-xs font-medium inline-flex items-center justify-center space-x-1.5 shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Inquire on WhatsApp</span>
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
