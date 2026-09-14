import {
  VenueInfo,
  BrandPillar,
  ServiceItem,
  AmenityItem,
  EventTheme,
  GalleryPhoto,
  TestimonialStory,
  GoogleReview,
  GoogleRatingBreakdown
} from '../types';

export const VENUE_INFO: VenueInfo = {
  name: 'Grand Medrine Banquet Hall',
  type: 'Premium Banquet Hall, Wedding Venue, Events & Hospitality',
  tagline: 'We Create, You Celebrate',
  supportingLine: 'Serving You At The Heart of Rohtak',
  address: {
    street: 'Grand Medrine, Sonipat Rd',
    area: 'near Shiela Cineplex',
    landmark: 'Approximately 30 metres from Rohtak Junction railway station',
    city: 'Rohtak',
    state: 'Haryana',
    pincode: '124001',
    distanceRailway: 'Approx. 30 metres from Rohtak Junction',
    full: 'Grand Medrine, Sonipat Rd, near Shiela Cineplex, Rohtak, Haryana 124001'
  },
  phone: '9896036463',
  displayPhone: '+91 98960 36463',
  website: 'https://www.grandmedrine.com',
  hours: 'Open all days, 24 hours',
  social: {
    facebook: 'https://facebook.com/grandmedrine',
    youtube: 'https://www.youtube.com/@grandmedrine'
  },
  rating: {
    approxScore: '4.7★',
    approxReviews: '208+ Reviews',
    platforms: 'Google Verified Business • 4.7 / 5.0 Rating',
    note: 'Rated 4.7 out of 5 stars based on 208+ verified Google reviews'
  },
  specifications: {
    carpetAreaSqFt: 5100,
    carpetAreaLabel: '5,100 sq. ft. Carpet Area',
    guestCapacity: 300,
    guestCapacityLabel: 'Up to 300 Guests',
    airConditioning: 'Centrally Air-Conditioned',
    powerBackup: '100% Power Backup with Gensets',
    design: 'Vastu-Compliant Architecture',
    parking: 'Spacious Parking + Valet Service',
    restaurant: 'In-House Multi-Cuisine Restaurant',
    locationAdvantage: '30m from Rohtak Junction Railway Station'
  },
  pullQuote: '“Passion and a desire to do something out of the ordinary led us to enter the hospitality sector with a simple purpose: To make every celebration feel royal.”'
};

// Centralized image library so the client can swap images at any time
export const IMAGES = {
  heroBanner: '/src/assets/images/medrine_banquet_hero_1789374986207.jpg',
  royalStage: '/src/assets/images/medrine_royal_stage_1789375011517.jpg',
  buffetDining: '/src/assets/images/medrine_buffet_dining_1789375036993.jpg',
  nightFacade: '/src/assets/images/medrine_night_facade_1789375068570.jpg',
  
  // High quality curated luxury Indian wedding and celebration assets
  weddingCeremony: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
  preWeddingRing: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
  corporateConference: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
  socialParty: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
  floralDecor: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
  mocktailCocktail: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
  tableSetting: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
  chandelierDetail: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80'
};

