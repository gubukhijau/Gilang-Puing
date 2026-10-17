import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Clock, Sparkles, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { COMPANY_INFO } from '../data/content';

interface CallToActionSectionProps {
  onOpenOrderModal: () => void;
}

export const CallToActionSection: React.FC<CallToActionSectionProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="kontak" className="py-16 sm:py-24 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background radial accent glow & pattern */}
      <div 
        className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Box */}
        <div className="bg-gradient-to-br from-neutral-800/90 via-neutral-900 to-neutral-950 border border-neutral-700/80 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Accent Stripe on Top */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SIAP KIRIM ARMADA HARI INI</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Puing Menumpuk &amp; Mengganggu Lingkungan? <br className="hidden sm:inline" />
                <span className="text-amber-400">Bersihkan Tuntas Hari Ini Bersama Kami!</span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
                Cukup kirimkan foto puing dan alamat via WhatsApp. Tim kami segera menghitung estimasi ritase yang dibutuhkan dan mengirim armada terdekat langsung ke lokasi Anda.
              </p>

              {/* Trust Badges Strip */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-neutral-300">
                <div className="flex items-center gap-2 bg-neutral-800/60 border border-neutral-700/60 rounded-xl px-3 py-2">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Tiba 1-2 Jam</span>
                </div>
                <div className="flex items-center gap-2 bg-neutral-800/60 border border-neutral-700/60 rounded-xl px-3 py-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Pembuangan Legal</span>
                </div>
                <div className="flex items-center gap-2 bg-neutral-800/60 border border-neutral-700/60 rounded-xl px-3 py-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Sapu Bersih Area</span>
                </div>
                <div className="flex items-center gap-2 bg-neutral-800/60 border border-neutral-700/60 rounded-xl px-3 py-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Jabodetabek</span>
                </div>
              </div>

            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 sm:w-full">
              
              {/* Primary WhatsApp Action Button */}
              <a
                href={COMPANY_INFO.whatsappUrl('Halo Mas Gilang, saya ingin order jasa buang puing & pembersihan lokasi.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <WhatsAppIcon className="w-5 h-5 text-white fill-white group-hover:scale-110 transition-transform shrink-0" />
                <span>Order via WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-1 opacity-80 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              {/* Secondary Modal Trigger Button */}
              <button
                type="button"
                onClick={onOpenOrderModal}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-neutral-950 font-bold text-sm rounded-xl transition-all shadow-md"
              >
                <span>Isi Formulir Pesanan</span>
              </button>

              {/* Direct Telephone Hotline Link */}
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-800/80 hover:bg-neutral-700/80 text-neutral-300 hover:text-white border border-neutral-700 text-xs font-medium rounded-xl transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Telepon Langsung: {COMPANY_INFO.phone}</span>
              </a>

              <p className="text-[11px] text-center text-neutral-400 mt-1">
                Jam Operasional: {COMPANY_INFO.operatingHours}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
