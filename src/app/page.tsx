import React from "react";
import { storeInfo, sampleProducts } from "@/data/catalog";
import { Phone, MapPin, Clock, ShieldCheck, Award, Layers, Sparkles, MessageCircle } from "lucide-react";

export default function Home() {
  const waUrl = `https://wa.me/${storeInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(storeInfo.whatsappTemplate)}`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#451a03] text-[#faf8f5] text-xs py-2 px-4 text-center font-medium tracking-wide">
        <span>Pengiriman ke Seluruh Indonesia & Kunjungan Langsung ke Harco Mangga Dua | Est. 1997</span>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e7e5e4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-serif text-xl font-bold text-[#1c1917] tracking-tight">
              DHENIG LEATHER
            </span>
            <span className="text-[10px] uppercase tracking-wider bg-[#b45309]/10 text-[#78350f] px-2 py-0.5 rounded font-semibold">
              Est. 1997
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#44403c]">
            <a href="#tentang" className="hover:text-[#78350f] transition-colors">Tentang Kami</a>
            <a href="#katalog" className="hover:text-[#78350f] transition-colors">Koleksi Kulit</a>
            <a href="#lokasi" className="hover:text-[#78350f] transition-colors">Lokasi & Kontak</a>
          </nav>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#78350f] hover:bg-[#451a03] text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Konsultasi WA</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#faf8f5] via-[#f5f1ea] to-[#faf8f5] border-b border-[#e7e5e4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-[#b45309]/10 text-[#78350f] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#b45309]" />
            <span>Pusat Bahan Kulit Asli Terlengkap di Jakarta</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#1c1917] leading-tight mb-6">
            Karakter Kulit Terbaik untuk Karya Mahakarya Anda
          </h1>
          <p className="text-base sm:text-lg text-[#44403c] max-w-2xl mx-auto mb-10 leading-relaxed">
            Menyediakan aneka jenis kulit sapi & domba berkualitas tinggi, dari penyamakan lokal unggulan hingga impor eksklusif Italia. Melayani eceran lembaran dan pemesanan partai besar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#katalog"
              className="w-full sm:w-auto bg-[#78350f] hover:bg-[#451a03] text-white font-medium px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Jelajahi Koleksi Kulit
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white hover:bg-stone-50 text-[#1c1917] font-medium px-8 py-3.5 rounded-full border border-[#e7e5e4] transition-all"
            >
              Hubungi Toko (WhatsApp)
            </a>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section id="tentang" className="py-16 bg-white border-b border-[#e7e5e4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-[#faf8f5] border border-[#e7e5e4]">
              <ShieldCheck className="w-8 h-8 text-[#78350f] mb-4" />
              <h3 className="font-serif font-bold text-lg text-[#1c1917] mb-2">100% Genuine Leather</h3>
              <p className="text-sm text-[#44403c] leading-relaxed">Garansi kulit asli alami kualitas penyamakan terpercaya, bebas dari kulit sintetis.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#faf8f5] border border-[#e7e5e4]">
              <Award className="w-8 h-8 text-[#78350f] mb-4" />
              <h3 className="font-serif font-bold text-lg text-[#1c1917] mb-2">29+ Tahun Terpercaya</h3>
              <p className="text-sm text-[#44403c] leading-relaxed">Melayani ribuan pengrajin, desainer, dan industri kreatif sejak tahun 1997.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#faf8f5] border border-[#e7e5e4]">
              <Layers className="w-8 h-8 text-[#78350f] mb-4" />
              <h3 className="font-serif font-bold text-lg text-[#1c1917] mb-2">Lokal & Impor Italia</h3>
              <p className="text-sm text-[#44403c] leading-relaxed">Koleksi variatif mulai dari penyamakan Jawa Timur/Barat hingga grade premium Eropa.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#faf8f5] border border-[#e7e5e4]">
              <MessageCircle className="w-8 h-8 text-[#78350f] mb-4" />
              <h3 className="font-serif font-bold text-lg text-[#1c1917] mb-2">Layanan Konsultatif</h3>
              <p className="text-sm text-[#44403c] leading-relaxed">Konsultasi langsung ketebalan, karakter lentur, dan kebutuhan proyek kerajinan Anda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Preview */}
      <section id="katalog" className="py-20 bg-[#faf8f5] border-b border-[#e7e5e4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#b45309] font-bold">Katalog Sampel Bahan</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1c1917] mt-2 mb-4">
              Koleksi Bahan Kulit Pilihan
            </h2>
            <p className="text-sm sm:text-base text-[#44403c]">
              Pilihan karakter permukaan, ketebalan, dan warna siap supply untuk karya Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {sampleProducts.map((p) => (
              <div key={p.id} className="bg-white rounded-2xl overflow-hidden border border-[#e7e5e4] shadow-sm flex flex-col">
                <div className="h-56 bg-stone-200 relative flex items-center justify-center p-6 border-b border-[#e7e5e4] text-stone-500">
                  <div className="text-center">
                    <Layers className="w-12 h-12 mx-auto text-stone-400 mb-2" />
                    <span className="text-xs font-semibold uppercase tracking-wider block text-stone-600">{p.name}</span>
                    <span className="text-[11px] text-stone-500">Foto sampel akan tampil di sini</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#b45309] uppercase">{p.categoryLabel}</span>
                      <span className="text-xs bg-stone-100 text-[#44403c] px-2 py-0.5 rounded font-medium">{p.origin}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#1c1917] mb-2">{p.name}</h3>
                    <p className="text-sm text-[#44403c] mb-4 leading-relaxed">{p.description}</p>
                    <div className="text-xs space-y-1 text-stone-600 mb-6 bg-stone-50 p-3 rounded-lg">
                      <div><strong className="text-stone-800">Ketebalan:</strong> {p.thickness}</div>
                      <div><strong className="text-stone-800">Finish:</strong> {p.finish}</div>
                      <div><strong className="text-stone-800">Aplikasi:</strong> {p.suitableFor.join(", ")}</div>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${storeInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Halo Toko Kulit Dhenig, saya ingin tanya ketersediaan stok untuk: ${p.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center bg-[#faf8f5] hover:bg-[#78350f] text-[#78350f] hover:text-white border border-[#78350f]/30 font-medium py-2.5 rounded-xl transition-all text-xs"
                  >
                    Tanya Ketersediaan Stok
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Store Info */}
      <section id="lokasi" className="py-16 bg-white border-b border-[#e7e5e4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-[#faf8f5] border border-[#e7e5e4] rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row gap-8 justify-between items-center">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#b45309] font-bold">Kunjungi Toko Kami</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1917] mt-1 mb-4">
                Toko Kulit Dhenig — Harco Mangga Dua
              </h2>
              <div className="space-y-3 text-sm text-[#44403c] mb-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#78350f] shrink-0 mt-0.5" />
                  <span>{storeInfo.address.line1}, {storeInfo.address.line2}, {storeInfo.address.city} {storeInfo.address.postalCode}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-[#78350f] shrink-0" />
                  <span>{storeInfo.operatingHours}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#78350f] shrink-0" />
                  <span>{storeInfo.phone}</span>
                </div>
              </div>
              <a
                href={storeInfo.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#78350f] text-white text-xs font-semibold px-5 py-3 rounded-full hover:bg-[#451a03] transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>Buka Petunjuk Arah di Google Maps</span>
              </a>
            </div>
            <div className="w-full md:w-80 p-6 bg-white rounded-2xl border border-[#e7e5e4] shadow-sm text-center">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-[#1c1917] mb-1">Konsultasi Cepat</h4>
              <p className="text-xs text-[#44403c] mb-4">Ingin cek foto stok lembaran hari ini? Chat langsung via WhatsApp toko.</p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-xl text-xs transition-colors"
              >
                Chat WhatsApp Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1c1917] text-stone-400 py-12 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Toko Kulit Dhenig (Est. 1997). Seluruh hak cipta dilindungi.</p>
          <div className="flex space-x-6">
            <a href="https://instagram.com/dhenigleather" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Instagram @dhenigleather
            </a>
            <span className="text-stone-600">|</span>
            <span>Digital Showcase Concept by NextOps</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