export const BRAND_PILLARS: BrandPillar[] = [
  {
    id: 'pillar-ambience',
    title: 'Luxurious Ambience',
    description: 'Bespoke crystal chandeliers, warm architectural cove lighting, and Vastu-compliant acoustics crafted to create an atmosphere of regal grandeur.',
    iconName: 'Crown'
  },
  {
    id: 'pillar-team',
    title: 'Experienced Team',
    description: 'A dedicated event coordinator and seasoned hospitality crew managing timelines, guest welcome, and seamless logistics with polite warmth.',
    iconName: 'Users'
  },
  {
    id: 'pillar-services',
    title: 'Impeccable Services',
    description: 'From 100% generator power backup to round-the-clock valet, complimentary guest rooms, and pristine sanitization throughout.',
    iconName: 'Sparkles'
  },
  {
    id: 'pillar-delicacies',
    title: 'Mind-blowing Delicacies',
    description: 'Artisanal catering curated by master chefs in our in-house restaurant, featuring opulent royal buffets, live chaat counters, and gourmet desserts.',
    iconName: 'Utensils'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'weddings-functions',
    title: 'Weddings & Functions',
    subtitle: 'From intimate ceremonies to grand royal wedding galas',
    description: 'From intimate ceremonies to grand wedding celebrations, create memorable occasions with elegant hospitality and thoughtful arrangements. Includes custom mandap design, bride & groom grand entry, and royal banquet setups.',
    iconName: 'HeartHandshake',
    highlights: [
      'Weddings & Grand Receptions',
      'Pre-wedding functions (Mehendi, Sangeet, Haldi)',
      'Post-wedding receptions & Milni ceremonies',
      'Ring ceremonies & Engagements'
    ],
    image: IMAGES.royalStage
  },
  {
    id: 'corporate-events',
    title: 'Corporate Events',
    subtitle: 'Professional, tech-equipped business gatherings',
    description: 'A professional destination for product launches, seminars, conferences, award shows, and corporate gatherings. Equipped with high-fidelity AV sound, 100% power backup, stage podiums, and executive catering.',
    iconName: 'Briefcase',
    highlights: [
      'Product launches & Press meets',
      'Seminars & Leadership summits',
      'Annual award galas & Conclaves',
      'Corporate dinner receptions'
    ],
    image: IMAGES.corporateConference
  },
  {
    id: 'social-celebrations',
    title: 'Social Celebrations',
    subtitle: 'Memorable milestones with family and friends',
    description: 'Celebrate birthdays, milestone anniversaries, retirement soirees, baby showers, and private family parties in a comfortable, elegant venue tailored to your traditions.',
    iconName: 'PartyPopper',
    highlights: [
      'Grand milestone birthday parties',
      'Silver & Golden anniversary galas',
      'Private family reunions & Soirees',
      'Festive gatherings & Kitty parties'
    ],
    image: IMAGES.socialParty
  },
  {
    id: 'custom-decor',
    title: 'Custom Decor & Themes',
    subtitle: 'Tailored aesthetic expressions for every vision',
    description: 'Create an event atmosphere that reflects your style with customized themes, floral backdrops, intelligent moving head DJ lights, LED matrix dance floors, and cinematic photo booths.',
    iconName: 'Palette',
    highlights: [
      'Customized floral & royal themes',
      'Stage backdrop & photo corners',
      'High-energy DJ sound & moving beams',
      'Professional photography & video setup'
    ],
    image: IMAGES.floralDecor
  },
  {
    id: 'hospitality-comfort',
    title: 'Hospitality & Guest Comfort',
    subtitle: 'Uncompromising guest care and luxury ease',
    description: 'Enjoy an in-house restaurant, complimentary guest rooms, spacious valet parking, central air conditioning, and attentive venue support that frees you to enjoy your own celebration.',
    iconName: 'ShieldCheck',
    highlights: [
      'Complimentary fully-furnished guest rooms',
      'In-house restaurant with live counters',
      'Smooth valet parking & spacious bay',
      'Pre & post-event sanitization protocols'
    ],
    image: IMAGES.buffetDining
  }
];

