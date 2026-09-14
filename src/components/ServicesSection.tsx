import React, { useState } from 'react';
import {
  HeartHandshake,
  Briefcase,
  PartyPopper,
  Palette,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA } from '../data/grandMedrineData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenPlanModal: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenPlanModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    const iconProps = { className: 'w-6 h-6 text-[#243B2D]' };
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake {...iconProps} />;
      case 'Briefcase':
        return <Briefcase {...iconProps} />;
      case 'PartyPopper':
        return <PartyPopper {...iconProps} />;
      case 'Palette':
        return <Palette {...iconProps} />;
      case 'ShieldCheck':
        return <ShieldCheck {...iconProps} />;
      default:
        return <Sparkles {...iconProps} />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F7F3EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#B8A27C]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#77766E]">
              WHAT WE OFFER
            </span>
            <span className="w-8 h-px bg-[#B8A27C]" />
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-[#252721] font-normal mb-4">
            Celebrations, Crafted With Care
          </h2>

          <p className="text-sm sm:text-base text-[#77766E] font-light leading-relaxed">
            From majestic wedding nuptials to high-profile business summits, Grand Medrine pairs
            architectural beauty with flawless execution and heartfelt hospitality.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className={`group relative rounded-2xl bg-[#FCFAF6] border border-[#E5DED3] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-[#D8C5A5] hover:-translate-y-1 ${
                index === 3 || index === 4 ? 'lg:col-span-1 md:col-span-1' : ''
              }`}
            >
              <div>
                {/* Header with Icon and Category */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F1EAE0] border border-[#D8C5A5]/60 flex items-center justify-center group-hover:bg-[#243B2D] transition-colors duration-300">
                    <span className="group-hover:[&>svg]:text-[#F7F3EC] transition-colors duration-300">
                      {getServiceIcon(service.iconName)}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#B8A27C]">
                    0{index + 1}
                  </span>
                </div>

                {/* Title and Subtitle */}
                <h3 className="font-serif-title text-2xl text-[#252721] font-medium mb-1.5 group-hover:text-[#243B2D] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-[#B8A27C] mb-3">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5D5E56] font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Highlights */}
                <ul className="space-y-2 mb-6 pt-4 border-t border-[#E5DED3]/60">
                  {service.highlights.slice(0, 3).map((hl, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#55564E]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#243B2D] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA on Card */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => onOpenPlanModal(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#243B2D] group-hover:text-[#182A20] cursor-pointer"
                >
                  <span>Enquire For This</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <span className="text-[10px] text-[#77766E] uppercase tracking-wider">
                  Grand Medrine
                </span>
              </div>
            </div>
          ))}

          {/* Quick Custom Consultation Card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#243B2D] to-[#182A20] text-[#F7F3EC] p-7 sm:p-8 flex flex-col justify-between border border-[#243B2D] shadow-md">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FCFAF6]/10 border border-[#D8C5A5]/40 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-[#D8C5A5]" />
              </div>

              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D8C5A5] mb-2 block">
                Tailored Occasions
              </span>

              <h3 className="font-serif-title text-2xl font-medium text-[#FCFAF6] mb-3">
                Have a Unique Vision in Mind?
              </h3>

              <p className="text-xs sm:text-sm text-[#D8C5A5]/90 font-light leading-relaxed mb-6">
                Our team customizes themes, mandap florals, lighting cues, and multi-course menus for
                gatherings of any size up to 300 guests.
              </p>
            </div>

            <button
              onClick={() => onOpenPlanModal('Custom Celebration')}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#D8C5A5] hover:bg-[#c9b491] text-[#182A20] text-xs font-semibold tracking-wide transition-colors cursor-pointer"
            >
              <span>Speak With Event Planner</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
