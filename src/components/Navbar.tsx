import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Layanan', href: '#layanan' },
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Tentang Kami', href: '#tentang-kami' },
    { label: 'Proses Kerja', href: '#proses' },
    { label: 'Area Layanan', href: '#area' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Brand title wordmark */}
          <a href="#" className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group">
            <div className="w-10 h-10 rounded-lg bg-amber-500 text-neutral-950 flex items-center justify-center font-extrabold text-xl shadow-xs group-hover:bg-amber-400 transition-colors">
              G
            </div>
            <span className="text-xl font-bold tracking-tight text-neutral-900 group-hover:text-amber-600 transition-colors">
              Gilang Buang Puing
            </span>
          </a>

          {/* Zone 2: 4-5 single-line nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-neutral-950 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={COMPANY_INFO.whatsappUrl('Halo Mas Gilang, saya ingin konsultasi jasa buang puing.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4.5 py-2.5 text-xs sm:text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-800" />
              <span>Hubungi WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2">
            <a
              href={COMPANY_INFO.whatsappUrl('Halo Mas Gilang, saya ingin konsultasi buang puing.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-800" />
              <span>Chat WhatsApp Langsung</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
            >
              <span>Formulir Permintaan Penawaran</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
