import type { AccentColor } from './data/companies';

interface AccentClasses {
  text: string;
  bg: string;
  bgSoft: string;
  border: string;
  ring: string;
  gradient: string;
  glow: string;
  dot: string;
}

export const accentMap: Record<AccentColor, AccentClasses> = {
  blue: {
    text: 'text-blue-400',
    bg: 'bg-blue-500',
    bgSoft: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    ring: 'ring-blue-500/40',
    gradient: 'from-blue-500 to-blue-400',
    glow: 'bg-blue-500/20',
    dot: 'bg-blue-400',
  },
  cyan: {
    text: 'text-cyan-400',
    bg: 'bg-cyan-500',
    bgSoft: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    ring: 'ring-cyan-500/40',
    gradient: 'from-cyan-500 to-cyan-400',
    glow: 'bg-cyan-500/20',
    dot: 'bg-cyan-400',
  },
  amber: {
    text: 'text-amber-400',
    bg: 'bg-amber-500',
    bgSoft: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    ring: 'ring-amber-500/40',
    gradient: 'from-amber-500 to-amber-400',
    glow: 'bg-amber-500/20',
    dot: 'bg-amber-400',
  },
  violet: {
    text: 'text-violet-400',
    bg: 'bg-violet-500',
    bgSoft: 'bg-violet-500/10',
    border: 'border-violet-500/30',
    ring: 'ring-violet-500/40',
    gradient: 'from-violet-500 to-violet-400',
    glow: 'bg-violet-500/20',
    dot: 'bg-violet-400',
  },
  emerald: {
    text: 'text-emerald-400',
    bg: 'bg-emerald-500',
    bgSoft: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    ring: 'ring-emerald-500/40',
    gradient: 'from-emerald-500 to-emerald-400',
    glow: 'bg-emerald-500/20',
    dot: 'bg-emerald-400',
  },
  rose: {
    text: 'text-rose-400',
    bg: 'bg-rose-500',
    bgSoft: 'bg-rose-500/10',
    border: 'border-rose-500/30',
    ring: 'ring-rose-500/40',
    gradient: 'from-rose-500 to-rose-400',
    glow: 'bg-rose-500/20',
    dot: 'bg-rose-400',
  },
};
