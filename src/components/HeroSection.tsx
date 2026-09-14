import React from 'react';
import { ArrowRight, Phone, Users, Maximize2, Wind, Zap, Sparkles, Star } from 'lucide-react';
import { VENUE_INFO, IMAGES } from '../data/grandMedrineData';
import { BotanicalDecoration } from './BotanicalDecoration';
import { GoogleGIcon } from './GoogleReviewsSection';

interface HeroSectionProps {
  onOpenPlanModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPlanModal }) => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#F7F3EC]"
    >
      {/* Subtle Botanical Leaf Flourish at top left and bottom right */}
      <div className="absolute top-20 -left-6 pointer-events-none opacity-40 hidden md:block">
        <BotanicalDecoration variant="branch-right" className="w-36 h-36" color="#B8A27C" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Typography & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#B8A27C]" />
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#77766E]">
                GRAND MEDRINE BANQUET HALL
              </span>
            </div>

            {/* Main Heading with Italic Accent */}
            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl text-[#252721] font-normal leading-[1.08] mb-4">
              We Create, <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#243B2D]">
                You Celebrate
              </span>
            </h1>

            {/* Supporting Line */}
            <p className="text-base sm:text-lg font-medium text-[#243B2D] mb-3 tracking-tight">
              Premium Celebrations At The Heart of Rohtak
            </p>

            {/* Google Reviews Badge */}
            <div className="mb-4">
              <a
                href="#reviews"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCFAF6] border border-[#D8C5A5] shadow-xs hover:border-[#243B2D] transition-colors"
                title="Read 208+ Google Customer Reviews"
              >
                <GoogleGIcon className="w-4 h-4" />
                <div className="flex items-center text-[#FBBC05]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#243B2D]">4.7</span>
                <span className="text-xs text-[#77766E]">
                  • 208+ Google Reviews
                </span>
              </a>
            </div>

            {/* Narrative Paragraph */}
            <p className="text-sm sm:text-base text-[#5D5E56] font-light leading-relaxed mb-8 max-w-xl">
              Welcome to Grand Medrine, Rohtak’s distinguished destination for royal weddings,
              cherished pre-wedding rituals, corporate conferences, and joyous social milestones.
              Experience 5,100 sq. ft. of centrally air-conditioned splendor, Vastu-compliant elegance,
              and heartfelt hospitality crafted to make every moment unforgettable.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <button
                onClick={onOpenPlanModal}
                id="hero-plan-event-cta"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#243B2D] hover:bg-[#182A20] text-[#F7F3EC] text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-md hover:shadow-lg hover:translate-y-[-1px] cursor-pointer"
              >
                <span>Plan Your Event</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3.5 rounded-full border border-[#D8C5A5] hover:border-[#243B2D] text-[#252721] text-xs sm:text-sm font-medium bg-[#FCFAF6] hover:bg-[#F1EAE0] transition-colors"
              >
                <span>Explore Our Venue</span>
              </a>

              <a
                href={`tel:${VENUE_INFO.phone}`}
                className="inline-flex items-center gap-2 text-xs font-medium text-[#77766E] hover:text-[#243B2D] px-3 py-2 transition-colors"
                title="Call 24/7 Desk"
              >
                <Phone className="w-3.5 h-3.5 text-[#B8A27C]" />
                <span>Call {VENUE_INFO.displayPhone}</span>
              </a>
            </div>

            {/* Trust Indicators Row */}
            <div className="pt-6 border-t border-[#E5DED3] grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F1EAE0] border border-[#D8C5A5]/60 flex items-center justify-center text-[#243B2D] shrink-0">
                  <Maximize2 className="w-4 h-4 text-[#243B2D]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#252721]">5,100 sq. ft.</span>
                  <span className="text-[11px] text-[#77766E]">Carpet Area</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F1EAE0] border border-[#D8C5A5]/60 flex items-center justify-center text-[#243B2D] shrink-0">
                  <Users className="w-4 h-4 text-[#243B2D]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#252721]">Up to 300</span>
                  <span className="text-[11px] text-[#77766E]">Guest Capacity</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F1EAE0] border border-[#D8C5A5]/60 flex items-center justify-center text-[#243B2D] shrink-0">
                  <Wind className="w-4 h-4 text-[#243B2D]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#252721]">Central AC</span>
                  <span className="text-[11px] text-[#77766E]">Year-Round</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F1EAE0] border border-[#D8C5A5]/60 flex items-center justify-center text-[#243B2D] shrink-0">
                  <Zap className="w-4 h-4 text-[#243B2D]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#252721]">100% Backup</span>
                  <span className="text-[11px] text-[#77766E]">Genset Powered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Photography with Soft Arch Frame & Floating Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Decorative Border Frame */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-[#D8C5A5]/60 pointer-events-none -rotate-1 hidden sm:block" />

              {/* Main Image Container with Elegant Rounded Top Arches */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#E5DED3] bg-[#F1EAE0] aspect-[4/3] sm:aspect-[14/11]">
                <img
                  src={IMAGES.heroBanner}
                  alt="Grand Medrine Banquet Hall Interior with Crystal Chandeliers and Royal Stage"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Gentle Ambient Warm Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#182A20]/40 via-transparent to-black/10 pointer-events-none" />

                {/* Bottom Pill Badge on Image */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-[#F7F3EC] backdrop-blur-md bg-[#182A20]/75 border border-[#D8C5A5]/40 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#D8C5A5]" />
                    <div>
                      <p className="text-xs font-semibold tracking-wide">
                        Main Royal Banquet Hall
                      </p>
                      <p className="text-[10px] text-[#D8C5A5]/90">
                        Pillar-Free Elegance & Crystal Chandeliers
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#F7F3EC] px-2.5 py-1 rounded-full bg-[#243B2D]/80 border border-[#D8C5A5]/50">
                    5,100 sq.ft.
                  </span>
                </div>
              </div>

              {/* Floating Editorial Callout Badge (Top Right) */}
              <div className="absolute -top-5 -right-2 sm:-right-6 bg-[#FCFAF6] border border-[#D8C5A5] rounded-2xl p-4 shadow-lg max-w-[200px] sm:max-w-[220px] transform rotate-1 hidden sm:block">
                <p className="text-[10px] uppercase tracking-widest text-[#77766E] font-semibold mb-1">
                  Royal Standard
                </p>
                <p className="font-serif-title text-base text-[#252721] italic leading-tight mb-2">
                  "Your Special Day Deserves Royal Grandeur"
                </p>
                <div className="flex items-center gap-1 text-[11px] text-[#243B2D] font-medium">
                  <span>Vastu Compliant</span>
                  <span>•</span>
                  <span>Rohtak Junction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
