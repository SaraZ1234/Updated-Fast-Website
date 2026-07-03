import Link from 'next/link';
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { companies } from '@/lib/data/companies';

const footerServices = [
  { name: 'Software Development', slug: 'software-development' },
  { name: 'UI/UX Design', slug: 'ui-ux-design' },
  { name: 'Digital Marketing', slug: 'digital-marketing' },
  { name: 'Cyber Security', slug: 'cyber-security' },
  { name: 'AI & Machine Learning', slug: 'ai-ml' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-brand-900/60">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400">
                <Zap className="h-5 w-5 text-brand-950" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-bold text-white">Fast Group</span>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-400">
              A diversified enterprise group operating 10 divisions and 19 specialized services
              across technology, real estate, hospitality, logistics, and more.
            </p>
            <div className="flex items-center gap-3">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-blue-500/30 hover:text-blue-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Divisions
            </h3>
            <ul className="space-y-2.5">
              {companies.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <span className="text-sm text-slate-400">{c.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm font-medium text-blue-400 hover:text-blue-300">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                <span>148 Commerce Avenue, Suite 400, Metro City</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <Phone className="h-4 w-4 shrink-0 text-blue-400" />
                <a href="tel:+18005550142" className="hover:text-white">+1 (800) 555-0142</a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <Mail className="h-4 w-4 shrink-0 text-blue-400" />
                <a href="mailto:hello@fastgroup.com" className="hover:text-white">hello@fastgroup.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">© {year} Fast Group. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
