'use client'; // Required for Framer Motion transitions

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DepartmentCard } from '@/components/DepartmentCard';
import { departments } from '@/lib/data/opportunities';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Users, CheckCircle, Rocket, 
  ChevronDown, Heart, Shield, GraduationCap, 
  Sparkles 
} from 'lucide-react';

const steps = [
  { title: 'Choose a department', detail: 'Browse departments below and find the one that matches your skills.', icon: FileText },
  { title: 'Submit your application', detail: 'Fill out the enrollment form with your details and area of interest.', icon: Users },
  { title: 'Interview & assessment', detail: 'Meet the team and complete a short skills assessment.', icon: CheckCircle },
  { title: 'Onboard & start', detail: 'Get matched with a division and begin onboarding.', icon: Rocket },
];

const perks = [
  { icon: Shield, title: "Comprehensive Cover", desc: "Top-tier health insurance, mental wellness support packages, and retirement choices." },
  { icon: GraduationCap, title: "L&D Stipends", desc: "Annual budget dedicated explicitly to courses, tech bootcamps, and global conventions." },
  { icon: Heart, title: "Fluid Autonomy", desc: "Asynchronous setups with remote options built entirely around deep focus parameters." },
  { icon: Sparkles, title: "Division Rotation", desc: "Opportunities to pivot cross-functionally and try new stacks across our 10 divisions." },
];

const faqs = [
  { q: "Can I apply to multiple departments simultaneously?", a: "Yes. Our recruitment engine cross-references background skill profiles. If your engineering layer matches multiple divisions, we route updates accordingly." },
  { q: "What does the skills assessment phase look like?", a: "No generic puzzle tests. You'll tackle a localized, short real-world simulation scenario closely mimicking day-to-day challenges faced inside our tech stacks." },
  { q: "Do you offer remote or hybrid structures?", a: "Completely. Across all 10 divisions, our processes run natively in asynchronous, remote-first environments engineered for high output without constant micro-meetings." }
];

// Structural layout orchestration variations
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function OpportunitiesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-950 text-slate-100">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden border-b border-white/[0.04] pb-12 pt-28 sm:pb-16 sm:pt-40">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900 to-brand-950" />
          <div className="absolute left-1/3 top-0 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[100px] sm:h-[360px] sm:w-[360px] sm:blur-[120px]" />
          <div className="absolute right-1/4 top-20 h-[220px] w-[220px] rounded-full bg-amber-400/10 blur-[80px] sm:h-[300px] sm:w-[300px] sm:blur-[100px]" />
        </div>
        
        <motion.div 
          className="container relative z-10 mx-auto px-4 sm:px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-3 inline-block text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-400 sm:mb-4 sm:text-xs">
            Careers
          </span>
          <h1 className="text-balance mx-auto mb-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:mb-5 sm:text-5xl md:text-6xl">
            Build Your Career Across 10 Divisions
          </h1>
          <p className="mx-auto max-w-2xl text-xs font-light leading-relaxed text-slate-400 sm:text-base">
            Fast Group is hiring across engineering, design, marketing, operations, and more.
            Find the department that fits and apply in minutes.
          </p>
        </motion.div>
      </section>

      {/* --- HOW TO ENROLL (OPTIMIZED PROCESS GRID) --- */}
      <section className="border-b border-white/[0.04] py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 
            className="mb-8 text-center font-display text-xl font-bold text-white sm:mb-12 sm:text-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How to Enroll
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {steps.map((step, i) => (
              <motion.div 
                key={step.title} 
                variants={fadeInUp}
                className="relative rounded-xl border border-white/[0.06] bg-brand-900/30 p-5 sm:p-6 sm:rounded-2xl"
              >
                <span className="absolute right-4 top-4 font-display text-2xl font-bold text-white/[0.05] sm:right-5 sm:top-5 sm:text-3xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <step.icon className="mb-3 h-5 w-5 text-cyan-400 sm:mb-4 sm:h-6 sm:w-6" strokeWidth={1.8} />
                <h3 className="mb-1.5 text-sm font-semibold text-white sm:text-base">{step.title}</h3>
                <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">{step.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- OPEN DEPARTMENTS MATRIX --- */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 
            className="mb-8 text-center font-display text-xl font-bold text-white sm:mb-12 sm:text-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Open Departments
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {departments.map((dept, idx) => (
              <motion.div key={dept.id} variants={fadeInUp}>
                <DepartmentCard department={dept} index={idx} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- NEW CONTENT SECTION 1: PERKS & BENEFITS --- */}
      <section className="border-t border-white/[0.04] bg-brand-900/20 py-12 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="mx-auto mb-10 max-w-2xl text-center sm:mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-xl font-bold tracking-tight text-white sm:text-3xl">
              Engineered for Modern Creators
            </h2>
            <p className="mt-2 text-xs text-slate-400 sm:text-sm">
              We design environments that favor output over bureaucracy. Here is what we offer our global teammates.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {perks.map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="rounded-xl border border-white/[0.03] bg-white/[0.01] p-5 sm:p-6"
              >
                <div className="mb-3.5 inline-flex rounded-lg bg-violet-500/10 p-2.5 text-violet-400">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1 text-sm font-medium text-white sm:text-base">{item.title}</h3>
                <p className="text-xs leading-relaxed text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- NEW CONTENT SECTION 2: RESPONSIVE INTERACTIVE FAQs --- */}
      <section className="border-t border-white/[0.04] py-12 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 
            className="mb-8 text-center font-display text-xl font-bold text-white sm:mb-12 sm:text-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div 
                  key={idx}
                  className="overflow-hidden rounded-xl border border-white/[0.04] bg-brand-900/10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-4 text-left transition-colors duration-200 hover:bg-white/[0.01]"
                  >
                    <span className="pr-4 text-xs font-medium text-white sm:text-sm">{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-violet-400' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="border-t border-white/[0.02] p-4 text-xs font-light leading-relaxed text-slate-400 sm:text-sm bg-brand-950/40">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- RE-OPTIMIZED CALL TO ACTION --- */}
      <section className="border-t border-white/[0.04] bg-brand-900/40 py-12 text-center sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="mb-3 font-display text-xl font-bold text-white sm:mb-4 sm:text-3xl">
            Don&apos;t see the right fit yet?
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-xs text-slate-400 sm:mb-8 sm:text-base">
            Send us your resume anyway. We&apos;re growing across all 10 divisions.
          </p>
          <Link
            href="/contact"
            className="inline-block w-full rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3.5 text-xs font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 sm:w-auto sm:text-sm"
          >
            Submit General Application
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}