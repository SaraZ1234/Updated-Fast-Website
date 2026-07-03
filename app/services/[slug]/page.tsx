import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import * as Icons from 'lucide-react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/lib/data/services';
import { accentMap } from '@/lib/accent';
import { cn } from '@/lib/utils';

interface ServicePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service | Fast Group' };
  return {
    title: `${service.name} | Fast Group`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = Icons[service.icon] as React.ComponentType<{ className?: string; strokeWidth?: number }>;
  const accent = accentMap[service.accent];
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-950 text-slate-100">
      <Header />

      <section className="relative overflow-hidden border-b border-white/[0.04] pb-16 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900 to-brand-950" />
          <div className={cn('absolute left-1/4 top-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full blur-[120px]', accent.glow)} />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all services
          </Link>

          <div className="max-w-3xl">
            <div className={cn('mb-6 flex h-14 w-14 items-center justify-center rounded-2xl', accent.bgSoft)}>
              {Icon && <Icon className={cn('h-7 w-7', accent.text)} strokeWidth={1.8} />}
            </div>
            <h1 className="mb-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              {service.name}
            </h1>
            <p className="text-base font-light leading-relaxed text-slate-400 sm:text-lg">
              {service.longDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto grid grid-cols-1 gap-10 px-6 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <h2 className="mb-6 font-display text-xl font-semibold text-white sm:text-2xl">
              How we deliver it
            </h2>
            <div className="space-y-6">
              {service.process.map((step, i) => (
                <div key={step.title} className="flex gap-4 rounded-xl border border-white/[0.06] bg-brand-900/50 p-5">
                  <span
                    className={cn(
                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold',
                      accent.bgSoft,
                      accent.text
                    )}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="mb-1 font-semibold text-white">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-400">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-white/[0.06] bg-brand-900/50 p-6">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                What&apos;s included
              </h3>
              <ul className="mb-6 space-y-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className={cn('mt-0.5 h-4 w-4 shrink-0', accent.text)} />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Request this service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.04] bg-brand-900/40 py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 font-display text-xl font-semibold text-white sm:text-2xl">
            Related services
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
            {related.map((s, idx) => (
              <ServiceCard key={s.id} service={s} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
