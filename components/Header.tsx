'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/sectors', label: 'Sectors' },
  { href: '/opportunities', label: 'Opportunities' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/5 bg-brand-950/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6 sm:h-20">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-glow">
            <Zap className="h-5 w-5 text-brand-950" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Fast Group
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative rounded-md px-4 py-2 text-sm font-medium transition-colors',
                  active ? 'text-white' : 'text-slate-400 hover:text-white'
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'grid overflow-hidden transition-all duration-300 ease-in-out lg:hidden',
          open ? 'grid-rows-[1fr] border-b border-white/5' : 'grid-rows-[0fr]'
        )}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 bg-brand-950/95 px-6 pb-6 pt-2 backdrop-blur-xl">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-lg px-4 py-3 text-base font-medium transition-colors',
                    active
                      ? 'bg-white/5 text-white'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-center text-base font-semibold text-white"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
