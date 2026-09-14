import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, Sparkles, Star } from 'lucide-react';
import { VENUE_INFO } from '../data/grandMedrineData';
import { GoogleGIcon } from './GoogleReviewsSection';

interface NavbarProps {
  onOpenPlanModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPlanModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = ['home', 'about', 'services', 'gallery', 'events', 'reviews', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Events', href: '#events', id: 'events' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F3EC]/95 backdrop-blur-md shadow-sm border-b border-[#E5DED3]/80 py-3'
          : 'bg-[#F7F3EC] border-b border-[#E5DED3]/50 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#243B2D] rounded-lg p-1"
            aria-label="Grand Medrine Banquet Hall Home"
          >
            {/* Elegant Monogram Seal */}
            <div className="w-10 h-10 rounded-full border border-[#B8A27C] bg-[#FCFAF6] flex items-center justify-center text-[#243B2D] shadow-xs group-hover:border-[#243B2D] transition-colors">
              <span className="font-serif-title font-bold text-lg tracking-wider text-[#243B2D]">
                GM
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-title text-xl sm:text-2xl font-semibold tracking-wide text-[#252721] leading-none">
                GRAND MEDRINE
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#77766E] font-medium mt-1">
                Banquet Hall • Rohtak
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-sm font-medium transition-all relative py-1 ${
                    isActive
                      ? 'text-[#243B2D] font-semibold'
                      : 'text-[#55564E] hover:text-[#243B2D]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#243B2D] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions on Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Google Rating Pill */}
            <a
              href="#reviews"
              className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FCFAF6] border border-[#D8C5A5] text-xs text-[#252721] hover:border-[#243B2D] transition-colors"
              title="Google Reviews: 4.7 out of 5 stars (208+ reviews)"
            >
              <GoogleGIcon className="w-3.5 h-3.5" />
              <span className="font-bold text-[#243B2D]">4.7</span>
              <Star className="w-3 h-3 fill-[#FBBC05] text-[#FBBC05]" />
              <span className="text-[11px] text-[#77766E]">(208+)</span>
            </a>

            {/* Direct Phone Link */}
            <a
              href={`tel:${VENUE_INFO.phone}`}
              className="flex items-center gap-1.5 text-xs font-medium text-[#243B2D] hover:text-[#182A20] px-3 py-1.5 rounded-full border border-[#D8C5A5] hover:border-[#243B2D] bg-[#FCFAF6] transition-colors"
              title="Call Grand Medrine Desk directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#B8A27C]" />
              <span>{VENUE_INFO.displayPhone}</span>
            </a>

            {/* Primary Plan Your Event CTA */}
            <button
              onClick={onOpenPlanModal}
              id="nav-plan-event-btn"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#243B2D] hover:bg-[#182A20] text-[#F7F3EC] text-xs font-semibold tracking-wide transition-all duration-200 shadow-xs hover:shadow-md hover:translate-y-[-1px] cursor-pointer"
            >
              <span>Plan Your Event</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${VENUE_INFO.phone}`}
              className="p-2 text-[#243B2D] rounded-full bg-[#FCFAF6] border border-[#D8C5A5]"
              aria-label="Call directly"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#252721] hover:text-[#243B2D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#243B2D]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F3EC] border-b border-[#E5DED3] px-5 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#E5DED3]/60 text-[#243B2D] font-semibold'
                    : 'text-[#252721] hover:bg-[#E5DED3]/40'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E5DED3] flex flex-col gap-2.5">
            <a
              href={`tel:${VENUE_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-[#D8C5A5] bg-[#FCFAF6] text-sm font-medium text-[#243B2D]"
            >
              <Phone className="w-4 h-4 text-[#B8A27C]" />
              <span>Call +91 98960 36463</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlanModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#243B2D] text-[#F7F3EC] text-sm font-semibold shadow-xs"
            >
              <span>Plan Your Event</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
