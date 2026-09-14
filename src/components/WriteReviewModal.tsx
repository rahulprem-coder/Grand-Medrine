import React, { useState } from 'react';
import { X, Star, CheckCircle2, ExternalLink, Sparkles, Send } from 'lucide-react';
import { VENUE_INFO } from '../data/grandMedrineData';

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WriteReviewModal: React.FC<WriteReviewModalProps> = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [authorName, setAuthorName] = useState('');
  const [eventType, setEventType] = useState('Wedding Reception');
  const [reviewText, setReviewText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const googleMapsReviewUrl =
    'https://www.google.com/maps/search/?api=1&query=Grand+Medrine+Banquet+Hall+Sonipat+Road+Rohtak';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewText.trim()) return;
    setSubmitted(true);
  };

  const handleOpenGoogle = () => {
    window.open(googleMapsReviewUrl, '_blank', 'noopener,noreferrer');
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setAuthorName('');
    setReviewText('');
    setRating(5);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#FCFAF6] border border-[#D8C5A5] shadow-2xl p-6 sm:p-8 text-[#252721] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F1EAE0] hover:bg-[#E5DED3] text-[#252721] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-6 text-center flex flex-col items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-[#243B2D] text-[#D8C5A5] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3 className="font-serif-title text-2xl text-[#243B2D] font-normal mb-2">
              Thank You, {authorName}!
            </h3>

            <p className="text-xs text-[#5D5E56] max-w-md mb-6 leading-relaxed">
              Your valuable feedback has been recorded for our Grand Medrine management team. To help other families in Rohtak and Haryana discover our venue, we would be deeply honored if you could also publish your review directly to our verified Google Business page!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
              <button
                onClick={handleOpenGoogle}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#4285F4] hover:bg-[#3367D6] text-white text-xs font-semibold shadow-md transition-colors cursor-pointer"
              >
                <span>Publish on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleResetAndClose}
                className="px-5 py-2.5 rounded-full border border-[#D8C5A5] text-xs font-semibold text-[#243B2D] hover:bg-[#F1EAE0] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#B8A27C] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Google Verified Experience</span>
              </div>
              <h3 className="font-serif-title text-2xl text-[#252721] font-normal">
                Share Your Experience
              </h3>
              <p className="text-xs text-[#77766E] mt-0.5">
                Grand Medrine Banquet Hall, Sonipat Rd, Rohtak
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Star Rating Selector */}
              <div>
                <label className="block text-xs font-medium text-[#252721] mb-1.5">
                  Overall Rating *
                </label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 cursor-pointer focus:outline-none transition-transform hover:scale-110"
                      aria-label={`${star} star`}
                    >
                      <Star
                        className={`w-6 h-6 ${
                          (hoverRating || rating) >= star
                            ? 'fill-[#FBBC05] text-[#FBBC05]'
                            : 'text-[#D8C5A5]'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-[#243B2D] ml-2">
                    {hoverRating || rating}.0 / 5.0
                  </span>
                </div>
              </div>

              {/* Author & Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#252721] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3.5 py-2 rounded-xl border border-[#D8C5A5] bg-[#F7F3EC]/60 text-xs sm:text-sm text-[#252721] focus:outline-none focus:ring-2 focus:ring-[#243B2D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#252721] mb-1">
                    Occasion / Event Hosted
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#D8C5A5] bg-[#F7F3EC]/60 text-xs sm:text-sm text-[#252721] focus:outline-none focus:ring-2 focus:ring-[#243B2D]"
                  >
                    <option value="Wedding Reception">Wedding Reception</option>
                    <option value="Ring Ceremony / Engagement">Ring Ceremony / Engagement</option>
                    <option value="Pre-Wedding / Sangeet">Pre-Wedding / Sangeet</option>
                    <option value="Corporate Event / Seminar">Corporate Event / Seminar</option>
                    <option value="Anniversary Gala">Anniversary Gala</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Guest Attendee Experience">Guest Attendee Experience</option>
                  </select>
                </div>
              </div>

              {/* Review Text */}
              <div>
                <label className="block text-xs font-medium text-[#252721] mb-1">
                  Your Review *
                </label>
                <textarea
                  required
                  rows={4}
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Share details about the venue ambience, food taste & hygiene, management cooperation, air-conditioning, and parking..."
                  className="w-full px-3.5 py-2 rounded-xl border border-[#D8C5A5] bg-[#F7F3EC]/60 text-xs sm:text-sm text-[#252721] focus:outline-none focus:ring-2 focus:ring-[#243B2D] resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-5 rounded-full bg-[#243B2D] hover:bg-[#182A20] text-[#F7F3EC] text-xs font-semibold tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Review</span>
                </button>

                <button
                  type="button"
                  onClick={handleOpenGoogle}
                  className="w-full sm:w-auto py-3 px-4 rounded-full border border-[#4285F4] text-[#1A73E8] hover:bg-[#4285F4]/10 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Open Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[11px] text-[#77766E] text-center">
                Reviews are publicly verified under Google guidelines for Grand Medrine Banquet Hall.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
