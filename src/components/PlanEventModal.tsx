import React, { useState, useEffect } from 'react';
import { X, Send, Phone, Calendar, Users, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import { VENUE_INFO } from '../data/grandMedrineData';

interface PlanEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const PlanEventModal: React.FC<PlanEventModalProps> = ({
  isOpen,
  onClose,
  preselectedService
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('Wedding Reception');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(150);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setEventType(preselectedService);
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Grand Medrine Banquet Hall!\n\nI want to plan an event:\n\n*Name:* ${
        name || 'Guest'
      }\n*Phone:* ${phone || 'Provided'}\n*Event:* ${eventType}\n*Tentative Date:* ${
        date || 'Flexible'
      }\n*Guests:* ${guests}\n*Requirements:* ${notes || 'Please provide package details and date availability.'}`
    );
    window.open(`https://wa.me/919896036463?text=${text}`, '_blank');
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#FCFAF6] border border-[#D8C5A5] shadow-2xl p-6 sm:p-8 overflow-hidden text-[#252721]">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F1EAE0] hover:bg-[#E5DED3] text-[#252721] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#243B2D] text-[#D8C5A5] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif-title text-2xl sm:text-3xl text-[#243B2D] font-medium mb-2">
              Event Request Received
            </h3>

            <p className="text-xs sm:text-sm text-[#5D5E56] max-w-md mb-6 leading-relaxed">
              Thank you, <span className="font-semibold text-[#252721]">{name}</span>. Our event
              coordinator at Grand Medrine, Rohtak will contact you at{' '}
              <span className="font-semibold text-[#252721]">{phone}</span> to confirm hall
              availability and discuss bespoke catering & decor packages.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20ba59]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Continue on WhatsApp</span>
              </button>

              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-full border border-[#D8C5A5] text-xs font-semibold text-[#243B2D] hover:bg-[#F1EAE0]"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#B8A27C] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Grand Medrine Banquet Hall • Rohtak</span>
              </div>
              <h3 className="font-serif-title text-2xl sm:text-3xl text-[#252721] font-normal leading-tight">
                Plan Your Celebration
              </h3>
              <p className="text-xs text-[#77766E] mt-1">
                Share your tentative event details and our coordinator will respond promptly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-[#252721] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-3.5 py-2 rounded-xl border border-[#D8C5A5] bg-[#F7F3EC]/60 text-xs sm:text-sm text-[#252721] focus:outline-none focus:ring-2 focus:ring-[#243B2D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#252721] mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98960 36463"
                    className="w-full px-3.5 py-2 rounded-xl border border-[#D8C5A5] bg-[#F7F3EC]/60 text-xs sm:text-sm text-[#252721] focus:outline-none focus:ring-2 focus:ring-[#243B2D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-[#252721] mb-1">
                    Occasion / Event
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#D8C5A5] bg-[#F7F3EC]/60 text-xs sm:text-sm text-[#252721] focus:outline-none focus:ring-2 focus:ring-[#243B2D]"
                  >
                    <option value="Wedding Reception">Wedding Reception</option>
                    <option value="Pre-Wedding / Sangeet / Mehendi">Pre-Wedding / Sangeet / Mehendi</option>
                    <option value="Ring Ceremony / Engagement">Ring Ceremony / Engagement</option>
                    <option value="Corporate Event / Conference">Corporate Event / Conference</option>
                    <option value="Birthday / Anniversary Gala">Birthday / Anniversary Gala</option>
                    <option value="Other Social Celebration">Other Social Celebration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#252721] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#D8C5A5] bg-[#F7F3EC]/60 text-xs sm:text-sm text-[#252721] focus:outline-none focus:ring-2 focus:ring-[#243B2D]"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-medium text-[#252721]">Guest Count</span>
                  <span className="font-bold text-[#243B2D] px-2 py-0.5 rounded bg-[#F1EAE0]">
                    {guests} Guests
                  </span>
                </div>
                <input
                  type="range"
                  min={30}
                  max={300}
                  step={10}
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full accent-[#243B2D] cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#252721] mb-1">
                  Special Notes / Catering Preferences
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Stage mandap theme, guest rooms required, pure veg menu..."
                  className="w-full px-3.5 py-2 rounded-xl border border-[#D8C5A5] bg-[#F7F3EC]/60 text-xs sm:text-sm text-[#252721] focus:outline-none focus:ring-2 focus:ring-[#243B2D] resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-5 rounded-full bg-[#243B2D] hover:bg-[#182A20] text-[#F7F3EC] text-xs font-semibold tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Event Request</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto py-3 px-4 rounded-full border border-[#25D366] text-[#128C7E] hover:bg-[#25D366]/10 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-[#77766E] pt-1">
                Or call us immediately at{' '}
                <a href={`tel:${VENUE_INFO.phone}`} className="font-semibold text-[#243B2D] underline">
                  {VENUE_INFO.displayPhone}
                </a>{' '}
                (24 Hours Desk)
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
