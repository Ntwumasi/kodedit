// Demo site data for all businesses

export interface DemoSiteData {
  id: string;
  businessName: string;
  tagline: string;
  description: string;
  services: string[];
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  logo?: {
    type: 'text' | 'custom';
    content?: string;
  };
  contact: {
    phone?: string;
    email?: string;
    website?: string;
    addresses?: Array<{
      location: string;
      address: string;
      phone?: string;
    }>;
  };
  specialFeatures?: string[];
  testimonials?: Array<{
    quote: string;
    author: string;
  }>;
  ctaButtons: Array<{
    text: string;
    type: 'primary' | 'secondary';
  }>;
}

export const demoSites: Record<string, DemoSiteData> = {
  atlantic: {
    id: 'atlantic',
    businessName: 'Atlantic Masonry & Tile',
    tagline: 'Italian Craftsmanship Meets New England',
    description: 'Over a decade of mastery from Tuscany, now serving the North Shore and Greater Boston Areas with superior quality masonry and tile work.',
    services: [
      'Walkways', 'Driveways', 'Patios', 'Retaining Walls', 'Stairs', 'Pillars',
      'Repointing and Waterproofing', 'Foundation Repair', 'Chimneys', 'Cement Slabs',
      'Restorations', 'Snow Removal'
    ],
    colors: {
      primary: 'red-700',
      secondary: 'red-800',
      accent: 'stone-600',
      background: 'stone-100'
    },
    logo: {
      type: 'custom'
    },
    contact: {
      website: 'https://www.atlanticmasonryandtile.com',
    },
    specialFeatures: [
      'Authentic Italian techniques from Tuscany',
      'Superior quality backed by references',
      'Fully licensed and insured',
      'Serving North Shore & Greater Boston'
    ],
    ctaButtons: [
      { text: 'Get Free Estimate', type: 'primary' },
      { text: 'View Portfolio', type: 'secondary' }
    ]
  },

  breathe: {
    id: 'breathe',
    businessName: 'BREATHE',
    tagline: 'For Every Body. And Everybody. JUST BREATHE.',
    description: 'Hot Yoga | Hot Pilates | Hot HIIT. A welcoming studio where you can connect your mind to your body to your mat.',
    services: [
      'Hot Yoga', 'Hot Pilates', 'Hot HIIT', 'Beginner Classes', 'Advanced Classes'
    ],
    colors: {
      primary: 'purple-600',
      secondary: 'pink-500',
      accent: 'purple-800',
      background: 'purple-50'
    },
    logo: {
      type: 'text',
      content: 'BREATHE'
    },
    contact: {
      phone: '617-547-9328',
      email: 'hello@breathecambridge.com',
      website: 'www.breathecambridge.com'
    },
    testimonials: [
      { quote: 'I breathe so I can connect my mind to my body to my mat.', author: 'SP' },
      { quote: 'To #breathe more and worry wayyyy less.', author: 'MM' },
      { quote: 'As an endurance runner, I need a strong core and good flexibility. I found both in Hot26 and IHP practice.', author: 'LC' },
      { quote: 'BREATHE FAMILY is a crucial part of my Boston life, helping me wash away stress and find a better version of myself.', author: 'WG' }
    ],
    specialFeatures: [
      'Yoga mats available at no cost',
      'Showers available onsite',
      'New student intro offers',
      'Welcoming community atmosphere'
    ],
    ctaButtons: [
      { text: 'Start Your Journey', type: 'primary' },
      { text: 'View Schedule', type: 'secondary' }
    ]
  },

  bigfoot: {
    id: 'bigfoot',
    businessName: 'Big Foot Moving & Storage',
    tagline: 'Professional. Reliable. Trustworthy.',
    description: 'Award-winning Massachusetts-based moving company providing comprehensive relocation and storage services. 2009 Small Business of the Year.',
    services: [
      'Residential Moving', 'Commercial Moving', 'Government Moving', 'Storage Solutions',
      'Cabinet Distribution', 'Packing Materials', 'Office Relocation'
    ],
    colors: {
      primary: 'blue-600',
      secondary: 'yellow-500',
      accent: 'blue-800',
      background: 'blue-50'
    },
    logo: {
      type: 'custom'
    },
    contact: {
      phone: '781.488.3090',
      email: 'info@bigfootmoving.com',
      website: 'www.bigfootmoving.com'
    },
    specialFeatures: [
      'Fully licensed and insured',
      '2009 Small Business of the Year',
      'Customer-first approach',
      'Comprehensive solutions'
    ],
    ctaButtons: [
      { text: 'Get Estimate', type: 'primary' },
      { text: 'Pay Bill', type: 'secondary' }
    ]
  },

  classic: {
    id: 'classic',
    businessName: 'Classic Kitchen & Bath',
    tagline: 'Beautiful. Functional. Tailored to You.',
    description: 'Over 20 years of experience creating spaces that integrate your lifestyle and aesthetic preferences. Expert design with excellent communication.',
    services: [
      'Kitchen Design', 'Bathroom Design', 'Closet Design', 'Mudroom Design',
      'Cabinets & Countertops', 'Complete Remodeling', 'Project Consultation'
    ],
    colors: {
      primary: 'slate-700',
      secondary: 'slate-600',
      accent: 'slate-500',
      background: 'slate-50'
    },
    logo: {
      type: 'custom'
    },
    contact: {
      website: 'https://www.classickbd.com',
      addresses: [
        {
          location: 'Arlington, MA',
          address: '1321 Massachusetts Ave. Arlington, MA',
          phone: '781-643-6555'
        },
        {
          location: 'Hollis, NH',
          address: '5C Proctor Hill Road. Hollis NH 03049',
          phone: '603-400-1400'
        }
      ]
    },
    specialFeatures: [
      'Over 20 years of experience',
      'Budget-conscious design',
      'Resale value consideration',
      'Two convenient showrooms'
    ],
    ctaButtons: [
      { text: 'Schedule Consultation', type: 'primary' },
      { text: 'Visit Showroom', type: 'secondary' }
    ]
  },

  electrical: {
    id: 'electrical',
    businessName: 'Electrical Network',
    tagline: 'Local Electricians in Massachusetts',
    description: 'Providing a wide range of electrical services to both residential and commercial clients. Fully licensed and insured electricians available 24/7.',
    services: [
      'Residential Services', 'Commercial Services', 'Emergency Services', 'Electrical Maintenance',
      'Electrical Rewiring', 'Electrical Testing', 'Burglar Alarms', 'CCTV Systems',
      'Circuit Breakers', 'Electric Cooker Installation', 'EV Charging', 'LED Lighting'
    ],
    colors: {
      primary: 'green-600',
      secondary: 'blue-600',
      accent: 'green-700',
      background: 'green-50'
    },
    logo: {
      type: 'custom'
    },
    contact: {},
    specialFeatures: [
      'Fully licensed and insured',
      '24 hours a day, 7 days a week',
      'Free verbal and written quotes',
      'Approved panel of electricians'
    ],
    ctaButtons: [
      { text: 'Get Free Quote', type: 'primary' },
      { text: 'Emergency Service', type: 'secondary' }
    ]
  },

  finest: {
    id: 'finest',
    businessName: 'Finest Builders, Inc.',
    tagline: 'Celebrating 36 Years of Service!',
    description: 'Serving the Merrimack Valley Community since 1981. Fully licensed and insured general contracting company specializing in new construction and complete renovation.',
    services: [
      'Quality Built Homes', 'Additions and Renovations', 'Kitchen and Bathroom Remodels',
      'Window and Door Replacement', 'Site Work & Development', 'Lot Clearing & Stump Removal',
      'Concrete Work', 'Water, Sewer and Drainage', 'Trucking and Equipment Rental'
    ],
    colors: {
      primary: 'amber-600',
      secondary: 'amber-700',
      accent: 'orange-600',
      background: 'amber-50'
    },
    logo: {
      type: 'text',
      content: 'Finest Builders, Inc.'
    },
    contact: {
      phone: '(978) 256-2641',
      email: 'info@finestbuildersinc.com',
      website: 'http://www.finestbuildersinc.com',
      addresses: [{
        location: 'Chelmsford, MA',
        address: '1 Southwood Drive, Chelmsford, MA 01824',
        phone: '(978) 256-2641'
      }]
    },
    specialFeatures: [
      '36 years of experience',
      'Fully licensed and insured',
      'Free project estimates',
      'Comprehensive solutions'
    ],
    ctaButtons: [
      { text: 'Get Free Estimate', type: 'primary' },
      { text: 'View Projects', type: 'secondary' }
    ]
  },

  finnegan: {
    id: 'finnegan',
    businessName: 'Finnegan Development',
    tagline: 'Quality custom homes with sustainable construction',
    description: 'Building quality custom homes with a focus on sustainable construction and top-notch customer service. Mission rooted in integrity, quality, and community.',
    services: [
      'Custom Home Building', 'Property Development', 'Sustainable Construction',
      'Property Purchasing', 'Real Estate Development'
    ],
    colors: {
      primary: 'slate-800',
      secondary: 'slate-700',
      accent: 'blue-600',
      background: 'slate-50'
    },
    logo: {
      type: 'custom'
    },
    contact: {
      phone: '781-257-2594'
    },
    specialFeatures: [
      'Integrity, Quality, Community',
      'No financing contingencies',
      'Can close in 30 days',
      'Sustainable construction focus'
    ],
    testimonials: [
      { quote: 'You made us confident in our decision. It was a pleasure doing business with you!', author: 'Happy Client' }
    ],
    ctaButtons: [
      { text: 'Sell Your Property', type: 'primary' },
      { text: 'View Our Homes', type: 'secondary' }
    ]
  },

  kendall: {
    id: 'kendall',
    businessName: 'Kendall Square Chiropractic',
    tagline: 'Return to the activities you love',
    description: 'Helping individuals overcome neck, back, and repetitive strain injuries through a unique system of chiropractic treatment, muscle release, and targeted exercises.',
    services: [
      'Chiropractic Care', 'Muscle Release Therapy', 'Targeted Corrective Exercises',
      'Preventive Wellness Programs', 'Pain Relief & Prevention'
    ],
    colors: {
      primary: 'slate-700',
      secondary: 'slate-600',
      accent: 'blue-600',
      background: 'slate-50'
    },
    logo: {
      type: 'custom'
    },
    contact: {
      phone: '617-441-0101',
      website: 'www.kendallsquarechiropractic.com'
    },
    specialFeatures: [
      'Decades of experience',
      'Proactive wellness focus',
      'Online scheduling available',
      'Personalized care approach'
    ],
    ctaButtons: [
      { text: 'Book Appointment', type: 'primary' },
      { text: 'New Patient Forms', type: 'secondary' }
    ]
  },

  lexington: {
    id: 'lexington',
    businessName: 'Lexington Family Chiropractic',
    tagline: 'Serving Lexington and surrounding communities since 1995',
    description: 'Dr. Robert W. Astapoveh delivering the highest quality Chiropractic care in a friendly, relaxed environment. Multiple techniques available for all ages.',
    services: [
      'Chiropractic Techniques', 'Cold Laser Therapy', 'Electrical Muscle Stimulation',
      'Ultrasound Therapy', 'Intersegmental Traction', 'Flexion/Distraction Decompression'
    ],
    colors: {
      primary: 'teal-600',
      secondary: 'teal-700',
      accent: 'green-600',
      background: 'teal-50'
    },
    logo: {
      type: 'custom'
    },
    contact: {
      website: 'https://lexingtonfamilychiro.net'
    },
    specialFeatures: [
      'Serving since 1995',
      'Multiple chiropractic techniques',
      'Welcomes all ages',
      'Ergonomics specialist'
    ],
    ctaButtons: [
      { text: 'Book Now', type: 'primary' },
      { text: 'New Patient Form', type: 'secondary' }
    ]
  },

  patrick: {
    id: 'patrick',
    businessName: 'Patrick Hourican Plastering',
    tagline: 'Serving Greater Boston since 1986',
    description: 'Quality work, on time, with a strong service-oriented attitude. Fully insured and specializing in blueboard and plastering with attention to detail.',
    services: [
      'Blueboard & Plastering', 'Patches & Crack Repairs', 'Texturing',
      'Remodeling Projects', 'Wall & Ceiling Work'
    ],
    colors: {
      primary: 'green-700',
      secondary: 'green-800',
      accent: 'green-600',
      background: 'green-50'
    },
    logo: {
      type: 'text',
      content: 'Patrick Hourican Plastering'
    },
    contact: {
      phone: '781-643-5941',
      website: 'https://www.patrickhouricanplastering.com'
    },
    specialFeatures: [
      'Serving since 1986',
      'Fully insured',
      'Job-site cleanliness',
      'No job too big or small'
    ],
    ctaButtons: [
      { text: 'Free Estimate', type: 'primary' },
      { text: 'Call Now', type: 'secondary' }
    ]
  }
};

export function getDemoSiteData(id: string): DemoSiteData | null {
  return demoSites[id] || null;
}