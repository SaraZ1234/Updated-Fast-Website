'use client';

import { motion } from 'framer-motion';
import { Landmark, HeartPulse, ShoppingBag, GraduationCap, Factory, Cloud, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { Sector } from '@/lib/data/sectors';
import { services } from '@/lib/data/services';
import { accentMap } from '@/lib/accent';
import { cn } from '@/lib/utils';

const iconMap = {
  Landmark,
  HeartPulse,
  ShoppingBag,
  GraduationCap,
  Factory,
  Cloud,
};

export function SectorCard({ sector, index }: { sector: Sector; index: number }) {
  const Icon = iconMap[sector.icon];
  const accent = accentMap[sector.accent];
  const relatedServices = services.filter((s) => sector.relevantServices.includes(s.slug));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-brand-900/50 p-7 transition-colors duration-300 hover:border-white/10"
    >
      <div className={cn('mb-5 flex h-12 w-12 items-center justify-center rounded-xl', accent.bgSoft)}>
        <Icon className={cn('h-6 w-6', accent.text)} strokeWidth={1.8} />
      </div>
      <h3 className="mb-2 font-display text-xl font-semibold text-white">{sector.name}</h3>
      <p className="mb-6 text-sm leading-relaxed text-slate-400">{sector.description}</p>

      <div className="mt-auto">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Relevant services
        </p>
        <div className="flex flex-wrap gap-2">
          {relatedServices.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={cn(
                'inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors',
                accent.border,
                accent.text,
                'hover:bg-white/5'
              )}
            >
              {s.name}
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
