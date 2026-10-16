import React, { useState, useId } from 'react';
import { Calculator, Truck, Users, ShieldAlert, CheckCircle2, RefreshCw } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { SERVICES, FLEET_OPTIONS, COMPANY_INFO } from '../data/content';

interface CostEstimatorProps {
  selectedServiceId: string;
  onSelectServiceId: (id: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({
  selectedServiceId,
  onSelectServiceId,
}) => {
  const [fleetType, setFleetType] = useState<'pickup' | 'engkel' | 'dump-double' | 'excavator'>('engkel');
  const [quantity, setQuantity] = useState<number>(2); // rit / volume
  const [laborOption, setLaborOption] = useState<'none' | '1-kuli' | '2-kuli'>('2-kuli');
  const [sacksOption, setSacksOption] = useState<'0' | '25' | '50'>('0');
  const [locationArea, setLocationArea] = useState<string>('Jakarta Selatan');

  const quantityInputId = useId();
  const locationSelectId = useId();

  // Pricing rules (IDR)
  const baseRatePerRit: Record<string, number> = {
    pickup: 350000,
    engkel: 650000,
    'dump-double': 1150000,
    excavator: 1600000, // per shift/day
  };

  const laborCostPerRit: Record<string, number> = {
    none: 0,
    '1-kuli': 75000,
    '2-kuli': 150000,
  };

  const sacksCost: Record<string, number> = {
    '0': 0,
    '25': 75000,
    '50': 150000,
  };

  // Service multiplier or flat additions
  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const vehicleBase = baseRatePerRit[fleetType] * quantity;
  const laborTotal = laborCostPerRit[laborOption] * (fleetType === 'excavator' ? 1 : quantity);
  const sacksTotal = sacksCost[sacksOption];

  const estimatedTotal = vehicleBase + laborTotal + sacksTotal;

  const formatIDR = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const fleetNameMap: Record<string, string> = {
    pickup: 'Pick-up Bak (1.5 m³)',
    engkel: 'Truk Engkel 4 Roda (4 m³)',
    'dump-double': 'Dump Truck Double 6 Roda (7-8 m³)',
    excavator: 'Mini Excavator (PC50/PC75)',
  };

  const laborLabelMap: Record<string, string> = {
    none: 'Tanpa Kuli (Muat Sendiri)',
    '1-kuli': 'Driver + 1 Tenaga Muat',
    '2-kuli': 'Driver + 2 Tenaga Muat (Direkomendasikan)',
  };

  const handleSendToWhatsApp = () => {
    const message = `Halo Mas Gilang (Gilang Buang Puing), saya ingin estimasi & konsultasi biaya:
- Layanan: ${currentService.title}
- Pilihan Armada: ${fleetNameMap[fleetType]}
- Estimasi Jumlah: ${quantity} ${fleetType === 'excavator' ? 'Shift' : 'Rit'}
- Tenaga Muat: ${laborLabelMap[laborOption]}
- Kebutuhan Karung: ${sacksOption === '0' ? 'Tidak perlu' : `${sacksOption} lembar karung`}
- Lokasi Proyek: ${locationArea}
- Taksiran Total: ${formatIDR(estimatedTotal)}

Mohon konfirmasi ketersediaan jadwal armada dan info selanjutnya. Terima kasih!`;

    window.open(COMPANY_INFO.whatsappUrl(message), '_blank');
  };

  const handleReset = () => {
    setFleetType('engkel');
    setQuantity(2);
    setLaborOption('2-kuli');
    setSacksOption('0');
  };

  return (
    <section id="kalkulator" className="py-16 sm:py-24 bg-neutral-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
            <Calculator className="w-4 h-4" />
            <span>SIMULASI HARGA TRANSPARAN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Kalkulator Estimasi Biaya Buang Puing &amp; Armada
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            Dapatkan taksiran biaya instan sesuai pilihan armada, ritase, dan kebutuhan tenaga muat. Tanpa biaya tersembunyi!
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-neutral-800/80 rounded-2xl p-6 sm:p-8 border border-neutral-700/80 shadow-xl space-y-6">
            
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2.5">
                1. Pilih Jenis Layanan
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => onSelectServiceId(s.id)}
                    className={`p-2.5 text-left rounded-lg text-xs font-medium border transition-all ${
                      selectedServiceId === s.id
                        ? 'bg-amber-400 text-neutral-950 font-bold border-amber-400 shadow-xs'
                        : 'bg-neutral-900/60 text-neutral-300 border-neutral-700 hover:border-neutral-500'
                    }`}
                  >
                    <div className="line-clamp-2">{s.title.replace('Jasa ', '')}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Fleet Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2.5">
                2. Pilih Tipe Armada
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {FLEET_OPTIONS.map((fleet) => (
                  <button
                    key={fleet.id}
                    type="button"
                    onClick={() => setFleetType(fleet.id as any)}
                    className={`p-3 text-left rounded-xl border transition-all ${
                      fleetType === fleet.id
                        ? 'bg-neutral-700 text-white border-amber-400 ring-1 ring-amber-400'
                        : 'bg-neutral-900/60 text-neutral-300 border-neutral-700 hover:border-neutral-500'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold">{fleet.name.split('(')[0]}</span>
                      <span className="text-xs text-amber-400 font-mono font-semibold">
                        {fleet.ratePerRit.replace('Mulai ', '')}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-400 line-clamp-1">{fleet.capacity}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Quantity / Ritase */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor={quantityInputId} className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  3. Jumlah {fleetType === 'excavator' ? 'Shift Kerja' : 'Ritase (Muatan)'}
                </label>
                <div className="flex items-center bg-neutral-900 rounded-lg border border-neutral-700 p-1">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-md bg-neutral-800 text-neutral-200 hover:bg-neutral-700 flex items-center justify-center font-bold text-lg transition-colors"
                  >
                    -
                  </button>
                  <input
                    id={quantityInputId}
                    type="number"
                    min="1"
                    max="50"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full text-center bg-transparent text-white font-mono font-bold text-base focus:outline-hidden tabular-nums"
                  />
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-md bg-neutral-800 text-neutral-200 hover:bg-neutral-700 flex items-center justify-center font-bold text-lg transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-[11px] text-neutral-400 mt-1 block">
                  {fleetType === 'excavator' ? '1 Shift = 8 Jam Kerja' : '1 Rit = 1 Kali Angkut Penuh'}
                </span>
              </div>

              {/* Location Select */}
              <div>
                <label htmlFor={locationSelectId} className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  Wilayah / Kota Proyek
                </label>
                <select
                  id={locationSelectId}
                  value={locationArea}
                  onChange={(e) => setLocationArea(e.target.value)}
                  className="w-full h-12 bg-neutral-900 text-white border border-neutral-700 rounded-lg px-3 text-xs focus:ring-1 focus:ring-amber-400 focus:outline-hidden"
                >
                  <option value="Jakarta Selatan">Jakarta Selatan</option>
                  <option value="Jakarta Barat">Jakarta Barat</option>
                  <option value="Jakarta Timur">Jakarta Timur</option>
                  <option value="Jakarta Pusat">Jakarta Pusat</option>
                  <option value="Jakarta Utara">Jakarta Utara</option>
                  <option value="Tangerang Selatan (BSD/Bintaro/Ciputat)">Tangerang Selatan (BSD / Bintaro)</option>
                  <option value="Tangerang Kota & Sekitarnya">Tangerang Kota</option>
                  <option value="Depok & Cinere">Depok &amp; Cinere</option>
                  <option value="Bekasi Kota & Kabupaten">Bekasi</option>
                  <option value="Bogor / Sentul City">Bogor / Sentul</option>
                </select>
                <span className="text-[11px] text-neutral-400 mt-1 block">
                  Termasuk izin retribusi pembuangan legal
                </span>
              </div>
            </div>

            {/* Step 4: Labor & Sack options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-neutral-700/60">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  4. Tenaga Muat (Kuli Panggul)
                </label>
                <div className="space-y-1.5">
                  {[
                    { id: '2-kuli', label: 'Driver + 2 Kuli (Paling Cepat)' },
                    { id: '1-kuli', label: 'Driver + 1 Kuli' },
                    { id: 'none', label: 'Hanya Sopir (Muat Sendiri)' },
                  ].map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-center gap-2 p-2 rounded-lg border text-xs cursor-pointer transition-colors ${
                        laborOption === item.id
                          ? 'bg-neutral-700 border-amber-400 text-white'
                          : 'bg-neutral-900/50 border-neutral-700 text-neutral-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="labor"
                        checked={laborOption === item.id}
                        onChange={() => setLaborOption(item.id as any)}
                        className="text-amber-500 focus:ring-amber-400"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  5. Kebutuhan Karung Puing
                </label>
                <div className="space-y-1.5">
                  {[
                    { id: '0', label: 'Puing Curah / Karung Sendiri (Rp 0)' },
                    { id: '25', label: 'Tambah 25 Karung Puing (+Rp 75.000)' },
                    { id: '50', label: 'Tambah 50 Karung Puing (+Rp 150.000)' },
                  ].map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-center gap-2 p-2 rounded-lg border text-xs cursor-pointer transition-colors ${
                        sacksOption === item.id
                          ? 'bg-neutral-700 border-amber-400 text-white'
                          : 'bg-neutral-900/50 border-neutral-700 text-neutral-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="sacks"
                        checked={sacksOption === item.id}
                        onChange={() => setSacksOption(item.id as any)}
                        className="text-amber-500 focus:ring-amber-400"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-1">
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-neutral-400 hover:text-white inline-flex items-center gap-1 transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Pilihan</span>
              </button>
            </div>

          </div>

          {/* Result & Quote Summary Column */}
          <div className="lg:col-span-5 flex flex-col gap-5 sticky top-24">
            
            <div className="bg-gradient-to-b from-neutral-800 to-neutral-850 rounded-2xl p-6 sm:p-7 border border-neutral-700 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-700">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Estimasi Biaya Transparan
                </span>
                <span className="text-[11px] text-neutral-400">
                  {quantity} {fleetType === 'excavator' ? 'Shift' : 'Rit'} · {locationArea}
                </span>
              </div>

              {/* Total Display */}
              <div className="py-6">
                <span className="text-xs text-neutral-400 block mb-1">
                  Perkiraan Total Biaya (All-In):
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono tabular-nums">
                  {formatIDR(estimatedTotal)}
                </div>
                <p className="text-[11px] text-amber-300/80 mt-1.5 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Harga fleksibel, nego volume besar langsung di WhatsApp</span>
                </p>
              </div>

              {/* Line Items Breakdown */}
              <div className="space-y-2.5 pt-4 border-t border-neutral-700/80 text-xs">
                <div className="flex justify-between text-neutral-300">
                  <span>Armada ({fleetNameMap[fleetType]} × {quantity}):</span>
                  <span className="font-mono tabular-nums text-white">{formatIDR(vehicleBase)}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Tenaga Muat ({laborLabelMap[laborOption].split('(')[0]}):</span>
                  <span className="font-mono tabular-nums text-white">{formatIDR(laborTotal)}</span>
                </div>
                {sacksTotal > 0 && (
                  <div className="flex justify-between text-neutral-300">
                    <span>Supply Karung ({sacksOption} pcs):</span>
                    <span className="font-mono tabular-nums text-white">{formatIDR(sacksTotal)}</span>
                  </div>
                )}
                <div className="flex justify-between text-neutral-300">
                  <span>Retribusi TPA &amp; Izin Buang:</span>
                  <span className="text-amber-400 font-medium">Termasuk (Gratis)</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Sapu Bersih Area Muat:</span>
                  <span className="text-amber-400 font-medium">Termasuk (Gratis)</span>
                </div>
              </div>

              {/* WhatsApp Action Button */}
              <div className="mt-7">
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-neutral-950 font-extrabold text-sm rounded-xl shadow-lg transition-all"
                >
                  <WhatsAppIcon className="w-4.5 h-4.5 text-emerald-800" />
                  <span>Kirim Rincian Estimasi ke WhatsApp</span>
                </button>
                <span className="text-[11px] text-neutral-400 text-center block mt-2">
                  Langsung terhubung dengan Mas Gilang untuk konfirmasi jadwal armada.
                </span>
              </div>
            </div>

            {/* Guarantee Note Card */}
            <div className="bg-neutral-800/50 rounded-xl p-4 border border-neutral-700/60 text-xs text-neutral-400 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-neutral-200 block mb-0.5">Jaminan Tidak Ada Pungli / Biaya Siluman</strong>
                Pekerja dan sopir kami profesional. Biaya yang disepakati adalah biaya final hingga sampah puing terbuang tuntas ke lokasi resmi.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
