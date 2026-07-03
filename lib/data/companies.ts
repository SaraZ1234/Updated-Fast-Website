export type AccentColor = 'blue' | 'cyan' | 'amber' | 'violet' | 'emerald' | 'rose';

export interface Company {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  accent: AccentColor;
  founded: string;
  highlights: string[];
  icon:
    | 'briefcase'
    | 'home'
    | 'hotel'
    | 'server'
    | 'megaphone'
    | 'printer'
    | 'book'
    | 'plane'
    | 'users'
    | 'truck';
}

export const companies: Company[] = [
  {
    id: 'dacor-dice',
    slug: 'dacor-dice',
    name: 'Dacor Dice',
    tagline: 'Product engineering & manufacturing systems',
    description: 'Precision product design and manufacturing engineering.',
    longDescription:
      'Dacor Dice is the group\u2019s product engineering arm, designing and manufacturing precision components and systems for industrial and consumer applications. The team combines mechanical engineering, tooling design, and quality assurance to take products from concept to production line.',
    accent: 'violet',
    founded: '2011',
    highlights: ['Precision tooling & die design', 'Prototype-to-production support', 'Quality & compliance testing'],
    icon: 'briefcase',
  },
  {
    id: 'fast-real-estate',
    slug: 'fast-real-estate',
    name: 'Fast Real Estate',
    tagline: 'Commercial & residential property solutions',
    description: 'Property development, leasing, and investment advisory.',
    longDescription:
      'Fast Real Estate develops, manages, and advises on commercial and residential property across key growth markets. The division handles everything from site acquisition and development to leasing, property management, and investment advisory for institutional and private clients.',
    accent: 'emerald',
    founded: '2013',
    highlights: ['Property development & leasing', 'Investment advisory', 'Facilities & asset management'],
    icon: 'home',
  },
  {
    id: 'fast-hospitality',
    slug: 'fast-hospitality',
    name: 'Fast Hospitality',
    tagline: 'Hotels, dining & guest experience management',
    description: 'Hospitality operations spanning hotels, dining, and events.',
    longDescription:
      'Fast Hospitality operates hotels, dining concepts, and event venues built around consistent, high-quality guest experience. The division manages everything from front-of-house operations to brand standards, staff training, and guest experience technology.',
    accent: 'rose',
    founded: '2014',
    highlights: ['Hotel & venue operations', 'Guest experience design', 'F&B and events management'],
    icon: 'hotel',
  },
  {
    id: 'fast-it-solutions',
    slug: 'fast-it-solutions',
    name: 'Fast IT Solutions',
    tagline: 'Software, cloud & infrastructure engineering',
    description: 'Enterprise software, cloud, and IT infrastructure.',
    longDescription:
      'Fast IT Solutions is the group\u2019s technology backbone, delivering custom software, cloud infrastructure, and IT support to both internal divisions and external enterprise clients. The team specializes in scalable architecture, DevOps, and long-term platform maintenance.',
    accent: 'blue',
    founded: '2012',
    highlights: ['Custom software development', 'Cloud infrastructure & DevOps', 'Enterprise IT support'],
    icon: 'server',
  },
  {
    id: 'fast-marketing',
    slug: 'fast-marketing',
    name: 'Fast Marketing',
    tagline: 'Brand strategy & performance marketing',
    description: 'Integrated marketing, branding, and growth campaigns.',
    longDescription:
      'Fast Marketing builds brand strategy and runs performance marketing campaigns across digital and traditional channels. The team covers everything from positioning and creative direction to paid media, content, and campaign analytics.',
    accent: 'amber',
    founded: '2015',
    highlights: ['Brand strategy & creative', 'Performance & paid media', 'Analytics & reporting'],
    icon: 'megaphone',
  },
  {
    id: 'fast-printing',
    slug: 'fast-printing',
    name: 'Fast Printing',
    tagline: 'Commercial print & packaging production',
    description: 'Large-scale commercial printing and packaging.',
    longDescription:
      'Fast Printing runs commercial print and packaging production at scale, serving both internal divisions and external clients. Capabilities span offset and digital printing, packaging design, and fulfillment logistics for print-based products.',
    accent: 'cyan',
    founded: '2010',
    highlights: ['Offset & digital printing', 'Packaging production', 'Print fulfillment & logistics'],
    icon: 'printer',
  },
  {
    id: 'fast-education',
    slug: 'fast-education',
    name: 'Fast Education',
    tagline: 'Training, upskilling & academic programs',
    description: 'Professional training and academic partnerships.',
    longDescription:
      'Fast Education designs and delivers training programs, professional certifications, and academic partnerships. The division works with corporate clients on upskilling programs and with learners directly on career-focused courses.',
    accent: 'violet',
    founded: '2016',
    highlights: ['Corporate upskilling programs', 'Professional certifications', 'Academic partnerships'],
    icon: 'book',
  },
  {
    id: 'fast-travel',
    slug: 'fast-travel',
    name: 'Fast Travel',
    tagline: 'Corporate & leisure travel management',
    description: 'End-to-end travel planning and management services.',
    longDescription:
      'Fast Travel manages corporate and leisure travel end-to-end, from itinerary planning and booking to on-trip support. The division partners with airlines, hotel groups, and local operators to deliver reliable travel programs.',
    accent: 'blue',
    founded: '2017',
    highlights: ['Corporate travel management', 'Leisure travel planning', '24/7 on-trip support'],
    icon: 'plane',
  },
  {
    id: 'fast-consulting',
    slug: 'fast-consulting',
    name: 'Fast Consulting',
    tagline: 'Strategy, operations & transformation advisory',
    description: 'Management consulting for strategy and operations.',
    longDescription:
      'Fast Consulting advises organizations on strategy, operations, and digital transformation. The team works alongside leadership to identify growth opportunities, streamline operations, and implement change programs that stick.',
    accent: 'emerald',
    founded: '2018',
    highlights: ['Strategy & growth advisory', 'Operational transformation', 'Change management'],
    icon: 'users',
  },
  {
    id: 'fast-logistics',
    slug: 'fast-logistics',
    name: 'Fast Logistics',
    tagline: 'Freight, warehousing & supply chain',
    description: 'End-to-end logistics and supply chain management.',
    longDescription:
      'Fast Logistics manages freight, warehousing, and supply chain operations for both group divisions and external clients. Services include last-mile delivery, warehouse management, and supply chain optimization powered by real-time tracking.',
    accent: 'amber',
    founded: '2019',
    highlights: ['Freight & last-mile delivery', 'Warehouse management', 'Supply chain optimization'],
    icon: 'truck',
  },
];
