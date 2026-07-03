import type { AccentColor } from './companies';

export interface Department {
  id: string;
  name: string;
  description: string;
  openRoles: string[];
  accent: AccentColor;
  icon: 'Code2' | 'PenTool' | 'Megaphone' | 'Handshake' | 'HeadphonesIcon' | 'Users2' | 'Wallet' | 'FlaskConical';
}

export const departments: Department[] = [
  {
    id: 'engineering',
    name: 'Engineering',
    description: 'Build the software, cloud infrastructure, and platforms that power every division.',
    openRoles: ['Frontend Engineer', 'Backend Engineer', 'DevOps Engineer', 'QA Engineer'],
    accent: 'blue',
    icon: 'Code2',
  },
  {
    id: 'design',
    name: 'Design',
    description: 'Shape product, brand, and visual experiences across the group.',
    openRoles: ['UI/UX Designer', 'Graphic Designer', 'Motion Designer'],
    accent: 'violet',
    icon: 'PenTool',
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Grow brand awareness and pipeline across digital and traditional channels.',
    openRoles: ['Digital Marketing Specialist', 'Content Strategist', 'SEO Analyst'],
    accent: 'amber',
    icon: 'Megaphone',
  },
  {
    id: 'sales-bd',
    name: 'Sales & Business Development',
    description: 'Build relationships and close partnerships that grow the group\u2019s footprint.',
    openRoles: ['Business Development Manager', 'Account Executive'],
    accent: 'emerald',
    icon: 'Handshake',
  },
  {
    id: 'customer-success',
    name: 'Customer Success',
    description: 'Support clients across every division and make sure they get real value.',
    openRoles: ['Customer Success Manager', 'Support Specialist'],
    accent: 'cyan',
    icon: 'HeadphonesIcon',
  },
  {
    id: 'hr-people',
    name: 'Human Resources',
    description: 'Recruit, support, and grow the people behind all 10 divisions.',
    openRoles: ['HR Generalist', 'Talent Acquisition Specialist'],
    accent: 'rose',
    icon: 'Users2',
  },
  {
    id: 'finance-ops',
    name: 'Finance & Operations',
    description: 'Keep the group\u2019s operations, budgeting, and reporting running smoothly.',
    openRoles: ['Financial Analyst', 'Operations Coordinator'],
    accent: 'blue',
    icon: 'Wallet',
  },
  {
    id: 'data-ai-research',
    name: 'Data & AI Research',
    description: 'Research and build the data and AI systems used across divisions.',
    openRoles: ['Data Scientist', 'ML Engineer', 'Research Analyst'],
    accent: 'violet',
    icon: 'FlaskConical',
  },
];
