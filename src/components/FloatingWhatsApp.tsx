import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { COMPANY_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center">
      <a
        href={COMPANY_INFO.whatsappUrl('Halo Mas Gilang, saya ingin order jasa buang puing & lahan.')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/20 group"
        aria-label="Hubungi kami di WhatsApp"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform text-white fill-white" />
        <span className="whitespace-nowrap">Order via WhatsApp</span>
      </a>
    </div>
  );
};
