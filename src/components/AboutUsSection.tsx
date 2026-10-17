import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  HardHat, 
  Truck,
  HeartHandshake
} from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { COMPANY_INFO, ASSET_IMAGES } from '../data/content';

export const AboutUsSection: React.FC = () => {
  return (
    <section id="tentang-kami" className="py-16 sm:py-24 bg-neutral-900 text-white relative overflow-hidden border-b border-neutral-800">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Image & Experience Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-700/80 shadow-2xl bg-neutral-800 aspect-[4/3]">
              <img
                src={ASSET_IMAGES.fleetTruck}
                alt="Armada Truk Gilang Buang Puing siap melayani area Jabodetabek"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 rounded-xl p-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-400 text-neutral-950 flex items-center justify-center font-black shrink-0">
                    <HardHat className="w-5 h-5 text-neutral-950" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Gilang Ramadhan (Founder)</h4>
                    <p className="text-[11px] text-neutral-400">Siap konsultasi &amp; survey langsung lokasi proyek Anda</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Proof Pill */}
            <div className="mt-4 grid grid-cols-2 gap-3 text-center">
              <div className="bg-neutral-800/80 border border-neutral-700 rounded-xl p-3">
                <div className="text-xl sm:text-2xl font-black font-mono text-amber-400 tabular-nums">1.850+</div>
                <div className="text-[11px] text-neutral-400 mt-0.5">Ritase Puing Terangkut</div>
              </div>
              <div className="bg-neutral-800/80 border border-neutral-700 rounded-xl p-3">
                <div className="text-xl sm:text-2xl font-black font-mono text-amber-400 tabular-nums">18 Unit</div>
                <div className="text-[11px] text-neutral-400 mt-0.5">Armada Aktif Siap Jalan</div>
              </div>
            </div>
          </div>

          {/* Column 2: Story, Mission, and Core Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-3">
              <Award className="w-4 h-4" />
              <span>TENTANG KAMI</span>
              <span aria-hidden="true">·</span>
              <span>PROFIL &amp; KOMITMEN</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Mitra Terpercaya Pengelolaan Puing &amp; Lahan di Jabodetabek
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
              <p>
                <strong>Gilang Buang Puing</strong> berawal dari komitmen sederhana: memberikan solusi pengangkutan puing bangunan dan sampah renovasi yang <em>bersih tuntas, legal, dan tanpa repot</em> bagi pemilik rumah maupun kontraktor.
              </p>
              <p>
                Kami menyadari bahwa membuang puing seringkali menjadi kendala besar karena sulitnya mencari kuli angkut, akses jalan perumahan yang sempit, hingga kekhawatiran tetangga yang merasa terganggu. Oleh karena itu, seluruh tim kami dibekali standar kerja yang tertib: <strong>datang tepat waktu, memuat dengan cekatan, dan menyapu bersih jalanan sebelum meninggalkan lokasi</strong>.
              </p>
              <p>
                Kini, didukung lebih dari 18 unit armada pick-up bak, truk engkel, dump truck double, serta mini excavator dengan pangkalan pool tersebar di Jakarta Selatan, Tangerang, dan Depok, kami siap merespon kebutuhan pembersihan lokasi Anda dalam waktu 1-2 jam.
              </p>
            </div>

            {/* 4 Pillars of Integrity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              <div className="bg-neutral-800/60 border border-neutral-700/80 rounded-xl p-3.5">
                <div className="flex items-center gap-2 font-bold text-xs text-white mb-1">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Legalitas &amp; Lingkungan</span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-normal">
                  Hanya membuang material ke lokasi urugan proyek resmi &amp; TPA berizin. Tidak ada buang liar.
                </p>
              </div>

              <div className="bg-neutral-800/60 border border-neutral-700/80 rounded-xl p-3.5">
                <div className="flex items-center gap-2 font-bold text-xs text-white mb-1">
                  <HeartHandshake className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Kejujuran &amp; Bebas Pungli</span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-normal">
                  Harga final disepakati di awal secara transparan. Tidak ada biaya tambahan kuli saat di lokasi.
                </p>
              </div>

              <div className="bg-neutral-800/60 border border-neutral-700/80 rounded-xl p-3.5">
                <div className="flex items-center gap-2 font-bold text-xs text-white mb-1">
                  <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Armada Terawat Prima</span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-normal">
                  Kondisi truk dan hidrolik diperiksa berkala, dilengkapi terpal penutup anti tumpah di jalan raya.
                </p>
              </div>

              <div className="bg-neutral-800/60 border border-neutral-700/80 rounded-xl p-3.5">
                <div className="flex items-center gap-2 font-bold text-xs text-white mb-1">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Fleksibilitas 24/7</span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-normal">
                  Melayani pekerjaan malam hari untuk mall/gedung komersial dan akhir pekan untuk perumahan.
                </p>
              </div>
            </div>

            {/* Direct Contact Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={COMPANY_INFO.whatsappUrl('Halo Mas Gilang, saya ingin konsultasi dan tanya seputar layanan buang puing.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl shadow-md transition-all whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4.5 h-4.5 text-emerald-800" />
                <span>Hubungi Mas Gilang via WhatsApp</span>
              </a>

              <div className="text-xs text-neutral-400 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Pool Pusat: {COMPANY_INFO.address.split('(')[0]}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
