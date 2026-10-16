import React, { useState } from 'react';
import { MapPin, Clock, Search, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { COVERAGE_AREAS, COMPANY_INFO } from '../data/content';

export const CoverageAreaSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAreas = COVERAGE_AREAS.map((region) => {
    if (!searchQuery.trim()) return region;
    const matchesCity = region.cities.some((c) =>
      c.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const matchesRegion = region.region
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    if (matchesRegion || matchesCity) {
      return region;
    }
    return null;
  }).filter(Boolean);

  return (
    <section id="area" className="py-16 sm:py-24 bg-neutral-900 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
            <MapPin className="w-4 h-4" />
            <span>JANGKAUAN WILAYAH KERJA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            Melayani Seluruh Jabodetabek &amp; Sekitarnya
          </h2>
          <p className="mt-3 text-base text-neutral-400 leading-relaxed">
            Armada tersebar di beberapa pool pangkalan strategis untuk memastikan respon armada tercepat tiba di alamat proyek Anda.
          </p>

          {/* Quick Search Area */}
          <div className="mt-6 max-w-md relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari kecamatan atau wilayah Anda (contoh: Bintaro, Cilandak, BSD)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-xl text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
            />
          </div>
        </div>

        {/* Coverage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-neutral-800/80 rounded-2xl p-6 border border-neutral-700/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>{area!.region}</span>
                  </h3>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-medium bg-amber-950/60 border border-amber-800/60 rounded px-2.5 py-1 mb-4">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{area!.deliveryTime}</span>
                </div>

                <div className="space-y-2 text-xs text-neutral-300">
                  {area!.cities.map((city, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-700/60">
                <a
                  href={COMPANY_INFO.whatsappUrl(`Halo Mas Gilang, apakah area ${area!.region} siap kirim armada hari ini?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Cek Armada di Area Ini &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Out-of-area Note */}
        <div className="mt-10 p-5 bg-neutral-800/40 rounded-xl border border-neutral-700 text-xs text-neutral-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <strong className="text-white block">Lokasi proyek Anda berada di luar daftar di atas?</strong>
            Kami tetap dapat melayani proyek luar kota (Karawang, Cikarang, Banten, Puncak) untuk volume besar atau sewa bulanan.
          </div>
          <a
            href={COMPANY_INFO.whatsappUrl('Halo Mas Gilang, saya ingin konsultasi proyek buang puing di luar kota.')}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-4 py-2 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-lg transition-colors text-xs"
          >
            Tanya Ketersediaan
          </a>
        </div>

      </div>
    </section>
  );
};
