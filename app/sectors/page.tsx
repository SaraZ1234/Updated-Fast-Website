import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SectorCard } from '@/components/SectorCard';
import { sectors } from '@/lib/data/sectors';

export const metadata: Metadata = {
  title: 'Sectors | Fast Group',
  description: 'Industries served by Fast Group across finance, healthcare, retail, education, manufacturing, and technology.',
};

export default function SectorsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-950 text-slate-100">
      <Header />

      <section className="relative overflow-hidden border-b border-white/[0.04] pb-16 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900 to-brand-950" />
          <div className="absolute left-1/4 top-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
          <div className="absolute right-1/4 top-24 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px]" />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Industries
          </span>
          <h1 className="text-balance mx-auto mb-5 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Six Sectors. One Group That Understands Them.
          </h1>
          <p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-slate-400 sm:text-base">
            Every sector has different stakes and different rules. Our teams bring the specific
            expertise each one demands.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, idx) => (
              <SectorCard key={sector.id} sector={sector} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
