'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Code2,
  PenTool,
  Megaphone,
  Handshake,
  Headphones,
  Users2,
  Wallet,
  FlaskConical,
  ArrowRight,
} from 'lucide-react';
import type { Department } from '@/lib/data/opportunities';
import { accentMap } from '@/lib/accent';
import { cn } from '@/lib/utils';

const iconMap = {
  Code2,
  PenTool,
  Megaphone,
  Handshake,
  HeadphonesIcon: Headphones,
  Users2,
  Wallet,
  FlaskConical,
};

export function DepartmentCard({ department, index }: { department: Department; index: number }) {
  const Icon = iconMap[department.icon];
  const accent = accentMap[department.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: (index % 8) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-brand-900/50 p-6 transition-colors duration-300 hover:border-white/10"
    >
      <div className={cn('mb-4 flex h-11 w-11 items-center justify-center rounded-lg', accent.bgSoft)}>
        <Icon className={cn('h-5 w-5', accent.text)} strokeWidth={1.8} />
      </div>
      <h3 className="mb-2 font-display text-base font-semibold text-white">{department.name}</h3>
      <p className="mb-4 text-sm leading-relaxed text-slate-400">{department.description}</p>

      <div className="mb-5 flex flex-wrap gap-1.5">
        {department.openRoles.map((role) => (
          <span
            key={role}
            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-slate-400"
          >
            {role}
          </span>
        ))}
      </div>

      <Link
        href={`/contact?department=${department.id}`}
        className={cn(
          'mt-auto inline-flex items-center gap-1.5 text-sm font-semibold',
          accent.text
        )}
      >
        Enroll in this department
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}