export const AMENITIES_DATA: AmenityItem[] = [
  {
    id: 'amenity-ac',
    title: 'Centrally Air-Conditioned',
    description: 'High-capacity VRV air-conditioning maintaining a comfortable, pleasant climate throughout the 5,100 sq. ft. hall year-round.',
    iconName: 'Wind',
    category: 'Comfort'
  },
  {
    id: 'amenity-genset',
    title: '100% Power Backup with Gensets',
    description: 'Heavy-duty industrial generator backup ensuring flawless lighting, music, and climate without a second of downtime.',
    iconName: 'Zap',
    category: 'Venue'
  },
  {
    id: 'amenity-vastu',
    title: 'Vastu-Compliant Design',
    description: 'Architecturally aligned according to sacred Vastu principles to invite prosperity, harmony, and positive auspicious vibrations.',
    iconName: 'Compass',
    category: 'Venue'
  },
  {
    id: 'amenity-parking',
    title: 'Spacious Parking',
    description: 'Dedicated parking capacity for large guest convoys with wide driveways, security personnel, and organized bays.',
    iconName: 'Car',
    category: 'Comfort'
  },
  {
    id: 'amenity-valet',
    title: 'Valet Parking Service',
    description: 'Courteous uniformed valet attendants greeting your guests right at the grand entrance for effortless arrival and departure.',
    iconName: 'Key',
    category: 'Hospitality'
  },
  {
    id: 'amenity-restaurant',
    title: 'In-House Restaurant',
    description: 'State-of-the-art culinary kitchen and multi-cuisine restaurant providing fresh, piping-hot dishes and bespoke catering menus.',
    iconName: 'UtensilsCrossed',
    category: 'Hospitality'
  },
  {
    id: 'amenity-rooms',
    title: 'Complimentary Guest Rooms',
    description: 'Elegantly furnished private dressing and resting suites with attached baths for the hosts, bridal prep, and VIP guests.',
    iconName: 'Bed',
    category: 'Hospitality'
  },
  {
    id: 'amenity-hygiene',
    title: 'Sanitised & Hygienic Upkeep',
    description: 'Rigorous deep-cleaning and hospital-grade sanitization protocols conducted thoroughly before and after every event.',
    iconName: 'Sparkle',
    category: 'Comfort'
  }
];

export const EVENT_THEMES: EventTheme[] = [
  {
    id: 'royal-weddings',
    title: 'Royal Indian Wedding',
    category: 'Weddings',
    tagline: 'Timeless Grandeur & Heritage Splendor',
    capacity: 'Up to 300 Guests',
    image: IMAGES.royalStage,
    description: 'Regal gold carved thrones, cascading fragrant fresh orchids and roses, royal chandelier luminance, and ceremonial mandap arrangements.'
  },
  {
    id: 'pre-wedding-sangeet',
    title: 'Pre-Wedding & Sangeet',
    category: 'Celebrations',
    tagline: 'High-Energy Music & Festive Glamour',
    capacity: 'Up to 300 Guests',
    image: IMAGES.weddingCeremony,
    description: 'Vibrant color palettes, interactive illuminated dance floors, custom DJ sound trussing, and lively cocktail bar setups.'
  },
  {
    id: 'corporate-summits',
    title: 'Conferences & Product Launches',
    category: 'Corporate',
    tagline: 'Sleek Corporate Sophistication',
    capacity: '50 to 300 Delegates',
    image: IMAGES.corporateConference,
    description: 'High-definition AV projection, crisp acoustic speech tuning, round-table executive seating, and formal business buffet lunches.'
  },
  {
    id: 'social-milestones',
    title: 'Anniversaries & Birthday Galas',
    category: 'Social Events',
    tagline: 'Joyous Family Memories',
    capacity: '30 to 250 Guests',
    image: IMAGES.socialParty,
    description: 'Custom photo booths, balloon and floral sculptures, signature cake-cutting stage, and curated multi-course dining spreads.'
  },
  {
    id: 'custom-concepts',
    title: 'Custom Themes & Stagecraft',
    category: 'Bespoke Design',
    tagline: 'Designed Exactly To Your Vision',
    capacity: 'Custom Sized',
    image: IMAGES.floralDecor,
    description: 'Pastel botanical floral walls, vintage Victorian palace setups, or contemporary minimalist aesthetics planned to your desires.'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Grand Medrine Main Hall & Chandeliers',
    category: 'Grand Hall',
    image: IMAGES.heroBanner,
    caption: '5,100 sq. ft. of centrally air-conditioned pillar-free banquet space with majestic crystal chandeliers.'
  },
  {
    id: 'gal-2',
    title: 'Royal Wedding Throne & Stage Decor',
    category: 'Weddings',
    image: IMAGES.royalStage,
    caption: 'Gilded ceremonial sofa seating framed by cascading pastel floral arches and ambient candelabras.'
  },
  {
    id: 'gal-3',
    title: 'Royal Buffet & Live Catering Spread',
    category: 'Dining',
    image: IMAGES.buffetDining,
    caption: 'Long glistening brass chafing counters with multi-cuisine master chef preparations.'
  },
  {
    id: 'gal-4',
    title: 'Grand Medrine Facade at Twilight',
    category: 'Exterior & Stage',
    image: IMAGES.nightFacade,
    caption: 'Neoclassical architectural facade illuminated on Sonipat Road, near Shiela Cineplex, Rohtak.'
  },
  {
    id: 'gal-5',
    title: 'Intimate Ceremony Mandap',
    category: 'Weddings',
    image: IMAGES.weddingCeremony,
    caption: 'Traditional floral canopy with sacred seating and serene candle illumination.'
  },
  {
    id: 'gal-6',
    title: 'Executive Conference Layout',
    category: 'Grand Hall',
    image: IMAGES.corporateConference,
    caption: 'Professional banquet seating with high-fidelity AV equipment for corporate conclaves.'
  },
  {
    id: 'gal-7',
    title: 'Cocktail & Mocktail Beverage Bar',
    category: 'Dining',
    image: IMAGES.mocktailCocktail,
    caption: 'Contemporary illuminated bar serving refreshing artisanal welcome mocktails and coolers.'
  },
  {
    id: 'gal-8',
    title: 'Bespoke Table Setting & Centerpieces',
    category: 'Grand Hall',
    image: IMAGES.tableSetting,
    caption: 'Fine linen, gold cutlery, and floral centerpieces ready for 300 esteemed guests.'
  }
];

