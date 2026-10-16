import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { COMPANY_INFO, SERVICES } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 text-xs border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-neutral-950 flex items-center justify-center font-black text-lg">
                G
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Gilang Buang Puing
              </span>
            </div>
            
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Mitra terpercaya jasa angkut puing bangunan, sampah renovasi proyek, tebangan pohon, pengurugan tanah, pembersihan lahan kosong, dan galian tanah bergaransi bersih tuntas di seluruh Jabodetabek.
            </p>

            <div className="flex items-center gap-2 text-xs text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Pembuangan Legal &amp; Ramah Lingkungan</span>
            </div>
          </div>

          {/* 6 Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Layanan Kami
            </h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#layanan"
                    className="hover:text-amber-400 transition-colors block text-xs"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Hubungi &amp; Pool Pangkalan
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.operatingHours}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Hotline: <strong className="text-white font-mono">{COMPANY_INFO.phone}</strong></span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl('Halo Mas Gilang, saya ingin order jasa buang puing.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs rounded-lg transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-800" />
                <span>Order via WhatsApp: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Quiet copyright bar */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            &copy; {new Date().getFullYear()} Gilang Buang Puing. Hak Cipta Dilindungi.
          </div>
          <div className="flex items-center gap-4">
            <a href="#layanan" className="hover:text-neutral-300">Layanan</a>
            <span>·</span>
            <a href="#armada" className="hover:text-neutral-300">Armada</a>
            <span>·</span>
            <a href="#proses" className="hover:text-neutral-300">Proses Kerja</a>
            <span>·</span>
            <a href="#area" className="hover:text-neutral-300">Wilayah Jabodetabek</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
