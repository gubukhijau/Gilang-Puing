import React from 'react';
import { Camera, FileCheck2, Truck, Sparkles, ShieldCheck, Clock, Award, ThumbsUp } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { WORKFLOW_STEPS, COMPANY_INFO } from '../data/content';

export const WorkflowSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Camera className="w-6 h-6 text-amber-500" />;
      case 1:
        return <FileCheck2 className="w-6 h-6 text-amber-500" />;
      case 2:
        return <Truck className="w-6 h-6 text-amber-500" />;
      case 3:
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      default:
        return <Award className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="proses" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-600 uppercase mb-2">
            <span>PROSES MUDAH &amp; CEPAT</span>
            <span aria-hidden="true">·</span>
            <span>4 LANGKAH PRAKTIS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
            Bagaimana Cara Memesan di Gilang Buang Puing?
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Tidak perlu repot mencari kuli atau bingung membuang puing ke mana. Cukup 4 langkah mudah dan lokasi proyek Anda langsung rapi seketika.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative bg-neutral-50 rounded-2xl p-6 border border-neutral-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white rounded-xl shadow-xs border border-neutral-100">
                    {getStepIcon(idx)}
                  </div>
                  <span className="text-2xl font-black font-mono text-amber-500">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx === 0 && (
                <div className="mt-4 pt-3 border-t border-neutral-200/80">
                  <a
                    href={COMPANY_INFO.whatsappUrl('Halo Mas Gilang, ini foto puing saya. Mohon estimasi biaya dan armada.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-amber-600 hover:text-amber-700 underline inline-flex items-center gap-1.5"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600 inline" />
                    <span>Kirim Foto via WhatsApp &rarr;</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 4 Guarantees Cards */}
        <div className="mt-14 pt-12 border-t border-neutral-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-lg font-bold text-neutral-900">
              Standar Layanan &amp; Jaminan Kepuasan Pelanggan
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Komitmen kami memberikan rasa tenang dan kebersihan maksimal di setiap pekerjaan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-4.5 bg-neutral-50 rounded-xl border border-neutral-200">
              <ShieldCheck className="w-5 h-5 text-amber-500 mb-2" />
              <h4 className="text-xs font-bold text-neutral-900 mb-1">Disposal Resmi &amp; Legal</h4>
              <p className="text-xs text-neutral-500 leading-normal">
                Puing dibuang ke lokasi penimbunan resmi yang berizin, tidak akan memicu masalah lingkungan.
              </p>
            </div>

            <div className="p-4.5 bg-neutral-50 rounded-xl border border-neutral-200">
              <Clock className="w-5 h-5 text-amber-500 mb-2" />
              <h4 className="text-xs font-bold text-neutral-900 mb-1">Siap Kerja Hari Libur &amp; Malam</h4>
              <p className="text-xs text-neutral-500 leading-normal">
                Fleksibel mengikuti aturan izin lingkungan komplek atau jam loading dock gedung komersial.
              </p>
            </div>

            <div className="p-4.5 bg-neutral-50 rounded-xl border border-neutral-200">
              <Sparkles className="w-5 h-5 text-amber-500 mb-2" />
              <h4 className="text-xs font-bold text-neutral-900 mb-1">Area Kerja Disapu Bersih</h4>
              <p className="text-xs text-neutral-500 leading-normal">
                Tidak ada ceceran kerikil, debu kasar, atau paku yang membahayakan kendaraan Anda.
              </p>
            </div>

            <div className="p-4.5 bg-neutral-50 rounded-xl border border-neutral-200">
              <ThumbsUp className="w-5 h-5 text-amber-500 mb-2" />
              <h4 className="text-xs font-bold text-neutral-900 mb-1">Harga Nego &amp; Transparan</h4>
              <p className="text-xs text-neutral-500 leading-normal">
                Harga all-in tanpa biaya kuli tak terduga saat armada tiba di depan rumah Anda.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
