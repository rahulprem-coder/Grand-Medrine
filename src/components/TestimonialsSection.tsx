import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import { TESTIMONIAL_STORIES, VENUE_INFO } from '../data/grandMedrineData';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIAL_STORIES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIAL_STORIES.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIAL_STORIES[activeIndex];

  return (
    <section className="py-20 sm:py-28 bg-[#F1EAE0] relative border-t border-[#E5DED3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#B8A27C]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#77766E]">
              WORDS OF APPRECIATION
            </span>
            <span className="w-8 h-px bg-[#B8A27C]" />
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-[#252721] font-normal mb-4">
            Cherished By Families & Host Organizers
          </h2>

          {/* Rating Summary Box */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-[#FCFAF6] border border-[#D8C5A5] shadow-xs">
            <div className="flex items-center text-[#B8A27C]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#B8A27C]" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#243B2D]">
              {VENUE_INFO.rating.approxScore}
            </span>
            <span className="text-xs text-[#77766E]">
              • Approx. {VENUE_INFO.rating.approxReviews} ({VENUE_INFO.rating.platforms})
            </span>
          </div>

          <p className="text-[11px] text-[#77766E] italic mt-2">
            *{VENUE_INFO.rating.note}
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-[#FCFAF6] border border-[#E5DED3] p-8 sm:p-12 shadow-md">
            {/* Top Row: Stars and Quote Mark */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-1 text-[#B8A27C]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#B8A27C]" />
                ))}
              </div>

              <div className="w-10 h-10 rounded-full bg-[#F1EAE0] flex items-center justify-center text-[#B8A27C]">
                <Quote className="w-5 h-5 text-[#B8A27C]" />
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="font-serif-title text-lg sm:text-2xl text-[#252721] font-normal italic leading-relaxed mb-8">
              "{current.quote}"
            </blockquote>

            {/* Author Details & Highlight */}
            <div className="pt-6 border-t border-[#E5DED3] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-semibold text-[#243B2D]">
                  {current.clientNames}
                </h4>
                <p className="text-xs text-[#77766E]">
                  {current.eventType} • {current.date}
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F1EAE0] border border-[#D8C5A5]/60 text-xs font-medium text-[#243B2D]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B8A27C]" />
                <span>{current.highlight}</span>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-3 mt-8 pt-4">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-[#D8C5A5] bg-[#FCFAF6] hover:bg-[#243B2D] hover:text-[#F7F3EC] hover:border-[#243B2D] flex items-center justify-center text-[#243B2D] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {TESTIMONIAL_STORIES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      activeIndex === i
                        ? 'w-6 bg-[#243B2D]'
                        : 'w-2 bg-[#D8C5A5] hover:bg-[#B8A27C]'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-[#D8C5A5] bg-[#FCFAF6] hover:bg-[#243B2D] hover:text-[#F7F3EC] hover:border-[#243B2D] flex items-center justify-center text-[#243B2D] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
