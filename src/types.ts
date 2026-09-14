export interface VenueInfo {
  name: string;
  type: string;
  tagline: string;
  supportingLine: string;
  address: {
    street: string;
    area: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
    distanceRailway: string;
    full: string;
  };
  phone: string;
  displayPhone: string;
  website: string;
  hours: string;
  social: {
    facebook: string;
    youtube: string;
  };
  rating: {
    approxScore: string;
    approxReviews: string;
    platforms: string;
    note: string;
  };
  specifications: {
    carpetAreaSqFt: number;
    carpetAreaLabel: string;
    guestCapacity: number;
    guestCapacityLabel: string;
    airConditioning: string;
    powerBackup: string;
    design: string;
    parking: string;
    restaurant: string;
    locationAdvantage: string;
  };
  pullQuote: string;
}

export interface BrandPillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlights: string[];
  image: string;
}

export interface AmenityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'Venue' | 'Hospitality' | 'Comfort';
}

export interface EventTheme {
  id: string;
  title: string;
  category: string;
  tagline: string;
  capacity: string;
  image: string;
  description: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Weddings' | 'Grand Hall' | 'Dining' | 'Exterior & Stage';
  image: string;
  caption: string;
}

export interface TestimonialStory {
  id: string;
  clientNames: string;
  eventType: string;
  date: string;
  quote: string;
  rating: number;
  highlight: string;
}

export interface GoogleReview {
  id: string;
  authorName: string;
  authorInitials: string;
  avatarBgColor: string;
  isLocalGuide?: boolean;
  localGuideBadge?: string;
  reviewCount?: number;
  rating: number;
  relativeTime: string;
  eventOrVisitType: string;
  reviewText: string;
  category: 'Weddings' | 'Catering' | 'Management' | 'Ambience';
  helpfulCount: number;
  highlightTag?: string;
  ownerResponse?: {
    author: string;
    relativeTime: string;
    text: string;
  };
}

export interface GoogleRatingBreakdown {
  averageScore: number;
  totalReviews: number;
  stars5Count: number;
  stars4Count: number;
  stars3Count: number;
  stars2Count: number;
  stars1Count: number;
  percentage5Stars: number;
  verifiedPlatform: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email?: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  message: string;
}
