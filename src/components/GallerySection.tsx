import React, { useState } from 'react';
import { Maximize2, Sparkles, Filter } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/grandMedrineData';
import { GalleryPhoto } from '../types';

interface GallerySectionProps {
  onSelectPhoto: (photo: GalleryPhoto) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectPhoto }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Weddings', 'Grand Hall', 'Dining', 'Exterior & Stage'];

  const filteredPhotos =
    activeCategory === 'All'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#F7F3EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#B8A27C]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#77766E]">
              VISUAL REPERTOIRE
            </span>
            <span className="w-8 h-px bg-[#B8A27C]" />
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-[#252721] font-normal mb-4">
            An Atmosphere of Pure Elegance
          </h2>

          <p className="text-sm sm:text-base text-[#77766E] font-light leading-relaxed mb-8">
            Glance through moments captured inside Grand Medrine — from crystal-lit chandelier
            receptions and royal stage mandaps to gourmet catering presentations.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#243B2D] text-[#F7F3EC] shadow-xs'
                    : 'bg-[#FCFAF6] text-[#55564E] hover:text-[#243B2D] border border-[#E5DED3] hover:border-[#D8C5A5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => onSelectPhoto(photo)}
              className={`group relative rounded-2xl overflow-hidden bg-[#E5DED3] border border-[#E5DED3] cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 ${
                idx === 0 || idx === 7 ? 'sm:col-span-2 aspect-[16/10]' : 'aspect-square sm:aspect-[4/3]'
              }`}
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Dark Ambient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#182A20]/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5" />

              {/* Badges and Icon */}
              <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-[#182A20]/75 backdrop-blur-md border border-[#D8C5A5]/40 text-[#F7F3EC] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <Maximize2 className="w-4 h-4 text-[#D8C5A5]" />
              </div>

              {/* Photo Title & Caption on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <span className="text-[10px] uppercase tracking-wider text-[#D8C5A5] font-semibold block mb-1">
                  {photo.category}
                </span>
                <h4 className="font-serif-title text-lg sm:text-xl text-[#F7F3EC] font-medium leading-snug mb-1">
                  {photo.title}
                </h4>
                <p className="text-[11px] text-[#F7F3EC]/80 font-light line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
