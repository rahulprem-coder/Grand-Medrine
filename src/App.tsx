import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VenueHighlights } from './components/VenueHighlights';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { EventThemesSection } from './components/EventThemesSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { DarkCTABanner } from './components/DarkCTABanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PlanEventModal } from './components/PlanEventModal';
import { WriteReviewModal } from './components/WriteReviewModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { VENUE_INFO } from './data/grandMedrineData';
import { GalleryPhoto } from './types';

export default function App() {
  const [planModalOpen, setPlanModalOpen] = useState(false);
  const [writeReviewModalOpen, setWriteReviewModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>();
  const [selectedLightboxPhoto, setSelectedLightboxPhoto] = useState<GalleryPhoto | null>(null);

  const handleOpenPlanModal = (serviceName?: string) => {
    setSelectedServiceForModal(serviceName);
    setPlanModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#252721] flex flex-col selection:bg-[#243B2D] selection:text-[#F7F3EC]">
      {/* Sticky Luxury Ivory Navbar */}
      <Navbar onOpenPlanModal={() => handleOpenPlanModal()} />

      <main className="flex-grow">
        {/* Editorial Split Hero Section */}
        <HeroSection onOpenPlanModal={() => handleOpenPlanModal()} />

        {/* Venue Specifications & Key Highlights */}
        <VenueHighlights />

        {/* About Grand Medrine & Brand Pillars */}
        <AboutSection onOpenPlanModal={() => handleOpenPlanModal()} />

        {/* Services & Offerings Cards */}
        <ServicesSection onOpenPlanModal={handleOpenPlanModal} />

        {/* 8 Essential Amenities Grid */}
        <AmenitiesSection />

        {/* Signature Event Themes & Experiences */}
        <EventThemesSection onOpenPlanModal={handleOpenPlanModal} />

        {/* Visual Repertoire & Gallery Grid with Category Filters */}
        <GallerySection onSelectPhoto={(photo) => setSelectedLightboxPhoto(photo)} />

        {/* Google Reviews Showcase with 4.7 Rating, Filters & Breakdown */}
        <GoogleReviewsSection onOpenWriteReviewModal={() => setWriteReviewModalOpen(true)} />

        {/* Client Testimonials Carousel */}
        <TestimonialsSection />

        {/* Deep Forest Green Contrast CTA Banner */}
        <DarkCTABanner onOpenPlanModal={() => handleOpenPlanModal()} />

        {/* Contact Information, Directions, and Interactive Booking Enquiry */}
        <ContactSection />
      </main>

      {/* Luxury Footer with Real Details and Socials */}
      <Footer />

      {/* Floating Instant Contact Buttons (Bottom Right on Desktop & Mobile) */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-2.5">
        <a
          href="https://wa.me/919896036463?text=Hello%20Grand%20Medrine!%20I%20would%20like%20to%20enquire%20about%20event%20booking."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 transition-all text-xs font-semibold cursor-pointer"
          title="Instant WhatsApp Enquiry"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>

        <a
          href={`tel:${VENUE_INFO.phone}`}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#243B2D] text-[#F7F3EC] border border-[#D8C5A5] shadow-xl hover:scale-105 transition-all text-xs font-semibold cursor-pointer"
          title="Direct Call Hotline +91 98960 36463"
        >
          <Phone className="w-4 h-4 text-[#D8C5A5]" />
          <span className="hidden sm:inline">Call +91 98960 36463</span>
        </a>
      </div>

      {/* Modals */}
      <PlanEventModal
        isOpen={planModalOpen}
        onClose={() => setPlanModalOpen(false)}
        preselectedService={selectedServiceForModal}
      />

      <WriteReviewModal
        isOpen={writeReviewModalOpen}
        onClose={() => setWriteReviewModalOpen(false)}
      />

      <ImageLightboxModal
        photo={selectedLightboxPhoto}
        onClose={() => setSelectedLightboxPhoto(null)}
        onOpenPlanModal={() => handleOpenPlanModal()}
      />
    </div>
  );
}
