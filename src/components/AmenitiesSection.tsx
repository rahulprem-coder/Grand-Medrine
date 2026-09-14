import React from 'react';
import {
  Wind,
  Zap,
  Compass,
  Car,
  Key,
  UtensilsCrossed,
  Bed,
  Sparkles,
  Check
} from 'lucide-react';
import { AMENITIES_DATA } from '../data/grandMedrineData';

export const AmenitiesSection: React.FC = () => {
  const getAmenityIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-[#243B2D]' };
    switch (iconName) {
      case 'Wind':
        return <Wind {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'Car':
        return <Car {...props} />;
      case 'Key':
        return <Key {...props} />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed {...props} />;
      case 'Bed':
        return <Bed {...props} />;
      case 'Sparkle':
        return <Sparkles {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="amenities" className="py-20 sm:py-28 bg-[#F7F3EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#B8A27C]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#77766E]">
              HOSPITALITY & COMFORT
            </span>
            <span className="w-8 h-px bg-[#B8A27C]" />
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-[#252721] font-normal mb-4">
            Everything You Need For A Memorable Event
          </h2>

          <p className="text-sm sm:text-base text-[#77766E] font-light leading-relaxed">
            Every convenience at Grand Medrine is thoughtfully arranged so hosts and esteemed
            guests celebrate with absolute peace of mind.
          </p>
        </div>

        {/* 8 Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES_DATA.map((amenity, index) => (
            <div
              key={amenity.id}
              className="rounded-2xl bg-[#FCFAF6] border border-[#E5DED3] p-6 flex flex-col justify-between hover:border-[#D8C5A5] hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#F1EAE0] border border-[#D8C5A5]/60 flex items-center justify-center">
                    {getAmenityIcon(amenity.iconName)}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F1EAE0] text-[#77766E]">
                    {amenity.category}
                  </span>
                </div>

                <h3 className="font-serif-title text-xl text-[#252721] font-medium mb-2">
                  {amenity.title}
                </h3>

                <p className="text-xs text-[#5D5E56] font-light leading-relaxed">
                  {amenity.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E5DED3]/60 flex items-center gap-1.5 text-[11px] font-medium text-[#243B2D]">
                <Check className="w-3.5 h-3.5 text-[#B8A27C]" />
                <span>Complimentary Inclusion</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
