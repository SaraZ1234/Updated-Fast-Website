'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/lib/data/services';
import { accentMap } from '@/lib/accent';
import { cn } from '@/lib/utils';

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = Icons[service.icon] as React.ComponentType<{ className?: string; strokeWidth?: number }>;
  const accent = accentMap[service.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: (index % 9) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        href={`/services/${service.slug}`}
        className={cn(
          'group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-brand-900/50 p-6 transition-all duration-300',
          'hover:-translate-y-1 hover:border-white/10 hover:bg-brand-900'
        )}
      >
        <div className={cn('mb-5 flex h-12 w-12 items-center justify-center rounded-xl', accent.bgSoft)}>
          {Icon && <Icon className={cn('h-6 w-6', accent.text)} strokeWidth={1.8} />}
        </div>
        <h3 className="mb-2 font-display text-lg font-semibold text-white">{service.name}</h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400">
          {service.shortDescription}
        </p>
        <span className={cn('inline-flex items-center gap-1.5 text-sm font-semibold', accent.text)}>
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  );
}
