'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SectorCard } from '@/components/SectorCard';
import { sectors } from '@/lib/data/sectors';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, TrendingUp, Cpu, Globe, 
  Layers, ArrowRight, Activity, ShieldCheck, 
  GitMerge, Rocket 
} from 'lucide-react';

// Fluid animation configurations
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const synergyData = [
  {
    id: 'fin-health',
    title: 'FinTech ✕ Healthcare',
    desc: 'Medical billing friction and high-compliance payment routing.',
    detail: 'By combining our micro-payment architectures with HIPAA-compliant data pipelines, we design seamless payment systems that scale across thousands of healthcare facilities, reducing claim processing backlogs by up to 40%.'
  },
  {
    id: 'retail-ai',
    title: 'Retail ✕ Manufacturing',
    desc: 'Connecting storefront inventory data directly to custom supply chains.',
    detail: 'We build predictive analytics frameworks that match live retail checkout velocities directly back to manufacturing facility scheduling. Real-time consumption trends feed localized production runs automatically.'
  },
  {
    id: 'edu-tech',
    title: 'Education ✕ Global Tech',
    desc: 'Cloud infrastructure to support distributed enterprise training modules.',
    detail: 'Migrating legacy learning frameworks into ultra-scalable multi-tenant SaaS environments, engineered for minimal latency and complex compliance standards required globally.'
  }
];

