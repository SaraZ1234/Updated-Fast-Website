'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Home,
  Hotel,
  Server,
  Megaphone,
  Printer,
  BookOpen,
  Plane,
  Users,
  Truck,
  ArrowRight,
} from 'lucide-react';
import type { Company } from '@/lib/data/companies';
import { accentMap } from '@/lib/accent';
import { cn } from '@/lib/utils';
import { CompanyModal } from './CompanyModal';

const iconMap = {
  briefcase: Briefcase,
  home: Home,
  hotel: Hotel,
  server: Server,
  megaphone: Megaphone,
  printer: Printer,
  book: BookOpen,
  plane: Plane,
  users: Users,
  truck: Truck,
};

export function CompanyCard({ company, index }: { company: Company; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = iconMap[company.icon];
  const accent = accentMap[company.accent];

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, delay: (index % 5) * 0.06, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'group relative flex h-full w-full flex-col items-start rounded-xl border border-white/[0.06] bg-brand-900/50 p-5 text-left transition-all duration-300',
          'hover:-translate-y-1 hover:border-white/10 hover:bg-brand-900',
          'focus-visible:-translate-y-1'
        )}
      >
        <div
          className={cn(
            'absolute inset-x-0 top-0 h-[2px] rounded-t-xl bg-gradient-to-r opacity-70',
            accent.gradient
          )}
        />
        <div
          className={cn(
            'mb-4 flex h-11 w-11 items-center justify-center rounded-lg',
            accent.bgSoft
          )}
        >
          <Icon className={cn('h-5 w-5', accent.text)} strokeWidth={1.8} />
        </div>
        <h3 className="mb-1.5 font-display text-base font-semibold text-white">
          {company.name}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">{company.tagline}</p>
        <span
          className={cn(
            'mt-auto inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide',
            accent.text
          )}
        >
          View details
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </motion.button>

      <CompanyModal company={company} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
