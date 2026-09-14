import React from 'react';
import { Maximize2, Users, Clock, Zap, Train } from 'lucide-react';
import { VENUE_HIGHLIGHTS } from '../data/grandMedrineData';

export const VenueHighlights: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Maximize2':
        return <Maximize2 className="w-5 h-5 text-[#B8A27C]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#B8A27C]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#B8A27C]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#B8A27C]" />;
      case 'Train':
        return <Train className="w-5 h-5 text-[#B8A27C]" />;
      default:
        return <Maximize2 className="w-5 h-5 text-[#B8A27C]" />;
    }
  };

  return (
    <section className="bg-[#F1EAE0] py-12 border-y border-[#E5DED3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E5DED3]">
          {VENUE_HIGHLIGHTS.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-3 ${
                index > 0 ? 'pt-4 sm:pt-0' : ''
              } ${index === 4 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <div className="w-12 h-12 rounded-full bg-[#FCFAF6] border border-[#D8C5A5]/70 flex items-center justify-center mb-3 shadow-xs">
                {getIcon(item.iconName)}
              </div>

              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#243B2D]">
                  {item.value}
                </span>
                <span className="text-xs font-medium text-[#77766E]">
                  {item.unit}
                </span>
              </div>

              <h4 className="text-xs sm:text-sm font-semibold text-[#252721] mb-0.5">
                {item.label}
              </h4>
              <p className="text-[11px] text-[#77766E] max-w-[170px] leading-tight">
                {item.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
