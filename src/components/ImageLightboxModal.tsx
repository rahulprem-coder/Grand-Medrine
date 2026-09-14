import React from 'react';
import { X, Sparkles, MapPin } from 'lucide-react';
import { GalleryPhoto } from '../types';

interface ImageLightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
  onOpenPlanModal: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  photo,
  onClose,
  onOpenPlanModal
}) => {
  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative max-w-4xl w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#182A20] text-[#F7F3EC] border border-[#D8C5A5]/40 shadow-2xl flex flex-col max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-[#F7F3EC] flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
          aria-label="Close photo view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Full Image */}
        <div className="relative flex-grow bg-black flex items-center justify-center overflow-hidden">
          <img
            src={photo.image}
            alt={photo.title}
            className="w-full max-h-[65vh] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption & Info Bar */}
        <div className="p-5 sm:p-6 bg-[#182A20] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#D8C5A5] px-2 py-0.5 rounded-full bg-white/10">
                {photo.category}
              </span>
              <span className="text-xs text-[#D8C5A5]/80 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#D8C5A5]" />
                <span>Grand Medrine • Rohtak</span>
              </span>
            </div>
            <h4 className="font-serif-title text-xl text-[#FCFAF6] font-medium">
              {photo.title}
            </h4>
            <p className="text-xs text-[#D8C5A5]/80 font-light mt-1 max-w-xl">
              {photo.caption}
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenPlanModal();
            }}
            className="px-5 py-2.5 rounded-full bg-[#D8C5A5] hover:bg-[#cbb692] text-[#182A20] text-xs font-semibold shrink-0 cursor-pointer transition-colors"
          >
            Enquire For Your Event
          </button>
        </div>
      </div>
    </div>
  );
};
