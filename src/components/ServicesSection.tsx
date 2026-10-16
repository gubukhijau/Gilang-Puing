import React, { useState } from 'react';
import { 
  Building2, 
  Trash2, 
  Trees, 
  Layers, 
  Sparkles, 
  Shovel, 
  Check, 
  ArrowRight, 
  Truck, 
  PhoneCall, 
  X
} from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { SERVICES, COMPANY_INFO } from '../data/content';
import { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'buang-puing-bangunan':
        return <Building2 className="w-5 h-5 text-amber-500" />;
      case 'buang-sampah-proyek':
        return <Trash2 className="w-5 h-5 text-amber-500" />;
      case 'buang-tebangan-pohon':
        return <Trees className="w-5 h-5 text-amber-500" />;
      case 'pengurugan-puing-tanah':
        return <Layers className="w-5 h-5 text-amber-500" />;
      case 'pembersihan-lahan-kosong':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'galian-tanah':
        return <Shovel className="w-5 h-5 text-amber-500" />;
      default:
        return <Truck className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="layanan" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-600 uppercase mb-2">
            <span>LAYANAN SPESIALIS KAMI</span>
            <span aria-hidden="true">·</span>
            <span>PROFESIONAL &amp; BERGARANSI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
            Layanan Terlengkap Gilang Buang Puing
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Didukung armada lengkap dan tenaga kerja berpengalaman, kami siap menangani segala skala kebutuhan pembersihan, pengangkutan, pengurugan, dan penggalian di lokasi Anda.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const serviceNumber = String(index + 1).padStart(2, '0');
            return (
              <div
                key={service.id}
                className="flex flex-col bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-md transition-all group"
              >
                {/* Service Visual Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Clean editorial numbering badge */}
                  <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-xs text-white text-xs font-mono font-semibold px-2.5 py-1 rounded-md">
                    {serviceNumber}
                  </div>

                  {/* Starting rate */}
                  <div className="absolute bottom-3 right-3 bg-amber-400 text-neutral-950 text-xs font-bold px-2.5 py-1 rounded-md shadow-xs">
                    Mulai {service.startingPrice}/{service.unit}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-amber-100 rounded-md">
                        {getServiceIcon(service.id)}
                      </div>
                      <span className="text-xs text-neutral-500 font-medium">
                        {service.recommendedFleet}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs text-neutral-500 italic">
                      {service.tagline}
                    </p>

                    <p className="mt-3 text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="mt-4 pt-4 border-t border-neutral-200/80 space-y-2">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                          <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveModalService(service)}
                      className="text-xs font-semibold text-neutral-700 hover:text-neutral-950 hover:underline inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Lihat Rincian</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <a
                      href={COMPANY_INFO.whatsappUrl(`Halo Mas Gilang, saya ingin order jasa: ${service.title}. Mohon info estimasi harga dan ketersediaan armada.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 text-xs font-semibold bg-amber-400 hover:bg-amber-300 text-neutral-950 rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-2xs whitespace-nowrap"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-800" />
                      <span>Order</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-neutral-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="relative aspect-[16/9] bg-neutral-100">
              <img
                src={activeModalService.image}
                alt={activeModalService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-3 right-3 p-2 bg-neutral-900/70 hover:bg-neutral-900 text-white rounded-full transition-colors"
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
                  Rincian Layanan
                </span>
                <span className="text-xs font-bold text-neutral-800 bg-amber-100 px-2.5 py-0.5 rounded">
                  Mulai {activeModalService.startingPrice}/{activeModalService.unit}
                </span>
              </div>

              <h3 className="text-xl font-bold text-neutral-900">
                {activeModalService.title}
              </h3>
              <p className="text-xs text-neutral-500 mb-4">{activeModalService.tagline}</p>

              <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                {activeModalService.description}
              </p>

              <div className="mb-4">
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
                  Material yang Ditangani:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalService.materialsHandled.map((m, i) => (
                    <span key={i} className="text-xs bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded-md">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
                  Keuntungan Layanan:
                </h4>
                <ul className="space-y-1.5">
                  {activeModalService.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-neutral-600">
                      <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-neutral-100">
                <a
                  href={COMPANY_INFO.whatsappUrl(`Halo Mas Gilang, saya ingin order: ${activeModalService.title}. Mohon konfirmasi jadwal & survey.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-sm rounded-lg transition-colors shadow-xs"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-800" />
                  <span>Order via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
