import React, { useState, useMemo } from 'react';
import {
  Star,
  Search,
  ThumbsUp,
  CheckCircle,
  ExternalLink,
  Edit3,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  Building2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { GOOGLE_REVIEWS, GOOGLE_RATING_STATS, VENUE_INFO } from '../data/grandMedrineData';
import { GoogleReview } from '../types';

interface GoogleReviewsSectionProps {
  onOpenWriteReviewModal: () => void;
}

export const GoogleGIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

export const GoogleReviewsSection: React.FC<GoogleReviewsSectionProps> = ({
  onOpenWriteReviewModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Weddings' | 'Catering' | 'Management' | 'Ambience'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'relevance' | 'newest' | 'rating'>('relevance');
  const [helpfulLikedIds, setHelpfulLikedIds] = useState<Record<string, boolean>>({});
  const [expandedReviewIds, setExpandedReviewIds] = useState<Record<string, boolean>>({});

  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Grand+Medrine+Banquet+Hall+Sonipat+Road+Rohtak';

  const categories = [
    { key: 'All', label: 'All Reviews', count: GOOGLE_RATING_STATS.totalReviews },
    { key: 'Weddings', label: 'Weddings & Receptions', count: 94 },
    { key: 'Catering', label: 'Food & Catering', count: 68 },
    { key: 'Management', label: 'Management & Staff', count: 52 },
    { key: 'Ambience', label: 'Ambience & Stage Decor', count: 46 }
  ] as const;

  const popularTopics = [
    'Hygienic Food',
    'Cooperative Staff',
    'Rohtak Railway Station',
    'Central Air Conditioning',
    'Valet Parking',
    'Royal Stage'
  ];

  const handleHelpfulClick = (id: string) => {
    setHelpfulLikedIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleExpand = (id: string) => {
    setExpandedReviewIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filter reviews
  const filteredReviews = useMemo(() => {
    return GOOGLE_REVIEWS.filter((review) => {
      const matchesCategory =
        selectedCategory === 'All' || review.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        review.authorName.toLowerCase().includes(q) ||
        review.reviewText.toLowerCase().includes(q) ||
        review.eventOrVisitType.toLowerCase().includes(q) ||
        (review.highlightTag && review.highlightTag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#F1EAE0] relative border-t border-[#E5DED3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#B8A27C]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#77766E]">
              VERIFIED HOST EXPERIENCES
            </span>
            <span className="w-8 h-px bg-[#B8A27C]" />
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-[#252721] font-normal mb-4">
            Google Customer Reviews
          </h2>

          <p className="text-sm sm:text-base text-[#5D5E56] font-light leading-relaxed">
            Rated by wedding families, banquet hosts, and corporate organizers across Rohtak and NCR on Google Maps.
          </p>
        </div>

        {/* Master Google Rating Card & Overview Bento */}
        <div className="bg-[#FCFAF6] rounded-3xl border border-[#D8C5A5] p-6 sm:p-10 shadow-md mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Big Score & Trust Badge */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left border-b lg:border-b-0 lg:border-r border-[#E5DED3] pb-6 lg:pb-0 lg:pr-8">
              <div className="flex items-center gap-2.5 mb-2">
                <GoogleGIcon className="w-7 h-7" />
                <span className="font-semibold text-sm tracking-wide text-[#252721]">
                  Google Rating
                </span>
              </div>

              <div className="flex items-baseline gap-3 my-2">
                <span className="font-serif-title text-6xl sm:text-7xl font-semibold text-[#243B2D] tracking-tight">
                  {GOOGLE_RATING_STATS.averageScore}
                </span>
                <div className="flex flex-col">
                  <div className="flex items-center text-[#FBBC05] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#77766E] font-medium mt-1">
                    out of 5.0 stars
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#5D5E56] mb-4">
                Based on <strong className="text-[#252721]">{GOOGLE_RATING_STATS.totalReviews}+ verified Google reviews</strong>
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={onOpenWriteReviewModal}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#243B2D] hover:bg-[#182A20] text-[#F7F3EC] text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Write a Review</span>
                </button>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#D8C5A5] text-[#243B2D] hover:bg-[#F1EAE0] text-xs font-medium transition-colors"
                >
                  <span>View on Google</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Middle: Rating Distribution Bars */}
            <div className="lg:col-span-4 space-y-2 border-b lg:border-b-0 lg:border-r border-[#E5DED3] pb-6 lg:pb-0 lg:pr-8">
              <div className="flex items-center justify-between text-xs font-medium text-[#77766E] mb-2">
                <span>Rating Breakdown</span>
                <span className="text-[#243B2D] font-bold">88% 5-Star Reviews</span>
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-2 text-xs">
                <span className="w-4 text-right font-medium text-[#252721]">5</span>
                <Star className="w-3 h-3 fill-[#FBBC05] text-[#FBBC05]" />
                <div className="flex-1 h-2 rounded-full bg-[#E5DED3] overflow-hidden">
                  <div className="h-full bg-[#34A853] rounded-full" style={{ width: '88%' }} />
                </div>
                <span className="w-10 text-right text-[#77766E] text-[11px]">
                  {GOOGLE_RATING_STATS.stars5Count}
                </span>
              </div>

              {/* 4 Stars */}
              <div className="flex items-center gap-2 text-xs">
                <span className="w-4 text-right font-medium text-[#252721]">4</span>
                <Star className="w-3 h-3 fill-[#FBBC05] text-[#FBBC05]" />
                <div className="flex-1 h-2 rounded-full bg-[#E5DED3] overflow-hidden">
                  <div className="h-full bg-[#4285F4] rounded-full" style={{ width: '9%' }} />
                </div>
                <span className="w-10 text-right text-[#77766E] text-[11px]">
                  {GOOGLE_RATING_STATS.stars4Count}
                </span>
              </div>

              {/* 3 Stars */}
              <div className="flex items-center gap-2 text-xs">
                <span className="w-4 text-right font-medium text-[#252721]">3</span>
                <Star className="w-3 h-3 fill-[#FBBC05] text-[#FBBC05]" />
                <div className="flex-1 h-2 rounded-full bg-[#E5DED3] overflow-hidden">
                  <div className="h-full bg-[#FBBC05] rounded-full" style={{ width: '2.5%' }} />
                </div>
                <span className="w-10 text-right text-[#77766E] text-[11px]">
                  {GOOGLE_RATING_STATS.stars3Count}
                </span>
              </div>

              {/* 2 Stars */}
              <div className="flex items-center gap-2 text-xs">
                <span className="w-4 text-right font-medium text-[#252721]">2</span>
                <Star className="w-3 h-3 fill-[#FBBC05] text-[#FBBC05]" />
                <div className="flex-1 h-2 rounded-full bg-[#E5DED3] overflow-hidden">
                  <div className="h-full bg-[#FA7B17] rounded-full" style={{ width: '1%' }} />
                </div>
                <span className="w-10 text-right text-[#77766E] text-[11px]">
                  {GOOGLE_RATING_STATS.stars2Count}
                </span>
              </div>

              {/* 1 Star */}
              <div className="flex items-center gap-2 text-xs">
                <span className="w-4 text-right font-medium text-[#252721]">1</span>
                <Star className="w-3 h-3 fill-[#FBBC05] text-[#FBBC05]" />
                <div className="flex-1 h-2 rounded-full bg-[#E5DED3] overflow-hidden">
                  <div className="h-full bg-[#EA4335] rounded-full" style={{ width: '0%' }} />
                </div>
                <span className="w-10 text-right text-[#77766E] text-[11px]">
                  {GOOGLE_RATING_STATS.stars1Count}
                </span>
              </div>
            </div>

            {/* Right: Key Praise Themes */}
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold text-[#252721] uppercase tracking-wider mb-2.5">
                Most Mentioned by Reviewers
              </p>
              <div className="flex flex-wrap gap-1.5">
                {popularTopics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => {
                      if (searchQuery === topic) {
                        setSearchQuery('');
                      } else {
                        setSearchQuery(topic);
                      }
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs transition-colors cursor-pointer ${
                      searchQuery === topic
                        ? 'bg-[#243B2D] text-[#F7F3EC]'
                        : 'bg-[#F1EAE0] hover:bg-[#E5DED3] text-[#243B2D] border border-[#D8C5A5]/60'
                    }`}
                  >
                    <span>{topic}</span>
                  </button>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-[#E5DED3] flex items-center gap-2 text-[11px] text-[#77766E]">
                <ShieldCheck className="w-4 h-4 text-[#34A853]" />
                <span>Google Verified Business • Sonipat Rd, Rohtak</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key as any)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat.key
                    ? 'bg-[#243B2D] text-[#F7F3EC] shadow-xs'
                    : 'bg-[#FCFAF6] text-[#5D5E56] hover:bg-[#F1EAE0] border border-[#D8C5A5]'
                }`}
              >
                <span>{cat.label}</span>
                {cat.key === 'All' && (
                  <span className="ml-1.5 text-[11px] opacity-80">({cat.count})</span>
                )}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#77766E]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search reviews..."
              className="w-full pl-9 pr-4 py-2 rounded-full bg-[#FCFAF6] border border-[#D8C5A5] text-xs text-[#252721] placeholder-[#77766E] focus:outline-none focus:ring-2 focus:ring-[#243B2D]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#77766E] hover:text-[#252721]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Reviews Grid */}
        {filteredReviews.length === 0 ? (
          <div className="text-center py-12 bg-[#FCFAF6] rounded-2xl border border-[#D8C5A5] p-8">
            <p className="text-sm text-[#5D5E56] mb-3">
              No reviews found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 rounded-full bg-[#243B2D] text-[#F7F3EC] text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredReviews.map((rev) => {
              const isExpanded = expandedReviewIds[rev.id];
              const isHelpful = helpfulLikedIds[rev.id];
              const currentHelpfulCount = rev.helpfulCount + (isHelpful ? 1 : 0);

              return (
                <div
                  key={rev.id}
                  className="bg-[#FCFAF6] rounded-3xl border border-[#E5DED3] p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    {/* Top Reviewer Row */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs text-white shadow-xs shrink-0"
                          style={{ backgroundColor: rev.avatarBgColor }}
                        >
                          {rev.authorInitials}
                        </div>

                        {/* Name & Local Guide */}
                        <div>
                          <h4 className="text-sm font-bold text-[#252721] leading-tight">
                            {rev.authorName}
                          </h4>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            {rev.isLocalGuide && (
                              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#D97706]">
                                <Star className="w-2.5 h-2.5 fill-[#D97706]" />
                                <span>{rev.localGuideBadge || 'Local Guide'}</span>
                              </span>
                            )}
                            {!rev.isLocalGuide && (
                              <span className="text-[11px] text-[#77766E]">
                                {rev.reviewCount} reviews
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Google G Logo Badge */}
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#F1EAE0] text-[10px] font-semibold text-[#5D5E56]">
                        <GoogleGIcon className="w-3.5 h-3.5" />
                        <span>Verified</span>
                      </div>
                    </div>

                    {/* Star Rating & Timestamp */}
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="flex items-center text-[#FBBC05] gap-0.5">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                        ))}
                      </div>
                      <span className="text-[11px] text-[#77766E]">{rev.relativeTime}</span>
                      <span className="text-[11px] text-[#D8C5A5]">•</span>
                      <span className="text-[11px] font-medium text-[#243B2D] bg-[#F1EAE0] px-2 py-0.5 rounded-full">
                        {rev.eventOrVisitType}
                      </span>
                    </div>

                    {/* Highlight Pill if present */}
                    {rev.highlightTag && (
                      <div className="mb-3">
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#243B2D] bg-[#E8EFEA] px-2.5 py-0.5 rounded-md">
                          <Sparkles className="w-3 h-3 text-[#243B2D]" />
                          <span>{rev.highlightTag}</span>
                        </span>
                      </div>
                    )}

                    {/* Review Body */}
                    <p className="text-xs sm:text-sm text-[#3E403A] font-light leading-relaxed mb-4">
                      {isExpanded || rev.reviewText.length <= 260
                        ? rev.reviewText
                        : `${rev.reviewText.slice(0, 260)}...`}
                    </p>

                    {rev.reviewText.length > 260 && (
                      <button
                        onClick={() => toggleExpand(rev.id)}
                        className="text-xs font-semibold text-[#243B2D] hover:underline mb-3 inline-flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>{isExpanded ? 'Show less' : 'Read full review'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3 h-3" />
                        ) : (
                          <ChevronDown className="w-3 h-3" />
                        )}
                      </button>
                    )}

                    {/* Official Owner Response */}
                    {rev.ownerResponse && (
                      <div className="mt-3 p-3.5 rounded-2xl bg-[#F7F3EC] border border-[#E5DED3] text-xs">
                        <div className="flex items-center gap-1.5 font-semibold text-[#243B2D] mb-1">
                          <Building2 className="w-3.5 h-3.5 text-[#B8A27C]" />
                          <span>{rev.ownerResponse.author}</span>
                          <span className="text-[10px] text-[#77766E] font-normal ml-auto">
                            {rev.ownerResponse.relativeTime}
                          </span>
                        </div>
                        <p className="text-[#5D5E56] font-light leading-relaxed">
                          {rev.ownerResponse.text}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Bottom Row: Helpful button & Google Maps link */}
                  <div className="pt-4 mt-4 border-t border-[#E5DED3] flex items-center justify-between">
                    <button
                      onClick={() => handleHelpfulClick(rev.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-colors cursor-pointer ${
                        isHelpful
                          ? 'bg-[#243B2D] text-[#F7F3EC] font-semibold'
                          : 'text-[#77766E] hover:text-[#243B2D] hover:bg-[#F1EAE0]'
                      }`}
                      title="Vote this review as helpful"
                    >
                      <ThumbsUp className={`w-3.5 h-3.5 ${isHelpful ? 'fill-[#F7F3EC]' : ''}`} />
                      <span>{isHelpful ? 'Marked Helpful' : 'Helpful'}</span>
                      <span className="text-[10px] opacity-75">({currentHelpfulCount})</span>
                    </button>

                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[#77766E] hover:text-[#4285F4] flex items-center gap-1 transition-colors"
                    >
                      <span>Google Maps</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Callout: Invite to Leave a Review & Direct Link */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#243B2D] to-[#182A20] text-[#F7F3EC] border border-[#D8C5A5]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-[#D8C5A5]/40 flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6 text-[#D8C5A5]" />
            </div>
            <div>
              <h3 className="font-serif-title text-xl sm:text-2xl text-[#FCFAF6] font-medium">
                Hosted an Event at Grand Medrine?
              </h3>
              <p className="text-xs text-[#D8C5A5]/90 font-light mt-0.5">
                We value your thoughts! Help future hosts by sharing your experience on Google.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenWriteReviewModal}
              className="px-5 py-2.5 rounded-full bg-[#D8C5A5] hover:bg-[#cbb692] text-[#182A20] text-xs font-semibold shadow-md transition-colors cursor-pointer"
            >
              Write a Google Review
            </button>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-[#FCFAF6] text-xs font-medium transition-colors"
            >
              <span>Open on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
