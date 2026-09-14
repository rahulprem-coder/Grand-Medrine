import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Globe,
  Send,
  MessageCircle,
  CheckCircle2,
  Train,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { VENUE_INFO } from '../data/grandMedrineData';
import { EnquiryFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    eventType: 'Wedding Reception',
    eventDate: '',
    guestCount: 150,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Grand Medrine Banquet Hall team!\n\nI would like to enquire about hosting an event at Grand Medrine, Rohtak.\n\n*Name:* ${
        formData.fullName || 'Guest'
      }\n*Phone:* ${formData.phone || 'Provided'}\n*Event:* ${
        formData.eventType
      }\n*Tentative Date:* ${formData.eventDate || 'Flexible'}\n*Estimated Guests:* ${
        formData.guestCount
      }\n*Message:* ${formData.message || 'Please share availability and pricing.'}\n\nThank you!`
    );
    window.open(`https://wa.me/919896036463?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F7F3EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#B8A27C]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#77766E]">
              GET IN TOUCH
            </span>
            <span className="w-8 h-px bg-[#B8A27C]" />
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-[#252721] font-normal mb-4">
            Let's Plan Your Celebration
          </h2>

          <p className="text-sm sm:text-base text-[#77766E] font-light leading-relaxed">
            Contact Grand Medrine Banquet Hall for event bookings, date availability, customized decor
            consultation, or to schedule an in-person walkthrough of our 5,100 sq. ft. hall.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Authentic Venue Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#FCFAF6] border border-[#E5DED3] p-7 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#F1EAE0] border border-[#D8C5A5] flex items-center justify-center font-serif-title font-bold text-lg text-[#243B2D]">
                  GM
                </div>
                <div>
                  <h3 className="font-serif-title text-xl text-[#252721] font-medium leading-none">
                    Grand Medrine Banquet Hall
                  </h3>
                  <p className="text-xs text-[#77766E] mt-1">
                    {VENUE_INFO.supportingLine}
                  </p>
                </div>
              </div>

              <div className="space-y-5 text-xs sm:text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#F1EAE0] flex items-center justify-center text-[#243B2D] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#243B2D]" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#252721] mb-0.5">Venue Address</h5>
                    <p className="text-[#5D5E56] leading-relaxed">
                      {VENUE_INFO.address.full}
                    </p>
                    <a
                      href="https://maps.google.com/?q=Grand+Medrine+Sonipat+Rd+near+Shiela+Cineplex+Rohtak+Haryana+124001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#243B2D] hover:underline mt-1.5"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Railway Landmark */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#F1EAE0] flex items-center justify-center text-[#243B2D] shrink-0 mt-0.5">
                    <Train className="w-4 h-4 text-[#243B2D]" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#252721] mb-0.5">Prime Landmark</h5>
                    <p className="text-[#5D5E56] leading-relaxed">
                      {VENUE_INFO.address.distanceRailway}
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#F1EAE0] flex items-center justify-center text-[#243B2D] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#243B2D]" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#252721] mb-0.5">Direct Booking Hotline</h5>
                    <a
                      href={`tel:${VENUE_INFO.phone}`}
                      className="text-[#243B2D] font-semibold text-base hover:underline block"
                    >
                      {VENUE_INFO.displayPhone}
                    </a>
                    <span className="text-[11px] text-[#77766E]">
                      24/7 Dedicated Event Coordinator
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#F1EAE0] flex items-center justify-center text-[#243B2D] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#243B2D]" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#252721] mb-0.5">Operating Hours</h5>
                    <p className="text-[#5D5E56]">
                      {VENUE_INFO.hours}
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#F1EAE0] flex items-center justify-center text-[#243B2D] shrink-0 mt-0.5">
                    <Globe className="w-4 h-4 text-[#243B2D]" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#252721] mb-0.5">Official Website</h5>
                    <p className="text-[#5D5E56]">
                      www.grandmedrine.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Help Button */}
              <div className="mt-8 pt-6 border-t border-[#E5DED3]">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full flex items-center justify-center gap-2.5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#FCFAF6] border border-[#E5DED3] p-7 sm:p-10 shadow-sm">
              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-widest text-[#B8A27C] font-semibold block mb-1">
                  Event Consultation & Booking
                </span>
                <h3 className="font-serif-title text-2xl sm:text-3xl text-[#252721] font-medium">
                  Request Date Availability & Quote
                </h3>
              </div>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#243B2D] text-[#F7F3EC] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#D8C5A5]" />
                  </div>
                  <h4 className="font-serif-title text-2xl text-[#252721] font-medium mb-2">
                    Enquiry Received Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5D5E56] max-w-md mb-6 leading-relaxed">
                    Thank you, <span className="font-semibold text-[#252721]">{formData.fullName}</span>.
                    Our event coordinator at Grand Medrine will review your date ({formData.eventDate || 'selected date'})
                    and call you at <span className="font-semibold text-[#252721]">{formData.phone}</span> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-[#D8C5A5] text-xs font-semibold text-[#243B2D] hover:bg-[#F1EAE0]"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-medium text-[#252721] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rajesh Hooda"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D8C5A5]/80 bg-[#F7F3EC]/50 text-xs sm:text-sm text-[#252721] focus:outline-none focus:ring-2 focus:ring-[#243B2D] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-medium text-[#252721] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98123 45678"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D8C5A5]/80 bg-[#F7F3EC]/50 text-xs sm:text-sm text-[#252721] focus:outline-none focus:ring-2 focus:ring-[#243B2D] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Event Type */}
                    <div>
                      <label className="block text-xs font-medium text-[#252721] mb-1.5">
                        Occasion / Event Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D8C5A5]/80 bg-[#F7F3EC]/50 text-xs sm:text-sm text-[#252721] focus:outline-none focus:ring-2 focus:ring-[#243B2D] focus:border-transparent transition-all"
                      >
                        <option value="Wedding Reception">Wedding Reception</option>
                        <option value="Pre-Wedding / Sangeet / Mehendi">Pre-Wedding / Sangeet / Mehendi</option>
                        <option value="Ring Ceremony / Engagement">Ring Ceremony / Engagement</option>
                        <option value="Corporate Conference / Seminar">Corporate Conference / Seminar</option>
                        <option value="Milestone Birthday / Anniversary">Milestone Birthday / Anniversary</option>
                        <option value="Private Social Party">Private Social Party</option>
                      </select>
                    </div>

                    {/* Event Date */}
                    <div>
                      <label className="block text-xs font-medium text-[#252721] mb-1.5">
                        Tentative Event Date
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D8C5A5]/80 bg-[#F7F3EC]/50 text-xs sm:text-sm text-[#252721] focus:outline-none focus:ring-2 focus:ring-[#243B2D] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Guest Count Slider */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-medium text-[#252721]">
                        Approximate Guests
                      </label>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#243B2D] text-[#F7F3EC]">
                        {formData.guestCount} Guests
                      </span>
                    </div>
                    <input
                      type="range"
                      min={30}
                      max={300}
                      step={10}
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                      className="w-full accent-[#243B2D] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-[#77766E] mt-1">
                      <span>30 Guests (Intimate)</span>
                      <span>150 Guests (Standard)</span>
                      <span>Up to 300 Guests (Grand Max)</span>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-[#252721] mb-1.5">
                      Specific Requirements or Decor Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Vegetarian catering requirements, mandap decoration, DJ requirement, or guest room accommodations..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D8C5A5]/80 bg-[#F7F3EC]/50 text-xs sm:text-sm text-[#252721] focus:outline-none focus:ring-2 focus:ring-[#243B2D] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#243B2D] hover:bg-[#182A20] text-[#F7F3EC] text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Booking Enquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full border border-[#25D366] text-[#128C7E] hover:bg-[#25D366]/10 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>Enquire via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
