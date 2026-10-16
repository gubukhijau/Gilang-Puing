import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { FAQS, COMPANY_INFO } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-600 uppercase mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>TANYA JAWAB</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            Segala hal yang perlu Anda ketahui mengenai tarif, armada, dan mekanisme kerja Gilang Buang Puing.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-neutral-900 hover:text-amber-600 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-500' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center bg-white rounded-2xl p-6 border border-neutral-200">
          <h4 className="text-sm font-bold text-neutral-900 mb-1">
            Masih ada pertanyaan lain seputar puing atau proyek Anda?
          </h4>
          <p className="text-xs text-neutral-500 mb-4">
            Mas Gilang dan tim siap membantu konsultasi gratis serta survey lokasi tanpa dipungut biaya.
          </p>
          <a
            href={COMPANY_INFO.whatsappUrl('Halo Mas Gilang, saya ingin tanya-tanya dulu seputar layanan puing.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs sm:text-sm font-bold rounded-lg transition-colors shadow-2xs"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-800" />
            <span>Tanya Langsung via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
