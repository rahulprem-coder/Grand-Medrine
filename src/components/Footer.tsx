import React, { useState } from 'react';
import { Phone, MapPin, Clock, Globe, ArrowUp, Facebook, Youtube, ShieldCheck } from 'lucide-react';
import { VENUE_INFO } from '../data/grandMedrineData';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#182A20] text-[#F7F3EC] pt-16 pb-12 border-t border-[#243B2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Crest Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full border border-[#D8C5A5] bg-[#FCFAF6]/10 flex items-center justify-center font-serif-title font-bold text-xl text-[#D8C5A5]">
                  GM
                </div>
                <div>
                  <h3 className="font-serif-title text-2xl text-[#FCFAF6] font-medium leading-none">
                    GRAND MEDRINE
                  </h3>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#D8C5A5] mt-1 font-medium">
                    Banquet Hall • Rohtak
                  </p>
                </div>
              </div>

              <p className="font-serif-title text-base italic text-[#D8C5A5] mb-2">
                "{VENUE_INFO.tagline}"
              </p>

              <p className="text-xs text-[#D8C5A5]/80 font-light leading-relaxed max-w-sm mb-6">
                {VENUE_INFO.supportingLine}. Dedicated to crafting regal, unforgettable celebrations
                with 5,100 sq. ft. of centrally air-conditioned splendour and Vastu harmony.
              </p>

              {/* Social Channels */}
              <div className="flex items-center gap-3">
                <a
                  href={VENUE_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D8C5A5] hover:text-[#182A20] border border-white/10 flex items-center justify-center text-[#D8C5A5] transition-colors"
                  aria-label="Grand Medrine on Facebook"
                  title="Official Facebook Page"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                <a
                  href={VENUE_INFO.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D8C5A5] hover:text-[#182A20] border border-white/10 flex items-center justify-center text-[#D8C5A5] transition-colors"
                  aria-label="Grand Medrine on YouTube"
                  title="Official YouTube Channel"
                >
                  <Youtube className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${VENUE_INFO.phone}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-[#D8C5A5]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 98960 36463</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-[#D8C5A5] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FCFAF6]/80 font-light">
              <li>
                <a href="#home" className="hover:text-[#D8C5A5] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D8C5A5] transition-colors">About Medrine</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D8C5A5] transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#D8C5A5] transition-colors">Amenities</a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#D8C5A5] transition-colors">Signature Themes</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D8C5A5] transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D8C5A5] transition-colors">Contact & Directions</a>
              </li>
            </ul>
          </div>

          {/* Venue Highlights */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#D8C5A5] font-semibold mb-4">
              Venue Features
            </h4>
            <ul className="space-y-2 text-xs text-[#FCFAF6]/80 font-light">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8C5A5]" />
                <span>5,100 sq. ft. Carpet Area</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8C5A5]" />
                <span>Capacity up to 300 Guests</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8C5A5]" />
                <span>Centrally Air-Conditioned</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8C5A5]" />
                <span>100% Power Backup with Gensets</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8C5A5]" />
                <span>Vastu-Compliant Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8C5A5]" />
                <span>Spacious Parking & Valet</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8C5A5]" />
                <span>Complimentary Guest Rooms</span>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#D8C5A5] font-semibold mb-4">
              Visit or Call
            </h4>
            <div className="space-y-3 text-xs text-[#FCFAF6]/80 font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D8C5A5] shrink-0 mt-0.5" />
                <span>{VENUE_INFO.address.full}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D8C5A5] shrink-0" />
                <a href={`tel:${VENUE_INFO.phone}`} className="hover:text-[#D8C5A5]">
                  {VENUE_INFO.displayPhone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D8C5A5] shrink-0" />
                <span>{VENUE_INFO.hours}</span>
              </p>
              <p className="text-[11px] text-[#D8C5A5]/90 pt-1">
                Landmark: {VENUE_INFO.address.landmark}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8C5A5]/70">
          <p>© {new Date().getFullYear()} Grand Medrine Banquet Hall. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-[#FCFAF6] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-[#FCFAF6] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#FCFAF6] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy / Terms Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-[#FCFAF6] text-[#252721] max-w-lg w-full rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#D8C5A5]">
            <h3 className="font-serif-title text-2xl text-[#243B2D] font-semibold mb-4">
              {activeModal === 'privacy' ? 'Privacy Policy' : 'Terms & Booking Policy'}
            </h3>
            <div className="text-xs text-[#5D5E56] space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {activeModal === 'privacy' ? (
                <>
                  <p>
                    Grand Medrine Banquet Hall is committed to protecting your privacy. Any personal information
                    (such as full name, contact phone number, and event details) collected through this website
                    or during consultation is used solely to respond to event inquiries, confirm hall availability,
                    and provide personalized hospitality coordination.
                  </p>
                  <p>
                    We never sell, rent, or distribute client contact details to third-party marketing companies.
                    For any questions regarding your data, contact our management desk at +91 98960 36463.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Event Booking & Holds:</strong> Dates are officially reserved upon receipt of the agreed
                    advance deposit and signed booking contract. Hall capacity is certified for up to 300 guests in
                    accordance with safety and comfort guidelines.
                  </p>
                  <p>
                    <strong>Venue Care & Utilities:</strong> 100% generator power backup, central air-conditioning,
                    and complimentary guest rooms are provided as part of standard booking arrangements.
                  </p>
                  <p>
                    <strong>Catering & Sanitization:</strong> In-house multi-cuisine food preparation is maintained
                    under stringent hygiene protocols before and after every occasion.
                  </p>
                </>
              )}
            </div>
            <div className="mt-6 pt-4 border-t border-[#E5DED3] text-right">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-full bg-[#243B2D] text-[#F7F3EC] text-xs font-semibold hover:bg-[#182A20]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
