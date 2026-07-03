'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Layers, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CompanyCard } from '@/components/CompanyCard';
import { ServiceCard } from '@/components/ServiceCard';
import { SectorCard } from '@/components/SectorCard';
import { SectionHeading } from '@/components/SectionHeading';
import { companies } from '@/lib/data/companies';
import { services } from '@/lib/data/services';
import { sectors } from '@/lib/data/sectors';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 90, damping: 16 } },
};

const stats = [
  { number: '10', label: 'Divisions', icon: Building2 },
  { number: '19', label: 'Services', icon: Layers },
  { number: '500+', label: 'Clients served', icon: Users },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-950 text-slate-100">
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden pb-16 pt-32 sm:pt-36">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900 via-brand-950 to-brand-950" />
          <div className="absolute left-1/4 top-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[130px] sm:h-[520px] sm:w-[520px]" />
          <div className="absolute right-1/4 top-40 h-[360px] w-[360px] translate-x-1/2 rounded-full bg-cyan-400/10 blur-[110px] sm:h-[440px] sm:w-[440px]" />
          <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-violet-500/[0.06] blur-[120px]" />
          <div className="absolute inset-0 bg-grid-lines bg-[size:4rem_4rem] opacity-[0.15] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_60%,transparent_100%)]" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div variants={itemVariants} className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-300">
                  10 Divisions · 19 Services · One Group
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-balance mb-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-7xl"
            >
              Enterprise Solutions,
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Engineered for Growth
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mb-10 max-w-2xl text-base font-light leading-relaxed text-slate-400 sm:text-lg md:text-xl"
            >
              Fast Group operates 10 specialized divisions and 19 services spanning technology,
              real estate, hospitality, logistics, and beyond — built to move your business forward.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-4 px-4 sm:flex-row"
            >
              <Link
                href="/services"
                className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3.5 text-center font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_50px_-8px_rgba(59,123,255,0.5)] sm:w-auto"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-8 py-3.5 text-center font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] sm:w-auto"
              >
                Get in Touch
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mx-auto mt-16 grid max-w-xl grid-cols-3 gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm sm:mt-20"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center">
                  <stat.icon className="mb-2 h-5 w-5 text-cyan-400" strokeWidth={1.8} />
                  <p className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-500 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Divisions */}
      <section className="relative border-t border-white/[0.04] bg-brand-950 py-20 sm:py-28">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Our Group"
            title="Ten Divisions, One Standard"
            description="Every division operates independently, but shares the same commitment to quality, reliability, and craft."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
            {companies.map((company, idx) => (
              <CompanyCard key={company.id} company={company} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative border-t border-white/[0.04] bg-brand-900/40 py-20 sm:py-28">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Capabilities"
            title="Services Built to Deploy"
            description="From strategy to execution, our teams cover the full technology and growth stack."
          />
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 9).map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center sm:mt-14"
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-slate-300 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:text-white"
            >
              View All 19 Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sectors */}
      <section className="relative border-t border-white/[0.04] bg-brand-950 py-20 sm:py-28">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Industries"
            title="Sectors We Serve"
            description="Purpose-built expertise for the industries where the stakes, and the standards, are highest."
          />
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, idx) => (
              <SectorCard key={sector.id} sector={sector} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/[0.04] bg-brand-900/40 py-20 sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[110px]" aria-hidden="true" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Ready to Build with Fast Group?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-sm font-light leading-relaxed text-slate-400 sm:text-base">
              Whether you need one service or a full division on your side, our teams are ready
              to plug in.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3.5 text-center font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
              >
                Start a Project
              </Link>
              <Link
                href="/opportunities"
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-8 py-3.5 text-center font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-white/20 sm:w-auto"
              >
                Join Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
