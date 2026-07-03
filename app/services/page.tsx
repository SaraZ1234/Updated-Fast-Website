import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/lib/data/services';

export const metadata: Metadata = {
  title: 'Services | Fast Group',
  description: 'Explore all 19 services offered across Fast Group divisions.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-950 text-slate-100">
      <Header />

      <section className="relative overflow-hidden border-b border-white/[0.04] pb-16 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900 to-brand-950" />
          <div className="absolute left-1/3 top-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[110px]" />
          <div className="absolute right-1/4 top-20 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[100px]" />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            What We Offer
          </span>
          <h1 className="text-balance mx-auto mb-5 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            19 Services Across the Full Technology & Growth Stack
          </h1>
          <p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-slate-400 sm:text-base">
            From e-commerce to AI & machine learning, every service is delivered by a specialized
            team inside Fast Group. Select a service to see what&apos;s included.
          </p>
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
