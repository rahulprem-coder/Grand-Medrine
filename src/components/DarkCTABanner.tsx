import React from 'react';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { VENUE_INFO, IMAGES } from '../data/grandMedrineData';

interface DarkCTABannerProps {
  onOpenPlanModal: () => void;
}

export const DarkCTABanner: React.FC<DarkCTABannerProps> = ({ onOpenPlanModal }) => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#182A20] text-[#F7F3EC] overflow-hidden">
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.nightFacade}
          alt="Grand Medrine Illuminated Night Facade on Sonipat Road Rohtak"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#182A20] via-[#182A20]/90 to-[#182A20]/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Handwritten Accent */}
        <p className="font-script text-3xl sm:text-4xl text-[#D8C5A5] mb-3">
          Together is a beautiful place to be
        </p>

        {/* Main Title */}
        <h2 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-normal text-[#FCFAF6] leading-tight mb-6">
          Your Celebration Starts Here
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-[#D8C5A5]/90 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Whether you are planning a grand wedding celebration, an engagement reception, or a
          prestigious corporate gathering, our team at Grand Medrine is ready to make it extraordinary.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenPlanModal}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#D8C5A5] hover:bg-[#cbb692] text-[#182A20] text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-lg hover:shadow-xl hover:scale-102 cursor-pointer"
          >
            <span>Plan Your Event</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${VENUE_INFO.phone}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-[#D8C5A5]/60 hover:border-[#D8C5A5] text-[#FCFAF6] hover:bg-[#243B2D]/60 text-xs sm:text-sm font-medium transition-colors"
          >
            <Phone className="w-4 h-4 text-[#D8C5A5]" />
            <span>Call +91 98960 36463</span>
          </a>
        </div>

        {/* Supporting Specs Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#D8C5A5]/80">
          <span>5,100 sq. ft. Pillar-Free Space</span>
          <span className="hidden sm:inline">•</span>
          <span>Centrally Air-Conditioned</span>
          <span className="hidden sm:inline">•</span>
          <span>100% Genset Power Backup</span>
          <span className="hidden sm:inline">•</span>
          <span>Rohtak Junction Landmark</span>
        </div>
      </div>
    </section>
  );
};
