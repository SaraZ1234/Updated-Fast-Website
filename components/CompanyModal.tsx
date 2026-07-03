'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
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
  X,
  Calendar,
  CheckCircle2,
} from 'lucide-react';
import type { Company } from '@/lib/data/companies';
import { accentMap } from '@/lib/accent';
import { cn } from '@/lib/utils';

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

interface CompanyModalProps {
  company: Company;
  open: boolean;
  onClose: () => void;
}

export function CompanyModal({ company, open, onClose }: CompanyModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const Icon = iconMap[company.icon];
  const accent = accentMap[company.accent];

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="company-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Panel: bottom sheet on mobile, centered card on sm+ */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'relative flex w-full flex-col overflow-hidden border border-white/10 bg-brand-900',
              'max-h-[88vh] rounded-t-2xl sm:max-h-[85vh] sm:max-w-lg sm:rounded-2xl md:max-w-xl'
            )}
          >
            {/* Drag handle (mobile only) */}
            <div className="flex justify-center pb-1 pt-3 sm:hidden">
              <span className="h-1 w-10 rounded-full bg-white/15" />
            </div>

            {/* Header */}
            <div className="relative shrink-0 border-b border-white/5 px-5 pb-5 pt-3 sm:px-7 sm:pt-6">
              <div className={cn('absolute inset-x-0 top-0 h-1 bg-gradient-to-r', accent.gradient)} />
              <button
                ref={closeBtnRef}
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white sm:right-5 sm:top-5"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-start gap-3 pr-12 sm:gap-4">
                <div className={cn('flex h-12 w-12 shrink-0 items-center justify-center rounded-xl', accent.bgSoft)}>
                  <Icon className={cn('h-6 w-6', accent.text)} strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <h2
                    id="company-modal-title"
                    className="font-display text-lg font-bold leading-tight text-white sm:text-xl"
                  >
                    {company.name}
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">{company.tagline}</p>
                </div>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
              <p className="mb-6 text-sm leading-relaxed text-slate-300 sm:text-[15px]">
                {company.longDescription}
              </p>

              <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                <Calendar className="h-3.5 w-3.5" />
                Established {company.founded}
              </div>

              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Key capabilities
              </h3>
              <ul className="space-y-2.5">
                {company.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className={cn('mt-0.5 h-4 w-4 shrink-0', accent.text)} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="flex shrink-0 flex-col gap-3 border-t border-white/5 bg-brand-900/80 px-5 py-4 sm:flex-row sm:justify-end sm:px-7">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                Close
              </button>
              <a
                href="/contact"
                className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Talk to this division
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
