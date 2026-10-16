import React from 'react';
import { Calculator, ShieldCheck, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { COMPANY_INFO } from '../data/content';

interface HeroProps {
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  return (
    <section className="relative overflow-hidden bg-neutral-900 text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-Column Balanced Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Column 1: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Clean unboxed kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-amber-400 mb-4">
              <span>JASA BUANG PUING &amp; URUG JABODETABEK</span>
              <span aria-hidden="true">·</span>
              <span>RESPON 1-2 JAM</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5" style={{ textWrap: 'balance' }}>
              Solusi Angkut Puing Bangunan &amp; Pembersihan Lahan Cepat, Bersih, Tuntas.
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-neutral-300 mb-8 max-w-2xl leading-relaxed">
              Layanan profesional pengangkutan puing renovasi, sampah pohon, pengurugan tanah, hingga pembersihan lahan kosong. Armada lengkap dari Pick-up sampai Dump Truck 8 m³ dengan tenaga kuli muat handal.
            </p>

            {/* Quick Trust Checks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Termasuk kuli angkut &amp; sapu bersih lokasi</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Pembuangan resmi tanpa komplain warga</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Siap kerja 24/7 termasuk hari libur &amp; malam</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Harga transparan bisa nego sesuai volume</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={COMPANY_INFO.whatsappUrl('Halo Mas Gilang, saya ingin order dan tanya harga buang puing.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg shadow-md transition-all whitespace-nowrap shrink-0 group"
              >
                <WhatsAppIcon className="w-4.5 h-4.5 text-emerald-800 group-hover:scale-110 transition-transform" />
                <span>Order Cepat via WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#kalkulator"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 hover:border-neutral-600 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Hitung Estimasi Biaya</span>
              </a>
            </div>

            {/* Direct Telephone Note */}
            <div className="mt-4 text-xs text-neutral-400 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Jam Operasional: {COMPANY_INFO.operatingHours}</span>
            </div>
          </div>

          {/* Column 2: Dominant High-Impact Visual */}
          <div className="lg:col-span-5 flex items-center">
            <div className="relative w-full rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-800 aspect-[4/3] lg:aspect-auto lg:h-full">
              <img
                src="/src/assets/images/hero_dump_truck_worksite_1792120788969.jpg"
                alt="Operasi angkut puing bangunan Gilang Buang Puing dengan dump truck dan tenaga kerja profesional"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent pointer-events-none" />

              {/* Context Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 rounded-xl p-3.5 text-xs text-neutral-200">
                <div className="flex items-center justify-between font-semibold text-white mb-1">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    Pekerjaan Rapi &amp; Legal
                  </span>
                  <span className="text-amber-400 tabular-nums">1.850+ Proyek Selesai</span>
                </div>
                <p className="text-neutral-400 leading-snug">
                  Armada dump truck bersih siap terjun ke lokasi perumahan, ruko, kavling, maupun proyek komersial.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column KPI Metric Strip Placed Below the Hero Split */}
        <div className="mt-14 pt-8 border-t border-neutral-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight tabular-nums">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-neutral-400 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
