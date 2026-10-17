import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Truck, 
  Users, 
  BadgePercent, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { COMPANY_INFO } from '../data/content';

export const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      title: 'Sapu Bersih Area Kerja Pasca Muat',
      badge: 'Standar Kebersihan',
      description: 'Kami tidak sekadar menaikkan puing ke bak truk. Area halaman, garasi, dan jalanan depan rumah disapu bersih dari ceceran kerikil, debu kasar, dan paku agar aman bagi kendaraan Anda dan tidak dikomplain warga.',
      points: ['Sapu lidi & pembersihan debu kasar', 'Bebas serpihan paku tajam', 'Jalanan komplek tetap rapi']
    },
    {
      icon: <Users className="w-6 h-6 text-amber-500" />,
      title: 'Termasuk Tenaga Angkut Terlatih (Kuli Panggul)',
      badge: 'Bebas Capek',
      description: 'Anda tidak perlu repot mencari tenaga kuli lepas. Tim pekerja kami terbiasa memuat puing berat dengan cepat, membawa gerobak dorong sorong, karung, sekop, serta bekerja dengan sopan dan beretika di lingkungan perumahan.',
      points: ['Pekerja terlatih & bertenaga', 'Peralatan muat lengkap (sekop, gerobak)', 'Sopan & menghormati tetangga']
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
      title: 'Pembuangan Resmi & Bertanggung Jawab',
      badge: '100% Legal',
      description: 'Limbah puing dan sampah renovasi dibuang ke lokasi pematangan tanah proyek resmi atau Tempat Pembuangan Akhir (TPA) berizin. Kami menjamin tidak ada aksi buang liar di pinggir jalan umum atau lahan terlarang.',
      points: ['Bebas risiko denda lingkungan', 'Disposal ke lokasi urugan berizin', 'Bisa request surat jalan / bukti buang']
    },
    {
      icon: <Truck className="w-6 h-6 text-amber-500" />,
      title: 'Pilihan Armada Lengkap & Terawat',
      badge: 'Akses Fleksibel',
      description: 'Mulai dari Pick-up bak untuk gang sempit perumahan padat, Truk Engkel 4 roda untuk renovasi rumah, hingga Dump Truck Double 8 m³ dan Mini Excavator untuk proyek pengurugan dan clearing skala besar.',
      points: ['Bak dilengkapi terpal anti tumpah', 'Kondisi mesin & hidrolik prima', 'Tepat waktu sesuai jadwal']
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      title: 'Respon 1-2 Jam & Siap Kerja 24/7',
      badge: 'Same-Day Service',
      description: 'Armada kami siaga di pool pangkalan Jakarta, Tangerang, Depok, dan Bekasi. Siap melayani panggilan dadakan di hari yang sama, jadwal hari libur/Minggu, maupun shift malam untuk loading dock mall dan gedung perkantoran.',
      points: ['Armada tiba dalam 1-2 jam', 'Siap kerja hari Minggu & libur nasional', 'Bisa shift malam untuk mall & ruko']
    },
    {
      icon: <BadgePercent className="w-6 h-6 text-amber-500" />,
      title: 'Harga All-In Transparan & Bisa Nego',
      badge: 'Tanpa Biaya Siluman',
      description: 'Biaya yang kami sepakati di awal via WhatsApp sudah mencakup sewa armada, bensin, sopir, tenaga muat, dan retribusi buang. Tidak ada pungutan liar atau biaya siluman saat armada tiba di lokasi proyek Anda.',
      points: ['Harga fix tanpa biaya siluman', 'Bisa nego untuk volume >3 rit', 'Paket langganan khusus kontraktor']
    }
  ];

  return (
    <section id="keunggulan" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-600 uppercase mb-2">
            <span>KEUNGGULAN KAMI</span>
            <span aria-hidden="true">·</span>
            <span>MENGAPA MEMILIH GILANG BUANG PUING</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
            Standar Kerja Lebih Bersih, Lebih Cepat, dan Bertanggung Jawab
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Kami memahami betapa menjengkelkannya tumpukan puing yang mengganggu kenyamanan rumah dan tetangga. Inilah komitmen layanan yang membuat ratusan pemilik hunian dan kontraktor mempercayai kami.
          </p>
        </div>

        {/* 6 Advantages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-50 rounded-2xl p-6 sm:p-7 border border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white rounded-xl shadow-2xs border border-neutral-100 group-hover:bg-amber-50 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100/80 px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2.5 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200/80 space-y-1.5">
                {item.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-xs text-neutral-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 bg-neutral-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>Butuh Armada Buang Puing Hari Ini Juga?</span>
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl">
              Cukup kirimkan foto puing dan alamat Anda via WhatsApp. Tim kami siap memberikan estimasi ritase akurat dan mengirim armada terdekat.
            </p>
          </div>
          <a
            href={COMPANY_INFO.whatsappUrl('Halo Mas Gilang, saya ingin order jasa buang puing sekarang.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shrink-0 whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4.5 h-4.5 text-emerald-800" />
            <span>Order Cepat via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