export const TESTIMONIAL_STORIES: TestimonialStory[] = [
  {
    id: 'story-1',
    clientNames: 'The Hooda & Sharma Family',
    eventType: 'Wedding Reception',
    date: 'Recent Celebration',
    quote: 'Grand Medrine Banquet Hall exceeded our highest expectations. The air conditioning was powerful even with 280 guests, the food from their in-house restaurant was lauded by every relative, and the railway station proximity made it so simple for our outstation guests.',
    rating: 5,
    highlight: 'Flawless arrangements & sumptuous delicacies'
  },
  {
    id: 'story-2',
    clientNames: 'Dr. Vivek Ahlawat',
    eventType: 'Medical Conclave & Dinner',
    date: 'Corporate Event',
    quote: 'We hosted our annual medical seminar at Grand Medrine. The 100% generator power backup, acoustics, and seamless valet parking for 70+ doctors were handled with absolute professionalism. Truly the premier venue in Rohtak.',
    rating: 5,
    highlight: 'Executive punctuality & top-tier hospitality'
  },
  {
    id: 'story-3',
    clientNames: 'Mrs. & Mr. Narwal',
    eventType: '25th Silver Jubilee Anniversary',
    date: 'Family Milestone',
    quote: 'From the DJ setup to the custom stage and the complimentary guest room provided for our grandparents, every detail reflected true royal hospitality. Truly made our silver jubilee unforgettable!',
    rating: 5,
    highlight: 'Warm hospitality & thoughtful care'
  }
];

export const VENUE_HIGHLIGHTS = [
  {
    value: '5,100',
    unit: 'sq. ft.',
    label: 'Spacious Carpet Area',
    sublabel: 'Expansive pillar-free celebration hall',
    iconName: 'Maximize2'
  },
  {
    value: '300',
    unit: 'Guests',
    label: 'Event Capacity',
    sublabel: 'Comfortable luxury seating & dining',
    iconName: 'Users'
  },
  {
    value: '24 / 7',
    unit: 'Hours',
    label: 'Open All Days',
    sublabel: 'Round-the-clock event support',
    iconName: 'Clock'
  },
  {
    value: '100%',
    unit: 'Uptime',
    label: 'Power Backup with Gensets',
    sublabel: 'Zero interruptions for your big day',
    iconName: 'Zap'
  },
  {
    value: '30m',
    unit: 'Metres',
    label: 'From Rohtak Junction',
    sublabel: 'Unmatched transit convenience for guests',
    iconName: 'Train'
  }
];

