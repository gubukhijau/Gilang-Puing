import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { AboutUsSection } from './components/AboutUsSection';
import { WorkflowSection } from './components/WorkflowSection';
import { CoverageAreaSection } from './components/CoverageAreaSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CallToActionSection } from './components/CallToActionSection';
import { Footer } from './components/Footer';
import { QuickOrderModal } from './components/QuickOrderModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SERVICES } from './data/content';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const handleOpenOrderModal = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 selection:bg-amber-400 selection:text-neutral-950">
      {/* Navigation */}
      <Navbar onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* Main Landing Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenOrderModal={() => handleOpenOrderModal()} />

        {/* 6 Specialized Services */}
        <ServicesSection />

        {/* Keunggulan Layanan */}
        <AdvantagesSection />

        {/* Tentang Kami */}
        <AboutUsSection />

        {/* 4-Step Working Flow & Guarantees */}
        <WorkflowSection />

        {/* Coverage Areas across Jabodetabek */}
        <CoverageAreaSection />

        {/* Testimonials & Proof */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Call to Action Section */}
        <CallToActionSection onOpenOrderModal={() => handleOpenOrderModal()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking & Quotation Modal */}
      <QuickOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialServiceId={selectedServiceId}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
