import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Users, CheckCircle, Rocket } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DepartmentCard } from '@/components/DepartmentCard';
import { departments } from '@/lib/data/opportunities';

export const metadata: Metadata = {
  title: 'Opportunities | Fast Group',
  description: 'Explore departments and career opportunities across Fast Group divisions, and learn how to enroll.',
};

const steps = [
  { title: 'Choose a department', detail: 'Browse departments below and find the one that matches your skills.', icon: FileText },
  { title: 'Submit your application', detail: 'Fill out the enrollment form with your details and area of interest.', icon: Users },
  { title: 'Interview & assessment', detail: 'Meet the team and complete a short skills assessment.', icon: CheckCircle },
  { title: 'Onboard & start', detail: 'Get matched with a division and begin onboarding.', icon: Rocket },
];

export default function OpportunitiesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-950 text-slate-100">
      <Header />

      <section className="relative overflow-hidden border-b border-white/[0.04] pb-16 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900 to-brand-950" />
          <div className="absolute left-1/3 top-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />
          <div className="absolute right-1/4 top-20 h-[300px] w-[300px] rounded-full bg-amber-400/10 blur-[100px]" />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            Careers
          </span>
          <h1 className="text-balance mx-auto mb-5 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Build Your Career Across 10 Divisions
          </h1>
          <p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-slate-400 sm:text-base">
            Fast Group is hiring across engineering, design, marketing, operations, and more.
            Find the department that fits and apply in minutes.
          </p>
        </div>
      </section>

      {/* How to enroll */}
      <section className="border-b border-white/[0.04] py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-10 text-center font-display text-2xl font-bold text-white sm:text-3xl">
            How to Enroll
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl border border-white/[0.06] bg-brand-900/50 p-6">
                <span className="absolute right-5 top-5 font-display text-3xl font-bold text-white/[0.06]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <step.icon className="mb-4 h-6 w-6 text-cyan-400" strokeWidth={1.8} />
                <h3 className="mb-2 font-semibold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-10 text-center font-display text-2xl font-bold text-white sm:text-3xl">
            Open Departments
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept, idx) => (
              <DepartmentCard key={dept.id} department={dept} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.04] bg-brand-900/40 py-16 text-center sm:py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-4 font-display text-2xl font-bold text-white sm:text-3xl">
            Don&apos;t see the right fit yet?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-sm text-slate-400 sm:text-base">
            Send us your resume anyway. We&apos;re growing across all 10 divisions.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Submit General Application
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