export const GOOGLE_RATING_STATS: GoogleRatingBreakdown = {
  averageScore: 4.7,
  totalReviews: 208,
  stars5Count: 182,
  stars4Count: 19,
  stars3Count: 5,
  stars2Count: 2,
  stars1Count: 0,
  percentage5Stars: 88,
  verifiedPlatform: 'Google Verified Business & Customer Reviews'
};

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'g-rev-1',
    authorName: 'Raman Dahiya',
    authorInitials: 'RD',
    avatarBgColor: '#243B2D',
    isLocalGuide: true,
    localGuideBadge: 'Local Guide • 38 reviews',
    reviewCount: 38,
    rating: 5,
    relativeTime: '2 weeks ago',
    eventOrVisitType: 'Sister\'s Wedding Reception',
    reviewText:
      'We booked Grand Medrine Banquet Hall for my sister’s wedding reception. The management team here is exceptionally cooperative and customer-centric. The 5,100 sq ft hall accommodated our 280 guests comfortably without any congestion. Most importantly, the food was prepared under very hygienic conditions—the live snacks, paneer delicacies, and desserts were praised by everyone. Also, being just a stone’s throw (literally 30 metres) from Rohtak Junction was a massive boon for relatives arriving by train from Delhi.',
    category: 'Weddings',
    helpfulCount: 24,
    highlightTag: 'Cooperative Management & Food Hygiene',
    ownerResponse: {
      author: 'Grand Medrine Banquet Hall (Owner)',
      relativeTime: '1 week ago',
      text: 'Dear Raman Ji, thank you so much for your warm words! It was our true honour to host your sister’s wedding celebration. Maintaining pristine food hygiene and prompt hospitality is our topmost priority. Wishing the newlyweds endless happiness!'
    }
  },
  {
    id: 'g-rev-2',
    authorName: 'Sunita Sharma',
    authorInitials: 'SS',
    avatarBgColor: '#7A3E2D',
    isLocalGuide: true,
    localGuideBadge: 'Local Guide • 52 reviews • 120 photos',
    reviewCount: 52,
    rating: 5,
    relativeTime: '1 month ago',
    eventOrVisitType: 'Engagement & Ring Ceremony',
    reviewText:
      'Superb banquet hall in Rohtak! The grand floral stage decoration and crystal chandelier lighting looked straight out of a royal palace album. The central air-conditioning was very effective on a humid evening. Staff maintained immaculate clean tables and served hot appetizers continuously. Highly recommended venue on Sonipat Road.',
    category: 'Ambience',
    helpfulCount: 19,
    highlightTag: 'Royal Stage Decor & Central AC',
    ownerResponse: {
      author: 'Grand Medrine Banquet Hall (Owner)',
      relativeTime: '3 weeks ago',
      text: 'Thank you Sunita Ji! We are overjoyed to know that the decor and air-conditioning made your family ring ceremony so memorable. Looking forward to hosting your future family occasions.'
    }
  },
  {
    id: 'g-rev-3',
    authorName: 'Praveen Malik',
    authorInitials: 'PM',
    avatarBgColor: '#1E3A5F',
    isLocalGuide: false,
    reviewCount: 14,
    rating: 5,
    relativeTime: '1 month ago',
    eventOrVisitType: 'Pre-Wedding Sangeet Night',
    reviewText:
      'Attended a sangeet function here last month. The sound setup and DJ acoustics were fantastic with no harsh echo. Ample car parking with helpful valet staff right at the gate. The in-house restaurant kitchen churned out delicious chaat and main course dishes. Best venue near Shiela Cineplex / Rohtak Junction.',
    category: 'Catering',
    helpfulCount: 15,
    highlightTag: 'Delicious Multi-Cuisine & Valet Parking',
    ownerResponse: {
      author: 'Grand Medrine Banquet Hall (Owner)',
      relativeTime: '1 month ago',
      text: 'Thank you Praveen Ji for appreciating our culinary team and parking management. We strive to provide effortless comfort to all our visiting guests.'
    }
  },
  {
    id: 'g-rev-4',
    authorName: 'Dr. Neeraj Bansal',
    authorInitials: 'NB',
    avatarBgColor: '#3B4B24',
    isLocalGuide: true,
    localGuideBadge: 'Local Guide • Level 6',
    reviewCount: 71,
    rating: 5,
    relativeTime: '2 months ago',
    eventOrVisitType: 'State Medical Conference & Banquet',
    reviewText:
      'We hosted an annual doctors seminar followed by dinner at Grand Medrine. The generator power backup gave 100% uptime with no drop in projector or AC performance. Audio-visual podium, banquet seating arrangement, and dinner buffet service were on time. Professional conduct by the manager in charge.',
    category: 'Management',
    helpfulCount: 31,
    highlightTag: '100% Power Backup & Executive Timelines',
    ownerResponse: {
      author: 'Grand Medrine Banquet Hall (Owner)',
      relativeTime: '2 months ago',
      text: 'Thank you Dr. Bansal. It was a pleasure hosting the medical conference. Our genset redundancy and executive banquet protocols ensure corporate and institutional programs run seamlessly.'
    }
  },
  {
    id: 'g-rev-5',
    authorName: 'Vikas Hooda',
    authorInitials: 'VH',
    avatarBgColor: '#4A354F',
    isLocalGuide: true,
    localGuideBadge: 'Local Guide • 29 reviews',
    reviewCount: 29,
    rating: 5,
    relativeTime: '3 months ago',
    eventOrVisitType: '25th Wedding Anniversary Gala',
    reviewText:
      'One of the cleanest and most well-maintained banquet halls in Haryana. They provided a complimentary air-conditioned room for our senior parents to rest during the 4-hour function, which was a very thoughtful gesture. Special praise for their dal makhani and live tandoori snacks.',
    category: 'Catering',
    helpfulCount: 18,
    highlightTag: 'Complimentary Guest Rooms & Thoughtful Service',
    ownerResponse: {
      author: 'Grand Medrine Banquet Hall (Owner)',
      relativeTime: '3 months ago',
      text: 'Vikas Ji, congratulations on your parents\' 25th Silver Jubilee! Guest comfort and family warmth are the very essence of Grand Medrine. Thank you for your heartfelt recommendation.'
    }
  },
  {
    id: 'g-rev-6',
    authorName: 'Meenakshi Rathi',
    authorInitials: 'MR',
    avatarBgColor: '#6B4E2B',
    isLocalGuide: false,
    reviewCount: 9,
    rating: 5,
    relativeTime: '4 months ago',
    eventOrVisitType: 'Daughter\'s First Birthday Celebration',
    reviewText:
      'The fairy-tale theme decor was executed flawlessly by Grand Medrine\'s decorators. Safe, spacious, and spotlessly clean hall. The staff served guests with genuine smiles and greeted everyone warmly. Very reasonable packages given the royal ambience they deliver.',
    category: 'Ambience',
    helpfulCount: 12,
    highlightTag: 'Fairy-tale Theme & Spotless Cleanliness'
  },
  {
    id: 'g-rev-7',
    authorName: 'Ashok K. Verma',
    authorInitials: 'AV',
    avatarBgColor: '#2B4A4B',
    isLocalGuide: true,
    localGuideBadge: 'Local Guide • 44 reviews',
    reviewCount: 44,
    rating: 5,
    relativeTime: '5 months ago',
    eventOrVisitType: 'Wedding Ceremony',
    reviewText:
      'Everything went like clockwork. From welcoming the baraat to the mandap rituals and midnight buffet, the manager remained on ground throughout. High hygienic standards in both food and restroom maintenance, which is rare to find. Top choice in Rohtak.',
    category: 'Weddings',
    helpfulCount: 27,
    highlightTag: 'Dedicated On-Ground Event Manager'
  },
  {
    id: 'g-rev-8',
    authorName: 'Sanjay Deswal',
    authorInitials: 'SD',
    avatarBgColor: '#5C382A',
    isLocalGuide: false,
    reviewCount: 6,
    rating: 4,
    relativeTime: '6 months ago',
    eventOrVisitType: 'Retirement Celebration Banquet',
    reviewText:
      'Great venue right near Rohtak railway station. Location made it very simple for our guests from nearby districts. Food quality was very good and served piping hot. Ample space for 200 people with cozy seating arrangement.',
    category: 'Management',
    helpfulCount: 9,
    highlightTag: 'Prime Railway Station Location'
  }
];
