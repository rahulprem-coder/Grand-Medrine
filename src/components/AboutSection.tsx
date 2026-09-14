import React from 'react';
import { ArrowRight, Crown, Users, Sparkles, Utensils, Award, MapPin } from 'lucide-react';
import { VENUE_INFO, BRAND_PILLARS, IMAGES } from '../data/grandMedrineData';
import { BotanicalDecoration } from './BotanicalDecoration';

interface AboutSectionProps {
  onOpenPlanModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenPlanModal }) => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown':
        return <Crown className="w-5 h-5 text-[#243B2D]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#243B2D]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#243B2D]" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-[#243B2D]" />;
      default:
        return <Award className="w-5 h-5 text-[#243B2D]" />;
    }
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F1EAE0] relative overflow-hidden border-t border-[#E5DED3]">
      {/* Decorative Botanical Flourish */}
      <div className="absolute top-10 right-4 pointer-events-none opacity-30 hidden lg:block">
        <BotanicalDecoration variant="branch-right" className="w-40 h-40" color="#B8A27C" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Featured Stage Photo with Handwritten Callout */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Subtle Offset Frame */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-[#D8C5A5] pointer-events-none rotate-1 hidden sm:block" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#E5DED3] bg-[#FCFAF6] aspect-[4/3] sm:aspect-[5/4]">
                <img
                  src={IMAGES.royalStage}
                  alt="Royal Wedding Stage Setup with Golden Throne and Floral Backdrop at Grand Medrine"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Ambient Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#182A20]/45 via-transparent to-black/10 pointer-events-none" />

                {/* Location Advantage Tag on Image */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FCFAF6]/90 backdrop-blur-md border border-[#D8C5A5]/60 text-xs font-semibold text-[#243B2D]">
                  <MapPin className="w-3.5 h-3.5 text-[#B8A27C]" />
                  <span>30m from Rohtak Junction</span>
                </div>
              </div>

              {/* Handwritten Romantic Callout in Script Font */}
              <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-[#FCFAF6] border border-[#D8C5A5] rounded-2xl p-4 sm:p-5 shadow-lg max-w-[260px] transform -rotate-2">
                <span className="font-script text-2xl sm:text-3xl text-[#243B2D] block leading-tight">
                  Because every detail matters...
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#77766E] font-medium mt-1 block">
                  Grand Medrine Hospitality
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Brand Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#B8A27C]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#77766E]">
                ABOUT GRAND MEDRINE
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-[#252721] font-normal leading-tight mb-6">
              More Than A Venue, <br />
              <span className="italic font-normal text-[#243B2D]">
                A Place For Beautiful Celebrations
              </span>
            </h2>

            {/* Brand Pull Quote */}
            <div className="relative pl-5 border-l-2 border-[#B8A27C] mb-6 py-1">
              <p className="font-serif-title text-base sm:text-lg italic text-[#252721] leading-relaxed">
                {VENUE_INFO.pullQuote}
              </p>
              <span className="text-xs uppercase tracking-widest text-[#77766E] font-medium mt-2 block">
                — Grand Medrine Founding Philosophy
              </span>
            </div>

            {/* Narrative Paragraph */}
            <p className="text-xs sm:text-sm text-[#5D5E56] font-light leading-relaxed mb-8">
              Strategically situated on Sonipat Road near Shiela Cineplex, just 30 metres from
              Rohtak Junction railway station, Grand Medrine combines unmatched accessibility with
              exceptional event execution. With 5,100 sq. ft. of centrally air-conditioned hall
              space, complete power reliability, and Vastu-harmonized proportions, we make weddings,
              corporate galas, and family milestones effortlessly grand.
            </p>

            {/* 4 Brand Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
              {BRAND_PILLARS.map((pillar) => (
                <div
                  key={pillar.id}
                  className="p-4 rounded-xl bg-[#FCFAF6] border border-[#E5DED3] hover:border-[#D8C5A5] transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#F1EAE0] border border-[#D8C5A5]/60 flex items-center justify-center mb-2.5">
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  <h4 className="text-sm font-semibold text-[#252721] mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-[11px] text-[#77766E] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div>
              <button
                onClick={onOpenPlanModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#243B2D] hover:bg-[#182A20] text-[#F7F3EC] text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Discover Grand Medrine</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
