import React from 'react';
import { Truck, Check, Shield, Ruler } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { FLEET_OPTIONS, COMPANY_INFO } from '../data/content';

export const FleetSection: React.FC = () => {
  return (
    <section id="armada" className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-600 uppercase mb-2">
            <span>ARMADA &amp; PERALATAN KERJA</span>
            <span aria-hidden="true">·</span>
            <span>SIAP JALAN 24/7</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
            Pilihan Armada Pengangkut &amp; Alat Berat
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Dari akses jalan sempit perumahan hingga proyek skala besar, kami memiliki armada yang tepat untuk menjamin efisiensi biaya dan kecepatan kerja Anda.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLEET_OPTIONS.map((fleet) => (
            <div
              key={fleet.id}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                  <img
                    src={fleet.image}
                    alt={fleet.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-neutral-950/80 backdrop-blur-xs text-amber-400 text-xs font-mono font-bold px-2 py-0.5 rounded">
                    {fleet.volume}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-neutral-900 mb-1">
                    {fleet.name}
                  </h3>
                  <div className="text-xs font-bold text-amber-700 bg-amber-50 rounded px-2 py-1 inline-block mb-3">
                    {fleet.ratePerRit}
                  </div>

                  <div className="space-y-2 text-xs text-neutral-600 mb-4">
                    <div className="flex items-start gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                      <span><strong>Kapasitas:</strong> {fleet.capacity}</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <Ruler className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                      <span><strong>Dimensi:</strong> {fleet.dimensions}</span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-500 leading-relaxed border-t border-neutral-100 pt-3">
                    <strong>Cocok untuk:</strong> {fleet.idealFor}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={COMPANY_INFO.whatsappUrl(`Halo Mas Gilang, saya ingin sewa armada: ${fleet.name} untuk buang puing.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-bold text-neutral-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-2xs"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Sewa Armada via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Equipment Guarantee Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-900">Perlengkapan Keamanan &amp; Kebersihan Lengkap</h4>
              <p className="text-xs text-neutral-500 mt-0.5">
                Setiap armada dilengkapi terpal penutup anti tumpah, sekop, gerobak dorong, sapu lidi, serta pekerja dengan rompi K3.
              </p>
            </div>
          </div>
          <a
            href={COMPANY_INFO.whatsappUrl('Halo Mas Gilang, saya butuh rekomendasi armada mana yang paling pas untuk puing saya.')}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Konsultasi Armada yang Tepat
          </a>
        </div>

      </div>
    </section>
  );
};