export default function SectorsPage() {
  const [activeTab, setActiveTab] = useState(synergyData[0].id);

  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-950 text-slate-100">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden border-b border-white/[0.04] pb-12 pt-28 sm:pb-16 sm:pt-40">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900 to-brand-950" />
          <div className="absolute left-1/4 top-0 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[100px] sm:h-[360px] sm:w-[360px] sm:blur-[120px]" />
          <div className="absolute right-1/4 top-24 h-[220px] w-[220px] rounded-full bg-blue-500/10 blur-[80px] sm:h-[300px] sm:w-[300px] sm:blur-[100px]" />
        </div>
        
        <motion.div 
          className="container relative z-10 mx-auto px-4 sm:px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-3 inline-block text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400 sm:mb-4 sm:text-xs">
            Industries & Fields
          </span>
          <h1 className="text-balance mx-auto mb-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:mb-5 sm:text-5xl md:text-6xl">
            Six Sectors. One Group That Understands Them.
          </h1>
          <p className="mx-auto max-w-2xl text-xs font-light leading-relaxed text-slate-400 sm:text-base">
            Every sector has different stakes and different rules. Our teams bring the specific
            expertise each one demands to scale complex systems reliably.
          </p>
        </motion.div>
      </section>

      {/* --- CORE SECTORS CARD MATRIX --- */}
      <section className="py-12 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="mb-8 flex items-center justify-between sm:mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg font-semibold tracking-tight text-white sm:text-2xl">
              Industries We Power
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {sectors.map((sector, idx) => (
              <motion.div key={sector.id} variants={fadeInUp}>
                <SectorCard sector={sector} index={idx} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 1: STATS & CORE VALUE BLOCK --- */}
      <section className="relative border-y border-white/[0.03] bg-brand-950/40 py-12 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-xl font-bold tracking-tight text-white sm:text-3xl">
                Cross-Industry Intelligence, Customized Execution.
              </h2>
              <p className="mt-3 text-xs font-light leading-relaxed text-slate-400 sm:mt-4 sm:text-sm">
                We don&apos;t build cookie-cutter products. By anchoring our development directly within distinct market sectors, our applications respect your regulatory restrictions, compliance patterns, and specific user profiles natively.
              </p>
              
              <div className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
                {[
                  "Strict compliance (HIPAA, GDPR, SOC2) by default",
                  "Deep-domain field architects on every project",
                  "Cross-pollinated software patterns for Industry 4.0"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs text-slate-300 sm:text-sm">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400 sm:h-4 sm:w-4" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-7"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                { icon: Globe, val: "99.99%", label: "Platform Uptime Sustained" },
                { icon: TrendingUp, val: "2.4x", label: "Average Growth Across Channels" },
                { icon: Cpu, val: "100%", label: "Native Automation Systems" },
                { icon: CheckCircle2, val: "$4B+", label: "Capital Flow Handled Annually" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  className="rounded-xl border border-white/[0.03] bg-gradient-to-br from-white/[0.01] to-transparent p-4 sm:rounded-2xl sm:p-6 backdrop-blur-sm"
                >
                  <stat.icon className="mb-2 h-4 w-4 text-emerald-400/80 sm:mb-3 sm:h-5 sm:w-5" />
                  <div className="font-display text-lg font-bold tracking-tight text-white sm:text-3xl">{stat.val}</div>
                  <div className="mt-0.5 text-[10px] text-slate-400 font-light sm:text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- SECTION 2: RESPONSIVE INTERACTIVE SYNERGIES MATRIX --- */}
      <section className="py-12 sm:py-24 border-b border-white/[0.03]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="mx-auto mb-8 max-w-2xl text-center sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-400 sm:px-3 sm:py-1 sm:text-xs">
              <Layers className="h-3 w-3" /> Cross-Pollination
            </div>
            <h2 className="font-display text-xl font-bold tracking-tight text-white sm:text-3xl">
              Where Industries Converge
            </h2>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              True innovation happens where disciplines meet. See how our groups align cross-sector expertise to drive unexpected outcomes.
            </p>
          </motion.div>

          {/* Grid layout converts to simple stacked items on mobile, side-by-side on desktop */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 max-w-5xl mx-auto items-start sm:gap-6">
            
            {/* Scrollable button tray on super small phones, stacked buttons on laptops */}
            <div className="flex flex-row gap-2 overflow-x-auto pb-2 min-w-full snap-x lg:flex-col lg:overflow-x-visible lg:pb-0 lg:col-span-4 scrollbar-none">
              {synergyData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`snap-center shrink-0 w-[240px] text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between lg:w-full ${
                    activeTab === item.id 
                    ? 'border-emerald-500/30 bg-emerald-500/[0.04] text-white' 
                    : 'border-white/[0.03] bg-transparent text-slate-400 hover:bg-white/[0.02]'
                  }`}
                >
                  <span className="text-xs font-medium truncate sm:text-sm">{item.title}</span>
                  <ArrowRight className={`hidden sm:block h-4 w-4 transform transition-transform duration-200 ${activeTab === item.id ? 'translate-x-1 text-emerald-400' : 'text-slate-600'}`} />
                </button>
              ))}
            </div>

            {/* Content Display Window */}
            <div className="lg:col-span-8 min-h-[160px] rounded-xl border border-white/[0.04] bg-white/[0.01] p-5 sm:rounded-2xl sm:p-8">
              <AnimatePresence mode="wait">
                {synergyData.map((item) => item.id === activeTab && (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h4 className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400 mb-1.5">Use Case Scenario</h4>
                    <h3 className="text-sm font-medium text-white mb-2 sm:text-lg">{item.desc}</h3>
                    <p className="text-xs font-light leading-relaxed text-slate-400 sm:text-sm">{item.detail}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: RESPONSIVE TIMELINE --- */}
      <section className="py-12 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="mx-auto mb-10 max-w-2xl text-center sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-xl font-bold tracking-tight text-white sm:text-3xl">
              From Engagement to Implementation
            </h2>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              How we integrate custom architecture patterns seamlessly into enterprise operations.
            </p>
          </motion.div>

          {/* Adjusted padding rules for seamless mobile tracking line alignment */}
          <div className="relative mx-auto max-w-3xl border-l border-white/[0.06] pl-5 ml-2 md:ml-auto">
            {[
              { phase: "Phase 01", title: "Domain Diagnostics", icon: Activity, desc: "We study your systems parameters, threat models, compliance constraints, and scaling goals to build a precision architecture blueprint." },
              { phase: "Phase 02", title: "Cross-Division Setup", icon: GitMerge, desc: "Fast Group coordinates specialized engineering and operations cells instantly, deploying infrastructure environments synchronized perfectly." },
              { phase: "Phase 03", title: "Secure Hand-off", icon: ShieldCheck, desc: "Complete rigorous security verification testing followed by structured integration setups directly with your in-house units." },
              { phase: "Phase 04", title: "Velocity Scaling", icon: Rocket, desc: "Live operational oversight fueled by automated performance adjustments, keeping optimization peaks consistent indefinitely." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                className="relative mb-8 last:mb-0 pl-4 sm:pl-8 sm:mb-12"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                {/* Visual Bullet Connector pin node points */}
                <div className="absolute -left-[26px] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20 sm:-left-[30px] sm:h-3 sm:w-3" />
                
                <div className="flex flex-col gap-0.5 mb-1.5 sm:flex-row sm:items-center sm:gap-2">
                  <span className="font-mono text-[10px] font-semibold text-emerald-400 tracking-wider uppercase">{step.phase}</span>
                  <span className="hidden sm:inline text-slate-600">•</span>
                  <h3 className="text-sm font-medium text-white flex items-center gap-1.5 sm:text-base">
                    <step.icon className="h-3.5 w-3.5 text-slate-400" />
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs font-light leading-relaxed text-slate-400 max-w-2xl">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}