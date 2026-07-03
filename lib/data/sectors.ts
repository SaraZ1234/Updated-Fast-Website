import type { AccentColor } from './companies';

export interface Sector {
  id: string;
  name: string;
  description: string;
  accent: AccentColor;
  icon: 'Landmark' | 'HeartPulse' | 'ShoppingBag' | 'GraduationCap' | 'Factory' | 'Cloud';
  relevantServices: string[];
}

export const sectors: Sector[] = [
  {
    id: 'finance-banking',
    name: 'Finance & Banking',
    description:
      'Secure digital platforms, compliance-ready infrastructure, and data systems for banks and financial institutions.',
    accent: 'blue',
    icon: 'Landmark',
    relevantServices: ['cyber-security', 'data-science', 'cloud-hosting-security', 'software-development'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description:
      'Patient-facing platforms, secure data handling, and operational systems built for healthcare providers.',
    accent: 'rose',
    icon: 'HeartPulse',
    relevantServices: ['software-development', 'data-science', 'cyber-security', 'mobile-app-development'],
  },
  {
    id: 'ecommerce-retail',
    name: 'E-commerce & Retail',
    description:
      'Storefronts, fulfillment systems, and marketing engines built to move product and grow repeat customers.',
    accent: 'amber',
    icon: 'ShoppingBag',
    relevantServices: ['ecommerce-solutions', 'digital-marketing', 'lead-generation', 'seo-content-creation'],
  },
  {
    id: 'education-training',
    name: 'Education & Training',
    description:
      'Learning platforms, content systems, and enrollment funnels for schools, training providers, and edtech.',
    accent: 'violet',
    icon: 'GraduationCap',
    relevantServices: ['web-development', 'video-animation', 'ui-ux-design', 'digital-marketing'],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description:
      'IoT-connected production monitoring, automation, and supply chain systems for manufacturers.',
    accent: 'emerald',
    icon: 'Factory',
    relevantServices: ['iot-solutions', 'rpa-solutions', 'data-science', 'ai-ml'],
  },
  {
    id: 'technology-saas',
    name: 'Technology & SaaS',
    description:
      'Product engineering, cloud infrastructure, and growth marketing for software and SaaS companies.',
    accent: 'cyan',
    icon: 'Cloud',
    relevantServices: ['software-development', 'cloud-hosting-security', 'ai-ml', 'web-development'],
  },
];
