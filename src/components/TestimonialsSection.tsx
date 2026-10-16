import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-600 uppercase mb-2">
            <span>BUKTI KEPUASAN KLIEN</span>
            <span aria-hidden="true">·</span>
            <span>TESTIMONI OTENTIK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
            Dipercaya Ratusan Pemilik Rumah &amp; Kontraktor
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Kepuasan pelanggan adalah prioritas utama. Berikut pengalaman nyata mereka menggunakan armada dan layanan Gilang Buang Puing.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-neutral-50 rounded-2xl p-6 sm:p-7 border border-neutral-200 flex flex-col justify-between shadow-2xs"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-300" />
                </div>

                {/* Project Tag */}
                <div className="text-xs font-semibold text-amber-700 bg-amber-100/70 px-2.5 py-1 rounded inline-block mb-3">
                  {t.projectType}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic mb-6">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-neutral-200/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900 flex items-center gap-1.5">
                      <span>{t.clientName}</span>
                      <span title="Terverifikasi" className="inline-flex items-center">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      </span>
                    </h4>
                    <p className="text-xs text-neutral-500">{t.role}</p>
                    <p className="text-[11px] text-neutral-400 mt-0.5">{t.location}</p>
                  </div>
                  <span className="text-[11px] text-neutral-400 font-mono">
                    {t.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
