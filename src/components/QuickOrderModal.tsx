import React, { useState } from 'react';
import { X, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { SERVICES, COMPANY_INFO } from '../data/content';

interface QuickOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const QuickOrderModal: React.FC<QuickOrderModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [serviceId, setServiceId] = useState(initialServiceId || SERVICES[0].id);
  const [estimatedRit, setEstimatedRit] = useState('1 - 2 Rit');
  const [notes, setNotes] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];

  const generateMessage = () => {
    return `*PEMESANAN / PERMINTAAN PENAWARAN - GILANG BUANG PUING*
Nama: ${name || '-'}
No. HP: ${phone || '-'}
Alamat / Wilayah: ${address || '-'}
Jenis Layanan: ${currentService.title}
Estimasi Muatan: ${estimatedRit}
Catatan Tambahan: ${notes || 'Mohon dicek jadwal armadanya. Terima kasih.'}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = generateMessage();
    window.open(COMPANY_INFO.whatsappUrl(msg), '_blank');
    setIsSubmitted(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateMessage());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-neutral-200 animate-in fade-in zoom-in-95 duration-150 my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-900 text-white">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span>Formulir Pemesanan &amp; Penawaran</span>
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              Respon cepat armada dalam 1-2 jam ke lokasi Anda
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-neutral-900 mb-2">Permintaan Berhasil Dibuat!</h4>
            <p className="text-xs sm:text-sm text-neutral-600 mb-6 leading-relaxed">
              Jendela WhatsApp telah dibuka untuk menghubungkan Anda langsung dengan Mas Gilang. Jika belum terbuka, silakan klik tombol di bawah ini:
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={COMPANY_INFO.whatsappUrl(generateMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-800" />
                <span>Buka Chat WhatsApp Sekarang</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold text-xs rounded-xl transition-colors"
              >
                Tutup Jendela
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Nama Pemesan / Kontraktor <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Pak Hendra / Ibu Ratna"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:border-amber-500 focus:bg-white focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Nomor WhatsApp / HP <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0812xxxxxxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:border-amber-500 focus:bg-white focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Pilihan Layanan
                </label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-xs focus:outline-hidden focus:border-amber-500 focus:bg-white"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Alamat / Patokan Lokasi Proyek <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Jl. Kemang Timur No. 12, Jakarta Selatan (Masuk gang muat pick-up)"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:border-amber-500 focus:bg-white focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Estimasi Muatan / Ritase
                </label>
                <select
                  value={estimatedRit}
                  onChange={(e) => setEstimatedRit(e.target.value)}
                  className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-xs focus:outline-hidden focus:border-amber-500 focus:bg-white"
                >
                  <option value="1 Rit (Pick-up / Engkel)">1 Rit</option>
                  <option value="2 - 3 Rit">2 - 3 Rit</option>
                  <option value="4 - 7 Rit">4 - 7 Rit</option>
                  <option value="8 Rit ke atas (Proyek Besar)">8 Rit ke atas (Proyek Besar)</option>
                  <option value="Belum tahu (Minta dibantu taksir via foto)">Belum tahu (Bantu taksir via foto)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Catatan Akses Jalan
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Truk engkel muat masuk"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-xs focus:outline-hidden focus:border-amber-500 focus:bg-white"
                />
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
              <button
                type="submit"
                className="w-full sm:flex-1 py-3 px-4 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-neutral-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-800" />
                <span>Kirim Pesanan ke WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleCopy}
                className="w-full sm:w-auto py-3 px-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                title="Salin Rincian Pesanan"
              >
                {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{isCopied ? 'Tersalin' : 'Salin'}</span>
              </button>
            </div>

            <p className="text-[11px] text-neutral-400 text-center">
              Privasi aman. Data Anda hanya digunakan untuk keperluan konfirmasi pesanan dan survey armada.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
