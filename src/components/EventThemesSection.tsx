import React from 'react';
import { Users, Sparkles, ArrowRight } from 'lucide-react';
import { EVENT_THEMES } from '../data/grandMedrineData';

interface EventThemesSectionProps {
  onOpenPlanModal: (themeName?: string) => void;
}

export const EventThemesSection: React.FC<EventThemesSectionProps> = ({ onOpenPlanModal }) => {
  return (
    <section id="events" className="py-20 sm:py-28 bg-[#F1EAE0] relative border-t border-[#E5DED3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#B8A27C]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#77766E]">
              SIGNATURE EXPERIENCES
            </span>
            <span className="w-8 h-px bg-[#B8A27C]" />
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-[#252721] font-normal mb-4">
            Every Occasion Deserves Its Own Moment
          </h2>

          <p className="text-sm sm:text-base text-[#77766E] font-light leading-relaxed">
            From regal wedding stages to high-energy celebratory dance floors and formal executive
            summits, explore how we transform Grand Medrine for your special milestone.
          </p>
        </div>

        {/* Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENT_THEMES.map((theme, index) => (
            <div
              key={theme.id}
              className={`group rounded-2xl sm:rounded-3xl overflow-hidden bg-[#FCFAF6] border border-[#E5DED3] flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-[#D8C5A5] transition-all duration-300 ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image with zoom on hover */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E5DED3]">
                <img
                  src={theme.image}
                  alt={theme.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

                {/* Badges on Top */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-[#FCFAF6]/90 backdrop-blur-md text-[#243B2D] border border-[#D8C5A5]/60">
                    {theme.category}
                  </span>

                  <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-[#F7F3EC] flex items-center gap-1 border border-white/20">
                    <Users className="w-3 h-3" />
                    <span>{theme.capacity}</span>
                  </span>
                </div>

                {/* Tagline at Bottom of Image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-xs text-[#D8C5A5] font-medium tracking-wide">
                    {theme.tagline}
                  </p>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif-title text-2xl text-[#252721] font-medium mb-2 group-hover:text-[#243B2D] transition-colors">
                    {theme.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5D5E56] font-light leading-relaxed mb-5">
                    {theme.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5DED3] flex items-center justify-between">
                  <button
                    onClick={() => onOpenPlanModal(theme.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#243B2D] hover:text-[#182A20] group-hover:underline cursor-pointer"
                  >
                    <span>Enquire This Theme</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-1 text-[11px] text-[#B8A27C]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Grand Medrine</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
